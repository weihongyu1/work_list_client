<template>
<!--  头部展示屏-->
  <div id="header">
    <Header></Header>
  </div>

<!--  中部展示屏-->
  <div id="main">
    <div id="main-1">
      <Main1></Main1>
    </div>
    <div id="main-2">
      <Main2></Main2>
    </div>
  </div>

<!--  footer-->
  <div id="footer">
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/home/Header";
import Main1 from "../components/home/Main-1";
import Main2 from "../components/home/Main-2";
import Footer from "../components/home/Footer";
import Aside from "../components/product/Aside";
export default {
  name: "Home",
  components: {Aside, Footer, Main2, Main1, Header}
}
</script>

<style scoped>
/** 默认背景 **/
body{
  background-color: #EBEEF5;
}

/* header头部展示样式 */
#header{
  width: 100%;
  background-color: #FFFFFF;
  position:fixed;
  z-index:999;
  top:0;
}

/* 中部展示屏样式 */
#main{
  background-color: #FFFFFF;
  margin-top: 2px;
}
#main-2{
  height: 265vh;
}
#main-1{
  height: 99vh;
  opacity: 0.8;
}
/* 底部内容 */
#footer{
  height: 65vh;
  background-color: #FFFFFF;
  overflow: hidden;
}
</style>