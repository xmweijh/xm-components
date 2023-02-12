<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { createNamespace } from '../../../utils';
  import IIcon from '../../icon';
  import type { MessageType } from './message';

  const props = withDefaults(
    defineProps<{
      type?: MessageType;
      duration?: number;
      content: string;
    }>(),
    {
      type: 'info',
      duration: 3000,
      content: '',
    },
  );
  const iconMap: any = {
    info: 'info-filled',
    success: 'circle-check-filled',
    warning: 'warning-filled',
    error: 'circle-close-filled',
    loading: 'loading',
  };

  const { createBEM } = createNamespace('message');
  const visible = ref(false);

  // 定义一个名为 `setVisible` 的函数，用于控制消息框的显示和隐藏
  const setVisible = (isVisible: boolean) => {
    visible.value = isVisible;
  };

  onMounted(() => {
    if (props.duration !== 0) {
      setTimeout(() => {
        setVisible(false);
      }, props.duration);
    }
  });

  const afterLeaveFn = ref<() => void>();

  // 定义一个名为 `setAfterLeaveFn` 的函数，用于在消息框消失后执行自定义的回调函数
  const setAfterLeaveFn = (fn: () => void) => {
    afterLeaveFn.value = fn;
  };

  // 定义一个名为 `onAfterLeave` 的函数，用于在消息框消失后执行 `afterLeaveFn` 中保存的回调函数
  const onAfterLeave = () => {
    // 执行 `afterLeaveFn` 中保存的回调函数（如果存在）
    afterLeaveFn.value?.();
  };

  // 通过 `defineExpose` 函数暴露 `setVisible` 和 `setAfterLeaveFn` 两个函数给组件的使用者
  defineExpose({
    setVisible,
    setAfterLeaveFn,
  });

  defineOptions({
    name: 'IMessage',
  });
</script>

<template>
  <transition name="message-fade" @after-leave="onAfterLeave">
    <div v-if="visible" :class="[createBEM(), createBEM('--' + type)]">
      <IIcon :name="iconMap[type]" :class="type === 'loading' && 'is-loading'"></IIcon>
      <div :class="[createBEM('content')]">
        <slot>{{ content }}</slot>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
  @import './message.scss';
</style>
