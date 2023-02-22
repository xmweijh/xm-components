# card 文档

## 安装

```javascript
import { createApp } from 'vue';
import { ICard } from 'xm-components';

const app = createApp();
app.use(ICard);
```

## 基础用法
卡片包含标题，内容以及操作区域。

Card 组件由 header 和 body 组成。 header 是可选的，其内容取决于一个具名的 slot。
:::demo Icard组件

card/basic

:::

## 简单卡片
只有内容区域的简单安排。

:::demo

card/simple

:::

## 带图片的卡片
可配置定义更丰富的内容展示。

配置 body-style 属性来自定义 body 部分的样式。
:::demo

card/photo

:::

## 卡片的阴影效果
通过 shadow 属性设置卡片阴影出现的时机。 该属性的值可以是：always、hover 或 never。
:::demo

card/shadow

:::

## 卡片属性
| 属性       | 说明                                                         | 类型                      | 接收值 | 默认值 |
| ---------- | ------------------------------------------------------------ | ------------------------- | ------ | ------ |
| header     | 卡片的标题 你既可以通过设置 header 来修改标题，也可以通过 `slot#header` 传入 DOM 节点 | string                    | —      | —      |
| body-style | body 的 CSS 样式                                             | CSSProperties             | —      | —      |
| shadow     | 设置阴影显示时机                                             | always \| never  \| hover | —      | always |

