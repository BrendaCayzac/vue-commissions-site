import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/commissions",
    name: "Commissions",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
