<template>
  <div class="department">
    <el-card class="box-card">

      <h3>事务分类管理</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="120px">
        <el-row>
          <el-col>
            <el-form-item label="当前事务大类" prop="number">
              <p v-for="item in affairMainClass">{{item.id}} {{item.affairMainClassName}} &nbsp;&nbsp;&nbsp;&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>

      <el-form ref="form" :model="form" label-width="120px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="事务大类名称">
              <el-input type="text" v-model="form.number"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="部门名称">
              <el-input type="text" v-model="form.departmentName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="addDepartment('form')">添加</el-button>
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
import {
  queryAffairMainClass as C_queryAffairMainClass,
} from '../../common/methods.js'
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

      //弹窗
      dialogVisible: false,


       affairMainClass:[],
    }
  },
  methods: {

    //添加部门
    addDepartment(form) {

    },


    //编辑
    editDepartment(index, row) {

    },


    //删除
    deleteDepartment(index, row) {

    },


    //重置
    clear() {
      this.form = {}
    },


    //发送请求——更新部门
    updata() {

    },

  },


  mounted: function () {
    //查询事务大类
    C_queryAffairMainClass(res => {
      console.log(res)
      this.affairMainClass = res
    })

  }
}
</script>

<style lang="scss" scoped>
.el-form-item__content{
  p{
    display: inline-block;
  }
}
</style>
