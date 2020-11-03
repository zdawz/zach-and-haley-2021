<template>
  <div id="app">
    <div id="nav">
      <div class="names">Haley & Zach</div>
      <router-link to="/">OUR WEDDING</router-link> |
      <router-link to="/our-story">OUR STORY</router-link> |
      <router-link to="/wedding-party">WEDDING PARTY</router-link> |
      <router-link to="/photos">PHOTOS</router-link> |
      <router-link to="/guest-accommodations">GUEST ACCOMMODATIONS</router-link> |
      <router-link to="/registry">REGISTRY</router-link> |
      <router-link to="/rsvp">RSVP</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "AlegreyaSC-Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e2e2e;
}

#nav {
  padding: 30px;
}

#nav a {
  color: #2e2e2e;
  text-decoration: none;
  font-size: 16;
}

#nav a.router-link-exact-active {
  color: #8f72a2;
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
