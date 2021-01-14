import Vue from 'vue'
import axios from 'axios'




//返回1成功，0失败，2错误


//导出方法
export {
  queryDepartment,              //查询部门
  queryPersonnel,               //查询人员
  queryPersonnnelByDepartment,  //根据部门查询人员
  queryBusinessCategory,        //查询业务分类
  queryPriority,        //查询优先级
  noReturnValJudge
}

//发送请求——查询部门，封装方法
let queryDepartment = function (cb) {
  //发送请求——查询部门
  axios.get('/department/query').then(res => {
    if (res.data.code == 0) {
      console.log(res.data.message)
      cb(0)
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    console.log(error);
    cb(2)
  });
}

//根据部门查下面的人员
// select users.`name` from departments,users where departmentName='办公室' AND department= '办公室'
let queryPersonnnelByDepartment = function (data, cb) {
  console.log(data)
  axios.get(`/department/queryPersonnnel?department=${data}`).then(res => {
    if (res.data.code == 0) {
      console.log(res.data.message)
      cb(0)
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    console.log(error);
    cb(2)
  });
}

//发送请求——查询人员，封装方法
let queryPersonnel = function (cb) {
  //发送请求——查询人员
  axios.get('/personnel/query').then(res => {
    if (res.data.code == 0) {
      console.log(res.data.message)
      cb(0)
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    console.log(error);
    cb(2)
  })
}

//查询业务分类
let queryBusinessCategory = function (cb) {
  //发送请求——查询人员
  axios.get('/businessCategory').then(res => {
    if (res.data.code == 0) {
      console.log(res.data.message)
      cb(0)
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    console.log(error);
    cb(2)
  })
}

//查询优先级
let queryPriority = function (cb) {
  axios.get('priority').then(res => {
    if (res.data.code == 0) {
      console.log(res.data.message)
      cb(0)
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    console.log(error);
    cb(2)
  })
}

//无返回值的判断，增时使用
let noReturnValJudge = function (res) {
  if (res == 0) {
    Vue.prototype.$message({
      message: '数据库请求失败',
      type: 'error',
      duration: 3000
    });
  } else if (res == 2) {
    Vue.prototype.$message({
      message: '发生错误',
      type: 'error',
      duration: 3000
    });
  } else {
    Vue.prototype.$message({
      message: '提交成功',
      type: 'success',
      duration: 3000
    });
  }
}