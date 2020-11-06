<template>
  <div>
    <div class="image-and-text">
      <img
        src="../assets/images/HomePageBanner.jpeg"
        class="image-center"/>
      <div class="image-text">
        <h1>Haley & Zach</h1>
        <h2>August 7, 2021 ∙ Kasota, MN</h2>
        <h2># days to go</h2>
      </div>
    </div>
  
    <h1>The Wedding</h1>
    <div>Saturday, August 7, 2021</div>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
  color: white;
  width: 100%;
}
</style>
