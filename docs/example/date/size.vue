<script setup>
  import { ref } from 'vue';
  const dateVal = ref('');
</script>

<template>
  <I-date v-model="dateVal" placeholder="请选择日期"> </I-date>
  <I-date v-model="dateVal" placeholder="请选择日期" size="small"> </I-date>
  <I-date v-model="dateVal" placeholder="请选择日期" size="mini"> </I-date>
</template>
