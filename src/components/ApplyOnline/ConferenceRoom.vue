<template>
  <div class="ManualEntry">
    <el-card class="box-card">
      <h3>会议室审批</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="80px">

        <el-row>
          <el-col :span="6">
            <el-form-item label="主板部门">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系人">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="短号">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            </el-form-item>
            <el-form-item label="会议名称">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="会议人数">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="会议类型">
              <el-radio-group v-model="form.resource">
                <el-radio label="培训"></el-radio>
                <el-radio label="会议"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="会议地点">
              <el-select v-model="form.region" placeholder="请选择会议地点">
                <el-option label="业务支持" value="21312"></el-option>
                <el-option label="项目管理" value="123123"></el-option>
                <el-option label="会议餐饮审批" value="shang1hai"></el-option>
                <el-option label="会议审批" value="shan2ghai"></el-option>
                <el-option label="车辆申请" value="bei3jing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="座签需求">
              <el-input v-model="form.title" placeholder=""></el-input>
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

        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
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

    },

    //文件上传
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>

<style lang="scss" scoped>
.ManualEntry {
  text-align: left !important;
}
.shortInput {
  width: 240px;
}
</style>