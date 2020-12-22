<template>
  <div class="ManualEntry">
    <el-card class="box-card">
      <h3>个人信息</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="100px">

        <el-row>
          <el-col :span="6">
            <el-form-item label="用户姓名">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系电话">
              <el-input v-model="form.title" placeholder="请输入联系电话"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系地址">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="Notes邮箱">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="用户登录名">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="用户密码">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="用户级别">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="办公电话">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="工号牌号码">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="固话虚拟号">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="所属机构">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="用户类型">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="用户职务">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="直属领导">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="B角人员">
              <el-select v-model="form.region" placeholder="请选择" style="width:100%">
                <el-option label="业务支持" value="21312"></el-option>
                <el-option label="项目管理" value="123123"></el-option>
                <el-option label="会议餐饮审批" value="shang1hai"></el-option>
                <el-option label="会议审批" value="shan2ghai"></el-option>
                <el-option label="车辆申请" value="bei3jing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="在岗标志">
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

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="IP地址">
              <el-input v-model="form.title" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <!-- <el-button>取消</el-button> -->
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