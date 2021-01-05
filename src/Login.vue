<template>
  <div class="login">
    <div class="bg"></div>
    <div class="logo">
      <div class="col">
        <img src="./assets/logoAlong.png" alt="">
        <h1>西藏银行 —— 行务综合服务平台</h1>
        <h2>བོད་ལྗོངས་དངུལ་ཁང། ཕྱོགས་བསྡུས་ཞབས་ཞུ་འི་སྟེགས་བུ།</h2>
      </div>
    </div>

    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <!-- <div class="title">登录</div> -->
      <el-form-item label="用户名" prop="userName">
        <el-input type="text" v-model="ruleForm.userName" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="ruleForm.passWord" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login(ruleForm)" class="button">登录</el-button>
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
    login(formName) {
      // console.log(formName)
      if (formName.userName != '' && formName.passWord != '') {
        // alert('发送登陆请求');
        // this.$router.push('/home')
        console.log(formName)

        localStorage.setItem('login',JSON.stringify(formName));
        
        this.$router.push('/home')

        // this.$router.replace('/home')
      } else
        alert('请输入账号密码');
      return false;
    }

  },
  beforeCreate() {
    // let login = document.getElementsByClassName('login')
    // let bd = login.parentNode
    // document.getElementsByTagName("body")[0].className = "red";
    // console.log(document.body)


    // html, body {
    //     width: 100%;
    //     height: 100%;
    //     overflow: hidden;
    //     margin: 0;
    //     padding: 0;
    // }
    // body{
    //   background-image: url('./assets/bdlg.jpg');
    //   background-repeat: no-repeat;
    //   background-size: 100%;
    // }


  },
  mounted:function(){
    this.$axios.get('/api').then(function(res){
      console.log(res.data)
    })

    this.$axios.post('/post').then(function(res){
      console.log(res.data)
    })
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