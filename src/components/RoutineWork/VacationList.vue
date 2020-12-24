<template>
  <div class="NewEvent">
    <el-card class="box-card">
      <h3>休假名单维护</h3>
      <el-divider class="el-divider"></el-divider>
      <el-form ref="form" :model="form" label-width="100px">
        <el-row>

          <el-col :span="6">
            <el-form-item label="姓名">
              <el-select v-model="form.region" placeholder="请选择" style="width:100%">
                <el-option label="业务支持" value="21312"></el-option>
                <el-option label="项目管理" value="123123"></el-option>
                <el-option label="会议餐饮审批" value="shang1hai"></el-option>
                <el-option label="会议审批" value="shan2ghai"></el-option>
                <el-option label="车辆申请" value="bei3jing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="success" @click="onSubmit">新增</el-button>
        </el-form-item>

      </el-form>

      <el-table :data="tableData" stripe style="width: 100%">

        <el-table-column prop="id" label="序号">
        </el-table-column>

        <el-table-column prop="name" label="姓名">
        </el-table-column>

        <el-table-column prop="depatment" label="单位" width="180">
        </el-table-column>

        <el-table-column prop="start" label="参加工作时间" width="180">
        </el-table-column>

        <el-table-column prop="successive" label="连续工龄" width="180">
        </el-table-column>

        <el-table-column prop="status" label="本年休假天数">
        </el-table-column>

        <el-table-column prop="status" label="本年已休天数">
        </el-table-column>

      </el-table>
    </el-card>
  </div>

</template>

<script>
export default {
  name: 'Todo',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          sponsor: 'tom',
          id: 2131231324255,
          title: '事件标题1',
          status: '等待接受'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          sponsor: 'tony',
          id: 56756765,
          title: '事件标题2',
          status: '等待接受'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          sponsor: 'john',
          id: 435435,
          title: '事件标题3',
          status: '等待接受'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          sponsor: 'mike',
          id: 567567567,
          title: '事件标题4',
          status: '等待接受'
        }
      ],
      form: []
    };
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.NewEvent {
  text-align: left !important;
}
.shortInput {
  width: 240px;
}
</style>