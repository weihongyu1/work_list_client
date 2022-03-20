<template>
  <!--  任务视图-->
  <div style="width: 50%;border-right: 1px solid #f4f4f5;float: left;">
    <!--    标题-->
    <div style="color: pink;font-weight: bolder;font-size: x-large;margin-left: 20px">
      本月
    </div>
    <!--    添加任务-->
    <div style="margin-top: 20px">
      <input v-model="task.task" class="input-task" type="text" placeholder="+ 添加任务"/>
      <el-date-picker
          v-model="task.date"
          type="datetime"
          placeholder="Pick a Date"
          format="YYYY-MM-DD HH:mm"
          value-format="YYYY-MM-DD HH:mm"
      />

      <!--      下拉选择框-->
      <el-dropdown style="margin-left: 10px;margin-top: 9px">
    <span class="el-dropdown-link" style="color: #ff6681;cursor: pointer">
      分类
      <img src="../../../static/img/icon/down.png" style="height: 10px">
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(item,index) in tags"
                              v-text="item"
                              :command="item"
                              @click="addTag(item)"
            ></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <img src="../../../static/img/icon/add.png" style="height: 15px;margin-left: 5px" @click="addTask">
    </div>

    <!--    待办事项-->
    <div style="height: 20px"></div>
    <div>
      <ul>
        <li v-for="(item,index) in tasks" class="task" @click="listDetails(item)">
          <input type="checkbox" id="cbox+{{index}}">
          <span style="margin-left: 20px">{{item.task}}</span>
          <span style="margin-left: 35%">{{item.date}}</span>
          <span style="margin-left: 10px">{{item.tag}}</span>
          <img src="../../../static/img/icon/delete.png" class="delete-task" style="height: 15px;margin-left: 30px;" @click="deleteTask(item)">
        </li>
      </ul>
    </div>
  </div>

  <!--  编辑视图-->
  <div style="border-left: 1px solid  #f4f4f5;width: 100%;height: calc(100vh - 200px)">
    <!--    时间日期-->
    <div style="padding-left: 52%;padding-top: 10px">
      <input type="checkbox" id="edit-box">
      <span style="margin-left: 20px">{{edit.date}}</span>
      <span style="margin-left: 50px">{{edit.tag}}</span>
    </div>
    <!--    主题-->
    <div>
      <span style="padding: 20px;margin-top: 10px; color: pink;font-size: x-large">{{edit.task}}</span>
    </div>
    <!--    编辑-->
    <div>
      <textarea placeholder="描述" rows="25" cols="70" class="edit-info"></textarea>
    </div>
    <!--    保存-->
    <button class="saveButton">保存</button>
  </div>
</template>

<script>
export default {
  name: "ListMonth",
  created() {

  },
  data(){
    return{
      dateTime: '',
      // 任务对象
      tags: ["工作任务","个人备忘","购物清单","学习安排"],
      task: {
        task: '',
        date: new Date(),
        tag: '',
      },
      tasks: [], //任务集合
      //编辑对象
      edit: {
        task: '',
        date: '',
        tag: '',
        edit: ''
      }
    }
  },
  methods:{
    // 日期格式化
    dateFromat(dateTime){
      return dateTime.getFullYear() + '-' + (dateTime.getMonth() + 1) + '-' + dateTime.getDate() + ' ' + dateTime.getHours() + ':' + dateTime.getMinutes();
    },
    // 添加任务
    addTask(){
      console.log(this.task)
      this.tasks.push(this.task);
    },
    // 添加标签
    addTag(tag){
      this.task.tag = tag;
    },
    // 删除标签
    deleteTask(item){
      //删除标签，重新请求展示
    },
    // 编辑待办事项
    listDetails(task){
      this.edit.task = task.task;
      this.edit.date = task.date;
      this.edit.tag = task.tag;
      //根据任务查询编辑内容
      this.edit.edit = "编辑内容";
    }
  }
}
</script>

<style scoped>

.input-task,.input-date{
  outline-style: none;
}

.input-task{
  /*border: 1px solid pink;*/
  box-shadow: 0 0 2px 2px #ffe5ea;
  border-radius: 3px;
  padding: 7px;
}
.input-task:focus{
  box-shadow: 0 0 3px 3px pink;
}
.task{
  cursor: pointer;
  width: 93%;
  height: 20px;
  padding: 10px;
}
.task:hover{
  background-color: #ffe5ea;
}
.task:focus{
  background-color: #ffc0cb;
}
.delete-task:hover{
  background-color: #FFFFFF;
}

.edit-info{
  margin: 20px;
  outline-style: none;
  border: none;
}
.edit-info:hover,.edit-info:focus{
  box-shadow: #ffc0cb 0px 0px 5px;
}
.saveButton{
  padding: 5px;
  background-color: #FFFFFF;
  border: 2px solid #ffe5ea;
  color: #8c8c8c;
  margin-left: 85%;
  width: 80px;
}
.saveButton:hover{
  padding: 10px;
  background-color: pink;
  border: 2px solid #ffe5ea;
  color: #8c8c8c
}
</style>