/**
 * Authentication Routes
 */

import Login from "./Login";

const routes = [
  {
    path: "/authentication",
    component: Login,
    children: [
      {
        path: "login",
      },
    ],
  },
];

export default routes;
