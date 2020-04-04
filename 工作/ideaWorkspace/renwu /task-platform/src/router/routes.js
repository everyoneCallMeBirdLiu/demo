import acceptRouter from "./accept.router";
import grantRouter from "./grant.router";

export default [
  {
    path: "/",
    name: "home",
    component: () => import("../views/index.vue")
  },
  ...acceptRouter,
  ...grantRouter
];

