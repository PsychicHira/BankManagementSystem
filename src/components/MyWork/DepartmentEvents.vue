<template>
  <div class="DepartmentEvents">
    <el-card class="box-card">
      <h3>本部待办</h3>
      <el-divider class="el-divider"></el-divider>
      <el-form ref="form" :model="form" label-width="100px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="关键字查询">
              <el-input v-model="form.string"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="发起机构">
              <el-select v-model="form.department" placeholder="请选择部门" autocomplete="on" class="w100" @change="selectDepartment">
                <el-option v-for="item in departments" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="开始时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.startTime" style="width: 100%;" @change="getStartTime"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="结束时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.endTime" style="width: 100%;" @change="getEndTime"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="按状态查询">
              <el-select v-model="form.status" placeholder="按状态查询" autocomplete="on" class="w100" @change="selectEventStatus">
                <el-option v-for="item in statuses" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-form-item>
          <el-button type="primary" @click="select">查询</el-button>
          <el-button @click="clear">重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" stripe>
        <el-table-column label="序号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
          </template>
        </el-table-column>

        <el-table-column label="标题" prop="title">
        </el-table-column>

        <el-table-column label="当前环节" prop="acceptor">
        </el-table-column>

        <el-table-column label="创建时间" prop="createTime">
        </el-table-column>

        <el-table-column label="发起人" prop="creator">
        </el-table-column>

        <el-table-column label="状态" prop="status">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="editDepartment(scope.$index, scope.row)">查看</el-button>
            <el-button size="mini" type="danger" @click="deleteDepartment(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </el-card>
  </div>

</template>

<script>
import {
  queryDepartment as C_queryDepartment,
  queryEventStatus as C_queryEventStatus,
  queryPastEvents as C_queryPastEvents,
} from '../../common/methods.js'
export default {
  name: 'Todo',
  data() {
    return {
      tableData: [
        // {
        //   date: '2016-05-02',
        //   now: '普通事件',
        //   sponsor: 'tom',
        //   id: 2131231324255,
        //   title: '事件标题1',
        //   status: '等待接受'
        // }
      ],
      form: {
        string: '',
        department: '',
        startTime: '',
        endTime: '',
        status: ''
      },
      statuses: [],
      departments: []
    };
  },
  methods: {
    //查询
    select() {
      this.$axios.get(`/pastEvents?string=${this.form.string}&department=${this.form.department}&status=${this.form.status}&startTime=${this.form.startTime?this.form.startTime:''}&endTime=${this.form.endTime?this.form.endTime:''}`).then(res => {
        console.log(res);

        this.tableData = res.data.data
      })
    },

    //重置
    clear() {
      this.form = {}
    },

    //获取开始时间
    getStartTime(val) {
      console.log(val)
      this.form.startTime = new Date(val).getFullYear() + '-' + (new Date(val).getMonth() + 1) + '-' + new Date(val).getDate();
      console.log(this.form.startTime)
    },

    //获取结束时间
    getEndTime(val) {
      console.log(val)

      this.form.endTime = new Date(val).getFullYear() + '-' + (new Date(val).getMonth() + 1) + '-' + new Date(val).getDate();
      console.log(this.form.endTime)
    },

    //选择查询状态
    selectEventStatus(val) {
      // console.log(val)
      //val打印出来departments其中元素的编号，根据编号查label（名字），再把名字给到form提交表单中
      this.statuses.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label
          this.form.status = ele.label
        }
      })
    },

    //选择所属部门option
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
  },
  mounted: function () {
    //查询事件状态
    C_queryEventStatus(res => {
      res.forEach((element) => {
        this.statuses.push({
          value: element.id,
          label: element.status
        })
      })
    });

    //查询往日事件
    C_queryPastEvents(res => {
      res.forEach((element, index) => {
        this.tableData.push(element)
      })
    })

    //查询部门
    C_queryDepartment(res => {
      res.forEach((element, index) => {
        this.departments.push({
          value: element.id,
          label: element.departmentName
        })
      })
    })

  }
}
</script>

<style lang="scss" scoped>
</style>