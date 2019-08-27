import React from 'react';
import IceContainer from '@icedesign/container';
import ReactEcharts from 'echarts-for-react';

/**
 * 图表来源参考：http://gallery.echartsjs.com/editor.html?c=xHJDyokLHb
 */
export default function PieLineChart() {
  const getOption = () => {
    

    return {
      title: [{
             text: '2019年收入总览',
             x: 'center',
             textStyle: {
                 fontSize: 20
             }
         },
         {
             text: '占比',
             x: '19.8%',
             y: '45%',
             textAlign: 'center',
             textBaseline: 'middle',
             textStyle: {
                 fontSize: 20
             }
         },
         {
             text: '同比',
             x: '68%',
             y: '45%',
             textAlign: 'center',
             textBaseline: 'middle',
             textStyle: {
                 fontSize: 20
             }
         },
         
         {
             text: '￥134106.24万',
             x: 'center',
             y: '8%',
             subtext: '2019-08-25 12:00:00',
             textStyle: {
                 fontSize: 80
             }
         }
     ],
      tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     legend: [{
             data: ['', ''],
             x: '25%',
             y: '60%'
         },
         {
             data: ['住院', '门诊', '护理', '手术', '药品', '检验'],
             x: 'left',
             orient: 'vertical'
         }
     ],
     grid: [{
             left: '0%',
             right: '55%',
             top: '65%',
             bottom: '5%',
             containLabel: true
         },
         {
             gridindex: 1,
             left: '48%',
             right: '3%',
             top: '65%',
             bottom: '5%',
             containLabel: true
         }
     ],
     xAxis: [{
             type: 'value',
             axisLabel: {
                 formatter: '{value} 万'
             },
             boundaryGap: [0, 0.01]
         },
         {
             gridIndex: 1,
             type: 'category',
             boundaryGap: false,
             data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
         }
     ],
     yAxis: [{
             type: 'category',
             data: ['一级护理', '药品-西药', '药品-中药', '药品-抗癌药', '药品-保健药', '药品-处方药', '检验', '二级护理', '特级护理', '体检'],
             axisLabel: {
                 interval: 0
             }
         },
         {
             gridIndex: 1,
             type: 'value',
             axisLabel: {
                 formatter: '{value} 万'
             }
         }
     ],
     series: [{
             name: '外销',
             type: 'bar',
             label: {
                 normal: {
                     show: true,
                     position: 'right'
                 }
             },
             data: [6576.28, 18840.18, 2997.15, 31865.25, 3026.62, 18877.09, 16361.68, 6234.08, 5903.56, 1188.28]
         },
            
         {
             name: '大煤种',
             type: 'pie',
             center: ['20%', '45%'],
             radius: ['15%', '20%'],
             label: {
                 normal: {
                     formatter: '{b} :{c}万({d}%)'
                 }
             },
             data: [{
                     value: 15182.57,
                     name: '住院'
                 },
                 {
                     value: 6202.42,
                     name: '门诊'
                 },
                 {
                     value: 3361.68,
                     name: '护理'
                 },
                 {
                     value: 11489.29,
                     name: '手术'
                 },
                  {
                     value: 12361.68,
                     name: '药品'
                 },
                 {
                     value: 1489.29,
                     name: '检验'
                 }
             ]
         },
         {
             name: '同比',
             type: 'pie',
             center: ['68%', '45%'],
             radius: ['15%', '20%'],
             label: {
                 normal: {
                     formatter: '{b} :{c}万({d}%)'
                 }
             },
             data: [{
                     value: 29384.99,
                     name: '2018年'
                 },
                 {
                     value: 34106.24,
                     name: '2019年'
                 }
             ]
         },
         
         {
             xAxisIndex: 1,
             yAxisIndex: 1,
             name: '月统计',
             type: 'line',
             lineStyle: {
                 normal: {
                     color: '#4ea397'
                 }
             },
             data: ['12516.48', '10482.46', '14218.74', '13584.66', '11315.28', '15665.34', '16257.19', '13054.78', '14127.51', '15180.03', '12416.46', '14113.99', ],
             markPoint: {
                 data: [{
                         type: 'max',
                         name: '最大值',
                         symbolSize: 80
                     },
                     {
                         type: 'min',
                         name: '最小值',
                         symbolSize: 50
                     }
                 ],
                 itemStyle: {
                     normal: {
                         color: '#d0648a'
                     }
                 }
             },
             markLine: {
                 data: [{
                     type: 'average',
                     name: '平均值'
                 }]
             }
         }
     ],
    };
  };

  return (
    <div className="pie-line-chart">
      <IceContainer>
        <ReactEcharts option={getOption()} style={{ height: '680px' }} />
      </IceContainer>
    </div>
  );
}
