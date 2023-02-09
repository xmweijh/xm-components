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
