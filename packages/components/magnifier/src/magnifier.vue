<script lang="ts" setup>
  import { onMounted, computed } from 'vue';
  import type { CSSProperties } from 'vue';
  import testImg from './testImg.jpeg';

  //组件接收的值类型
  interface IMagnifierProps {
    imgUrl?: string;
    blank?: boolean; //是否在当前页面跳转
    link?: string; //跳转网址
    imgWidth?: string | number; //图片大小
    imgHeight?: string | number;
    magWidth?: string | number; //放大镜宽高
    magHigth?: string | number;
  }
  //withDefaults可以为props添加默认值等
  const magnifierProps = withDefaults(defineProps<IMagnifierProps>(), {
    imgUrl: testImg,
    blank: true,
    link: 'https://www.baidu.com',
    imgWidth: 375,
    imgHeight: 561,
    magWidth: 100, //放大镜宽高
    magHigth: 100,
  });

  // 传入需更改的样式，动态定义Ima宽高
  const imgStyle = computed<CSSProperties>(() => {
    if (!magnifierProps.imgWidth && !magnifierProps.imgHeight) return {};
    return {
      '--imgWidth': magnifierProps.imgWidth + 'px',
      '--imgHeight': magnifierProps.imgHeight + 'px',
    };
  });

  // 获取dom的宽高
  const getDomSize = (el: HTMLElement, pro: string) => {
    return parseInt(window.getComputedStyle(el, null)[pro]);
  };

  onMounted(() => {
    // 获取Dom
    const remFlag = document.getElementById('imgWrap') as HTMLInputElement;
    const oMagWrap = remFlag.querySelector('.magWrap') as HTMLInputElement;
    const oMagImg = oMagWrap.querySelector('.magImg') as HTMLInputElement;

    const imgWith = getDomSize(remFlag, 'width');
    const imgHeight = getDomSize(remFlag, 'height');
    const magWith = getDomSize(oMagWrap, 'width');
    const magHeight = getDomSize(oMagWrap, 'height');

    // 获取坐标
    const imgX = remFlag.offsetLeft;
    const imgY = remFlag.offsetTop;

    // 监听鼠标在视图中的操作，并判断出边界的时候消失放大
    const handleMouseMove = (e) => {
      const { x, y, mouseX, mouseY } = getMag(e);
      showMag(x, y, mouseX, mouseY);
    };
    // 计算坐标
    const showMag = (x, y, mouseX, mouseY) => {
      oMagWrap.style.left = x + 'px';
      oMagWrap.style.top = y + 'px';
      oMagImg.style.left = -x + 'px';
      oMagImg.style.top = -y + 'px';
      if (mouseX < 0 || mouseY < 0 || mouseX > imgWith || mouseY > imgHeight) {
        (oMagWrap.className = 'magWrap'),
          document.removeEventListener('mousemove', handleMouseMove, false);
      }
    };
    const getMag = (e) => {
      return {
        x: e.pageX - imgX - magWith / 2,
        y: e.pageY - imgY - magHeight / 2,
        mouseX: e.pageX - imgX,
        mouseY: e.pageY - imgY,
      };
    };

    const bindEvent = () => {
      remFlag.addEventListener(
        'mouseover',
        (e) => {
          oMagWrap.className += ' show';
          const { x, y, mouseX, mouseY } = getMag(e);
          showMag(x, y, mouseX, mouseY);
          document.addEventListener('mousemove', handleMouseMove, false);
        },
        false,
      );
      remFlag.addEventListener(
        'mouseout',
        () => {
          oMagWrap.className = 'magWrap';
          document.removeEventListener('mousemove', handleMouseMove, false);
        },
        false,
      );
    };
    bindEvent();
  });

  defineOptions({
    name: 'IMagnifier',
  });
</script>

<template>
  <div id="imgWrap" class="imgWrap" :style="imgStyle">
    <a
      class="magWrap"
      :href="magnifierProps.link"
      :target="magnifierProps.blank ? '_blank' : ''"
      :style="{ width: magnifierProps.magWidth + 'px', height: magnifierProps.magHigth + 'px' }"
    >
      <img
        class="magImg"
        :src="magnifierProps.imgUrl"
        alt=""
        :style="{ width: magnifierProps.imgWidth + 'px', height: magnifierProps.imgHeight + 'px' }"
      />
    </a>
    <a :href="magnifierProps.link">
      <img class="staticImg" :src="magnifierProps.imgUrl" alt="" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
  @import './magnifier.scss';
</style>
