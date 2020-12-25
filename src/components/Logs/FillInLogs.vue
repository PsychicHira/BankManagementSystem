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

            <p @click="addLog(data)">
              <!-- viewData是可视数据，如果有显示需求在日历上显示 -->
              <!-- {{ data.day.split('-').slice(1).join('-') }} {{ viewData(data.day) }} -->
              {{ data.day.split('-').slice(1).join('-') }}
            </p>
          </el-tooltip>
        </template>
      </el-calendar>
    </el-card>

    <!-- 弹窗 -->
    <el-dialog title="录入工作日志" :visible.sync="centerDialogVisible" center>
      <el-form :model="form" label-width="100px">

        <el-row>
          <el-col :span="12">
            <el-form-item label="选择业务分类" :label-width="formLabelWidth">
              <el-input v-model="form.category" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="">
              <el-radio-group v-model="form.coordination">
                <el-radio label="无协同"></el-radio>
                <el-radio label="有协同"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="18">
            <el-form-item label="关键词" :label-width="formLabelWidth">
              <el-input v-model="form.words" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item>
              <el-checkbox-group v-model="form.SMS">
                <el-checkbox label="重点工作" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="预计完成时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="工作内容">
          <el-input type="textarea" v-model="form.content" :rows="4"></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="12">
            <el-form-item label="状况">
              <el-radio-group v-model="form.status">
                <el-radio label="未完成"></el-radio>
                <el-radio label="部分完成"></el-radio>
                <el-radio label="完成"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="完成情况">
          <el-input type="textarea" v-model="form.desc" :rows="4"></el-input>
        </el-form-item>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        <el-button @click="centerDialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: 'FillInSchedule',
  data() {
    return {
      msg: 'FillInSchedule',
      centerDialogVisible: false,
      form: {
        SMS: ''
      },
      value: new Date(),

    }
  },
  methods: {
    addLog: function (data) {
      console.log(data)
      this.centerDialogVisible = true
    },

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