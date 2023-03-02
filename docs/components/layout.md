# layout 文档

## 安装
```javascript
import { createApp } from 'vue';
import { ILayout } from 'xm-components';

const app = createApp();
app.use(ILayout);
```

## 基础用法
Layout组件的基本用法，将每一行平均分为 24 列。通过span调整所占的分栏。
:::demo 

layout/basic

:::

## 位置偏移
通过 offset 设置偏移占用指定的列数。
:::demo 

layout/offset

:::

## 布局属性

| 属性   | 说明         | 类型   | 接收值 | 默认值 |
| ------ | ------------ | ------ | ------ | ------ |
| span   | 每行占用列数 | Number | —      | 24     |
| offset | 偏移指定列数 | Number | —      | 0      |

