import Vue from "vue";
import VueRouter from "vue-router";
import Details from "../views/Details.vue";
import Home from "../views/Home.vue";
import OurStory from "../views/OurStory.vue";
import Gallery from "../views/Gallery.vue";
import Registry from "../views/Registry.vue";
import RSVP from "../views/RSVP";
import WeddingParty from "../views/WeddingParty.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/our-story",
    name: "Our Story",
    component: OurStory,
  },
  {
    path: "/wedding-party",
    name: "Wedding Party",
    component: WeddingParty,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/registry",
    name: "Registry",
    component: Registry,
  },
  {
    path: "/rsvp",
    name: "RSVP",
    component: RSVP,
  },
  {
    path: "/details",
    name: "Details",
    component: Details,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
