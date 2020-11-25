<template>
  <div>
    <h1>Gallery</h1>
    <v-container>
      <v-carousel
        cycle
        continuous
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(image, i) in images" :key="i">
          <img
            :src="require('../assets/images/engagement-pictures/' + image)"
            class="image-center"
          />
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      images: [
        "DSC05091.jpg",
        "DSC04567.jpg",
        "DSC04365.jpg",
        "DSC04258.jpg",
        "DSC04567.jpg",
        "DSC05147.jpg",
        "IMG_1870.jpeg",
      ],
    };
  },
};
</script>

<style scoped>
.image-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
