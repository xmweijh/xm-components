# dialog 文档

## 安装
```javascript
import { createApp } from 'vue';
import { IDialog } from 'vangle';

const app = createApp();
app.use(IDialog);
```

## 基本使用
Dialog 组件基本使用示例。
需要设置 v-model 属性，它接收 Boolean，当为 true 时显示 Dialog。 Dialog 分为两个部分：body 和 footer，footer 需要具名为 footer 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。 
:::demo

dialog/basic

:::

## 自定义头部
header 插槽可用于自定义显示标题的区域。 

:::demo

dialog/custom

:::

## 嵌套的对话框
在一个 Dialog 内部嵌套另一个 Dialog。

:::demo

dialog/nested

:::

## 居中布局
设置 center 属性即可。center仅影响标题和底部区域。如果需要内容也水平居中，请自行为其添加 CSS 样式。
:::demo

dialog/center

:::

