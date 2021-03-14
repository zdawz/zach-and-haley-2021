<template>
  <div>
    <h1>Travel</h1>

    <v-col class="column-padding">
      <h3>We are so excited to celebrate with you!</h3>
      <h3>Best Western Plus Saint Peter is our recommendation for your stay near Kasota, MN.</h3>
    </v-col>
    
    <img
      src="../assets/images/travel/BestWesternPlusStPeter.jpg"
      class="image-center travel-image"/>

    <v-card flat>
      <div class="travel-subtitle">Best Western Plus Saint Peter</div>
      <div class="travel-subtitle">1301 Old Minnesota Avenue, St Peter, MN 56082</div>
      <div class="travel-subtitle">507-519-1234</div>
    </v-card>
    <div class="travel-button">
      <v-btn outlined large color="#2e2e2e" @click="openHotelWebsite()">Website</v-btn>
    </div>
    <div class="travel-button">
      <v-btn outlined large color="#2e2e2e" @click="openDirections()">Directions from Hotel to Venue</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Travel',
  methods: {
    openDirections() {
      window.open("https://goo.gl/maps/SnBVRjnBY9jXEHaVA", "_blank");
    },
    openHotelWebsite() {
      window.open("https://www.bestwestern.com/en_US/book/hotel-rooms.24147.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:24147", "_blank");
    }
  },
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
}
</style>
