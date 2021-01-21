<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(item,index) in navList" :key="item.path" :to="{ path: item.path }">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'BreadCrumb',
  data() {
    return {
      navList: '',
    }
  },
  methods: {
    getRoute() {
      let matched = this.$route.matched.filter(item => item.name)
      // const first = matched[0];
      // if (first && first.name.trim().toLocaleLowerCase() !== 'home'.toLocaleLowerCase()) {  //$route.name当前路由名称；$route.redirectedFrom重定向来源的路由的名字
      //   matched = [{ path: '/home', meta: { title: 'home' } }].concat(matched)
      // }
      this.navList = matched
    }
  },
  watch: {
    //监听路由的数据变化
    $route() {
      this.getRoute()
    }
  },
  mounted: function () {
    this.getRoute()
  }

}
</script>

<style lang="scss" scoped>
.el-breadcrumb{
  margin-top: 50px;
}
</style>