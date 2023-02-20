<script lang="ts" setup>
  import { ref } from 'vue';
  const input = ref('');
</script>

<template>
  <i-input v-model="input" show-password icon="finished"></i-input>
</template>
