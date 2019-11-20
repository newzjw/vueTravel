<template>
  <ul class="list">
    <li class="item"
      v-for="(item,key) of cities"
      :key="key"
      :ref="key"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ key }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    // 实现拖动功能，需要根据下标找到对应的字母，需要数组才能实现
    // 而cities是对象，把cities对象里的数据，放到数组里
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // A元素距离顶部的高度，这个值是固定的，把它写在updated钩子里
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      console.log(e)
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 函数节流，限制一下函数执行的频率
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 // 滑动的时候手指距离顶部的高度
          const index = Math.floor((touchY - this.startY) / 20) // 字母下标
          if (index >= 0 && index < this.letters.length) {
            // 向父组件传递字母
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
