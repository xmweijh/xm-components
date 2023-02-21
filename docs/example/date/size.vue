<template>
  <div class="mb-4">
    <I-date v-model="dateVal" placeholder="请选择日期"> </I-date>
    <I-date v-model="dateVal" placeholder="请选择日期" size="small"> </I-date>
    <I-date v-model="dateVal" placeholder="请选择日期" size="mini"> </I-date>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const dateVal = ref('');
</script>
