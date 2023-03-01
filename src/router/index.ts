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
    component: () => import("../views/CommissionsView.vue"),
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
    component: () => import("../views/ContactView.vue"),
    meta: { title: "Contact" },
  },
  {
    path: "/thanks",
    name: "success",
    component: () => import("../views/SubmissionSuccess.vue"),
    meta: { title: "success" },
  },
  {
    path: "/404",
    name: "fail",
    component: () => import("../views/SubmissionFail.vue"),
    meta: { title: "fail" },
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
