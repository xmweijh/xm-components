<script lang="ts" setup>
  import { createNamespace } from '../../../utils';
  import { CardProps } from './card';

  defineProps(CardProps);

  const { createBEM } = createNamespace('card');

  defineOptions({
    name: 'ICard',
  });
</script>

<template>
  <div :class="[createBEM(), `is-${shadow}-shadow`]">
    <div v-if="$slots.header || header" :class="createBEM('header')">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :class="createBEM('body')" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  @import './card.scss';
</style>
