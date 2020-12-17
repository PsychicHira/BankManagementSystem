<template>
  <div class="home">
    <el-container class="container">
      <Aside></Aside>
      <el-container direction="vertical" class="HeaderAndMainAndFooter">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </el-container>
    </el-container>

  </div>
</template>
<script>
import Header from "@/views/Header.vue";
import Aside from "@/views/Aside.vue";
import Main from "@/views/Main.vue";
import Footer from "@/views/Footer.vue";
export default {
  name: "home",
  components: {
    Header,
    Aside,
    Main,
    Footer,
  },
  data() {
    return {
    };
  },
  methods: {
    //动态获取视口高度，让浏览器撑开
    getViewHeight() {
      //设置html高度
      let viewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      let html = document.getElementsByTagName("html");
      html[0].setAttribute("style", "height:" + viewHeight + "px");
      //设置.main高度
      //main盒子=htmlHeight-header的高度，否则下部超出
      let mainHeight = viewHeight - 70;
      let main = document.getElementsByClassName("main");
      main[0].setAttribute("style", "height:" + mainHeight + "px");
    }
  },
  mounted: function () {
    // this.getViewHeight();
  },
};
</script>

<style lang="scss">
@import "./assets/style/common.scss";


//Home
//等同于把.el-container的宽度设为100%，让子元素继承此父级的宽
.HeaderAndMainAndFooter{
    width: 100%;
}


//Todo
.Todo {
  //IE11下的表格样式错乱，ElementUI源码的table-layout统一设为none，下方宽度设为100%
  .el-table__header,
  .el-table__body {
    width: 100% !important;
    // table-layout: none;
  }
}


</style>