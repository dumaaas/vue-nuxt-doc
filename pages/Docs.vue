<template>
  <section>
    <div v-animate-on-scroll class="blog">
      <div class="blog-title">
        <h2>Latest Posts</h2>
      </div>
	  <div class="blog-content">
		  <div class="blog-content__item" v-for="article of articles" :key="article">
			  <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
				  <div class="blog-content__item-top">
						<img :src="require(`~/assets/resources/${article.img}`)" alt="" />
						<div class="blog-content__item-bottom">
							<h3>{{ article.title }}</h3>
							<p>{{ article.description }}</p>
						</div>
				  </div>
			  </nuxt-link>
		  </div>
	  </div>
    </div>
  </section>
</template>

<script>
    export default {
	async asyncData({ $content, params }) {
		const articles = await $content('blog', params.slug)
			.only(['title', 'description', 'img', 'slug'])
			.sortBy('createdAt', 'asc')
			.fetch();

		return {
			articles
		}
	}
}
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