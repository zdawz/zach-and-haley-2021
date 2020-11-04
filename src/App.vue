<template>
  <v-app>
    <v-app-bar
      app
      color="rgb(255, 255, 255, 0.8)" >
      <div class="d-flex align-center">
        <div class="names">Haley & Zach</div>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/">OUR WEDDING</router-link> |
      <router-link to="/our-story">OUR STORY</router-link> |
      <router-link to="/wedding-party">WEDDING PARTY</router-link> |
      <router-link to="/photos">PHOTOS</router-link> |
      <router-link to="/guest-accommodations">GUEST ACCOMMODATIONS</router-link> |
      <router-link to="/registry">REGISTRY</router-link> |
      <router-link to="/rsvp">RSVP</router-link>
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

.v-toolbar a {
  color: #2e2e2e !important;
  text-decoration: none;
}

.v-toolbar a.router-link-exact-active {
  color: #8f72a2 !important;
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
  font-size: 50px;
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
