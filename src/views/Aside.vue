<template>
  <el-aside class="Aside">
    <h1 class="h1">西藏银行</h1>
    <!-- <h1 class="h1">西藏银行</h1> -->
    <el-row class="H100 navKeepLeft">
      <el-col class="H100">
        <el-menu :unique-opened="true" :default-active="$route.path" router class="el-menu-vertical-demo H100" background-color="#324157" text-color="#fff" active-text-color="#ffd04b">
          <!-- 我的工作区 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-platform"></i>
              <span>我的工作区</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/Home/Todo">待办事件</el-menu-item>
              <el-menu-item index="/Home/NewEvent">新建事件</el-menu-item>
              <el-menu-item index="/Home/ManualEntry">手工录入</el-menu-item>
              <el-menu-item index="/Home/Announce">公告发布</el-menu-item>
              <el-menu-item index="/Home/Operations">运维事件</el-menu-item>
              <el-menu-item index="/Home/PastEvent">往日事件</el-menu-item>
              <el-menu-item index="/Home/DepartmentEvents">本部待办</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 计划日志 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-receiving"></i>
              <span>计划日志</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">日志填写</el-menu-item>
              <el-menu-item index="2-2">日志查询</el-menu-item>
              <el-menu-item index="2-3">事务分类维护</el-menu-item>
              <el-menu-item index="2-4">工作统计</el-menu-item>
              <el-menu-item index="2-5">机构日志查询</el-menu-item>
              <el-menu-item index="2-6">日志统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 汇总统计 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>汇总统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">公告查询</el-menu-item>
              <el-menu-item index="3-2">我的事件</el-menu-item>
              <el-menu-item index="3-3">所辖事件</el-menu-item>
              <el-menu-item index="3-4">本行统计</el-menu-item>
              <el-menu-item index="3-5">排班查询</el-menu-item>
              <el-menu-item index="3-6">定向查询</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 日常维护 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-time"></i>
              <span>日常维护</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">字典类别管理</el-menu-item>
              <el-menu-item index="4-2">个人信息</el-menu-item>
              <el-menu-item index="4-3">密码修改</el-menu-item>
              <el-menu-item index="/RoutineWork/ScheduleManagement">排班管理</el-menu-item>
              <el-menu-item index="4-5">知识库</el-menu-item>
              <el-menu-item index="4-6">休假名单维护</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 在线申请 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-promotion"></i>
              <span>在线申请</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">出差申请</el-menu-item>
              <el-menu-item index="5-2">请休假申请</el-menu-item>
              <el-menu-item index="5-3">测评考试项目</el-menu-item>
              <el-menu-item index="5-4">会议室审批</el-menu-item>
              <el-menu-item index="5-5">车辆审批</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- OKR管理 -->
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-money"></i>
              <span>OKR管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">代理资金项目管理</el-menu-item>
              <el-menu-item index="6-2">项目管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
export default {
  name: "Aside",
  components: {},
  data() {
    return {
      msg: "Aside",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/style/common.scss";

.H100 {
  height: $height100;
}
.h1 {
  width: 180px;
  line-height: 70px;
  position: relative;
  color: #fff;
  float: left;
  z-index: 1;
}
.navKeepLeft {
  text-align: left;
}
//这是DIV中的ul
.el-menu {
  padding-top: 70px;
  margin-top:-70px;
  // z-index: 0;
}
//让二级菜单和一级菜单文字左侧对齐
.el-menu-item {
  padding-left: 54px !important;
}
//默认aside宽度是200
.Aside {
  width: 180px !important;
  overflow: hidden;
  // margin-top: 70px;
}
//去除导航title凸出侧边栏
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
</style>