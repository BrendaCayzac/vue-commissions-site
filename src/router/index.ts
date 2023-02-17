import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "home" },
  },
  {
    path: "/commissions",
    name: "commissions",
    component: () => import("../views/AboutView.vue"),
    meta: { title: "Commissions" },
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("../views/PortfolioView.vue"),
    meta: { title: "Portfolio" },
  },
  {
    path: "/contact",
    name: "contact",
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
