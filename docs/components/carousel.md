# Carousel 走马灯

## 安装

```javascript
import { createApp } from 'vue';
import { ICarousel } from 'xm-components';

const app = createApp();
app.use(ICarousel);
```
在有限空间内，循环播放同一类型的图片、文字等内容

## 基础用法
 默认情况下，在鼠标 hover 底部的指示器时就会触发切换。 通过设置 trigger 属性为 click，可以达到点击触发的效果
 
:::demo Icard组件

carousel/basic

:::



## 卡片属性
| 属性       | 说明                                                         | 类型                      | 接收值 | 默认值 |
| ---------- | ------------------------------------------------------------ | ------------------------- | ------ | ------ |
| autoplay     | 是否自动播放 | string                    | —      | —      |
| duration | 自动切换的时间间隔，单位为毫秒                                             | Number             | —      | —      |
| hasDot     | 是否显示下方切换控件                                            | Boolean | —      | always |
| hasDirectors     | 是否显示左右切换控件                                             | Boolean | —      | always |
| options     | 数据图片                                           | —| —      | always |
