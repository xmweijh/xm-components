<script lang="ts" setup>
  import { ref } from 'vue';

  const outerVisible = ref(false);
  const innerVisible = ref(false);
</script>

<template>
  <I-button text @click="outerVisible = true">打开对话框</I-button>

  <I-dialog v-if="outerVisible" v-model="outerVisible" title="Outer Dialog">
    <I-dialog v-if="innerVisible" v-model="innerVisible" width="30%" title="Inner Dialog" />
    内容部分
    <template #footer>
      <div class="dialog-footer">
        <I-button @click="outerVisible = false">Cancel</I-button>
        <I-button type="primary" @click="innerVisible = true">打开内部对话框</I-button>
      </div>
    </template>
  </I-dialog>
</template>

<style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
</style>
