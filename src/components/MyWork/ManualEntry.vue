<template>
  <div class="ManualEntry">
    <el-card class="box-card">
      <h3>手工录入事件</h3>
      <el-divider class="el-divider"></el-divider>

      <el-form ref="form" :rules="rules" :model="form" label-width="110px">

        <el-row>
          <el-col :span="6">
            </el-form-item>
            <el-form-item label="机构名称" prop="department">
              <el-input v-model="form.department" disabled></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系人员" prop="creator">
              <el-input v-model="form.creator" disabled></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="联系电话" prop="phoneNumber">
              <el-input v-model="form.phoneNumber" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>

          <el-col :span="12">
            </el-form-item>
            <el-form-item label="联系地址" prop="address">
              <el-input v-model="form.address" placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>

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

        <el-form-item label="处理意见" prop="opinion">
          <el-input type="textarea" v-model="form.opinion" :rows="4"></el-input>
        </el-form-item>

        <el-row>
          <el-col :span="6">
            <el-form-item label="信息来源" :inline="true" prop="informationSource">
              <el-select v-model="form.informationSource" placeholder="请选择部门" autocomplete="on" class="w100" @change="selectInformationSource">
                <el-option v-for="item in informationSources" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="18">
            <el-form-item label="流转方式" prop="transferWay">
              <el-radio-group v-model="form.transferWay" @change="selectTransferWay">
                <el-radio v-for="item in transferWays" :key="item.value" :label="item.label" :value="item.value"></el-radio>
                <!-- <el-radio label="转发"></el-radio>
            <el-radio label="协同工作"></el-radio> -->
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
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
              <el-form-item label="数量等级" prop="quantity">
                <el-input v-model="form.quantity"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item>
                <el-checkbox-group v-model="form.knowledge" prop="knowledge">
                  <el-checkbox label="知识库预选项" name="type" @change="changeKnowledge"></el-checkbox>
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
import {
  queryDepartment as C_queryDepartment,
  queryPersonnnelByDepartment as C_queryPersonnnelByDepartment,
  submitUpload,
  queryBusinessCategory as C_queryBusinessCategory,
  queryPriority as C_queryPriority,
  queryInformationSource as C_queryInformationSource,
  // noReturnValJudge,
  queryManualEntryTransfer as C_queryManualEntryTransfer

} from '../../common/methods.js'
export default {
  name: 'NewEvent',
  data() {
    return {
      form: {
        department: this.$store.department,
        creator: this.$store.name,
        phoneNumber: this.$store.phoneNumber,
        address: '',
        title: '',
        description: '',
        businessCategory: '',
        priority: '',
        opinion: '',
        informationSource: '',
        transferWay: '',
        acceptDepartment: '',
        acceptor: '',
        quantity: '',
        knowledge: ''
      },
      fileList: [],
      businessCategories: [],
      priorities: [],
      acceptDepartments: [],
      acceptors: [],
      informationSources: [],
      transferWays: [],
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
          { required: true, message: '请选择所属部门', trigger: 'blur' },
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
        informationSource: [
          { required: true, message: '请选择信息来源', trigger: 'blur' },
        ],
        transferWay: [
          { required: true, message: '请选择流转方式', trigger: 'blur' },
        ],
        opinion: [
          { required: true, message: '请输入处理意见', trigger: 'blur' },
        ],
        address: [
          { required: true, message: '请输入联系地址', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.form);
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

    //选择信息来源option
    selectInformationSource(val) {
      console.log(val)
      this.informationSources.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label
          this.form.informationSource = ele.label
        }
      })
    },

    //选择流转方式option
    selectTransferWay(val) {
      console.log(val)
      this.transferWays.forEach(ele => {
        if (ele.value == val) {
          // console.log(ele.label)
          // this.department = ele.label
          this.form.transferWay = ele.label
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

    //知识库预选项的checkBox
    changeKnowledge(val) {
      //勾选val是true，取消勾选val是false
      console.log(val)
      if (val == true) {
        this.form.knowledge = true
      } else {
        this.form.knowledge = false
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

  },
  mounted: function () {
    //查询部门
    C_queryDepartment(res => {
      res.forEach(element => {
        this.acceptDepartments.push({
          value: element.number,
          label: element.departmentName
        })
      });
    });

    //查询业务分类
    C_queryBusinessCategory(res => {
      res.forEach(element => {
        this.businessCategories.push({
          value: element.id,
          label: element.businessCategory
        })
      });
    });

    //查询优先级
    C_queryPriority(res => {
      res.forEach(element => {
        this.priorities.push({
          value: element.id,
          label: element.priority
        })
      });
    });

    //查找信息来源
    C_queryInformationSource(res => {
      res.forEach(element => {
        this.informationSources.push({
          value: element.id,
          label: element.informationSource
        })
      });
    });

    //查询手工录入——流转方式
    C_queryManualEntryTransfer(res => {
      res.forEach(element => {
        this.transferWays.push({
          value: element.id,
          label: element.transferWay
        })
      });
    });


  }
}
</script>

<style lang="scss" scoped>
.margin {
  margin-right: 15px;
}
</style>