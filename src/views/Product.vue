<template>
  <div class="common-layout">
    <el-container>

<!--      头部区域-->
      <el-header>
        <Header></Header>
        <div style="border-bottom: 1px solid  #c8c9cc;width: 100%"></div>
      </el-header>
      <el-container>

<!--        侧边栏-->
        <el-aside width="260px">
          <Aside></Aside>
        </el-aside>

<!--        主体区域-->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/product/Header";
import Aside from "../components/product/Aside";
export default {
  name: "Product",
  components: {Aside, Header}
}
</script>

<style scoped>
*{
  height: 100vh;
}
.el-header{
  height: 90px !important;
}
.el-container{
  overflow-y: hidden;
}
</style>