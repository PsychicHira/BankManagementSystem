<template>
  <div class="login">
    <div class="bg"></div>
    <div class="logo">
      <div class="col">
        <img src="./assets/logoAlong.png" alt="">
        <h1>西藏银行 —— 行务综合服务平台{{aaa}}</h1>
        <h2>བོད་ལྗོངས་དངུལ་ཁང། ཕྱོགས་བསྡུས་ཞབས་ཞུ་འི་སྟེགས་བུ།</h2>
      </div>
    </div>

    <el-form :model="loginInfo" status-icon :rules="rules" ref="loginInfo" class="demo-ruleForm">
      <!-- <div class="title">登录</div> -->
      <el-form-item label="用户名" prop="login_name">
        <el-input type="text" v-model="loginInfo.loginName" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginInfo.password" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login(loginInfo)" class="button">登录</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {

    return {
      // aaa:'aaa',
      loginInfo: {
        loginName: '',
        password: ''
      },
      rules: {
        login_name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    };
  },
  methods: {
    login(loginInfo) {
      if (loginInfo.loginName == '' && loginInfo.password == '') {
        alert('请输入账号密码');
        return false;
      } else {
        this.$axios.post('/login', loginInfo).then((res) => {
          if (res.data.code == 0) {
            alert('账号或密码错误');
          } else {
            console.log(res.data)
            this.$store.isLogin = 1 //登陆成功，isLogin状态存储1，用来为以后的页面判断做准备
            this.$store.name = res.data.data[0].name //存储姓名
            this.$store.phoneNumber = res.data.data[0].phoneNumber //存储手机号
            this.$store.department = res.data.data[0].department //存储所在部门
            this.$store.id = res.data.data[0].id //存储登录用户id
            this.$router.push('/index')
          }
        }).catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
      }
    }

  },
  beforeCreate() {

  },
  mounted: function () {
    // this.$axios.get('/api',).then(function(res){
    //   console.log(res.data)
    // })
    // this.$store.name='tom'

    //   this.$axios.post('/post').then(function(res){
    //     console.log(res.data)
    //   })
    // setTimeout(() => {
    //   console.log(34)
    //   this.aaa = 'bbb'
    // }, 2000);
  }
}
</script>

<style lang="scss" scoped>
.login {
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("./assets/bdlg.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: -1;
  }
  .title {
    // text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 30px;
  }
  .demo-ruleForm {
    width: 300px;
    margin-top: 8%;
    margin-left: 70%;
    padding: 20px;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 15px #909399;
    background-color: #fff;
  }
  .button {
    width: 100%;
  }
  .logo {
    height: 100px;
    width: 100%;
    background-color: #fff;
    top: 350px;
    // opacity:0.5;
    background: rgba(255, 0255, 255, 0.3);
    position: relative;
    .col {
      position: relative;
      width: 100%;
      height: 100px;
      img {
        // position: absolute;
        margin-top: 8px;
        margin-left: 10%;
        display: block;
        float: left;
        margin-right: 30px;
      }
      h1,
      h2 {
        display: inline-block;
        margin: 0;
        color: #fff;
      }
      h1 {
        position: absolute;
        top: 15px;
      }
      h2 {
        position: absolute;
        bottom: 15px;
        letter-spacing: 4px;
      }
    }
  }
}

// .html,
// .body {
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   margin: 0;
//   padding: 0;
// }
// .body {
//   background-image: url("./assets/bdlg.jpg");
//   background-repeat: no-repeat;
//   background-size: 100%;
// }
</style>