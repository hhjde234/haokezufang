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
      { path: "/layout/my", component: () => import("@/view/my") },
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
];

const router = new VueRouter({
  routes,
});

export default router;
