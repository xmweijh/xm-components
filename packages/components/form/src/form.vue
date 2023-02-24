<script lang="ts" setup>
  import { computed, provide, toRefs } from 'vue';
  import { castArray, isEqual } from 'lodash';
  import type { ValidateFieldsError } from 'async-validator';
  import { createNamespace } from '../../../utils';
  import { formContextKey } from './context';
  import type {
    FormContext,
    FormItemContext,
    FormValidateCallback,
    FormValidationResult,
    FormItemProp,
  } from './form';
  import { FormProps } from './form';

  const props = defineProps(FormProps);

  const { createBEM } = createNamespace('form');

  const classNames = computed(() => [
    createBEM(),
    createBEM(`label--${props.labelPosition}`),
    props.inline && createBEM('inline'),
  ]);

  const fields: FormItemContext[] = [];

  const addField: FormContext['addField'] = (field) => {
    fields.push(field);
  };

  const removeField: FormContext['removeField'] = (field) => {
    const findIndex = fields.indexOf(field);
    if (findIndex !== -1) {
      fields.splice(findIndex, 1);
    }
  };

  /**
   * 根据prop获取对应fields
   * @param props - 为空数组时，获取全部fields
   */
  const getFieldsByProps = (props: FormItemProp): FormItemContext[] => {
    if (fields.length === 0) return [];

    const propsArr = castArray(props);
    return propsArr.length
      ? fields.filter(
          (field) => field.prop?.value && propsArr.some((prop) => isEqual(field.prop?.value, prop)),
        )
      : fields;
  };

  // 验证具体的某些字段
  const validateField: (props: FormItemProp, callback?: FormValidateCallback) => Promise<void> = (
    props = [],
    callback,
  ) => {
    return new Promise((resolve, reject) => {
      // 分别用于记录验证结果、已验证的表单项数量和所有验证失败的表单项的错误信息。
      let valid = true;
      let count = 0;
      let validationErrors: ValidateFieldsError = {};

      const fields = getFieldsByProps(props);
      // 检查 fields 是否为空
      if (fields.length === 0) {
        // 函数调用的语法糖 ()。
        callback?.(valid);
        resolve();
      }

      //  循环遍历 fields 数组中的每一个表单项 并调用其 validate 方法进行验证
      // callback 参数用于返回验证结果和错误信息
      fields.forEach((field) => {
        field.validate('', (isValid, invalidFields) => {
          // 判断 isValid 是否为 false。如果是，将 invalidFields 合并到 validationErrors 对象中
          if (!isValid) {
            validationErrors = {
              ...validationErrors,
              ...invalidFields,
            };
            valid = false;
          }
          // 如果 count 的值等于 fields 数组的长度，说明所有表单项的验证结果已经返回
          if (++count === fields.length) {
            // 判断 valid 变量的值。如果为 true，全部通过验证
            if (valid) {
              callback?.(true);
              resolve();
            } else {
              callback?.(false, validationErrors);
              reject(validationErrors);
            }
          }
        });
      });
    });
  };

  const validate = async (callback?: FormValidateCallback): FormValidationResult =>
    validateField([], callback);

  const resetFields = (properties: FormItemProp = []) => {
    if (!props.model) {
      return;
    }

    const fields = getFieldsByProps(properties);
    fields.forEach((field) => field.resetField());
  };

  const context: FormContext = {
    ...toRefs(props),
    addField,
    removeField,
  };

  // 为其它子组件提供依赖，方便调用表单的方法，如校验方法。
  provide(formContextKey, context);

  defineExpose({
    validate,
    validateField,
    resetFields,
  });

  defineOptions({
    name: 'IForm',
  });
</script>

<template>
  <form :class="classNames" autocomplete="off">
    <slot></slot>
  </form>
</template>

<style lang="scss">
  @import './form.scss';
</style>
