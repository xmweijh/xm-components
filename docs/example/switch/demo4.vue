<script lang="ts" setup>
  import { ref } from 'vue';
  const switchVal = ref<boolean>(true);
  const switchVal1 = ref<boolean>(true);
</script>

<template>
  <I-switch v-model="switchVal" close-text="关闭" active-text="开启"></I-switch>
  <I-switch v-model="switchVal1" close-text="关闭" active-text="开启" text-align="right"></I-switch>
</template>
