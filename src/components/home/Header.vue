<template>
  <div id="header">
    <ul>
      <li style="color: pink;font-weight: bolder;font-size: larger;padding-top: -10px">佳佳待办</li>
      <li style="font-size: medium;">
        <a href="/product" class="product">产品</a>
      </li>
      <li style="font-size: medium;" class="search">
        <a href="" class="product">探索</a>
      </li>
      <li style="margin-top: 3.5vh;margin-left: 60%">
        <router-link to="/login"><button class="loginButton">注册/登录</button></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
#header{
  background-color: white;
  height: 90px;
}
ul{
  margin-left: 200px;
}

li{
  display: block;
  margin-top: 36px;
  height: 60px;
  float: left;
  padding-left: 30px;
  color: #73767a;
}

.product:hover,.search:hover{
  color: pink;
}

.product:hover .product-list{
  display: block;
}

.loginButton{
  padding: 10px;
  background-color: #FFFFFF;
  border: 2px solid #ffe5ea;
  color: #8c8c8c
}
.loginButton:hover{
  padding: 10px;
  background-color: pink;
  border: 2px solid #ffe5ea;
  color: #8c8c8c
}
</style>