<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  const checkboxVal = ref([0, 2]);
  const state = reactive({
    checkOptions: [
      { name: '小明', id: 0 },
      { name: '小李', id: 1 },
      { name: '小红', id: 2 },
      { name: '小王', id: 3 },
    ],
  });
  const { checkOptions } = state;
</script>

<template>
  <I-checkbox
    v-model="checkboxVal"
    :options="checkOptions"
    label-filed="name"
    value-filed="id"
  ></I-checkbox>
</template>
