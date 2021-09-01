<template>
  <div>
    <nuxt-link to="/dokumentacija">👈 NAZAD NA DOKUMENTACIJU</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  color: inherit;
  background-image: linear-gradient(0deg, #2ec997 50%, transparent 0);
  background-size: 100% 200%;
  background-position: top;
  transition: background-position 0.25s ease-in-out, color 0.25s ease-in-out;
  border-radius: 2px;
  padding: 0 2px;
  border-bottom: 2px solid #2ec997;
  font-size: 1.25rem;
  &:hover {
    background-position: bottom;
    color: #000;
  }
}
</style>