<script lang="ts" setup>
  import { ref } from 'vue';
  const switchVal = ref<boolean>(true);
</script>

<template>
  <I-switch v-model="switchVal" disabled></I-switch>
</template>
