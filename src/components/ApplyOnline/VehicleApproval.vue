<template>
  <div class="VehicleApproval">
    <el-card class="box-card">
      <h3>车辆审批</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="80px">

        <el-row>
          <el-col :span="6">
            <el-form-item label="申请部门">
              <el-input v-model="form.department" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系人">
              <el-input v-model="form.name" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="form.phone" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="搭乘人数">
              <el-input v-model="form.num" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="始发地">
              <el-input v-model="form.startAddress" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="目的地">
              <el-input v-model="form.endAddress" placeholder=""></el-input>
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

        </el-row>

                <el-row>
          <el-col :span="6">
            <el-form-item label="车辆类型">
              <el-select v-model="form.typeVehicle" placeholder="请选择会议地点">
                <el-option label="20座大客" value="1"></el-option>
                <el-option label="5座轿车" value="2"></el-option>
                <el-option label="7座商务" value="3"></el-option>
                <el-option label="8座轿车" value="4"></el-option>
                <el-option label="8座越野" value="5"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="车牌号">
              <el-select v-model="form.carNumber" placeholder="请选择会议地点">
                <el-option label="暂无" value="1"></el-option>
                <el-option label="暂无" value="2"></el-option>
                <el-option label="暂无" value="3"></el-option>
                <el-option label="暂无" value="4"></el-option>
                <el-option label="暂无" value="5"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="司机">
              <el-select v-model="form.driver" placeholder="请选择">
                <el-option label="阿旺" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="审批人">
              <el-select v-model="form.approve" placeholder="请选择">
                <el-option label="刘书宇" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="用途说明">
            <el-input type="textarea" v-model="form.use" :rows="4"></el-input>
          </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'NewEvent',
  data() {
    return {
      form: {
        title: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      position: "right"
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