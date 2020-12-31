import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import HeroPostView from "../views/HeroPostView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/HeroPostView",
    name: "HeroPostView",
    component: HeroPostView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
