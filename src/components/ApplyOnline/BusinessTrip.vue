<template>
  <div class="BusinessTrip">
    <el-card class="box-card">

      <h3>出差申请</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" label-width="150px">

        <el-row>
          <el-col :span="6">
            <el-form-item label="申请部门">
              <el-input v-model="form.department"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="姓名">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系电话">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="申请人类型">
              <el-select v-model="form.type" placeholder="请选择" class="w100">
                <el-option label="主管及以下普通员工" value="主管及以下普通员工"></el-option>
                <el-option label="非主持工作的中层领导" value="非主持工作的中层领导"></el-option>
                <el-option label="部门及分支机构负责人、主持工作人员" value="部门及分支机构负责人、主持工作人员"></el-option>
                <el-option label="复行级领导、行长助理、董事会秘书" value="复行级领导、行长助理、董事会秘书"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="开始时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.start" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="结束时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.end" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="出差地点">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item>
              <el-checkbox-group v-model="form.SMS">
                <el-checkbox label="无差旅费报销" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="离岗期间人员姓名">
              <el-input v-model="form.leaverName"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="离岗期间人员职务">
              <el-input v-model="form.leaverPost"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="出差人职务">
              <el-input v-model="form.BTPost"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="审批人">
              <el-select v-model="form.approve" placeholder="请选择" class="w100">
                <el-option label="刘书宇" value="刘书宇"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="出差人员">
              <el-input v-model="form.BTname"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>

          <el-form-item label="出差事由">
            <el-input type="textarea" v-model="form.desc" :rows="4"></el-input>
          </el-form-item>

          <el-form-item label="附加文件">
            <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
              <el-button slot="trigger" size="mini" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="mini" type="success" @click="submitUpload">上传到服务器</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
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
        department: '',
        name: '',
        phone: '',
        type: '',
        start: '',
        end: '',
        address: '',
        leaverName: '',
        leaverPost: '',
        BTPost: '',
        approve: '',
        desc: '',
        SMS: ''
      },
      fileList: [
        // {
        //   // name: '',
        //   // url: ''
        // }, 
        // {
        //   // name: '',
        //   // url: ''
        // }]
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.form);

      if (JSON.parse(localStorage.getItem("login")).userName == 'admin') {
        console.log(123)
        localStorage.setItem('BTData', JSON.stringify(this.form));

        this.$message({
          message: '提交成功',
          type: 'success',
          center:true
        });
      } else {
        console.log(456)
        this.$message({
          message: '提交成功',
          type: 'success',
          center:true
        });
      }
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
  },
  mounted: function () {
    console.log(JSON.parse(localStorage.getItem("login")).userName)
  }
}
</script>

<style lang="scss" scoped>
</style>