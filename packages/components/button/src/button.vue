<script lang="ts" setup>
  import { computed } from 'vue';
  import { createNamespace } from '../../../utils';
  import IIcon from '../../icon';
  import { ButtonProps } from './button';

  const props = defineProps(ButtonProps);
  const style = computed(() => {
    // 若传了颜色color属性则以其为准
    if (props.color) {
      if (props.plain)
        return {
          '--I-button-bg-color': 'var(--I-color-white)',
          '--I-button-text-color': props.color,
          '--I-button-border-color': props.color,
        };
      if (props.text)
        return {
          '--I-button-text-color': props.color,
        };
      return {
        '--I-button-bg-color': props.color,
        '--I-button-text-color': 'var(--I-color-white)',
        '--I-button-border-color': props.color,
      };
    }
    return {};
  });

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
      circle && 'is-circle',
      iconPosition && `icon-${iconPosition}`,
    ]"
    :style="{ color: textColor, ...style }"
    :disabled="disabled"
  >
    <IIcon v-if="!!icon && !loading" :name="icon" class="icon" />
    <IIcon v-if="loading" name="loading" class="icon is-loading" />
    <div v-if="!circle" :class="[createBEM('content')]">
      <slot />
    </div>
  </button>
</template>

<style lang="scss">
  @import './button.scss';
</style>
