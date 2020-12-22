<template>
  <div class="NewEvent">
    <el-card class="box-card">

      <h3>日志查询</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="创建人员">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="电话号码">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="开始时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="结束时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="状态">
              <el-select v-model="form.region" placeholder="请选择状态">
                <el-option label="所有" value="21312"></el-option>
                <el-option label="已完成" value="123123"></el-option>
                <el-option label="部分完成" value="shang1hai"></el-option>
                <el-option label="未完成" value="shan2ghai"></el-option>
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
        <el-table-column prop="id" label="序号">
        </el-table-column>
        <el-table-column prop="date" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="title" label="工作内容">
        </el-table-column>
        <el-table-column prop="name" label="完成情况" width="180">
        </el-table-column>
        <el-table-column prop="address" label="启示与反思">
        </el-table-column>
        <el-table-column prop="address" label="填写时间">
        </el-table-column>
        <el-table-column prop="address" label="业务分类">
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
