<template>
  <I-button text @click="handleClick"> click to open the Dialog </I-button>

  <I-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <I-button @click="dialogVisible = false">Cancel</I-button>
        <I-button type="primary" @click="dialogVisible = false"> Confirm </I-button>
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
    done();
  };
</script>

<style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
</style>
