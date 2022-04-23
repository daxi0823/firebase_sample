<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less">
        <div class="copy__wrapper">
          <h2 class="mv__ttl">CSS Animation</h2>
          <div class="img_box active">
            <picture class="img_item">
              <source media="(min-width: 565px)" srcset="@/assets/images/yoko.jpg">
              <source media="(min-width: 320px)" srcset="@/assets/images/tate.jpg">
              <img src="@/assets/images/yoko.jpg" alt="">
            </picture>
          </div><!--img_box-->
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
    }
  },
  components: {
    HeaderComp,
  },
}
</script>

<style scoped>
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
  right: 0;
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
