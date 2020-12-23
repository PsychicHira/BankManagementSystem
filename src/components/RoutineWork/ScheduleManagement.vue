<template>
  <div class="scheduleManagement">
    <!-- 日历部分 -->
    <div class="div left">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-divider class="el-divider"></el-divider>
        <el-tab-pane class="active" label="部门值班管理" name="first">
          <!-- 日历 -->
          <!-- 部门值班管理 -->
          <el-calendar v-model="value">
            <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
            <template slot="dateCell" slot-scope="{date, data}">
              <el-tooltip class="item" effect="dark" :content="tips" placement="top">
                <!-- <el-button>上边</el-button> -->

                <p @click="getCurrentDate(data)">
                  <!-- viewData是可视数据，如果有显示需求在日历上显示 -->
                  <!-- {{ data.day.split('-').slice(1).join('-') }} {{ viewData(data.day) }} -->
                  {{ data.day.split('-').slice(1).join('-') }}
                </p>
              </el-tooltip>
            </template>
          </el-calendar>
        </el-tab-pane>
        <el-tab-pane label="运行值班管理" name="second">
          <!-- 运行值班管理 -->
          <el-calendar v-model="value">
            <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
            <template slot="dateCell" slot-scope="{date, data}">
              <el-tooltip class="item" effect="dark" :content="tips" placement="top">
                <!-- <el-button>上边</el-button> -->

                <p @click="getCurrentDate(data)">
                  <!-- viewData是可视数据，如果有显示需求在日历上显示 -->
                  <!-- {{ data.day.split('-').slice(1).join('-') }} {{ viewData(data.day) }} -->
                  {{ data.day.split('-').slice(1).join('-') }}
                </p>
              </el-tooltip>
            </template>
          </el-calendar>
        </el-tab-pane>
        <el-tab-pane label="运维值班管理" name="third">
          <!-- 运维值班管理 -->
          <el-calendar v-model="value">
            <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
            <template slot="dateCell" slot-scope="{date, data}">
              <el-tooltip class="item" effect="dark" :content="tips" placement="top">
                <!-- <el-button>上边</el-button> -->

                <p @click="getCurrentDate(data)">
                  <!-- viewData是可视数据，如果有显示需求在日历上显示 -->
                  <!-- {{ data.day.split('-').slice(1).join('-') }} {{ viewData(data.day) }} -->
                  {{ data.day.split('-').slice(1).join('-') }}
                </p>
              </el-tooltip>
            </template>
          </el-calendar>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 名单部分 -->
    <div class="div right">
      <el-tabs v-model="duty" @tab-click="">
        <el-divider class="el-divider"></el-divider>
        <!-- 新增人员输入框 -->
        <el-input size="mini" v-model="newName" placeholder="请输入姓名" class="input"></el-input>
        <el-button size="mini" type="primary" class="btn">添加人员</el-button>

        <el-tab-pane class="active" label="值班顺序表（男）" name="man">
          <el-table :data="man" style="width: 100%" height="464" max-height="464">
            <el-table-column fixed type="index" label="序号" width="150">
            </el-table-column>
            <el-table-column property="name" label="姓名">
            </el-table-column>
            <el-table-column label="操作" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="值班顺序表（女）" name="female">
          <el-table :data="female" style="width: 100%" height="464" max-height="464">
            <el-table-column fixed type="index" label="序号" width="150">
            </el-table-column>
            <el-table-column property="name" label="姓名">
            </el-table-column>
            <el-table-column label="操作" fixed="right">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 值班说明 -->
    <div class="div bottom">
      <h1>值班说明</h1>
      <el-divider class="el-divider"></el-divider>
      <span>1、值班方式：现场值班，日终完成后暂改电话值班</span><br>
      <span>2、值班事件：工作日8:30——次日8：30，.；周末白班8：30——19:00.夜班18:00——次日8：30</span><br>
      <span>3、值班工作主要内容</span><br>
      <span>A、若遇周末值班，负责监督机房专职值班人员工作纪律，机房环境安全</span><br>
      <span>B、若遇周末值班，三楼机房巡视次数不得低于3次（建议9:00、12:00、18:00等时间点)</span><br>
      <span>C、负责紧急事件现场沟通、协调、汇报等</span><br>
      <span>4、每月排班顺序按以上表顺序执行（若遇重大节假日另行报名值班）</span><br>
      <span>5、1-4号女生负责每周六白天值班、依次轮流</span><br>
    </div>

    <!-- 弹窗 -->
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="50%" center>
      <!-- <span>内容</span> -->
      <el-transfer v-model="arr1" :data="arr" :titles="['可选值班人员','当前值班人员']"></el-transfer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="transferConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ScheduleManagement',
  data() {
    return {
      activeName: 'first',
      duty: 'man',
      // value: "2020-12-11",
      value: new Date(),
      // data: [
      //   { date: "2020-12-10", "content": "吃饭" }
      // ]
      centerDialogVisible: false,
      newName: "",
      tips: '王小虎1，王小虎2，王小虎3',
      arr: [
        {
          key: 1,
          label: '王虎1'
        },
        {
          key: 2,
          label: '王虎2'
        }
      ],
      arr1: [],
      man: [
        {
          name: '王小虎1'
        },
        {
          name: '王小虎2'
        },
        {
          name: '王小虎3'
        },
        {
          name: '王小虎4'
        },
        {
          name: '王小虎1'
        },
        {
          name: '王小虎2',
        },
        {
          name: '王小虎3',
        },
        {
          name: '王小虎4',
        },
        {
          name: '王小虎1',
        },
        {
          name: '王小虎2',
        },
        {
          name: '王小虎3',
        },
        {
          name: '王小虎4',
        }
      ],
      female: [
        {
          name: '王小虎4',
        },
        {
          name: '王小虎4',
        },
        {
          name: '王小虎4',
        },
        {
          name: '王小虎4',
        },
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      if (tab.index == 0) {
        this.man = this.man
      }
      if (tab.index == 1) {
        this.man = []
      }
      if (tab.index == 2) {
        this.man = []
      }
    },
    //遍历数据显示在日历上
    // viewData(v) {
    //   // console.log(v)
    //   let len = this.data.length
    //   let res = ""
    //   for (let i = 0; i < len; i++) {
    //     if (this.data[i].date == v) {
    //       res = this.data[i].content
    //       break
    //     }
    //   }
    //   return res
    // },
    getCurrentDate(data) {
      console.log(data)
      console.log(data.day)
      this.centerDialogVisible = true
    },
    //编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    //删除
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

      console.log(index, row);
    },
    transferConfirm() {
      this.centerDialogVisible = false
      console.log(this.arr)
      console.log(this.arr1)
    }
  },
  mounted: function () {
    console.log(123)
  }
}
</script>
<style lang="scss" scoped>
.div {
  background-color: #fff;
  width: 49%;
  float: left;
  height: 100%;
  // box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
}
.left {
  height: 560px;
  overflow: hidden;
  p {
    height: 60px;
  }
}
.right {
  margin-left: 2%;
  height: 560px;
  // overflow: scroll;
  .input {
    width: 20%;
    position: absolute;
    left: 20px;
    top: 12px;
  }
  .btn {
    position: relative;
    left: -160px;
    top: 12px;
  }
}
.bottom {
  width: 100%;
  height: 175px;
  background-color: #fff;
  margin-top: 30px;
  text-align: left;
  padding: 0 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  .el-divider {
    margin: 5px 0;
  }
}
.el-transfer {
  width: 582px;
  margin: 0 auto;
}

.btn {
  display: inline;
}

// .scheduleManagement >>> .el-tabs__nav{
//     float: none;
// }

//scheduleManagement下的日历tab切换
.scheduleManagement {
  //标签居中，覆盖原样式
  & >>> .el-tabs__nav {
    float: none;
    text-align: center;
  }
  .el-container {
    width: 80%;
  }
  //让选中的标签下部蓝色居中，覆盖原样式
  & >>> .el-tabs__item {
    padding: 0 20px !important;
    font-size: 18px;
    font-weight: bold;
  }
  //让自带底部的选中标签无效，用重合背景色覆盖原样式，并把宽度变为1，否则会挤文字下方的border
  & >>> .el-tabs__active-bar {
    background-color: #e9eef3;
    width: 0px !important;
  }
  //鼠标选中的日期
  & >>> .is-selected {
    background-color: #f1fa7b !important;
  }
  //td高度
  & >>> .el-calendar-day {
    height: 60px;
    padding: 0;
  }
  & >>> .el-tabs__header {
    margin-bottom: 0;
  }
  //水平分割线样式
  & >>> .el-divider--horizontal {
    margin: 0;
  }
  .right {
    //横线下面
    .el-tabs__nav {
      margin-bottom: 15px;
    }
    .el-input {
      height: 53px !important;
    }
    .el-table {
      margin-top: 28px;
    }
  }
  .el-tabs__nav-wrap::after {
    z-index: 4;
    height: 0;
  }
}
</style>