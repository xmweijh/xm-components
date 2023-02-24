<script setup lang="ts">
  const props = defineProps({
    data: {
      type: Array,
      default: () => [],
    },
  });

  const emit = defineEmits(['selectChange']);

  const selectChange = (value) => {
    emit('selectChange', value);
  };
</script>

<template>
  <select @change="selectChange($event?.target?.value)">
    <option v-for="(title, index) of props.data" :key="index" :value="index">{{ title }}</option>
  </select>
</template>

<style lang="scss" scoped>
  select {
    border: 1px solid #ddd;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
  }
</style>
