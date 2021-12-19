import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/galerie",
    name: "Galerie",
    component: () => import("../views/Galerie.vue"),
  },
  {
    path: "/datenschutz",
    name: "Datenschutz",
    component: () => import("../views/Datenschutz.vue"),
  },
  {
    path: "/downloads",
    name: "Downloads",
    component: () => import("../views/Downloads.vue"),
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: () => import("../views/Impressum.vue"),
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: () => import("../views/Kontakt.vue"),
  },
  {
    path: "/mannschaften",
    name: "Mannschaften",
    component: () => import("../views/Mannschaften.vue"),
  },
  {
    path: "/training",
    name: "Training",
    component: () => import("../views/Training.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
