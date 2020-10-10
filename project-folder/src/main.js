import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import vuetify from "./plugins/vuetify";

import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Strategy from './views/Strategy';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/about',
    component: About,
    name: "about"
  },
  {
    path: '/services',
    component: Services,
    name: "services"
  },
  {
    path: '/services/strategy',
    component: Strategy,
    name: "strategy"
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
