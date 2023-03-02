# Table 文档

## 安装
```javascript
import { createApp } from 'vue';
import { ITable } from 'xm-components';

const app = createApp();
app.use(ITable);

```

## 基本使用

table 表格基本使用示例,需要一个主要的 options 参数。

:::demo

table/demo1

:::

## 不同大小

你可以传入一个 size 来确定表格的不同大小，以适配不同的应用场景

:::demo

table/demo2

:::

## 自定义插槽内容

根据需要自定义表格的插槽内容，插槽接受需要定义表格列的 _field_ 并返回当前行的数据 _rowItem_ ，如果是定义表头，需要在插槽名加上 _head-_ 前缀作为识别符

:::demo

table/demo3

:::

## 自定义表头及表格样式

使用 headStyle 自定义表头的样式，使用rowStyle 自定义表格内容区域的样式

:::demo

table/demo4

:::

## 属性

| Attribute             | Description              | Type                                             | Accepted Values | Default |
| --------------------- | ------------------------ | ------------------------------------------------ | --------------- | ------- |
| options               |表格数据,rests 和 datas,rests作为整体约束（具体见下方API），datas作为数据定义| object | —    |— |
| size                  | 表格尺寸大小               |string                                        | default / small / mini| default  |
| showHeader             | 是否显示表头           | boolean                                         | —               | true       |
| headStyle            | 自定义表头样式          | object                                           | —               | —          |
| rowStyle            | 自定义表格内容区域的样式   | object                                            | —              |—           |
| customClass           | 自定义整体的Class类名   |string                                          | —                | —    |
