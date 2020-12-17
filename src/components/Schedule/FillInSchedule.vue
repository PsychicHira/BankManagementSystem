<template>
  <div class="FillInSchedule">
    <el-card class="box-card">

      <h3>日志填写</h3>
      <el-divider class="el-divider"></el-divider>

      <el-calendar v-model="value">
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template slot="dateCell" slot-scope="{date, data}">
          <el-tooltip class="item" effect="dark" placement="center">
            <!-- <el-button>上边</el-button> -->

            <p @click="getCurrentDate(data)">
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
export default {
  name: 'FillInSchedule',
  data() {
    return {
      msg: 'FillInSchedule'
    }
  },
  methods: {

  }
}
</script>
  <style lang="scss" scoped>
</style>