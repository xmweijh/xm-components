# Pagination 文档

## 安装
```javascript
import { createApp } from 'vue';
import { IPagination } from 'xm-components';

const app = createApp();
app.use(IPagination);

```

## 基本使用
Pagination 组件基本使用示例。
:::demo

pagination/demo1

:::

## 禁用状态
可通过 disabled 属性开启禁用。

:::demo

pagination/demo2

:::

## 小型分页
通过 size=small 属性来开启。

:::demo

pagination/demo3

:::

## 无边框
通过 border=false 属性来开启。

:::demo 

pagination/demo4

:::

## 每页展示最大页数
通过 maxSize 控制每页展示最大页数，超出将进行滚动。

:::demo

pagination/demo5

:::

## 更多配置

### 更多额外拓展配置项。

:::demo

pagination/demo6

:::

## 自定义样式
可通过 activeColors 对象自定义分页样式。

:::demo

pagination/demo7

:::

## 属性

| Attribute             | Description              | Type                                         | Accepted Values | Default |
| --------------------- | ------------------------ | ---------------------------------------------| --------------- | ------- |
| total                 | 数据总条数                | number                                          | —               | —       |
|current               | 当前页                  | number                                               | —               | 1   |
| pageSize              | 每页展示条数              | number                                           | —               | 10       |
| maxSize            | 每页最大展示页数             | number                                           | —               | 10     |
| border              | 是否需要border              | boolean                                            | —              | true |
| size                 | 按钮大小                  | string                                            |default / small  |default      |
| disabled            | 是否禁用                 | boolean                                            | —               | false   |
| prevText             | 自定义上一页按钮文本       | string                                           | —                  | —   |
| nextText            | 自定义下一页按钮文本         | string                                          | —                | —     |
| align                 | 分页组件对齐方式         | string                                            |default / small  |default      |
| showTotal           | 是否显示总条数        | boolean                                            | —               | false   |
| jumper             | 是否显示跳转到指定页     | boolean                                          | —                  | —   |
| activeColors       | 自定义分页样式，见下方activeColors配置 | object                  | —                | —     |


## ActiveColors 配置项

| Attribute             | Description              | Type                                             | Accepted Values | Default |
| --------------------- | ------------------------ | ------------------------------------------------ | --------------- | ------- |
| background            | 默认背景颜色              | string                                           | —               | #fff     |
|hoverBackground       | 鼠标移入或选中时背景颜色      | string                                          | —               | #fff  |
| borderColor           | 默认边框颜色               | string                                            | —               | #d9d9d9   |
| hoverBorderColor     | 鼠标移入或选中时边框颜色      | string                                            | —               | #0e80eb  |
| color                | 默认文本颜色                | string                                            | —              | #505050 |
| hoverColor            | 鼠标移入或选中时文本颜色      | string                                         |—                 |#0e80eb   |

