<template>
  <div class="personnel">
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
            <el-form-item label="联系电话" prop="phoneNumber">
              <el-input type="text" v-model="form.phoneNumber"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="性别" prop="sex">
              <el-select v-model="form.sex" placeholder="请选择性别" autocomplete="on" class="w100" @change="selectSex">
                <el-option v-for="item in sex" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="身份证号码" prop="identification">
              <el-input type="text" v-model="form.identification"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="所属部门" prop="department">
              <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
              <!-- <el-option  v-for="item in options"  :key="item.value"  :label="item.label" :value="item.value"> </el-option> -->
              <el-select v-model="form.department" placeholder="请选择部门" autocomplete="on" class="w100" @change="selectDepartment">
                <el-option v-for="item in departments" :key="item.value" :label="item.label" :value="item.value"></el-option>
                <!--  <el-option label="项目管理" value="category2"></el-option> -->
                <!-- <el-option label="会议餐饮审批" value="category3"></el-option>
                <el-option label="会议审批" value="category4"></el-option>
                <el-option label="车辆审批" value="category5"></el-option> -->
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="工号" prop="employeeNumber">
              <el-input type="text" v-model="form.employeeNumber"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="登陆账号" prop="loginName">
              <el-input type="text" v-model="form.loginName"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="登陆密码" prop="password">
              <el-input type="text" v-model="form.password"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

        <el-form-item>
          <el-button type="primary" @click="addPersonnel('form')">添加人员</el-button>
          <el-button @click="clear()">重置</el-button>
        </el-form-item>
      </el-form>

      <el-divider class="el-divider"></el-divider>

      <el-table :data="tableData" stripe>
        <el-table-column label="序号" width="50">
          <template slot-scope="scope">
            <span>{{ scope.$index+1 }}</span>
          </template>
        </el-table-column>

        <el-table-column label="人员姓名" prop="name">
        </el-table-column>

        <el-table-column label="联系电话" prop="phoneNumber">
        </el-table-column>

        <el-table-column label="性别" prop="sex">
        </el-table-column>

        <el-table-column label="身份证号码" prop="identification">
        </el-table-column>

        <el-table-column label="工号" prop="employeeNumber">
        </el-table-column>

        <el-table-column label="所属部门" prop="department">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="small" @click="editPersonnel(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="deletePersonnel(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </el-card>

    <!-- 弹窗 -->
    <el-dialog title="修改人员信息" :visible.sync="dialogVisible" center width="1000px">
      <el-form :model="presentForm" label-width="100px">

        <el-row>
          <el-col :span="6">
            <el-form-item label="人员姓名">
              <el-input type="text" v-model="presentForm.name" autocomplete="on"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系电话">
              <el-input v-model="presentForm.phoneNumber" autocomplete="on" @input="fixInputInvalid($event)"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="性别">
              <el-input v-model="presentForm.sex"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="身份证号码">
              <el-input type="text" v-model="presentForm.identification" autocomplete="on" @input="fixInputInvalid($event)"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="所属部门">
              <el-input v-model="presentForm.department" autocomplete="on"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="工号">
              <el-input type="text" v-model="presentForm.employeeNumber" autocomplete="on" @input="fixInputInvalid($event)"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="登录账号">
              <el-input type="text" v-model="presentForm.loginName" autocomplete="on" @input="fixInputInvalid($event)"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="登录密码">
              <el-input type="text" v-model="presentForm.password" autocomplete="on" @input="fixInputInvalid($event)"></el-input>
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
import {
  queryDepartment as C_queryDepartment,
  queryPersonnel as C_queryPersonnel
} from '../../common/methods.js'
export default {
  name: 'department',
  data() {
    return {
      //页面表单数据
      form: {
        name: '',
        phoneNumber: '',
        sex: '',
        identification: '',
        department: '',
        employeeNumber: '',
        loginName: '',
        password: '',
      },
      //页面性别option选项
      sex: [{
        value: 1,
        label: '男'
      },
      {
        value: 0,
        label: '女'
      }],
      //修改和删除功能，当前选择的数据
      presentForm: {
        name: '',
        number: ''
      },
      //下方表格数据
      tableData: [],
      //表单验证项
      rules: {
        name: [
          { required: true, message: '请选择所属部门名称', trigger: 'blur' },
        ],
        department: [
          { required: true, message: '请输入所属部门', trigger: 'blur' },
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'blur' },
        ]
      },
      dialogVisible: false,
      //
      //options——
      // options: [{
      //     value: '选项1',
      //     label: '黄金糕'
      //   }, {
      //     value: '选项2',
      //     label: '双皮奶'
      //   }]
      //部门名称数组对象 [{value: '选项1',label: '黄金糕'}]
      departments: []
    }
  },
  methods: {
    //添加人员
    addPersonnel(form) {
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
      if (this.form.name == '' || this.form.sex == '' || this.form.department == '') {
        this.$message({
          message: '请输入必填项',
          type: 'warning'
        });
        return
      }


      this.$axios.post('personnel/add', this.form).then(res => {
        if (res.data.code == 0) {
          this.$message({
            message: '信息写入失败',
            type: 'error'
          });
        } else {
          this.$message({
            message: '信息写入成功',
            type: 'success',
            duration: 3000
          });
          //重新查询部门数据
          this.queryPersonnel()
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

    //选择性别
    selectSex(val) {
      //val打印出来sex其中元素的编号，根据编号做个判断性别，再把性别给到form提交表单中
      if (val == 0) {
        this.form.sex = '女'
      } else {
        this.form.sex = '男'
      }
    },
    //选择部门option
    selectDepartment(val) {
      // console.log(val)
      //val打印出来departments其中元素的编号，根据编号查label（名字），再把名字给到form提交表单中
      this.departments.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label

          this.form.department = ele.label
        }
      })
    },
    //编辑
    editPersonnel(index, row) {
      // console.log(index, row);
      this.presentForm.name = row.name
      this.presentForm.phoneNumber = row.phoneNumber
      this.presentForm.sex = row.sex
      this.presentForm.identification = row.identification
      this.presentForm.department = row.department
      this.presentForm.employeeNumber = row.employeeNumber
      this.presentForm.loginName = row.loginName
      this.presentForm.password = row.password
      this.dialogVisible = true
    },
    fixInputInvalid($event) {
      this.$forceUpdate()
    },

    //删除人员
    deletePersonnel(index, row) {
      console.log(index, row);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.presentForm.name = row.name
        this.presentForm.sex = row.sex
        this.$axios.post('personnel/delet', this.presentForm).then(res => {
          if (res.data.code == 0) {
            this.$message({
              message: '删除失败',
              type: 'error',
              duration: 2000
            });
          } else {
            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 2000
            });
            //重新查询部门数据
            this.queryPersonnel()
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


  },


  mounted: function () {
    C_queryPersonnel(res => {
      if (res == 0) {
        this.$message({
          message: '数据库请求失败',
          type: 'error',
          duration: 3000
        })
      } else if (res == 2) {
        this.$message({
          message: '发生错误',
          type: 'error',
          duration: 3000
        });
      } else {
        console.log(res)
        //将人员数据给 this.tableData
        this.tableData = res
        //如果有没填的项目，判断一下设置空，不然显示undefined
        this.tableData.forEach(ele => {
          //console.log(typeof ele.phoneNumber)   string类型
          if (ele.phoneNumber == 'undefined') {
            ele.phoneNumber = ''
          }
          if (ele.identification == 'undefined') {
            ele.identification = ''
          }
          if (ele.employeeNumber == 'undefined') {
            ele.employeeNumber = ''
          }
        })
      }
    });

    C_queryDepartment(res => {
      if (res == 0) {
        this.$message({
          message: '数据库请求失败',
          type: 'error',
          duration: 3000
        })
      } else if (res == 2) {
        this.$message({
          message: '发生错误',
          type: 'error',
          duration: 3000
        });
      } else {
        res.forEach(element => {
          //所属部门的options
          this.departments.push({
            value: element.number,
            label: element.departmentName
          })
        });
      }
    });

  }
}
</script>

<style lang="scss" scoped>
</style>
