<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less">
        <div class="copy__wrapper">
          <h2 class="mv__ttl">動的コンポーネント</h2>
          <button @click="current = 'CompA' ">CompA</button>
          <button @click="current = 'CompB' ">CompB</button>
          <button @click="current = 'CompC' ">CompC</button>
          <transition name="slide" mode="out-in" appear>
            <CompA v-if="current === 'CompA' "></CompA>
            <CompB v-else-if="current === 'CompB' "></CompB>
            <CompC v-else></CompC>
          </transition>
          <!-- <div v-for="(Comp, index) in Comps" :key="index">
            <component :is="Comps[index].name" />
          </div> -->
        </div><!--copy__wrapper-->
      </section><!--mv-->
    </main>
    <FooterComp></FooterComp>
  </div><!--main_wrapper-->
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import CompA from '@/components/CompA.vue';
import CompB from '@/components/CompB.vue';
import CompC from '@/components/CompC.vue';

export default {
  data() {
    return {
      current: 'CompA',
      Comps: [
        {name: CompA},
        {name: CompB},
        {name: CompC}
      ]
    }
  },
  components: {
    HeaderComp,
    FooterComp,
    CompA,
    CompB,
    CompC
  },
}
</script>

<style scoped>
#selectedID {
  -webkit-appearance: auto;
  border: solid 1px #CCC;
  padding: 0.4em;
  border-radius: 0.4em;
  margin-bottom: 3em;
}
.selectedItem {
  text-align: left;
  padding: 2em 4em;
}




.slide-enter-active{
  animation: slideIn 1s;
}
.slide-leave-active{
  animation: slideIn 1s reverse;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
