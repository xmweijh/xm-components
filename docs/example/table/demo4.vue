<script setup lang="ts">
  import { reactive } from 'vue';
  const state = reactive({
    options: {
      rests: [
        { field: 'id', title: 'ID', align: 'center' },
        { field: 'name', title: '姓名', align: 'center' },
        { field: 'job', title: '职业', align: 'center' },
        { field: 'address', title: '地址', align: 'center' },
        { field: 'from', title: '籍贯', align: 'center' },
      ],
      datas: [
        {
          id: 1,
          name: '小明',
          job: '医生',
          address: '成都',
          from: '四川',
        },
        {
          id: 2,
          name: '小红',
          job: '老师',
          address: '昆明',
          from: '云南',
        },
        {
          id: 3,
          name: '小花',
          job: '律师',
          address: '杭州',
          from: '浙江',
        },
        {
          id: 4,
          name: '小兰',
          job: '老板',
          address: '深圳',
          from: '广州',
        },
      ],
    },
    headStyle: {
      color: '#fff',
      borderColor: '#4c94d1',
      backgroundColor: 'rgba(25,66,120,.9)',
    },
    rowStyle: {
      borderColor: '#4c94d1',
    },
  });
  const { options, headStyle, rowStyle } = state;
</script>

<template>
  <I-table :options="options" :head-style="headStyle" :row-style="rowStyle" size="mini"></I-table>
</template>
