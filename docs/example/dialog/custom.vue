<template>
  <I-button @click="visible = true"> 打开自定义头部对话框 </I-button>
  <I-dialog v-if="visible" v-model="visible" :show-close="false" :before-close="handleClose">
    <template #header="{ close }">
      <div class="my-header">
        <h4>自定义头部</h4>
        <I-button type="danger" @click="close">
          <I-icon class="I-icon--left" name="circle-close-filled"></I-icon>
          关闭
        </I-button>
      </div>
    </template>
    内容部分
    <template #footer>
      <span class="dialog-footer">
        <I-button @click="visible = false">取消</I-button>
        <I-button type="primary" @click="visible = false"> 确认 </I-button>
      </span>
    </template>
  </I-dialog>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const visible = ref(false);
  const handleClose = (done: () => void) => {
    // dialogVisible.value = false
    confirm('确认关闭？') && done();
  };
</script>

<style scoped>
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
