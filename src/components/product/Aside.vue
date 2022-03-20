<template>
  <el-menu
      default-active="/list-day"
      class="el-menu-vertical-demo"
      :router="true"
      :unique-opened="true"
      style="min-height: calc(100vh - 91px)"
  >
<!--    功能清单-->
    <el-sub-menu index="list">
      <template #title>
        <el-icon><location /></el-icon>
        <span>近期事项</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/list-day">今天<span style="padding-left: 80%">2</span></el-menu-item>
        <el-menu-item index="/list-week">最近7天</el-menu-item>
        <el-menu-item index="/list-month">本月</el-menu-item>
        <el-menu-item index="/list-all">所有</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>

<!--    日程安排-->
    <el-sub-menu index="class">
      <template #title>
        <el-icon><location /></el-icon>
        <span>分类清单</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/class-work">工作任务</el-menu-item>
        <el-menu-item index="/class-person">个人备忘</el-menu-item>
        <el-menu-item index="/class-shopping">购物清单</el-menu-item>
        <el-menu-item index="/class-study">学习安排</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>

    <!--    日程安排-->
    <el-sub-menu index="complete">
      <template #title>
        <el-icon><location /></el-icon>
        <span>完成情况</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/com-completed">已完成</el-menu-item>
        <el-menu-item index="/com-expired">已过期</el-menu-item>
        <el-menu-item index="/com-garbage">垃圾箱</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>

<!--    图表分析-->
    <el-sub-menu index="pic">
      <template #title>
        <el-icon><location /></el-icon>
        <span>图表分析</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/pic-analyze">图表分析</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style scoped>
/* 设置element-ui plus 侧边栏样式 */
.el-menu-item.is-active {
  background-color: #ffe5ea !important;
  opacity: 0.8;
  color: #ff6681;
}
.el-menu-item:hover{
  background-color: #ffe5ea !important;
  opacity: 0.8;
  color: #ff6681;
}
</style>