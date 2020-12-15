import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TextAreaComponentView from "../views/TextAreaComponentView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/text-area-component",
    name: "TextArea",
    component: TextAreaComponentView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
