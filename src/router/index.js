import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TitleComponentView from "../views/TitleComponentView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/title-component",
    name: "title-component",
    component: TitleComponentView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
