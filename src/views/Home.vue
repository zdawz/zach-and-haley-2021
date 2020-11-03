<template>
  <div class="home">
    <div class="names">Haley & Zach</div>
    <img
      alt="Zach and Haley"
      src="../assets/images/DSC05091.jpg"
      class="image-center" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style>
.image-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
}

.names {
  font-family: "Aesthete";
  font-size: 150px;
}
</style>
