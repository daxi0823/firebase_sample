<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv">
        <div class="copy__wrapper">
          <h2 class="mv__ttl"><ClockComp></ClockComp></h2>
        </div>
      </section><!--mv-->
    </main>
    <FooterComp></FooterComp>
  </div><!--main_wrapper-->
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import ClockComp from '@/components/ClockComp.vue';
export default {
  components: {
    HeaderComp,
    FooterComp,
    ClockComp
  }
}
</script>
