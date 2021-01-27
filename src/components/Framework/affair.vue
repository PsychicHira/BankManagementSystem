<template>
  <div class="department">
    <el-card class="box-card">

      <h3>事务分类管理</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="120px">
        <el-row>
          <el-col>
            <el-form-item label="当前事务大类" prop="number">
              <p v-for="item in affairMainClasses">{{item.id}} {{item.affairMainClassName}} &nbsp;&nbsp;&nbsp;&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="事务大类名称">
              <el-input type="text" v-model="form.affairMainClassInput"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="addAffairMainClass()">添加事务大类</el-button>
            </el-form-item>
          </el-col>

        </el-row>

        <el-divider class="el-divider"></el-divider>

        <el-row>
          <el-col :span="6">
            <el-form-item label="选择事务大类">
              <el-select v-model="form.affairMainClass" placeholder="请选择事务大类" autocomplete="on" @change="selectAffairMainClass" class="w100">
                <el-option v-for="item in (affairMainClassesSelect)" :key="item.value" :label="item.value+item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col>
            <el-form-item label="当前事务中类" prop="number">
              <p v-for="item in affairMiddleClasses" v-if="affairMiddleClasses.length !==0">{{item.affairMiddleClassName}} &nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p v-if="affairMiddleClasses.length ==0">该事务大类下无事务种类，请添加</p>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="事务中类名称">
              <el-input type="text" v-model="form.affairMiddleClassInput"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="addAffairMiddleClass()">添加事务中类</el-button>
            </el-form-item>
          </el-col>

        </el-row>
      </el-form>

    </el-card>

  </div>
</template>

<script>
import {
  queryAffairMainClass as C_queryAffairMainClass,
  queryAffairMiddleClassByMainClassId as C_queryAffairMiddleClassByMainClassId,
  addAffairMainClass as C_addAffairMainClass,
  addAffairManClass as C_addAffairManClass
} from '../../common/methods.js'
export default {
  name: 'department',
  data() {
    return {
      form: {
        affairMainClass: '',
        //事物大类输入框
        affairMainClassInput: '',
        affairMiddleClassInput: ''
      },
      //展示当前事务大类
      affairMainClasses: [],
      //事务大类的select
      affairMainClassesSelect: [],
      //事务大类选择后的事务名称
      affairMainClassName: '',

      //事务中类
      affairMiddleClasses: []
    }
  },
  methods: {

    //选择事务大类
    selectAffairMainClass(val) {
      // console.log(val) // val是id，根据id找到事务大类的名字
      this.affairMainClassesSelect.forEach(ele => {
        if (ele.value == val) {
          this.affairMainClassName = ele.label
        }
      });
      console.log(this.affairMainClassName)
      //根据事务大类id查询事务中类
      this.affairMiddleClasses = []
      C_queryAffairMiddleClassByMainClassId(this.affairMainClassName, res => {
        console.log(res)
        this.affairMiddleClasses = res
        // res.forEach((ele, index) => {
        //   this.affairMiddleClasses.push({
        //     value: ele.id,
        //     label: ele.affairMiddleClassName
        //   });
        // });
      })
    },

    //添加事务大类
    addAffairMainClass() {
      // console.log(this.form.affairMainClassInput)
      if (this.form.affairMainClassInput == '') {
        this.$message({
          message: '请填写事务大类名称',
          type: 'error',
          duration: 3000
        });
        return
      }
      let obj = { affairMainClassName: this.form.affairMainClassInput }
      C_addAffairMainClass(obj, res => {
        this.$message({
          message: res,
          type: 'error',
          duration: 3000
        });
      })
    },

    //添加事务中类
    addAffairMiddleClass() {
      if (this.form.affairMiddleClassInput == '') {
        this.$message({
          message: '请填写事务中类名称',
          type: 'success',
          duration: 3000
        });
        return
      }
      let obj = {
        affairMainClassName: this.affairMainClassName,
        affairMiddleClassName: this.form.affairMiddleClassInput
      }
      C_addAffairManClass(obj, res => {
        this.$message({
          message: res,
          type: 'success',
          duration: 3000
        });
      })
    },



  },
  mounted: function () {
    //查询事务大类
    C_queryAffairMainClass(res => {
      // console.log(res);
      this.affairMainClasses = res;
      res.forEach(ele => {
        this.affairMainClassesSelect.push({
          value: ele.id,
          label: ele.affairMainClassName
        });
      });
    });

  }
}
</script>

<style lang="scss" scoped>
.el-form-item__content {
  p {
    display: inline-block;
  }
}
</style>
