<template>
  <i-button @click="open('info')">信息</i-button>
  <i-button type="success" @click="open('success')">成功</i-button>
  <i-button type="warning" @click="open('warning')">警告</i-button>
  <i-button type="error" @click="open('error')">错误</i-button>
  <i-button type="primary" @click="open('loading')">加载中</i-button>
</template>

<script setup lang="ts">
  import { IMessage } from '@xm-components/index';

  const open = (type: string) => {
    IMessage[type]('This is a message');
  };
</script>
