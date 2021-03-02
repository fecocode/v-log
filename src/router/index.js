import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PhotoComponentView from "../views/PhotoComponentView"
import AvatarUsuarioView from "../views/AvatarUsuarioView"

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
  },
  {
    path: "/avatar-usuario",
    name: "avatar-usuario",
    component: AvatarUsuarioView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
