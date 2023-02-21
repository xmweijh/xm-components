<!-- html -->
<template>
  <div class="mb-4">
    <I-date v-model="dateVal" placeholder="请选择日期" custom-active-color="#09b63d"> </I-date>
    <I-date v-model="dateVal" placeholder="请选择日期" custom-active-color="#f57b29"> </I-date>
  </div>
</template>

<!-- js -->
<script setup>
  import { ref } from 'vue';
  const dateVal = ref('');
</script>
