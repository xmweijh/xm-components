<script lang="ts" setup>
  const img_1 =
    'https://tx-free-imgs2.acfun.cn/kimg/EJjM1y8qPgoFYWNmdW4SBWltYWdlGi4xMzM2MzQ2OF85MzhiYzk4MzlhMDc0NjNjODFhZTIwOTQ2MTNlMDEyMC5qcGVn.png?x-oss-process=image/resize,m_fill,w_200,h_110';
  const img_2 =
    'https://tx-free-imgs2.acfun.cn/kimg/EJjM1y8qPAoFYWNmdW4SBWltYWdlGiw3NzM5MzJfZmVmYjk5ZmFmZGE4NDUyY2E1OGU0ZTZmOGQwMzEwNmQuanBlZw.png?x-oss-process=image/resize,m_fill,w_200,h_110';
  const img_3 =
    'https://tx-free-imgs2.acfun.cn/kimg/EJjM1y8qPgoFYWNmdW4SBWltYWdlGi42NzE5NDkwMV9iZjczZDk2M2UzNjQ0M2VhOTQwOWRjZjA4ODM1NzUxOS5qcGVn.png?x-oss-process=image/resize,m_fill,w_200,h_110';
  const img_4 =
    'https://tx-free-imgs2.acfun.cn/kimg/EJjM1y8qPgoFYWNmdW4SBWltYWdlGi4yMjkzOTEyNl84ZGE4MmJmZjgyNDI0Mjg0OGRkODlkOWQwOTJlNWUxYS5qcGVn.png?x-oss-process=image/resize,m_fill,w_200,h_110';
  const img_5 =
    'https://tx-free-imgs2.acfun.cn/kimg/bs2/zt-image-host/ChYwODhjZDdjMjJlMTA5ZmRjZmU4NjA0EJjM1y8.png?x-oss-process=image/resize,m_fill,w_200,h_110';

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
