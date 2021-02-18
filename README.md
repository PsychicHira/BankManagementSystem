# 西藏银行——行务综合服务平台

标准：

服务端查询报错全部返回0

查询成功返回1

异常错误返回2

## 登录

- **url**

  login

- **method**

  post

- **字段**

```
{
    loginName:'',
    password:''
}
```

- 返回值

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "id": "7774b160-4fc5-11eb-a408-65ca51c3a35b",
            "loginName": "admin",
            "password": "admin",
            "name": "管理员",
            "sex": "男",
            "phoneNumber": "13000000000",
            "department": "西藏银行",
            "post": "管理后台员",
            "employeeNumber": "yf010",
            "identification": "300"
        }
    ]
}
```



## 部门管理

### **增**

- **url**

  department/add

- **method**

  post

- **字段**

  ```
  departmentName = ''
  number = ''
  ```

- **返回值**

  ```
  {
      "code": 1,
      "message": "数据库操作成功",
      "data": {
          "fieldCount": 0,
          "affectedRows": 1,
          "insertId": 70,
          "serverStatus": 2,
          "warningCount": 0,
          "message": "",
          "protocol41": true,
          "changedRows": 0
      }
  }
  ```


### **删**

- **url**

  department/add

- **method**

  post

- **字段**

```
{
    departmentName: '',
    number: ''
}
```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 34,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```




### **改**

- url**

  department/add

- **method**

  post

- **字段**

```
{
    presentForm: 	//当前新数据
    	{
            departmentName: '',		//must
            number: ''				//must
        },
    updataForm: 	//原数据
    	{
            departmentName: '',
            number: ''
        }
}
//示例
{"presentForm": { "departmentName": "董监办", "number": "001" },"updataForm": { "departmentName": "董监办", "number": "001" } }
```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 34,
        "warningCount": 0,
        "message": "(Rows matched: 1  Changed: 0  Warnings: 0",
        "protocol41": true,
        "changedRows": 0
    }
}
```




### **查**

- **url**

  department/add

- **method**

  get

- **字段**

  ```
  无
  ```

- **返回值**

  ```
  {
      "code": 1,
      "message": "数据库操作成功",
      "data": [
          {
              "id": 25,
              "departmentName": "董监办",
              "number": "001"
          },
      ]
  }
  ```






## 人员管理

### **增**

- **url**

  personnel/add

- **method**

  post

- **字段**

  ```
  {
    name: '审批',		//must
    sex: '男',			//must
    phoneNumber: '13900000000',
    identification: '300300',
    employeeNumber: 'sp001',
    department: '信息技术部'	//must
  }
  ```

- **返回值**

  ```
  {
      "code": 1,
      "message": "数据库操作成功",
      "data": {
          "fieldCount": 0,
          "affectedRows": 1,
          "insertId": 0,
          "serverStatus": 2,
          "warningCount": 0,
          "message": "",
          "protocol41": true,
          "changedRows": 0
      }
  }
  ```

### **删**

- **url**

  personnel/delet

- **method**

  post

- **字段**

```
{
    name: '',	//must
    sex: ''		//must
}
```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 34,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```



### **改**

- **url**

  personnel/updata

- **method**

  post

- **字段**

```
{
    presentForm: 	//当前新数据
    	{
            name: '',	//must		//姓名
            sex: '',	//must		//性别
            phoneNumber: '',		//电话
            departmen: '',			//所属部门
            post: '',				//职位
            identification: '',		//身份证号码
            loginName: '',			//登录名
            password: '',			//密码
            employeeNumber: '',		//工号
        },
    updataForm: 	//原数据
    	{
            name: '',
            sex: ''
        }
}
```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 34,
        "warningCount": 0,
        "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
        "protocol41": true,
        "changedRows": 1
    }
}
```



### **查**

- **url**

  personnel/query

- **method**

  get

- **字段**

  ```
  无
  ```

- **返回值**

  ```
  {
      "code": 1,
      "message": "数据库操作成功",
      "data": [
          {
              "id": "7774b160-4fc5-11eb-a408-65ca51c3a35b",
              "loginName": "admin",
              "password": "admin",
              "name": "管理员",
              "sex": "男",
              "phoneNumber": "13000000000",
              "department": "西藏银行",
              "post": "管理后台员",
              "emploeeNumber": "yf010",
              "identification": "300"
          }
      ]
  }
  ```



## 根据部门查所属其人员

### **查**

- **url**

  department/queryPersonnnel

- **method**

  get

- **字段**

  ```
  department/queryPersonnnel?department=xxx
  
  {
  	department:''
  }
  ```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "name": "仁青"
        },
        {
            "name": "魏山"
        },
        {
            "name": "曹芬"
        },
        {
            "name": "陈宗涛"
        },
        {
            "name": "仇晓菲"
        },
        {
            "name": "次央"
        },
        {
            "name": "格珍"
        },
        {
            "name": "李世勇"
        },
        {
            "name": "潘高峰"
        }
    ]
}
```

## 查询业务分类

### **查**

- **url**

  /miniOptions/businessCategory

- **method**

  get

- **字段**

  无

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "id": "1",
            "businessCategory": "业务支持"
        },
        {
            "id": "2",
            "businessCategory": "项目管理"
        },
        {
            "id": "3",
            "businessCategory": "会议餐饮审批"
        },
        {
            "id": "4",
            "businessCategory": "会议审批"
        },
        {
            "id": "5",
            "businessCategory": "车辆审批"
        }
    ]
}
```

## 查询优先级

### **查**

- **url**

  /miniOptions/priority

- **method**

  get

- **字段**

  无

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "id": "1",
            "priority": "一半"
        },
        {
            "id": "2",
            "priority": "重要"
        }
    ]
}
```

## 新建事件

### **增**

- **url**

  /events/addNewEvent

- **method**

  post

- **字段**

  ```
  {
    "title": "1",
    "description":"1",
    "businessCategory": "1",
    "priority": "1",
    "creator": "1",
    "department": "1",
    "phoneNumber":"1",
    "isMSG": "0",			
    "acceptDepartment": "董监办",
    "acceptor": "陈晋",
    "uid":"7774b160-4fc5-11eb-a408-65ca51c3a35b"
  }
  ```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## 公告发布

### **增**

- **url**

  /announce/add

- **method**

  post

- **字段**

```
{
  "title": "1",
  "content":"1",
  "startTime": "1",
  "endTime": "1",
  "creator": "1",
  "influenceArea": "1",
  "phoneNumber":"1",
  "isMSG": "1",			
  "filePath": "1212323",
  "uid":"7774b160-4fc5-11eb-a408-65ca51c3a35b"
}
```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## 查询问题类型

### **查**

- **url**

  /miniOptions/problemType

- **method**

  get

- **字段**

  无

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "id": "1",
            "problemType": "交易系统"
        },
        {
            "id": "2",
            "problemType": "管理系统"
        },
        {
            "id": "3",
            "problemType": "网络"
        }
    ]
}
```

## 查询问题级别

### **查**

- **url**

  /miniOptions/problemGrade

- **method**

  get

- **字段**

  无

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "id": "1",
            "problemGrade": "一般"
        },
        {
            "id": "2",
            "problemGrade": "中级"
        },
        {
            "id": "3",
            "problemGrade": "高级"
        }
    ]
}
```

## 查询信息来源

### **查**

- **url**

  /miniOptions/informationSource

- **method**

  get

- **字段**

  无

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "id": "1",
            "informationSource": "电话传真"
        },
        {
            "id": "2",
            "informationSource": "其它方式"
        },
        {
            "id": "3",
            "informationSource": "维护单"
        },
        {
            "id": "4",
            "informationSource": "Notes"
        }
    ]
}
```

## 查询运维事件——流转方式

### **查**

- **url**

  /miniOptions/operationTransfer

- **method**

  get

- **字段**

  无

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "transferWay": "完成"
        },
        {
            "transferWay": "转发"
        },
        {
            "transferWay": "协同工作"
        }
    ]
}
```

## 查询手工录入——流转方式

### **查**

- **url**

  /miniOptions/manualEntryTransfer

- **method**

  get

- **字段**

  无

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "transferWay": "完成"
        },
        {
            "transferWay": "进一步处理"
        },
        {
            "transferWay": "请示"
        },
        {
            "transferWay": "转发"
        },
        {
            "transferWay": "协同工作"
        }
    ]
}
```



## 查询事件状态

### **查**

- **url**

  /miniOptions/eventStatus

- **method**

  get

- **字段**

  无

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "id": "1",
            "eventStatus": "所有"
        },
        ...
    ]
}
```

## 新建运维事件

### **增**

- **url**

  /announce/add

- **method**

  post

- **字段**

```
{
  "department": "董监办",
  "creator":"管理员",
  "phoneNumber": "1",
  "address": "1",
  "title": "1",
  "description": "1",
  "problemType":"网络",
  "problemGrade": "一般",			
  "opinion": "意见",
  "informationSource": "电话传真",
  "acceptDepartment": "董监办",
  "acceptor": "陈晋",
  "status": "等待接受",
  "transferWay": "完成",
  "uid":"7774b160-4fc5-11eb-a408-65ca51c3a35b"
}
```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## 新建手工录入事件

### **增**

- **url**

  /manualEntry/add

- **method**

  post

- **字段**

```
{
  "department": "董监办",
  "creator":"管理员",
  "phoneNumber": "1",
  "address": "大叔大婶",
  "title": "1",
  "description": "1",
  "filePath": "1",
  "businessCategory":"网络",
  "priority": "一般",			
  "opinion": "意见",
  "informationSourse": "电话传真",
  "transferWay": "完成",
  "acceptDepartment": "董监办",
  "acceptor": "陈晋",
  "quantityGrade": "1",
  "knowledge": "1",
  "uid":"7774b160-4fc5-11eb-a408-65ca51c3a35b"
}
```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## 查询往日事件

### **查**

- **url**

  /pastEvents

- **method**

  get

- **字段**

```
/pastEvents?string=""&department=""&status=""&startTime=""&endTime=""
```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "id": "c4bfce60-59fb-11eb-b7be-f5d427bac105",
            "title": "12312",
            "acceptor": "陈功",
            "createTime": "2021-1-19",
            "creator": "管理员",
            "status": "等待接受"
        },...
    ]
}
```

## 查询往日事件详情

### **查**

- **url**

  /pastEvents/detail

- **method**

  get

- **字段**

```
/pastEvents/detail?id="0e98cb50-59fb-11eb-b7be-f5d427bac105"
```

- **返回值**

```
[
    {
        "id": "0e98cb50-59fb-11eb-b7be-f5d427bac105",
        "title": "2222",
        "description": "222",
        "filePath": "public\\uploads\\20210119\\file-1611022038006.JPG",
        "businessCategory": "业务支持",
        "priority": "一般",
        "creator": "管理员",
        "phoneNumber": "13000000000",
        "isMSG": null,
        "acceptDepartment": "个人业务部",
        "acceptor": "贺文科",
        "creatorId": null,
        "acceptorId": "78f35f00-53df-11eb-a072-f9eb1baa49ec",
        "department": "董监办",
        "createTime": "2021-1-19",
        "status": "等待接受"
    }
]
```

## 待办事件查询(自己是受理人)

### **查**

- **url**

  /todo

- **method**

  get

- **字段**

```
/todo?uid=""
```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "id": "876188f0-5aec-11eb-ba5a-e3e872059fb3",
            "title": "新建事件1",
            "acceptor": "陈功",
            "createTime": "2021-1-20",
            "creator": "管理员",
            "department": "董监办"
        },
        {
            "id": "36775a80-5aee-11eb-ba5a-e3e872059fb3",
            "title": "运维事件1",
            "acceptor": "陈功",
            "createTime": "2021-1-20",
            "creator": "管理员",
            "department": "董监办"
        },
        {
            "id": "272aba40-5aee-11eb-ba5a-e3e872059fb3",
            "title": "录入事件1",
            "acceptor": "陈功",
            "createTime": "2021-1-20",
            "creator": "管理员",
            "department": "董监办"
        }
    ]
}
```

##  查询事务大类

### **查**

- **url**

  /affair/getAffairMiddleClassByMainClassId

- **method**

  get

- **字段**

  ```
  affairMainClassName=常规巡查
  ```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "affairsMiddleClassName": "21机房环境"
        },
        {
            "affairsMiddleClassName": "22软件"
        }
    ]
}
```

## 添加事务大类

### **增**

- **url**

  /affair/addAffairMainClass

- **method**

  post

- **字段**

```
{
  affairMainClassName：'xxxxx'
}
```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 11,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## 添加事务中类

### **增**

- **url**

  /affair/addAffairMiddleClass

- **method**

  post

- **字段**

```
{
  affairMainClassName：'常规巡查',    //事务大类的名称
  affairMiddleClassName:'xxxx'		//事务中类名称
}
```

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 10,
        "serverStatus": 34,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## 添加事务

### **增**

- **url**

  /affair/addAffair

- **method**

  post

- **字段**

```
{
    "demand": "123",
    "number": "123",
    "affairMiddleClassNameId": "123",
    "affairName": "123",
    "isApproval": "123"
}
```

- **返回值**

```
{
    "code": 1,
    "message": "数据操作成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 3,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## 查询所有事务

### **查**

- **url**

  /affair/getAllAffair

- **method**

  get

- **字段**

  无

- **返回值**

```
{
    "code": 1,
    "message": "数据操作成功",
    "data": [
        {
            "number": "1101E",
            "affairName": "组织参与行内外/会议/团队/项目组会议/培训/交流产品、方案、技术（2小时）",
            "isApproval": 0,
            "demand": "无",
            "affairMiddleClassName": "11会议培训"
        },
        {
            "number": "1211A",
            "affairName": "非专业技术方案或材料（概要、详细、实施、运维）便携（5000字以上）",
            "isApproval": 0,
            "demand": "无",
            "affairMiddleClassName": "12文稿撰写"
        },...
```

## 查询事务（根据大类和中类id）

### **查**

- **url**

  /affair/getAllAffair

- **method**

  get

- **字段**

  因为中类id是唯一的，

- **返回值**

```

```

## 新增工作日志

### **增**

- **url**

  /log/add

- **method**

  post

- **字段**

```
{
    "creator": "管理员",
    "department":"董监办",
    "uid": "7774b160-4fc5-11eb-a408-65ca51c3a35b",
    "affairMain": "1",
    "affairMiddle": "2",
    "affair": "3",
    "keyWords": "12",
    "finishTime": "2021-0202",
    "isImportant": false,
    "isCooperation": "无协同",
    "content": "123123",
    "status": "完成",
    "completionOfProcess": "123123123",
    "partnerDepartment": "董监办",
    "partner": "陈功",
    "divideProportion":"30"
}
```

- **返回值**

```
{
    "code": 1,
    "message": "数据添加成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

## 查询今日工作日志

### **查**

- **url**

  /log/todayLogs

- **method**

  get

- **字段**

  无

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "id": "14d4cde0-643f-11eb-a3ae-a305e4f16fa4",
            "creator": "管理员",
            "creatorID": "7774b160-4fc5-11eb-a408-65ca51c3a35b",
            "createTime": "2021-2-1",
            "affairMain": "常规巡查",
            "affairMiddle": "22软件",
            "affair": "2211G虚拟化/容器系统日常可用性巡查（每集群）",
            "isCooperation": "无协同",
            "keyWords": "1231",
            "finishTime": "2021-2-2",
            "content": "12312",
            "status": "未完成",
            "completionOfProcess": "123123",
            "partner": "",
            "partnerID": null,
            "partnerDepartment": "",
            "divideProportion": ""
        },.......
```

## 查询往日未完成工作

### **查**

- **url**

  /log/pastLogs

- **method**

  get

- **字段**

  无

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "id": "b06f6d80-643c-11eb-a5ba-b76408aac903",
            "creator": "管理员",
            "creatorID": "7774b160-4fc5-11eb-a408-65ca51c3a35b",
            "createTime": "2021-1-31",
            "affairMain": "常规巡查",
            "affairMiddle": "21机房环境",
            "affair": "2120F指导分支机构检查/协助维保厂商检查",
            "isCooperation": "有协同",
            "keyWords": "123123123",
            "finishTime": "2021-2-2",
            "content": "123213",
            "status": "未完成",
            "completionOfProcess": "123213123",
            "partner": "陈功",
            "partnerID": "2a638d90-53dc-11eb-b60b-f5e96c463d42",
            "partnerDepartment": "董监办",
            "divideProportion": "30"
        }
    ]
}
```

## 查询已分派未完成工作

### **查**

- **url**

  /log/divedeLogs

- **method**

  get

- **字段**

  无

- **返回值**

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "id": "b06f6d80-643c-11eb-a5ba-b76408aac903",
            "creator": "管理员",
            "creatorID": "7774b160-4fc5-11eb-a408-65ca51c3a35b",
            "createTime": "2021-1-31",
            "affairMain": "常规巡查",
            "affairMiddle": "21机房环境",
            "affair": "2120F指导分支机构检查/协助维保厂商检查",
            "isCooperation": "有协同",
            "keyWords": "123123123",
            "finishTime": "2021-2-2",
            "content": "123213",
            "status": "未完成",
            "completionOfProcess": "123213123",
            "partner": "陈功",
            "partnerID": "2a638d90-53dc-11eb-b60b-f5e96c463d42",
            "partnerDepartment": "董监办",
            "divideProportion": "30"
        },
```

## 查询用户发布过的所有日志（使用用户id查）

### **查**

- **url**

  /log/queryLogs

- **method**

  get

- **字段**

```
uid=7774b160-4fc5-11eb-a408-65ca51c3a35b
```

- **返回值**





## 查询用户所在部门发布过的所有日志（使用用户的所在部门查）

### **查**

- **url**

  /log/queryLogsByDepartment

- **method**

  get

- **字段**

```
department=董监办
```

- **返回值**



## 查询公告

### 查

- **url**

  /announce/queryAnnounce

- **method**

  get

- **字段**

  无

- 返回值

```
{
    "code": 1,
    "message": "数据库操作成功",
    "data": [
        {
            "id": "a6002020-65ee-11eb-9e56-dbbe60416257",
            "title": "公告1",
            "content": "公告1",
            "filePath": "",
            "startTime": "2021-2-3",
            "endTime": "2021-2-4",
            "creator": "公告1",
            "phoneNumber": "公告1",
            "influenceArea": "influenceArea1",
            "isMSG": "0",
            "createTime": "2021-2-3",
            "creatorId": "7774b160-4fc5-11eb-a408-65ca51c3a35b"
        },......
```

## 更新所选日志

### 更

- **url**

  /log/updataLog

- **method**

  post

- **字段**

```
{
    affair: "2211G虚拟化/容器系统日常可用性巡查（每集群）"
    affairMain: "常规巡查"
    affairMiddle: "22软件"
    completionOfProcess: "44"
    content: "444"
    createTime: "2021-2-1"
    creator: "管理员"
    creatorID: "7774b160-4fc5-11eb-a408-65ca51c3a35b"
    department: null
    divideProportion: ""
    finishTime: "2021-2-2"
    id: "14d4cde0-643f-11eb-a3ae-a305e4f16fa4"
    isCoorperation: "undefined"
    isImportant: "true"
    keyWords: "ccccc2"
    partner: ""
    partnerDepartment: ""
    partnerID: null
    status: "未完成"
}
```

- 返回值