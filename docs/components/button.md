# Button 文档

## 安装
```javascript
import { createApp } from 'vue';
import { IButton } from 'xm-components';

const app = createApp();
app.use(IButton);
```

## 常用按钮
Button组件的基本使用
:::demo 使用`primary` | `info` | `success` | `warning` | `danger`属性来定义 Button 的样式。

button/basic

:::

## 禁用状态

按钮不可操作的状态

:::demo 通过 `disabled` 属性决定一个按钮是否可操作.接受一个 `Boolean` 值。

button/disabled

:::

## 文本按钮

没有边框与背景颜色的按钮。

:::demo

button/text

:::


## 图标按钮

拥有图标的按钮
:::demo 可以使用iconPosition="left|right"来确定图标的位置。同时可以通过circle来获得圆形按钮，值得注意的是圆形按钮就不会显示传入的文字。

button/iconbutton

:::

## 不同大小

除了默认的大小，按钮组件还提供了3种额外的尺寸可供选择。

:::demo 使用 size 属性额外配置尺寸，可使用 large、small和mini三种值。

button/size

:::

## 自定义颜色按钮
可以自定义颜色的按钮类型


:::demo 通过提供color属性实现。

button/custom

:::

## 加载中按钮
点击按钮来加载数据，并向用户反馈加载状态。

通过设置 loading 属性为 true 来显示加载中状态。
:::demo

button/loading

:::

## 按钮组
以按钮组的方式出现，常用于多项类似操作。
:::demo

button/buttongroup

:::

## 按钮属性
| 属性         | 说明           | 类型    | 接收值                                                  | 默认值 |
| ------------ | -------------- | ------- | ------------------------------------------------------- | ------- |
| size         | 按钮尺寸       | string  | large \| default  \| small \| mini                      | default |
| type         | 按钮类型       | string  | primary \| success \| warning \| danger \| info \| text | —       |
| plain        | 是否是朴素按钮 | boolean | —                                                       | false   |
| round        | 是否是圆角按钮 | boolean | —                                                       | false   |
| disabled     | 是否禁用该按钮 | boolean | —                                                       | false   |
| iconPosition | 图标位置       | string  | left \| right                                           | left    |
| circle       | 是否为圆形     | boolean | —                                                       | false   |
| textColor    | 改变字体颜色   | string  | <CSSProperties, 'color'>                                | —       |
| loading      | 加载中按钮     | boolean | —                                                       | false   |


