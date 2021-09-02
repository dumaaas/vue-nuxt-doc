<template>
  <footer>
    <div>
      Built by <a target="_blank" href="https://www.linkedin.com/in/marko-dumni%C4%87-714b72198/">Marko Dumnic</a>. The source code
      is available on <a href="https://github.com/dumaaas/vue-nuxt-doc" target="_blank">Github</a>.
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: #0f0f0f;
  width: 100vw;
  position: fixed;
  bottom: 0;
  div {
    padding: 20px 0;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: #f5f5f5;
  }

  a {
    color: inherit;
    background-image: linear-gradient(0deg, #2ec997 50%, transparent 0);
    background-size: 100% 200%;
    background-position: top;
    transition: background-position 0.25s ease-in-out, color 0.25s ease-in-out;
    border-radius: 2px;
    padding: 0 2px;
    border-bottom: 2px solid #2ec997;

    &:hover {
      background-position: bottom;
      color: #000;
    }
  }
}
</style>