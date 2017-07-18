import Vue from 'vue'
import Router from 'vue-router'
import TrangChu from '@/components/TrangChu'
import ChiTiet from '@/components/ChiTiet'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'TrangChu',
      component: TrangChu
    },
   
    {
      path: '/:roomId',
      name: 'ChiTiet',
      component: ChiTiet
    }
  ]
})



