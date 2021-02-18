<template>
  <div class="FillInLogs">
    <el-card class="box-card">

      <!-- 往日未完成工作 -->
      <h3>——往日未完成工作——</h3>
      <!-- <el-divider class="el-divider"></el-divider> -->
      <el-table :data="pastLogsTableData" stripe>
        <el-table-column label="序号" width="50">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
          </template>
        </el-table-column>

        <el-table-column label="录入时间" width="100" prop="createTime">
        </el-table-column>

        <el-table-column label="工作内容" prop="content">
        </el-table-column>

        <el-table-column label="完成情况" prop="completionOfProcess">
        </el-table-column>

        <el-table-column label="预计完成时间" width="110" prop="finishTime">
        </el-table-column>

        <el-table-column label="状态" width="90" prop="status">
        </el-table-column>

        <el-table-column label="操作" width="60">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="toDetailLog(scope.$index, scope.row)">查看</el-button>
            <!-- <el-button size="mini" type="danger" @click="deleteDepartment(scope.$index, scope.row)">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>

    </el-card>

    <!-- 今日日志 -->
    <el-card class="box-card">

      <h3>——今日日志——</h3>
      <el-table :data="todayLogsTableData" stripe>
        <el-table-column label="序号" width="50">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
          </template>
        </el-table-column>

        <el-table-column label="录入时间" width="100" prop="createTime">
        </el-table-column>

        <el-table-column label="工作内容" prop="content">
        </el-table-column>

        <el-table-column label="完成情况" prop="completionOfProcess">
        </el-table-column>

        <el-table-column label="预计完成时间" width="110" prop="finishTime">
        </el-table-column>

        <el-table-column label="状态" width="90" prop="status">
        </el-table-column>

        <el-table-column label="操作" width="60">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="toDetailLog(scope.$index, scope.row)">查看</el-button>
            <!-- <el-button size="mini" type="danger" @click="deleteDepartment(scope.$index, scope.row)">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>

    </el-card>

    <el-divider class="el-divider"></el-divider>

    <!-- 已分派未完成工作 -->
    <el-card class="box-card">

      <h3>——已分派未完成工作——</h3>
      <el-table :data="divideLogsTableData" stripe>
        <el-table-column label="序号" width="50">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
          </template>
        </el-table-column>

        <el-table-column label="经办人" width="100" prop="partner">
        </el-table-column>

        <el-table-column label="工作内容" prop="content">
        </el-table-column>

        <el-table-column label="完成情况" prop="completionOfProcess">
        </el-table-column>

        <el-table-column label="预计完成时间" width="110" prop="finishTime">
        </el-table-column>

        <el-table-column label="操作" width="60">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="toDetailLog(scope.$index, scope.row)">查看</el-button>
            <!-- <el-button size="mini" type="danger" @click="deleteDepartment(scope.$index, scope.row)">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-card class="box-card">

      <!-- 录入工作日志 -->
      <h3>————录入工作日志————</h3>
      <el-form ref="form" :model="form" label-width="126px" :rules="rules">

        <el-row>
          <el-col :span="6">
            <el-form-item label="请选择事物大类" prop="affairMain">
              <el-select v-model="form.affairMain" placeholder="请选择事务大类" @change="selectAffairMainClass" class="w100">
                <el-option v-for="(item,index) in affairMainClassOptions" :key="index" :label="item.value+item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="请选择事物中类" prop="affairMiddle">
              <el-select v-model="form.affairMiddle" placeholder="请选择事物中类" @change="selectAffairMiddle" class="w100">
                <el-option v-for="(item,index) in affairMiddleClassOptions" :key="index" :label="item.value+item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="请选择事物" prop="affair">
              <el-select v-model="form.affair" placeholder="请选择事物或直接搜索" @change="selectAffair" class="w100" filterable>
                <el-option v-for="(item,index) in affairOptions" :key="index" :label="item.value+item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="18">
            <el-form-item label="关键词" prop="keyWords">
              <el-input v-model="form.keyWords" autocomplete="on"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item>
              <el-checkbox-group v-model="isImportant">
                <el-checkbox label="重点工作" name="type" @change="isImportantSet"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="预计完成时间" prop="finishTime">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.finishTime" style="width: 100%;" @change="finishTime"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="">
              <el-radio-group v-model="form.isCoorperation" @change="selectCooperation">
                <el-radio label="无协同"></el-radio>
                <el-radio label="有协同"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-form-item label="工作内容" prop="content">
            <el-input type="textarea" v-model="form.content" :rows="4"></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="状况" prop="status">
              <el-radio-group v-model="form.status" @change="selectStatus">
                <el-radio label="未完成"></el-radio>
                <el-radio label="部分完成"></el-radio>
                <el-radio label="完成"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-form-item label="完成情况" prop="completionOfProcess">
            <el-input type="textarea" v-model="form.completionOfProcess" :rows="4"></el-input>
          </el-form-item>
        </el-row>

        <el-row v-if="isShow">
          <el-col :span="6">
            <el-form-item label="协同人所在机构" prop="partnerDepartment">
              <el-select v-model="form.partnerDepartment" placeholder="选择机构" @change="selectPartnerDepartment" class="w100">
                <el-option v-for="(item,index) in partnerDepartments" :key="index" :label="item.value+item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="协同人姓名" prop="partner">
              <el-select v-model="form.partner" placeholder="选择协同人" @change="selectPartner" class="w100">
                <el-option v-for="(item,index) in partners" :key="index" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="所占比例(%)" prop="divideProportion">
              <el-input v-model="form.divideProportion" autocomplete="on"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="commit('form')">提交日志</el-button>
          <el-button @click="centerDialogVisible = false">取消</el-button>

        </el-form-item>
      </el-form>

    </el-card>
    <!-- 弹窗 -->
    <!-- 往日未完成工作 -->
    <el-dialog title="查看与修改工作日志" :visible.sync="dialogVisible" center width="1200px">
      <el-form ref="detail" :model="detail" label-width="126px" :rules="detailRules" v-loading="loading">

        <el-row>
          <el-col :span="6">
            <el-form-item label="请选择事物大类" prop="affairMain">
              <el-select v-model="detail.affairMain" placeholder="请选择事务大类" disabled class="w100">
                <el-option v-for="(item,index) in affairMainClassOptions" :key="index" :label="item.value+item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="请选择事物中类" prop="affairMiddle">
              <el-select v-model="detail.affairMiddle" placeholder="请选择事物中类" disabled class="w100">
                <el-option v-for="(item,index) in affairMiddleClassOptions" :key="index" :label="item.value+item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="请选择事物" prop="affair">
              <el-select v-model="detail.affair" placeholder="请选择事物或直接搜索" disabled class="w100" filterable>
                <el-option v-for="(item,index) in affairOptions" :key="index" :label="item.value+item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="18">
            <el-form-item label="关键词" prop="keyWords">
              <el-input v-model="detail.keyWords" autocomplete="on"></el-input>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="预计完成时间" prop="finishTime">
              <el-date-picker type="date" placeholder="选择日期" v-model="detail.finishTime" style="width: 100%;" @change="finishTime"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="">
              <el-radio-group v-model="detail.isCoorperation" @change="selectCooperationDetail">
                <el-radio label="无协同"></el-radio>
                <el-radio label="有协同"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item>
              <el-checkbox label="重点工作" v-model="isImportantDetail" name="type" @change="isImportantUpdata"></el-checkbox>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-form-item label="工作内容" prop="content">
            <el-input type="textarea" v-model="detail.content" :rows="4"></el-input>
          </el-form-item>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="状况" prop="status">
              <el-radio-group v-model="detail.status" @change="selectStatusDetail">
                <el-radio label="未完成"></el-radio>
                <el-radio label="部分完成"></el-radio>
                <el-radio label="完成"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-form-item label="完成情况" prop="completionOfProcess">
            <el-input type="textarea" v-model="detail.completionOfProcess" :rows="4"></el-input>
          </el-form-item>
        </el-row>

        <el-row v-if="isShowDetail">
          <el-col :span="6">
            <el-form-item label="协同人所在机构" prop="partnerDepartment">
              <el-select v-model="detail.partnerDepartment" placeholder="选择机构" class="w100">
                <el-option v-for="(item,index) in partnerDepartments" :key="index" :label="item.value+item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="协同人姓名" prop="partner">
              <el-select v-model="detail.partner" placeholder="选择协同人" class="w100">
                <el-option v-for="(item,index) in partners" :key="index" :label="item.label" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="所占比例(%)" prop="divideProportion">
              <el-input v-model="detail.divideProportion" autocomplete="on"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="commitDetail('detail')">确认修改</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>

        </el-form-item>
      </el-form>
    </el-dialog>

  </div>

</template>

<script>
import {
  queryAffairMainClass as C_queryAffairMainClass,
  queryAffairMiddleClassByMainClassId as C_queryAffairMiddleClassByMainClassId,
  queryAffair as C_queryAffair,
  queryDepartment as C_queryDepartment,
  queryPersonnnelByDepartment as C_queryPersonnnelByDepartment,
  addLog as C_addLog,
  queryTodayLogs as C_queryTodayLogs,
  queryPastLogs as C_queryPastLogs,
  queryDivideLogs as C_queryDivideLogs,
  updataLog as C_updataLog
} from '../../common/methods.js'
export default {
  name: 'FillInSchedule',
  data() {
    return {
      msg: 'FillInSchedule',
      centerDialogVisible: false,
      form: {
        creator: this.$store.name,
        uid: this.$store.id,
        department: this.$store.department,
        //选中的事务大类
        affairMain: '',
        //选中的事务中类
        affairMiddle: '',
        //事务
        affair: '',
        keyWords: '',
        //完成时间
        finishTime: '',
        isImportant: "false",
        isCoorperation: '无协同',
        content: '',
        status: '',
        completionOfProcess: '',
        partnerDepartment: '',
        partner: '',
        divideProportion: ''
      },
      //外面的
      isImportant: false,
      //里面详情页的
      isImportantDetail: false,
      //弹窗中的表单
      detail: {
        affairMain: '',
        affairMiddle: '',
        affair: '',
        isCoorperation: '',
        isImportant: ''
      },
      //事务大类的options
      affairMainClassOptions: [],
      //事务中类的options
      affairMiddleClassOptions: [],
      //事务
      affairOptions: [],
      //事务大类的ID
      affairMainClassNameId: '',
      //事务大类的名称
      affairMainClassName: '',
      //选中的事务大类
      affairMainClass: '',
      //选中的事务中类ID
      affairMiddleClassNameId: '',
      //部门s
      partnerDepartments: [],
      //协同人s
      partners: [],
      value: new Date(),
      tableData: [],
      //外面的协同人盒子
      isShow: false,
      //弹窗里面的协同人盒子
      isShowDetail: false,
      //今日未完成工作
      pastLogsTableData: [],
      //往日未完成工作
      todayLogsTableData: [],
      //已分派未完成工作
      divideLogsTableData: [],
      dialogVisible: false,
      //表单验证项
      rules: {
        affairMain: [
          { required: true, message: '请选择', trigger: 'blur' },
        ],
        affairMiddle: [
          { required: true, message: '请选择', trigger: 'blur' },
        ],
        affair: [
          { required: true, message: '请选择', trigger: 'blur' },
        ],
        keyWords: [
          { required: true, message: '请填写', trigger: 'blur' },
        ],
        finishTime: [
          { required: true, message: '请选择完成时间', trigger: 'blur' },
        ],
        content: [
          { required: true, message: '请填写工作内容', trigger: 'blur' },
        ],
        status: [
          { required: true, message: '请选择状况', trigger: 'blur' },
        ],
        completionOfProcess: [
          { required: true, message: '请填写完成情况', trigger: 'blur' },
        ]
      },
      detailRules: {
        affairMain: [
          { required: true, message: '请选择', trigger: 'blur' },
        ],
        affairMiddle: [
          { required: true, message: '请选择', trigger: 'blur' },
        ],
        affair: [
          { required: true, message: '请选择', trigger: 'blur' },
        ],
        keyWords: [
          { required: true, message: '请填写', trigger: 'blur' },
        ],
        finishTime: [
          { required: true, message: '请选择完成时间', trigger: 'blur' },
        ],
        content: [
          { required: true, message: '请填写工作内容', trigger: 'blur' },
        ],
        status: [
          { required: true, message: '请选择状况', trigger: 'blur' },
        ],
        completionOfProcess: [
          { required: true, message: '请填写完成情况', trigger: 'blur' },
        ]
      },
      loading: false
    }

  },
  methods: {
    toDetail() {

    },

    //查看已分派未完成工作
    toDetailLog(index, row) {
      console.log(index)
      console.log(row)
      this.dialogVisible = true
      // this.detail.affairMain = row.affairMain
      // this.detail.affairMiddle = row.affairMiddle
      // this.detail.affair = row.affair
      // this.detail.keyWords = row.keyWords
      // this.detail.finishTime = row.finishTime
      // this.detail.isCooperation = row.isCooperation
      // this.detail.content = row.content
      // this.detail.status = row.status
      // this.detail.completionOfProcess = row.completionOfProcess
      // this.detail.partnerDepartment = row.partnerDepartment
      // this.detail.partner = row.partner
      // this.detail.divideProportion = row.divideProportion
      this.detail = row
      if (row.isImportant == 'true') {
        this.isImportantDetail = true
      } else {
        this.isImportantDetail = false
      }
      if (row.isCoorperation == '有协同') {
        this.selectCooperationDetail('有协同')
      } else {
        this.selectCooperationDetail('无协同')
      }


    },

    //详情页的修改
    commitDetail(detail) {
      //设置一个变量，用来终止提交,(不然下面一个验证函数return无效，只是终止它自己，不终止这个提交功能)
      //1表示继续，0表示终止
      let go = 1
      // console.log(this.form);
      //验证必填项是否填了，没填就弹出红色提醒
      this.$refs[detail].validate((valid) => {
        if (valid) {
          // alert('submit!');
        } else {
          console.log('detail error submit!!');
          go = 0
        }
      });
      if (go == 0) return
      console.log(this.detail)
      console.log(1111111)

      // this.$axios.post('/log/updata',this.detail).then(res=>{
      //   console.log(res)
      // })
      this.loading = true
      C_updataLog(this.detail, res => {
        this.loading = false
        this.$message({
          message: res,
          type: 'success',
          duration: 3000
        });
      })
    },

    //提交
    async commit(form) {
      //设置一个变量，用来终止提交,(不然下面一个验证函数return无效，只是终止它自己，不终止这个提交功能)
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

      await C_addLog(this.form, res => {
        console.log(res)
        this.$message({
          message: res,
          type: 'success',
          duration: 3000
        });
      })

    },

    //选择协同人所在机构
    selectPartnerDepartment(val) {
      //清空协同人数据和协同人数组数据
      this.form.partner = ''
      this.partners = []
      this.form.partnerDepartment = val
      // console.log(this.form.partnerDepartment)
      C_queryPersonnnelByDepartment(val, res => {
        console.log(res)
        res.forEach((ele, index) => {
          this.partners.push({
            value: index + 1,
            label: ele.name
          })
        })
      })

    },

    //选择协同人
    selectPartner(val) {
      console.log(val)
    },

    //是否是重点工作
    isImportantSet(val) {
      console.log(val)
      if (val == false) {
        this.form.isImportant = "false"
      } else {
        this.form.isImportant = "true"
      }
    },
    //是否是重点工作(详情)
    isImportantUpdata(val) {
      console.log(val)
      if (val == false) {
        this.detail.isImportant = "false"
        // this.isImportantDetail = false
      } else {
        this.detail.isImportant = "true"
        // this.isImportantDetail = true
      }
    },

    //选择状况
    selectStatus(val) {
      console.log(val)
    },
    //选择状况(详情页)
    selectStatusDetail(val) {
      console.log(val)
    },
    //完成时间
    finishTime(val) {
      // console.log(val)
      this.form.finishTime = new Date(val).getFullYear() + '-' + (new Date(val).getMonth() + 1) + '-' + new Date(val).getDate();
      console.log(this.form.finishTime)
    },

    //选择事务大类
    selectAffairMainClass(val) {
      // console.log(val) // val是id，根据id找到事务大类的名字
      this.affairMainClassNameId = val
      this.affairMainClassOptions.forEach(ele => {
        if (ele.value == val) {
          //这里不能用form里的变量，获取有问题
          //这个大类名称用来发送请求
          this.affairMainClass = ele.label
          //这个form中的大类名称用来提交表单
          this.form.affairMain = ele.label
        }
      });

      //根据事务大类id查询事务中类
      //清空事务中类的model
      this.affairMiddleClassOptions = []
      //清空事务[]
      this.affairOptions = []
      //清空事务选中值
      this.form.affair = ''
      //清空事务中类的选中值
      this.form.affairMiddle = ''
      //清空事务中类的选中ID
      this.form.affairMiddleClassNameId = ''
      C_queryAffairMiddleClassByMainClassId(this.affairMainClass, res => {
        // console.log(res)
        res.forEach((ele) => {
          this.affairMiddleClassOptions.push({
            value: ele.id,
            label: ele.affairMiddleClassName
          });
        });
      })

    },

    //选择事务中类
    selectAffairMiddle(val) {
      //清空事务[]
      this.affairOptions = []
      //清空事务中类的选中值
      this.form.affair = ''
      console.log(val)
      console.log(' this.affairMiddleClassOptions')
      console.log(this.affairMiddleClassOptions)
      this.affairMiddleClassNameId = val

      //根据val找出中类名字
      this.affairMiddleClassOptions.forEach(ele => {
        if (ele.value == val) {
          this.form.affairMiddle = ele.label
        }

      })

      let obj = {
        affairMain: this.affairMainClassNameId,
        affairMiddle: this.affairMiddleClassNameId
      }

      C_queryAffair(obj, res => {
        console.log(res)

        res.forEach((ele) => {
          // console.log(this.affairOptions)
          this.affairOptions.push({
            value: ele.number,
            label: ele.affairName
          });
        });
      })
    },

    //选择事务
    selectAffair(val) {
      console.log(val)
      // this.form.affair=val+this.affairOptions.label
      this.affairOptions.forEach(ele => {
        if (ele.value == val) {
          this.form.affair = val + ele.label
        }
      })
      console.log(this.form.affair)


    },

    //选择有无协同
    selectCooperation(val) {
      console.log(val)
      if (val == '有协同') {
        //展现隐藏的盒子，并且增加验证规则
        this.isShow = true
        this.rules.partnerDepartment = [
          { required: true, message: '请选择协同人所在机构', trigger: 'blur' },
        ]
        this.rules.partner = [
          { required: true, message: '请选择协同人', trigger: 'blur' },
        ]
        this.rules.divideProportion = [
          { required: true, message: '请选择协同人分担比例', trigger: 'blur' },
        ]
      } else {
        //隐藏盒子，并且取消验证规则
        this.isShow = false
        this.rules.partnerDepartment = []
        this.rules.partner = []
        this.rules.divideProportion = []
      }
    },

    //选择有无协同(详情)
    selectCooperationDetail(val) {
      console.log(val)
      if (val == '有协同') {
        //展现隐藏的盒子，并且增加验证规则
        this.isShowDetail = true
        this.detailRules.partnerDepartment = [
          { required: true, message: '请选择协同人所在机构', trigger: 'blur' },
        ]
        this.detailRules.partner = [
          { required: true, message: '请选择协同人', trigger: 'blur' },
        ]
        this.detailRules.divideProportion = [
          { required: true, message: '请选择协同人分担比例', trigger: 'blur' },
        ]
      } else {
        //隐藏盒子，并且取消验证规则
        this.isShowDetail = false
        this.detailRules.partnerDepartment = []
        this.detailRules.partner = []
        this.detailRules.divideProportion = []
      }
    },

    //状况

  },
  mounted: function () {
    //查询事务大类
    C_queryAffairMainClass(res => {
      // console.log(res)
      res.forEach(ele => {
        this.affairMainClassOptions.push({
          value: ele.id,
          label: ele.affairMainClassName
        });
      });
    });

    //查询部门
    C_queryDepartment(res => {
      res.forEach(ele => {
        this.partnerDepartments.push({
          value: ele.number,
          label: ele.departmentName
        })
      })
    })

    //查询今日工作日志
    C_queryTodayLogs(res => {
      this.todayLogsTableData = res
    })

    //查询往日未完成工作
    C_queryPastLogs(res => {
      this.pastLogsTableData = res
    })

    //查询已分配未完成工作
    C_queryDivideLogs(res => {
      this.divideLogsTableData = res
    })

  }
}
</script>
  
<style lang="scss" scoped>
.FillInLogs {
  .el-calendar-day {
    .item {
      height: 100%;
      text-align: center;
    }
  }
  //选中的日期颜色
  & >>> .is-selected {
    background-color: #f1fa7b !important;
  }

  p {
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
}
</style>