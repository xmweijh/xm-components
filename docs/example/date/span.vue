<template>
  <I-date v-model="dateVal" placeholder="请选择日期" :start-date="startDate" :end-date="endDate">
  </I-date>
</template>

<script setup>
  import { ref, computed } from 'vue';
  const dateVal = ref('');
  const startDate = computed(() => {
    let date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 10).toLocaleDateString();
  });
  const endDate = computed(() => {
    let date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 10).toLocaleDateString();
  });
</script>
