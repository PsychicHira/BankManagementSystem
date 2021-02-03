<template>
  <div class="Announce">
    <el-card class="box-card">
      <h3>公告发布</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="公告标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="公告内容" prop="content">
          <el-input type="textarea" v-model="form.content" :rows="4"></el-input>
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
            <el-form-item label="开始时间" prop="startTime">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.startTime" style="width: 100%;" @change="getStartTime"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="结束时间" prop="endTime">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.endTime" style="width: 100%;" @change="getEndTime"></el-date-picker>
            </el-form-item>
          </el-col>
          <!-- <el-col>
            <el-form-item label="公告时间" prop="startTime">
              <el-date-picker v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" @change="getTime">
              </el-date-picker>
            </el-form-item>
          </el-col> -->
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="发布人员" prop="creator">
              <el-input v-model="form.creator" disabled></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系电话" prop="phoneNumber">
              <el-input v-model="form.phoneNumber" disabled></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="影响范围" prop="influenceArea">
              <el-select v-model="form.influenceArea" placeholder="请选择影响范围" autocomplete="on" class="w100">
                <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
                <el-option v-for="item in influenceArea" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                <el-option label="西藏银行" value="influenceArea1"></el-option>
                <el-option label="营业机构" value="influenceArea2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item>
              <el-checkbox-group v-model="form.isMSG">
                <el-checkbox label="短信通知" name="type" @change="changeMSG"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="commitAnnounce('form')">发布公告</el-button>
          <el-button @click="clear">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {
  submitUpload
} from '../../common/methods.js'
export default {
  name: 'NewEvent',
  data() {
    return {
      form: {
        title: '',
        content: '',
        filePath: '',
        startTime: '',
        endTime: '',
        creator: this.$store.name,
        phoneNumber: this.$store.phoneNumber,
        isMSG: false,
        influenceArea: '',
        uid: this.$store.id,
      },
      fileList: [],
      influenceArea: [],
      //表单验证项
      rules: {
        title: [
          { required: true, message: '请填写标题', trigger: 'blur' },
        ],
        content: [
          { required: true, message: '请填写内容', trigger: 'blur' },
        ],
        startTime: [
          { required: true, message: '请选择开始时间', trigger: 'blur' },
        ],
        endTime: [
          { required: true, message: '请选择结束时间', trigger: 'blur' },
        ],
        creator: [
          { required: true, message: '请填写发布人员', trigger: 'blur' },
        ],
        phoneNumber: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
        ],
        influenceArea: [
          { required: true, message: '请选择影响范围', trigger: 'blur' },
        ]
      },
    }
  },
  methods: {
    //重置
    clear() {
      this.form.title = '';
      this.form.content = '';
      this.form.filePath = '';
      this.form.startTime = '';
      this.form.endTime = '';
      this.form.creator = '';
      this.form.phoneNumber = '';
      this.form.isMSG = false;
      this.form.influenceArea = '';
      this.fileList = []
    },

    commitAnnounce(form) {
      //设置一个变量，用来终止提交，不然下面一个验证函数return无效，只是终止它自己，不终止这个提交功能
      //1表示继续，0表示终止
      let go = 1
      console.log(this.form);
      //验证必填项是否填了，没填就弹出红色提醒
      this.$refs[form].validate((valid) => {
        if (valid) {
          // alert('submit!');
        } else {
          console.log('error submit!!');
          go = 0
        }
      });
      if (go == 0) return
      //如果上传了文件
      if (this.fileList[0]) {
        //把上传文件函数改为同步，因为里面有上传文件的axios请求
        submitUpload(this.fileList[0], (res) => {
          this.form.filePath = res
        }).then(res => {
          this.$axios.post('/announce/add', this.form).then(res => {
            // console.log(res)
          if (res.data.code == 0) {
            this.$message({
              message: '数据库请求失败或无数据',
              type: 'error',
              duration: 3000
            });
          } else if (!res.data.code) {
            this.$message({
              message: res.data,
              type: 'error',
              duration: 3000
            });
          } else {
            this.$message({
              message: '提交成功',
              type: 'success',
              duration: 3000
            });
            this.clear()
          }
          })
        }).catch(err=>{
          console.log(err)
        })
      } else {
        this.$axios.post('/announce/add', this.form).then(res => {
          // console.log(res)
          if (res.data.code == 0) {
            this.$message({
              message: '数据库请求失败或无数据',
              type: 'error',
              duration: 3000
            });
          } else if (!res.data.code) {
            this.$message({
              message: res.data,
              type: 'error',
              duration: 3000
            });
          } else {
            this.$message({
              message: '提交成功',
              type: 'success',
              duration: 3000
            });
            this.clear()
          }
        }).catch(err=>{
          console.log(err)
        })
      }

    },

    //获取开始时间
    getStartTime(val) {
      this.form.startTime = new Date(val).getFullYear() + '-' + (new Date(val).getMonth() + 1) + '-' + new Date(val).getDate();
      console.log(this.form.startTime)
    },

    //获取结束时间
    getEndTime(val) {
      this.form.endTime = new Date(val).getFullYear() + '-' + (new Date(val).getMonth() + 1) + '-' + new Date(val).getDate();
      console.log(this.form.endTime)
    },

    //完成后是否短信通知的checkBox
    changeMSG(val) {
      //勾选val是true，取消勾选val是false
      console.log(val)
      if (val == true) {
        this.form.isMSG = true
      } else {
        this.form.isMSG = false
      }
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
</style>