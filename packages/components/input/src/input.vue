<script lang="ts" setup>
  import { computed, ref, useAttrs, shallowRef, watch, nextTick, useSlots } from 'vue';
  import IIcon from '../../icon';
  import { calcTextareaHeight } from './input';
  //withDefaults可以为props添加默认值等
  const inputProps = withDefaults(defineProps<InputProps>(), {
    modelValue: '',
    disabled: false,
    size: '',
    clearable: false,
    showPassword: false,
  });
  const inputEmits = defineEmits<InputEmits>();
  //组件命名
  defineOptions({
    name: 'k-input',
  });
  //绑定useAttrs实现props穿透
  const attrs = useAttrs();
  //组件接收的值类型
  interface InputProps {
    modelValue?: string | number;
    disabled?: boolean;
    size?: string;
    clearable?: boolean;
    showPassword?: boolean;
    prefixIcon?: string;
    suffixIcon?: string;
    autosize?: boolean | AutosizeObj;
    icon?: string;
  }

  //组件发送事件类型
  interface InputEmits {
    (e: 'update:modelValue', value: string): void;
  }
  //自适应高度
  interface AutosizeObj {
    minRows?: number;
    maxRows?: number;
  }

  const isClearAbled = ref(false);
  const changeInputVal = (event: Event) => {
    inputEmits('update:modelValue', (event.target as HTMLInputElement).value);
    //可清除clearable
    (event.target as HTMLInputElement).value
      ? (isClearAbled.value = true)
      : (isClearAbled.value = false);
  };

  //根据props更改类名
  const styleClass = computed(() => {
    return {
      'is-disabled': inputProps.disabled,
      [`k-input--${inputProps.size}`]: inputProps.size,
      // 复合文本输入框
      ['k-input-group k-input-prepend']: slots.prepend,
      ['k-input-group k-input-append']: slots.append,
    };
  });

  //清除input value
  const isEnter = ref(true);
  const clearValue = () => {
    inputEmits('update:modelValue', '');
  };

  //显示隐藏密码框 showPassword,//ref相当于原生操作dom的id
  const ipt = ref();
  Promise.resolve().then(() => {
    if (inputProps.showPassword) {
      console.log(ipt.value);
      ipt.value.type = 'password';
    }
  });
  const eyeIcon = ref('browse');
  const isShowEye = computed(() => {
    return inputProps.showPassword && inputProps.modelValue && !inputProps.clearable;
  });
  const changeType = () => {
    if (ipt.value.type === 'password') {
      eyeIcon.value = 'eye-close';
      ipt.value.type = attrs.type || 'text';
      return;
    }
    ipt.value.type = 'password';
    eyeIcon.value = 'browse';
  };

  //带Icon输入框
  const isShowSuffixIcon = computed(() => {
    return inputProps.suffixIcon && !inputProps.clearable && !inputProps.showPassword;
  });
  const isShowPrefixIcon = computed(() => {
    return inputProps.prefixIcon;
  });

  //自适应文本
  const textareaStyle = ref<any>();

  const textarea = shallowRef<HTMLTextAreaElement>();
  const isObject = (val) => val !== null && typeof val === 'object';

  watch(
    () => inputProps.modelValue,
    () => {
      if (attrs.type === 'textarea' && inputProps.autosize) {
        const minRows = isObject(inputProps.autosize)
          ? (inputProps.autosize as AutosizeObj).minRows
          : undefined;
        const maxRows = isObject(inputProps.autosize)
          ? (inputProps.autosize as AutosizeObj).maxRows
          : undefined;
        nextTick(() => {
          textareaStyle.value = calcTextareaHeight(textarea.value!, minRows, maxRows);
        });
      }
    },
    { immediate: true },
  );

  //复合输入框

  const slots = useSlots();
</script>

<template>
  <div v-if="attrs.type === 'textarea'" class="k-textarea">
    <textarea
      v-bind="attrs"
      ref="textarea"
      class="k-textarea__inner"
      :style="textareaStyle"
      :value="inputProps.modelValue"
      @input="changeInputVal"
    />
  </div>
  <div
    v-else
    class="k-input"
    :class="styleClass"
    @mouseenter="isEnter = true"
    @mouseleave="isEnter = false"
  >
    <div v-if="slots.prepend" class="k-input__prepend">
      <slot name="prepend"></slot>
    </div>
    <input
      ref="ipt"
      class="k-input__inner"
      :class="{ ['k-input--prefix']: isShowPrefixIcon }"
      :disabled="inputProps.disabled"
      :value="inputProps.modelValue"
      v-bind="attrs"
      @input="changeInputVal"
    />
    <div v-if="slots.append" class="k-input__append">
      <slot name="append"></slot>
    </div>
    <div v-if="inputProps.clearable && isClearAbled" class="k-input__suffix" @click="clearValue()">
      <IIcon :name="icon" class="icon" />
    </div>
    <div v-show="isShowEye" class="k-input__suffix">
      <IIcon :name="icon" class="icon" @click="changeType" />
    </div>

    <div v-if="isShowPrefixIcon" class="k-input__prefix">
      <IIcon :name="icon" class="icon" />
    </div>
    <div v-if="isShowSuffixIcon" class="k-input__suffix no-cursor">
      <IIcon :name="icon" class="icon" />
    </div>
  </div>
</template>

<style lang="less">
  @import './input.scss';
</style>
