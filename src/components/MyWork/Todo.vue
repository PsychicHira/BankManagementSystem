<template>
  <div class="Todo">
    <el-card class="box-card">
      <h3>待办事件</h3>
      <el-divider class="el-divider"></el-divider>

      <el-table :data="tableData">

        <el-table-column label="ID">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>

        <el-table-column label="标题">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
          </template>
        </el-table-column>

        <el-table-column label="当前环节">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.now }}</span>
          </template>
        </el-table-column>

        <el-table-column label="创建时间">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>

        <el-table-column label="发起人">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.sponsor }}</span>
          </template>
        </el-table-column>

        <el-table-column label="发起机构">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.department }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="success" size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          </template>
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
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 2131231324255,
          title: '事件标题1'
        },
        {
          date: '2016-05-04',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 56756765,
          title: '事件标题2'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-03',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 567567567,
          title: '事件标题4'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },

        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },
        {
          date: '2016-05-01',
          sponsor: '王小虎',
          now: '陈伟',
          department: '总行营业部',
          id: 435435,
          title: '事件标题3'
        },

      ]
    };
  },
  methods: {

    handleEdit(index, row) {
      console.log(index, row);
    },

  },
  mounted: function () {
    // let Todo = document.getElementsByClassName('Todo')
    // console.log('todo')
    // if (Todo.length > 0) {
    //   document.getElementsByTagName("html")[0].removeAttribute("class", "html");
    //   document.getElementsByTagName("body")[0].removeAttribute("class", "body");
    // }

  }
}
</script>

<style lang="scss" scoped>
</style>