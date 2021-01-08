import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  // 登录
  {
    path: "/",
    name: "Login",
    component: () => import("../views/account/Login.vue")
  },
  // 注册
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/Register.vue")
  },
  // 忘记密码
  {
    path: "/forget",
    name: "Forget",
    component: () => import("../views/account/Forget.vue")
  },
  // 首页
  {
    path: "/index",
    name: "Index",
    component: () => import("../views/home")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
