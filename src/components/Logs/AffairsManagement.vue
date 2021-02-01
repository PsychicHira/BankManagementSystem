<template>
  <div class="ProjectManagement">
    <el-card class="box-card">

      <h2>事务分类维护</h2>
      <el-divider class="el-divider"></el-divider>

      <h3>添加事务</h3>
      <el-form ref="form" :model="form" :rules="rules" label-width="130px">

        <el-row>

          <el-col :span="6">
            <el-form-item label="请选择事物大类" prop="affairMainClass">
              <el-select v-model="form.affairMainClass" placeholder="请选择事务大类" autocomplete="on" @change="selectAffairMainClassAdd" class="w100">
                <el-option v-for="item in affairMainClassSelect" :key="item.value" :label="item.value+item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="请选择事物中类" prop="affairMiddleClass">
              <el-select v-model="form.affairMiddleClass" placeholder="请选择事务中类" autocomplete="on" @change="selectAffairMiddleClassAdd" class="w100">
                <el-option v-for="item in affairMiddleClassSelect" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col>
            <el-form-item label="事物名称" prop="affairName">
              <el-input v-model="form.affairName"></el-input>
            </el-form-item>
          </el-col>

          <el-col>
            <el-form-item label="事物要求" prop="demand">
              <el-input v-model="form.demand"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="审核标志" prop="isApproval">
              <el-select v-model="form.isApproval" placeholder="请选择" style="width:100%">
                <el-option label="不审核" value="不审核"></el-option>
                <el-option label="审核" value="审核"></el-option>
                <el-option label="无" value="无"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <el-form-item label="事物编号" prop="number">
              <el-input v-model="form.number"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="addAffair('form')">添加事务</el-button>
              <el-button @click="clear">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider class="el-divider"></el-divider>

        <h3>查询事务</h3>

        <el-row>
          <el-col :span="6">
            <el-form-item label="请选择事物大类">
              <el-select v-model="queryForm.affairMainClass" placeholder="请选择事务大类" autocomplete="on" @change="selectAffairMainClassQuery" class="w100">
                <el-option v-for="item in affairMainClassSelect" :key="item.value" :label="item.value+item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="请选择事物中类">
              <el-select v-model="queryForm.affairMiddleClass" placeholder="请选择事务中类" autocomplete="on" @change="selectAffairMiddleClassQuery" class="w100">
                <el-option v-for="item in affairMiddleClassSelect" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="query">查询</el-button>
              <!-- <el-button @click="clear">重置</el-button> -->
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>

      <el-table :data="tableData" stripe>
        <el-table-column label="事务编号" width="180" prop="number">
          <!-- <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
          </template> -->
        </el-table-column>

        <el-table-column label="事物名称" prop="affairName">
        </el-table-column>

        <el-table-column label="事务类别" prop="affairMiddleClassName">
        </el-table-column>

        <el-table-column label="是否需要审核" prop="isApproval">
        </el-table-column>

        <el-table-column label="事务要求" prop="demand">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="toDetail(scope.$index, scope.row)">查看</el-button>
            <el-button size="mini" type="danger" @click="deleteDepartment(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import {
  queryAffairMainClass as C_queryAffairMainClass,
  queryAffairMiddleClassByMainClassId as C_queryAffairMiddleClassByMainClassId,
  addAffair as C_addAffair,
  queryAffair as C_queryAffair
} from '../../common/methods.js'
export default {
  name: 'NewEvent',
  data() {
    return {
      form: {
        affairMainClass: '',
        affairMiddleClass: '',

        demand: '',
        number: '',
        //选中的事务中类id
        affairMiddleClassNameId: '',
        //选中的事务大类id
        affairMainClassNameId: '',
        affairName: '',
        isApproval: ''
      },
      tableData: [],
      //事务大类的options
      affairMainClassSelect: [],
      //事务中类的options
      affairMiddleClassSelect: [],
      queryForm: {
        //选中的事务中类id
        affairMiddleClassNameId: '',
        //选中的事务大类id
        affairMainClassNameId: '',
        affairMainClass: '',
        affairMiddleClass: ''
      },


      //表单验证项
      rules: {
        affairMainClass: [
          { required: true, message: '请选择事务大类', trigger: 'blur' },
        ],
        affairMiddleClass: [
          { required: true, message: '请选择事务中类', trigger: 'blur' },
        ],
        affairName: [
          { required: true, message: '请填写事件名称', trigger: 'blur' },
        ],
        demand: [
          { required: true, message: '请填写事务要求', trigger: 'blur' },
        ],
        isApproval: [
          { required: true, message: '请选择审核标志', trigger: 'blur' },
        ],
        number: [
          { required: true, message: '请填写事务编号', trigger: 'blur' },
        ]
      },

    }
  },
  methods: {
    //选择事务大类(查询)
    selectAffairMainClassQuery(val) {
      // console.log(val) // val是id，根据id找到事务大类的名字
      this.queryForm.affairMainClassNameId = val
      this.affairMainClassSelect.forEach(ele => {
        console.log(ele)
        if (ele.value == val) {
          this.affairMainClassName = ele.label
        }
      });
      console.log(this.affairMainClassName)

      //根据事务大类id查询事务中类
      //清空事务种类的model
      this.affairMiddleClassSelect = []
      this.queryForm.affairMiddleClass = ''
      this.queryForm.affairMiddleClassNameId = ''
      C_queryAffairMiddleClassByMainClassId(this.affairMainClassName, res => {
        // console.log(res)
        res.forEach((ele) => {
          this.affairMiddleClassSelect.push({
            value: ele.id,
            label: ele.affairMiddleClassName
          });
        });
      })
    },

    //选择事务中类(查询)
    selectAffairMiddleClassQuery(val) {
      console.log(val)
      this.queryForm.affairMiddleClassNameId = val
    },

    //添加事务
    addAffair(form) {
      let go = 1
      // console.log(this.form)
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

      //发送请求添加事务
      C_addAffair(this.form, res => {
        this.$message({
          message: res,
          type: 'success',
          duration: 3000
        });
      })


    },

    //查询
    query() {
      console.log('this.form.affairMainClassNameId' + this.queryForm.affairMainClassNameId);
      console.log('this.form.affairMiddleClassNameId' + this.queryForm.affairMiddleClassNameId);

      let obj = {
        affairMain: this.queryForm.affairMainClassNameId,
        affairMiddle: this.queryForm.affairMiddleClassNameId
      }

      C_queryAffair(obj, res => {
        // console.log(res)
        this.tableData = res
      })
    },

    //重置
    clear() {
      this.form = {}
    },

    //选择事务大类（添加）
    selectAffairMainClassAdd(val) {
      console.log(111111111111111)
      // console.log(val) // val是id，根据id找到事务大类的名字
      this.form.affairMainClassNameId = val
      this.affairMainClassSelect.forEach(ele => {
        if (ele.value == val) {
          this.affairMainClassName = ele.label
        }
      });
      console.log(this.affairMainClassName)

      //根据事务大类id查询事务中类
      //清空事务种类的model
      this.affairMiddleClassSelect = []
      this.form.affairMiddleClass = ''
      this.form.affairMiddleClassNameId = ''
      C_queryAffairMiddleClassByMainClassId(this.affairMainClassName, res => {
        // console.log(res)
        res.forEach((ele) => {
          this.affairMiddleClassSelect.push({
            value: ele.id,
            label: ele.affairMiddleClassName
          });
        });
      })
    },

    //选择事务中类(添加)
    selectAffairMiddleClassAdd(val) {
     this.form.affairMiddleClassNameId = val
    }


  },
  mounted: function () {
    //查询事务大类
    C_queryAffairMainClass(res => {
      // console.log(res);
      // this.affairMainClasses = res;
      res.forEach(ele => {
        this.affairMainClassSelect.push({
          value: ele.id,
          label: ele.affairMainClassName
        });
      });
    });

    //初始查找所有事务，把数据渲染到表格中
    C_queryAffair({ affairMain: '', affairMiddle: '' }, res => {
      // console.log(res)
      this.tableData = res
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
