<template>
<div class="header-container">
  <el-container direction="vertical" >
    <el-header class="header">
      <div class="header-left">
        <h1>行务综合服务平台</h1>
        <BreadCrumb></BreadCrumb>
      </div>
      <div class="header-right">
        <i class="el-icon-user-solid"></i>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            郭佳佳（信息技术部)<a href="javascript:void(0)" class="el-icon-caret-bottom el-icon--right"></a>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
  </el-container>
</div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb.vue";

export default {
  name: "Header",
  components: {
    BreadCrumb
  },
  data() {
    return {

    };
  },
  methods: {
    //动态获取视口高度，让浏览器撑开
    // getViewWidth() {
    //   //设置h1Div宽度
    //   let viewWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    //   let h1Div = document.getElementsByClassName("h1Div");
    //   let h1DivWidth = viewWidth - 160;
    //   h1Div[0].setAttribute("style", "width:" + h1DivWidth + "px");
    // },
  },
  mounted: function () {
    // this.getViewWidth()
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  padding: 0;
  // background-color: #000;
  // color: #000;
  height: 70px !important;
  .header-left {
    // text-align: left;
    // position: relative;
    float: left;
    height: 70px;
    padding-left: 20px;
    h1{
      line-height: 50px;
    }
  }
  .header-right {
    position: relative;
    color: #fff;
    float: right;
    right: 50px;
    i {
      color: #000;
    }
  }
}
.header-container >>> .el-container {
  height:70px;
}

//改变 .el-dropdown 自带文字颜色
.el-dropdown {
  color: #000;
}
</style>