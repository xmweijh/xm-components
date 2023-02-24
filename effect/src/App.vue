<template>
  <I-form ref="formRef" :model="form" :label-width="80" :rules="rules">
    <I-form-item label="姓名" prop="name">
      <I-input v-model="form.name" />
    </I-form-item>
    <I-form-item label="国家" prop="country">
      <I-checkbox v-model="form.country" :options="checkOptions"></I-checkbox>
    </I-form-item>
    <I-form-item>
      <I-button type="primary" @click="onSubmit">Submit</I-button>
    </I-form-item>
  </I-form>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';

  const formRef = ref<any>(null);
  const form = reactive({
    name: '',
    country: [],
  });

  const { checkOptions } = reactive({
    checkOptions: [
      { label: '中国', value: 'zhongguo' },
      { label: '英国', value: 'yingguo' },
      { label: '德国', value: 'deguo' },
    ],
  });

  const rules = {
    name: [
      { required: true, message: '请输入姓名', trigger: 'change' },
      { min: 4, max: 16, message: '长度应为4到16位', trigger: 'change' },
      { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '您的用户名格式有误', trigger: 'change' },
    ],
    country: {
      required: true,
      message: '请选择国家',
    },
  };

  const onSubmit = () => {
    formRef.value.validate((valid, fields) => {
      if (valid) {
        console.log('submit', form);
      } else {
        console.log('error', fields);
      }
    });
  };
</script>
