<template>
  <div class="Operations">
    <el-card class="box-card">
      <h3>生产运维录入事件</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" :rules="rules" label-width="80px">

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="机构名称" prop="department">
              <el-input v-model="form.department" disabled></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系人员" prop="creator">
              <el-input v-model="form.creator" disabled></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系电话" prop="phoneNumber">
              <el-input v-model="form.phoneNumber" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            </el-form-item>
            <el-form-item label="联系地址" prop="address">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="问题描述" prop="description">
          <el-input type="textarea" v-model="form.description" :rows="4"></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="6">
            <el-form-item label="问题类型" prop="problemType">
              <el-select v-model="form.problemType" placeholder="请选择问题类型" autocomplete="on" @change="selectProblemType">
                <el-option v-for="item in problemTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="问题级别" prop="problemGrade">
              <el-select v-model="form.problemGrade" placeholder="请选择问题级别" autocomplete="on" @change="selectProblemGrade">
                <el-option v-for="item in problemGrades" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="处理意见" prop="opinion">
          <el-input type="textarea" v-model="form.opinion" :rows="4"></el-input>
        </el-form-item>

        <el-form-item label="信息来源" :inline="true" prop="informationSource">
          <el-select v-model="form.informationSource" placeholder="请选择信息来源" autocomplete="on" @change="selectInformationSource">
                <el-option v-for="item in informationSources" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
        </el-form-item>

        <el-form-item label="流转方式" prop="transferWay">
          <el-radio-group v-model="form.transferWay" @change="selectTransferWay">
            <el-radio v-for="item in transferWays" :key="item.value" :label="item.label" :value="item.value"></el-radio>
            <!-- <el-radio label="转发"></el-radio>
            <el-radio label="协同工作"></el-radio> -->
          </el-radio-group>
        </el-form-item>

        <el-row>

          <el-col :span="6">
            <el-form-item label="受理部门" prop="acceptDepartment">
              <el-select v-model="form.acceptDepartment" placeholder="请选择部门" autocomplete="on" class="w100" @change="selectAceeptDepartment">
                <el-option v-for="item in acceptDepartments" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="受理人" prop="acceptor">
              <el-select v-model="form.acceptor" placeholder="请选择部门" autocomplete="on" class="w100" @change="selectAceeptor">
                <el-option v-for="item in acceptors" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {
  queryDepartment as C_queryDepartment,
  queryPersonnnelByDepartment as C_queryPersonnnelByDepartment,
  queryProblemType as C_queryProblemType,
  queryProblemGrade as C_queryProblemGrade,
  queryInformationSource as C_queryInformationSource,
  queryOperationTransfer as C_queryOperationTransfer
  // queryBusinessCategory as C_queryBusinessCategory,
  // queryPriority as C_queryPriority,
  // noReturnValJudge,
  // submitUpload
} from '../../common/methods.js'
export default {
  name: 'NewEvent',
  data() {
    return {
      form: {
        department: this.$store.department,
        creator: this.$store.name,
        phoneNumber: this.$store.phoneNumber,
        address: '',
        title: '',
        description: '',
        problemType: '',
        problemGrade: '',
        opinion: '',
        informationSource: '',
        transferWay: '',
        acceptDepartment: '',
        acceptor: ''
      },
      acceptDepartments: [],
      acceptors: [],
      problemTypes: [],
      problemGrades: [],
      informationSources: [],
      transferWays:[],
      //表单验证项
      rules: {
        title: [
          { required: true, message: '请填写标题', trigger: 'blur' },
        ],
        description: [
          { required: true, message: '请填写事件描述', trigger: 'blur' },
        ],
        address: [
          { required: true, message: '请填写地址', trigger: 'blur' },
        ],
        problemType: [
          { required: true, message: '请选择问题类型', trigger: 'blur' },
        ],
        problemGrade: [
          { required: true, message: '请选择问题级别', trigger: 'blur' },
        ],
        creator: [
          { required: true, message: '请填写创建人员', trigger: 'blur' },
        ],
        department: [
          { required: true, message: '请选择所属部门名称', trigger: 'blur' },
        ],
        phoneNumber: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
        ],
        acceptDepartment: [
          { required: true, message: '请受理部门', trigger: 'blur' },
        ],
        acceptor: [
          { required: true, message: '请选择受理人', trigger: 'blur' },
        ],
        opinion: [
          { required: true, message: '请填写处理意见', trigger: 'blur' },
        ],
        informationSource: [
          { required: true, message: '请选择信息来源', trigger: 'blur' },
        ],
        transferWay: [
          { required: true, message: '请选择流转方式', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      this.$axios.post('/operation',this.form).then(res=>{
        console.log(res)
      })
    },


    //选择受理部门option
    selectAceeptDepartment(val) {
      // console.log(val)
      //每次选择了受理部门，都让受理人清空
      this.acceptors = []
      this.form.acceptor = ''
      //当前选中的部门名称，用来查下属的人员
      let presentDepartment = ''
      //val打印出来departments其中元素的编号，根据编号查label（名字），再把名字给到form提交表单中
      this.acceptDepartments.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label
          this.form.acceptDepartment = ele.label
          presentDepartment = ele.label
        }
      })
      console.log(presentDepartment)
      C_queryPersonnnelByDepartment(presentDepartment, (res) => {
        // console.log(res)
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
          res.forEach((element, index) => {
            // console.log(index)
            // console.log(element)
            //受理人员的options
            this.acceptors.push({
              value: index + 1,
              label: element.name
            })
          });
        }
      })
    },

    //选择受理人option
    selectAceeptor(val) {
      // console.log(val)
      //val打印出来departments其中元素的编号，根据编号查label（名字），再把名字给到form提交表单中
      this.acceptors.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label
          this.form.acceptor = ele.label
        }
      })
    },
    //选择问题类型
    selectProblemType(val) {
      // console.log(val)
      //val打印出来departments其中元素的编号，根据编号查label（名字），再把名字给到form提交表单中
      this.problemTypes.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label
          this.form.problemType = ele.label
        }
      })
    },
    //选择问题级别
    selectProblemGrade(val) {
      // console.log(val)
      //val打印出来departments其中元素的编号，根据编号查label（名字），再把名字给到form提交表单中
      this.problemGrades.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label
          this.form.problemGrade = ele.label
        }
      })
    },
    //选择信息来源
    selectInformationSource(val) {
      // console.log(val)
      //val打印出来departments其中元素的编号，根据编号查label（名字），再把名字给到form提交表单中
      this.informationSources.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label
          this.form.informationSource = ele.label
        }
      })
    },
    //选择流转方式
    selectTransferWay(val) {
      // console.log(val)
      //val打印出来departments其中元素的编号，根据编号查label（名字），再把名字给到form提交表单中
      this.transferWays.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label
          this.form.transferWay = ele.label
        }
      })
    },


  },
  mounted: function () {
    //获取部门
    C_queryDepartment(res => {
      console.log(res)
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
          //受理部门的options
          this.acceptDepartments.push({
            value: element.number,
            label: element.departmentName
          })
        });
      }
    });

    //获取问题类型
    C_queryProblemType(res => {
      if (res == 0) {
        this.$message({
          message: '数据库请求失败',
          type: 'error',
          duration: 3000
        });
      } else if (res == 2) {
        this.$message({
          message: '发生错误',
          type: 'error',
          duration: 3000
        });
      } else {
        // console.log(res)
        res.forEach((element, index) => {
          //所属部门的options
          this.problemTypes.push({
            value: index + 1,
            label: element.problemType
          })
        })
      }
    });

    //获取问题级别
    C_queryProblemGrade(res => {
      if (res == 0) {
        this.$message({
          message: '数据库请求失败',
          type: 'error',
          duration: 3000
        });
      } else if (res == 2) {
        this.$message({
          message: '发生错误',
          type: 'error',
          duration: 3000
        });
      } else {
        // console.log(res)
        res.forEach((element, index) => {
          //所属部门的options
          this.problemGrades.push({
            value: index + 1,
            label: element.problemGrade
          })
        })
      }
    });

    //获取信息来源
    C_queryInformationSource(res => {
      if (res == 0) {
        this.$message({
          message: '数据库请求失败',
          type: 'error',
          duration: 3000
        });
      } else if (res == 2) {
        this.$message({
          message: '发生错误',
          type: 'error',
          duration: 3000
        });
      } else {
        // console.log(res)
        res.forEach((element, index) => {
          //所属部门的options
          this.informationSources.push({
            value: index + 1,
            label: element.informationSource
          })
        })
      }
    });

    //查询运维流转方式
    C_queryOperationTransfer(res=>{
      if (res == 0) {
        this.$message({
          message: '数据库请求失败',
          type: 'error',
          duration: 3000
        });
      } else if (res == 2) {
        this.$message({
          message: '发生错误',
          type: 'error',
          duration: 3000
        });
      } else {
        // console.log(res)
        res.forEach((element, index) => {
          //所属部门的options
          this.transferWays.push({
            value: index + 1,
            label: element.transferWay
          })
        })
      }
    })


  }
}
</script>

<style lang="scss" scoped>
</style>