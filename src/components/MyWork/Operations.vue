<template>
  <div class="ManualEntry">
    <el-card class="box-card">
      <h3>生产运维录入事件</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="80px">

        <el-row>
          <el-col :span="6">
            <el-form-item label="联系人员">
              <el-input v-model="form.title" class="shortInput" placeholder="事件联络人员"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系电话">
              <el-input v-model="form.title" class="shortInput" placeholder="请输入联系电话"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="机构名称">
              <el-input v-model="form.title" class="shortInput" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            </el-form-item>
            <el-form-item label="联系地址">
              <el-input v-model="form.title" class="" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="问题描述">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="6">
            <el-form-item label="问题类型">
              <el-select v-model="form.region" placeholder="请选择业务分类">
                <el-option label="业务支持" value="21312"></el-option>
                <el-option label="项目管理" value="123123"></el-option>
                <el-option label="会议餐饮审批" value="shang1hai"></el-option>
                <el-option label="会议审批" value="shan2ghai"></el-option>
                <el-option label="车辆申请" value="bei3jing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="问题级别">
              <el-select v-model="form.reference" placeholder="请选择优先级">
                <el-option label="一半" value="1"></el-option>
                <el-option label="重要" value="shan4ghai"></el-option>
                <el-option label="严重" value="shandghai"></el-option>
                <el-option label="2天" value="shangfhai"></el-option>
                <el-option label="3天" value="shangghai"></el-option>
                <el-option label="4天" value="shanhghai"></el-option>
                <el-option label="5天" value="shanjghai"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="处理意见">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>

        <el-form-item label="信息来源" :inline="true">
          <el-select v-model="form.region" placeholder="请选择信息来源">
            <el-option label="电话传真" value="shanghai"></el-option>
            <el-option label="维护单" value="shanghai"></el-option>
            <el-option label="Notes" value="shanghai"></el-option>
            <el-option label="其他方式" value="shanghai"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="流转方式">
          <el-radio-group v-model="form.resource">
            <el-radio label="完成"></el-radio>
            <el-radio label="转发"></el-radio>
            <el-radio label="协同工作"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="受理机构">
          <el-input v-model="form.title" class="shortInput" placeholder=""></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
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
.ManualEntry {
  text-align: left !important;
}
.shortInput {
  width: 240px;
}
</style>