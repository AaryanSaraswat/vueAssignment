import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomePage.vue";

import GameWon from "@/components/Pages/GameWon.vue";

import NotFound from "../components/Pages/NotFound.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/gameOver",
    component: GameWon,
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

export default createRouter({
  history: createWebHistory(),
  routes: routes,
});
