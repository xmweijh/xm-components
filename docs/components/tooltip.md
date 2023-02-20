# Tooltip 文档

## 安装

```javascript
import { createApp } from 'vue';
import { ITooltip } from 'xm-components';

const app = createApp();
app.use(ITooltip);
```

## 基本用法
Tooltip的基本用法
我们可以选择四个方向：top、left、right、bottom，用来放置提示框
:::demo

tooltip/basic

:::

## 主题
Tooltip 组件内置了两个主题：dark和light。通过effect修改这两个主题。你也可以自定义其它主题。
:::demo

tooltip/types

:::

## 更多内容
我们可以自定义更丰富的内容。
用具名 slot content，替代tooltip中的content属性。
:::demo

tooltip/content

:::

## 显示 HTML 内容
通过rawContent属性可以将内容设置为 HTML 字符串。
:::demo

tooltip/html

:::

## 自定义其他功能
提供了disabled属性使你控制提示框的开关，并可通过修改transition-name实现更多动画效果。
:::demo

tooltip/advance

:::

## 提示框属性
| 属性            | 说明                                         | 类型    | 接收值                         | 默认值       |
| --------------- | -------------------------------------------- | ------- | ------------------------------ | ------------ |
| effect          | 提示框主题: `dark` / `light`，也可以自定义   | string  | string                         | light        |
| content         | 展示内容，可以通过具名插槽`slot#content`重写 | String  | —                              | —            |
| raw-content     | 是否使用HTML内容                             | boolean | —                              | false        |
| placement       | 提示框的位置                                 | string  | top \| bottom \| left \| right | bottom       |
| disabled        | 是否禁止提示框功能                           | boolean | —                              | false        |
| transition-name | 自定义动画效果                               | boolean | —                              | tooltip-fade |

