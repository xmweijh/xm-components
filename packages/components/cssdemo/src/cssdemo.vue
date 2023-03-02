<script lang="ts" setup>
  import type { CSSProperties } from 'vue';
  import { computed, onMounted } from 'vue';
  import { ICssDemoprops } from './cssdemo';
  const cssDemoprops = defineProps(ICssDemoprops);

  // 传入需更改的样式，动态定义
  const textSmearingStyle = computed<CSSProperties>(() => {
    if (
      !cssDemoprops.textSmearing_fontsize &&
      !cssDemoprops.textSmearing_color &&
      !cssDemoprops.textSmearing_time
    )
      return {};
    return {
      '--font-size': cssDemoprops.textSmearing_fontsize,
      '--corlor': cssDemoprops.textSmearing_color,
      '--time': cssDemoprops.textSmearing_time,
    };
  });

  onMounted(() => {});
</script>

<template>
  <div class="contain">
    <div class="textSmearing">
      <div class="content" :style="textSmearingStyle">{{ cssDemoprops.textSmearing_text }} </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import './cssdemo.scss';
</style>
