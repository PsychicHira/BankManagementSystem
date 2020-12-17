<template>
  <div class="Todo">
    <el-card class="box-card">
      <h3>往日事件</h3>
      <el-divider class="el-divider"></el-divider>
      <el-table :data="tableData" stripe style="width: 100%">

        <el-table-column prop="id" label="ID">
        </el-table-column>

        <el-table-column prop="title" label="标题">
        </el-table-column>

        <el-table-column prop="name" label="当前环节" width="180">
        </el-table-column>

        <el-table-column prop="date" label="创建时间" width="180">
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
export default {
  name: 'Todo',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          sponsor: 'tom',
          id: 2131231324255,
          title: '事件标题1',
          status:'等待接受'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          sponsor: 'tony',
          id: 56756765,
          title: '事件标题2',
          status:'等待接受'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          sponsor: 'john',
          id: 435435,
          title: '事件标题3',
          status:'等待接受'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          sponsor: 'mike',
          id: 567567567,
          title: '事件标题4',
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