<template>
  <div class="Todo">
    <el-card class="box-card">
      <h3>待办事件</h3>
      <el-divider class="el-divider"></el-divider>

      <el-table :data="tableData">

        <!-- <el-table-column prop="id" label="ID">
        </el-table-column> -->

        <el-table-column label="序号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="title" label="标题">
        </el-table-column>

        <el-table-column prop="acceptor" label="当前环节">
        </el-table-column>

        <el-table-column prop="createTime" label="创建时间">
        </el-table-column>

        <el-table-column prop="creator" label="发起人">
        </el-table-column>

        <el-table-column prop="department" label="发起机构">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="success" size="mini" @click="handleEdit(scope.row)">查看</el-button>
          </template>
        </el-table-column>

      </el-table>

    </el-card>

    <!-- 弹窗 -->
    <el-dialog title="项目审批流程" :visible.sync="dialogVisible" center width="1200px">
      <el-form :model="detail" label-width="100px">

        <el-row>
          <el-col :span="6">
            <el-form-item label="标 题：">
              <p>{{detail.title}}</p>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="创建人员：">
              <!-- <el-input type="text" v-model="detail.creator" autocomplete="on"></el-input> -->
              <p>{{detail.creator}}</p>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="发起机构：">
              <!-- <el-input v-model="detail.department" autocomplete="on" @input="fixInputInvalid($event)"></el-input> -->
              <p>{{detail.department}}</p>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系电话：">
              <!-- <el-input v-model="detail.phoneNumber"></el-input> -->
              <p>{{detail.phoneNumber}}</p>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="审批类型：">
              <!-- <el-input v-model="detail.department" autocomplete="on"></el-input> -->
              <!-- <p>{{detail.department}}</p> -->
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="需求条线：">
              <!-- <el-input type="text" v-model="detail.employeeNumber" autocomplete="on" @input="fixInputInvalid($event)"></el-input> -->

            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="附带文件：">
              <!-- <el-input type="text" v-model="detail.employeeNumber" autocomplete="on" @input="fixInputInvalid($event)"></el-input> -->
              <el-link type="primary" @click="downloadfile(baseUrl+detail.filePath)">点击下载附件</el-link>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-form-item label="事件描述：">
            <!-- <el-input type="text" v-model="detail.employeeNumber" autocomplete="on" @input="fixInputInvalid($event)"></el-input> -->
            <p>{{detail.description}}</p>

          </el-form-item>
        </el-row>
      </el-form>

      <el-form :model="detail" label-width="100px">
        <el-row>
          <el-form-item label="当前环节：">
            <!-- <el-input type="text" v-model="detail.employeeNumber" autocomplete="on" @input="fixInputInvalid($event)"></el-input> -->
            <p class="inline">{{detail.acceptDepartment}} &nbsp;&nbsp;</p>
            <p class="inline"> {{detail.acceptor}}</p>
          </el-form-item>
        </el-row>

        <el-row>
          <el-form-item label="处理意见：">
            <el-input type="text" v-model="detail.employeeNumber" autocomplete="on" @input="fixInputInvalid($event)"></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-form-item label="下一环节：">
            <el-radio v-model="tansferWay" label="1">结束流程</el-radio>
          </el-form-item>
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
  queryTodoEvents as C_queryTodoEvents,
  queryEventsById as C_queryEventsById,

} from '../../common/methods.js'
export default {
  name: 'Todo',
  data() {
    return {
      appro: {},
      visible: false,
      tableData: [],
      dialogVisible: false,
      detail: {
        tansferWay:1
      },
      tansferWay: "1"
    };
  },
  methods: {
    downloadfile(url) {
      console.log(url)
      this.$fileDownload(url,'123.JPG')
    },

    handleEdit(row) {
      console.log(row);
      //row.id就是事件的id
      C_queryEventsById(row.id, res => {
        console.log(res[0])
        this.detail = res[0]
        // acceptDepartment: "个人业务部"
        // acceptor: "贺文科"
        // acceptorId: "78f35f00-53df-11eb-a072-f9eb1baa49ec"
        // businessCategory: "业务支持"
        // createTime: "2021-1-19"
        // creator: "管理员"
        // creatorId: null
        // department: "董监办"
        // description: "222"
        // filePath: "public\uploads\20210119\file-1611022038006.JPG"
        // id: "0e98cb50-59fb-11eb-b7be-f5d427bac105"
        // isMSG: null
        // phoneNumber: "13000000000"
        // priority: "一般"
        // status: "等待接受"
        // title: "2222"
      })

      // let data = JSON.parse(localStorage.getItem("BTData"))
      // console.log(data);


      // this.tableData[0] = {}
      // this.tableData[0].title = ''
      // this.tableData[0].sponsor = ''
      // this.tableData[0].department = ''
      // this.tableData[0].id = '1'
      // this.tableData[0].now = '12313131'
      // this.tableData[0].date = '2020-12-31'
      // this.tableData=[]
      // localStorage.setItem('BTData', JSON.stringify(this.tableData));
      // localStorage.clear();
      // console.log(this.tableData);
      this.dialogVisible = true

      // localStorage.setItem('BTData', JSON.stringify(data));


    },
    agree() {

      // console.log(row)
      this.dialogVisible = false

      this.$message({
        message: '审批成功——同意',
        type: 'success',
        center: true
      });
    },
    refuse() {
      this.dialogVisible = false

      this.$message({
        message: '审批成功——拒绝',
        type: 'success',
        center: true
      });
    }



  },
  mounted: function () {
    // console.log(this.$store.name)
    // // let Todo = document.getElementsByClassName('Todo')
    // // console.log('todo')
    // // if (Todo.length > 0) {
    // //   document.getElementsByTagName("html")[0].removeAttribute("class", "html");
    // //   document.getElementsByTagName("body")[0].removeAttribute("class", "body");
    // // }

    // JSON.parse(localStorage.getItem("login"))
    // // console.log(JSON.parse(localStorage.getItem("login")).userName)

    // if (JSON.parse(localStorage.getItem("login")).userName != 'admin') {
    //   // console.log(JSON.parse(localStorage.getItem("BTData")))

    //   let data = JSON.parse(localStorage.getItem("BTData"))
    //   this.tableData[0] = {}
    //   this.tableData[0].title = '出差申请'
    //   this.tableData[0].sponsor = data.name
    //   this.tableData[0].department = data.department
    //   this.tableData[0].id = '1'
    //   this.tableData[0].now = '待审批'
    //   this.tableData[0].date = '2020-12-31'


    //   let data1 = JSON.parse(localStorage.getItem("TrainningData"))
    //   this.tableData[1] = {}
    //   this.tableData[1].title = '培训申请'
    //   this.tableData[1].sponsor = '小明'
    //   this.tableData[1].department = data.department
    //   this.tableData[1].id = '2'
    //   this.tableData[1].now = '待审批'
    //   this.tableData[1].date = '2020-12-31'

    // }
    //
    C_queryTodoEvents(this.$store.id, res => {
      console.log(res)
      this.tableData = res
    })


  }
}
</script>

<style lang="scss" scoped>
.inline {
  display: inline-block;
}
</style>