<template>
  <div class="NewEvent">
    <el-card class="box-card">

      <h3>事务分类维护</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="120px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="请选择事物大类">
              <el-select v-model="form.region" placeholder="请选择" style="width:100%">
                <el-option label="所有" value="21312"></el-option>
                <el-option label="已完成" value="123123"></el-option>
                <el-option label="部分完成" value="shang1hai"></el-option>
                <el-option label="未完成" value="shan2ghai"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="请选择事物中类">
              <el-select v-model="form.region" placeholder="请选择" style="width:100%">
                <el-option label="所有" value="21312"></el-option>
                <el-option label="已完成" value="123123"></el-option>
                <el-option label="部分完成" value="shang1hai"></el-option>
                <el-option label="未完成" value="shan2ghai"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="3">
            <el-form-item label="事物编号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        

        <el-row>
          <el-col :span="6">
            <el-form-item label="事物名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="事物要求">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="3">
            <el-form-item label="共享标志">
              <el-select v-model="form.region" placeholder="请选择" style="width:100%">
                <el-option label="共享" value="21312"></el-option>
                <el-option label="不共享" value="123123"></el-option>
                <el-option label="无" value="shang1hai"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>


        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="事务编号">
        </el-table-column>
        <el-table-column prop="name" label="事物名称" width="180">
        </el-table-column>
        <el-table-column prop="content" label="事务类别">
        </el-table-column>
        <el-table-column prop="is" label="是否需要审核" width="180">
        </el-table-column>
        <el-table-column prop="require" label="事务要求">
        </el-table-column>
        <el-table-column prop="do" label="处理">
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
        title: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.form);
    },


    //文件上传
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>

<style lang="scss" scoped>
.NewEvent {
  text-align: left !important;
}
.shortInput {
  width: 240px;
}
</style>
