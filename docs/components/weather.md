# 天气卡片 文档

## 安装

```javascript
import { createApp } from 'vue';
import { IIWeather } from 'xm-components';

const app = createApp();
app.use(IWeather);
```

## 基础用法

:::demo 

weather/basic

:::

## 带图标用法

:::demo 

weather/iconweather

:::

## 简单用法

:::demo 

weather/simpleWea

:::




## 图表属性
| 属性  | 说明     | 类型                     | 接收值 | 默认值            |
| ----- | -------- | ------------------------ | ------ | ------------------ |
| userId | 用户ID | number | -      | - |
| secret  | 用户密钥 | string                   | -      | -  |
| width  | 卡片宽度 | string                   | -      | -  |
| background  | 卡片背景 | string                   | -      | -  |
| icon  | 图标  | string                   | -      | -  |