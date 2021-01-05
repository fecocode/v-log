import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ContentPostView from '../views/ContentPostView'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/content-post",
    name: "content-post",
    component: ContentPostView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
