西藏银行——行务综合服务平台

## 接口

标准：

服务端查询报错全部返回0

查询成功返回1

### 登录

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



### 部门管理

##### **增**

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


##### **删**

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




##### **改**

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




##### **查**

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






### 人员管理

##### **增**

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

##### **删**

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



##### **改**

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



##### **查**

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












- 