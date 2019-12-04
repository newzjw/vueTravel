<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    // 用于左右滑动的分页，返回一个二维数组
    pages() {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      console.log(pages)
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
// 外层专门做宽高比例
.icons >>> .swiper-container
  height: 0
  padding-bottom: 61%

.icon
  position: relative
  overflow: hidden
  width: 25%
  height: 0px
  margin-top: .2rem
  float: left
  padding-bottom: 25%

  .icon-img
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: .44rem
    box-sizing: border-box
    padding: .1rem
    text-align: center

    .icon-img-content
      width: 80%

  .icon-desc
    position: absolute
    left: 0
    right: 0
    bottom: -.1rem
    height: .44rem
    line-height: .44rem
    text-align: center
    color: $darkTextColor
    ellipsis()
</style>
