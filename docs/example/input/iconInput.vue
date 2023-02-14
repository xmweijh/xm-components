<script lang="ts" setup>
  import { ref } from 'vue';
  const input1 = ref('');
  const input2 = ref('');
</script>

<template>
  <i-input v-model="input1" style="margin-right: 10px" prefix-icon="1" icon="edit"></i-input>
  <i-input v-model="input2" suffix-icon="1" icon="edit"></i-input>
</template>
