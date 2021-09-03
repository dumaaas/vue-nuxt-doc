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
          Computed property predstavlja stanje koje zavisi od drugih stanja. Da
          bi direktno kreirali computed vrijednost koristimo
          <a>computed</a> funkciju: uzima getter funkciju i vraca nepromjenjivi
          reaktivni <a>ref</a> objekat za vracenu vrijednost iz gettera.
        </p>
        <p>
          Computed properties-i su kalkulacije koje se kesiraju i azuriraju samo
          kada je to potrebno. Imaju jako visoke performanse ali ih treba
          koristiti sa razumijevanjem. Najbolje ga je koristiti za kompleksnu
          logiku koja ukljucuje reaktivne podatke.
        </p>
        <h3>Primjer</h3>
        <div class="input-computed">
          <label for="greeting">Vase ime: </label>
          <input
            v-model.lazy="userData"
            type="text"
            placeholder="Unesite ime..."
          />
          <p v-if="userData"><span>Inicijalni unos:</span> {{ userData }}</p>
          <p v-if="userData"><span>Computed prop:</span> {{ greeting }}</p>
          <p>
            U ovom primjeru vidimo da je inicijalni unos ostao isti, dok nam je
            computed property omogucio da ga uradimo nesto sa tim unosom i
            vratimo drugaciju vrijednost, odnosno dao nam je novi pogled na sami
            podatak bez da ga mijenja na bilo koji nacin. Computed prop
            <a>greeting</a> ce se prevednovati jedino ako se
            <a>userData</a> izmijeni.
          </p>
        </div>
        <h3>Computed vs Methods</h3>
        <div class="battle-of-vue">
          <div class="battle-of-vue__computed item">
            <h4>Computed</h4>
            <ul>
              <li><p>Izvrsava se samo kada se dependency promijeni</p></li>
              <li>Kesira se</li>
              <li>Trebao bi da se koristi kao property, na mjestu data</li>
              <li>Po defaultu samo getter, ali moze se definisati i setter</li>
            </ul>
          </div>
          <div class="battle-of-vue__methods item">
            <h4>Methods</h4>
            <ul>
              <li>Izvrsava se na svako azuiraranje</li>
              <li>Ne kesira se</li>
              <li>Obicno se poziva sa v-on/@, ali je fleksibilno</li>
              <li>Getter/Setter</li>
            </ul>
          </div>
        </div>
        <p class="pt-20">
          Dakle, na sledecoj slici mozemo vidjeti da mozemo postici isti
          rezultat uz pomoc metoda i computed propertija. Ali, razlika je sto se
          computed propertiji kesiraju na osnovu svojih reaktivnih dependency-a
          i oni ce se samo prevrednovati ukoliko se neka njegovih reaktivnih
          dependencija promijeni. Ovo znaci da dokle god je
          <a>author.books</a> nepromijenjen, computed properti
          <a>publishedBookMessage</a> ce automatski vratiti poslednju izracunatu
          vrijednost bez da pokrece funkciju ponovo. Poredjenja radi, poziv
          metoda ce <a>uvijek</a> izvrsiti funkciju kada god se re-render
          dogodi.
        </p>
        <p>
          Zasto nam je potrebno kesiranje? Recimo da imamo computed property
          <a>list</a>, koji zahtjeva prolazak kroz petnju ogormnog niza i veliki
          broj kalkulacija. Onda imamo drugi computed properti koji zavisi od
          propertija <a>list</a>. Bez kesiranja, izvrsavali bi
          <a>list</a> getter mnogo vise puta nego sto je potrebno. Kesiranje nam
          omogucava brze i vece performanse.
        </p>
        <InlineImage
          :src="require(`@/assets/images/methodsComputed.png`)"
          alt="methods vs computed"
        />
        <h3 class="pt-20">Primjer</h3>
        <div class="tvshow-exercise">
          <div class="tvshow-exercise__filter">
            <input
              type="text"
              placeholder="Filtriraj serije..."
              v-model="showFilter"
            />
          </div>
          <div class="tvshow-exercise__buttons">
            <button @click="sortBest">Sortiraj najbolje</button>
            <button @click="sortWorst">Sortiraj najlosije</button>
          </div>
          <table v-if="filteredShows.length">
            <thead>
              <tr>
                <th v-for="column in columns" :key="column">{{ column }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="show in filteredShows" :key="show.title">
                <th>
                  {{ show.title }}
                </th>
                <th>
                  {{ show.rating }}
                </th>
              </tr>
            </tbody>
          </table>
          <p class="no-results" v-else>Nema rezultata. Pokusaj ponovo!</p>
        </div>
        <p class="pt-20">
          U ovom primjeru su filtrirane TV serije uz pomoc computed propertija
          koji nam je omogucava da filtriramo kroz ogromne kolicine podataka
          veoma brzo i sa visokim performansom.
        </p>
        <h3>Kod</h3>
        <InlineImage
          :src="require(`@/assets/images/filterSolution.png`)"
          alt="primjer filtriranja"
        />
        <InlineImage
          :src="require(`@/assets/images/filterSolution2.png`)"
          alt="primjer metoda2"
          width="80%"
        />
        <p class="pt-20">
          Umjesto da prikazujemo podatke uz pomoc <a>tvShows</a> data propertija
          koristimo <a>filteredShows</a> computed properti. I umjesto da pravimo
          metod koji ce da filtrira i mijenja <a>tvShows</a> properti, dovoljno
          je odraditi filtriranje u <a>filteredShows</a> propertiju, koja ce na
          svaku promjenu <a>showFilter-a</a> da azurira svoju vrijednost a da
          pritom ne izmijeni orginalni niz.
        </p>
        <h3>Computed Setter</h3>
        <p>
          Computed propertiji su po defaultu samo getteri, ali mozemo
          obezbjediti i setter kada nam je potreban.
        </p>
        <div class="computed-setter pb-20">
          <button @click="changeFullName">Promijeni ime</button>
          <p>Puno ime: {{ fullName }}</p>
        </div>
        <InlineImage
          :src="require(`@/assets/images/changeName.png`)"
          alt="Computed setter"
        />
        <p class="pt-20">
          U primjeru iznad prikazujemo puno ime uz pomoc computed propertija
          <a>fullName</a>. Klikom na button invokujemo metod
          <a>changeFullName()</a> koji koristeci setter computed propertija daje
          novu vrijednost fullName-u.
        </p>
      </div>
      <h3>Vjezba</h3>
      <p>
        1. Krerati niz objekata <a>posts</a> od kojeg svaki element sadrzi
        <a>title</a>, <a>authorName</a> i <a>label</a> polje. <br />2. Omoguciti
        dodavanje novog posta u niz posts. <br />3. Omoguciti filtriranje svih
        postova po label polju.
      </p>
      <h3>
        Resenje
      </h3>
      <button v-if="blurConfig.isBlurred" @click="showResult">
        Prikazi resenje
      </button>
      <div v-blur="blurConfig" class="filterPosts-exercise" :class="{ 'unclickable': blurConfig.isBlurred }">
        <h4>Blog Posts</h4>
        <div class="filterPosts-exercise__newPost">
          <h5>Dodaj novi post</h5>
          <div class="inputs">
            <input
              type="text"
              placeholder="Unesite title..."
              v-model="titlePlaceholder"
              required
            />
            <input
              type="text"
              placeholder="Unesite ime autora..."
              v-model="authorPlaceholder"
              required
            />
          </div>
          <div class="label">
            <select v-model="labelPlaceholder" required>
              <option class="select" selected disabled value="">
                Izaberite label...
              </option>
              <option class="select" v-for="label in labels" :key="label">
                {{ label }}
              </option>
            </select>
          </div>
          <div class="button">
            <button @click="addPost">Dodaj</button>
          </div>
        </div>
        <div class="filterPosts-exercise__list">
          <div class="select-list">
            <select v-model="labelFilter">
              <option class="select" disabled value="">Filtriraj...</option>
              <option class="select" v-for="label in labels" :key="label">
                {{ label }}
              </option>
            </select>
          </div>
          <div v-for="post in filteredPosts" :key="post.title" class="post">
            <div class="post-left">
              <div class="post-left__top">
                <h4>
                  {{ post.title }}
                </h4>
              </div>
              <div class="post-left__bottom">
                <p>
                  {{ post.authorName }}
                </p>
              </div>
            </div>
            <div class="post-right">
              <p class="box" :class="post.label">
                {{ post.label }}
              </p>
            </div>
          </div>
          <span v-if="!filteredPosts.length" class="no-results"
            >Nema trazenih rezultata.</span
          >
        </div>
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
      userData: "",
      date: "02. Septembar 2021",
      title: "Computed properties",
      description: "Osnovno znacenje i upotreba computed property-a.",
      columns: ["Title", "Rating"],
      showFilter: "",
      labelFilter: "",
      text: "",
      words: 0,
      blurConfig: {
        isBlurred: true,
        opacity: 0.5,
        filter: 'blur(8.5px)',
        transition: 'all .3s ease'
      },
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
      firstName: "Marko",
      lastName: "Dumnic",
      labels: ["matematika", "informatika", "fizika", "hemija"],
      posts: [
        {
          title: "Benfordov zakon",
          authorName: "Frenk Benford",
          label: "matematika",
        },
        {
          title: "Visual Basic .NET",
          authorName: "Bill Forgey",
          label: "informatika",
        },
        {
          title: "Solid state theory",
          authorName: "Walter A. Harrison",
          label: "fizika",
        },
      ],
      titlePlaceholder: "",
      authorPlaceholder: "",
      labelPlaceholder: "",
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.text = this.$refs.blog.innerHTML;
      this.words = this.text.trim().split(/\s+/).length;
    });
  },
  computed: {
    greeting() {
      return `Welcome, ${this.userData}! 👋`;
    },
    filteredShows() {
      let filter = new RegExp(this.showFilter, "i");
      return this.tvShows.filter((el) => el.title.match(filter));
    },
    filteredPosts() {
      let filter = new RegExp(this.labelFilter, "i");
      return this.posts.filter((el) => el.label.match(filter));
    },
    fullName: {
      // getter
      get() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set(newValue) {
        const names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
  methods: {
    showResult() {
      this.blurConfig.isBlurred = false;
    },
    sortWorst() {
      this.tvShows.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    },
    sortBest() {
      this.tvShows.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    },
    changeFullName() {
      this.fullName = "Stefan Tomovic";
    },
    addPost() {
      if(this.titlePlaceholder === "" || this.authorPlaceholder === "" || this.labelPlaceholder === "") {
        return;
      }
      var post = {};
      post.title = this.titlePlaceholder;
      post.authorName = this.authorPlaceholder;
      post.label = this.labelPlaceholder;
      this.posts.push(post);
      this.titlePlaceholder = "";
      this.authorPlaceholder = "";
      this.labelPlaceholder = "";
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  background-color: #1e1e1e;
  overflow-y: auto;

  .filterPosts-exercise {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 0;
    }

    .button {
      width: 100%;
    }

    button {
      width: 100%;
    }

    h5 {
      color: #29c987;
      text-transform: uppercase;
      font-size: 18px;
    }

    input {
      margin: 0;
      width: 48%;
    }

    .inputs {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
    }

    .label {
      width: 100%;
    }

    .select {
      color: #707070;
    }

    select {
      border-radius: 0;
      width: 100%;
      height: 36px;
      padding-left: 22px;
    }

    &__newPost {
      background: #0f0f0f;
      padding: 25px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }

    &__list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      flex-direction: column;
      width: 100%;

      p {
        padding-bottom: 0;
      }

      .box {
        padding: 5px 10px;
        border-radius: 5px;
      }

      .matematika {
        background: #d9534f;
      }

      .informatika {
        background: #428bca;
      }

      .fizika {
        background: #29c987;
      }

      .hemija {
        background: #f0ad4e;
      }

      .post {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px solid #29c987;
        padding: 7px 25px;

        &-left {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
        }
      }
      .select-list {
        width: 100%;
      }
    }
  }

  .computed-setter {
    display: flex;
    gap: 15px;
    align-items: center;
    p {
      padding: 0;
    }
  }

  label {
    display: block;
    color: #29c987;
  }
  input {
    margin-top: 3px;
    border-radius: 0;
  }

  .battle-of-vue {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;

    li {
      list-style-position: inside;
      text-indent: -1.1em;
      padding-left: 1em;
      line-height: 23px;
      p {
        display: inline;
      }
      &::before {
        width: 0;
        margin-left: 20px;
      }
    }

    h4 {
      text-align: center;
    }
    .item {
      width: 49%;
      padding: 10px;
      &:first-child {
        border-right: 1px solid #dadada;
      }
    }
  }
}
</style>