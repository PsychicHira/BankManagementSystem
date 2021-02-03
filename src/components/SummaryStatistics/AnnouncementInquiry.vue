<template>
  <div class="AnnouncementInquiry">
    <el-card class="box-card">
      <h3>公告查询</h3>
      <el-divider class="el-divider"></el-divider>
      <el-form ref="form" :model="form" label-width="100px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="查询关键字">
              <el-input v-model="form.words"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="发布人员">
              <el-input v-model="form.name"></el-input>
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

        <el-table-column prop="title" label="标题">
        </el-table-column>

        <el-table-column prop="createTime" label="创建时间" width="100">
        </el-table-column>

        <el-table-column prop="endTime" label="结束时间" width="100">
        </el-table-column>

        <el-table-column prop="creator" label="发起人" width="150">
        </el-table-column>

        <el-table-column label="操作" width="150">
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
  queryAnnounce as C_queryAnnounce
} from '../../common/methods.js'
export default {
  name: 'Todo',
  data() {
    return {
      tableData: [],
      form: {}
    };
  },
  methods: {
    onSubmit() {

    },

    toDetail(){
      ;
    }

  },
  mounted: function () {
    C_queryAnnounce(res => {
      console.log(res)
      this.tableData = res
    })
  }
}
</script>

<style lang="scss" scoped>
</style>