import Vue from "vue";
import VueRouter from "vue-router";

// employee
import HomeEmployee from "../views/HomeEmployee";
import EvaluationResult from "../components/employee/EvaluationResult";
import Feedback from "../components/employee/Feedback";
import Home from "../components/employee/Home";

// manager
import HomeManager from "../views/HomeManager";
import DashboardManager from "../components/manager/DashboardManager";
import MemberReview from "../components/manager/MemberReview";

import Timeline_Manager from "../components/manager/Timeline_Manager";

// admin
import HomeAdmin from "../views/HomeAdmin";
import DashboardAdmin from "../components/admin/DashboardAdmin";
import CreateTemplate from "../components/admin/CreateTemplate";
import CreateEvaluation from "../components/admin/CreateEvaluation";
import CreateCriteria from "../components/admin/CreateCriteria";

// login
import Login from "../views/Login";

// logout
import Logout from "../views/Logout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/admin",
    name: "admin",
    component: HomeAdmin,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "",
        component: DashboardAdmin
      },
      {
        path: "create-evaluation",
        component: CreateEvaluation
      },
      {
        path: "create-criteria",
        component: CreateCriteria
      },
      {
        path: "create-template",
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
        path: "timeline",
        component: Timeline_Manager
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

let isLoggedIn = localStorage.getItem("isLoggedIn") || false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    isLoggedIn = localStorage.getItem("isLoggedIn") || false;
    if (!isLoggedIn) {
      next({
        name: "login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
