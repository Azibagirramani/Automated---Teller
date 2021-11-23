import Index from "./index.vue";

const routes = [
  {
    path: "/portal",
    component: Index,
    meta: {
      requiresAuth: false,
      title: "Administrator",
    },
    children: [
      {
        path: "",
        name: "Overview",
        component: () => import("./admin-pages/dashboard.vue"),
      },
      {
        path: "data-sync",
        name: "Data Sync",
        component: () => import("./admin-pages/sync.vue"),
      },
    ],
  },
];

export default routes;
