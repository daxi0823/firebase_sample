<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less mv__random-image">
        <div class="copy__wrapper">
          <div class="mv__ttl__wrapper">
            <h2 class="mv__ttl">Random Image</h2>
            <button @click="shuffleArray(posts)" class="btn_random">Random</button>
          </div><!--mv__ttl__wrapper-->
          <transition-group tag="ul" class="img__wrapper">
            <li v-for="post in posts" :key="post.id">
              <!-- {{ post.author }} -->
              <img :src="post.download_url" :width="post.width" :height="post.height" alt="">
            </li>
          </transition-group>

        </div><!--copy__wrapper-->
      </section><!--mv-->
    </main>
  </div><!--main_wrapper-->
</template>

<script>
import axios from 'axios';
import HeaderComp from '@/components/HeaderComp.vue';
export default {
  data() {
    return {
      posts: [],
    }
  },
  computed: {
  },
  components: {
    HeaderComp,
  },
  created() {
    axios
    .get('https://picsum.photos/v2/list')
    .then(response => {
      // console.log(response.data);
      this.posts = response.data;
      console.log(this.posts);
    })
  },
  methods: {
    shuffleArray(array) {
      const cloneArray = [...array];
      cloneArray.reduce((prev,current,index) => {
        let rdmIndex = Math.floor(Math.random() * (index + 1));
        //配列の順番総入れ替え
        cloneArray[index] = cloneArray[rdmIndex]
        cloneArray[rdmIndex] = current;
        this.posts = cloneArray;
      })
    },
  }
}
</script>

<style scoped>
#mv.mv__random-image .mv__ttl {
  margin-bottom: 0.2em;
  /* text-shadow: 1px 1px 3px rgb(0 0 0 / 50%); */
}
.copy__wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mv__ttl__wrapper {
  position: fixed;
  z-index: 5;
  padding: 2em 3em;
  backdrop-filter: blur(10px);
  background-color: rgba(50, 113, 85, 0.2);
  border-radius: 10px;
  border: solid 1px #CCC;
  box-shadow: 4px 5px 16px 2px rgb(0 0 0 / 20%);
}
#selectedID {
  max-width: 14em;
  margin-bottom: 3em;
  -webkit-appearance: auto;
  border: solid 1px #CCC;
  padding: 0.4em;
  border-radius: 0.4em;
}
.selectedItem {
  text-align: left;
  padding: 2em 4em;
}
.img__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  gap: 10px;
}
.img__wrapper li {
  flex-grow: 1;
  /* flex: 1 0 calc(33.3% - 20px); */
  /* width: max(calc(25% - 20px), 280px); */
  width: max(calc(25% - 20px), 160px);
  /* width: clamp(280px, calc(33.3% - 20px), 600px); */
  border-radius: 10px;
  overflow: hidden;
  border:  solid 1px #CCC;
  /* padding: 2em; */
}
.img__wrapper li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* .btn_random {
  margin-bottom: 3em;
} */

/* トランジション用スタイル */
.v-enter-active, .v-leave-active, .v-move {
  transition: all 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter, .v-leave-to {
  opacity: 0;
  background: #f9a3b1;
  transform: translateY(-30px);
}

</style>
