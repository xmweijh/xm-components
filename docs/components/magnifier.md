# 放大镜 文档

## 安装

```javascript
import { createApp } from 'vue';
import { IMagnifier } from 'xm-components';

const app = createApp();
app.use(IMagnifier);
```

## 基础用法

:::demo 

magnifier/basic

:::






## 图表属性
| 属性  | 说明     | 类型                     | 接收值 | 默认值            |
| ----- | -------- | ------------------------ | ------ | ------------------ |
| imgUrl | 图片地址 | 本地URL | -      | - |
| blank  | 是否跳转新的标签页 | string                   | -      | true|
| link  | 点击跳转网址 | string                   | -      | https://www.baidu.com  |
| imgWidth  | 图片宽度 | string                   | -      | -  |
| imgHeight  | 图片高度  | string                   | -      | -  |
| magWidth  | 放大镜宽度  | string                   | -      | -  |
| magHigth  | 放大镜高度  | string                   | -      | -  |