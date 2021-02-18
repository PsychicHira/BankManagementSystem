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
  queryPastEvents,        //查询往日事件
  queryEventsById,        //根据事件id查询往日事件(新建事件表、手工录入表、运维事件表)
  queryTodoEvents,        //待办事件查询(自己是受理人)
  queryAffairMainClass,        //查询事务大类
  queryAffairMiddleClassByMainClassId,        //根据事务大类id查询事务中类
  queryAffair,    //查询事务
  queryTodayLogs,    //查询今日工作日志
  queryPastLogs,    //查询往日未完成工作
  queryDivideLogs,    //查询已分派未完成工作
  queryLogs,    //查询已分派未完成工作   
  queryLogsByDepartment,    //查询用户所在部门发布过的所有日志（使用用户的所在部门查）   
  queryAnnounce,    //查询公告

  updataLog,   //修改日志

  addAffairMainClass,    //添加事务大类
  addAffairManClass,    //添加事务中类
  addAffair,    //添加事务
  addLog,    //添加工作日志

  submitUpload,         //文件上传



}

//发送请求——查询部门，封装方法
let queryDepartment = function (cb) {
  //发送请求——查询部门
  axios.get('/department/query').then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
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
  })
}

//查询业务分类
let queryBusinessCategory = function (cb) {
  //发送请求——查询人员
  axios.get('/miniOptions/businessCategory').then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
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
  })
}

//查询优先级
let queryPriority = function (cb) {
  axios.get('/miniOptions/priority').then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
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
  })
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
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
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
  })
}

//查询问题级别
let queryProblemGrade = function (cb) {
  axios.get('/miniOptions/problemGrade').then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
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
  })
}

//查询问题来源
let queryInformationSource = function (cb) {
  axios.get('/miniOptions/informationSource').then(res => {
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
      Vue.prototype.$message({
        message: res.data.message,
        type: 'error',
        duration: 3000
      });
      return
    } else if (!res.data.code) {
      // console.log(res.data)
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
  })
}

//查询运维流转方式
let queryOperationTransfer = function (cb) {
  axios.get('/miniOptions/operationTransfer').then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
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
  })
}

//查询手工录入流转方式
let queryManualEntryTransfer = function (cb) {
  axios.get('/miniOptions/operationTransfer').then(res => {
    // console.log(res);
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
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
  })
}


//查询事件状态
let queryEventStatus = function (cb) {
  axios.get('/miniOptions/eventStatus').then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
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
  })
}

//查询往日事件
let queryPastEvents = function (cb) {
  axios.get('/pastEvents').then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)

      // 下方提示数据库查询失败或无数据，注释掉
      // Vue.prototype.$message({
      //   message: res.data.message,
      //   type: 'error',
      //   duration: 3000
      // });

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
  })
}

//根据事件id查询往日事件(新建事件表、手工录入表、运维事件表)
let queryEventsById = function (data, cb) {
  axios.get(`/pastEvents/detail?id=${data}`).then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
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
  })
}

//待办事件查询(自己是受理人)
let queryTodoEvents = function (data, cb) {
  axios.get(`/todo?uid=${data}`).then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      // console.log(res.data.message)
      // cb(0)

      // 下方提示数据库查询失败或无数据，注释掉
      // Vue.prototype.$message({
      //   message: res.data.message,
      //   type: 'error',
      //   duration: 3000
      // });

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
  })
};

//查询事务大类
let queryAffairMainClass = function (cb) {
  axios.get('/affair/getAffairMainClass').then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
      // cb(0)
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
  })
};

//根据事务大类id查询事务中类
let queryAffairMiddleClassByMainClassId = function (data, cb) {
  axios.get(`/affair/getAffairMiddleClassByMainClassId?affairMainClassName=${data}`).then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      // console.log(res.data.message)
      // cb(0)

      // 下方提示数据库查询失败或无数据，注释掉
      // Vue.prototype.$message({
      //   message: res.data.message,
      //   type: 'error',
      //   duration: 3000
      // });
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
  })
};

//添加事务大类
let addAffairMainClass = function (data, cb) {
  axios.post(`/affair/addAffairMainClass`, data).then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      // console.log(res.data.message)
      // cb(0)

      // 下方提示数据库查询失败或无数据，注释掉
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
      cb(res.data.message)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
  })
}

//添加事务中类
let addAffairManClass = function (data, cb) {
  axios.post(`/affair/addAffairMiddleClass`, data).then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      // console.log(res.data.message)
      // cb(0)

      // 下方提示数据库查询失败或无数据，注释掉
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
      cb(res.data.message)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
  })
}

//添加事务
let addAffair = function (data, cb) {
  axios.post(`/affair/addAffair`, data).then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      // console.log(res.data.message)
      // cb(0)

      // 下方提示数据库查询失败或无数据，注释掉
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
      cb(res.data.message)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
  })
}

//查询事务
let queryAffair = function (data, cb) {
  axios.get(`/affair/getAllAffair?affairMain=${data.affairMain}&affairMiddle=${data.affairMiddle}`).then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      // console.log(res.data.message)
      // cb(0)

      // 下方提示数据库查询失败或无数据，注释掉
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
  })
}

//添加工作日志
let addLog = function (data, cb) {
  axios.post(`/log/add`, data).then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      // console.log(res.data.message)
      // cb(0)

      // 下方提示数据库查询失败或无数据，注释掉
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
      cb(res.data.message)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
  })
}

//查询今日工作日志
let queryTodayLogs = function (cb) {
  axios.get('/log/todayLogs').then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
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
  })
}

//查询往日未完成工作
let queryPastLogs = function (cb) {
  axios.get('/log/pastLogs').then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
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
  })
}

//查询已分派未完成工作   
let queryDivideLogs = function (cb) {
  axios.get('/log/divedeLogs').then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
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
  })
}

//查询已分派未完成工作
let queryLogs = function (data, cb) {
  axios.get(`/log/queryLogs?uid=${data}`).then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      // console.log(res.data.message)
      // cb(0)
      // 下方提示数据库查询失败或无数据，注释掉
      // Vue.prototype.$message({
      //   message: res.data.message,
      //   type: 'error',
      //   duration: 3000
      // });
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
  })
}

//查询用户所在部门发布过的所有日志（使用用户的所在部门查）   
let queryLogsByDepartment = function (data, cb) {
  axios.get(`/log/queryLogsByDepartment?department=${data}`).then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      // console.log(res.data.message)
      // cb(0)
      // 下方提示数据库查询失败或无数据，注释掉
      // Vue.prototype.$message({
      //   message: res.data.message,
      //   type: 'error',
      //   duration: 3000
      // });
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
  })
}

//查询公告
let queryAnnounce = function (cb) {
  axios.get('/announce/queryAnnounce').then(res => {
    // console.log(res)
    if (res.data.code == 0) {
      console.log(res.data.message)
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
  })
}

//修改日志
let updataLog = function (data, cb) {
  axios.post(`/log/updataLog`, data).then(res => {
    console.log('mmmmmmmmmmmmm')
    if (res.data.code == 0) {
      console.log(res.data.message)
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
    } else if (res.data.code == 1) {
      cb(res.data.message)
    }
  }).catch(function (error) {
    Vue.prototype.$message({
      message: '请求失败' + error,
      type: 'error',
      duration: 3000
    });
  })
}