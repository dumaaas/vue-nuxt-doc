<template>
  <main>
    <Header />
    <Nuxt />
    <Footer/>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>