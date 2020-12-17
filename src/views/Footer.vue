<template>
  <el-footer class="footer">

    <p class="date">当前日期：{{date}}</p>
    <p class="version">2021版version-1.0.0</p>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      date: ''
    }
  },
  methods: {
    //获取当前日期
    getDate() {
      let date = new Date();
      let year = date.getFullYear();//年
      let month = date.getMonth() + 1;//月
      let day = date.getDate();//日
      let week = date.getDay() //星期
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      let weekStr = ' 星期'
      switch (week) {
        case 0:
          weekStr += "日";
          break;
        case 1:
          weekStr += "一";
          break;
        case 2:
          weekStr += "二";
          break;
        case 3:
          weekStr += "三";
          break;
        case 4:
          weekStr += "四";
          break;
        case 5:
          weekStr += "五";
          break;
        case 6:
          weekStr += "六";
          break;
      }
      this.date = year + "/" + month + "/" + day + weekStr
      // console.log(year + "/" + month + "/" + day + weekStr);
    }
  },
  mounted: function () {
    this.getDate()
  }
}
</script>

<style lang="scss" scoped>
.footer{
  text-align: center;
}
p {
  display: inline-block;
}
.date {
  font-weight: bold;
  height: 60px;
}
.version {
  position: absolute;
  line-height: 60px;
  right: 0;
  font-size: 12px;
  margin-right: 20px;
}
</style>