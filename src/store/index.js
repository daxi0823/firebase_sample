import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //コンポーネントのdataに相当するもの
  state: {
    count: 2
  },
  //算出プロパティに相当するもの
  getters: {
    // count: state => state.count,
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
  },
  //メソッドに相当するもの
  mutations: {
    increment(state, number) {
      state.count += number
    },
    decrement(state, number) {
      state.count -= number
    },
  },
  actions: {
    increment(context, number) {
      context.commit('increment', number);
    },
    decrement({commit}, number) {
      commit('decrement', number);
    },
  },
  modules: {
  }
})
