<script lang="ts" setup>
  import type { CSSProperties } from 'vue';
  import { computed } from 'vue';
  import { createNamespace, isUndefined, addUnit } from '../../../utils';
  import { IconProps, getIcon } from './icon';
  const props = defineProps(IconProps);
  const { createBEM } = createNamespace('icon');
  const icon = computed(() => getIcon(props.name));

  // 根据传入颜色和大小 更改样式
  const style = computed<CSSProperties>(() => {
    if (!props.size && !props.color) return {};
    return {
      fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
      '--color': props.color,
    };
  });
  defineOptions({
    name: 'IIcon',
  });
</script>

<template>
  <i :class="[createBEM()]" :style="style">
    <use v-html="icon"></use>
    <slot />
  </i>
</template>

<style lang="scss">
  @import './icon.scss';
</style>
