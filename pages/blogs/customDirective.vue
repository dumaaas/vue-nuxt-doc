<template>
  <section>
    <div v-animate-on-scroll class="blog">
      <BlogHeading
        :date="date"
        :readingTime="readingTime"
        :title="title"
        :description="description"
      />
      <div v-animate-on-scroll class="blog-element">
        <h3>Custom direktive</h3>
        <p>
          Kao sto naslov kaze, Vue nam nudi i nacin da kreiramo svoje custom
          direktive koje odgovaraju potrebama naseg projekta.
        </p>
        <p>
          Kao sto komponente imaju svoje lifecycle hooks, svaka Vue direktiva
          ima svoje hook-ove koje trigeruje.
        </p>
        <p>Vue 2 hooks:</p>
        <ul>
          <li>
            <span>bind -</span> poziva se jednom kada se direktiva veze za
            element.
          </li>
          <li>
            <span>inserted -</span> poziva se kada vezani element ubacimo u cvor
            roditelja.
          </li>
          <li>
            <span>update -</span> poziva se kada se element azurira (ali potomci
            jos ne)
          </li>
          <li>
            <span>componentUpdated -</span> poziva se kada se i potomci
            azuriraju
          </li>
          <li>
            <span>unbind -</span> poziva se jednom kada direktiva vise nije
            vezana za element
          </li>
        </ul>
        <p>Vue 3 hooks:</p>
        <ul>
          <li>
            <span>created -</span> poziva se prije nego sto se primjene atributi
            ili listeneri elementa.
          </li>
          <li>
            <span>beforeMount -</span> poziva se jednom kada se direktiva veze
            za element.
          </li>
          <li>
            <span>mounted -</span> poziva se kada vezani element ubacimo u cvor
            roditelja.
          </li>
          <li>
            <span>beforeUpdate -</span> poziva se prije nego se sam element
            azurira.
          </li>
          <li><span>updated -</span> poziva se kada se element azurira.</li>
          <li>
            <span>beforeUnmount -</span> poziva se prije nego sto se element
            unmountuje.
          </li>
          <li>
            <span>unmounted -</span> poziva se jednom kada direktiva vise nije
            vezana za element
          </li>
        </ul>
        <p>
          Prilikom implementacije ovih hook-ova, postoji nekoliko argumenata
          koje oni prihvataju:
        </p>
        <ul>
          <li>
            <span> el - </span>
            direktiva je vezana za ovaj element; omogucava nam izmjene elem.
          </li>
          <li>
            <span> binding - </span>
            ovaj objekat sadrzi dosta propertija; vise u sledecem pasusu.
          </li>
          <li>
            <span> vnode - </span>
            virtualni cvor
          </li>
          <li>
            <span> prevVnode - </span>
            prethodni virtualni cvor (dostupno samo u update hook-u).
          </li>
        </ul>
        <p>
          Binding Objekat sadrzi nekoliko propertija koji nam omogucavaju da
          dodamo funckionalnosti u hook-ove.
        </p>
        <ul>
          <li>
            <span> name - </span>
            ime direktive (bez v- prefiksa).
          </li>
          <li>
            <span> value - </span>
            vrijednost proslijedjena direktivi.
          </li>
          <li>
            <span> oldvalue - </span>
            prethodna vrijednost direktive (dostupno samo u update hook).
          </li>
          <li>
            <span> expression - </span>
            izraz proslijedjen kao string
          </li>
          <li>
            <span> arg - </span>
            bilo koji argument proslijedjen direktivi kao string.
          </li>
          <li>
            <span> modifiers - </span>
            svi modifieri proslijedjeni kao objekat
          </li>
        </ul>
      </div>
      <div v-animate-on-scroll class="blog-element">
        <h3>Kako implementirati custom direktivu?</h3>
        <p>Objasnjenje koje slijedi ce raditi samo u Nuxt.JS okruzenju.</p>
        <p>
          Potrebno je kreirati direktorijum <a>plugins</a> ukoliko vec ne
          postoji. Zatim u datom direktorijumu kreirati <a>js</a> file sa imenom
          <a>directives.client.js</a>.
        </p>
        <p>
          U novo kreiranom file-u cemo implementirati direktivu, ali prije toga
          moramo da registrujemo file kao plugin kako bi Nuxt mogao da ga
          prepozna. U
          <a>nuxt.config.js</a>
          file-u je potrebno dodati sledeci kod:
        </p>
        <div class="code">
          <p>
            <span class="tag"
              >plugins:
              <span class="attribute"
                >['~/plugins/directives.client.js']</span
              ></span
            >
          </p>
        </div>
        <h3>Font-size direktiva</h3>
        <p>
          Kao primjer kako implementirati custom direktivu uzecemo
          <a>font-size</a> direktivu koja mijenja font-size odredjenog elementa.
        </p>
        <h4>#Kod</h4>
        <InlineImage
          :src="require(`@/assets/images/fontSizeDirective.png`)"
          alt="fontSize direktiva!"
          width="50%"
        />
        <p>
          Kada se izvrsava <a>inserted</a> hook, odnosno kada vezani element
          dodajemo u cvor roditelja, mijenjamo font size elementa koriscenjem
          <a>el</a> argumenta koji nam omogucava da mijenjamo vezani element.
        </p>
        <h4>#Upotreba</h4>
        <p>
          Ovu direktivu mozemo koristiti tako sto je dodamo za bilo koji HTML
          element koji ispisuje tekst.
        </p>
        <div class="code">
          <p>
            <span class="tag"
              >&lt;p <span class="attribute">v-font-size</span>/&gt;<span
                class="text"
                >Font size ovog paragrafa ce se izmijeniti u 12px.</span
              >&lt;/p&gt;</span
            >
          </p>
        </div>
        <h4>#Rezultat</h4>
        <p v-font-size>Font size ovog paragrafa ce se izmijeniti u 12px.</p>
      </div>
      <div v-animate-on-scroll class="blog-element">
        <h3>15 korisnih Vue direktiva</h3>
        <p>
          Lista od 15 korisnih Vue direktiva koje mogu povecati produktivnost i
          ustedjeti vrijeme izrade projekta.
        </p>
        <div v-animate-on-scroll class="blog-element__item">
          <h4>#V-Hotkey</h4>
          <p class="cusDir">
            <span>Repository:</span>
            <a href="https://github.com/Dafrok/v-hotkey" target="_blank"
              >v-hotkey</a
            >
          </p>
          <p class="cusDir">
            <span>Demo:</span>
            <a href="https://dafrok.github.io/v-hotkey" target="_blank"
              >Pogledaj ovdje</a
            >
          </p>
          <p class="cusDir">
            <span>Instalation:</span>
            <a>npm install --save v-hotkey</a>
          </p>
          <p class="cusDes">
            Ova direktiva nam dozvoljava da vezemo jedan ili vise hotkey-eva za
            nasu komponentu. Nprm. ako zelimo da sakrijemo komponentu na Escape
            key a da je prikazemo pritiskanjem Ctrl+Enter, uz ovu direktivu to
            mozemo postici lako.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element__item">
          <h4>#V-Click-Outside</h4>
          <p class="cusDir">
            <span>Repository:</span>
            <a
              href="https://github.com/ndelvalle/v-click-outside"
              target="_blank"
              >v-click-outside
            </a>
          </p>
          <p class="cusDir">
            <span>Demo:</span>
            <a
              href="https://codesandbox.io/s/zx7mx8y1ol?module=%2Fsrc%2Fcomponents%2FHelloWorld.vue"
              target="_blank"
              >Pogledaj ovdje</a
            >
          </p>
          <p class="cusDir">
            <span>Instalation:</span>
            <a>npm install --save v-click-outside</a>
          </p>
          <p class="cusDes">
            Ako zelimo za zatvorimo komponentu kada kliknemo van nje, ovo je
            direktiva koja nam to omogucava na veoma brz i jednostavan nacin.
            Odlicna je kada radimo sa popup-ovima i dropdown menu-ima.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element__item">
          <h4>#V-Clipboard</h4>
          <p class="cusDir">
            <span>Repository:</span>
            <a href="https://github.com/euvl/v-clipboard" target="_blank"
              >v-clipboard
            </a>
          </p>
          <p class="cusDir">
            <span>Instalation:</span>
            <a>npm install --save v-clipboard</a>
          </p>
          <p class="cusDes">
            Ovu direktivu mozemo dodati bilo kojem statickom ili dinamickom
            elementu u nasem kodu, zatim kada kliknemo na element vrijednost
            direktive ce biti kopirana u korisnikov clipboard. Moze biti veoma
            korisna kada zelimo da omogucimo korisniku code snippet koji treba
            negdje da kopira.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element__item">
          <h4>#Vue-ScrollTo</h4>
          <p class="cusDir">
            <span>Repository:</span>
            <a href="https://github.com/rigor789/vue-scrollTo" target="_blank"
              >vue-scrollto
            </a>
          </p>
          <p class="cusDir">
            <span>Demo:</span>
            <a href="https://vue-scrollto.netlify.app/" target="_blank"
              >Pogledaj ovdje</a
            >
          </p>
          <p class="cusDir">
            <span>Instalation:</span>
            <a>npm install --save vue-scrollto</a>
          </p>
          <p class="cusDes">
            Klikom na odredjeni element ova direktiva skrola do datog taga.
            Korisna je kada se radi sa sadrzajem ili navigacijom u headeru.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element__item">
          <h4>#Vue-Lazyload</h4>
          <p class="cusDir">
            <span>Repository:</span>
            <a href="https://github.com/hilongjw/vue-lazyload" target="_blank"
              >vue-lazyload
            </a>
          </p>
          <p class="cusDir">
            <span>Demo:</span>
            <a href="http://hilongjw.github.io/vue-lazyload/" target="_blank"
              >Pogledaj ovdje</a
            >
          </p>
          <p class="cusDir">
            <span>Instalation:</span>
            <a>npm install --save vue-lazyload</a>
          </p>
          <p class="cusDes">
            Ako zelimo da lazy load-ujemo slike na nasoj stranici, ova direktiva
            je jako korisna.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element__item">
          <h4>#V-Tooltip</h4>
          <p class="cusDir">
            <span>Repository:</span>
            <a href="https://github.com/Akryum/v-tooltip" target="_blank"
              >v-tooltip
            </a>
          </p>
          <p class="cusDir">
            <span>Demo:</span>
            <a href="https://akryum.github.io/v-tooltip/#/" target="_blank"
              >Pogledaj ovdje</a
            >
          </p>
          <p class="cusDir">
            <span>Instalation:</span>
            <a>npm install --save v-tooltip</a>
          </p>
          <p class="cusDes">
            Ova direktiva nam omogucava da koristimo reaktivne tooltip-ove nad
            elementima, kontrolisemo njihovu poziciju, biramo na koji nacin ce
            da se triggeruju...
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element__item">
          <h4>#V-Scroll-Lock</h4>
          <p class="cusDir">
            <span>Repository:</span>
            <a href="https://github.com/phegman/v-scroll-lock" target="_blank"
              >v-scroll-lock
            </a>
          </p>
          <p class="cusDir">
            <span>Demo:</span>
            <a href="https://v-scroll-lock.peterhegman.com/" target="_blank"
              >Pogledaj ovdje</a
            >
          </p>
          <p class="cusDir">
            <span>Instalation:</span>
            <a>npm install --save v-scroll-lock</a>
          </p>
          <p class="cusDes">
            Ova direktiva ce sprijeciti skrolovanje stranica kada je modal
            otvoren.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element__item">
          <h4>#Vue-Infinite-Scroll</h4>
          <p class="cusDir">
            <span>Repository:</span>
            <a
              href="https://github.com/ElemeFE/vue-infinite-scroll"
              target="_blank"
              >vue-infinite-scroll
            </a>
          </p>
          <p class="cusDir">
            <span>Instalation:</span>
            <a>npm install --save vue-infinite-scroll</a>
          </p>
          <p class="cusDes">
            Ako nam je potrebno da ucitavamo nove elemente kada dostignemo dno
            stranice, ova direktiva ce tada trigerovati vezani metod.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element__item">
          <h4>#Vue-Clampy</h4>
          <p class="cusDir">
            <span>Repository:</span>
            <a href="https://github.com/clampy-js/vue-clampy" target="_blank"
              >vue-clampy
            </a>
          </p>
          <p class="cusDir">
            <span>Instalation:</span>
            <a>npm install --save @clampy-js/vue-clampy</a>
          </p>
          <p class="cusDes">
            Ova direktiva nam omogucava da skratimo sadrzaj teksta unutar
            elementa. U pozadini koristi clampy.js biblioteku.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element__item">
          <h4>#Vue-Ripple-Directive</h4>
          <p class="cusDir">
            <span>Repository:</span>
            <a
              href="https://github.com/PygmySlowLoris/vue-ripple-directive"
              target="_blank"
              >vue-ripple-directive
            </a>
          </p>
          <p class="cusDir">
            <span>Instalation:</span>
            <a>npm install --save vue-ripple-directive</a>
          </p>
          <p class="cusDes">
            Ova direktiva nam nudi animaciju talasa koja ce se pokrenuti kada
            kliknemo na element. Moze biti korisna za action button-e.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element__item">
          <h4>#Vue-Focus</h4>
          <p class="cusDir">
            <span>Repository:</span>
            <a href="https://github.com/simplesmiler/vue-focus" target="_blank"
              >vue-focus
            </a>
          </p>
          <p class="cusDir">
            <span>Instalation:</span>
            <a>npm install --save vue-focus</a>
          </p>
          <p class="cusDes">
            Ukoliko nam je potrebno da focusujemo input u nekim situacijama, ova
            direktiva ce to uraditi za nas.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element__item">
          <h4>#V-Blur</h4>
          <p class="cusDir">
            <span>Repository:</span>
            <a href="https://github.com/ndelvalle/v-blur" target="_blank"
              >v-blur
            </a>
          </p>
          <p class="cusDir">
            <span>Demo:</span>
            <a
              href="https://codesandbox.io/s/823o069zoj?module=%2Fsrc%2Fcomponents%2FHelloWorld.vue"
              target="_blank"
              >Pogledaj ovdje</a
            >
          </p>
          <p class="cusDir">
            <span>Instalation:</span>
            <a>npm install --save v-blur</a>
          </p>
          <p class="cusDes">
            Ako zelimo da blurujemo neki dio aplikacije mozemo korisistiti ovu
            direktivu. Na primjer, ako zelimo da sakrijemo neki sadrzaj stranice
            od neregistrovanog korisnika.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element__item">
          <h4>#Vue-Dummy</h4>
          <p class="cusDir">
            <span>Repository:</span>
            <a href="https://github.com/paulcollett/vue-dummy" target="_blank"
              >vue-dummy
            </a>
          </p>
          <p class="cusDir">
            <span>Demo:</span>
            <a
              href="https://paulcollett.github.io/vue-dummy/example/"
              target="_blank"
              >Pogledaj ovdje</a
            >
          </p>
          <p class="cusDir">
            <span>Instalation:</span>
            <a>npm install --save vue-dummy</a>
          </p>
          <p class="cusDes">
            Ukoliko radimo projekat na kojem nam je potreban dummy text i dummy
            placeholder slike, ova direktiva je idealna.
          </p>
        </div>
      </div>
      <div v-animate-on-scroll class="blog-element">
        <h3>Vjezba</h3>
        <p>
          1. Kreirati direktivu koja ce animirati pojavljivanje elementa kada on
          udje u viewport.
        </p>
      </div>
      <div v-animate-on-scroll class="blog-element">
        <h3>Resenje</h3>
        <p>
          Svaki element sa klasom <a>blog-element</a> na ovoj stranici koristi
          ovu direktivu i na pojavljivanje se animira.
        </p>
        <div class="code">
          <p>
            <span class="tag"
              >&lt;div <span class="directive">v-animate-on-scroll</span>
              <span class="attribute">class</span
              ><span class="data">="blog-element"</span>&gt;&lt;/div&gt;</span
            >
          </p>
        </div>
      </div>
      <div v-animate-on-scroll class="blog-element">
        <h3>Kod</h3>
        <InlineImage
          :src="require(`@/assets/images/animateDirective.png`)"
          alt="scroll direktiva!"
        />
        <p class="imageParagraph">
          Za implementaciju direktive koriscen je
          <a>IntersectionObserver</a> interfejs koji nam omogucava da asihrono
          posmatramo promjene elementa u odnosu na viewport. U njemu pratimo da
          li je element u viewport-u i ukoliko jeste dodamo klase za animaciju i
          prestanemo da ga posmatramo. U direktivi je samo potrebno vezati
          element za Observer i poceti posmatranje elementa.
        </p>
        <InlineImage
          :src="require(`@/assets/images/animateDirective2.png`)"
          alt="scroll css!"
          width="61%"
        />
        <p class="imageParagraph">
          Potrebno je i definisati klase za animaciju koje dodajemo prilikom
          posmatranje elementa.
        </p>
      </div>
      <hr />
      <BackToAll v-animate-on-scroll />
      <OtherBlogs v-animate-on-scroll :otherBlogs="otherBlogs" />
    </div>
  </section>
</template>

<script>
import BlogHeading from "@/components/BlogHeading.vue";
import BackToAll from "@/components/BackToAll.vue";
import OtherBlogs from "@/components/OtherBlogs.vue";
import InlineImage from "@/components/InlineImage.vue";
export default {
  props: {
    BlogHeading,
    BackToAll,
    OtherBlogs,
    InlineImage,
  },
  data() {
    return {
      date: "01. Septembar 2021",
      readingTime: "1 minute read",
      title: "Custom direktive",
      description: "Kreiranje custom direktiva.",
      otherBlogs: [
        {
          title: "Direktive",
          url: "directives",
          img: "directives.jpg",
          alt: "direktive",
        },
        {
          title: "Methods",
          url: "methods",
          img: "methods.jpg",
          alt: "Metode",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  background-color: #1e1e1e;
  overflow-y: auto;

  .cusDir {
    padding: 0;
    span {
      font-weight: 700;
    }
  }

  .cusDes {
    padding-top: 30px;
  }
}
</style>