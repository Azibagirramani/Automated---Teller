import Index from "./index.vue";

import store from "../../store/index";

const routes = [
  {
    path: "/portal",
    component: Index,
    meta: {
      requiresAuth: true,
      title: "Administrator",
    },
    children: [
      {
        path: "",
        name: "Overview",
        component: () => import("./admin-pages/dashboard.vue"),
      },
      {
        path: "customers",
        name: "customers",
        component: () => import("./admin-pages/customers.vue"),
      },
      {
        path: "data-sync",
        name: "Data Syncronization",
        component: () => import("./admin-pages/sync.vue"),
      },
    ],

    beforeEnter: (to, from, next) => {
      if (to.meta.requiresAuth) {
        if (store.getters.isAuth) {
          next();
        } else {
          next({
            path: "/authentication/login",
            query: { redirect: to.fullPath },
          });
        }
        console.log(to, from)
      } else {
        next();
      }
    },
  },
];

export default routes;
