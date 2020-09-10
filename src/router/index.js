import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home/shouye"
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    redirect: "/home/shouye",
    children: [
      {
        // 首页
        path: "shouye",
        name: "shouye",
        component: () => import("@/views/container/content/shouye.vue")
      },
      {
        // 技术专区
        path: "techZones",
        name: "techZones",
        component: () => import("@/views/container/content/techZones.vue")
      },
      {
        //爱生活
        path: "live",
        name: "live",
        component: () => import("@/views/container/content/live.vue")
      },
      {
        // 留言板
        path: "message",
        name: "message",
        component: () => import("@/views/container/content/message.vue")
      },
      {
        // 赞助
        path: "sponsor",
        name: "sponsor",
        component: () => import("@/views/container/content/sponsor.vue")
      },
      {
        // 关于我
        path: "about",
        name: "about",
        component: () => import("@/views/container/content/about.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
