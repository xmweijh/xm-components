<script lang="ts" setup>
  import { TableProps } from './table';
  const props = defineProps(TableProps);
</script>

<template>
  <div :class="[`i-table-${props.size}`, customClass]">
    <table>
      <!-- 头部 -->
      <thead v-if="showHeader">
        <tr>
          <th
            v-for="(x, n) in options.rests"
            :key="n"
            :style="[headStyle, { 'text-align': x.align }]"
          >
            <slot v-if="$slots['head-' + x.field]" :name="'head-' + x.field" :scope="x"></slot>
            <div v-else>{{ x.title }}</div>
          </th>
        </tr>
      </thead>
      <!-- 主体 -->
      <tbody>
        <tr v-for="(v, i) in options.datas" :key="i">
          <td
            v-for="(_, j) in options.rests"
            :key="j"
            :style="[
              rowStyle,
              {
                width: options.rests[j].width ? options.rests[j].width : '',
                'text-align': options.rests[j].align,
              },
            ]"
          >
            <slot
              v-if="$slots[options.rests[j].field]"
              :name="options.rests[j].field"
              :scope="{ rowIndex: i, cellIndex: j, row: v }"
            ></slot>
            <div v-else>{{ options.datas[i][options.rests[j].field] }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss">
  @import './table.scss';
</style>
