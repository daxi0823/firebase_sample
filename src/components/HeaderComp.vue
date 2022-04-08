<template>
  <header>
    <div class="container">
      <h2 class="logo"><a href="./index.html"><img src="/images/logo.png" alt="Cafe Du Ando" width="800" height="205"></a></h2>
      <div class="gnav_wrapper">
        <div @click="toggleActive" :class="{active: isActive}" id="menu_btn" class="hamburger_menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav id="gnav" :class="{active: isActive}">
          <ul>
            <li><router-link to="/" @click="toggleActive">Home</router-link></li>
            <li><router-link to="/about" @click="toggleActive">About</router-link></li>
            <li><router-link to="/clock" @click="toggleActive">Clock</router-link></li>
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
