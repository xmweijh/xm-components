<script lang="ts" setup>
  import { computed } from 'vue';
  import { createNamespace } from '../../../utils';
  import { ColProps } from './col';
  const props = defineProps(ColProps);

  const width = computed(() =>
    props.span <= 24 ? (props.span % 1 == 0 ? (100 / 24) * props.span + '%' : '') : '',
  );

  const offset = computed(() =>
    props.offset <= 24 ? (props.offset % 1 == 0 ? (100 / 24) * props.offset + '%' : '') : '',
  );

  const { createBEM } = createNamespace('col');
  defineOptions({
    name: 'ICol',
  });
</script>

<template>
  <div :class="[createBEM()]">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .I-col {
    --I-col--width: v-bind(width);
    --I-col--offset: v-bind(offset);
  }
  @import './col.scss';
</style>
