# optfile 文档

## 安装
```javascript
import { createApp } from 'vue';
import { IOptfile } from 'xm-components';

const app = createApp();
app.use(IOptfile);

```

## 基本用法

:::demo

optfile/demo1

:::

## 显示已选文件
通过 showFileList 启用。

:::demo

optfile/demo2

:::

## 开启拖拽
通过设置 drop 启用。

:::demo

optfile/demo3

:::

## 预览已上传图片
通过设置 imgListShow 启用。

:::demo 

optfile/demo4

:::



## 属性

| Attribute             | Description              | Type                                             | Accepted Values | Default |
| --------------------- | ------------------------ | ------------------------------------------------ | --------------- | ------- |
| label                 | 提示文字信息             | string                                          | —               | —       |
| targetType            | 组件展现方式             | string                                         |btn / box       | btn    |
| type                 | 按钮类型的type，支持button的type的类型，custom除外| string  |default / primary / success / danger / warning / dashed / text|default|
|size            | 盒子类型时组件大小，targetType为box时有效" | string                                | big             |  —   |
| accept           | 接受的文件类型     | string                                            | 参考原生input=file的accept属性|  —   |
| multiple             | 是否启用多选         | boolean                                             | —               | false      |
| icon              | 自定义图标        | string                                               | 参考图标库     |plus  |
| showFileList            | 是否显示文件上传列表      | boolean                                           | —       | false  |
| drop                 | 是否启用拖拽功能       | boolean                                          | —               | false    |
| fileList              | 文件上传列表        | Array                                               | —            |[]  |
| imgListShow            | 是否预览已上传图片      | boolean                                           | —       | false  |
| customClass           | 自定义组件类名        | string                                          | —                | —    |