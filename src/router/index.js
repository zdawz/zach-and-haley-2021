import Vue from "vue";
import VueRouter from "vue-router";
import GuestAccommodations from "../views/GuestAccommodations.vue";
import Home from "../views/Home.vue";
import OurStory from "../views/OurStory.vue";
import Photos from "../views/Photos.vue";
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
    path: "/photos",
    name: "Photos",
    component: Photos,
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
    path: "/guest-accommodations",
    name: "Guest Accommodations",
    component: GuestAccommodations,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
