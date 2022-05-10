<template>
  <div>
    <span class="time__dsp">{{ time }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // time: ''
    }
  },
  computed: {
    time() {
      return this.$store.getters.time;
    }
  },
  created() {
    this.$store.dispatch('updateTime');
    // setInterval(this.getTime, 800);
    // let that = this;
    // setInterval(function() {
    //   console.log(that);
    // }, 800)
    // setInterval(() => {
    //   this.getTime();
    //   // console.log(this);
    // }, 1000)
  },
  methods: {
    // getTime() {
    //   //本日現在の日付オブジェクトを作る
    //   let today = new Date();
    //   let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    //   //現在の時間を取得
    //   // let hour = today.getHours();
    //   let hour = ("0"+today.getHours()).slice(-2);
    //   //現在の分を取得
    //   // let min = today.getMinutes();
    //   let min = ("0"+today.getMinutes()).slice(-2);
    //   //現在の秒を取得
    //   // let sec = today.getSeconds();
    //   let sec = ("0"+today.getSeconds()).slice(-2)
    //   //曜日の取得
    //   let day = today.getDay();
    //   this.time = `${hour}:${min}:${sec}(${week[day]})`;
    // }
  }
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap'); */
.time__dsp {
  font-size: 80px;
  font-family: 'Nova Mono', monospace;
  color: #b1532a;
}
</style>
