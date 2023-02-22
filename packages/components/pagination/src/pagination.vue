<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { PagiantionProps } from './pagination';
  const props = defineProps(PagiantionProps);
  const emit = defineEmits(['update:current', 'change']);
  const currentPage = ref(props.current || 0);
  const marginLeft = ref(0);
  const colors = ref(props.activeColors);
  const border = ref(props.border);
  const prevChange = () => {
    if (!props.disabled) {
      if (currentPage.value > 1) {
        currentPage.value -= 1;
        emit('update:current', currentPage.value);
        emit('change', currentPage.value);
        // 当每页最大展示页数小于总页数的时候，需要实现指向选中页面的值，保持在页面导航中央
        if (Math.ceil(props.total / props.pageSize) > props.maxSize) {
          // 当前选中页数大于最大显示尺寸的一半，且剩余的页数大于最大显示尺寸的一半，就每次把左边框向左移动一个位置（实现保持中立）
          if (
            currentPage.value > props.maxSize / 2 &&
            Math.ceil(props.total / props.pageSize) - currentPage.value >= props.maxSize / 2
          ) {
            // 通过更该左边框的值，使得指向选中页面的值，保持在页面导航中央
            marginLeft.value += props.size == 'small' ? 32 : 36;
          }
        }
      }
    }
  };
  // return `{'--I-pagination-border': ${border.value ? '1px solid #d9d9d9' : 'none'};}`;
  const style = computed(() => ({
    '--I-pagination-border': border.value ? '1px solid #d9d9d9' : 'none',
  }));
  const nextChange = () => {
    if (!props.disabled) {
      if (currentPage.value < Math.ceil(props.total / props.pageSize)) {
        currentPage.value += 1;
        emit('update:current', currentPage.value);
        emit('change', currentPage.value);
        if (Math.ceil(props.total / props.pageSize) > props.maxSize) {
          if (
            currentPage.value > props.maxSize / 2 &&
            Math.ceil(props.total / props.pageSize) - currentPage.value >= props.maxSize / 2
          ) {
            marginLeft.value -= props.size == 'small' ? 32 : 36;
          }
        }
      }
    }
  };
  const change = (index: number) => {
    if (!props.disabled) {
      currentPage.value = index;
      emit('update:current', currentPage.value);
      emit('change', currentPage.value);
      if (Math.ceil(props.total / props.pageSize) > props.maxSize) {
        if (
          currentPage.value > props.maxSize / 2 &&
          Math.ceil(props.total / props.pageSize) - currentPage.value >= props.maxSize / 2
        ) {
          marginLeft.value =
            (currentPage.value - props.maxSize / 2) * -(props.size == 'small' ? 32 : 36);
        } else if (currentPage.value <= props.maxSize / 2) {
          marginLeft.value = 0;
        } else if (props.pageSize - currentPage.value < props.maxSize / 2) {
          marginLeft.value =
            (Math.ceil(props.total / props.pageSize) - props.maxSize) *
            -(props.size == 'small' ? 32 : 36);
        }
      }
    }
  };
  const topage = (e: MouseEvent) => {
    if (!props.disabled) {
      if (
        parseInt((e.target as HTMLInputElement).value) <= Math.ceil(props.total / props.pageSize)
      ) {
        currentPage.value = parseInt((e.target as HTMLInputElement).value);
        emit('update:current', currentPage.value);
        emit('change', currentPage.value);
        if (Math.ceil(props.total / props.pageSize) > props.maxSize) {
          if (
            currentPage.value > props.maxSize / 2 &&
            Math.ceil(props.total / props.pageSize) - currentPage.value >= props.maxSize / 2
          ) {
            marginLeft.value =
              (currentPage.value - props.maxSize / 2) * -(props.size == 'small' ? 32 : 36);
          } else if (currentPage.value <= props.maxSize / 2) {
            marginLeft.value = 0;
          } else if (props.pageSize - currentPage.value < props.maxSize / 2) {
            marginLeft.value =
              (Math.ceil(props.total / props.pageSize) - props.maxSize) *
              -(props.size == 'small' ? 32 : 36);
          }
        }
      } else {
        currentPage.value = Math.ceil(props.total / props.pageSize);
        emit('update:current', currentPage.value);
        emit('change', currentPage.value);
        if (Math.ceil(props.total / props.pageSize) > props.maxSize) {
          if (
            currentPage.value > props.maxSize / 2 &&
            Math.ceil(props.total / props.pageSize) - currentPage.value >= props.maxSize / 2
          ) {
            marginLeft.value =
              (currentPage.value - props.maxSize / 2) * -(props.size == 'small' ? 32 : 36);
          } else if (currentPage.value <= props.maxSize / 2) {
            marginLeft.value = 0;
          } else if (props.pageSize - currentPage.value < props.maxSize / 2) {
            marginLeft.value =
              (Math.ceil(props.total / props.pageSize) - props.maxSize) *
              -(props.size == 'small' ? 32 : 36);
          }
        }
      }
    }
  };
</script>

<template>
  <div
    :class="['i-pagination-box', `i-pagination-${size}`, { 'i-pagination-disabled': disabled }]"
    :style="{ 'text-align': align }"
  >
    <div class="i-pagination-inlinebox" :style="style">
      <div class="i-pagination-pagebox">
        <!-- 显示总数 -->
        <span v-if="showTotal" class="i-total">共 {{ total }} 条</span>
        <!-- 上一页 -->

        <span
          v-if="prevText != ''"
          :class="['i-prev-text-text', { 'i-prev-text-text-disabled': currentPage <= 1 }]"
          @click="prevChange"
          >{{ prevText }}</span
        >
        <span
          v-if="prevText == '' || prevText == undefined"
          :class="['i-prev-text i-text-box', { 'i-prev-text-disabled': currentPage <= 1 }]"
          @click="prevChange"
          ><i-icon name="arrow-left"></i-icon
        ></span>
        <!-- 分页数字部分 -->
        <div
          class="i-block-box"
          :style="{
            width:
              pageSize <= 10 && Math.ceil(total / pageSize) <= 10
                ? 'auto'
                : (size == 'small' ? 32 : 36) * maxSize + 'px',
          }"
        >
          <div
            class="i-block-margin-box"
            :style="{
              width:
                pageSize <= 10 && Math.ceil(total / pageSize) <= 10
                  ? 'auto'
                  : (size == 'small' ? 32 : 36) * Math.ceil(total / pageSize) + 'px',
              'margin-left': marginLeft + 'px',
            }"
          >
            <li
              v-for="(item, index) in Math.ceil(total / pageSize)"
              :key="index"
              :class="['i-block-li', { 'i-block-li-active': currentPage - 1 == index }]"
              @click="change(index + 1)"
              >{{ index + 1 }}</li
            >
          </div>
        </div>
        <!-- 下一页 -->
        <span
          v-if="nextText == '' || nextText == undefined"
          :class="[
            'i-next-text i-text-box',
            { 'i-next-text-disabled': currentPage >= total / pageSize },
          ]"
          @click="nextChange"
          ><i-icon name="arrow-right"></i-icon
        ></span>
        <span
          v-if="nextText != ''"
          :class="[
            'i-next-text-text',
            { 'i-next-text-text-disabled': currentPage >= total / pageSize },
          ]"
          @click="nextChange"
          >{{ nextText }}</span
        >
        <!-- 跳转部分 -->
        <div v-if="jumper" class="to-next-page-box">
          <span>跳至</span>
          <span class="input-span"
            ><i-input
              v-model="currentPage"
              :size="size == 'small' ? 'mini' : 'small'"
              :disabled="disabled"
              @change="topage"
            ></i-input
          ></span>
          <span>页</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  // 这里要绑定到已有的最外层的属性名上
  .i-pagination-inlinebox {
    --I-pagination-acitve-color-background: v-bind(colors.background);
    --I-pagination-acitve-color-hoverBackground: v-bind(colors.hoverBackground);
    --I-pagination-acitve-color-borderColor: v-bind(colors.borderColor);
    --I-pagination-acitve-color-hoverBorderColor: v-bind(colors.hoverBorderColor);
    --I-pagination-acitve-color-color: v-bind(colors.color);
    --I-pagination-acitve-color-hoverColor: v-bind(colors.hoverColor);
  }
  @import './pagination.scss';
</style>
