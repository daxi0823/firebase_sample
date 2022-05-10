<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less">
        <!--Waves Container-->
        <!-- heigtの数値を動的に変更するためにbind -->
        <div class="wave__wrapper" :style="{height: waveHeight + 'vh'}">
          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use xlink:href="#gentle-wave" x="48" y="0" />
              <use xlink:href="#gentle-wave" x="48" y="3" />
              <use xlink:href="#gentle-wave" x="48" y="5" />
              <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div><!--wave__wrapper end-->

        <div class="copy__wrapper">
          <h2 class="mv__ttl">Stop Watch</h2>
          <p class="stop-watch">{{ m }}:{{ s }}:{{ ms }}</p>
          <!-- (10秒 - アニメーション経過秒)を超えるとactiveクラスを付与、以下同様 -->
          <p
            class="sec sec10"
            :class="
              interval > 7600
                ? { overlimit: !isActive }
                : { overlimit: isActive }
            "
          >
            10sec！
          </p>
          <p
            class="sec sec20"
            :class="
              interval > 17600
                ? { overlimit: !isActive }
                : { overlimit: isActive }
            "
          >
            20sec！
          </p>
          <p
            class="sec sec30"
            :class="
              interval > 27600
                ? { overlimit: !isActive }
                : { overlimit: isActive }
            "
          >
            30sec！
          </p>
          <div class="btn__wrapper">
            <button @click="startTimer()" v-show="!active">Start</button>
            <button @click="stopTimer()" v-show="active">Stop</button>
            <button @click="resetTimer()">Reset</button>
          </div>
          <!--btn__wrapper-->
        </div>
        <!--copy__wrapper-->
      </section>
      <!--mv-->
    </main>
  </div>
  <!--main_wrapper-->
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";

export default {
  name: "stopWatch",
  data() {
    return {
      active: false, // 実行状態
      start: 0, // startを押した時刻
      timer: 0, // setInterval()の格納用
      interval: 0, // 計測時間
      accum: 0, // 累積時間(stopしたとき用)
      isActive: false, //表示のOn/Off
      waveHeight: 0, //波の位置(高さ)
    };
  },
  components: {
    HeaderComp,
  },
  computed: {
    m() {
      let m = Math.floor((this.interval / 60000) % 60);
      return ("0" + m).slice(-2);
    },
    s() {
      let s = Math.floor((this.interval / 1000) % 60);
      return ("0" + s).slice(-2);
    },
    ms() {
      let ms = Math.floor(this.interval / 10);
      return ("0" + ms).slice(-2);
    },
  },
  methods: {
    startTimer() {
      this.active = true;
      this.start = Date.now();

      // 10msごとに現在時刻とstartを押した時刻の差を足す
      this.timer = setInterval(() => {
        if(this.interval <= 30000) {
          this.interval = this.accum + (Date.now() - this.start);
          this.waveHeight =  (this.interval / 30000) * 100 + 12.98;
        }
        //30秒になったらタイマーをクリア
        if(this.interval == 30000) {
          clearInterval(this.timer);
        }
      }, 10);
    },
    stopTimer() {
      this.active = false;
      this.accum = this.interval;
      clearInterval(this.timer);
    },
    resetTimer() {
      this.interval = 0;
      this.accum = 0;
      this.start = Date.now();
      this.waveHeight = 0;
    },
  },
};
</script>

<style scoped>
.btn__wrapper {
  margin-top: 40px;
}
.btn__wrapper button {
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  padding: 0;
}
.btn__wrapper button:hover {
  opacity: 0.7;
}
.stop-watch {
  font-family: "Nova Mono", monospace;
  font-size: 4.8rem;
}
.sec {
  display: none;
  position: absolute;
  left: -60px;
  background-color: yellow;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 50%;
  font-size: 18px;
  font-weight: bold;
}
.sec10 {
  bottom: 10%;
}
.sec20 {
  bottom: 43.3%;
}
.sec30 {
  bottom: 76.6%;
}
.sec.overlimit {
  display: block;
  /* ふわふわと移動アニメーション */
  animation: fuwafuwa 3s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite, sec_bubble 2.4s cubic-bezier(0.91, 0.14, 0.56, 1.9) forwards;
}
@keyframes fuwafuwa {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
@keyframes sec_bubble {
  0% {
    left: 150vw;
  }
  100% {
    left: -60px;
  }
}
#mv {
  position: relative;
}
#mv::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ccc;
  overflow: hidden;
}
.copy__wrapper {
  position: relative;
  z-index: 10;
}
/* Wave */
.wave__wrapper {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.wave__wrapper::before {
  content: '';
  position: absolute;
  z-index: 1;
  top: 12.98vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* padding-top: 12.98vh; */
  background-color: rgba(62, 189, 248, 1);
}
.waves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 12.98vh;
}
.parallax > use {
  fill: rgba(62, 189, 248, 1);
  /* 波のアニメ */
  animation: waveAnim 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
  opacity: 0.7;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
  opacity: 0.5;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
  opacity: 0.3;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
  fill: rgba(62, 189, 248, 1);
}
@keyframes waveAnim {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
