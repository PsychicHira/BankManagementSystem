import Vue from 'vue'
import Router from 'vue-router'
import Login from '../Login'
import Home from '../Home'
import index from '../index'
//MyWork
import Todo from '@/components/MyWork/Todo'
import NewEvent from '@/components/MyWork/NewEvent'
import ManualEntry from '@/components/MyWork/ManualEntry'
import Announce from '@/components/MyWork/Announce'
import Operations from '@/components/MyWork/Operations'
import PastEvents from '@/components/MyWork/PastEvents'
import DepartmentEvents from '@/components/MyWork/DepartmentEvents'

//Logs
import FillInLogs from '@/components/Logs/FillInLogs'
import LogsInquiry from '@/components/Logs/LogsInquiry'
import ProjectManagement from '@/components/Logs/ProjectManagement'
import WorkStatistics from '@/components/Logs/WorkStatistics'
import OrganizationLogsInquiry from '@/components/Logs/OrganizationLogsInquiry'
import LogsStatistics from '@/components/Logs/LogsStatistics'

//SammaryStatistics
import AnnouncementInquiry from '@/components/SummaryStatistics/AnnouncementInquiry'
import MyEvents from '@/components/SummaryStatistics/MyEvents'
import JurisdictionEvents from '@/components/SummaryStatistics/JurisdictionEvents'
import BankStatistics from '@/components/SummaryStatistics/BankStatistics'
import SchedulesInquiry from '@/components/SummaryStatistics/SchedulesInquiry'
import DirectInquiry from '@/components/SummaryStatistics/DirectInquiry'

//RoutineWork
import ScheduleManagement from '@/components/RoutineWork/ScheduleManagement'
import Dictionary from '@/components/RoutineWork/Dictionary'
import PersonalInfo from '@/components/RoutineWork/PersonalInfo'
import ChangePassword from '@/components/RoutineWork/ChangePassword'
import KnowledgeBase from '@/components/RoutineWork/KnowledgeBase'
import VacationList from '@/components/RoutineWork/VacationList'

//ApplyOnline
import BusinessTrip from '@/components/ApplyOnline/BusinessTrip'
import Training from '@/components/ApplyOnline/Training'
import Leave from '@/components/ApplyOnline/Leave'
import Examination from '@/components/ApplyOnline/Examination'
import ConferenceRoom from '@/components/ApplyOnline/ConferenceRoom'
import VehicleApproval from '@/components/ApplyOnline/VehicleApproval'

//OKR
import AgencyFundsProject from '@/components/OKR/AgencyFundsProject'
import AgencyFundsAccount from '@/components/OKR/AgencyFundsAccount'
import TransactionFlowing from '@/components/OKR/TransactionFlowing'
import AgencyFundsInquiry from '@/components/OKR/AgencyFundsInquiry'
import AgencyFundsSammary from '@/components/OKR/AgencyFundsSammary'

import ProjectEntry from '@/components/OKR/ProjectEntry'
import ProjectInquiry from '@/components/OKR/ProjectInquiry'

//Framework
import department from '@/components/Framework/department'



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
      path: '/index',
      name: 'index',
      component: Home,
      meta: { title: '我的主页' },
      children:
        [
          { path: '', name: 'index', component: index, meta: { title: '我的主页' } },
        ]
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
          { path: 'Todo', name: 'Todo', component: Todo, meta: { title: '待办事项' } },
          { path: 'NewEvent', name: 'NewEvent', component: NewEvent, meta: { title: '新建事件' } },
          { path: 'ManualEntry', name: 'ManualEntry', component: ManualEntry, meta: { title: '手工录入' } },
          { path: 'Announce', name: 'Announce', component: Announce, meta: { title: '公告发布' } },
          { path: 'Operations', name: 'Operations', component: Operations, meta: { title: '运维事件' } },
          { path: 'PastEvents', name: 'PastEvents', component: PastEvents, meta: { title: '往日事件' } },
          { path: 'DepartmentEvents', name: 'DepartmentEvents', component: DepartmentEvents, meta: { title: '本部待办' } },
        ]
    },

    //Logs
    {
      path: '/Logs',
      name: 'Logs',
      redirect: '/Logs/FillInLogs',
      component: Home,
      meta: { title: '计划日志' },
      children:
        [
          { path: 'FillInLogs', name: 'FillInLogs', component: FillInLogs, meta: { title: '日志填写' } },
          { path: 'LogsInquiry', name: 'LogsInquiry', component: LogsInquiry, meta: { title: '日志查询' } },
          { path: 'ProjectManagement', name: 'ProjectManagement', component: ProjectManagement, meta: { title: '事务分类维护' } },
          { path: 'WorkStatistics', name: 'WorkStatistics', component: WorkStatistics, meta: { title: '工作统计' } },
          { path: 'OrganizationLogsInquiry', name: 'OrganizationLogsInquiry', component: OrganizationLogsInquiry, meta: { title: '机构日志查询' } },
          { path: 'LogsStatistics', name: 'LogsStatistics', component: LogsStatistics, meta: { title: '日志统计' } },
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
      redirect: '/RoutineWork/Dictionary',
      component: Home,
      meta: { title: '日常维护' },
      children:
        [
          { path: 'Dictionary', name: 'Dictionary', component: Dictionary, meta: { title: '字典类别管理' } },
          { path: 'PersonalInfo', name: 'PersonalInfo', component: PersonalInfo, meta: { title: '个人信息' } },
          { path: 'ChangePassword', name: 'ChangePassword', component: ChangePassword, meta: { title: '修改密码' } },
          { path: 'ScheduleManagement', name: 'ScheduleManagement', component: ScheduleManagement, meta: { title: '排班管理' } },
          { path: 'KnowledgeBase', name: 'KnowledgeBase', component: KnowledgeBase, meta: { title: '知识库' } },
          { path: 'VacationList', name: 'VacationList', component: VacationList, meta: { title: '休假名单维护' } },
        ]
    },

    //ApplyOnline
    {
      path: '/ApplyOnline',
      name: 'ApplyOnline',
      redirect: '/ApplyOnline/BusinessTrip',
      component: Home,
      meta: { title: '在线申请' },
      children:
        [
          { path: 'BusinessTrip', name: 'BusinessTrip', component: BusinessTrip, meta: { title: '出差申请' } },
          { path: 'Training', name: 'Training', component: Training, meta: { title: '培训申请' } },
          { path: 'Leave', name: 'Leave', component: Leave, meta: { title: '请休假申请' } },
          { path: 'Examination', name: 'Examination', component: Examination, meta: { title: '测评考试项目' } },
          { path: 'ConferenceRoom', name: 'ConferenceRoom', component: ConferenceRoom, meta: { title: '会议室审批' } },
          { path: 'VehicleApproval', name: 'VehicleApproval', component: VehicleApproval, meta: { title: '车辆审批' } },
        ]
    },
    //OKR
    {
      path: '/OKR',
      name: 'OKR',
      redirect: '/OKR/AgencyFundsProject',
      component: Home,
      meta: { title: 'OKR管理' },
      children:
        [
          { path: 'AgencyFundsProject', name: 'AgencyFundsProject', component: AgencyFundsProject, meta: { title: '代理资金项目管理' } },
          { path: 'AgencyFundsAccount', name: 'AgencyFundsAccount', component: AgencyFundsAccount, meta: { title: '代理资金账户管理' } },
          { path: 'TransactionFlowing', name: 'TransactionFlowing', component: TransactionFlowing, meta: { title: '交易流水识别' } },
          { path: 'AgencyFundsInquiry', name: 'AgencyFundsInquiry', component: AgencyFundsInquiry, meta: { title: '代理资金明细查询' } },
          { path: 'AgencyFundsSammary', name: 'AgencyFundsSammary', component: AgencyFundsSammary, meta: { title: '国开资金汇总查询' } },
          { path: 'ProjectEntry', name: 'ProjectEntry', component: ProjectEntry, meta: { title: '新项目录入' } },
          { path: 'ProjectInquiry', name: 'ProjectInquiry', component: ProjectInquiry, meta: { title: '新项目查询' } },
        ]
    },
    //Framework
    {
      path: '/Framework',
      name: 'Framework',
      redirect: '/Framework/department',
      component: Home,
      meta: { title: '架构管理' },
      children:
        [
          { path: 'department', name: 'department', component: department, meta: { title: '部门管理' } },
        ]
    },
  ]
})
