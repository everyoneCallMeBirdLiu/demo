export default [
  {
    path: "/grant",
    name: "grant",
    component: () => import("../views/grant/index.vue"),
    children: [
      {
        path: "login",
        component: () => import("../views/grant/Login.vue")
      },
      {
        path: "register",
        component: () => import("../views/grant/Register.vue")
      }
    ]
  }
]