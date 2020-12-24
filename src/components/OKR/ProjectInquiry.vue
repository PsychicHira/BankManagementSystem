<template>
  <div class="AgencyFundsInquiry">
    <el-card class="box-card">

      <h3>新项目查询</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="项目名称">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="状态">
              <el-select v-model="form.status" placeholder="请选择" class="w100">
                <el-option label="正常" value="1"></el-option>
                <el-option label="完结" value="2"></el-option>
                <el-option label="删除" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>


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
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>


      <el-table :data="tableData" stripe>
        <el-table-column prop="id" label="序号">
        </el-table-column>
        <el-table-column prop="date" label="项目名称">
        </el-table-column>
        <el-table-column prop="title" label="实施主体">
        </el-table-column>
        <el-table-column prop="name" label="产品">
        </el-table-column>
        <el-table-column prop="address" label="金额">
        </el-table-column>
        <el-table-column prop="address" label="项目经理">
        </el-table-column>
        <el-table-column prop="address" label="材料申报责任人">
        </el-table-column>
        <el-table-column prop="address" label="截至时间">
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
        name: '',
        phone: '',
        start: '',
        end: '',
        status: '',
      },
      tableData:{

      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.form);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
