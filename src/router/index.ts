import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { title: "Home" },
  },
  {
    path: "/commissions",
    name: "Commissions",
    component: () => import("../views/AboutView.vue"),
    meta: { title: "Commissions" },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../views/AboutView.vue"),
    meta: { title: "Portfolio" },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/AboutView.vue"),
    meta: { title: "Contact" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  document.title += " - " + to.meta.title;
});

export default router;
