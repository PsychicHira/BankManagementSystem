import Vue from 'vue'
import axios from 'axios'

// axios.defaults.timeout =  6000;
// // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//   // Do something with response data
//   return response;
// }, function (error) {
//   // Do something with response error
//   return Promise.reject(error);
// });




//返回1成功，0失败，2错误


//导出方法
export {
  queryDepartment,              //查询部门
  queryPersonnel,               //查询人员
  queryPersonnnelByDepartment,  //根据部门查询人员
  queryBusinessCategory,        //查询业务分类
  queryPriority,        //查询优先级
  queryProblemType,        //查询问题类型
  queryProblemGrade,        //查询问题级别
  queryInformationSource,        //查询信息来源
  queryOperationTransfer,        //查询运维流转方式
  queryManualEntryTransfer,        //查询手工录入流转方式
  queryEventStatus,        //查询事件状态


  submitUpload,         //文件上传



  noReturnValJudge,   //没有返回值的流程判断，适用于对增加数据之后返回值的判断
}

//发送请求——查询部门，封装方法
let queryDepartment = function (cb) {
  //发送请求——查询部门
  axios.get('/department/query').then(res => {
    console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (res.data.code == 2) {
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (!res.data.code) {
      console.log(res.data)
      Vue.prototype.$message({
        message: res.data,
        type: 'error',
        duration: 3000
      });
      return
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
    return
  })
}

//根据部门查下面的人员
// select users.`name` from departments,users where departmentName='办公室' AND department= '办公室'
let queryPersonnnelByDepartment = function (data, cb) {
  console.log(data)
  axios.get(`/department/queryPersonnnel?department=${data}`).then(res => {
    console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (res.data.code == 2) {
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (!res.data.code) {
      console.log(res.data)
      Vue.prototype.$message({
        message: res.data,
        type: 'error',
        duration: 3000
      });
      return
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
    return
  })
}

//发送请求——查询人员，封装方法
let queryPersonnel = function (cb) {
  //发送请求——查询人员
  axios.get('/personnel/query').then(res => {
    console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (res.data.code == 2) {
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (!res.data.code) {
      console.log(res.data)
      Vue.prototype.$message({
        message: res.data,
        type: 'error',
        duration: 3000
      });
      return
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
    return
  })
}

//查询业务分类
let queryBusinessCategory = function (cb) {
  //发送请求——查询人员
  axios.get('/miniOptions/businessCategory').then(res => {
    console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (res.data.code == 2) {
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (!res.data.code) {
      console.log(res.data)
      Vue.prototype.$message({
        message: res.data,
        type: 'error',
        duration: 3000
      });
      return
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
    return
  })
}

//查询优先级
let queryPriority = function (cb) {
  axios.get('/miniOptions/priority').then(res => {
    console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (res.data.code == 2) {
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (!res.data.code) {
      console.log(res.data)
      Vue.prototype.$message({
        message: res.data,
        type: 'error',
        duration: 3000
      });
      return
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error + error,
      type: 'error',
      duration: 3000
    });
    return
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
  } else if (!res.data.code) {
    console.log(res.data)
    Vue.prototype.$message({
      message: res.data,
      type: 'error',
      duration: 3000
    });
    return
  } else {
    Vue.prototype.$message({
      message: '提交成功',
      type: 'success',
      duration: 3000
    });
  }
}

//文件上传
let submitUpload = async function (file, cb) {
  // this.$refs.upload.submit();
  const formData = new FormData()
  // console.log(this.$refs.upload.uploadFiles[0])
  // const file = file
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
  await axios.post('/upload', formData, config).then(res => {
    // console.log(res.data.path)//图片的路径
    if (res == 0) {
      Vue.prototype.$message({
        message: res.data,
        type: 'error',
        duration: 3000
      });
      console.log(res.data)
      return
    } else {
      cb(res.data.path)
    }
  })
}

//查询问题类型
let queryProblemType = function (cb) {
  axios.get('/miniOptions/problemType').then(res => {
    console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (res.data.code == 2) {
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (!res.data.code) {
      console.log(res.data)
      Vue.prototype.$message({
        message: res.data,
        type: 'error',
        duration: 3000
      });
      return
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
    return
  })
}

//查询问题级别
let queryProblemGrade = function (cb) {
  axios.get('/miniOptions/problemGrade').then(res => {
    console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (res.data.code == 2) {
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (!res.data.code) {
      console.log(res.data)
      Vue.prototype.$message({
        message: res.data,
        type: 'error',
        duration: 3000
      });
      return
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
    return
  })
}

//查询问题来源
let queryInformationSource = function (cb) {
  axios.get('/miniOptions/informationSource').then(res => {
    console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (res.data.code == 2) {
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (!res.data.code) {
      console.log(res.data)
      Vue.prototype.$message({
        message: res.data,
        type: 'error',
        duration: 3000
      });
      return
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
    return
  })
}

//查询运维流转方式
let queryOperationTransfer = function (cb) {
  axios.get('/miniOptions/operationTransfer').then(res => {
    console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (res.data.code == 2) {
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (!res.data.code) {
      console.log(res.data)
      Vue.prototype.$message({
        message: res.data,
        type: 'error',
        duration: 3000
      });
      return
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
    return
  })
}

//查询手工录入流转方式
let queryManualEntryTransfer = function (cb) {
  axios.get('/miniOptions/operationTransfer').then(res => {
    console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (res.data.code == 2) {
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (!res.data.code) {
      console.log(res.data)
      Vue.prototype.$message({
        message: res.data,
        type: 'error',
        duration: 3000
      });
      return
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
    return
  })
}


//查询事件状态
let queryEventStatus = function (cb) {
  axios.get('/miniOptions/eventStatus').then(res => {
    console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (res.data.code == 2) {
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (!res.data.code) {
      console.log(res.data)
      Vue.prototype.$message({
        message: res.data,
        type: 'error',
        duration: 3000
      });
      return
    } else {
      cb(res.data.data)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
    return
  })
}