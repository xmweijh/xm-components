<script lang="ts" setup>
  import { ref } from 'vue';
  const input1 = ref('');
  const input2 = ref('');
  const input3 = ref('');
</script>

<template>
  <i-input v-model="input1" class="mb-4" placeholder="请输入内容" size="mini" />
  <i-input v-model="input2" class="mb-4" placeholder="请输入内容" size="small" />
  <i-input v-model="input3" placeholder="请输入内容" size="medium" />
</template>

<style>
  .mb-4 {
    margin-right: 5px;
  }
</style>
