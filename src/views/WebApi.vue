<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less">
        <div class="copy__wrapper">
          <h2 class="mv__ttl">Web API</h2>
          <select v-model="selectedID" id="selectedID">
            <option v-for="post in selectedEdited" :key="post.id" :value="post.userId">User：{{ post.userId }}</option>
          </select>
          <div class="selectedItem__wrapper">
            <div class="selectedItem" v-for="(post, index) in selectPosts" :key="index">
              <h3>Post{{index + 1}}：{{ post.title }}</h3>
              <p>{{ post.body }}</p>
            </div>
          </div><!--selectedItem__wrapper-->

        </div><!--copy__wrapper-->
      </section><!--mv-->
    </main>
    <FooterComp></FooterComp>
  </div><!--main_wrapper-->
</template>

<script>
import axios from 'axios';
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
  data() {
    return {
      posts: [],
      selectedID: 1
    }
  },
  computed: {
    //重複するuserIDのpostを削除
    selectedEdited() {
      return this.posts.filter((post, index, self) => {
        return self.findIndex((e) => e.userId === post.userId) === index;
      })
    },
    selectPosts() {
      return this.posts.filter((post) => {
        return post.userId === this.selectedID;
      })
    }
  },
  components: {
    HeaderComp,
    FooterComp,
  },
  created() {
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      // console.log(response.data);
      this.posts = response.data;
    })
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
</style>
