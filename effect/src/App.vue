<template>
  <I-button type="text" @click="dialogVisible = true">Click to open Dialog </I-button>

  <I-dialog v-if="dialogVisible" v-model="dialogVisible" title="Tips" width="30%" draggable>
    <span>It's a draggable Dialog</span>
    <template #footer>
      <span class="dialog-footer">
        <I-button @click="dialogVisible = false">Cancel</I-button>
        <I-button type="primary" @click="dialogVisible = false">Confirm</I-button>
      </span>
    </template>
  </I-dialog>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const dialogVisible = ref(false);
</script>
