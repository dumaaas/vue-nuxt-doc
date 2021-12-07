<template>
  <section>
     <div class="blog" ref="blog">
	  <nuxt-content :document="article" />
     </div>
  </section>
</template>

<script>

export default {
  
	async asyncData({ $content, params }) {
		const article = await $content('blog', params.slug).fetch();

		return { article }
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/abstracts/_mixins.scss";

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