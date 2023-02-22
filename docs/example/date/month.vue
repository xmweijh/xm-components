<script setup>
  import { ref } from 'vue';
  const dateVal = ref('');
</script>

<template>
  <I-date v-model="dateVal" placeholder="请选择日期" type="month"> </I-date>
</template>
