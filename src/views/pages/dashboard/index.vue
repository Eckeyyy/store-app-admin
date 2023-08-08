<template>
  <div class="dashboard-comntainer">
    <Card :data="data" />
    <div
      class="chart-container"
      style="margin: 20px;"
    >
      <div
        ref="chart"
        class="chart"
        style="width: 100% ; height: 600px;"
      />
    </div>
  </div>
</template>

<script>
import Card from './card.vue';
import * as echarts from 'echarts/lib/echarts';
import { GridComponent } from 'echarts/components'
import 'echarts/lib/chart/line'; // 引入平滑曲线图所需的模块
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
export default {
  components: {
    Card
  },
  data() {
    return {
      data: ['商品总览', '用户总览', '销售总览']
    }
  },
  mounted() {
    this.setCharts()
  },
  methods: {
    setCharts() {
      echarts.use(GridComponent)
      const myChart = echarts.init(this.$refs.chart)
      const options = {
        legend: {},
        tooltip: {},
        dataset: {
          // 提供一份数据。
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'line', smooth: true, }, { type: 'line', smooth: true }, { type: 'line', smooth: true },]

      };
      myChart.setOption(options)
    }
  }
}
</script>

<style lang="less" scoped>
.dashboard-comntainer {
  width: 100%;

  .chart {
    margin: 0 auto;
  }
}
</style>