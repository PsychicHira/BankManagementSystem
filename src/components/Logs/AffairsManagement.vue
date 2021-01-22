<template>
  <div class="ProjectManagement">
    <el-card class="box-card">

      <h3>事务分类维护</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="120px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="请选择事物大类">
              <el-select v-model="form.affairMainClass" placeholder="请选择事务大类" autocomplete="on" @change="selectAffairMainClass" class="w100">
                <el-option v-for="item in affairMainClassSelect" :key="item.value" :label="item.value+item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="请选择事物中类">
              <el-select v-model="form.affairMiddleClass" placeholder="请选择事务中类" autocomplete="on" @change="selectAffairMiddleClass" class="w100">
                <el-option v-for="item in affairMiddleClassSelect" :key="item.value" :label="item.value+item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
              <!-- <el-button>重置</el-button> -->
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="事物名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="事物要求">
              <el-input v-model="form.need"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <el-form-item label="审核标志">
              <el-select v-model="form.sign" placeholder="请选择" style="width:100%">
                <el-option label="不审核" value="21sdasd312"></el-option>
                <el-option label="审核" value="fdgfg123123"></el-option>
                <el-option label="无" value="shafgg1hai"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <el-form-item label="事物编号">
              <el-input v-model="form.num"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>

      <el-table :data="tableData" stripe>
        <el-table-column label="事务编号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
          </template>
        </el-table-column>

        <el-table-column label="事物名称" prop="title">
        </el-table-column>

        <el-table-column label="事务类别" prop="acceptor">
        </el-table-column>

        <el-table-column label="是否需要审核" prop="createTime">
        </el-table-column>

        <el-table-column label="事务要求" prop="creator">
        </el-table-column>

        <el-table-column label="处理" prop="status">
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
} from '../../common/methods.js'
export default {
  name: 'NewEvent',
  data() {
    return {
      form: {
        affairMainClass: '',
        affairMiddleClass: ''
      },
      tableData: [],
      //事务大类的select
      affairMainClassSelect: [],
      //事务中类的select
      affairMiddleClassSelect: []
    }
  },
  methods: {
    //选择事务大类
    selectAffairMainClass(val) {
      // console.log(val) // val是id，根据id找到事务大类的名字
      this.affairMainClassSelect.forEach(ele => {
        if (ele.value == val) {
          this.affairMainClassName = ele.label
        }
      });
      console.log(this.affairMainClassName)
      //根据事务大类id查询事务中类
      this.affairMiddleClassSelect = []
      this.form.affairMiddleClass=''
      C_queryAffairMiddleClassByMainClassId(this.affairMainClassName, res => {
        console.log(res)
        res.forEach((ele) => {
          this.affairMiddleClassSelect.push({
            value: ele.id,
            label: ele.affairMiddleClassName
          });
        });
      })
    },

    //选择事务中类
    selectAffairMiddleClass(val) {

    },


    onSubmit() {
      console.log('submit!');
      console.log(this.form);
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
  }
}
</script>

<style lang="scss" scoped>
</style>
