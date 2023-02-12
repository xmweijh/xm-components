<script lang="ts" setup>
  import { ref } from 'vue';
  import { DialogProps } from './checkbox';
  const props = defineProps(DialogProps);
  const emit = defineEmits(['update:modelValue', 'change']);
  const checkOptions = ref(props.options || []);
  // 根据传入的 modelValue 来判断是否选中；
  checkOptions.value.forEach((item: { [key: string]: any }) => {
    item.checked = false;
    props.modelValue.forEach((item1: any) => {
      if (item[props.valueFiled] === item1) {
        item.checked = true;
      }
    });
  });
  // 定义了 checkChange 方法，用于处理多选框的选中状态变化。
  const checkChange = (item: { [key: string]: any }, index: number) => {
    let checkData: any[] = [];
    if (!item.disabled) {
      item.checked = !item.checked;
    }
    checkOptions.value.forEach((item: { [key: string]: any }, _index: number) => {
      if (item.checked) {
        checkData.push(item[props.valueFiled]);
      }
    });
    emit('update:modelValue', checkData);
    emit('change', { value: checkData, index: index });
  };
</script>

<template>
  <div :class="[`mzl-checkbox-${size}`, customClass]">
    <!-- 每个复选框的勾选和取消勾选 -->
    <label
      v-for="(item, index) in checkOptions"
      :key="index"
      class="mzl-checkbox-label"
      :class="[
        { 'mzl-checkbox-label-active': item.checked },
        item.checked
          ? item.disabled
            ? 'mzl-checkbox-label-active-disabled'
            : ''
          : item.disabled
          ? 'mzl-checkbox-label-disabled'
          : '',
      ]"
      :style="{
        display: inline ? 'inline-block' : 'table',
        'margin-bottom': inline ? '0' : size == 'small' ? '8px' : size == 'mini' ? '6px' : '10px',
      }"
      @click="checkChange(item, index)"
    >
      <!-- 渲染复选框的外框 -->
      <span
        class="mzl-checkbox-selectbox"
        :style="{
          'border-color':
            customColor == '' ? '' : item.disabled ? '' : item.checked ? customColor : '',
          background: customColor == '' ? '' : item.disabled ? '' : item.checked ? customColor : '',
        }"
      ></span>
      <!-- 渲染选项的文本内容：labelFiled -->
      <span
        :style="{
          color: customColor == '' ? '' : item.disabled ? '' : item.checked ? customColor : '',
        }"
        >{{ item[labelFiled] }}</span
      >
    </label>
  </div>
</template>

<style lang="scss">
  @import './checkbox.scss';
</style>
