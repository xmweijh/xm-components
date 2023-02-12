<script lang="ts" setup>
  import { ref } from 'vue';

  const centerDialogVisible = ref(false);
</script>

<template>
  <I-button text @click="centerDialogVisible = true"> 打开对话框 </I-button>

  <I-dialog
    v-if="centerDialogVisible"
    v-model="centerDialogVisible"
    title="Warning"
    width="30%"
    center
  >
    <span> 默认情况下，内容不会居中对齐 </span>
    <template #footer>
      <span class="dialog-footer">
        <I-button @click="centerDialogVisible = false">取消</I-button>
        <I-button type="primary" @click="centerDialogVisible = false"> 确认 </I-button>
      </span>
    </template>
  </I-dialog>
</template>

<style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
</style>
