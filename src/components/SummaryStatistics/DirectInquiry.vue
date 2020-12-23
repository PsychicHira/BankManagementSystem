<template>
  <div class="DirectInquiry">
    <el-card class="box-card">
      <h3>定向查询</h3>
      <el-divider class="el-divider"></el-divider>
      <el-form ref="form" :model="form" label-width="100px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="查询机构">
              <el-input v-model="form.department"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="人员">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

           <el-col :span="6">
            <el-form-item label="人员级别">
              <el-select v-model="form.grade" placeholder="请选择" class="w100">
                <el-option label="所有" value="1"></el-option>
                <el-option label="主管及以下普通员工" value="2"></el-option>
                <el-option label="非主持工作的中层领导" value="3"></el-option>
                <el-option label="部门及分支机构负责人、主持工作人员" value="4"></el-option>
                <el-option label="复行级领导、行长助理、董事会秘书" value="5"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="开始时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.start" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="结束时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.end" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="请休假类别">
              <el-select v-model="form.askForLeave" placeholder="请选择" class="w100">
                <el-option label="所有" value="1"></el-option>
                <el-option label="年休（探亲)假" value="2"></el-option>
                <el-option label="病假" value="3"></el-option>
                <el-option label="婚假" value="4"></el-option>
                <el-option label="产假" value="5"></el-option>
                <el-option label="陪护假" value="6"></el-option>
                <el-option label="工伤假" value="7"></el-option>
                <el-option label="其他假" value="8"></el-option>
                <el-option label="事假" value="9"></el-option>
                <el-option label="丧假" value="0"></el-option>
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

        <el-table-column prop="id" label="姓名">
        </el-table-column>

        <el-table-column prop="title" label="起始日期">
        </el-table-column>

        <el-table-column prop="name" label="终止日期" width="180">
        </el-table-column>

        <el-table-column prop="date" label="天数" width="180">
        </el-table-column>

        <el-table-column prop="sponsor" label="类别" width="180">
        </el-table-column>

        <el-table-column prop="status" label="原因">
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

</style>