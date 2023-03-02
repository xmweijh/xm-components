<template>
  <div class="mg-b">
    <I-layout :span="10"><div class="col-box-2 col-box">10</div></I-layout>
    <I-layout :span="12" :offset="2"><div class="col-box-1 col-box">12</div></I-layout>
  </div>
  <div class="mg-b">
    <I-layout :span="8"><div class="col-box-1 col-box">8</div></I-layout>
    <I-layout :span="8" :offset="8"><div class="col-box-1 col-box">8</div></I-layout>
  </div>
  <div class="mg-b">
    <I-layout :span="2"><div class="col-box-2 col-box">2</div></I-layout>
    <I-layout :span="6" :offset="4"><div class="col-box-1 col-box">6</div></I-layout>
    <I-layout :span="6" :offset="6"><div class="col-box-2 col-box">6</div></I-layout>
  </div>
  <div class="mg-b">
    <I-layout :span="4"><div class="col-box-1 col-box">4</div></I-layout>
    <I-layout :span="2" :offset="4"><div class="col-box-2 col-box">2</div></I-layout>
    <I-layout :span="4" :offset="2"><div class="col-box-1 col-box">4</div></I-layout>
    <I-layout :span="6" :offset="2"><div class="col-box-2 col-box">6</div></I-layout>
  </div>
</template>

<style lang="scss" scoped>
  .mg-b {
    margin-bottom: 10px;
    overflow: hidden;
  }
  .col-box {
    height: 34px;
    margin-bottom: 10px;
    text-align: center;
    line-height: 34px;
  }
  .col-box-1 {
    background-color: #9eaaaf;
    color: #333;
  }
  .col-box-2 {
    background-color: #505050;
    color: #fff;
  }
</style>
