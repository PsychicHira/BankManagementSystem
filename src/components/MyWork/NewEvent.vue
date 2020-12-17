<template>
  <div class="NewEvent">
    <el-card class="box-card">

      <h3>新建事件</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="附加文件">
          <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>

        <el-form-item label="事件描述">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>

        <el-form-item label="业务分类" :inline="true">
          <el-select v-model="form.region" placeholder="请选择业务分类">
            <el-option label="业务支持" value="21312"></el-option>
            <el-option label="项目管理" value="123123"></el-option>
            <el-option label="会议餐饮审批" value="shang1hai"></el-option>
            <el-option label="会议审批" value="shan2ghai"></el-option>
            <el-option label="车辆申请" value="bei3jing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="优先级" :inline="true">
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

        <el-form-item label="创建人员">
          <el-input v-model="form.name" class="shortInput"></el-input>
        </el-form-item>

        <el-form-item label="电话号码">
          <el-input v-model="form.name" class="shortInput"></el-input>
        </el-form-item>

        <el-form-item label="受理机构">
          <el-input v-model="form.name" class="shortInput" placeholder="请选择受理机构"></el-input>
          <el-input v-model="form.name" class="shortInput"></el-input>
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
.shortInput{
  width:217px;
}
</style>