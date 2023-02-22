<script setup lang="ts">
  import { reactive } from 'vue';
  const state = reactive({
    activeColors: {
      background: '#014B88',
      hoverBackground: '#2684e1',
      borderColor: '#014B88',
      hoverBorderColor: '#005ba6',
      color: '#fff',
      hoverColor: '#fff',
    },
  });
  const { activeColors } = state;
</script>

<template>
  <I-pagination
    :total="200"
    :current="1"
    :page-size="5"
    :active-colors="activeColors"
  ></I-pagination>
</template>
