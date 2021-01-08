<template>
  <div class="Todo">
    <el-card class="box-card">
      <h3>待办事件</h3>
      <el-divider class="el-divider"></el-divider>

      <el-table :data="tableData">


        <el-table-column prop="id" label="ID">
        </el-table-column>

        <el-table-column prop="title" label="标题">
        </el-table-column>

        <el-table-column prop="now" label="当前环节">
        </el-table-column>

        <el-table-column prop="date" label="创建时间">
        </el-table-column>

        <el-table-column prop="sponsor" label="发起人">
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
    <el-dialog title="" :visible.sync="centerDialogVisible" center>
      <el-form :model="appro" label-width="100px">

        <el-form-item label="审批意见">
          <el-input type="textarea" v-model="appro.desc" :rows="4"></el-input>
        </el-form-item>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="agree()">同 意</el-button>
        <el-button type="danger" @click="refuse()">拒 绝</el-button>
        <el-button @click="centerDialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: 'Todo',
  data() {
    return {
      appro: {},
      visible: false,
      tableData: [

      ],
      centerDialogVisible: false,
    };
  },
  methods: {

    handleEdit(row) {
      console.log(row);


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
      console.log(this.tableData);
      this.centerDialogVisible = true

      // localStorage.setItem('BTData', JSON.stringify(data));


    },
    agree() {

      // console.log(row)
      this.centerDialogVisible = false

      this.$message({
        message: '审批成功——同意',
        type: 'success',
        center: true
      });
    },
    refuse() {
      this.centerDialogVisible = false

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




  }
}
</script>

<style lang="scss" scoped>
</style>