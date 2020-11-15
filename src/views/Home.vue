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

    <v-layout class="wedding-info-cards">
      <v-card flat outlined class="wedding-info-card">
        <div class="detail">When</div>
        <div class="detail-text">Saturday, August 7, 2021</div>
        <div class="detail-text">4:00 PM - 11:00 PM</div>
        <v-btn outlined large color="#2e2e2e" to="/guest-accommodations" class="detail-button">Details</v-btn>
      </v-card>
      <v-card flat outlined class="wedding-info-card">
        <div class="detail">Where</div>
        <div class="detail-text">Olive Branch Farm</div>
        <div class="detail-text">34589 470th Street</div>
        <div class="detail-text">Kasota, MN 56050</div>
        <v-btn outlined large color="#2e2e2e" @click="openMap()" class="detail-button">Map</v-btn>
      </v-card>
      <v-card flat outlined class="wedding-info-card">
        <div class="detail">Join Us</div>
        <div class="detail-text">We hope you can make it!</div>
        <v-btn outlined large color="#2e2e2e" to="/rsvp" class="detail-button">RSVP</v-btn>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    openMap() {
      window.open("https://goo.gl/maps/PW9aT47RPc2gPdhe9", "_blank");
    }
  },
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

.wedding-info-cards {
  flex-wrap: wrap;
  max-width: 75%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.wedding-info-card {
  width: 280px;
  height: 280px;
  padding: 16px;
  margin: 16px;
}

.detail {
  font-family: "Aesthete";
  font-size: 50px !important;
  overflow: unset !important;
  padding-bottom: 16px;
}

.detail-text {
  text-transform: uppercase;
}

.detail-button {
  margin: 24px 16px 16px 16px;
}
</style>
