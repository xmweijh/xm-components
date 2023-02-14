<!-- html -->
<script lang="ts" setup>
  import { ref } from 'vue';
  const switchVal = ref(false);
</script>

<!-- js -->
<template>
  <I-switch v-model="switchVal" :show-tips-text="true"></I-switch>
</template>
