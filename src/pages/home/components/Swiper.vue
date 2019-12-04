<template>
  <!-- 外层套div，解决网速慢时的页面抖动问题 -->
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  // 注意子组件里的data必须是一个函数，这里是es6写法
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    // 解决初次展示的问题，初次展示会展示第四张，有了这个方法后展示第一张
    showSwiper() {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 31.25%
  // 这里设置背景色，用于网速慢的时候美化页面
  background: #eee

  .swiper-img
    width: 100%
</style>
