import Vue from "vue";
import VueRouter from "vue-router";
//employee
import HomeEmployee from "../views/HomeEmployee";
import EvaluationResult from "../components/employee/EvaluationResult";
import Feedback from "../components/employee/Feedback";
import Home from "../components/employee/Home";
import Timeline from "../components/employee/Timeline";
// //manager
import HomeManager from "../views/HomeManager";
import Dashboard from "../components/manager/Dashboard";
import MemberReview from "../components/manager/MemberReview";
import Reports from "../components/manager/Reports";
import Timeline_Manager from "../components/manager/Timeline_Manager";
import MultiRaterReview from "../components/manager/MultiRaterReview";
// //admin
import HomeAdmin from "../views/HomeAdmin.vue";
import CreateTemplate from "../components/admin/CreateTemplate.vue";
import CreateEvaluation from "../components/admin/CreateEvaluation.vue";
import CreateCriteria from "../components/admin/CreateCriteria.vue";
import CreateRelationship from "../components/admin/CreateRelationship.vue";
//login
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/admin",
    name: "admin",
    component: HomeAdmin,
    props: true,
    children: [
      {
        path: "CreateEvaluation",
        component: CreateEvaluation
      },
      {
        path: "CreateRelationship",
        component: CreateRelationship
      },
      {
        path: "CreateCriteria",
        component: CreateCriteria
      },
      {
        path: "CreateTemplate",
        component: CreateTemplate
      }
    ]
  },
  {
    path: "/employee",
    name: "employee",
    component: HomeEmployee,
    props: true,
    children: [
      {
        path: "",
        component: Home
      },
      {
        path: "evaluation",
        component: EvaluationResult
      },
      {
        path: "timeline",
        component: Timeline
      },
      {
        name: "feedback",
        path: "feedback/assessor/:assessorId/evaluation-info/:evaluationInfoId",
        component: Feedback
      }
    ]
  },
  {
    path: "/manager",
    name: "manager",
    component: HomeManager,
    props: true,
    children: [
      {
        path: "",
        component: Dashboard
      },
      {
        path: "member-review",
        component: MemberReview
      },
      {
        path: "reports",
        component: Reports
      },
      {
        path: "timeline",
        component: Timeline_Manager
      },
      {
        path: "multi-rater-review",
        component: MultiRaterReview
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
