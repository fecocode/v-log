import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AgrupadorView from "../views/AgrupadorView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/AgrupadorView",
    name: "AgrupadorView",
    component: AgrupadorView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
