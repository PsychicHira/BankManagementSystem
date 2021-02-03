<template>
  <div class="OrganizationLogsInquiry">
    <el-card class="box-card">

      <h3>机构日志查询</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="120px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="查询机构">
              <el-input v-model="form.department"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="完成情况">
              <el-select v-model="form.done" placeholder="请选择" style="width:100%">
                <el-option label="已完成" value="21312"></el-option>
                <el-option label="未完成" value="123123"></el-option>
                <el-option label="无" value="shang1hai"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <el-checkbox-group v-model="form.SMS">
                <el-checkbox label="条线" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="开始时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.start" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="结束时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.end" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="关键字">
              <el-input v-model="form.words"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="业务类别">
              <el-select v-model="form.m" placeholder="请选择" style="width:100%">
                <el-option label="1综合管理" value="12asd1312"></el-option>
                <el-option label="2常规巡查" value="21asd3112"></el-option>
                <el-option label="3运行维护" value="21asdas3112"></el-option>
                <el-option label="4变更投产（新系统/新功能/新设备）" value="21131asdsa2"></el-option>
                <el-option label="5系统建设" value="2113asdasdas12"></el-option>
                <el-option label="6共享分类" value="2131asdas12"></el-option>
                <el-option label="7科技共享" value="2131asdasd12"></el-option>
                <el-option label="8管理共享" value="21311dsa2"></el-option>
                <el-option label="9客户经理条线" value="21asd312312"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column label="序号" width="50">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="creator" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="content" label="工作内容">
        </el-table-column>
        <el-table-column prop="completionOfProcess" label="完成情况">
        </el-table-column>
        <el-table-column prop="address" label="启示与反思">
        </el-table-column>
        <el-table-column prop="createTime" label="填写时间" width="100">
        </el-table-column>
        <el-table-column prop="affair" label="业务分类">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import {
  queryLogsByDepartment as C_queryLogsByDepartment
} from '../../common/methods.js'
export default {
  name: 'NewEvent',
  data() {
    return {
      form: {
        title: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        SMS:''
      },
      tableData:[]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.form);
    },


    //文件上传
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  mounted:function(){
    C_queryLogsByDepartment(this.$store.department,res=>{
      console.log(res)
      this.tableData = res
    })

    
  }
}
</script>

<style lang="scss" scoped>

</style>
