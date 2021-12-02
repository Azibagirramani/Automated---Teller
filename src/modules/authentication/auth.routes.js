/**
 * Authentication Routes
 */

import Login from "./Login";

const routes = [
  {
    path: "/authentication",
    component: Login,
    redirect: "/authentication/login",
    children: [
      {
        path: "login",
      },
    ],
  },
];

export default routes;
