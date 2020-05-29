import Vue from 'vue';
import VueRouter from 'vue-router';

import LandingAuth from '../views/LandingAuth';
import Timeline from '../views/Timeline'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
      path: '/',
      name: 'LandingAuth',
      component: LandingAuth
    },
    {
      path: '/home',
      name: 'Timeline',
      component: Timeline
    }
  ]
});

export default router;