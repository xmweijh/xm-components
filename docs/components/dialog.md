# Dialog 文档

## 安装
```javascript
import { createApp } from 'vue';
import { IDialog } from 'xm-components';

const app = createApp();
app.use(IDialog);
```

## 基本使用
Dialog 组件基本使用示例。
需要设置 v-model 属性，它接收 Boolean，当为 true 时显示 Dialog。 Dialog 分为两个部分：body 和 footer，footer 需要具名为 footer 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。 若要使用挂载前和摧毁后事件，一定要添加v-if指令并绑定可视化变量。
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

## 可拖拽对话框
可以拖动对话框的header部分，需要注意的是一定要添加v-if指令并绑定可视化变量。

:::demo

dialog/draggable

:::

## 属性

| 属性                  | 说明                     | 类型                                             | 接收值 | 默认值 |
| --------------------- | ------------------------ | ------------------------------------------------ | ------ | ------ |
| model-value / v-model | 是否隐藏对话框           | boolean                                          | —      | —      |
| title                 | 对话框的标题             | string                                           | —      | —      |
| width                 | 对话框的宽度             | string / number                                  | —      | 50%    |
| top                   | 对话框的`margin-top`     | string                                           | —      | 15vh   |
| open-delay            | 打开对话框前的延迟       | number                                           | —      | 0      |
| close-delay           | 关闭对话框前的延迟       | number                                           | —      | 0      |
| close-on-click-modal  | 点击模态层是否关闭对话框 | boolean                                          | —      | true   |
| close-on-press-escape | 按下esc键是否关闭对话框  | boolean                                          | —      | true   |
| show-close            | header是否展示关闭按钮   | boolean                                          | —      | true   |
| before-close          | 关闭对话框的回调函数     | function(done)，done is used to close the Dialog | —      | —      |
| draggable             | 对话框是否可以拖拽       | boolean                                          | —      | false  |
| center                | header和footer是否居中   | boolean                                          | —      | false  |



## 插槽

| Name   | Description    |
| ------ | -------------- |
| —      | 对话框内容部分 |
| header | 对话框头部     |
| footer | 对话框底部     |

