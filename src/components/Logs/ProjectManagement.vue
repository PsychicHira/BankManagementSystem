<template>
  <div class="ProjectManagement">
    <el-card class="box-card">

      <h3>事务分类维护</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="120px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="请选择事物大类">
              <el-select v-model="form.b" placeholder="请选择" style="width:100%">
                <el-option label="1综合管理" value="213wer12"></el-option>
                <el-option label="2常规巡查" value="21ewrwe312"></el-option>
                <el-option label="3运行维护" value="21werwerwer312"></el-option>
                <el-option label="4变更投产（新系统/新功能/新设备）" value="21ys312"></el-option>
                <el-option label="5系统建设" value="213rr2"></el-option>
                <el-option label="6共享分类" value="2131tt2"></el-option>
                <el-option label="7科技共享" value="2t1312"></el-option>
                <el-option label="8管理共享" value="21ty312"></el-option>
                <el-option label="9客户经理条线" value="213y12"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="请选择事物中类">
              <el-select v-model="form.m" placeholder="请选择" style="width:100%">
                <el-option label="1综合管理" value="12asd1312"></el-option>
                <el-option label="2常规巡查" value="21asd3112"></el-option>
                <el-option label="3运行维护" value="21asdas3112"></el-option>
                <el-option label="4变更投产（新系统/新功能/新设备）" value="21131asdsa2"></el-option>
                <el-option label="5系统建设" value="2113asdasdas12"></el-option>
                <el-option label="6共享分类" value="2131asdas12"></el-option>
                <el-option label="7科技共享" value="2131asdasd12"></el-option>
                <el-option label="8管理共享" value="21311dsa2"></el-option>
                <el-option label="9客户经理条线" value="21asd312312"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <el-form-item label="事物编号">
              <el-input v-model="form.num"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        

        <el-row>
          <el-col :span="6">
            <el-form-item label="事物名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="事物要求">
              <el-input v-model="form.need"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <el-form-item label="审核标志">
              <el-select v-model="form.sign" placeholder="请选择" style="width:100%">
                <el-option label="不审核" value="21sdasd312"></el-option>
                <el-option label="审核" value="fdgfg123123"></el-option>
                <el-option label="无" value="shafgg1hai"></el-option>
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
        <el-table-column prop="id" label="事务编号">
        </el-table-column>
        <el-table-column prop="name" label="事物名称" width="180">
        </el-table-column>
        <el-table-column prop="content" label="事务类别">
        </el-table-column>
        <el-table-column prop="is" label="是否需要审核" width="180">
        </el-table-column>
        <el-table-column prop="require" label="事务要求">
        </el-table-column>
        <el-table-column prop="do" label="处理">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'NewEvent',
  data() {
    return {
      form: {
        b: '',
        m: '',
        name: '',
        num: '',
        sign: '',
        need: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.form);
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
