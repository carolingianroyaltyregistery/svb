// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/components/Home.vue";
import Kai from "/src/components/lord_kai_christopher_bellina.vue";
import Shawn from "/src/components/lord_shawn_vincent_bellina.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "Home" },
  },
  {
    path: "/public/",
    name: "Home",
    component: Home,
  },
  {
    path: "/public>/:queryParams(.*)",
    name: "Result",
    component: Result,
    props: true,
  },
  {
    path: "/lord_kai_christopher_bellina",
    name: "lord_kai_christopher_bellina",
    component: Kai,
  },
  {
    path: "/lord_shawn_vincent_bellina",
    name: "lord_shawn_vincent_bellina",
    component: Shawn,
  },
  {
    path: "/:queryParams(.*)",
    name: "Result",
    component: Result,
    props: true,
  },
];

const router = createRouter({ history: createWebHistory('/public/'), routes });
export default router;
