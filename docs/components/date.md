# Date 文档

## 安装
```javascript
import { createApp } from 'vue';
import { IDate } from 'xm-components';

const app = createApp();
app.use(IDate);
```


## 基础用法
于快捷选择日期的组件。
:::demo 

date/basic

:::

## 禁用状态
通过设置`disabled`属性开启禁用
:::demo

date/disabled

:::

## 不同大小

通过`size`属性设置显示不同大小。
:::demo

date/size

:::

## 年选择器
通过设置`type=year`选择年。
:::demo

date/year

:::

## 月选择器
通过设置`type=month`选择年。

:::demo 

date/month

:::

## 格式化日期显示

通过设置`format`格式化日期显示。

:::demo

date/format

:::

## 日期选择范围限制

通过设置`start-date`和`end-date`设置可选择的日期范围限制。
:::demo

date/span

:::

## 自定义颜色与样式
通过设置`custom-active-color`和`custom-class`自定义日期选择器。
:::demo

date/custom

:::

## 属性

|       属性        |                           说明                            |  类型   |         接收值         |   默认值   |
| :---------------: | :-------------------------------------------------------: | :-----: | :--------------------: | :--------: |
|      v-model      | 可被 new Date() 解析的字符串，例如：2022-02-01,2022/02/01 | String  |           ——           |     ——     |
|     disabled      |                         是否禁用                          | Boolean |      true / false      |   false    |
|    placeholder    |                      输入框占位字符                       | String  |           ——           |     ——     |
|       size        |                         组件尺寸                          | String  | default / small / mini |  default   |
|      format       |               日期格式，见下方日期格式说明                | String  |           ——           | yyyy/MM/dd |
|     clearable     |                        是否可清空                         | Boolean |      true / false      |   false    |
|       type        |                       日期选择类型                        | String  |  date / year / month   |    date    |
|     showToday     |                 是否显示 "今天" 快捷按钮                  | Boolean |      true / false      |    true    |
|       form        |                    原生属性，所属表单                     | String  |           ——           |     ——     |
|     startDate     |     限制可选择开始日期，可被 new Date() 解析的字符串      | String  |           ——           |     ——     |
|      endDate      |     限制可选择结束日期，可被 new Date() 解析的字符串      | String  |           ——           |     ——     |
| customActiveColor |                 自定义组件活动元素的色值                  | String  |           ——           |  #0e80eb   |
|    customClass    |                  自定义组件日期面板类名                   | String  |           ——           |     ——     |