import axios from 'axios'

//返回1成功，0失败，2错误


//导出方法
export {
  queryDepartment
}

//发送请求——查询部门，封装方法
let queryDepartment = function (cb) {
  //发送请求——查询部门
  axios.get('department/query').then(res => {
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

