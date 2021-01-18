<template>
  <div class="PastEvents">
    <el-card class="box-card">
      <h3>往日事件</h3>
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
              <el-input v-model="form.department"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="开始时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.startTime" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="结束时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.endTime" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="按状态查询">
              <el-select v-model="form.eventStatus" placeholder="按状态查询" autocomplete="on" class="w100" @change="selectEventStatus">
                <el-option v-for="item in eventStatuses" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-form-item>
          <el-button type="primary" @click="select">查询</el-button>
          <el-button @click="clear">重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" stripe style="width: 100%">

        <el-table-column prop="id" label="ID">
        </el-table-column>

        <el-table-column prop="title" label="标题">
        </el-table-column>

        <el-table-column prop="acceptor" label="当前环节" width="180">
        </el-table-column>

        <el-table-column prop="createTime" label="创建时间" width="180">
        </el-table-column>

        <el-table-column prop="sponsor" label="发起人" width="180">
        </el-table-column>

        <el-table-column prop="status" label="状态">
        </el-table-column>

      </el-table>
    </el-card>
  </div>

</template>

<script>
import {
  queryEventStatus as C_queryEventStatus,
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
        // }, {
        //   date: '2016-05-04',
        //   now: '测试事件',
        //   sponsor: 'tony',
        //   id: 56756765,
        //   title: '事件标题2',
        //   status: '等待接受'
        // }, {
        //   date: '2016-05-01',
        //   now: '测试事件2',
        //   sponsor: 'john',
        //   id: 435435,
        //   title: '事件标题3',
        //   status: '等待接受'
        // }, {
        //   date: '2016-05-03',
        //   now: '测试事件3',
        //   sponsor: 'mike',
        //   id: 567567567,
        //   title: '事件标题4',
        //   status: '等待接受'
        // }
      ],
      form: {
        string: '',
        department: '',
        startTime: '',
        endTime: '',
        eventStatus: ''
      },
      eventStatuses:[]
    };
  },
  methods: {
    //查询
    select() {
      
    },

    //重置
    clear() {
      this.form = {}
    },

    //选择查询状态
    selectEventStatus(val){

    }
  },
  mounted: function () {
    //查询事件状态
    C_queryEventStatus(res => {
      res.forEach((element, index) => {
        //所属部门的options
        this.eventStatuses.push({
          value: index + 1,
          label: element.eventStatus
        })
      })
    });



  }
}
</script>

<style lang="scss" scoped>
</style>