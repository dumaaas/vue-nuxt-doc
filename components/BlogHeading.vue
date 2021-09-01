<template>
  <div class="heading">
    <div class="heading-reading">
      <span> {{ date }} | {{ readingTime }} </span>
    </div>
    <div class="heading-title">
      <h2>
        {{ title }}
      </h2>
    </div>
    <div class="heading-description">
      <p>
        {{ description }}
      </p>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    readingTime: String,
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>

span {
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  color: #f5f5f5;
}
h2 {
  padding-top: 13px;
  font-size: 40px;
  line-height: 45px;
  color: #fff;
  font-weight: 800;
}
p {
  padding-top: 10px;
  font-size: 20px;
  line-height: 25px;
  color: #f5f5f5;
  font-weight: 400;
}
</style>