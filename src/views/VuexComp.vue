<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less">
        <div class="copy__wrapper">
          <h2 class="mv__ttl">Vuex</h2>
          <h2 class="mv__ttl">{{ doubleCount }}</h2>
          <h2 class="mv__ttl">{{ tripleCount }}</h2>
          <button @click="increment">+1</button>
          <button @click="decrement">-1</button>
        </div>
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
      // count: 2
    }
  },
  computed: {
    doubleCount() {
      return this.$store.getters.doubleCount
      // gettersのdoubleCountを
    },
    tripleCount() {
      return this.$store.getters.tripleCount
    }
  },
  components: {
    HeaderComp,
    FooterComp,
  },
  methods: {
    // increment() {
    //   this.$store.commit('increment', 1)
    // },
    // decrement() {
    //   this.$store.commit('decrement', 1)
    // },
    increment() {
      this.$store.dispatch('increment', 1)
      // 1 が、storeのactionsに渡される
      // これは、インプットのバリューなど、変数で受けることも可能
    },
    decrement() {
      this.$store.dispatch('decrement', 1)
    },
    // increment() {
    //   this.count++
    // },
    // decrement() {
    //   this.count--
    // }
  },
}
</script>
