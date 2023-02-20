<script setup lang="ts">
  import { ref } from 'vue';

  const input1 = ref('');
  const input2 = ref('');
</script>

<template>
  <div style="margin-bottom: 10px">
    <i-input v-model="input1" placeholder="Please input">
      <template #prepend>Http://</template>
    </i-input>
  </div>
  <div class="mt-4">
    <i-input v-model="input2" placeholder="Please input">
      <template #append>.com</template>
    </i-input>
  </div>
</template>
