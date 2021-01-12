<template>
  <div class="NewEvent">
    <el-card class="box-card">

      <h3>新建事件</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form":rules="rules" label-width="80px">

        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="事件描述" prop="desc">
          <el-input type="textarea" v-model="form.desc" :rows="4"></el-input>
        </el-form-item>

        <el-form-item label="附加文件">
          <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
            <el-button slot="trigger" size="" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>

        <el-row>
          <el-col :span="6">
            <el-form-item label="业务分类" prop="businessCategory">
              <el-select v-model="form.businessCategory" placeholder="请选择业务分类" class="w100">
                <el-option label="业务支持" value="category1"></el-option>
                <el-option label="项目管理" value="category2"></el-option>
                <el-option label="会议餐饮审批" value="category3"></el-option>
                <el-option label="会议审批" value="category4"></el-option>
                <el-option label="车辆审批" value="category5"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="优先级" prop="reference">
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

        <el-row>
          <el-col :span="6">
            <el-form-item label="创建人员" prop="creator">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="所属部门" prop="department">
              <el-select v-model="form.department" placeholder="请选择部门" autocomplete="on" class="w100" @change="selectDepartment">
                <el-option v-for="item in departments" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="电话号码" prop="phoneNumber">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item>
              <el-checkbox-group v-model="form.isMSG" prop="isMSG">
                <el-checkbox label="完成后短信通知" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="受理部门" prop="department">
              <el-select v-model="form.department" placeholder="请选择部门" autocomplete="on" class="w100" @change="selectDepartment">
                <el-option v-for="item in departments" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="受理人">
              <el-input v-model="form.department"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">创建</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { queryDepartment as C_queryDepartment } from '../../common/methods.js'
export default {
  name: 'NewEvent',
  data() {
    return {
      form: {
        title: '',
        desc: '',
        category: '',
        reference: '',
        name: '',
        department: '',
        phone: '',
        isMSG: '',
      },
      fileList: [],
      //发送请求获得的部门options
      departments: [],
      //表单验证项
      rules: {
        title: [
          { required: true, message: '请选择所属部门名称', trigger: 'blur' },
        ],
        desc: [
          { required: true, message: '请选择所属部门名称', trigger: 'blur' },
        ],
        businessCategory: [
          { required: true, message: '请选择所属部门名称', trigger: 'blur' },
        ],
        reference: [
          { required: true, message: '请选择所属部门名称', trigger: 'blur' },
        ],
        creator: [
          { required: true, message: '请选择所属部门名称', trigger: 'blur' },
        ],
        department: [
          { required: true, message: '请选择所属部门名称', trigger: 'blur' },
        ],
        phoneNumber: [
          { required: true, message: '请选择所属部门名称', trigger: 'blur' },
        ],
        acceptDepartment: [
          { required: true, message: '请选择所属部门名称', trigger: 'blur' },
        ],
        acceptor: [
          { required: true, message: '请选择所属部门名称', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {

    onSubmit() {
      console.log('submit!');
      console.log(this.form);
    },
    //选择部门option
    selectDepartment(val) {
      // console.log(val)
      //val打印出来departments其中元素的编号，根据编号查label（名字），再把名字给到form提交表单中
      this.departments.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label

          this.form.department = ele.label
        }
      })
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
    //获取部门
    C_queryDepartment((res) => {
      if (res == 0) {
        this.$message({
          message: '数据库请求失败',
          type: 'error',
          duration: 3000
        })
      } else if (res == 2) {
        this.$message({
          message: '发生错误',
          type: 'error',
          duration: 3000
        });
      } else {
        res.forEach(element => {
          this.departments.push({
            value: element.number,
            label: element.departmentName
          })
        });
      }
    })
  }
}
</script>

<style lang="scss" scoped>
</style>