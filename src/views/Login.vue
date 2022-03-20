<template>
  <div id="login">
    <div id="login-box">
      <div id="title">请登录</div>
      <input type="text" placeholder="用户名" name="uname"/><br>
      <input type="password" placeholder="密码" name="passwd"/><br>
      <input type="submit" value="登录"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
#login{
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-image: url("../static/img/login.png");
}

#login-box{
  position: absolute;
  left: 75vh;
  top: 30vh;
  height: 400px;
  width: 400px;
}

input{
  margin-top: 30px;
  height: 35px;
  width: 300px;
  border: 1px solid #ffe5ea;
  background-color: #FFFFFF;
  opacity: 0.5;
  margin-left: 50px;
  outline-color: pink;
  border-radius: 10px;
}

#title{
  font-size: x-large;
  font-weight: bolder;
  text-align: center;
  margin-top: 10px;
  color: #FFFFFF;
  letter-spacing: 5px;
}
</style>