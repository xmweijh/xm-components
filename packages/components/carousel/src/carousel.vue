<script lang="ts" setup>
  import { reactive, onMounted, onBeforeUnmount } from 'vue';
  // import { _.throttle } from 'lodash';
  import _ from 'lodash';
  import { ICarouselProps } from './carousel';
  import Dot from './dot.vue';
  import Director from './director.vue';

  //组件接收的值类型
  const carouselProps = defineProps(ICarouselProps);
  const state = reactive({
    currentIndex: carouselProps.initial,
    itemLen: carouselProps.options.length,
  });

  let t: any = null;

  //自动轮播
  const autoPlay = () => {
    if (carouselProps.autoplay) {
      t = setInterval(() => {
        setIndex('next');
        // console.log(state.currentIndex);
      }, carouselProps.duration);
    }
  };
  //获取当前的图片Index
  const setIndex = (dir: String) => {
    switch (dir) {
      case 'next':
        state.currentIndex = state.currentIndex + 1;
        if (state.currentIndex === state.itemLen) {
          state.currentIndex = 0;
        }
        break;
      case 'prev':
        state.currentIndex = state.currentIndex - 1;
        if (state.currentIndex === -1) {
          state.currentIndex = state.itemLen - 1;
        }
        break;
    }
  };

  const dotClick = _.throttle((index) => {
    state.currentIndex = index;
  }, 800);

  const dirClick = _.throttle((dir) => {
    setIndex(dir);
  }, 800);

  function _clearIntervalFn() {
    clearInterval(t);
    t = null;
  }

  const mouseEnter = () => {
    _clearIntervalFn();
  };

  const mouseLeave = () => {
    autoPlay();
  };

  onMounted(() => {
    autoPlay();
  });

  onBeforeUnmount(() => {
    _clearIntervalFn();
  });

  console.log(carouselProps.options.length);
</script>

<template>
  <div class="carousel" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="inner">
      <div v-for="(item, index) of carouselProps.options" :key="index" class="car-item">
        <transition>
          <img v-show="item.id === state.currentIndex" :src="item.imgUrl" alt="" />
        </transition>
      </div>
      <Dot
        :has-dot="carouselProps.hasDot"
        :item-len="state.itemLen"
        :current-index="state.currentIndex"
        @dot-click="dotClick"
      ></Dot>
      <Director dir="prev" @dir-click="dirClick" />
      <Director dir="next" @dir-click="dirClick" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .carousel {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .inner {
      width: 100%;
      height: 100%;
      position: relative;

      .car-item {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .v-enter-active,
      .v-leave-active {
        transition: all 0.8s linear;
      }
      .v-enter-active {
        transform: translateX(100%);
      }
      .v-enter-to {
        transform: translateX(0);
      }
      .v-leave-active {
        transform: translateX(0);
      }
      .v-leave-to {
        transform: translateX(-100%);
      }
    }
  }
  img {
    width: 100%;
  }
</style>
