<template>
  <header>
    <div class="container">
      <h2 class="logo"><router-link to="/"><img src="/images/logo.png" alt="Cafe Du Ando" width="800" height="205"></router-link></h2>
      <div class="gnav_wrapper">
        <div @click="toggleActive" :class="{active: isActive}" id="menu_btn" class="hamburger_menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav id="gnav" :class="{active: isActive}">
          <ul>
            <li @click="toggleActive"><router-link to="/">Home</router-link></li>
            <li @click="toggleActive"><router-link to="/about">About</router-link></li>
            <li @click="toggleActive"><router-link to="/clock">Clock</router-link></li>
            <li @click="toggleActive"><router-link to="/webapi">Web API</router-link></li>
            <li @click="toggleActive"><router-link to="/webapi-img">Random Image</router-link></li>
            <li @click="toggleActive"><router-link to="/vuex">Vuex</router-link></li>
          </ul>
        </nav>
      </div><!--gnav_wrapper-->
    </div><!--gnav_wrapper-->
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.isActive = false;
    })
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    }
  }
}
</script>
