<template>
  <div>
    <h1>Travel</h1>

    <v-col class="column-padding">
      <h3>
        We are so excited to celebrate with you!
        We have a couple of recommendations for your stay near Kasota, MN.
      </h3>
    </v-col>
    
    <img
      src="../assets/images/travel/CountryInnAndSuites.jpg"
      class="image-center travel-image"/>

    <v-card flat>
      <div class="travel-subtitle">Country Inn & Suites by Radisson</div>
      <div class="travel-subtitle">1900 Premier Drive, Mankato, MN 56001</div>
      <div class="travel-subtitle">507-388-8555</div>
      <div class="travel-subtitle-info subtitle-info-padding">Standard Rooms & Studio Suites $124/night, 1BR Executive Suites $129/night</div>
      <div class="travel-subtitle-info">Make reservations by phone and ask for the Pesik-Dawson wedding block</div>
     
    </v-card>

    <img
      src="../assets/images/travel/HolidayInnExpress.jpg"
      class="image-center travel-image"/>

    <v-card flat>
      <div class="travel-subtitle">Holiday Inn Express & Suites</div>
      <div class="travel-subtitle">2051 Adams Street, Mankato, MN 56001</div>
      <div class="travel-subtitle">507-388-1880</div>
      <v-btn
        outlined
        large
        color="#2e2e2e"
        href="http://www.hiexpress.com/mankatomn"
        target="_blank"
        class="detail-button">
        Website
      </v-btn>
      <div class="travel-subtitle-info">1 King Bed $134.99/night, 2 Queen Beds $139.99/night</div>
      <div class="travel-subtitle-info">For reservations by phone ask for the Pesik-Dawson wedding block</div>
      <div class="travel-subtitle-info">For reservations on their website use group code: PES</div>
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

.travel-subtitle-info {
  font-family: "OpenSerif";
  font-weight: normal;
}

.subtitle-info-padding {
  padding-top: 16px;
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

.detail-button {
  margin: 16px 16px 16px 16px;
}
</style>
