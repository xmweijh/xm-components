<script lang="ts" setup>
  import { ref } from 'vue';
  const switchVal = ref<boolean>(false);
</script>

<template>
  <I-switch v-model="switchVal" :show-tips-text="true"></I-switch>
</template>
