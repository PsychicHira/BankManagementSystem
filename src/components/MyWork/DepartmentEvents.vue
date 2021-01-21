<template>
  <div class="PastEvents">
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
            <el-button size="mini" type="success" @click="toDetail(scope.$index, scope.row)">查看</el-button>
            <el-button size="mini" type="danger" @click="deleteDepartment(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </el-card>

    <!-- <p v-down=`http://localhost:3000/public\uploads\20210120\file-1611125749453.JPG`>点击显示名</p>-->
    <!-- <span v-down='url'>下载</span> -->

    <!-- <a class="btn btn-success btn-sm" href="http://localhost:3000/public\uploads\20210120\file-1611125749453.JPG" download=""  title="下载"  mce_href="#"><i class="fa fa-arrow-circle-down"></i>111</a>  -->
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
              <el-link type="primary"><span v-if="filePath" v-down='filePath'>点击下载附件</span></el-link>
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
  queryDepartment as C_queryDepartment,
  queryEventStatus as C_queryEventStatus,
  queryPastEvents as C_queryPastEvents,
  queryEventsById as C_queryEventsById
} from '../../common/methods.js'
export default {
  name: 'Todo',
  data() {
    return {
      url: 'public\\uploads\\20210120\\file-1611125749453.JPG',
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
      uid: this.$store.id,
      form: {
        string: '',
        department: '',
        startTime: '',
        endTime: '',
        status: ''
      },
      statuses: [],
      departments: [],
      dialogVisible: false,
      detail: {
        title: '',
        creator: '',
        tansferWay: '1'
      },
      tansferWay: '1',
      baseUrl: '',
      filePath: '',
      uid: this.$store.id
    };
  },
  methods: {
    downloadfile(url) {
      console.log(url)
      // this.$fileDownload(url,'123.JPG')
      window.location.href = `http://localhost:3000/public\\uploads\\20210120\\file-1611125749453.JPG`
    },
    //查询
    select() {
      this.$axios.get(`/pastEvents?string=${this.form.string}&department=${this.form.department}&status=${this.form.status}&startTime=${this.form.startTime ? this.form.startTime : ''}&endTime=${this.form.endTime ? this.form.endTime : ''}&uid=${this.uid}`).then(res => {
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

    //查看详情
    toDetail(index, row) {
      // console.log(index, row);
      //row.id 是词条数据的id
      C_queryEventsById(row.id, res => {
        // console.log(res[0])
        this.detail = res[0]
        // this.detail.filePath.replaceAll("\\\\","\\/")
        console.log(this.detail.filePath)
        this.filePath=this.detail.filePath
        // this.detail.filePath.replaceAll(/'1'/g, "s")
        // if (this.detail.filePath) {
        //   let tem = this.detail.filePath
        //   this.filePath = tem.replaceAll(/\\/g, "\\")
        // }else {
        //   this.filePath=''
        // }


        // console.log('this.filePath')
        // console.log(this.filePath)
        // console.log('this.url')
        // console.log(this.url)



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
      this.dialogVisible = true

    },

    //修改数据
    updata() {

    }
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
    if (this.uid) {
      C_queryPastEvents(res => {
        res.forEach((element, index) => {
          this.tableData.push(element)
        })
      });
    }


    //查询部门
    C_queryDepartment(res => {
      res.forEach((element, index) => {
        this.departments.push({
          value: element.id,
          label: element.departmentName
        })
      })
    });

    // console.log(this.$baseUrl())
    // this.baseUrl=this.$baseUrl()

  }
}
</script>

<style lang="scss" scoped>
.inline {
  display: inline-block;
}
// .el-row{
//   border-bottom: 1px solid black;
// }
</style>