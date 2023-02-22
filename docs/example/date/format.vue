<script setup>
  import { ref } from 'vue';
  const dateVal = ref('');
</script>

<template>
  <div class="mb-4">
    <I-date v-model="dateVal" placeholder="请选择日期" format="yyyy年MM月dd日"></I-date>
    <I-date v-model="dateVal" placeholder="请选择日期" format="yyyy/MM/dd"></I-date>
    <I-date v-model="dateVal" placeholder="请选择日期" format="yyyy-MM-dd"></I-date>
  </div>
</template>

<style>
  .mb-4 {
    margin-bottom: 20px;
  }
</style>
