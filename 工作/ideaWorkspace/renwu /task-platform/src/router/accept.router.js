export default [
  {
    path: "/accept",
    name: "accept",
    component: () => import("../views/accept/index.vue"),
    children: [
      {
        path: "/",
        name: "accept-index",
        component: () => import("../views/accept/Home.vue")
      },
      {
        path: "home",
        name: "accept-home",
        component: () => import("../views/accept/Home.vue")
      },
      {
        path: "order",
        name: "accept-order",
        component: () => import("../views/accept/Order.vue")
      },
      {
        path: "stat",
        name: "accept-stat",
        component: () => import("../views/accept/Stat.vue")
      },
      {
        path: "mycenter",
        name: "accept-mycenter",
        component: () => import("../views/accept/Mycenter.vue")
      },
      {
        path: "login",
        name: "accept-login",
        component: () => import("../views/accept/Login.vue")
      },
      {
        path: "register",
        name: "accept-register",
        component: () => import("../views/accept/Register.vue")
      }
    ]
  }
];


