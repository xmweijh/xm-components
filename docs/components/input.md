# Icon 文档

## 安装

```javascript
import { createApp } from 'vue';
import { IInput } from 'vangle';

const app = createApp();
app.use(IInput);
```

## 基础用法

:::demo 

input/basic

:::

## 禁用状态

:::demo 通过 disabled 属性指定是否禁用 input 组件

input/disabled

:::

## 尺寸

:::demo  尺寸包括medium,small,mini,不传则是默认尺寸。同样的根据size属性来赋予input 输入框大小

input/size

:::

## 一键清空

:::demo  使用clearable属性即可得到一个可一键清空的输入框

input/clearable

:::

## 密码框

:::demo  使用 show-password 属性即可得到一个可切换显示隐藏的密码框

input/password

:::


## 带图标的输入框

:::demo  要在输入框中添加图标，你可以简单地使用 prefix-icon 和 suffix-icon 属性。 另外， prefix 和 suffix 命名的插槽也能正常工作

input/iconInput

:::

## 文本域

:::demo  用于输入多行文本信息可缩放的输入框。 添加 type="textarea" 属性来将 input 元素转换为原生的 textarea 元素。

input/textarea

:::
可自适应高度文本域

## 可自适应高度文本域

:::demo  设置文字输入类型的 autosize 属性使得根据内容自动调整的高度。 你可以给 autosize 提供一个包含有最大和最小高度的对象，让输入框自动调整。

input/autosizeTextarea

:::

## 复合型输入框

:::demo  借助 vue3 中的slot进行实现,其中用到了useSlots来判断用户使用了哪个插槽,从而展示不同样式

input/useSlot

:::


## 图表属性
| 属性   | 说明     | 类型                     | Default             |
| ----- | -------- | ------------------------ |  ------------------ |
| model-value / v-model | 绑定值 | string / number |  — |
| disabled  | 是否禁用	 | boolean    | false  |
| size  | 输入框尺寸，只在 type 不为 'textarea' 时有效	 | string    | —  |
| clearable  | 是否显示清除按钮，只有当 type 不是 textarea时生效	 | boolean    | false  |
| showPassword  | 是否显示切换密码图标	 | boolean    | false  |
| prefixIcon  | 自定义前缀图标	 | string    | —  |
| suffixIcon  | 自定义后缀图标	 | string    | —  |
| icon  | 图标名称	 | string    | —  |

