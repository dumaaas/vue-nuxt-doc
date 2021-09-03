<template>
  <section>
    <div class="blog" ref="blog">
      <BlogHeading
        v-animate-on-scroll
        :date="blog.date"
        :readingTime="words"
        :title="blog.title"
        :description="blog.description"
      />

      <div v-animate-on-scroll class="blog-content">
        <p>
          Direktive su specijalni atributi sa <a>v-</a> prefiksom. Za
          vrijednosti atributa se ocekuje da to bude jedan JavaScript izraz (sa
          izuzetkom za <a>v-for</a>). Posao direktive je da reaktivno primjeni
          spoljne efekte na DOM kada se vrijednost izraza promijeni.
          Predstavljaju najbolji nacin za direktno manipulisanje DOM elementima.
        </p>
        <div v-animate-on-scroll class="blog-element">
          <h3>v-bind</h3>
          <p>
            <code>v-bind</code> je jedna od najkorisnijih direktiva i koristi se
            za reaktivno azuriranje HTML atributa. Npr.
          </p>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;a <span class="attribute">v-bind:href</span
                ><span class="data">="url"</span>&gt;...&lt;/a&gt;</span
              >
            </p>
          </div>
          <p>
            Ovdje <a>href</a> predstavlja argument, koji govori
            <a>v-bind</a> direktivi da veze <a>href</a> atribut za vrijednost
            izraza <a>url</a>.
          </p>
          <p>v-bind skraceno mozemo zapisati uz pomoc uz pomoc <a>' : '</a>.</p>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;img <span class="attribute">v-bind:src</span
                ><span class="data">="img"</span>/&gt;</span
              >
              je ekvivalentno
              <span class="tag"
                >&lt;img <span class="attribute">:src</span
                ><span class="data">="img"</span>/&gt;</span
              >
            </p>
          </div>
        </div>
        <div v-animate-on-scroll class="blog-element">
          <h3>v-model</h3>
          <p>
            <code>v-model</code> direktiva pravi dvostruko vezivanje izmedju
            input elementa i komponente, tako da mozemo dinamicki azurirati
            vrijednost polja.
          </p>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;textarea <span class="attribute">v-model=</span
                ><span class="data">"message"</span>/&gt;</span
              >
              <br />
              <span class="data"> message: "" </span>
            </p>
          </div>
          <p>
            Izmjenom textarea fielda dinamicki cemo mijenjati vrijednost message
            polja.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element">
          <h3>v-if / v-show</h3>
          <p>
            <code>v-if</code> i <code>v-show</code> su direktive koje
            predstavljaju kondicionale koji prikazuju razlicite informacije u
            zavisnosti od uslova izraza. Glavna razlika izmedju ove dvije
            direktive je sto <a>v-if</a> direktiva mountuje komponentu na
            promjenu, dok <a>v-show</a> direktiva toggle-je display atribut
            elementa na none". Npr.
          </p>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;teaxtarea <span class="attribute">v-model</span
                ><span class="data">="message"</span>/&gt;</span
              >
              <br />
              <span class="tag"
                >&lt;button <span class="attribute">v-if/v-show</span
                ><span class="data">="message"</span>/&gt;<span class="text"
                  >Prikazi dugme</span
                >&lt;/button&gt;</span
              >
            </p>
          </div>
          <p>
            Ukoliko prikazujemo dugme koriscenjem <a>v-if</a> direktive, prije
            nego sto uslov bude ispunjen, ako bi inspectovali stranicu na liniji
            gdje dugme treba da se pojavi mogli bi da vidimo komentar
            <a>v-if</a>. Dok u slucaju <a>v-show</a> direktive, element button
            bi vidjeli u sledecoj formi:
          </p>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;button <span class="attribute">v-if/v-show</span
                ><span class="data">="message"</span>
                <span class="attribute">style=</span
                ><span class="data">"display: none;"</span>/&gt;<span
                  class="text"
                  >Prikazi dugme</span
                >&lt;/button&gt;</span
              >
            </p>
          </div>
        </div>
        <div v-animate-on-scroll class="blog-element">
          <h3>v-else</h3>
          <p>
            <code>v-else</code> direktiva mora da bude sibling sa <a>v-if</a>.
            Takodje predstavlja kondicionalnu direktivu, koja se izvrsava
            ukoliko uslov u <a>v-if</a> nije ispunjen.
          </p>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;teaxtarea <span class="attribute">v-model</span
                ><span class="data">="message"</span>/&gt;</span
              >
              <br />
              <span class="tag"
                >&lt;p <span class="attribute">v-if</span
                ><span class="data">="message"</span>/&gt;<span class="text"
                  >Tekst iz textarea field-a:
                </span>
                <span v-pre class="data">{{ message }}</span
                >&lt;/p&gt;</span
              >
              <br />

              <span class="tag"
                >&lt;p <span class="attribute">v-else</span>/&gt;<span
                  class="text"
                  >Textarea je trenutno prazna!</span
                >&lt;/p&gt;</span
              >
            </p>
          </div>
          <p>
            U navedenom primjeru ce nam biti prikazan text 'Textarea je trenutno
            prazna' sve dokle ne unesesmo neku vrijednost u textarea polje,
            nakon cega ce nam biti prikazana vrijednost polja textarea-
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element">
          <h3>v-for</h3>
          <p>
            <code>v-for</code> direktiva nam omogucava da renderujemo listu
            stavki baziranu na nizu. Ona ima specijalnu sintaksu u formi
            <a>item in items</a>, gdje <a>items</a> predstavlja izvor podataka
            dok je <a>item</a> alias za element niza nad kojim se vrsi
            iteracija.
          </p>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;li <span class="attribute">v-for=</span
                ><span class="data">"item in items"</span>
                <span class="attribute">:key=</span
                ><span class="data">"item.message"</span>/&gt;<span
                  v-pre
                  class="data"
                  >{{ item.message }}</span
                >&lt;/li&gt;</span
              >
            </p>
          </div>
          <p>
            Navedeni primjer ce proci kroz svaki element niza items i za svaki
            element niza kreirati novi <a>li</a> element sa vrijednoscu polja
            <a>item.message</a>
          </p>
          <p>
            <code>key</code> omogucava bolju efikasnost za pracenje promjena i
            on mora biti jedinstven.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element">
          <h3>v-for sa Objektom</h3>
          <p>
            <code>v-for</code> direktivu takodje mozemo koristiti i za iteraciju
            propertija objekta. Kod objekata mozemo koristiti tri argumenta za
            iteraciju, a to su <a>value</a>, <a>name (key)</a>, <a>index</a>.
            <a>Value</a> predstavlja vrijednost propertija,
            <a>name</a> predstavlja ime samog propertija, dok
            <a>index</a> predstavlja indeks propertija u objektu.
          </p>
          <InlineImage
            :src="require(`@/assets/images/vforObject.png`)"
            alt="v-for with Object!"
          />
          <p>Rezultat:</p>
          <p>
            0.title: Iteracija objekata
            <br />
            1.author: Marko Dumnic
            <br />
            2.publishedAt: 2021-31-08
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element">
          <h3>v-once</h3>
          <p>
            <code>v-once</code> direktiva nece azurirati element kada se jednom
            prikaze, iako dodje do njegove promjene.
          </p>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;p <span class="attribute">v-once</span>/&gt;<span
                  v-pre
                  class="data"
                  ><span class="text">Ovo se nece nikada promijeniti:</span>
                  {{ message }}</span
                >&lt;/p&gt;</span
              >
            </p>
          </div>
        </div>
        <div v-animate-on-scroll class="blog-element">
          <h3>v-pre</h3>
          <p>
            <code>v-pre</code> direktiva se najcesce koristi za pisanje
            dokumentacije. Ona ce se pobrinuti da prikazemo raw mustache tagove.
          </p>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;p <span class="attribute">v-pre</span>/&gt;<span
                  v-pre
                  class="data"
                  ><span
                    class="text"
                    >{{ ovo se nece kompajlirati }}</span
                  > </span
                >&lt;/p&gt;</span
              >
            </p>
          </div>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;InlineImage <span class="attribute">src</span
                ><span class="data"
                  >="require(`@/assets/images/pikachuGif.webp`)"</span
                ><span class="attribute"> alt</span
                ><span class="data">="Pikachu waving, in a GIF!</span
                >&gt;&lt;/InlineImage&gt;</span
              >
            </p>
          </div>
        </div>
        <div v-animate-on-scroll class="blog-element">
          <h3>v-on</h3>
          <p>
            <code>v-on</code> predstavlja jednu od najkorisnijih direktiva i
            koristi se za rad sa event-ima.
          </p>
          <p>v-on skraceno mozemo zapisati uz pomoc uz pomoc <a>' @ '</a>.</p>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;button <span class="attribute">@click</span
                ><span class="data">="counter > 0 ? counter -= 1 : 0"</span
                >/&gt;<span class="text">-</span>&lt;/button&gt;</span
              >
            </p>
          </div>
          <p>
            Navedeni primjer ce klikom na dugme smanjivati vrijednost polja
            counter za 1 sve dok je vrijednost counter polja veca od 0.
          </p>
          <p>
            <code>v-on</code> direktiva nudi i visestruko vezivanje, pa u
            zavisnosti od eventa nad jednim HTML elementom mozemo izvrsiti
            razlicite akcije.
          </p>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;div <span class="attribute">v-on=</span
                ><span class="data">="mouseDown: doThis, mouseUp: doThat"</span
                >/&gt;<span class="text">Multiple binding</span
                >&lt;/div&gt;</span
              >
            </p>
          </div>
        </div>
        <div v-animate-on-scroll class="blog-element">
          <h3>v-html</h3>
          <p>
            <code>v-html</code> direktiva se koristi za azuriranje innerHTML-a
            elementa. Sadrzaj <a>v-html</a> direktive ce biti ubacen kao plain
            HTML i nece biti kompajiran kao Vue template.
          </p>
          <p>
            Dinamicko renderovanje HTML na vebsajtu moze biti veoma opasno jer
            moze lako dovesti do XSS napada. <a>v-html</a> treba koristiti samo
            na provjerenom sadrzaju i nikada na korisnickom sadrzaju.
          </p>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;p <span class="attribute">v-html=</span
                ><span class="data">"html"</span>/&gt;&lt;/p&gt;</span
              >
              <br />
              <span class="data"> html: {{ html }} </span>
            </p>
          </div>
          <p>
            Rezultat:
            <span v-html="html"></span>
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element">
          <h3>v-text</h3>
          <p>
            <code>v-text</code> direktiva se koristi za azuriranje textContent-a
            i ekvivalenta je mustache sintaksi.
          </p>
          <div class="code">
            <p>
              <span class="tag"
                >&lt;span <span class="attribute">v-text=</span
                ><span class="data">"msg"</span>&gt;&lt;/span&gt;</span
              >
              je ekvivalento
              <span class="tag"
                >&lt;span&gt;<span class="text" v-pre>{{ msg }}</span
                >&lt;/span&gt;</span
              >
            </p>
          </div>
          <p>
            Preporucuje se koriscenje mustache sintaske ispred v-text direktive.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element">
          <h3>Vjezba</h3>
          <p>
            1. Napraviti mali digitron koji sabira dva broja.
            <br />
            2. Napraviti select dropdown koji ce nakon selektovanja neke opcije
            prikazati odgovarajucu poruku.
          </p>
        </div>
        <div v-animate-on-scroll class="blog-element">
          <h3>Resenje</h3>
          <button v-if="blurConfig.isBlurred" @click="showResult">
            Prikazi resenje
          </button>
          <div
            v-blur="blurConfig"
            :class="{ unclickable: blurConfig.isBlurred }"
            class="exercise-solution"
          >
            <div class="row">
              <input v-focus type="number" v-model.number="num1" />
              <span>+</span>
              <input v-focus type="number" v-model.number="num2" />
              <span>=</span>
              <span>{{ num1 + num2 }}</span>
            </div>
            <div class="row second">
              <select v-model="name">
                <option class="select" disabled="disabled" selected="selected">
                  -- izaberi opciju --
                </option>
                <option
                  class="select"
                  v-for="framework in frameworks"
                  :key="framework"
                >
                  {{ framework }}
                </option>
              </select>
              <p v-if="name">Moj omiljeni JS framework je {{ name }}</p>
              <p v-else>Izaberi omiljeni framework</p>
            </div>
          </div>
        </div>
        <div
          v-animate-on-scroll
          class="blog-element"
          v-blur="blurConfig"
          :class="{ unclickable: blurConfig.isBlurred }"
        >
          <h3>Kod</h3>
          <InlineImage
            :src="require(`@/assets/images/directiveSolution.png`)"
            alt="Solution for directives!"
          />
          <InlineImage
            :src="require(`@/assets/images/directiveSolution2.png`)"
            alt="Solution for directives!"
            width="28.5%"
          />
        </div>
      </div>
      <hr />
      <div v-animate-on-scroll class="blog-element">
        <BackToAll />
      </div>
      <div v-animate-on-scroll class="blog-element">
        <NextPrev :next="id + 1" :prev="id - 1" />
      </div>
    </div>
  </section>
</template>
<script>
import BlogHeading from "@/components/BlogHeading.vue";
import BackToAll from "@/components/BackToAll.vue";
import InlineImage from "@/components/InlineImage.vue";
import InfoBox from "@/components/InfoBox.vue";
import NextPrev from "@/components/NextPrev.vue";
import { mapGetters } from "vuex";

export default {
  props: {
    BlogHeading,
    BackToAll,
    InlineImage,
    InfoBox,
    NextPrev,
  },
  data() {
    return {
      blurConfig: {
        isBlurred: true,
        opacity: 0.5,
        filter: "blur(8.5px)",
        transition: "all .3s ease",
      },
      id: 1,
      inlineImage: "<InlineImage>",
      infoBox: "<InfoBox>",
      text: "",
      words: "",
      html: '<span style="color: red"> Ovo bi trebalo biti crveno.</span>',
      num1: 0,
      num2: 0,
      name: "",
      frameworks: ["jQuery", "Vue", "React", "Angular"],
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.text = this.$refs.blog.innerHTML;
      this.words = this.text.trim().split(/\s+/).length;
    });
  },
  methods: {
    showResult() {
      this.blurConfig.isBlurred = false;
    },
  },
  computed: {
    ...mapGetters({
      getBlog: "docs/getDoc",
    }),
    blog() {
      return this.getBlog(this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  background-color: #1e1e1e;
  overflow-y: auto;

  .exercise-solution {
    .row {
      margin: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Work Sans", sans-serif;
    }

    input,
    span {
      padding: 10px;
      font-size: 30px;
      font-family: "Work Sans", sans-serif;
      text-align: center;
    }

    input {
      margin: 0;
      width: 100px !important;
    }

    span {
      width: 50px;
    }

    .select {
      color: #707070;
    }

    .second {
      font-size: 18px;
      p {
        margin-left: 20px;
      }
    }
  }

  .bg-leading {
    line-height: 32px !important;
  }
  .pl-10 {
    padding-left: 10px;
  }
  .pl-20 {
    padding-left: 20px;
  }
  .pt-20 {
    padding-top: 20px;
  }
}
</style>