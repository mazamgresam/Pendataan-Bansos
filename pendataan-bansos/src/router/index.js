import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("../views/Form.vue"),
  },
  {
    path: "/success",
    name: "Success",
    component: () => import("../views/Success.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
