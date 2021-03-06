import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";

import Home from "./views/Home";
import Team from "./views/Team";
// import Services from "./views/Services";
// import Strategy from "./views/Strategy";
// import Consulting from "./views/Consulting";
// import Development from "./views/Development";
// import Training from "./views/Training";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/team",
    component: Team,
    name: "team",
  },
  // {
  //   path: "/services",
  //   component: Services,
  //   name: "services",
  // },
  // {
  //   path: "/services/strategy",
  //   component: Strategy,
  //   name: "strategy",
  // },
  // {
  //   path: "/services/consulting",
  //   component: Consulting,
  //   name: "consulting",
  // },
  // {
  //   path: "/services/development",
  //   component: Development,
  //   name: "development",
  // },
  // {
  //   path: "/services/training",
  //   component: Training,
  //   name: "training",
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});



new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
