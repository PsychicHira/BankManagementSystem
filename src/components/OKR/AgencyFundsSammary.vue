<template>
  <div class="AgencyFundsSammary">
    <el-card class="box-card">

      <h3>国开资金汇总查询</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="项目">
              <el-select v-model="form.type" placeholder="请选择" class="w100">
                <el-option label="那曲项目类别" value="1"></el-option>
                <el-option label="经开项目1类别" value="2"></el-option>
                <el-option label="经开项目2类别" value="3"></el-option>
                <el-option label="固定资产" value="4"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="所在区域">
              <el-select v-model="form.address" placeholder="请选择" class="w100">
                <el-option label="拉萨" value="1"></el-option>
                <el-option label="林芝" value="2"></el-option>
                <el-option label="山南" value="3"></el-option>
                <el-option label="那区" value="4"></el-option>
                <el-option label="经开" value="5"></el-option>
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

        <el-row>
          <el-col :span="6">
            <el-form-item label="账号">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" stripe>
        <el-table-column prop="id" label="账户名称">
        </el-table-column>
        <el-table-column prop="date" label="工程名称">
        </el-table-column>
        <el-table-column prop="title" label="开户行">
        </el-table-column>
        <el-table-column prop="name" label="累计拨付金额">
        </el-table-column>
        <el-table-column prop="address" label="累计支付金额">
        </el-table-column>
        <el-table-column prop="address" label="上月资金余额">
        </el-table-column>
        <el-table-column prop="address" label="本月拨付资金">
        </el-table-column>
        <el-table-column prop="address" label="本月支付资金">
        </el-table-column>
        <el-table-column prop="address" label="月日均余额">
        </el-table-column>
        <el-table-column prop="address" label="所在区域">
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
      tableData: {

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
