<template>
  <div>
    <h1>Travel</h1>

    <v-col class="column-padding">
      <h3>
        We are so excited to celebrate with you!
        We have a couple recommendations for your stay near Kasota, MN.
      </h3>
    </v-col>
    
    <img
      src="../assets/images/travel/CountryInnAndSuites.jpg"
      class="image-center travel-image"/>

    <v-card flat>
      <div class="travel-subtitle">Country Inn & Suites by Radisson</div>
      <div class="travel-subtitle">1900 Premier Drive, Mankato, MN 56001</div>
      <div class="travel-subtitle">507-388-8555</div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Travel',
};
</script>

<style scoped>
.travel-image {
  max-width: 600px;
  padding: 24px;
}

.image-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.travel-subtitle {
  text-transform: uppercase;
}

.travel-button {
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
}

.column-padding {
  padding: 0 24px 0 24px;
  max-width: 840px;
  margin-left: auto;
  margin-right: auto;
}
</style>
