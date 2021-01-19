<template>
  <div class="NewEvent">
    <el-card class="box-card">

      <h3>新建事件</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" :rules="rules" label-width="80px">

        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="事件描述" prop="description">
          <el-input type="textarea" v-model="form.description" :rows="4"></el-input>
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
            <el-form-item label="业务分类" prop="businessCategory">
              <el-select v-model="form.businessCategory" placeholder="请选择部门" autocomplete="on" class="w100" @change="selectBusinessCategory">
                <el-option v-for="item in businessCategories" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="优先级" prop="priority">
              <el-select v-model="form.priority" placeholder="请选择部门" autocomplete="on" class="w100" @change="selectPriority">
                <el-option v-for="item in priorities" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="创建人员" prop="creator">
              <el-input v-model="form.creator" :disabled="true"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="所属部门" prop="department">
              <el-select v-model="form.department" placeholder="请选择部门" autocomplete="on" class="w100" @change="selectDepartment" :disabled="true">
                <el-option v-for="item in departments" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="电话号码" prop="phoneNumber">
              <el-input v-model="form.phoneNumber" :disabled="true"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item>
              <el-checkbox-group v-model="form.isMSG" prop="isMSG">
                <el-checkbox label="完成后短信通知" name="type" @change="changeMSG"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>

        </el-row>

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
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="commitEvent('form')">提交事件</el-button>
          <el-button @click="clear">重置</el-button>
          <!-- <a href="http://localhost:3000/public/files/" download="123.txt">123</a> -->
          <!-- <button type="button" id="btn1" @click="downloadfile('http://localhost:3000/public/files/123.txt')">方法下载</button> -->
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {
  queryDepartment as C_queryDepartment,
  queryPersonnnelByDepartment as C_queryPersonnnelByDepartment,
  queryBusinessCategory as C_queryBusinessCategory,
  queryPriority as C_queryPriority,
  noReturnValJudge,
  submitUpload
} from '../../common/methods.js'


export default {
  name: 'NewEvent',
  data() {
    return {
      form: {
        title: '',
        description: '',
        businessCategory: '',
        priority: '',
        creator: this.$store.name,
        department: this.$store.department,
        phoneNumber: this.$store.phoneNumber,
        isMSG: false,
        acceptDepartment: '',
        acceptor: '',
        uid: this.$store.id
      },
      //发送请求获得的所属部门options
      departments: [],
      //发送请求获得的受理部门options
      acceptDepartments: [],
      //发送请求获得的受理人options
      acceptors: [],
      //发送请求获得的业务分类options
      businessCategories: [],
      //发送请求获得的优先级options
      priorities: [],
      //上传文件列表
      fileList: [
        // { name: '', url: '' },
      ],
      //表单验证项
      rules: {
        title: [
          { required: true, message: '请填写标题', trigger: 'blur' },
        ],
        description: [
          { required: true, message: '请填写事件描述', trigger: 'blur' },
        ],
        businessCategory: [
          { required: true, message: '请选择业务分类', trigger: 'blur' },
        ],
        priority: [
          { required: true, message: '请选择优先级', trigger: 'blur' },
        ],
        creator: [
          { required: true, message: '请填写创建人员', trigger: 'blur' },
        ],
        department: [
          { required: true, message: '请选择所属部门名称', trigger: 'blur' },
        ],
        phoneNumber: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
        ],
        acceptDepartment: [
          { required: true, message: '请受理部门', trigger: 'blur' },
        ],
        acceptor: [
          { required: true, message: '请选择受理人', trigger: 'blur' },
        ],
        isMSG: [
          { required: true, message: '请选是否短信通知', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    downloadfile(url) {
      this.$fileDownload(url, '1232.txt')
    },
    //重置
    clear() {
      this.form = {}
    },

    commitEvent(form) {
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
      console.log(1111111)

      //如果上传了文件
      if (this.fileList[0]) {
        //把上传文件函数改为同步，因为里面有上传文件的axios请求
        submitUpload(this.fileList[0], (res) => {
          this.form.filePath = res
        }).then(res => {
          this.$axios.post('/event/addNewEvent', this.form).then(res => {
            noReturnValJudge(res)
            this.clear()
          })
        })
      } else {
        this.$axios.post('/event/addNewEvent', this.form).then(res => {
          noReturnValJudge(res)
          this.clear()
        })
      }

    },

    //选择业务分类option
    selectBusinessCategory(val) {
      console.log(val)

      this.businessCategories.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label
          this.form.businessCategory = ele.label
        }
      })
    },

    //选择优先级option
    selectPriority(val) {
      console.log(val)

      this.priorities.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label
          this.form.priority = ele.label
        }
      })
    },

    //选择所属部门option
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

    //选择受理部门option
    selectAceeptDepartment(val) {
      // console.log(val)
      //每次选择了受理部门，都让受理人清空
      this.acceptors = []
      this.form.acceptor = ''
      //当前选中的部门名称，用来查下属的人员
      let presentDepartment = ''
      //val打印出来departments其中元素的编号，根据编号查label（名字），再把名字给到form提交表单中
      this.acceptDepartments.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label
          this.form.acceptDepartment = ele.label
          presentDepartment = ele.label
        }
      })
      console.log(presentDepartment)
      C_queryPersonnnelByDepartment(presentDepartment, (res) => {
        res.forEach((element, index) => {
          // console.log(index)
          // console.log(element)
          //受理人员的options
          this.acceptors.push({
            value: index + 1,
            label: element.name
          })
        });
      })
    },

    //选择受理人option
    selectAceeptor(val) {
      // console.log(val)
      //val打印出来departments其中元素的编号，根据编号查label（名字），再把名字给到form提交表单中
      this.acceptors.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label
          this.form.acceptor = ele.label
        }
      })
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

  },
  mounted: function () {
    //获取部门
    C_queryDepartment((res) => {
      res.forEach(element => {
        // //所属部门的options
        // this.departments.push({
        //   value: element.number,
        //   label: element.departmentName
        // })
        //受理部门的options
        this.acceptDepartments.push({
          value: element.number,
          label: element.departmentName
        })
      });
    });

    //  获取业务分类
    C_queryBusinessCategory(res => {
      if (res == 0) {
        this.$message({
          message: '数据库请求失败',
          type: 'error',
          duration: 3000
        });
      } else if (res == 2) {
        this.$message({
          message: '发生错误',
          type: 'error',
          duration: 3000
        });
      } else {
        // console.log(res)
        res.forEach((element, index) => {
          //所属部门的options
          this.businessCategories.push({
            value: index + 1,
            label: element.businessCategory
          })
        })
      }
    });

    //查询优先级
    C_queryPriority(res => {
      if (res == 0) {
        this.$message({
          message: '数据库请求失败',
          type: 'error',
          duration: 3000
        });
      } else if (res == 2) {
        this.$message({
          message: '发生错误',
          type: 'error',
          duration: 3000
        });
      } else {
        // console.log(res)
        res.forEach((element, index) => {
          //所属部门的options
          this.priorities.push({
            value: index + 1,
            label: element.priority
          })
        })
      }
    });

    let a = new Date('2021-1-15')
    let b = new Date('2021-1-16')
    let c = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    // console.log(a < b)
    // console.log(a > b)
    // console.log(a == b)
    let d = new Date()
    d = d.setDate(new Date(d).getDate() + 1)
    d = new Date(d).getFullYear() + '-' + (new Date(d).getMonth() + 1) + '-' + new Date(d).getDate();
    console.log(d)

  }
}
</script>

<style lang="scss" scoped>
</style>