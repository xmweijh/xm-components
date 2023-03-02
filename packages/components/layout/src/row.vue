<script lang="ts" setup>
  import { createNamespace } from '../../../utils';
  import { RowProps } from './row';
  defineProps(RowProps);

  const { createBEM } = createNamespace('row');
  defineOptions({
    name: 'IRow',
  });
</script>

<template>
  <div :class="[createBEM()]">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  @import './row.scss';
</style>
