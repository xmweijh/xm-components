<script>
  export default {
    name: 'Director',
    props: {
      dir: String,
    },
    setup(props, ctx) {
      const dirClick = (dir) => {
        ctx.emit('dirClick', dir);
      };

      return {
        dirClick,
      };
    },
  };
</script>

<template>
  <div v-if="dir === 'next'" class="director dir-next">
    <a href="javascript:;" @click="dirClick(dir)">&gt;</a>
  </div>
  <div v-else-if="dir === 'prev'" class="director dir-prev">
    <a href="javascript:;" @click="dirClick(dir)">&lt;</a>
  </div>
</template>

<style lang="scss" scoped>
  .director {
    position: absolute;
    top: 50%;
    z-index: 1;
    margin-top: -15px;
    width: 20px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);

    a {
      color: #fff;
      text-decoration: none;
    }

    &.dir-next {
      right: 0;
    }

    &.dir-prev {
      left: 0;
    }
  }
</style>
