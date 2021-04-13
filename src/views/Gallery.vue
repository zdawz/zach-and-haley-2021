<template>
  <div>
    <h1>Gallery</h1>
    <v-container>
      <v-carousel continuous hide-delimiters show-arrows-on-hover height="92vh">
        <v-carousel-item
          v-for="(image, i) in images" :key="i"
          :src="require('../assets/images/engagement-pictures/' + image)"
          contain
        />
      </v-carousel>
    </v-container>
    <div class="gallery-subtitle">Photos by Will Clark</div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      images: [
        "DSC04742.jpg",
        "DSC04258.jpg",
        "IMG_1757.jpeg",
        "DSC04365.jpg",
        "DSC04438.jpg",
        "DSC04549.jpg",
        "DSC04567.jpg",
        "DSC04677.jpg",
        "DSC04824.jpg",
        "DSC04871.jpg",
        "DSC04955.jpg",
        "DSC05064.jpg",
        "IMG_1918.jpeg",
        "DSC05115.jpg",
        "DSC05147.jpg",
        "IMG_1934.jpg",
        "DSC05280.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.container {
  padding-left: 0;
  padding-right: 0;
}

.gallery-subtitle {
  text-transform: uppercase;
}
</style>
