<template>
  <div id="main-1" style="color:black;">
    <div style="text-align: center;padding-top: 360px">
      <div style="color: #FFFFFF;font-size: xxx-large">
        <h1>Start Your List!</h1>
      </div>
      <div id="learn-more">
       <a href=""> Learn More</a>
        <image></image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main-1"
}
</script>

<style scoped>
#main-1{
  background-image: url("../../static/img/screen2.png");
  background-size: cover;
  opacity: 0.7;
  height: calc(99vh - 90px);
}

#learn-more{
  height: 30px;
  width: 140px;
  text-align: center;
  padding-top: 15px;
  margin-left: 90vh;
  margin-top: 10vh;
  font-size: larger;
  color: #FFFFFF;
}
a{
  color: #FFFFFF;
}
a:hover{
  color: pink;
}
</style>