# Transfer 穿梭框

## 安装
```javascript
import { createApp } from 'vue';
import { ITransfer } from 'xm-components';

const app = createApp();
app.use(ITransfer);
```

## 基础用法

:::demo 

transfer/basic

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


