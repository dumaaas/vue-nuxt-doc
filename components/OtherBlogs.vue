<template>
  <div class="blogs">
    <div v-for="blog in otherBlogs" :key="blog.title" class="blog-item">
      <nuxt-link :to="`/blogs/${blog.url}`">
        <div class="blog-item__top">
          <img :src="require(`@/assets/images/${blog.img}`)" :alt="blog.alt" />
        </div>
        <div class="blog-item__bottom">
          <h3>OTHER POST</h3>
          <p>
            {{ blog.title }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    otherBlogs: Array,
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