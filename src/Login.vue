<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <div class="title">行务综合服务平台</div>
      <el-form-item label="用户名" prop="userName">
        <el-input type="text" v-model="ruleForm.userName" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="ruleForm.passWord" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleForm)" class="button">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {

    return {
      ruleForm: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      // console.log(formName)
      if (formName.userName != '' && formName.passWord != '') {
        // alert('发送登陆请求');
        this.$router.push('/home')
      } else {
        alert('请输入账号密码');
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 30px;
}
.demo-ruleForm {
  width: 500px;
  margin: 200px auto 0;
  padding: 20px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
.button {
  width: 100%;
}
</style>