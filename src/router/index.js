import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TrangChu from '@/components/TrangChu'
import ChiTiet from '@/components/ChiTiet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TrangChu',
      component: TrangChu
    },
    {
      path: '/hello',
      name: 'Hello',
      component: TrangChu
    },
    {
      path: '/chitiet/:roomId',
      name: 'ChiTiet',
      component: ChiTiet
    }
  ]
})
