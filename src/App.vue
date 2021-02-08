<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="rgb(255, 255, 255, 0.9)">
      <template v-slot:extension>
        <v-tabs>
          <v-tab to="/">Our Wedding</v-tab>
          <v-tab to="/our-story">Our Story</v-tab>
          <v-tab to="/wedding-party">Wedding Party</v-tab>
          <v-tab to="/gallery">Gallery</v-tab>
          <v-tab to="/details">Details</v-tab>
          <v-tab to="/travel">Travel</v-tab>
          <v-tab to="/registry">Registry</v-tab>
          <v-tab to="/rsvp">RSVP</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="white" class="py-3">
      <div class="footer">
        <v-row class="footer-row">
          <v-col class="footer-image">
            <img :src="require('./assets/images/blackGreeneryLeft.png')" height="32px"/>
          </v-col>
          <v-col class="footer-text">
            <div class="footer-cursive-font">Z + H</div>
            <div class="footer-regular-font">08.07.21</div>
          </v-col>
          <v-col class="footer-image">
            <img :src="require('./assets/images/blackGreeneryRight.png')" height="32px"/>
          </v-col>
        </v-row>
        <v-row class="footer-hashtag">#DawsonGetBetterThanThis</v-row>
        <v-row class="footer-message">Coded with love by Zach and Haley</v-row>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: "AlegreyaSC-Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e2e2e;
}

.v-main {
  padding: 48px 0px 0px !important;
}

.v-app-bar {
  height: unset !important;
}

.v-toolbar__content {
  height: unset !important;
  padding: 0 !important;
}

.v-tabs-bar__content {
  color: #a4b48c !important;
  justify-content: center;
}

.v-tab {
  color: #4b4b4b !important;
}

.v-tab--active {
  color: #a4b48c !important;
}

h1 {
  font-family: "Aesthete";
  font-size: 80px;
  margin-block-start: 0;
  font-weight: normal;
  padding-top: 8px;
}

h2 {
  font-weight: normal;
  text-transform: uppercase;
}

h3 {
  font-family: "OpenSerif";
  font-weight: normal;
}

h4 {
  font-family: "OpenSerif";
  font-weight: normal;
  font-size: 14px;
}

.v-footer {
  margin-top: 32px;
}

.footer {
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
}

.footer-row {
  justify-content: center;
}

.footer-cursive-font {
  font-family: "Aesthete";
  color: #2e2e2e;
}

.footer-regular-font {
  font-family: "AlegreyaSC-Regular";
  color: #2e2e2e;
}

.footer-text {
  text-align: center;
  padding: 0 !important;
  max-width: 64px !important;
}

.footer-image {
  max-width: 48px !important;
  padding: 8px 0 !important;
}

.footer-message {
  font-size: 10px;
  text-transform: uppercase;
  justify-content: center;
}

.footer-hashtag {
  font-size: 14px;
  justify-content: center;
}

.hidden {
  display: none !important;
  visibility: hidden !important;
}

@font-face {
  font-family: "AlegreyaSC-Regular";
  src: local("AlegreyaSC-Regular"),
       url("./fonts/AlegreyaSC-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "AlegreyaSC-Italic";
  src: local("AlegreyaSC-Italic"),
       url("./fonts/AlegreyaSC-Italic.ttf") format("truetype");
}

@font-face {
  font-family: "Aesthete";
  src: local("Aesthete"),
       url("./fonts/Aesthete.ttf") format("truetype");
}

@font-face {
  font-family: "OpenSerif";
  src: local("OpenSerif"),
       url("./fonts/OpenSerif-Book.ttf") format("truetype");
}
</style>
