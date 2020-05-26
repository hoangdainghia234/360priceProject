import Vue from "vue";
import VueRouter from "vue-router";
import CreateTemplate from "../views/CreateTemplate.vue";
import CreateEvaluation from "../views/CreateEvaluation.vue";
import CreateCriteria from "../views/CreateCriteria.vue";
import CreateRelationship from "../views/CreateRelationship.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/CreateTemplate",
    name: "CreateTemplate",
    component: CreateTemplate
  },
  {
    path: "/CreateEvaluation",
    name: "CreateEvaluation",
    component: CreateEvaluation
  },
  {
    path: "/CreateCriteria",
    name: "CreateCriteria",
    component: CreateCriteria
  },
  {
    path: "/CreateRelationship",
    name: "CreateRelationship",
    component: CreateRelationship
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
