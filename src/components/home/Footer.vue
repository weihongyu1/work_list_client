<template>
  <div style="margin-left: 20vh">
    <span style="color: pink;font-weight: bolder;font-size: x-large;">佳佳待办</span>
  </div>

  <div style="border-top: 1px solid #e6e6e6;width: 1200px;margin-left: 20vh;margin-top: 3vh"></div>

  <div>
<!--    产品-->
    <div class="product">
      <span style="color: black;font-weight: bolder">产品</span>
      <ul style="color: #808080">
        <li>佳佳待办-web</li>
        <li>佳佳待办-微信小程序</li>
        <li>佳佳待办-Android</li>
        <li>佳佳待办-Ios</li>
      </ul>
    </div>
<!--    探索-->
    <div class="search">
      <span style="color: black;font-weight: bolder">探索</span>
      <ul style="color: #808080">
        <li>最新动态</li>
        <li>会员权益</li>
        <li>使用技巧</li>
        <li>帮助支持</li>
        <li>用户故事</li>
      </ul>
    </div>
<!--    待办TIPS-->
    <div class="tips">
      <span style="color: black;font-weight: bolder">TIPS</span>
      <ul style="color: #808080">
        <li>功能亮点</li>
        <li>立即使用</li>
      </ul>
    </div>
<!--    社区-->
    <div class="community">
      <span style="color: black;font-weight: bolder">社区</span>
      <ul style="color: #808080">
        <li>成为咨询顾问</li>
        <li>开发者</li>
      </ul>
    </div>
  </div>

  <div style="margin-top: 50px;margin-left: 100px;float: left">
    <img src="../../static/img/wechat.png" style="width: 35px">
    <img src="../../static/img/qq.png" style="width: 35px">
    <img src="../../static/img/微博_weibo.png" style="width: 35px">
    <img src="../../static/img/phone.png" style="width: 35px">
  </div>

  <p style="color: pink;margin-left: 500px;margin-top: 350px;font-size: small">法律信息 |  隐私协议 | 用户权限 | 安全信息 | 联系我们 | 应用版本: 1.0.0 开发者：why</p>
  <p style="color: pink;margin-left: 650px;margin-top: 5px;font-size: small"><a href="">© 陇ICP备2021003535号</a></p>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
li{
  margin-top: 25px;
}

.product{
  float: left;
  width: 220px;
  margin-left: 30vh;
  margin-top: 25px;
}

.search{
  float: left;
  width: 160px;
  margin-top: 25px;
  margin-left: 20px;
}

.tips{
  float: left;
  width: 160px;
  margin-top: 25px;
}

.community{
  float: left;
  width: 160px;
  margin-top: 25px;
}

img{
  margin-left: 10px;
}
</style>