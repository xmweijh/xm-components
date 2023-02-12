<template>
  <I-button text @click="handleClick"> 打开对话框 </I-button>

  <I-dialog
    v-if="dialogVisible"
    v-model="dialogVisible"
    title="标题"
    width="30%"
    :before-close="handleClose"
  >
    <span>消息内容</span>
    <template #footer>
      <span class="dialog-footer">
        <I-button @click="dialogVisible = false">取消</I-button>
        <I-button type="primary" @click="dialogVisible = false"> 确认 </I-button>
      </span>
    </template>
  </I-dialog>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const dialogVisible = ref(false);
  const handleClick = () => {
    dialogVisible.value = true;
  };

  const handleClose = (done: () => void) => {
    // dialogVisible.value = false
    confirm('确认关闭？') && done();
  };
</script>

<style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
</style>
