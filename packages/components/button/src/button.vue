<script lang="ts" setup>
  import { computed } from 'vue';
  import { createNamespace } from '../../../utils';
  import { ButtonProps } from './button';

  const props = defineProps(ButtonProps);
  const style = computed(() =>
    // 若传了颜色color属性则以其为准
    props.color
      ? {
          '--I-button-bg-color': props.color,
          '--I-button-text-color': 'var(--I-color-white)',
          '--I-button-border-color': props.color,
        }
      : {},
  );
  const { createBEM } = createNamespace('button');

  defineOptions({
    name: 'IButton',
  });
</script>

<template>
  <button
    :class="[
      createBEM(),
      type && createBEM(`--${type}`),
      size && createBEM(`--${size}`),
      plain && 'is-plain',
      round && 'is-round',
      circle && 'is-circle',
      disabled && 'is-disabled',
      text && 'is-text',
      bg && 'is-bg',
    ]"
    :style="{ color: textColor, ...style }"
    :disabled="disabled"
  >
    <div :class="[createBEM('content')]">
      <slot />
    </div>
  </button>
</template>

<style lang="scss">
  @import './button.scss';
</style>
