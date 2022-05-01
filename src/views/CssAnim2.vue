<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less">
        <div class="copy__wrapper">
          <h2 class="mv__ttl mv__ttl__cssanim2" :class="{active: isActive, visited: visited}">CSS Animation</h2>
          <div class="img_box" :class="{active: isActive}">
            <picture class="img_item">
              <source media="(min-width: 565px)" srcset="@/assets/images/yoko.jpg">
              <source media="(min-width: 320px)" srcset="@/assets/images/tate.jpg">
              <img src="@/assets/images/yoko.jpg" alt="">
            </picture>
          </div><!--img_box-->
          <button @click="removeCookie" class="btn btn__cookie" :class="{active: isActive, visited: visited}">Cookie Remove</button>
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
      isActive: true,
      visited: false
    }
  },
  components: {
    HeaderComp,
  },
  mounted() {
    // 初回アクセス時(visited=yes)がcookieになかったら
    if (document.cookie.indexOf('visited=yes') === -1) {
      document.cookie = 'visited=yes path=/cssanim2';
      this.isActive = true;

    } else {
      // 2回目以降のアクセス
      console.log('2回目以降のアクセスです');
      this.isActive = false;
      this.visited = true
    }
  },
  methods: {
    removeCookie() {
      // Cookieを削除
      document.cookie = 'visited=yes; max-age=0';
      //ページ再読み込み
      location.reload();
    }
  }
}
</script>

<style scoped>
.mv__ttl__cssanim2, .btn__cookie {
  position: relative;
  z-index: 1;
  opacity: 0;
}
.mv__ttl__cssanim2.visited, .btn__cookie.visited {
  opacity: 1;
}
.mv__ttl__cssanim2.active, .btn__cookie.active {
  animation: txtAnim 1s cubic-bezier(0.215, 0.61, 0.355, 1) 1.2s forwards;
}
.btn__cookie.active {
  animation-delay: 1.6s;
}
.btn__cookie:hover, .btn__cookie.active:hover, .btn__cookie.visited:hover {
  opacity: 0.8;
}
@keyframes txtAnim {
  0% {
    opacity: 0;
    transform: translate(0, 20vh);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.img_box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.img_box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img_box::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 100%;
  background-color: cadetblue;
  /* width: 100%;
  height: 100%; */
}
.img_box.active::after {
  animation: slide 1.6s ease-in-out 0s 1 forwards;
}
@keyframes slide {
  0% {
    left: 0;
    right: 100%;
  }
  50% {
    /*背景色にleftとrightともに100%状態 */
    left: 0;
    right: 0;
  }
  100% {
    left: 100%;
    right: 0;
  }
}
/* .img_item {
  opacity: 0;
} */

.active .img_item img {
  opacity: 1;
  animation: imgShow 1.6s ease-in-out 0s 1 normal;
}
@keyframes imgShow {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.1% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
  }
}


.sp__only {
  display: block;
}
.pc__only {
  display: none;
}
@media (min-width: 565px) {
  .sp__only {
    display: none;
  }
  .pc__only {
    display: block;
  }
}

</style>
