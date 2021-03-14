<template>
  <div>
    <div class="image-and-text">
      <v-img src="../assets/images/HomePageBanner.jpeg" class="image-center" />
      <div class="image-text hidden-md-and-down">
        <h1>Zach & Haley</h1>
        <h2>August 7, 2021 ∙ Kasota, MN</h2>
        <h2>{{ getDayCountToWedding() }}</h2>
      </div>
    </div>

    <div class="hidden-lg-and-up small-title-padding title-area">
      <v-row class="title-row">
        <v-col class="title-image hidden-xs-only">
          <v-row class="title-image-row">
            <img
              :src="require('../assets/images/blackGreeneryLeft.png')"
              height="80px" />
          </v-row>
        </v-col>
        <v-col class="title-text">
          <h1>Zach & Haley</h1>
          <h2>August 7, 2021 ∙ Kasota, MN</h2>
          <h2>{{ getDayCountToWedding() }}</h2>
        </v-col>
        <v-col class="title-image hidden-xs-only">
          <v-row class="title-image-row">
            <img
              :src="require('../assets/images/blackGreeneryRight.png')"
              height="80px" />
          </v-row>
        </v-col>
      </v-row>
    </div>

    <h1 class="hidden-md-and-down small-title-padding">The Wedding</h1>

    <v-layout class="wedding-info-cards">
      <v-card flat outlined class="wedding-info-card">
        <div class="detail">When</div>
        <div class="detail-text">Saturday, August 7, 2021</div>
        <div class="detail-text">4:00 PM - 11:00 PM</div>
        <v-btn
          outlined
          large
          color="#2e2e2e"
          to="/details"
          class="detail-button">
          Details
        </v-btn>
      </v-card>
      <v-card flat outlined class="wedding-info-card">
        <div class="detail">Where</div>
        <div class="detail-text">Olive Branch Farm</div>
        <div class="detail-text">34589 470th Street</div>
        <div class="detail-text">Kasota, MN 56050</div>
        <v-btn
          outlined
          large
          color="#2e2e2e"
          @click="openMap()"
          class="detail-button">
          Map
        </v-btn>
      </v-card>
      <v-card flat outlined class="wedding-info-card">
        <div class="detail">Join Us</div>
        <div class="detail-text">We hope you can make it!</div>
        <v-btn outlined large color="#2e2e2e" to="/rsvp" class="detail-button">
          RSVP
        </v-btn>
      </v-card>
    </v-layout>

    <v-card flat tile width="100%" color="#a4b48c" class="our-story-card">
      <v-layout>
        <v-col class="our-story-card-divider hidden-sm-and-down">
          <v-divider color="white"></v-divider>
        </v-col>
        <v-col class="our-story-card-display">
          <div class="detail our-story-card-text">See how it all started</div>
          <v-btn
            outlined
            large
            color="white"
            to="/our-story"
            class="detail-button our-story-card-button">
            Our Story
          </v-btn>
        </v-col>
        <v-col class="our-story-card-divider hidden-sm-and-down">
          <v-divider color="white"></v-divider>
        </v-col>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    openMap() {
      window.open("https://goo.gl/maps/u7pZJGeKHarSC6YQ8", "_blank");
    },
    getDayCountToWedding() {
      const todayDate = new Date();
      const weddingDate = new Date("08/07/2021");
      const timeDifference = weddingDate.getTime() - todayDate.getTime();
      var days = parseInt(timeDifference / (1000 * 3600 * 24));

      if (days > 0) {
        return days == 1 ? days + " day to go" : days + " days to go";
      } else if (days == 0) {
        return "today";
      } else {
        days = Math.abs(days);
        return days == 1 ? days + " day ago" : days + " days ago";
      }
    },
  },
};
</script>

<style scoped>
.image-and-text {
  text-align: center;
  position: relative;
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
  margin: 0 16px 32px 16px;
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

.our-story-card {
  padding: 16px;
}

.our-story-card-display {
  max-width: 328px;
  margin-left: auto;
  margin-right: auto;
}

.our-story-card-text {
  color: white;
  justify-content: center;
}

.our-story-card-button {
  margin: 0;
}

.our-story-card-divider {
  margin-top: auto;
  margin-bottom: auto;
}

.small-title-padding {
  padding-top: 16px;
  padding-bottom: 24px;
}

.title-area {
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
}

.title-row {
  justify-content: center;
}

.title-text {
  text-align: center;
  padding: 0 !important;
  max-width: 320px !important;
}

.title-image {
  max-width: 83px !important;
  padding: 0 !important;
}

.title-image-row {
  padding-top: 30px !important;
  margin-right: 0;
  margin-left: 0;
  max-width: 83px !important;
}
</style>
