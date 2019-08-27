import React from 'react';
import IceContainer from '@icedesign/container';
import ReactEcharts from 'echarts-for-react';

/**
 * 图表来源参考：http://gallery.echartsjs.com/editor.html?c=xHJDyokLHb
 */
export default function PieLineChart() {
  const getOption = () => {
    const dataAll = [1589, 1259, 1462, 1324, 1232, 1176, 1096, 1014, 1683, 1370];
    const yAxisData = [  
      '内科',
      '外科',
      '皮肤科',
      '口腔科',
      '妇产科',
      '检验科',
      '病理科',
      '儿科',
      '耳鼻喉科',
      '手术室',
    ];

    return {
      backgroundColor: '#fff',
      title: [
        {
          text: '门诊收入占比',
          x: '2%',
          y: '1%',
          textStyle: { color: '#666', fontSize: '16' },
        },
        {
          text: '科室收入TOP10',
          x: '40%',
          y: '1%',
          textStyle: { color: '#666', fontSize: '16' },
        },
        {
          text: '住院收入占比',
          x: '2%',
          y: '50%',
          textStyle: { color: '#666', fontSize: '16' },
        },
      ],
      grid: [{ x: '50%', y: '7%', width: '45%', height: '90%' }],
      tooltip: {
        formatter: '{b} ({c})',
      },
      xAxis: [
        {
          gridIndex: 0,
          axisTick: { show: false },
          axisLabel: { show: false },
          splitLine: { show: false },
          axisLine: { show: false },
        },
      ],
      yAxis: [
        {
          gridIndex: 0,
          interval: 0,
          data: yAxisData.reverse(),
          axisTick: { show: false },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#999',
            },
          },
          splitLine: { show: false },
          axisLine: { show: true, lineStyle: { color: '#eee' } },
        },
      ],
      series: [
        {
          name: '各渠道投诉占比',
          type: 'pie',
          radius: '30%',
          center: ['22%', '25%'],
          color: ['#86c9f4', '#4da8ec', '#3a91d2', '#005fa6', '#315f97'],
          data: [
            { value: 835, name: '其他' },
            { value: 3310, name: '手术' },
            { value: 1334, name: '材料' },
            { value: 1135, name: '检验' },
            { value: 1405, name: '理疗' },
            { value: 3105, name: '药品' },
          ],
          labelLine: { normal: { show: false } },
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: '{b} \n ({d}%)',
                textStyle: { color: '#999' },
              },
            },
          },
        },
        {
          name: '住院收入占比',
          type: 'pie',
          radius: '30%',
          center: ['22%', '75%'],
          color: ['#86c9f4', '#4da8ec', '#3a91d2', '#005fa6', '#315f97'],
          labelLine: { normal: { show: false } },
          data: [
            { value: 1335, name: '手术' },
            { value: 2310, name: '药品' },
            { value: 2234, name: '护理' },
            { value: 935, name: '其他' },
            { value: 1035, name: '材料' },
            { value: 1535, name: '检查' },
          ],
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: '{b} \n ({d}%)',
                textStyle: { color: '#999' },
              },
            },
          },
        },
        {
          name: '投诉原因TOP10',
          type: 'bar',
          xAxisIndex: 0,
          yAxisIndex: 0,
          barWidth: '45%',
          itemStyle: { normal: { color: '#86c9f4' } },
          label: {
            normal: {
              show: true,
              position: 'right',
              textStyle: { color: '#9EA7C4' },
            },
          },
          data: dataAll.sort(),
        },
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
