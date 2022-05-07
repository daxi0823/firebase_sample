<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv" class="mv__less">
        <div class="copy__wrapper">
          <h2 class="mv__ttl">メニュー登録</h2>
          <h3>Save On firebase</h3>
          <label>メニュー名：<input v-model="menuName" type="text"></label>
          <label>メニュー画像：<input ref="imgUp" type="file" id="fileImg"></label>
          <button @click="imgUpload">アップロード</button>
          <label>メニュー説明：<textarea v-model="menuTxt" cols="30" rows="10"></textarea></label>
          <button @click="addMenu">データ登録</button>
          <h2 class="mv__ttl">登録済メニューリスト</h2>
          <ul>
            <li v-for="(menu, index) in menus" :key="menu.id">
              <h3 class="mv__ttl">{{ menu.name }}</h3>
              <p><img :src="menu.imgUrl" alt=""></p>
              <p>{{ menu.txt }}</p>
              <button @click="removeMenu(menu.docId, index)">データ削除</button>
            </li>
          </ul>
        </div><!--copy__wrapper-->
      </section><!--mv-->
    </main>
  </div><!--main_wrapper-->
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import {db, storage} from '@/firebase/firebase';
import {collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, deleteDoc, doc} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';

export default {
  data() {
    return {
      menuId: 1,//メニューID
      menuName: '',//メニュー名
      menuTxt: '',//メニュー説明文
      menuImgUrl: '',//メニュー画像URL
      file: '',//メニュー画像ファイル
      //描画用データ
      menus: [
        {
          id: null,
          name: '',
          txt: '',
          imgUrl: ''
        }
      ]
    }
  },
  components: {
    HeaderComp,
  },
  mounted(){
    const q = query(collection(db, 'menus'), orderBy('menuId'))
    //先頭の空リストを削除
    this.menus.splice(0, 1);

    //firestore内のデータの変化を受け取り、描画用データmenusに反映
    onSnapshot(q, snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          // console.log('added', change.doc.data())
          // this.menus.push({
          //   id: change.doc.data().menuId,
          //   name: change.doc.data().menuName,
          //   txt: change.doc.data().menuTxt,
          //   docId: change.doc.id,
          //   imgUrl: change.doc.data().menuImgUrl
          // })
          // this.menuId = change.doc.data().menuId;
        }
        if(change.type === 'removed') {
          // console.log('Removed', change.doc.data());
        }
      })
    })
  },
  methods: {
    //firestoreにデータを追加
    addMenu() {
      addDoc(collection(db, 'menus'), {
        menuId: this.menuId += 1,
        menuName: this.menuName,
        menuTxt: this.menuTxt,
        created: serverTimestamp(),
        menuImgUrl: this.menuImgUrl
      })
      .then((doc) => {
        console.log(`データ追加に成功しました（${doc.id}）`);
        //追加に成功したらデータを空にする
        this.menuName = '';
        this.menuTxt = '';
        const menuImgUrlRemain = document.getElementById('fileImg');
        menuImgUrlRemain.value = '';
      })
      .catch(error => {
        //エラー時の処理
        console.log(`データ追加に失敗しました（${error}）`);
      })
    },
    //firestoreにデータを削除
    removeMenu(id, index) {
      deleteDoc(doc(db, 'menus', id));
      //描画を変更
      // this.menus.splice(index, 1);
    },
    //画像データをアップロード
    imgUpload() {
      //ファイルの取得
      this.file = this.$refs.imgUp.files[0];
      // console.log(this.file);
      //画像ファイルへの参照を作成
      const userImageRef = ref(storage, `images/${this.file.name}`)
      //画像ファイルのアップロードメソッド
      uploadBytesResumable(userImageRef, this.file).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
        getDownloadURL(snapshot.ref)
        .then((downloadURL) => {
          console.log('Success!', downloadURL);
          this.menuImgUrl = downloadURL;
        })
        .catch((error) => {
          console.error(error)
        })
      });
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
