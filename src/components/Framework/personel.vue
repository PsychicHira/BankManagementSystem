<template>
  <div class="personel">
    <el-card class="box-card">

      <h3>人员管理</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" :rules="rules" label-width="140px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="请输入人员姓名" prop="name">
              <el-input type="text" v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="所属部门" prop="departments">
              <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
              <!-- <el-option  v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value"> </el-option> -->
              <el-select v-model="form.department" placeholder="请选择部门" autocomplete="on" class="w100">
                <el-option  v-for="item in departments"  :key="item.value"  :label="item.label" :value="item.value"></el-option>
                <!--  <el-option label="项目管理" value="category2"></el-option> -->
                <!-- <el-option label="会议餐饮审批" value="category3"></el-option>
                <el-option label="会议审批" value="category4"></el-option>
                <el-option label="车辆审批" value="category5"></el-option> -->
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">添加人员</el-button>
          <el-button @click="clear()">重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" stripe>

        <el-table-column label="序号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
          </template>
        </el-table-column>

        <el-table-column label="人员姓名" prop="number">
        </el-table-column>

        <el-table-column label="所属部门" prop="name">
        </el-table-column>

        <el-table-column label="职位" prop="name">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-card>

    <!-- 弹窗 -->
    <el-dialog title="修改部门名称" :visible.sync="dialogVisible" center>
      <el-form :model="form" label-width="100px">

        <el-row>
          <el-col :span="12">
            <el-form-item label="部门编号">
              <el-input v-model="presentFrom.number" autocomplete="on"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="部门名称">
              <el-input v-model="presentFrom.name" autocomplete="on"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'department',
  data() {
    return {
      form: {
        name: '',
        departments: []
      },
      //修改和删除功能，当前选择的数据
      presentFrom: {
        name: '',
        number: ''
      },
      tableData: [],
      rules: {
        name: [
          { required: true, message: '请输入部门名称', trigger: 'blur' },
        ],
        departments: [
          { required: true, message: '请输入部门所属部门', trigger: 'blur' },
        ]
      },
      dialogVisible: false,
      //options——
        // options: [{
        //     value: '选项1',
        //     label: '黄金糕'
        //   }, {
        //     value: '选项2',
        //     label: '双皮奶'
        //   }]
      //部门名称数组对象 [{value: '选项1',label: '黄金糕'}]
      departments:[]
    }
  },
  methods: {
    //添加部门
    onSubmit(form) {
      //验证必填项是否填了，没填就弹出红色提醒
      this.$refs[form].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });


      // if (form.name == '' && form.number == '') {
      //   this.$message({
      //     message: '请输入必填项',
      //     type: 'warning'
      //   });
      //   return false;
      // }
      // this.$axios.post('department/add', form).then(res => {
      //   if (res.data == '0') {
      //     this.$message({
      //       message: '信息写入失败',
      //       type: 'error'
      //     });
      //   } else {
      //     this.$message({
      //       message: '信息写入成功',
      //       type: 'success',
      //       duration: 3000
      //     });
      //     this.$axios.get('department/query').then(res => {
      //       console.log(res)
      //       this.tableData = res.data
      //     })
      //   }
      // }).catch(function (error) {
      //   this.$message({
      //     message: '请求发送失败',
      //     type: 'error',
      //     duration: 3000
      //   });
      //   console.log(error);
      // });
    },
    // //编辑
    // handleEdit(index, row) {
    //   // console.log(index, row);
    //   this.presentFrom.name = row.name
    //   this.presentFrom.number = row.number
    //   this.dialogVisible = true
    // },
    // //删除
    // handleDelete(index, row) {
    //   console.log(index, row);
    //   this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     this.presentFrom.name = row.name
    //     this.presentFrom.number = row.number
    //     this.$axios.post('department/delet', this.presentFrom).then(res => {
    //       if (res.data == '0') {
    //         this.$message({
    //           message: '删除失败',
    //           type: 'error',
    //           duration: 2000
    //         });
    //       } else {
    //         this.$message({
    //           message: '删除成功',
    //           type: 'success',
    //           duration: 2000
    //         });
    //         this.$axios.get('department/query').then(res => {
    //           console.log(res)
    //           this.tableData = res.data
    //         })
    //       }
    //     })
    //   }).catch(() => {
    //     this.$message({
    //       type: 'info',
    //       message: '已取消删除'
    //     });
    //   });
    // },
    // //重置
    // clear() {
    //   this.form = {}
    // },


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
          //将部门数据给 this.departments 下拉框
          let arr = res.data.data
          arr.forEach(element => {
            this.departments.push({
              value:element.number,
              label:element.departmentName
            })
          });
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
    this.queryDepartment()
  }
}
</script>

<style lang="scss" scoped>
</style>
