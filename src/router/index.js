import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import QuizPage from "../components/questions/QuizPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/quiz",
      name: "quiz",
      component: QuizPage,
    },
     
  ],
});

export default router;
