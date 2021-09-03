<template>
  <div class="blogs">
    <div class="blog-item" v-if="prevBlog">
      <nuxt-link :to="`/blogs/${prevBlog.page}`">
        <div class="blog-item__top">
          <img :src="require(`@/assets/images/${prevBlog.img}`)" :alt="prevBlog.alt" />
        </div>
        <div class="blog-item__bottom">
          <h3>PREVIOUS POST</h3>
          <p>
            {{ prevBlog.title }}
          </p>
        </div>
      </nuxt-link>
    </div>
    <div class="blog-item" v-if="nextBlog">
      <nuxt-link :to="`/blogs/${nextBlog.page}`">
        <div class="blog-item__top">
          <img :src="require(`@/assets/images/${nextBlog.img}`)" :alt="nextBlog.alt" />
        </div>
        <div class="blog-item__bottom">
          <h3>NEXT POST</h3>
          <p>
            {{ nextBlog.title }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    next: Number,
    prev: Number,
  },

  computed: {
    ...mapGetters({
      getBlog: "docs/getDoc",
    }),
    nextBlog() {
      return this.getBlog(this.next);
    },
    prevBlog() {
      return this.getBlog(this.prev);
    },
  },
};
</script>

<style lang="scss" scoped>
.blogs {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
  }
  .blog-item {
    width: 49%;
    text-align: center;
    h3 {
      font-size: 16px;
      line-height: 18px;
      font-weight: 600;
    }
    p {
      padding-top: 20px;
      font-size: 16px;
      line-height: 18px;
      font-weight: 300;
    }
    &__bottom {
      width: 100%;
      margin-top: -3px;
      padding: 20px;
      background-color: #0f0f0f;
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
}
</style>