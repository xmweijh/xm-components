<script lang="ts" setup>
  import { computed } from 'vue';
  import { createNamespace } from '../../../utils';
  import { LayoutProps } from './layout';
  const props = defineProps(LayoutProps);

  const width = computed(() =>
    props.span <= 24 ? (props.span % 1 == 0 ? (100 / 24) * props.span + '%' : '') : '',
  );

  const offset = computed(() =>
    props.offset <= 24 ? (props.offset % 1 == 0 ? (100 / 24) * props.offset + '%' : '') : '',
  );

  const { createBEM } = createNamespace('layout');
  defineOptions({
    name: 'ILayout',
  });
</script>

<template>
  <div :class="[createBEM()]">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .I-layout {
    --I-layout--width: v-bind(width);
    --I-layout--offset: v-bind(offset);
  }
  @import './layout.scss';
</style>
