<template>
  <I-card :body-style="{ padding: '0px' }" class="box-card">
    <img
      src="https://imgs.aixifan.com/newUpload/47055536_ee607d2c97124172a5c4a149013b3516.jpeg"
      class="image"
    />
    <div style="padding: 14px">
      <span>二次元图片</span>
      <div class="bottom">
        <time class="time">{{ currentDate }}</time>
        <I-button text class="button">操作</I-button>
      </div>
    </div>
  </I-card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const currentDate = ref(new Date());
</script>

<style>
  .box-card {
    width: 480px;
  }

  .time {
    font-size: 12px;
    color: #999;
    margin-right: 40px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>
