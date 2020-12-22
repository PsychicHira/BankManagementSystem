<template>
  <div class="NewEvent">
    <el-card class="box-card">
      <h3>往日事件</h3>
      <el-divider class="el-divider"></el-divider>
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="创建人员">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="电话号码">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="开始时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="结束时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="状态">
              <el-select v-model="form.region" placeholder="请选择状态">
                <el-option label="所有" value="21312"></el-option>
                <el-option label="已完成" value="123123"></el-option>
                <el-option label="部分完成" value="shang1hai"></el-option>
                <el-option label="未完成" value="shan2ghai"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" stripe style="width: 100%">

        <el-table-column prop="id" label="ID">
        </el-table-column>

        <el-table-column prop="title" label="标题">
        </el-table-column>

        <el-table-column prop="name" label="当前环节" width="180">
        </el-table-column>

        <el-table-column prop="date" label="创建时间" width="180">
        </el-table-column>

        <el-table-column prop="sponsor" label="发起人" width="180">
        </el-table-column>

        <el-table-column prop="status" label="状态">
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
      form:[]
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