<script setup lang="ts">
  const props = defineProps({
    data: {
      type: Array,
      default: () => [],
    },
    leftOrRight: {
      type: String,
      validator(value) {
        return ['left', 'right'].includes(value);
      },
    },
  });

  const emit = defineEmits(['checkboxClick', 'dragItem']);

  const checkboxClick = (checked, LeftOrRight, item) => {
    emit('checkboxClick', checked, LeftOrRight, item);
  };

  const dragItem = (item) => {
    emit('dragItem', item);
  };
</script>

<template>
  <div
    v-for="item of props.data"
    :key="item.id"
    :class="['list-item', item.disabled ? 'disabled' : '']"
    :draggable="!item.disabled"
    @dragstart="dragItem(item)"
  >
    <input
      :id="'__checkbox__' + item.id"
      type="checkbox"
      :disabled="item.disabled"
      @click="checkboxClick($event.target.checked, props.leftOrRight, item)"
    />
    <label :for="'__checkbox__' + item.id">{{ item.phone_name }}</label>
  </div>
</template>

<style lang="scss" scoped>
  .list-item {
    display: flex;
    align-items: center;
    height: 30px;
    font-size: 12px;
    color: #666;

    &.disabled {
      opacity: 0.6;
    }
  }
</style>
