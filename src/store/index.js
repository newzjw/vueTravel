import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// 通过vuex创建了一个仓库，并导出
export default new Vuex.Store({
  // state存放公用数据
  state,
  mutations
  // actions: {
  //   // changeCity的第一个参数是上下文，第二个参数是传递过来的数据
  //   changeCity(ctx, city) {
  //     // actions执行mutations，需要用到commit，看图
  //     ctx.commit('changeCity', city)
  //   }
  // },
  // mutations: {
  //   changeCity(state, city) {
  //     // state里保存的是公用的数据，
  //     state.city = city
  //     try {
  //       localStorage.city = city
  //     } catch (e) { }
  //   }
  // }
})
