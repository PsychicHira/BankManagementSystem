<template>
  <div class="NewEvent">
    <el-card class="box-card">

      <h3>新建事件</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :model="form" :rules="rules" label-width="80px">

        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="事件描述" prop="desc">
          <el-input type="textarea" v-model="form.desc" :rows="4"></el-input>
        </el-form-item>

        <el-form-item label="附加文件">
          <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :limit="1" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false" :on-change="changeFile">
            <el-button slot="trigger" size="" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="" type="success" @click="submitUpload($event)">上传到服务器</el-button>
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
              <el-input v-model="form.creator"></el-input>
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
              <el-input v-model="form.phoneNumber"></el-input>
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
          <el-button>重置</el-button>
          <a href="http://localhost:3000/public/files/" download="123.txt">123</a>
          <button type="button" id="btn1" @click="downloadfile('http://localhost:3000/public/files/123.txt')">方法下载</button>
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
  queryPriority as C_queryPriority
} from '../../common/methods.js'


export default {
  name: 'NewEvent',
  data() {
    return {
      form: {
        title: '',
        desc: '',
        businessCategory: '',
        priority: '',
        creator: '',
        department: '',
        phoneNumber: '',
        isMSG: '',
        acceptDepartment: '',
        acceptor: '',
      },
      fileList: [],
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
        desc: [
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
      },
    }
  },
  methods: {
    downloadfile(url) {
      this.$fileDownload(url, '1232.txt')
    },


    commitEvent(form) {
      console.log('submit!');
      console.log(this.form);
      //验证必填项是否填了，没填就弹出红色提醒
      this.$refs[form].validate((valid) => {
        if (valid) {
          // alert('submit!');
        } else {
          console.log('error submit!!');
          // return false;
        }
      });
      if (this.form.name == '' || this.form.sex == '' || this.form.department == '') {
        this.$message({
          message: '请输入必填项',
          type: 'warning'
        });
        return
      }

      // submitUpload()
      console.log(this.form)

      this.$axios.post('/events/addNewEvent', this.form).then(res => {
        console.log(res)
      })
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
        // console.log(res)
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
          res.forEach((element, index) => {
            // console.log(index)
            // console.log(element)
            //受理人员的options
            this.acceptors.push({
              value: index + 1,
              label: element.name
            })
          });
        }
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
        this.form.isMSG = '1'
      } else {
        this.form.isMSG = '0'
      }
    },


    //文件上传
    submitUpload() {
      // this.$refs.upload.submit();
      const formData = new FormData()
      // console.log(this.$refs.upload.uploadFiles[0])
      const file = this.fileList[0]
      console.log(file)

      let config = {
        //必须
        headers: {
          "Content-Type": "multipart/form-data"
        },
      }
      if (!file) { // 若未选择文件
        alert('请选择文件')
        return
      }
      formData.append('file', file.raw)
      this.$axios.post('/upload', formData, config).then(res => {
        console.log(res)
        console.log(res.data.path)//图片的路径
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    changeFile(file, fileList) {
      // file是最新选择的文件，fileList是已经选择过的文件，包含第一个file，也就是当前file
      console.log(file)
      console.log(fileList)
      this.fileList = fileList
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
          //所属部门的options
          this.departments.push({
            value: element.number,
            label: element.departmentName
          })
          //受理部门的options
          this.acceptDepartments.push({
            value: element.number,
            label: element.departmentName
          })
        });
      }
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
    })

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
    })

  }
}
</script>

<style lang="scss" scoped>
</style>