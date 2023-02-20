# Icon 文档

## 安装

```javascript
import { createApp } from 'vue';
import { IIcon } from 'xm-components';

const app = createApp();
app.use(IIcon);
```

## 基础用法

:::demo 

icon/basic

:::

## 图标颜色

:::demo 

icon/color

:::

## 图标尺寸

:::demo 

icon/size

:::

## 图标列表

<IconList />

## 图表属性
| 属性  | 说明     | 类型                     | 接收值 | 默认值            |
| ----- | -------- | ------------------------ | ------ | ------------------ |
| color | 图标颜色 | <CSSProperties, 'color'> | -      | inherit from color |
| size  | 图表尺寸 | number                   | -      | inherit from size  |