# message 文档

## 安装
```javascript
import { createApp } from 'vue';
import { IMessage } from 'xm-components';

```

## 基本用法
:::demo Imessage组件

message/basic

:::

## 不同类型
可以通过设置types获取不同类型的message，目前支持'info' | 'success' |'warning' | 'error' | 'loading'这五种。
:::demo 当不需要设置`duration`属性，我们可以直接传内容字符串，并通过`IMessage[type]`选择类型。

message/types

:::

## 消息属性

| 属性     | 说明         | 类型   | 接收值                                        | Default |
| -------- | ------------ | ------ | --------------------------------------------- | ------- |
| content  | 消息内容     | string | —                                             | —       |
| type     | 消息类型     | string | success \| warning \| error\| info \| loading | info    |
| duration | 消息持续时间 | number | —                                             | 3000    |





