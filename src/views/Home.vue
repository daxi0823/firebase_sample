<template>
  <div id="main__wrapper">
    <HeaderComp></HeaderComp>
    <main>
      <section id="mv">
        <div class="copy__wrapper">
          <h2 class="mv__ttl">Welcome to Cafe Du Ando</h2>
          <p class="mv__txt">大山の天然水で淹れるコーヒーをお楽しみください！</p>
        </div>
      </section><!--mv-->
      <section id="posi">
        <h2 class="ttl">Position</h2>
        <div class="container">
          <div class="posi__box__wrapper">
            <div class="posi__box posi__box__01">BOX1</div>
            <div class="posi__box posi__box__02">BOX2</div>
            <div class="posi__box posi__box__03">BOX3</div>
          </div>
          <div class="posi__box__wrapper posi__box__wrapper__02">
            <div class="posi__box posi__box__04">BOX4</div>
            <div class="posi__box posi__box__05">BOX5</div>
            <div class="posi__box posi__box__06">BOX6</div>
          </div>
        </div>
      </section><!--posi-->
      <section id="menu">
        <h2 class="ttl">Menu</h2>
        <div class="container">
          <ul class="main__img">
            <li>
              <a href="#">
                <p><img src="/images/menu1.jpg" alt="ブレンドコーヒー" width="800" height="533"></p>
                <div class="menu__inner">
                  <h3 class="menu__ttl">ブレンドコーヒー</h3>
                  <p class="menu_txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis laboriosam quo soluta ad voluptatibus quas sunt enim. Debitis, repudiandae velit voluptatibus impedit, provident tempore voluptates quaerat odit cumque dolor mollitia.</p>
                </div><!--menu__inner-->
              </a>
            </li>
            <li><img src="/images/menu2.jpg" alt="" width="800" height="533"></li>
            <li><img src="/images/menu3.jpg" alt="" width="800" height="533"></li>
            <li><img src="/images/menu4.jpg" alt="" width="800" height="533"></li>
            <li><img src="/images/menu5.jpg" alt="" width="800" height="533"></li>
            <li><img src="/images/menu6.jpg" alt="" width="800" height="533"></li>
            <li><img src="/images/menu7.jpg" alt="" width="800" height="531"></li>
            <li><img src="/images/menu8.jpg" alt="" width="800" height="533"></li>
          </ul>
        </div><!-- /.container -->
      </section><!--/#menu-->
      <section id="desc">
        <h2 class="ttl">About</h2>
        <div class="desc__wrapper">
          <div class="desc__left">
            <img src="/images/menu9.jpg" alt="">
          </div>
          <div class="desc__right">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum tempore atque non ipsam impedit nisi fugit reiciendis sint, eos deserunt eius suscipit totam corrupti dicta neque cupiditate, eaque nemo.</p>
          </div>
        </div>
        <div class="desc__wrapper desc__wrapper_reverse">
          <div class="desc__left">
            <img src="/images/menu12.jpg" alt="" width="2048" height="1365">
          </div>
          <div class="desc__right">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum tempore atque non ipsam impedit nisi fugit reiciendis sint, eos deserunt eius suscipit totam corrupti dicta neque cupiditate, eaque nemo.</p>
          </div>
        </div>
      </section><!--desc-->
      <section id="accordion">
        <h2 class="ttl">Accordion</h2>
        <div class="container">
          <input id="tab_01" type="radio" name="accordion" class="trigger" checked>
          <label for="tab_01" class="tab_label">アコーディオン１</label>
          <div class="contents">
            <h4>コンテンツ１</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum ipsum impedit enim obcaecati expedita sapiente eligendi rem delectus nulla aperiam debitis sint similique qui inventore, veritatis ad, beatae sed.</p>
          </div>
          <input id="tab_02" type="radio" name="accordion" class="trigger">
          <label for="tab_02" class="tab_label">アコーディオン２</label>
          <div class="contents">
            <h4>コンテンツ２</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum ipsum impedit enim obcaecati expedita sapiente eligendi rem delectus nulla aperiam debitis sint similique qui inventore, veritatis ad, beatae sed.</p>
          </div>
          <input id="tab_03" type="radio" name="accordion" class="trigger">
          <label for="tab_03" class="tab_label">アコーディオン３</label>
          <div class="contents">
            <h4>コンテンツ３</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum ipsum impedit enim obcaecati expedita sapiente eligendi rem delectus nulla aperiam debitis sint similique qui inventore, veritatis ad, beatae sed.</p>
          </div>
        </div>
        <!-- /.container -->
      </section>
      <!--accordion-->
      <section id="table">
        <h2 class="ttl">Table</h2>
        <div class="container">
          <div class="tbl__wrapper">
            <table class="tbl__01">
              <tr>
                <th>見出しセル</th>
                <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                <td>データデータデータ</td>
                <td>データデータ</td>
                <td>データデータデータデータデータデータデータデータ</td>
              </tr>
              <tr>
                <th>見出しセル</th>
                <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                <td>データデータデータ</td>
                <td>データデータ</td>
                <td>データデータデータデータデータデータデータデータ</td>
              </tr>
              <tr>
                <th>見出しセル</th>
                <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
                <td>データデータデータ</td>
                <td>データデータ</td>
                <td>データデータデータデータデータデータデータデータ</td>
              </tr>
            </table>
          </div>
        </div>
        <!-- /.container -->
      </section>
      <section id="access">
        <h2 class="ttl">Access</h2>
        <div class="container">
          <div class="map__wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tNnAJgbGvw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.7074113693357!2d135.5237668150688!3d34.68733328043795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0cd5c283afd%3A0xf01d07d5ca11e41!2z5aSn6Ziq5Z-O!5e0!3m2!1sja!2sjp!4v1648789641190!5m2!1sja!2sjp" width="800" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
          </div><!--map__wrapper-->
        </div><!--container-->
      </section>
      <section id="footer__top">
        <h2 class="ttl">Contact</h2>
        <div class="container">
          <form>
            <div class="form__wrapper">
              <div class="input__box">
                <label for="name">氏名</label>
                <input id="name" type="text" placeholder="氏名" required>
              </div><!--input__box-->
              <div class="input__box">
                <input type="radio" id="gender1" name="gender" value="man"><label for="gender1" class="dsp_inlineblock">男</label>
                <input type="radio" id="gender2" name="gender" value="woman"><label for="gender2" class="dsp_inlineblock">女</label>
              </div><!--input__box-->
              <div class="input__box">
                <label for="tel">携帯電話番号</label>
                <input id="tel" type="tel" placeholder="090-9999-9999" pattern="\d{2,4}-?\d{3,4}-?\d{3,4}" >
              </div><!--input__box-->
              <div class="input__box">
                <label for="mail">メールアドレス</label>
                <input id="mail" type="text" placeholder="ando@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$">
              </div><!--input__box-->
              <div class="input__box">
                <textarea name="biko" id="" cols="30" rows="10" placeholder="備考"></textarea>
              </div>
              <div class="input__box">
                <input id="agreement" type="checkbox" required><label for="agreement" class="dsp_inlineblock">同意する</label>
              </div><!--input__box-->
              <div class="input__box btn__box">
                <input class="btn" type="submit" value="送信">
              </div>
              <div class="input__box btn__box">
                <button class="btn btn__arrow">
                  <span class="btn__box__txt">入力内容を確認後</span>
                  送信
                </button>
              </div>
              <div class="input__box btn__box">
                <a class="btn btn_link" href="#">
                  Click
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </form>
        </div><!-- /.container -->
      </section><!--desc-->
    </main>
    <FooterComp></FooterComp>
  </div><!--main_wrapper-->
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>
