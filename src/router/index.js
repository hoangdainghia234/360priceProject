import Vue from "vue";
import VueRouter from "vue-router";
import createTemplate from "../views/createTemplate.vue";
import createEvaluation from "../views/createEvaluation.vue";
import createCriteria from "../views/createCriteria.vue";
import createRelationship from "../views/createRelationship.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/createTemplate",
    name: "createTemplate",
    component: createTemplate
  },
  {
    path: "/createEvaluation",
    name: "createEvaluation",
    component: createEvaluation
  },
  {
    path: "/createCriteria",
    name: "createCriteria",
    component: createCriteria
  },
  {
    path: "/createRelationship",
    name: "createRelationship",
    component: createRelationship
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
