<template>
  <I-date v-model="dateVal" disabled placeholder="请选择日期"> </I-date>
</template>

<script setup>
  import { ref } from 'vue';
  const dateVal = ref('');
</script>
