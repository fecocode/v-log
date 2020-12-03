import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PhotoComponentView from "../views/PhotoComponentView"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/photo-component",
    name: "photo-component",
    component: PhotoComponentView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
