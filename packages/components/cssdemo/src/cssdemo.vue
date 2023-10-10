<script lang="ts" setup>
  import type { CSSProperties } from 'vue';
  import { computed, onMounted } from 'vue';
  import { ICssDemoprops } from './cssdemo';
  const cssDemoprops = defineProps(ICssDemoprops);

  // 传入需更改的样式，动态定义
  const textSmearingStyle = computed<CSSProperties>(() => {
    if (
      !cssDemoprops.textSmearingFontsize &&
      !cssDemoprops.textSmearingColor &&
      !cssDemoprops.textSmearingTime
    )
      return {};
    return {
      '--font-size': cssDemoprops.textSmearingFontsize,
      '--corlor': cssDemoprops.textSmearingColor,
      '--time': cssDemoprops.textSmearingTime,
    };
  });

  onMounted(() => {});
</script>

<template>
  <div class="contain">
    <div class="textSmearing">
      <div class="content" :style="textSmearingStyle">{{ cssDemoprops.textSmearingText }} </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import './cssdemo.scss';
</style>
