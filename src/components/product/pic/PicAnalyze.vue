<template>
  <div style="color: pink;font-weight: bolder;font-size: x-large;margin-left: 20px">
    图表分析
  </div>
  <div>
    <div class="echarts-box">
<!--      年总计划分析-->
      <div id="totalLineChart" :style="{ width: '100%', height: '400px', marginTop: '30px' }"></div>
      <div id="totalCycleChart" :style="{ width: '100%', height: '400px', marginTop: '30px' }"></div>
      <div id="totalPillarChart" :style="{ width: '100%', height: '400px', marginTop: '30px' }"></div>
<!--      工作图表分析-->
      <div id="workChart" :style="{ width: '100%', height: '30px'}"></div>
<!--      个人备忘图表分析-->
<!--      购物清单图表分析-->
<!--      学习安排图表分析-->
    </div>
  </div>

<!--  建议-->
  <div>
    建议
  </div>
</template>

<script>
import * as echarts from "echarts";

const {onUnmounted, onMounted} = require("vue");

let monthAll = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
let totalLinePlan = [820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 230, 4321, 4129];

export default {
  name: "PicAnalyze",
  created() {
    //获取值
    this.drawTotalLineChart();
  },
  data() {
    return{

    }
  },
  methods: {
    drawTotalLineChart(){
      /// 声明定义一下echart
      let echart = echarts;

      onMounted(() => {
        totalLineChart();
        totalCycleChart();
        totalPillarChart();
      });

      onUnmounted(() => {
        echart.dispose;
      });

      // 折线图
      function totalLineChart() {
        let chart = echart.init(document.getElementById("totalLineChart"));
        // 把配置和数据放这里
        chart.setOption({
          title: {
            text: '2022年每月数据统计',
            left: 'center',
          },
          xAxis: {
            type: "category",
            data:  monthAll
          },
          tooltip: {
            trigger: "axis"
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: totalLinePlan,
              type: "line",
              smooth: true,
              itemStyle : {
                normal : {
                  color: '#ff6680',
                  lineStyle:{
                    color:'pink'
                  }
                }
              },
            }
          ]
        });
        window.onresize = function() {
          //自适应大小
          chart.resize();
        };
      }
      //饼状图
      function totalCycleChart() {
        let chart = echart.init(document.getElementById("totalCycleChart"));
        // 把配置和数据放这里
        chart.setOption({
          title: {
            text: '2022年分类清单统计',
            subtext: '分类数据',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: '详细数据',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: '工作任务' },
                { value: 735, name: '个人备忘' },
                { value: 580, name: '购物清单' },
                { value: 484, name: '学习安排' }
              ]
            }
          ],
        });
        window.onresize = function() {
          //自适应大小
          chart.resize();
        };
      }

      //柱状图
      function totalPillarChart() {
        let chart = echart.init(document.getElementById("totalPillarChart"));
        // 把配置和数据放这里
        chart.setOption({
          legend: {},
          tooltip: {},
          title: {
            text: '2022年每月分类数据统计',
            left: 'left',
          },
          dataset: {
            source: [
              ['计划', '工作任务', '个人备忘', '购物清单', '学习安排'],
              ['一月', 43, 85, 93,50],
              ['二月', 83, 73, 55, 60],
              ['三月', 86, 65, 82, 70],
              ['四月', 72, 53, 39, 35],
              ['五月', 72, 53, 39, 35],
              ['六月', 72, 53, 39, 35],
              ['七月', 72, 53, 39, 35],
              ['八月', 72, 53, 39, 35],
              ['九月', 72, 53, 39, 35],
              ['十月', 72, 53, 39, 35],
              ['十一月', 72, 53, 39, 35],
              ['十二月', 72, 53, 39, 35]
            ]
          },
          xAxis: { type: 'category' },
          yAxis: {},
          series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
        });
        window.onresize = function() {
          //自适应大小
          chart.resize();
        };
      }
      return { totalLineChart,totalCycleChart,totalPillarChart };
    }
  }
}
</script>

<style lang="css" scoped>

</style>