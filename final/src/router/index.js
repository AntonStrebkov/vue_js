import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../pages/MainPage.vue";
import ProjectComp from "../pages/ProjectComp.vue";
import ProjectDetails from "../pages/ProjectDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/project",
    name: "project",
    component: ProjectDetails,
  },
  {
    path: "/carousel",
    name: "carousel",
    component: ProjectComp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
