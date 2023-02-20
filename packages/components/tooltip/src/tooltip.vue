<script lang="ts" setup>
  import type { CSSProperties } from 'vue';
  import { ref, watch, onMounted } from 'vue';
  import { createNamespace } from '../../../utils';
  import { TooltipProps } from './tooltip';

  const props = defineProps(TooltipProps);
  const { createBEM } = createNamespace('tooltip');
  const visible = ref(false);
  const tooltipRef = ref();
  const contentStyle = ref<CSSProperties>({});

  function getStyle() {
    // 获取tooltipRef的DOM矩形，若存在则执行下面的代码块
    const tooltipRect = tooltipRef.value?.getBoundingClientRect();
    if (tooltipRect) {
      // 从props中获取弹出框的方向信息，比如top、right、bottom、left等
      const direction = props.placement;
      // 如果方向是top或bottom
      if (['top', 'bottom'].includes(direction)) {
        // 计算内容的垂直偏移距离 使tooltip移出元素为  元素本身高度再+10的箭头高度
        const value = tooltipRect.height + 10;
        const y = direction === 'top' ? -value : value;
        // 设置contentStyle对象的transform属性，使内容沿Y轴平移
        contentStyle.value = {
          transform: `translate(-50%, ${y}px)`,
        };
      } else {
        // 否则方向为left或right
        // 计算内容的水平偏移距离
        const value = tooltipRect.width + 10;
        const x = direction === 'left' ? -value : value;
        // 设置contentStyle对象的transform属性，使内容沿X轴平移
        contentStyle.value = {
          transform: `translate(${x}px, -50%)`,
        };
      }
    }
  }

  watch(
    () => props.placement,
    () => {
      getStyle();
    },
  );
  watch(
    () => props.disabled,
    () => {
      visible.value = false;
    },
  );

  watch(
    () => props.placement,
    () => {},
  );

  const events = {
    mouseenter() {
      if (!props.disabled) visible.value = true;
    },
    mouseleave() {
      if (!props.disabled) visible.value = false;
    },
  };

  onMounted(() => {
    getStyle();
  });

  defineOptions({
    name: 'ITooltip',
  });
</script>

<template>
  <div ref="tooltipRef" :class="createBEM()" v-on="events">
    <slot></slot>
    <Transition :name="transitionName">
      <div
        v-if="visible"
        :class="[createBEM('content'), `is-${effect}`]"
        :style="contentStyle"
        :data-side="placement"
      >
        <slot name="content">
          <span v-if="rawContent" v-html="content"></span>
          <template v-else>{{ content }}</template>
        </slot>
        <span :class="createBEM('arrow')"></span>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
  @import './tooltip.scss';
</style>
