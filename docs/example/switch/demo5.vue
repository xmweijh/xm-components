<script lang="ts" setup>
  import { ref } from 'vue';
  const switchVal = ref<boolean>(false);
</script>

<template>
  <I-switch
    v-model="switchVal"
    :show-tips-text="true"
    close-color="#ec3437"
    active-color="#09b63d"
  ></I-switch>
</template>
