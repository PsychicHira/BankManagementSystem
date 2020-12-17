import Vue from 'vue'
import Router from 'vue-router'
import Login from '../Login'
import Home from '../Home'
//MyWork
import Todo from '@/components/MyWork/Todo'
import NewEvent from '@/components/MyWork/NewEvent'
import ManualEntry from '@/components/MyWork/ManualEntry'
import Announce from '@/components/MyWork/Announce'
import Operations from '@/components/MyWork/Operations'
import PastEvent from '@/components/MyWork/PastEvent'
import DepartmentEvents from '@/components/MyWork/DepartmentEvents'

//RoutineWork
import ScheduleManagement from '@/components/RoutineWork/ScheduleManagement'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login',
      component: Login,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Home',
      name: 'Home',
      redirect: '/Home/Todo',
      component: Home,
      meta: { title: '我的工作区' },
      children:
        [
          //MyWork
          { path: 'Todo', name: 'Todo', component: Todo, meta: { title: '待办事项' } },
          { path: 'NewEvent', name: 'NewEvent', component: NewEvent, meta: { title: '新建事件' } },
          { path: 'ManualEntry', name: 'ManualEntry', component: ManualEntry, meta: { title: '手工录入' } },
          { path: 'Announce', name: 'Announce', component: Announce, meta: { title: '公告发布' } },
          { path: 'Operations', name: 'Operations', component: Operations, meta: { title: '运维事件' } },
          { path: 'PastEvent', name: 'PastEvent', component: PastEvent, meta: { title: '往日事件' } },
          { path: 'DepartmentEvents', name: 'DepartmentEvents', component: DepartmentEvents, meta: { title: '本部待办' } },
        ]
    },
    {
      path: '/RoutineWork',
      name: 'RoutineWork',
      redirect: '/RoutineWork/Todo',
      component: Home,
      meta: { title: '日常维护' },
      children:
        [
          //RoutineWork
          { path: 'ScheduleManagement', name: 'ScheduleManagement', component: ScheduleManagement , meta: { title: '排班管理' }},
        ]
    },




  ]
})
