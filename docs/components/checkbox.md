# Checkbox 多选文档

## 安装
```javascript
import { createApp } from 'vue';
import { ICheckbox } from 'xm-components';

const app = createApp();
app.use(ICheckbox);
```
#### 常用从一组数据中选择多个数据


## 基本使用

:::demo checkbox 组件的基本使用，需要一个主要的 _options_ 参数。
  checkbox/demo1
:::

## 默认选中

:::demo _v-model_ 添加默认绑定选项 _value_ 值。

checkbox/demo2

:::

## 禁用选项

:::demo 可以针对 _options_ 下某个选项来添加 _disabled_ 属性实现禁用选项。

checkbox/demo3

:::

## 垂直排列

:::demo 可以通过设置 _inline_ 属性为 _false_ 实现垂直排列。

checkbox/demo4

:::

## 匹配不同格式的数据

:::demo 默认 _options_ 接收 _label_ 和 _value_ 作为显示和值绑定，你可以根据 _labelFiled_ 和 _valueFiled_ 来重新确定字段的绑定，更方便的匹配不同格式的数据。

checkbox/demo5

:::

## 不同大小

:::demo 可以通过设置 _size_ 属性来显示不同大小。

checkbox/demo6

:::

## 自定义颜色

:::demo 可以通过设置 _customColor_ 属性为选中的选项自定义你喜欢的颜色。
checkbox/demo7
:::

## 属性

| Attribute             | Description              | Type                                             | Accepted Values | Default |
| --------------------- | ------------------------ | ------------------------------------------------ | --------------- | ------- |
| v-model               | 多选绑定值              | array                                            | —               | —       |
| size                  | 尺寸大小                | string                                      |default / small / mini| default  |
| options               | 多选数据配置             |                 |          | array                                            | —               | []       |
| inline               | 是否为行内元素           | boolean                                          | —               | true    |
| labelFiled           | 自定义替换lable的字段名   | string                                            | —              | label   |
| valueFiled             | 自定义替换value的字段名  | string                                            | —               | value  |
| customColor            | 自定义选中颜色色值        | string                                            | —               | —    |
| customClass             | 自定义组件类名          | string                                             | —                | —    |



