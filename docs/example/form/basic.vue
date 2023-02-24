<script lang="ts" setup>
  import { reactive } from 'vue';

  const form = reactive({
    name: '',
    age: '',
    country: [],
  });

  const { checkOptions } = reactive({
    checkOptions: [
      { label: '中国', value: 'zhongguo' },
      { label: '英国', value: 'yingguo' },
      { label: '德国', value: 'deguo' },
      { label: '法国', value: 'faguo' },
    ],
  });
  const onSubmit = () => {
    console.log('submit', form);
  };
</script>

<template>
  <I-form :model="form" :label-width="80">
    <I-form-item label="姓名">
      <I-input v-model="form.name" />
    </I-form-item>
    <I-form-item label="年龄">
      <I-input v-model.number="form.age" />
    </I-form-item>
    <I-form-item label="国家">
      <I-checkbox v-model="form.country" :options="checkOptions"></I-checkbox>
    </I-form-item>
    <I-form-item>
      <I-button type="primary" @click.prevent="onSubmit">Submit</I-button>
    </I-form-item>
  </I-form>
</template>
