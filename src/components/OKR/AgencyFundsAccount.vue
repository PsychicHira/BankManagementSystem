<template>
  <div class="AgencyFundsAccount">
    <el-card class="box-card">

      <h3>国开项目账户管理</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="110px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="项目名称">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="项目类别">
              <el-input v-model="form.type"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="状态">
              <el-select v-model="form.status" placeholder="请选择" class="w100">
                <el-option label="正常" value="1"></el-option>
                <el-option label="完结" value="2"></el-option>
                <el-option label="删除" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

      <el-form ref="form" :model="add" label-width="110px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="项目类别">
              <el-select v-model="add.type" placeholder="请选择" class="w100">
                <el-option label="那曲项目类别" value="1"></el-option>
                <el-option label="经开项目1类别" value="2"></el-option>
                <el-option label="经开项目2类别" value="3"></el-option>
                <el-option label="固定资产" value="4"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="地点">
              <el-select v-model="add.address" placeholder="请选择" class="w100">
                <el-option label="拉萨" value="1"></el-option>
                <el-option label="林芝" value="2"></el-option>
                <el-option label="山南" value="3"></el-option>
                <el-option label="那区" value="4"></el-option>
                <el-option label="经开" value="5"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="工程名称">
              <el-input v-model="add.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="实施主体名称">
              <el-input v-model="add.main"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="账户名称">
              <el-input v-model="add.accountTitle"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="账号">
              <el-input v-model="add.account"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="账号状态">
              <el-input v-model="add.accountStatus"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="经办网点">
              <el-input v-model="add.netAddress"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="牵头负责人">
              <el-input v-model="add.charge"></el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-form-item>
          <el-button type="success" @click="onSubmit">新增</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" stripe>
        <el-table-column prop="id" label="ID">
        </el-table-column>
        <el-table-column prop="date" label="项目类别">
        </el-table-column>
        <el-table-column prop="title" label="工程名称">
        </el-table-column>
        <el-table-column prop="name" label="实施主体名称">
        </el-table-column>
        <el-table-column prop="address" label="账户名称">
        </el-table-column>
        <el-table-column prop="address" label="账号">
        </el-table-column>
        <el-table-column prop="address" label="所在区域">
        </el-table-column>
        <el-table-column prop="address" label="经办网点">
        </el-table-column>
      </el-table>
    </el-card>
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
      },
      add:{

      },
      tableData: {

      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.form);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
