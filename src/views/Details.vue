<template>
  <div>
    <h1>Details</h1>

    <h3>Our wedding ceremony and reception will take place at</h3>
    <v-card flat class="venue-card">
      <div class="detail-subtitle">Olive Branch Farm</div>
      <div class="detail-subtitle">34589 470th Street</div>
      <div class="detail-subtitle">Kasota, MN 56050</div>
    </v-card>
    <h3>on Saturday, August 7, 2021 at 4:00 PM - 11:00 PM.</h3>

    <v-card flat tile width="100%" color="#a4b48c" class="detailed-information-card">
      <v-layout class="detailed-information-layout">
        <v-col>
          <v-row>
            <v-col class="detailed-information-card-title">Transportation</v-col>
            <v-col class="detailed-information-text">
              A shuttle will be available to transport guests from the hotel to the venue before the ceremony.
              There will also be a return shuttle at the end of the evening to transport guests back to the hotel.
            </v-col>
          </v-row>
          <v-row>
            <v-col class="detailed-information-card-title">Parking</v-col>
            <v-col class="detailed-information-text">
              There is parking available across the street from the barn.
              There will be a golf cart available as transportation to and from the ceremony/reception areas for those who need it.
            </v-col>
          </v-row>
          <v-row>
            <v-col class="detailed-information-card-title">Attire</v-col>
            <v-col class="detailed-information-text">
              The dress code is semi-formal.
            </v-col>
          </v-row>
          <v-row>
            <v-col class="detailed-information-card-title">Restrictions</v-col>
            <v-col class="detailed-information-text">
              Please note, there is no smoking allowed on the property of Olive Branch Farm.
            </v-col>
          </v-row>
        </v-col>
      </v-layout>
    </v-card>

    <h1>Schedule</h1>

    <v-layout>
      <img
        src="../assets/images/greeneryBannerLeft.png"
        class="greenery-banner-left"/>
      <v-col class="px-0 py-0">
        <v-card flat outlined class="detail-card">
          <v-layout>
            <v-col class="detail-title-column">
              <div class="detail">Ceremony</div>
              <div class="detail-subtitle">Saturday, August 7, 2021</div>
              <div class="detail-subtitle">4:00 PM</div>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <div class="detail-text">The ceremony will be outside, weather pending.</div>
              <div>-</div>
              <div class="detail-text">
                We will be having an unplugged ceremony. 
                While we fully encourage everyone to bring their phones and cameras to document the day,
                we politely request that all devices be turned off during the ceremony.
              </div>
            </v-col>
          </v-layout>
        </v-card>
        <v-card flat outlined class="detail-card detail-card-margin">
          <v-layout>
            <v-col class="detail-title-column">
              <div class="detail">Happy Hour</div>
              <div class="detail-subtitle">Saturday, August 7, 2021</div>
              <div class="detail-subtitle">6:00 PM</div>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <div class="detail-text">Drinks, appetizers and yard games.</div>
            </v-col>
          </v-layout>
        </v-card>
        <v-card flat outlined class="detail-card detail-card-margin">
          <v-layout>
            <v-col class="detail-title-column">
              <div class="detail">Dinner & Dancing</div>
              <div class="detail-subtitle">Saturday, August 7, 2021</div>
              <div class="detail-subtitle">6:30 PM</div>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <div class="detail-text">The reception will be inside.</div>
              <div>-</div>
              <div class="detail-text">Dinner, drinks and dancing to follow our ceremony.</div>
            </v-col>
          </v-layout>
        </v-card>
      </v-col>
      <img
        src="../assets/images/greeneryBannerRight.png"
        class="greenery-banner-right"/>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Details',
};
</script>

<style scoped>
.venue-card {
  padding: 16px;
}

.detailed-information-card {
  padding: 16px;
  margin: 32px 0;
}

.detailed-information-layout {
  max-width: 75%; 
  margin-left: auto; 
  margin-right: auto; 
  color: white;
}

.detailed-information-card-title {
  font-family: "Aesthete";
  font-size: 40px !important;
  overflow: unset !important;
  text-align: end;
  max-width: 175px;
}

.detailed-information-text {
  font-family: "OpenSerif";
  text-align: start; 
  margin-top: auto; 
  margin-bottom: auto;
}

.image-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  max-width: 1000px;
}

.greenery-banner-left {
  max-height: 664px; 
  padding-left: 32px;
}

.greenery-banner-right {
  max-height: 664px; 
  padding-right: 32px;
}

.info-cards {
  flex-wrap: wrap;
  max-width: 75%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.info-card {
  width: 280px;
  height: 280px;
  padding: 16px;
  margin: 32px 16px 0 16px;
  background-color: rgba(164, 180, 140, 0.5) !important;
}

.detail {
  font-family: "Aesthete";
  font-size: 50px !important;
  overflow: unset !important;
  padding-bottom: 16px;
}

.detail-card {
  height: 200px; 
  padding: 16px;
}

.detail-card-margin {
  margin-top: 32px; 
}

.detail-title-column {
  max-width: 300px;
}

.detail-subtitle {
  text-transform: uppercase;
}

.detail-text {
  font-family: "OpenSerif";
}

.detail-button {
  margin: 24px 16px 16px 16px;
}
</style>
