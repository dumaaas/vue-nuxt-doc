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
      id: 6,
    };
  },
  methods: {
    showResult() {
      this.blurConfig.isBlurred = false;
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
  created() {},
  watch: {},
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
}
</style>