# Button 文档

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

## 按钮属性

| 属性     | 说明           | 类型    | 接收值                                                  | Default |
| -------- | -------------- | ------- | ------------------------------------------------------- | ------- |
| size     | 按钮尺寸       | string  | large \| default  \| small \| mini                      | default |
| type     | 按钮类型       | string  | primary \| success \| warning \| danger \| info \| text | —       |
| plain    | 是否是朴素按钮 | boolean | —                                                       | false   |
| round    | 是否是圆角按钮 | boolean | —                                                       | false   |
| disabled | 是否禁用该按钮 | boolean | —                                                       | false   |

