<template>
  <div class="ChangePassword">
    <el-card class="box-card">
      <h3>密码修改</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="110px">

        <el-row>
          <el-col :span="6">
            <el-form-item label="用户姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="登录名">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="旧密码">
              <el-input v-model="form.oldPassword" placeholder="旧密码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="新密码">
              <el-input v-model="form.newPassword" placeholder="两次密码请输入一致"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="再次输入密码">
              <el-input v-model="form.newPasswordAgain" placeholder="两次密码请输入一致"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

         <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="密码问题">
              <el-input v-model="form.newPassword" placeholder="找回密码时的提示问题"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="密码答案">
              <el-input v-model="form.newPasswordAgain" placeholder="用于找回密码"></el-input>
            </el-form-item>
          </el-col>
        </el-row>




        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button>重置</el-button>
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
        name:'郭佳佳',
        account:'1009',
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
  }
}
</script>

<style lang="scss" scoped>

</style>