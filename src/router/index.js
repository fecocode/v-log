import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LogoComponentView from "../views/LogoComponentView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/logo-component",
    name: "logo-component",
    component: LogoComponentView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
