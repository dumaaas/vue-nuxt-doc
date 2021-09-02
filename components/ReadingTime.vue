
<template>
  <span>{{ readingTime }} minuta</span>
</template>

<script>
export default {
  name: "readingTime",
  props: ["words"],
  computed: {
    readingTime() {
      let minutes = 0;
      const wordsPerMinute = 200;
      minutes = Math.ceil(this.words / wordsPerMinute);
      console.log(minutes);
      return minutes;
    },
  },
};
</script>