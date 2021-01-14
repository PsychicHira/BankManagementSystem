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
            <el-form-item label="部门名称" prop="departmentName">
              <el-input type="text" v-model="form.departmentName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="addDepartment('form')">添加部门</el-button>
          <el-button @click="clear()">重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" stripe>
        <el-table-column label="序号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
          </template>
        </el-table-column>

        <el-table-column label="部门编号" prop="number">
        </el-table-column>

        <el-table-column label="部门名称" prop="departmentName">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="editDepartment(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="deleteDepartment(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </el-card>

    <!-- 弹窗 -->
    <el-dialog title="修改部门名称" :visible.sync="dialogVisible" center>
      <el-form :model="presentForm" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="部门编号">
              <el-input v-model="presentForm.number" autocomplete="on"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="部门名称">
              <el-input v-model="presentForm.departmentName" autocomplete="on"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="updata">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import {}
export default {
  name: 'department',
  data() {
    return {
      form: {
        departmentName: '',
        number: ''
      },
      //编辑和删除功能，当前选择的数据（新数据）
      presentForm: {
        departmentName: '',
        number: ''
      },
      //更新数据功能——要更新的数据（原数据）
      updataForm: {
        departmentName: '',
        number: ''
      },
      tableData: [],
      rules: {
        departmentName: [
          { required: true, message: '请输入部门名称', trigger: 'blur' },
        ],
        number: [
          { required: true, message: '请输入部门编号', trigger: 'blur' },
        ]
      },
      //弹窗
      dialogVisible: false,
    }
  },
  methods: {

    //添加部门
    addDepartment(form) {
      //设置一个变量，用来终止提交，不然下面一个验证函数return无效，只是终止它自己，不终止这个提交功能
      //1表示继续，0表示终止
      let go = 1
      //验证必填项是否填了，没填就弹出红色提醒
      this.$refs[form].validate((valid) => {
        if (valid) {
          // alert('submit!');
        } else {
          console.log('error submit!!');
          go = 0
        }
      });
      if (go == 0) return
      if (this.form.departmentName == '' || this.form.number == '') {
        this.$message({
          message: '请输入必填项',
          type: 'warning'
        });
        return
      }
      console.log(111111111111111111111111111111111)
      console.log(this.form)
      //发送请求——增加部门
      this.$axios.post('department/add', this.form).then(res => {
        console.log(res)
        console.log(22222)

        if (res.data.code == 0) {
          console.log(res.data.message)
          this.$message({
            message: '数据库请求失败',
            type: 'error',
            duration: 3000
          })
        } else {
          this.$message({
            message: '信息写入成功',
            type: 'success',
            duration: 3000
          });
          //重新查询部门数据
          this.queryDepartment()
        }
      }).catch(function (error) {
        this.$message({
          message: '请求发送失败',
          type: 'error',
          duration: 3000
        });
        console.log(error);
      });
    },


    //编辑
    editDepartment(index, row) {
      // console.log(index, row);
      //当前的数据（新数据）
      this.presentForm.departmentName = row.departmentName
      this.presentForm.number = row.number
      //需要更新的数据（原数据）
      this.updataForm.departmentName = row.departmentName
      this.updataForm.number = row.number
      this.dialogVisible = true
    },


    //删除
    deleteDepartment(index, row) {
      console.log(index, row);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.presentForm.departmentName = row.departmentName
        this.presentForm.number = row.number
        //发送请求——删除部门
        this.$axios.post('department/delet', this.presentForm).then(res => {
          if (res.data.code == 0) {
            console.log(res.data.message)
            this.$message({
              message: '数据库请求失败',
              type: 'error',
              duration: 3000
            })
          } else {
            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 2000
            });
            //重新查询部门数据
            this.queryDepartment()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },


    //重置
    clear() {
      this.form = {}
    },


    //发送请求——更新部门
    updata() {
      let data = {
        presentForm: this.presentForm,
        updataForm: this.updataForm
      }
      this.$axios.post('department/updata', data).then(res => {
        console.log(res)
        if (res.data.code == 0) {
          console.log(res.data.message)
          this.$message({
            message: '数据库请求失败',
            type: 'error',
            duration: 3000
          })
        } else {
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 2000
          });
          //重新查询部门数据
          this.queryDepartment()
          this.dialogVisible = false
        }
      }).catch(function (error) {
        this.$message({
          message: '请求发送失败',
          type: 'error',
          duration: 3000
        });
        console.log(error);
      });
    },


    //发送请求——查询部门，封装方法
    queryDepartment() {
      //发送请求——查询部门
      this.$axios.get('department/query').then(res => {
        if (res.data.code == 0) {
          console.log(res.data.message)
          this.$message({
            message: '数据库请求失败',
            type: 'error',
            duration: 3000
          })
        } else {
          console.log(res.data.message)
          this.tableData = res.data.data
        }
      }).catch(function (error) {
        this.$message({
          message: '请求失败',
          type: 'error',
          duration: 3000
        });
        console.log(error);
      });
    }
  },


  mounted: function () {
    //发送请求——查询部门
    this.queryDepartment()
  }
}
</script>

<style lang="scss" scoped>
</style>
