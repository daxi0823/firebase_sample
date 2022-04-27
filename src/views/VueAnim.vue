<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less">
        <div class="copy__wrapper">
          <h2 class="mv__ttl">Transition</h2>

          <button @click="isShow = !isShow"><img src="https://picsum.photos/id/237/100/60" alt=""></button>
          <transition name="modal">
            <div v-if="isShow" id="modal_wrapper">
              <div @click="isShow = !isShow" class="modal_bg"></div>
              <div class="modal_inner">
                <span @click="isShow = !isShow" class="modal_close">X</span>
                <img src="https://picsum.photos/id/237/400/300" alt="">
              </div><!-- /.modal_inner -->
            </div><!-- /#modal_wrapper -->
          </transition>



          <!-- <h3 class="mv__ttl">
            パターン１<br>
            <span>消えたり現れたりするパターン</span>
          </h3>
          <button @click="isShow = !isShow">ON/OFF</button>
          <transition name="fade">
            <div v-if="isShow" class="ptt__01">
              <p><img src="https://picsum.photos/id/237/400/300" alt=""></p>
            </div>
          </transition>
          <transition name="slide">
            <div v-if="isShow" class="ptt__01">
              <p><img src="https://picsum.photos/id/238/400/300" alt=""></p>
            </div>
          </transition>
          <h3 class="mv__ttl">
            パターン２<br>
            <span>複数の要素が入れ替わって、一つが表示されるパターン</span>
          </h3>
          <h3 class="mv__ttl">
            パターン３<br>
            <span>transition-grounpを使ったリストアニメーションのパターン</span>
          </h3> -->

        </div><!--copy__wrapper-->
      </section><!--mv-->
    </main>
  </div><!--main_wrapper-->
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';

export default {
  data() {
    return {
      isShow: false
    }
  },
  components: {
    HeaderComp,
  },
}
</script>

<style scoped>
#mv {
  text-align: left;
}
h3.mv__ttl {
  font-size: 2.5rem;
  margin-top: 4em;
}
h3.mv__ttl span {
  font-size: 0.6em;
}
/*パターン１のアニメーション */
.fade-enter {
  /* 現れるときの最初の状態*/
  opacity: 0;
}
.fade-enter-active {
  /* 現れるときのトランジションの状態*/
  transition: opacity 3s;
}
.fade-enter-to {
  /* 現れるときの最後の状態*/
  opacity: 1;
}
.fade-leave {
  /* 消えるときの最初の状態*/
  opacity: 1;
}
.fade-leave-active {
  /* 消えるときのトランジションの状態*/
  transition: opacity 3s;
}
.fade-leave-to {
  /* 消えるときの最後の状態*/
  opacity: 0;
}

/*パターン２のSlideアニメーション */
.slide-enter{}
.slide-enter-active{
  animation: slideIn 1s;
}
.slide-enter-to{}
.slide-leave{}
.slide-leave-active{
  animation: slideIn 1s reverse;
}
.slide-leave-to{}

@keyframes slideIn {
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0);
  }
}




/*  modal */
.modal-enter, .modal-leave-to {
  opacity: 0;
}
.modal-enter-to, .modal-leave {
  opacity: 1;
}
.modal-enter-active, .modal-leave-active {
  transition: 0.6s;
}
.modal_bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  cursor: pointer;
}
.modal_inner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  padding: 30px;
  background-color: #fff;
  z-index: 2;
}
.modal_inner img {
  width: 100%;
}
.modal_close {
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}



</style>
