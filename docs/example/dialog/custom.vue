<template>
  <I-button @click="visible = true"> Open Dialog with customized header </I-button>
  <I-dialog v-model="visible" :show-close="false">
    <template #header>
      <div class="my-header">
        <h4>This is a custom header!</h4>
        <I-button type="danger" @click="visible = false">
          <I-icon class="I-icon--left" name="circle-close-filled"></I-icon>
          Close
        </I-button>
      </div>
    </template>
    This is dialog content.
  </I-dialog>
</template>

<script setup>
  import { ref } from 'vue';

  const visible = ref(false);
</script>

<style scoped>
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
