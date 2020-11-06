<template>
  <div class="our-story-page">
    <div class="image-and-text">
      <img
        src="../assets/images/OurStoryPageBanner.jpeg"
        class="image-center"/>
      <div class="image-text">
    <h1>Our Story</h1>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Our Story',
};
</script>

<style scoped>
.image-and-text {
  text-align: center;
  position: relative;
}

.image-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.image-text {
  display: block;
  position: absolute;
  top: 0px;
  margin-left: auto;
  margin-right: auto;
  color: #2e2e2e;
  width: 100%;
}

.our-story-page span {
  font-family: "OpenSerif";
  font-size: 15px;
  width: 75% !important;
  margin-left: auto;
  margin-right: auto;
}
</style>