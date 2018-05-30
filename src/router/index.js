import Vue from 'vue'
import Router from 'vue-router'
import Push from '@/components/Push'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Push',
      component: Push
    }
  ]
})
