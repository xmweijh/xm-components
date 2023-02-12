<script lang="ts" setup>
  import { ref } from 'vue';

  const dialogVisible = ref(false);
</script>

<template>
  <I-button text @click="dialogVisible = true">打开对话框</I-button>

  <I-dialog v-if="dialogVisible" v-model="dialogVisible" title="标题" width="30%" draggable>
    <span>这是一个可拖拽的对话框</span>
    <template #footer>
      <span class="dialog-footer">
        <I-button @click="dialogVisible = false">取消</I-button>
        <I-button type="primary" @click="dialogVisible = false">确认</I-button>
      </span>
    </template>
  </I-dialog>
</template>
