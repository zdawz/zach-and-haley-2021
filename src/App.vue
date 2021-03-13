<template>
  <v-app>
    <v-app-bar app flat color="rgb(255, 255, 255, 0.9)">
      <template v-slot:extension>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true" />
        <v-tabs class="hidden-sm-and-down">
          <v-tab v-for="(item, i) in items" :key="i" :to="item.route">{{
            item.title
          }}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="chooseNavigationItem(item)"
          >
            <v-list-item-content class="navigation-item">
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="white" class="py-3">
      <div class="footer">
        <v-row class="footer-row">
          <v-col class="footer-image">
            <img
              :src="require('./assets/images/blackGreeneryLeft.png')"
              height="32px"
            />
          </v-col>
          <v-col class="footer-text">
            <div class="footer-cursive-font">Z + H</div>
            <div class="footer-regular-font">08.07.21</div>
          </v-col>
          <v-col class="footer-image">
            <img
              :src="require('./assets/images/blackGreeneryRight.png')"
              height="32px"
            />
          </v-col>
        </v-row>
        <v-row class="footer-hashtag">#DawsonGetBetterThanThis</v-row>
        <v-row class="footer-message">Coded with love by Zach and Haley</v-row>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import router from "./router";
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Our Wedding",
          route: "/",
        },
        {
          title: "Our Story",
          route: "/our-story",
        },
        {
          title: "Wedding Party",
          route: "/wedding-party",
        },
        {
          title: "Gallery",
          route: "/gallery",
        },
        {
          title: "Details",
          route: "/details",
        },
        {
          title: "Travel",
          route: "/travel",
        },
        {
          title: "Registry",
          route: "/registry",
        },
        {
          title: "RSVP",
          route: "/rsvp",
        },
      ],
    };
  },
  methods: {
    chooseNavigationItem(item) {
      router.push({ path: item.route });
    },
  },
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
  margin-top: 16px;
  margin-bottom: 16px;
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

.navigation-item {
  color: #4b4b4b !important;
  text-transform: uppercase;
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
  src: local("Aesthete"), url("./fonts/Aesthete.ttf") format("truetype");
}

@font-face {
  font-family: "OpenSerif";
  src: local("OpenSerif"), url("./fonts/OpenSerif-Book.ttf") format("truetype");
}
</style>
