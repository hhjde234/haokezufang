import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/layout/home",
  },
  {
    path: "/layout",
    component: () => import("@/view/layout"),
    children: [
      {
        path: "/layout/home",
        component: () => import("@/view/home"),
      },
      {
        path: "/layout/my",
        component: () => import("@/view/my"),
      },
      {
        path: "/layout/info",
        component: () => import("@/view/info"),
      },
      { path: "/layout/lookroom", component: () => import("@/view/lookroom") },
    ],
  },
  {
    path: "/address",
    component: () => import("@/view/address"),
  },
  {
    path: "/dang",
    component: () => import("@/view/dangqian"),
  },
  {
    path: "/userlogin",
    component: () => import("@/view/UserLogin"),
  },
  {
    path: "/soucang",
    component: () => import("@/view/collection"),
  },
  {
    path: "/registered",
    component: () => import("@/view/registered"),
  },
  {
    path: "/rent",
    component: () => import("@/view/rent"),
  },
  { path: "/rent/add", component: () => import("@/view/add") },
  { path: "/deilt", component: () => import("@/view/deilt") },
];
const router = new VueRouter({
  routes,
});

export default router;
