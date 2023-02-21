<template>
  <I-date v-model="dateVal" placeholder="请选择日期" type="year"> </I-date>
</template>

<script setup>
  import { ref } from 'vue';
  const dateVal = ref('');
</script>
