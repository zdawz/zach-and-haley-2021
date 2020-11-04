<template>
  <v-app>
    <v-app-bar
      app
      color="rgb(255, 255, 255, 0.8)" >
      <v-toolbar-title class="names">Haley & Zach</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs>
          <v-tab to="/">Our Wedding</v-tab>
          <v-tab to="/our-story">Our Story</v-tab>
          <v-tab to="/wedding-party">Wedding Party</v-tab>
          <v-tab to="/photos">Photos</v-tab>
          <v-tab to="/guest-accommodations">Guest Accommodations</v-tab>
          <v-tab to="/registry">Registry</v-tab>
          <v-tab to="/rsvp">RSVP</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
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

.v-toolbar__content {
  justify-content: center;
}

.v-tabs-bar__content {
  color: #8f72a2 !important;
  justify-content: center;
}

.v-tab {
  letter-spacing: unset !important;
  color: #4b4b4b !important;
}

h1 {
  font-family: "Aesthete";
  font-size: 80px;
  margin-block-start: 0;
}

h2 {
  font-family: "AlegreyaSC-Regular";
  font-weight: normal;
}

.names {
  font-family: "Aesthete";
  font-size: 50px !important;
  overflow: unset !important;
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
</style>
