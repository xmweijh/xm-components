<template>
  <I-tooltip :disabled="disabled" content="点击关闭提示框" placement="bottom">
    <I-button @click="disabled = !disabled"
      >点击 {{ disabled ? '开启' : '关闭' }} 提示功能</I-button
    >
  </I-tooltip>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const disabled = ref(false);
</script>

<style>
  .tooltip-fade-enter-active {
    transition: all 0.3s ease;
  }
  .tooltip-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .tooltip-fade-enter-from,
  .tooltip-fade-leave-active {
    margin-left: 20px;
    opacity: 0;
  }
</style>
