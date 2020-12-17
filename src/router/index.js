import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import InputComponentView from "../views/InputComponentView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/input-component",
    name: "input-component",
    component: InputComponentView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
