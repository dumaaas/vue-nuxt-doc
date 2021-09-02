<template>
  <section>
    <div class="blog" ref="blog">
      <BlogHeading
        :date="date"
        :readingTime="words"
        :title="title"
        :description="description"
      />
      <div class="blog-content">
        <p>
          Metodi su vezani za Vue instancu i jako su korisne za funkcije kojim
          zelimo da pristupimo u direktivama. Takodje, mozemo da im pristupimo i
          iz drugih metoda, computed propertija, lifecycle hookova... Da bi
          dodali metode za instancu komponente koristimo opciju <a>methods</a>.
          To bi trebao biti objekat koji sadrzi zeljene metode.
        </p>
        <p>
          Vue automatski veze <a>this</a> vrijednost za metode, tako da uvijek
          referira na instancu komponente. Trebali bi izbjegavati koriscenje
          <a>arrow</a> funckija prilikom definisanja metoda, jer to sprijecava
          Vue da veze prikladnu <a>this</a> vrijednost. Dostupni su za pozivanje
          iz template-a komponente i najcesce se koriste kao event listeneri.
        </p>
        <h3>Data</h3>
        <p>
          Opcija <a>data</a> za komponentu predstavlja funkciju. Vue poziva ovu
          funkciju kao dio kreiranja nove instance komponente. Trebalo bi da
          vrati objekat, koji ce Vue da umota u svoj reaktivni sistem i
          uskladisti u instanci komponente kao $data.
        </p>
        <p>
          Instance date se dodaju samo kada se instanca komponente prvi put
          kreira, tako da moramo da se pobrinemo da su svi prisutni u objektu
          vracenom od strane <a>data</a> funkcije. Kada vrijednost podatka jos
          uvijek nije dostupna, pozeljno je koristiti <a>null</a>,
          <a>undefined</a>, ili neku drugu placeholder vrijednost.
        </p>
        <h3>Primjeri</h3>
        <p>
          Sada slijedi par primjera u kojima se najbolje moze vidjeti primjena
          metoda.
        </p>
        <h4>#Brojac</h4>
        <div
          class="method-example"
          @mousemove="xCoordinate"
          :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
        >
          <p>
            <button @click="decrement">-</button>
            {{ counter }}
            <button @click="increment">+</button>
          </p>
          <p>Pixels across: {{ x }}</p>
        </div>
        <p>
          Na gornjem primjeru mozemo vidjeti upotrebu metoda sa event
          listenerima. Klikom na +/- mijenjace se vrijednost counter podatka i
          pomijeranjem misa po div elementu mijenjace se x koordinata i samim
          tim pozadina diva.
        </p>
        <h4>#Kod</h4>
        <InlineImage
          :src="require(`@/assets/images/methodExample.png`)"
          alt="primjer metoda"
        />
        <InlineImage
          :src="require(`@/assets/images/methodExample2.png`)"
          alt="primjer metoda2"
          width="80%"
        />
        <p class="pt-20">
          U ovom slucaju metode koristimo kako bi se izvrsili na promjene eventa
          i kako bi manipulisali sa data propertijima. Iz toga razloga prvo
          moramo deklarisati data propertije. Zatim kreiramo jednostavne metode
          koji ce izvrsavati promjene nad ovim podacima. I na kraju vezemo metod
          za event listener kako bi se uvijek izvrsavali na promjene ovih
          eventova.
        </p>
        <h4>#Komentari</h4>
        <div class="method-chat">
          <div class="method-chat__post">
            <InlineImage
              :src="require(`@/assets/images/${post.contentPhoto}`)"
              alt="post"
            />
            <div class="method-chat__post-image">
              <img
                :src="require(`@/assets/images/${post.profilePhoto}`)"
                alt="post"
              />
            </div>
            <div class="method-chat__post-author">
              <h4>{{ post.author }}</h4>
              <p>{{ post.content }}</p>
            </div>
          </div>
          <div class="method-chat__messages">
            <p v-for="message in post.messages" :key="message">
              {{ message }}
            </p>
          </div>
          <div class="method-chat__input">
            <input
              @keyup.enter="addMessage"
              v-model="newMessage"
              type="text"
              placeholder="Unesite poruku..."
            />
          </div>
        </div>
        <p class="pt-20">
          U ovom primjeru moguce je dodavati nove poruke pritiskanjem
          <a>Enter</a>
          dugmeta na tastaturi.
        </p>
        <h4>#Kod</h4>
        <InlineImage
          :src="require(`@/assets/images/messageExample.png`)"
          alt="primjer chata"
          width="95%"
        />
        <InlineImage
          :src="require(`@/assets/images/messageExample2.png`)"
          alt="primjer chata"
        />
        <p class="pt-20">
          Prvo je bilo nephodno kreirati objekat post u kojem cuvamo informacije
          o objavi i u kojem imamo niz poruka koje prikazujemo uz pomoc v-for
          direktive. Zatim, napisati metod koji ce dodavati novu poruku u niz
          poruka. I na kraju vezati metod za event <a>keyup</a> sa modiferom
          <a>enter</a> (koji na pritisak enter dugmeta na tastaturi izvrsava
          dati metod).
        </p>
        <h3>Vjezba</h3>
        <p>
          1. Napraviti niz objekata, gdje svaki objekat sadrzi naziv i rating
          serije. Prikazati taj sve serije uz pomoc v-for direktive i kreirati
          dva button-a koji sortiraju filmova kao najbolje odnosno najlosije
          ocijenjene.
        </p>
        <h3>Resenje</h3>
        <div class="tvshow-exercise">
          <div class="tvshow-exercise__buttons">
            <button @click="sortBest">Sortiraj najbolje</button>
            <button @click="sortWorst">Sortiraj najlosije</button>
          </div>
          <table>
            <thead>
              <tr>
                <th v-for="column in columns" :key="column">{{ column }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="show in tvShows" :key="show.title">
                <th>
                  {{ show.title }}
                </th>
                <th>
                  {{ show.rating }}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 class="pt-20">Kod</h3>
        <InlineImage
          :src="require(`@/assets/images/sortMethods2.png`)"
          alt="sort exercise"
        />
        <InlineImage
          :src="require(`@/assets/images/sortMethods.png`)"
          alt="sort exercise"
          width="88%"
        />
      </div>
      <hr />
      <BackToAll />
      <OtherBlogs :otherBlogs="otherBlogs" />
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
      text: "",
      words: "",
      counter: 0,
      x: 638,
      post: {
        messages: ["Pika Pika Chu!", "Hey pika, nice pic!", "OMG! AMAZING!"],
        author: "Marko Dumnic",
        profilePhoto: "pikachuGif.webp",
        content: '"Bunch of Pokemons. Yeaaay."',
        contentPhoto: "pokemons.webp",
      },
      newMessage: "",
      date: "01. Septembar 2021",
      readingTime: "2 minute read",
      title: "Methods",
      description: "Metode i data property u Vue-u.",
      otherBlogs: [
        {
          title: "Direktive",
          url: "directives",
          img: "directives.jpg",
          alt: "direktive",
        },
        {
          title: "Custom direktive",
          url: "customDirective",
          img: "customDirective.png",
          alt: "Custom direktive",
        },
      ],
      columns: ["Title", "Rating"],
      tvShows: [
        { title: "Friends", rating: 96 },
        { title: "How I Met Your Mother", rating: 95 },
        { title: "The Big Bang Theory", rating: 91 },
        { title: "Ted Lasso", rating: 93 },
        { title: "Breaking Bad", rating: 99 },
        { title: "Peaky Blinders", rating: 97 },
        { title: "The Boys", rating: 92 },
        { title: "Brooklyn Nine-Nine", rating: 98 },
        { title: "True Detective", rating: 94 },
      ],
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    xCoordinate(e) {
      this.x = e.clientX;
    },
    addMessage() {
      this.post.messages.push(this.newMessage);
      this.newMessage = "";
    },
    sortWorst() {
      this.tvShows.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    },
    sortBest() {
      this.tvShows.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.text = this.$refs.blog.innerHTML;
      this.words = this.text.trim().split(/\s+/).length;
    });
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  background-color: #1e1e1e;
  overflow-y: auto;
}

.method-chat {
  background: #191d1b;
  padding: 40px;

  &__post {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;

    &-author {
      text-align: right;
    }

    &-image {
      position: absolute;
      bottom: 20px;
      left: -10px;
      img {
        border: 2px solid #fff !important;
        border-radius: 50%;
        width: 30%;
      }
    }
  }

  &__messages {
    p {
      padding: 10px 0;
      border-top: 1px solid #999;
      &:last-child {
        border-bottom: 1px solid #999;
      }
    }
  }

  &__input {
    input {
      width: 100%;
      margin-bottom: 0;
    }
  }
}

.method-example {
  padding-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  button {
    cursor: pointer;
    background: #29c987;
    border: 1px solid #fff;
    padding: 4px 15px;
    border-radius: 8px;
  }
}
</style>