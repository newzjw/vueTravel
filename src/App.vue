<template>
  <div id="app">
    <!-- keep alive缓存，detail页面不做缓存 -->
    <keep-alive exclude="Home">
      <!-- <router-view/>显示的是当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
