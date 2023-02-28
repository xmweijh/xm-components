<script lang="ts" setup>
  const img_1 = new URL('./img_test/wallhaven-4v5oop.jpg', import.meta.url).href;
  const img_2 = new URL('./img_test/wallhaven-49dol8.jpg', import.meta.url).href;
  const img_3 = new URL('./img_test/wallhaven-4v5oop.jpg', import.meta.url).href;
  const img_4 = new URL('./img_test/wallhaven-pk3j1m.jpg', import.meta.url).href;
  const img_5 = new URL('./img_test/wallhaven-x17ee3.jpg', import.meta.url).href;

  const data = [
    { id: 0, imgUrl: img_1 },
    { id: 1, imgUrl: img_2 },
    { id: 2, imgUrl: img_3 },
    { id: 3, imgUrl: img_4 },
    { id: 4, imgUrl: img_5 },
  ];
</script>

<template>
  <div class="container">
    <i-carousel
      :autoplay="true"
      :duration="3000"
      :has-dot="true"
      :has-directors="true"
      :options="data"
    >
    </i-carousel>
  </div>
</template>

<style scoped>
  .container {
    width: 420px;
    height: 280px;

    /* margin: 150px auto; */
  }
</style>
