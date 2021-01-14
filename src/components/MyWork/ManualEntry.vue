<template>
  <div class="ManualEntry">
    <el-card class="box-card">
      <h3>手工录入事件</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="110px">

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="机构名称" prop="department">
              <el-input v-model="form.department" placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系人员" prop="name">
              <el-input v-model="form.name" placeholder="事件联络人员"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系电话" prop="phoneNumber">
              <el-input v-model="form.phone" placeholder="请输入联系电话"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>

          <el-col :span="12">
            </el-form-item>
            <el-form-item label="联系地址">
              <el-input v-model="form.address" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="事件描述">
          <el-input type="textarea" v-model="form.desc" :rows="4"></el-input>
        </el-form-item>

        <el-form-item label="附加文件">
          <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :limit="1" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false" :on-change="changeFile">
            <el-button slot="trigger" size="" type="primary">选取文件</el-button>
            <!-- <el-button style="margin-left: 10px;" size="" type="success" @click="submitUpload($event)">上传到服务器</el-button> -->
            <div slot="tip" class="el-upload__tip">多文件请打包成压缩包</div>
          </el-upload>
        </el-form-item>

        <el-row>
          <el-col :span="6">
            <el-form-item label="业务分类">
              <el-select v-model="form.category" placeholder="请选择业务分类" class="w100">
                <el-option label="业务支持" value="category1"></el-option>
                <el-option label="项目管理" value="category2"></el-option>
                <el-option label="会议餐饮审批" value="category3"></el-option>
                <el-option label="会议审批" value="category4"></el-option>
                <el-option label="车辆审批" value="category5"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="优先级">
              <el-select v-model="form.reference" placeholder="请选择优先级" class="w100">
                <el-option label="一半" value="reference1"></el-option>
                <el-option label="重要" value="reference2"></el-option>
                <el-option label="严重" value="reference3"></el-option>
                <el-option label="2天" value="reference4"></el-option>
                <el-option label="3天" value="reference5"></el-option>
                <el-option label="4天" value="reference6"></el-option>
                <el-option label="5天" value="reference7"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-form-item label="处理意见">
          <el-input type="textarea" v-model="form.sugguest" :rows="4"></el-input>
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
            <el-radio label="进一步处理"></el-radio>
            <el-radio label="请示"></el-radio>
            <el-radio label="转发"></el-radio>
            <el-radio label="协同工作"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-row>
          <!-- <el-form-item label="受理机构">

            <el-col class="shortInput margin">
              <el-form-item label="人员">
                <el-input v-model="form.acceptName"></el-input>
              </el-form-item>
            </el-col>
            <el-col class="shortInput margin">
              <el-form-item label="业务分类">
                <el-input v-model="form.acceptCategory"></el-input>
              </el-form-item>
            </el-col>
            <el-col class="shortInput margin">
              <el-form-item label="数量等级">
                <el-input v-model="form.acceptNum"></el-input>
              </el-form-item>
            </el-col>
            <el-checkbox-group v-model="form.option">
              <el-checkbox label="知识库预选项" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item> -->
          <el-row>
            <el-col :span="6">
              <el-form-item label="受理部门" prop="acceptDepartment">
                <el-select v-model="form.acceptDepartment" placeholder="请选择部门" autocomplete="on" class="w100" @change="selectAceeptDepartment">
                  <el-option v-for="item in acceptDepartments" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item label="受理人" prop="acceptor">
                <el-select v-model="form.acceptor" placeholder="请选择部门" autocomplete="on" class="w100" @change="selectAceeptor">
                  <el-option v-for="item in acceptors" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item label="数量等级">
                <el-input v-model="form.acceptNum"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="6">
            <el-form-item>
              <el-checkbox-group v-model="form.isMSG" prop="isMSG">
                <el-checkbox label="知识库预选项" name="type" @change="changeMSG"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
          </el-row>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">创建</el-button>
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
      position: "right",
      fileList: [],
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
      //删除文件就把值给空
      this.fileList = []
    },
    handlePreview(file) {
      console.log(file);
    },
    changeFile(file, fileList) {
      // file是最新选择的文件，fileList是已经选择过的文件，包含第一个file，也就是当前file
      console.log(file)
      console.log(fileList)
      this.fileList = fileList
    },
  }
}
</script>

<style lang="scss" scoped>
.margin {
  margin-right: 15px;
}
</style>