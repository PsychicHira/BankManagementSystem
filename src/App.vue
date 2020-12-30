<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function () {
    // let login = document.getElementsByClassName('login')
    // console.log(login.length)
    // document.getElementsByTagName("html")[0].className = "html";
    // document.getElementsByTagName("body")[0].className = "body";
  },

  beforeDestroy: function () {
    // console.log('xiaohui')

    // document.getElementsByTagName("html")[0].removeAttribute("class", "html");

    // document.getElementsByTagName("body")[0].removeAttribute("class", "body");
    // console.log('xiaohui')
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
// .body {
//   background-image: url("./assets/bdlg.jpg");
//   background-repeat: no-repeat;
//   background-size: 100%;
// }
// .red{
//   background-color: red;
// }
</style>
