# Form 表单

## 安装

```javascript
import { createApp } from 'vue';
import { IForm, IFormItem } from 'xm-components';

const app = createApp();
app.use({IForm, IFormItem});
```

## 基本用法

:::demo 

form/basic

:::

## 行内表单
添加`inline`将表单一行放置
:::demo 

form/inline

:::

## 对齐方式
修改`labelPosition`改变表单标题的对齐方式，可以为`'top' | 'left' | 'right'` 。
:::demo 

form/position

:::

## 尺寸
修改`size`改变表单的尺寸，可以为`'default' | 'small' | 'large'`。
:::demo 

form/size

:::

## 表单校验
提交校验表单，需要绑定`ref`,`prop`,`rules`。
:::demo 

form/validate

:::


## 表单属性

| 属性          | 说明         | 类型             | 接收值                      | 默认值    |
| ------------- | ------------ | ---------------- | --------------------------- | --------- |
| model         | 表单的数据   | Object           | —                           | —         |
| labelWidth    | 标题的宽体   | [String, Number] | —                           | —         |
| labelPosition | 对齐方式     | String           | 'top'\|‘small’\|'large'     | 'right'   |
| inline        | 是否一行展示 | Boolean          | —                           | false     |
| size          | 尺寸         | String           | 'default'\| 'small' 'large' | ‘default‘ |
| rules         | 校验规则     | Object           | FormRules                   | —         |

