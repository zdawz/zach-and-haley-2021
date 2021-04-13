<template>
  <div>
    <h1>Details</h1>

    <v-col class="column-padding">
      <h3>Our wedding ceremony and reception will take place at</h3>
      <v-card flat class="venue-card">
        <div class="detail-subtitle">Olive Branch Farm</div>
        <div class="detail-subtitle">34589 470th Street</div>
        <div class="detail-subtitle">Kasota, MN 56050</div>
      </v-card>
      <h3>on Saturday, August 7, 2021 at 4:00 PM - 11:00 PM.</h3>
    </v-col>

    <v-card flat tile width="100%" color="#a4b48c" class="detailed-information-card">
      <v-layout class="detailed-information-layout">
        <v-col>
          <v-row class="detailed-information-row">
            <v-col class="detailed-information-card-title" :class="this.$vuetify.breakpoint.xsOnly ? 'title-small-display' : 'title-large-display'">
              Parking
            </v-col>
            <v-col class="detailed-information-text" :class="this.$vuetify.breakpoint.xsOnly ? 'text-small-display' : 'text-large-display'">
              There is parking available across the street from the barn.
              There will be a golf cart available as transportation between the two areas for those who need it.
            </v-col>
          </v-row>
          <v-row class="detailed-information-row">
            <v-col class="detailed-information-card-title" :class="this.$vuetify.breakpoint.xsOnly ? 'title-small-display' : 'title-large-display'">
              Attire
            </v-col>
            <v-col class="detailed-information-text" :class="this.$vuetify.breakpoint.xsOnly ? 'text-small-display' : 'text-large-display'">
              The dress code is semi-formal.
            </v-col>
          </v-row>
          <v-row class="detailed-information-row">
            <v-col class="detailed-information-card-title" :class="this.$vuetify.breakpoint.xsOnly ? 'title-small-display' : 'title-large-display'">
              Restrictions
            </v-col>
            <v-col class="detailed-information-text" :class="this.$vuetify.breakpoint.xsOnly ? 'text-small-display' : 'text-large-display'">
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
        class="greenery-banner-left hidden-sm-and-down"/>
      <v-col :class="this.$vuetify.breakpoint.mdAndUp ? 'px-0 py-0' : 'column-padding'">
        <v-img
          src="../assets/images/greeneryBannerTop.png"
          class="greenery-banner-horizontal hidden-md-and-up"/>
        <v-card flat outlined class="detail-card">
          <v-layout>
            <v-col :class="this.$vuetify.breakpoint.xsOnly ? '' : 'detail-title-column'">
              <div class="detail">Ceremony</div>
              <div class="detail-subtitle">Saturday, August 7, 2021</div>
              <div class="detail-subtitle">4:00 PM</div>
              <v-divider class="hidden-sm-and-up horizontal-divider" />
              <div class="hidden-sm-and-up detail-text">{{ ceremonyText1 }}</div>
              <div class="hidden-sm-and-up">-</div>
              <div class="hidden-sm-and-up detail-text">{{ ceremonyText2 }}</div>
            </v-col>
            <v-divider vertical class="hidden-xs-only" />
            <v-col class="detail-card-column-right hidden-xs-only">
              <div class="detail-text">{{ ceremonyText1 }}</div>
              <div>-</div>
              <div class="detail-text">{{ ceremonyText2 }}</div>
            </v-col>
          </v-layout>
        </v-card>
        <v-card flat outlined class="detail-card detail-card-margin">
          <v-layout>
            <v-col :class="this.$vuetify.breakpoint.xsOnly ? '' : 'detail-title-column'">
              <div class="detail">Happy Hour</div>
              <div class="detail-subtitle">Saturday, August 7, 2021</div>
              <div class="detail-subtitle">4:30 PM</div>
              <v-divider class="hidden-sm-and-up horizontal-divider" />
              <div class="hidden-sm-and-up detail-text">{{ happyHourText }}</div>
            </v-col>
            <v-divider vertical class="hidden-xs-only"></v-divider>
            <v-col class="detail-card-column-right hidden-xs-only">
              <div class="detail-text">{{ happyHourText }}</div>
            </v-col>
          </v-layout>
        </v-card>
        <v-card flat outlined class="detail-card detail-card-margin">
          <v-layout>
            <v-col :class="this.$vuetify.breakpoint.xsOnly ? '' : 'detail-title-column'">
              <div class="detail">Dinner & Dancing</div>
              <div class="detail-subtitle">Saturday, August 7, 2021</div>
              <div class="detail-subtitle">5:15 PM</div>
              <v-divider class="hidden-sm-and-up horizontal-divider" />
              <div class="hidden-sm-and-up detail-text">{{ receptionText1 }}</div>
              <div class="hidden-sm-and-up">-</div>
              <div class="hidden-sm-and-up detail-text">{{ receptionText2 }}</div>
            </v-col>
            <v-divider vertical class="hidden-xs-only"></v-divider>
            <v-col class="detail-card-column-right hidden-xs-only">
              <div class="detail-text">{{ receptionText1 }}</div>
              <div>-</div>
              <div class="detail-text">{{ receptionText2 }}</div>
            </v-col>
          </v-layout>
        </v-card>
        <v-img
          src="../assets/images/greeneryBannerBottom.png"
          class="greenery-banner-horizontal hidden-md-and-up"/>
      </v-col>
      <img
        src="../assets/images/greeneryBannerRight.png"
        class="greenery-banner-right hidden-sm-and-down"/>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      ceremonyText1: "The ceremony will be outside, weather pending.",
      ceremonyText2: "We will be having an unplugged ceremony. While we fully encourage everyone to bring their phones and cameras to document the day, we politely request that all devices be turned off during the ceremony.",
      happyHourText: "Drinks and yard games on the outdoor patio.",
      receptionText1: "The reception will be inside the barn.",
      receptionText2: "Dinner and dancing to follow our ceremony.",
    };
  },
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

.detailed-information-row {
  justify-content: center;
}

.detailed-information-card-title {
  font-family: "Aesthete";
  font-size: 50px !important;
  overflow: unset !important;
  padding-bottom: 0;
}

.title-small-display {
  text-align: center; 
  max-width: 100%;
  min-width: 100%;
}

.title-large-display {
  text-align: end;
  max-width: 160px;
  min-width: 160px;
}

.detailed-information-text {
  font-family: "OpenSerif";
  margin-top: auto; 
  margin-bottom: auto;
}

.text-small-display {
  text-align: center; 
}

.text-large-display {
  text-align: start; 
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
  margin-top: auto;
  margin-bottom: auto;
}

.greenery-banner-horizontal {
  max-width: 100%;
}

.greenery-banner-right {
  max-height: 664px; 
  padding-right: 32px;
  margin-top: auto;
  margin-bottom: auto;
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

.horizontal-divider {
  margin-top: 18px;
  margin-bottom: 18px;
}

.detail {
  font-family: "Aesthete";
  font-size: 50px !important;
  overflow: unset !important;
  padding-bottom: 16px;
}

.detail-card {
  min-height: 200px; 
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

.detail-card-column-right {
  margin-top: auto;
  margin-bottom: auto;
}

.detail-button {
  margin: 24px 16px 16px 16px;
}

.column-padding {
  padding: 0 24px 0 24px;
}
</style>
