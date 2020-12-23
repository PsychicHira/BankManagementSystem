<template>
  <div class="MyEvents">
    <el-card class="box-card">
      <h3>我的事件</h3>
      <el-divider class="el-divider"></el-divider>
      <el-table :data="tableData" stripe style="width: 100%">

        <el-table-column prop="id" label="ID">
        </el-table-column>

        <el-table-column prop="title" label="标题">
        </el-table-column>

        <el-table-column prop="now" label="当前环节" width="180">
        </el-table-column>

        <el-table-column prop="date" label="创建时间" width="180">
        </el-table-column>

        <el-table-column prop="sponsor" label="发起人" width="180">
        </el-table-column>

        <el-table-column prop="department" label="发起机构" width="180">
        </el-table-column>

        <el-table-column prop="status" label="状态">
        </el-table-column>

      </el-table>
    </el-card>
  </div>

</template>

<script>
export default {
  name: 'Todo',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          now: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          id: 2131231324255,
          title: '事件标题1',
          sponsor:'小明',
          department:'信息技术部',
          status:'等待接受'
        }, {
          date: '2016-05-04',
          now: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          id: 56756765,
          title: '事件标题2',
          sponsor:'小明',
          department:'信息技术部',
          status:'等待接受'
        }, {
          date: '2016-05-01',
          now: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          id: 435435,
          title: '事件标题3',
          sponsor:'小明',
          department:'信息技术部',
          status:'等待接受'
        }, {
          date: '2016-05-03',
          now: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          id: 567567567,
          title: '事件标题4',
          sponsor:'小明',
          department:'信息技术部',
          status:'等待接受'
        }
      ]
    };
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>