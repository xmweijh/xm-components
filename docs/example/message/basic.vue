<template>
  <i-button @click="open()">信息</i-button>
</template>

<script setup lang="ts">
  import { IMessage } from '@xm-components/index';

  const open = () => {
    IMessage({ duration: 1000, content: 'This is a message' });
  };
</script>
