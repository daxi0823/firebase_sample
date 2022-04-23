<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less">
        <div class="copy__wrapper">
          <h2 class="mv__ttl">CSS Transition</h2>
          <button class="btn">Click !</button>
        </div><!--copy__wrapper-->
      </section><!--mv-->
    </main>
    <FooterComp></FooterComp>
  </div><!--main_wrapper-->
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    HeaderComp,
    FooterComp,
  },
}
</script>

<style scoped>
.btn {
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: background-color 2s ease,
              color 5s ease-in-out,
              transform 2s cubic-bezier(0.91, 0.14, 0.56, 1.9)
              ;
}
.btn:hover {
  opacity: 1;
  background-color: rgb(241, 173, 15);
  color: #000;
  transform: rotate(-30deg) scale(1.8);
}
.btn::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: linear-gradient(90deg, #327155 50%, rgb(241, 173, 15) 100%);
  transform: translateX(-100%);
  transition: transform 0.3s;
  border-radius: 9999999px;
}
.btn:hover::before {
  transform: none;
}
.btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 100%;
  background-image: url(../assets/images/icons/arrow-right-circle-fill.svg);
  background-position: right center;
  background-size: 28px;
}
</style>
