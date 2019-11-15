<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img
          class="swiper-img"
          src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/2b3a9445cc37885eb13e0402baef9f5e.png_750x200_24df2b41.png"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-img"
          src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/bddb8937748a19db48bdbfae91c0936d.jpg_750x200_85ec3869.jpg"
          alt
        />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  // 注意子组件里的data必须是一个函数，这里是es6写法
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
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
  background: #eee

  .swiper-img
    width: 100%
</style>
