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

//Schedule
import FillInSchedule from '@/components/Schedule/FillInSchedule'
import LogsInquiry from '@/components/Schedule/LogsInquiry'
import ProjectManagement from '@/components/Schedule/ProjectManagement'
import WorkStatistics from '@/components/Schedule/WorkStatistics'
import OrganizationSchedulesInquiry from '@/components/Schedule/OrganizationSchedulesInquiry'
import SchedulesStatistics from '@/components/Schedule/SchedulesStatistics'

//SammaryStatistics
import AnnouncementInquiry from '@/components/SummaryStatistics/AnnouncementInquiry'
import MyEvents from '@/components/SummaryStatistics/MyEvents'
import JurisdictionEvents from '@/components/SummaryStatistics/JurisdictionEvents'
import BankStatistics from '@/components/SummaryStatistics/BankStatistics'
import SchedulesInquiry from '@/components/SummaryStatistics/SchedulesInquiry'
import DirectInquiry from '@/components/SummaryStatistics/DirectInquiry'

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
      redirect: '/MyWork/Todo',
      component: Home,
    },

    //MyWork
    {
      path: '/MyWork',
      name: 'MyWork',
      redirect: '/MyWork/Todo',
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

    //Schedule
    {
      path: '/Schedule',
      name: 'Schedule',
      redirect: '/Schedule/FillInSchedule',
      component: Home,
      meta: { title: '计划日志' },
      children:
        [
          //RoutineWork
          { path: 'FillInSchedule', name: 'FillInSchedule', component: FillInSchedule, meta: { title: '日志填写' } },
          { path: 'LogsInquiry', name: 'LogsInquiry', component: LogsInquiry, meta: { title: '日志查询' } },
          { path: 'ProjectManagement', name: 'ProjectManagement', component: ProjectManagement, meta: { title: '事务分类维护' } },
          { path: 'WorkStatistics', name: 'WorkStatistics', component: WorkStatistics, meta: { title: '工作统计' } },
          { path: 'OrganizationSchedulesInquiry', name: 'OrganizationSchedulesInquiry', component: OrganizationSchedulesInquiry, meta: { title: '机构日志查询' } },
          { path: 'SchedulesStatistics', name: 'SchedulesStatistics', component: SchedulesStatistics, meta: { title: '日志统计' } },
        ]
    },

    //SammaryStatistics
    {
      path: '/SammaryStatistics',
      name: 'SammaryStatistics',
      redirect: '/SammaryStatistics/AnnouncementInquiry',
      component: Home,
      meta: { title: '汇总统计' },
      children:
        [
          //RoutineWork
          { path: 'AnnouncementInquiry', name: 'AnnouncementInquiry', component: AnnouncementInquiry, meta: { title: '公告查询' } },
          { path: 'MyEvents', name: 'MyEvents', component: MyEvents, meta: { title: '我的事件' } },
          { path: 'JurisdictionEvents', name: 'JurisdictionEvents', component: JurisdictionEvents, meta: { title: '所辖事件' } },
          { path: 'BankStatistics', name: 'BankStatistics', component: BankStatistics, meta: { title: '本行统计' } },
          { path: 'SchedulesInquiry', name: 'SchedulesInquiry', component: SchedulesInquiry, meta: { title: '排班查询' } },
          { path: 'DirectInquiry', name: 'DirectInquiry', component: DirectInquiry, meta: { title: '定向查询' } },
        ]
    },


    //RoutineWork
    {
      path: '/RoutineWork',
      name: 'RoutineWork',
      redirect: '/RoutineWork/Todo',
      component: Home,
      meta: { title: '日常维护' },
      children:
        [
          //RoutineWork
          { path: 'ScheduleManagement', name: 'ScheduleManagement', component: ScheduleManagement, meta: { title: '排班管理' } },
        ]
    },




  ]
})
