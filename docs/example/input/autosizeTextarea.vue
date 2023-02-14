<script lang="ts" setup>
  import { ref } from 'vue';
  const input = ref('');
  const textarea2 = ref('');
</script>

<template>
  <i-input
    v-model="input"
    style="margin-bottom: 10px"
    placeholder="请输入内容"
    type="textarea"
    autosize
  />
  <i-input
    v-model="textarea2"
    :autosize="{ minRows: 2, maxRows: 4 }"
    type="textarea"
    placeholder="请输入内容"
  />
</template>
