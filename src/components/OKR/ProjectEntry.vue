<template>
  <div class="ProjectEntry">
    <el-card class="box-card">

      <h3>新项目录入</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="120px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="项目名称">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="实施主体">
              <el-input v-model="form.main"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="所属集团">
              <el-input v-model="form.department"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="产品">
              <el-input v-model="form.product"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="金额">
              <el-input v-model="form.money" placeholder="单位：万元"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="经营主责任人">
              <el-input v-model="form.charge"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="项目经理">
              <el-input v-model="form.manager"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="材料申报责任人">
              <el-input v-model="form.declaration"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item>
              <el-checkbox-group v-model="form.SMS">
                <el-checkbox label="入日志" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData">

        <el-table-column label="序号">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.order }}</span>
          </template>
        </el-table-column>

        <el-table-column label="节点名称">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
          </template>
        </el-table-column>

        <el-table-column label="执行人">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.executive }}</span>
          </template>
        </el-table-column>

        <el-table-column label="督办人">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.supervise }}</span>
          </template>
        </el-table-column>

        <el-table-column label="职责">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.duty }}</span>
          </template>
        </el-table-column>

        <el-table-column label="主要负责人">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.charge }}</span>
          </template>
        </el-table-column>

        <el-table-column label="截至日期">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </el-card>

    <!-- 弹窗 -->
    <el-dialog title="录入工作日志" :visible.sync="centerDialogVisible" center>
      <el-form :model="form" label-width="100px">

        <el-row>
          <el-col :span="12">
            <el-form-item label="选择业务分类" :label-width="formLabelWidth">
              <el-input v-model="form.category" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="">
              <el-radio-group v-model="form.coordination">
                <el-radio label="无协同"></el-radio>
                <el-radio label="有协同"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="18">
            <el-form-item label="关键词" :label-width="formLabelWidth">
              <el-input v-model="form.words" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item>
              <el-checkbox-group v-model="form.SMS">
                <el-checkbox label="重点工作" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="预计完成时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="工作内容">
          <el-input type="textarea" v-model="form.content" :rows="4"></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="12">
            <el-form-item label="状况">
              <el-radio-group v-model="form.status">
                <el-radio label="未完成"></el-radio>
                <el-radio label="部分完成"></el-radio>
                <el-radio label="完成"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="完成情况">
          <el-input type="textarea" v-model="form.desc" :rows="4"></el-input>
        </el-form-item>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        <el-button @click="centerDialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'NewEvent',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        start: '',
        end: '',
        status: '',
        SMS: ''
      },
      centerDialogVisible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        order: 1.1,
        title: '编写报告',
        executive: '冯洋',

      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        order: 1.2,
        title: '编写',
        executive: '冯洋',

      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        order: 1.3,
        title: '报告',
        executive: '冯洋',

      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        order: 1.4,
        title: '编写报告',
        executive: '冯洋',

      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.form);
    },

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }

  }
}
</script>

<style lang="scss" scoped>
</style>
