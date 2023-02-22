<template>
  <p>普通图标按钮</p>
  <div class="mb-4">
    <i-button type="primary" icon="edit">编辑</i-button>
    <i-button type="success" icon="check">检查</i-button>
    <i-button type="info" icon="message">消息</i-button>
    <i-button type="warning" icon="star" icon-position="right">收藏</i-button>
    <i-button type="danger" icon="delete" icon-position="right">删除</i-button>
  </div>
  <p>圆形图标按钮</p>
  <div>
    <i-button icon="search" circle />
    <i-button type="primary" icon="edit" circle />
    <i-button type="success" icon="check" circle />
    <i-button type="info" icon="message" circle />
    <i-button type="warning" icon="star" circle />
    <i-button type="danger" icon="delete" circle />
  </div>
</template>

<style>
  .mb-4 {
    margin-bottom: 20px;
  }
</style>
