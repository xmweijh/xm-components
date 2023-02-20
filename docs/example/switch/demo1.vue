<script lang="ts" setup>
  import { ref } from 'vue';
  const switchVal = ref<boolean>(false);
  const switchChange = (e: MouseEvent) => {
    console.log(e);
  };
</script>

<template>
  <I-switch v-model="switchVal" @change="switchChange"></I-switch>
</template>
