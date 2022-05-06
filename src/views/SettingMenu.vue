<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less">
        <div class="copy__wrapper">
          <h2 class="mv__ttl">メニュー登録</h2>
          <h3>Save On firebase</h3>
          <label>メニュー名：<input v-model="menuName" type="text"></label>
          <label>メニュー説明：<textarea v-model="menuTxt" cols="30" rows="10"></textarea></label>
          <button @click="addMenu">データ登録</button>
          <h2 class="mv__ttl">登録済メニューリスト</h2>
          <ul>
            <li v-for="menu in menus" :key="menu.id">
              <p>{{ menu.name }}</p>
              <p>{{ menu.txt }}</p>
            </li>
          </ul>
        </div><!--copy__wrapper-->
      </section><!--mv-->
    </main>
  </div><!--main_wrapper-->
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import firebaseApp from '@/firebase/firebase';
import {getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy} from 'firebase/firestore';

const db = getFirestore(firebaseApp);

export default {
  data() {
    return {
      menuId: 1,
      menuName: '',
      menuTxt: '',
      menus: [
        {
          id: null,
          name: null,
          txt: null
        }
      ]
    }
  },
  components: {
    HeaderComp,
  },
  mounted(){
    const q = query(collection(db, 'menus'), orderBy('menuId'))
    //先頭のデータを削除
    this.menus.splice(0, 1);
    onSnapshot(q, snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          console.log('added', change.doc.data())
          this.menus.push({
            id: change.doc.data().menuId,
            name: change.doc.data().menuName,
            txt: change.doc.data().menuTxt,
            docId: change.doc.id
          })
          this.menuId = change.doc.data().menuId;
        }
      })
    })
  },
  methods: {
    addMenu() {
      addDoc(collection(db, 'menus'), {
        menuId: this.menuId += 1,
        menuName: this.menuName,
        menuTxt: this.menuTxt,
        created: serverTimestamp(),
      })
      .then((doc) => {
        console.log(`データ追加に成功しました（${doc.id}）`);
        //追加に成功したらデータを空にする
        this.menuName = '';
        this.menuTxt = '';
      })
      .catch(error => {
        //エラー時の処理
        console.log(`データ追加に失敗しました（${error}）`);
      })
    }
  }
}
</script>

<style scoped>
label {
  text-align:  left;
  margin-top: 40px;
}
</style>
