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
        component: () => import("./dashboard.vue"),
      },
    ],
  },
];

export default routes;
