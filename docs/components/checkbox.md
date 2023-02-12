# Checkbox 多选文档

## 安装
```javascript
import { createApp } from 'vue';
import { ICheckbox } from 'vangle';

const app = createApp();
app.use(ICheckbox);
```
#### 常用从一组数据中选择多个数据


## 基本使用

#### checkbox 组件的基本使用，需要一个主要的 _options_ 参数。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="checkbox" demoName="demo1"/>

## 默认选中

#### _v-model_ 添加默认绑定选项 _value_ 值。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="checkbox" demoName="demo2"/>

## 禁用选项

#### 可以针对 _options_ 下某个选项来添加 _disabled_ 属性实现禁用选项。

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="checkbox" demoName="demo3"/>

## 垂直排列

#### 可以通过设置 _inline_ 属性为 _false_ 实现垂直排列。

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="checkbox" demoName="demo4"/>

## 匹配不同格式的数据

#### 默认 _options_ 接收 _label_ 和 _value_ 作为显示和值绑定，你可以根据 _labelFiled_ 和 _valueFiled_ 来重新确定字段的绑定，更方便的匹配不同格式的数据。

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="checkbox" demoName="demo5"/>

## 不同大小

#### 可以通过设置 _size_ 属性来显示不同大小。

<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="checkbox" demoName="demo6"/>

## 自定义颜色

#### 可以通过设置 _customColor_ 属性为选中的选项自定义你喜欢的颜色。

<div class="componetnsBox">
  <demo7/>
</div>
<preview compName="checkbox" demoName="demo7"/>


