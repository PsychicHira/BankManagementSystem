<template>
  <div class="department">
    <el-card class="box-card">

      <h3>部门管理</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="部门编号" prop="number">
              <el-input type="text" v-model="form.number"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="部门名称" prop="name">
              <el-input type="text" v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit(form)">添加部门</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" stripe>
        <el-table-column prop="id" label="序号">
        </el-table-column>
        <el-table-column prop="number" label="部门编号">
        </el-table-column>
        <el-table-column prop="name" label="部门名称">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'department',
  data() {
    return {
      form: {
        name: '',
        number: ''
      },
      tableData: [

      ],
      rules: {
        name: [
          { required: true, message: '请输入部门名称', trigger: 'blur' },
        ],
        number: [
          { required: true, message: '请输入部门编号', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    onSubmit(form) {
      if (form.name == '' && form.number == '') {
        this.$message({
          message: '请输入必填项',
          type: 'warning'
        });
        return false;
      }
      this.$axios.post('department/add', form).then(res => {
        if (res.data == '0') {
          this.$message({
            message: '信息写入失败',
            type: 'warning'
          });
        } else {
          this.$message({
            message: '信息写入成功',
            type: 'success',
            duration: 5000
          });
          this.$axios.get('department/query').then(res => {
            console.log(res)
            this.tableData = res.data
          })
        }

      }).catch(function (error) {
        if (error.response) {
          console.log(error.response);
          console.log(error.response);
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    }
  },
      mounted: function () {
      this.$axios.get('department/query').then(res => {
        console.log(res)
        this.tableData = res.data
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response);
          console.log(error.response);
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    }
}
</script>

<style lang="scss" scoped>
</style>
