import Vue from "vue";
import VueRouter from "vue-router";
import AuthRoutes from "../modules/authentication/auth.routes";
import DashboardRoutes from "../modules/administrator/admin.routes";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "authentication/login",
  },
  ...AuthRoutes,
  ...DashboardRoutes,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
