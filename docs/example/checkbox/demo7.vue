<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  const checkboxVal = ref([]);
  const state = reactive({
    checkOptions: [
      { label: '中国', value: 'zhongguo' },
      { label: '英国', value: 'yingguo' },
      { label: '德国', value: 'deguo' },
      { label: '法国', value: 'faguo' },
    ],
  });
  const { checkOptions } = state;
</script>

<template>
  <div :inline="false">
    <I-checkbox v-model="checkboxVal" :options="checkOptions" custom-color="#09b63d"></I-checkbox>
    <I-checkbox v-model="checkboxVal" :options="checkOptions" custom-color="#25B0F8"></I-checkbox>
  </div>
</template>
