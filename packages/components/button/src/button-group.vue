<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  const el = ref();
  onMounted(() => {
    let children = el.value.children;
    for (let i = 0; i < children.length; i++) {
      console.assert(children[i].tagName === 'BUTTON', '必须子节点是button');
    }
  });

  defineOptions({
    name: 'IButtonGroup',
  });
</script>

<template>
  <div ref="el" class="I-btton-group">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  @import './button-group.scss';
</style>
