import Vue from "vue";
import VueRouter from "vue-router";
import EvaluationResult from "../components/employee/EvaluationResult";
import Feedback from "../components/employee/Feedback";
import Home from "../components/employee/Home";
import Timeline from "../components/employee/Timeline";
//manager
import Dashboard from "../components/manager/Dashboard";
import MemberReview from "../components/manager/MemberReview";
import Reports from "../components/manager/Reports";
import Timeline_Manager from "../components/manager/Timeline_Manager";
import MultiRaterReview from "../components/manager/MultiRaterReview";

import CreateTemplate from "../views/CreateTemplate.vue";
import CreateEvaluation from "../views/CreateEvaluation.vue";
import CreateCriteria from "../views/CreateCriteria.vue";
import CreateRelationship from "../views/CreateRelationship.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/employee/evaluation",
    name: "EvaluationResult",
    component: EvaluationResult
  },
  {
    path: "/employee/feedback",
    name: "Feedback",
    component: Feedback
  },
  {
    path: "/employee",
    name: "Home",
    component: Home
  },
  {
    path: "/employee/timeline",
    name: "Timeline",
    component: Timeline
  },

  //manager
  {
    path: "/manager",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/manager/member-review",
    name: "MemberReview",
    component: MemberReview
  },
  {
    path: "/manager/reports",
    name: "Reports",
    component: Reports
  },
  {
    path: "/manager/timeline",
    name: "Timeline_Manager",
    component: Timeline_Manager
  },
  {
    path: "/manager/multi-rater-review",
    name: "MultiRaterReview",
    component: MultiRaterReview
  },

  //adimn
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
