<script setup lang="ts">
  const buttons = [
    { type: '', text: 'plain' },
    { type: 'primary', text: 'primary' },
    { type: 'success', text: 'success' },
    { type: 'info', text: 'info' },
    { type: 'warning', text: 'warning' },
    { type: 'danger', text: 'danger' },
  ] as const;
</script>

<template>
  <p>基础文本按钮</p>
  <div class="flex justify-space-between mb-4 flex-wrap gap-4">
    <i-button v-for="button in buttons" :key="button.text" :type="button.type" text>{{
      button.text
    }}</i-button>
  </div>

  <p>有背景颜色的文本按钮</p>
  <div class="flex justify-space-between mb-4 flex-wrap gap-4">
    <i-button v-for="button in buttons" :key="button.text" :type="button.type" text bg>{{
      button.text
    }}</i-button>
  </div>

  <p>Disabled text button</p>
  <div class="flex justify-space-between flex-wrap gap-4">
    <i-button v-for="button in buttons" :key="button.text" :type="button.type" text disabled>{{
      button.text
    }}</i-button>
  </div>
</template>
