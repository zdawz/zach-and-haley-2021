import Vue from "vue";
import VueRouter from "vue-router";
const Details = () =>
  import(/* webpackChunkName: "Details" */ "../views/Details.vue");
const Home = () => import(/* webpackChunkName: "Home" */ "../views/Home.vue");
const OurStory = () =>
  import(/* webpackChunkName: "OurStory" */ "../views/OurStory.vue");
const Gallery = () =>
  import(/* webpackChunkName: "Gallery" */ "../views/Gallery.vue");
const Registry = () =>
  import(/* webpackChunkName: "Registry" */ "../views/Registry.vue");
const RSVP = () => import(/* webpackChunkName: "RSVP" */ "../views/RSVP.vue");
const Travel = () =>
  import(/* webpackChunkName: "Travel" */ "../views/Travel.vue");
const WeddingParty = () =>
  import(/* webpackChunkName: "WeddingParty" */ "../views/WeddingParty.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/our-story",
    name: "OurStory",
    component: OurStory,
  },
  {
    path: "/wedding-party",
    name: "WeddingParty",
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
  {
    path: "/travel",
    name: "Travel",
    component: Travel,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
