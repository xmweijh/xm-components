# Switch 文档

## 安装
```javascript
import { createApp } from 'vue';
import { ISwitch } from 'xm-components';

const app = createApp();
app.use(ISwitch);

```

## 基本用法
开关选择组件，可以表示开关状态/两种状态之间的切换。需要设置 v-model 属性，它接收 Boolean，表示开关的开关状态。
:::demo

switch/demo1

:::

## 禁用状态
可通过 disabled 属性开启。

:::demo

switch/demo2

:::

## 带提示信息
可通过 showTipsText 属性开启。

:::demo

switch/demo3

:::

## 带辅助文字
可通过 closeText 和 activeText 属性决定开启和关闭状态时的辅助文字，通过 textAlign 属性决定辅助文字的位置。

:::demo 

switch/demo4

:::

## 自定义颜色
可通过 closeColor 和 activeColor 属性自定义关闭和开启时的背景颜色。

:::demo

switch/demo5

:::

## 属性

| Attribute             | Description              | Type                                             | Accepted Values | Default |
| --------------------- | ------------------------ | ------------------------------------------------ | --------------- | ------- |
| v-model               | 开关状态                | boolean                                          | —               | —       |
| disabled              | 是否禁用                | boolean                                          | —               | false    |
| width                 | 自定义宽度              |                 |          | number                                           | —               | 45       |
| closeColor            | 关闭状态时的背景颜色     | string                                           | —               | #BFBFBF  |
| activeColor           | 开启状态时的背景颜色     | string                                            | —              | #0e80eb |
| closeText             | 关闭状态时辅助文字       | string                                            | —               | —       |
| activeText            | 开启状态时辅助文字        | string                                            | —               | —    |
| textAlign             | 辅助文字位置            | string                                           | left/right       | left  |
| showTipsText          | 是否显示提示信息        | boolean                                          | —               | false    |
| customClass           | 自定义整体的Class类名   | 
string                                          | —                | —    |
