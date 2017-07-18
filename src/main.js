// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import firebase from 'firebase'

import router from './router'

import VueFire from 'vuefire'

import App from './App'


Vue.use(VueFire)



router.beforeEach((to, from, next) => {
  
 window.scrollTo(0, 0);
 next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
