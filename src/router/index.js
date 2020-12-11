import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import  LinkAutor from "../views/LinkAutor.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/link-autor",
    name: "link-autor",
    component: LinkAutor
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
