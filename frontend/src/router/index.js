import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CourseItem from '@/components/CourseItem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/course-item',
      name: 'CourseItem',
      component: CourseItem
    }
  ]
})
