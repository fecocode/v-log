import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Miniatura from "../views/MiniaturaPostView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/miniatura-post",
    name: "Miniaturapost",
    component: Miniatura
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
