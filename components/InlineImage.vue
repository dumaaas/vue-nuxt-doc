<template>
  <div style="display: inline">
    <img :src="src" :alt="alt" :width="width" />
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    width: {
      type: String,
      required: false,
      default: "100%",
    },
  },
};
</script>

<style lang="scss" scoped>
img {
    margin-top: 1px;
}
</style>