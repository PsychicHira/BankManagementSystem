<template>
  <div class="Operations">
    <el-card class="box-card">
      <h3>生产运维录入事件</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="80px">

        <el-row>
          <el-col :span="6">
            <el-form-item label="联系人员">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系电话">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="机构名称">
              <el-input v-model="form.department"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="联系地址">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="问题描述">
          <el-input type="textarea" v-model="form.desc" :rows="4"></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="6">
            <el-form-item label="问题类型">
              <el-select v-model="form.category" placeholder="请选择">
                <el-option label="不选择" value="category1"></el-option>
                <el-option label="交易系统" value="category2"></el-option>
                <el-option label="管理系统" value="category3"></el-option>
                <el-option label="网络" value="category4"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="问题级别">
              <el-select v-model="form.grade" placeholder="请选择">
                <el-option label="不选择" value="grade1"></el-option>
                <el-option label="一般" value="grade2"></el-option>
                <el-option label="中级" value="grade3"></el-option>
                <el-option label="高级" value="grade4"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="处理意见">
          <el-input type="textarea" v-model="form.suggest" :rows="4"></el-input>
        </el-form-item>

        <el-form-item label="信息来源" :inline="true">
          <el-select v-model="form.source" placeholder="请选择信息来源">
            <el-option label="电话传真" value="source1"></el-option>
            <el-option label="维护单" value="source2"></el-option>
            <el-option label="Notes" value="source3"></el-option>
            <el-option label="其他方式" value="source4"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="流转方式">
          <el-radio-group v-model="form.flowing">
            <el-radio label="完成"></el-radio>
            <el-radio label="转发"></el-radio>
            <el-radio label="协同工作"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-row>
          <el-col :span="6">
            <el-form-item label="受理机构">
              <el-input v-model="form.acceptDepartment"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
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
      },
      position: "right"
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

</style>