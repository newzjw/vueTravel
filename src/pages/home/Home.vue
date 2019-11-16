<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
// 引入组件
import HomeHeader from './componets/Header'
import HomeSwiper from './componets/Swiper'
import HomeIcons from './componets/Icons'
export default {
  name: 'Home',
  // 挂载子组件
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>

</style>
