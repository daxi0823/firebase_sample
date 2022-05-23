import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //コンポーネントのdataに相当するもの
  state: {
    count: 2,
    time: ''
  },
  //算出プロパティに相当するもの
  getters: {
    // count: state => state.count,

    // stateのデータの加工
    // 
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
    time: state => state.time
  },
  //メソッドに相当するもの
  mutations: {
    // stateの更新は、全てmutationsでおこなっている
    // "="となっているのは、すべてmutationsに書く
    // gettersでは書かない

    increment(state, number) {
      // number:payload(新しい引数) stateを更新するための引数
      state.count += number
    },
    decrement(state, number) {
      state.count -= number
    },
    updateTime(state) {
      //本日現在の日付オブジェクトを作る
      let today = new Date();
      let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      //現在の時間を取得
      // let hour = today.getHours();
      let hour = ("0"+today.getHours()).slice(-2);
      //現在の分を取得
      // let min = today.getMinutes();
      let min = ("0"+today.getMinutes()).slice(-2);
      //現在の秒を取得
      // let sec = today.getSeconds();
      let sec = ("0"+today.getSeconds()).slice(-2)
      //曜日の取得
      let day = today.getDay();
      state.time = `${hour}:${min}:${sec}(${week[day]})`;
    }
  },
  actions: {
    // 正確で長い書き方
    increment(context, number) {
      context.commit('increment', number);
      // mutationのincre
    },
    // こちらで良い
    decrement({commit}, number) {
      commit('decrement', number);
    },
    updateTime({commit}) {
      setInterval(() => {
        commit('updateTime');
      }, 100)
    }
  },
  modules: {
  }
})
