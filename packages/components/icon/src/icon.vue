<script lang="ts" setup>
  import type { CSSProperties } from 'vue';
  import { computed } from 'vue';
  import { IconProps, createNamespace, getIcon } from './icon';
  const props = defineProps(IconProps);
  defineOptions({
    name: 'IIcon',
  });
  const { n } = createNamespace('icon');
  const icon = computed(() => getIcon(props.name));
  const style = computed<CSSProperties>(() => {
    if (!props.size && !props.color) return {};

    return {
      fontSize: props.size,
      '--color': props.color,
    };
  });
</script>

<template>
  <i :class="[n()]" :style="style">
    <use v-html="icon"></use>
    <slot />
  </i>
</template>

<style lang="less">
  @import './icon.less';
</style>
