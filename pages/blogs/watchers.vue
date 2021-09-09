<template>
  <section>
    <div class="blog" ref="blog">
      <BlogHeading
        :date="blog.date"
        :readingTime="words"
        :title="blog.title"
        :description="blog.description"
      />
      <div class="blog-content">
        <p>
          Dok su <a>computed propertiji</a> prikladniji za koriscenje u vecini
          slucajeva, postoje neki slucajevi kada nam je nephodan custom
          <a>watcher</a>. Zato Vue nudi vise genericki nacin da reagujemo na
          promjene podataka kroz <a>watch</a> opciju. Najbolje ga je koristiti
          kada hocemo da izvrsavamo ashinhrone ili skupe operacije kao odgovor
          na promjenu podataka.
        </p>
        <h3>Primjer</h3>
        <div class="randomAnswer-exercise">
          <label for="question">Zatrazi da/ne odgovor na pitanje</label>
          <input v-model="question" type="text" placeholder="Pitaj me..." />
          <p>
            {{ answer }}
          </p>
        </div>
        <p>
          U ovom slucaju, koriscenjem <a>watch</a> opcije dobili smo na tome da
          mozemo izvesti ashinrhonu operaciju (pristup API-u), limitiramo koliko
          cesto ocemo da se operacija izvodi i postavljamo privremene state-ove
          kao odgovore dokle ne dobijemo finalni odgovor. Nista od ovoga ne bi
          bilo moguce sa <a>computed propertijima</a>.
        </p>
        <InlineImage
          :src="require(`@/assets/images/yesNoExercise.png`)"
          alt="watchers exercise"
        />
        <p class="pt-20">
          Dakle, <a>watch</a> nam omogucava da pratimo stanje nekog podatka i da
          izvrsimo neke funckije na svaku njegovu promjenu. Sa watch opcijom
          mozemo da pristupimo i njegovoj novoj/staroj vrijednosti, kao i da
          pristumo ugnjezdenim vrijednostima (ukoliko imamo objekat sa vise
          propertija i zelimo da pratimo nesto unutar tog objekta).
        </p>
        <h3>Primjer</h3>
        <div class="counter-exercise">
          <label for="counter"> Unestite broj da pokrenete brojac </label>
          <br />
          <input type="number" v-model.number="counter.current" />
          <p v-if="counter.current">
            <span>Brojac: </span>{{ counter.current }}
          </p>
          <p v-if="counter.old">
            <span>Stara vrijednost:</span> {{ counter.old }}
          </p>
          <p v-if="counter.new">
            <span>Nova vrijednost:</span> {{ counter.new }}
          </p>
        </div>
        <InlineImage
          :src="require(`@/assets/images/counterExercise.png`)"
          alt="watchers exercise"
        />
        <p class="pt-20">
          U datom primjeru mozemo vidjeti kako uz pomoc watch opcije pristupamo
          ugnjezdenom propertiju nekog objekta i kako koristimo staru i novu
          vrijednost propertija kojeg posmatramo.
        </p>
        <h3>
          Watched vs Computed
        </h3>
        <p>
          Vue pruza vise genericki nacin za posmatranje i reagovanje na promjene podataka Vue instance uz pomoc <a>watch</a> propertija. Kada imamo neke podatke koje je potrebno promjeniti na osnovu drugih podataka, primamljivo je da pretjerano koristimo <a>watch</a> properti. Medjutim, cesto je bolja ideja koristiti <a>computed</a> propertije od imperativnog <a>watch</a> callback-a. Pogledajmo primjer: 
        </p>
        <InlineImage
          :src="require(`@/assets/images/wcSolution.png`)"
          alt="watched vs computed"
        />
        <p class="pt-20">
          Kod iznad je imperativan i ponavlja se. Uporedimo ga sa computed properti verzijom: 
        </p>
        <InlineImage
          :src="require(`@/assets/images/wcSolution2.png`)"
          alt="watched vs computed"
        />
        <p class="pt-20">
          Mnogo bolje, zar ne?
        </p>
        <h3>Vjezba</h3>
        <p>
          1. Napraviti button preko kojeg cemo promjeniti stanje nekog elemente
          uz pomoc watch opcije.
        </p>
        <h3>Resenje</h3>
        <button v-if="blurConfig.isBlurred" @click="showResult">
          Prikazi resenje
        </button>
        <div
          v-blur="blurConfig"
          :class="{ unclickable: blurConfig.isBlurred }"
          class="watcher-exercise pt-20"
        >
          <button @click="orderTaco">Naruci taco</button>
          <p class="pt-20">{{ taco }}</p>
          <p v-if="tacoSubmitted">{{ tacoSubmitted }}</p>
        </div>
      </div>
      <hr />
      <BackToAll />
      <NextPrev :next="id + 1" :prev="id - 1" />
    </div>
  </section>
</template>

<script>
import BlogHeading from "@/components/BlogHeading.vue";
import BackToAll from "@/components/BackToAll.vue";
import NextPrev from "@/components/NextPrev.vue";
import InlineImage from "@/components/InlineImage.vue";

import { mapGetters } from "vuex";

export default {
  props: {
    BlogHeading,
    BackToAll,
    NextPrev,
    InlineImage,
  },
  data() {
    return {
      blurConfig: {
        isBlurred: true,
        opacity: 0.5,
        filter: "blur(8.5px)",
        transition: "all .3s ease",
      },
      id: 5,
      text: "",
      words: "",
      question: "",
      answer: "Ne mogu ti dati odgovor dok me ne pitas! 🤔",
      counter: {
        current: null,
        old: null,
        new: null,
      },
      taco: "Dje je moj taco?",
      tacoSubmitted: null,
    };
  },
  methods: {
    showResult() {
      this.blurConfig.isBlurred = false;
    },
    async getAnswer() {
      console.log(this.getAnswer);
      if (this.question.indexOf("?") === -1) {
        this.answer = "Pitanja obicno sadrze ❓";
        return;
      }
      this.answer = "Razmisljam...";
      var apiAnswer = await this.$axios.$get("https://yesno.wtf/api");
      setTimeout(() => {
        if (apiAnswer.answer === "yes") {
          this.answer = "Da! ✔️";
        } else {
          this.answer = "Ne! ❌";
        }
      }, 300);
    },
    debounce(func, delay) {
      let debounceTimer;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
      };
    },
    orderTaco() {
      this.taco = "🌮!";
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.text = this.$refs.blog.innerHTML;
      this.words = this.text.trim().split(/\s+/).length;
    });
  },
  computed: {
    ...mapGetters({
      getBlog: "docs/getDoc",
    }),
    blog() {
      return this.getBlog(this.id);
    },
  },
  created() {
    this.debouncedGetAnswer = this.debounce(this.getAnswer, 500);
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = "Cekam da prestanes da kucas.. 💭";
      this.debouncedGetAnswer();
    },
    "counter.current": function (newValue, oldValue) {
      this.counter.old = oldValue;
      this.counter.new = newValue;
    },
    taco(newValue, oldValue) {
      this.tacoSubmitted = "Taco je narucen!";
      setTimeout(() => (this.tacoSubmitted = "Stizeem!"), 1500);
      setTimeout(() => (this.tacoSubmitted = null), 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  background-color: #1e1e1e;
  overflow-y: auto;

  input {
    margin-top: 7px;
    width: 50%;
    border-radius: 0;
  }

  .randomAnswer-exercise {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    label {
      color: #29c987;
    }

    p {
      color: #29c987;
    }
  }
}
</style>