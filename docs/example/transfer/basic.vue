<script lang="ts" setup>
  const testData = [
    {
      title: '华为',
      data: [
        {
          id: 1,
          phone_name: 'Mate 40 Pro',
          disabled: false,
        },
        {
          id: 2,
          phone_name: 'P40 Pro',
          disabled: true,
        },
        {
          id: 3,
          phone_name: 'P50 Pro',
          disabled: false,
        },
        {
          id: 4,
          phone_name: 'Mate Xs 2',
          disabled: false,
        },
      ],
    },
    {
      title: '小米',
      data: [
        {
          id: 5,
          phone_name: '12 Pro',
          disabled: true,
        },
        {
          id: 6,
          phone_name: '12s Ultra',
          disabled: true,
        },
        {
          id: 7,
          phone_name: '12s',
          disabled: false,
        },
        {
          id: 8,
          phone_name: 'Civi 1s',
          disabled: false,
        },
      ],
    },
    {
      title: 'iPhone',
      data: [
        {
          id: 9,
          phone_name: '13 mini',
          disabled: false,
        },
        {
          id: 10,
          phone_name: '13',
          disabled: false,
        },
        {
          id: 11,
          phone_name: '13 Pro',
          disabled: false,
        },
        {
          id: 12,
          phone_name: '13 Pro Max',
          disabled: true,
        },
      ],
    },
  ];
</script>

<template>
  <ITransfer :data="testData"></ITransfer>
</template>
