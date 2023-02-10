<script lang="ts" setup>
  import { onMounted, onBeforeUnmount, watch } from 'vue';
  import { createNamespace } from '../../../utils';
  import IIcon from '../../icon';
  import { DialogProps } from './dialog';

  const props = defineProps(DialogProps);
  const emit = defineEmits(['update:modelValue']);
  const { createBEM } = createNamespace('dialog');

  // 通过modelValue从外部控制对话框显示情况
  // modelValue 和 onUpdate:modelValue是v-model的指令扩展
  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        doOpen();
      }
      // else {
      //   doClose();
      // }
    },
  );

  const doOpen = () => {
    setTimeout(() => {
      emit('update:modelValue', true);
    }, props.openDelay);
  };

  const doClose = () => {
    const hide = () => {
      setTimeout(() => {
        emit('update:modelValue', false);
      }, props.closeDelay);
    };
    if (props.beforeClose) {
      return props.beforeClose(() => hide());
    }
    hide();
  };

  // 点击模态层是否关闭对话框
  const onModalClick = () => {
    if (props.closeOnClickModal) doClose();
  };

  // 当按下esc按键关闭对话框
  const onPressEscape = (e: KeyboardEvent) => {
    if (e.keyCode === 27) doClose();
  };

  // 组件渲染好之后添加监听按键事件
  onMounted(() => {
    if (props.closeOnPressEscape) {
      window.addEventListener('keydown', onPressEscape);
    }
  });

  // 组件摧毁后删除时间，防止内存泄漏
  onBeforeUnmount(() => {
    if (props.closeOnPressEscape) {
      window.removeEventListener('keydown', onPressEscape);
    }
  });

  defineOptions({
    name: ' IDialog',
  });
</script>

<template>
  <!-- `<Teleport>` 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。 -->
  <Teleport to="body">
    <Transition name="fade">
      <!-- 全屏模态层 -->
      <!-- 为防止用户在外部忘了写v-if也能实现基本功能 在此处添加v-if -->
      <div v-if="modelValue" class="maskClass" @click="onModalClick">
        <!-- 对话框整体 -->
        <!-- 单击事件将停止传递, 防止触发模态层单击事件 -->
        <div :class="[createBEM()]" :style="{ top, width }" @click.stop>
          <!-- 对话框头部 -->
          <div :class="[createBEM('header')]" :style="{ 'text-align': center ? 'center' : '' }">
            <slot name="header" :close="doClose">
              <span :class="[createBEM('title')]">{{ title }}</span>
              <button v-if="showClose" :class="[createBEM('headerbtn')]" @click="doClose">
                <IIcon name="close"></IIcon>
              </button>
            </slot>
          </div>
          <!-- 对话框内容 -->
          <div :class="[createBEM('body')]">
            <slot />
          </div>
          <!-- 对话框底部 -->
          <div
            v-if="$slots.footer"
            :class="[createBEM('footer')]"
            :style="{ 'text-align': center ? 'center' : '' }"
          >
            <slot name="footer" :close="doClose"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
  @import './dialog.scss';
</style>
