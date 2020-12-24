<template>
  <div class="AgencyFundsInquiry">
    <el-card class="box-card">

      <h3>国开资金明细查询</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="账号">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="对方账号">
              <el-input v-model="form.reciprocal"></el-input>
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
        <el-table-column prop="id" label="交易日期">
        </el-table-column>
        <el-table-column prop="date" label="账号">
        </el-table-column>
        <el-table-column prop="title" label="账户名称">
        </el-table-column>
        <el-table-column prop="name" label="流水号">
        </el-table-column>
        <el-table-column prop="address" label="交易号">
        </el-table-column>
        <el-table-column prop="address" label="借方发生额">
        </el-table-column>
        <el-table-column prop="address" label="贷方发生额">
        </el-table-column>
        <el-table-column prop="address" label="交易备注">
        </el-table-column>
        <el-table-column prop="address" label="本次余额">
        </el-table-column>
        <el-table-column prop="address" label="交易机构">
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
