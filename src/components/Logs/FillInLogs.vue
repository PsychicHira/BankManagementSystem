<template>
  <div class="FillInLogs">
    <el-card class="box-card">

      <h3>日志填写</h3>
      <el-divider class="el-divider"></el-divider>

      <el-calendar v-model="value">
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template slot="dateCell" slot-scope="{date, data}">
          <el-tooltip class="item" effect="dark" placement="center">
            <!-- <el-button>上边</el-button> -->

            <p @click="toDetail(data)">
              <!-- viewData是可视数据，如果有显示需求在日历上显示 -->
              <!-- {{ data.day.split('-').slice(1).join('-') }} {{ viewData(data.day) }} -->
              {{ data.day.split('-').slice(1).join('-') }}
            </p>
          </el-tooltip>
        </template>
      </el-calendar>
    </el-card>

  </div>

</template>

<script>
import {
  queryAffairMainClass as C_queryAffairMainClass,
  queryAffairMiddleClassByMainClassId as C_queryAffairMiddleClassByMainClassId,
  queryAffair as C_queryAffair,
  queryDepartment as C_queryDepartment,
  queryPersonnnelByDepartment as C_queryPersonnnelByDepartment,
  addLog as C_addLog,
  queryTodayLogs as C_queryTodayLogs
} from '../../common/methods.js'
export default {
  name: 'FillInSchedule',
  data() {
    return {
      value: new Date(),
    }

  },
  methods: {
    //点击日历日子，跳转到日志详情页
    toDetail: function (data) {
      // console.log(data)
      // this.centerDialogVisible = true
      this.$router.push('/Logs/FillInLogsDetail')
        
    },

    

  },
  mounted: function () {
    
  }
}
</script>
  
<style lang="scss" scoped>
.FillInLogs {
  .el-calendar-day {
    .item {
      height: 100%;
      text-align: center;
    }
  }
  //选中的日期颜色
  & >>> .is-selected {
    background-color: #f1fa7b !important;
  }

  p {
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
}
</style>