<template>
  <section>
    <div v-animate-on-scroll class="blog">
      <div class="blog-title">
        <h2>Dokumentacija</h2>
      </div>
      <div class="blog-search">
        <input
          placeholder="Pretrazi dokumentaciju..."
          type="text"
          v-model="docFilter"
        />
        <p v-if="!filteredDoc.length" class="no-results">
          Nema rezultata. Pokusajte ponovo!
        </p>
      </div>
      <div class="blog-content">
        <nuxt-link
          v-for="blog in filteredDoc"
          :key="blog.title"
          :to="`/blogs/${blog.page}`"
          ><div class="blog-content__item">
            <div class="blog-content__item-top">
              <img :src="require(`@/assets/images/${blog.img}`)" alt="" />
            </div>
            <div class="blog-content__item-bottom">
              <h3>{{ blog.title }}</h3>
              <span>{{ blog.date }}</span>
              <p>{{ blog.content }}</p>
            </div>
          </div></nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      docFilter: "",
    };
  },
  computed: {
    ...mapState({
      blogs: (state) => state.docs.docs,
    }),
    filteredDoc() {
      let filter = new RegExp(this.docFilter, "i");
      return this.blogs.filter((el) => el.title.match(filter));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_mixins.scss";

section {
  height: 100vh;
  background-color: #1e1e1e;
  overflow-y: auto;
}
.blog {
  margin: 0 auto;
  padding: 120px 20px 0 20px;
  max-width: 78ch !important;
  &-search {
    input {
      margin-bottom: 0;
    }
  }
  &-title {
    display: flex;
    gap: 15px;
    align-items: center;

    h2 {
      font-size: 56px;
      line-height: 84px;
      color: #f5f5f5;
      font-weight: 800;
    }
  }
  &-content {
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;
    gap: 20px;
    padding-bottom: 130px;
    @include breakpoint($xs) {
      flex-direction: column;
    }
    a {
      width: 48%;
      @include breakpoint($xs) {
        width: 100%;
      }
    }
    &__item {
      align-self: stretch;
      width: 100%;
      border-radius: 5px;
      background-color: #0f0f0f;
      height: 100%;
      transform: translateX(0px) translateY(0px);
      transition: transform 1s ease 0s;
      img {
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        object-fit: cover;
        height: 130px;
        @include breakpoint($xs) {
          height: 120px;
        }
      }

      &-bottom {
        padding: 22px;
        h3 {
          font-size: 24px;
          line-height: 27px;
          font-weight: 600;
          padding-bottom: 5px;
        }
        span {
          font-size: 16px;
          line-height: 20px;
          color: #f5f5f5;
          font-weight: 300;
        }
        p {
          padding-top: 20px;
          font-size: 16px;
          line-height: 24px;
          color: #f5f5f5;
          font-weight: 400;
        }
      }
      &:hover {
        transition: transform 1s ease 0s;
        transform: translateX(0px) translateY(-10px);
      }
    }
  }
}
</style>