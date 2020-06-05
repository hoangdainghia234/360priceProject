import Vue from "vue";
import VueRouter from "vue-router";
// employee
import HomeEmployee from "../views/HomeEmployee";
import EvaluationResult from "../components/employee/EvaluationResult";
import Feedback from "../components/employee/Feedback";
import Home from "../components/employee/Home";
import Timeline from "../components/employee/Timeline";
// manager
import HomeManager from "../views/HomeManager";
import DashboardManager from "../components/manager/DashboardManager";
import MemberReview from "../components/manager/MemberReview";
import Reports from "../components/manager/Reports";
import Timeline_Manager from "../components/manager/Timeline_Manager";
import MultiRaterReview from "../components/manager/MultiRaterReview";
// admin
import HomeAdmin from "../views/HomeAdmin";
import DashboardAdmin from "../components/admin/DashboardAdmin";
import CreateTemplate from "../components/admin/CreateTemplate";
import CreateEvaluation from "../components/admin/CreateEvaluation";
import CreateCriteria from "../components/admin/CreateCriteria";
//login
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/admin",
    name: "admin",
    component: HomeAdmin,
    meta: {
      requiresAuth: true
    },
    props: true,
    children: [
      {
        path: "",
        component: DashboardAdmin
      },
      {
        path: "CreateEvaluation",
        component: CreateEvaluation
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
    meta: {
      requiresAuth: true
    },
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
    meta: {
      requiresAuth: true
    },
    props: true,
    children: [
      {
        path: "",
        component: DashboardManager
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

const isLoggedIn = localStorage.getItem("isLoggedIn") || false;
// const position = localStorage.getItem("position");
console.log(isLoggedIn);
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next("/");
    } else {
      next("/employee");
    }
  } else {
    next();
  }
});

export default router;
