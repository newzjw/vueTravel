<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// 引入组件
import HomeHeader from './componets/Header'
import HomeSwiper from './componets/Swiper'
export default {
  name: 'Home',
  // 挂载子组件
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
