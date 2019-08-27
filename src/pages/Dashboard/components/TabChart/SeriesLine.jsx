import React from 'react';
import { Chart, Axis, Geom, Tooltip } from 'bizcharts';
import { DataSet } from '@antv/data-set';

export default function SeriesLine() {
  // 参考：https://alibaba.github.io/BizCharts/
  // 数据源
  const data = [
    { month: '一月', Tokyo: 7.0, London: 20 },
    { month: '二月', Tokyo: 6.9, London: 22 },
    { month: '三月', Tokyo: 9.5, London: 24 },
    { month: '四月', Tokyo: 14.5, London: 30 },
    { month: '五月', Tokyo: 18.4, London: 50 },
    { month: '六月', Tokyo: 21.5, London: 65 },
    { month: '七月', Tokyo: 25.2, London: 70 },
    { month: '八月', Tokyo: 26.5, London: 80 },
    { month: '九月', Tokyo: 23.3, London: 85 },
    { month: '十月', Tokyo: 18.3, London: 90 },
    { month: '十一月', Tokyo: 13.9, London: 80 },
    { month: '十二月', Tokyo: 9.6, London: 70 },
  ];

  // DataSet https://github.com/alibaba/BizCharts/blob/master/doc/tutorial/dataset.md#dataset
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: 'fold',
    fields: ['Tokyo', 'London'],
    key: 'city',
    value: 'temperature',
  });

  // 定义度量
  const cols = {
    month: {
      range: [0, 1],
    },
  };

  return (
    <div className="chart-line">
      <Chart
        height={300}
        data={dv}
        scale={cols}
        forceFit
        padding={[40, 35, 40, 35]}
      >
        <Axis name="month" />
        <Axis name="temperature" label={{ formatter: (val) => `${val}` }} />
        <Tooltip crosshairs={{ type: 'y' }} />
        <Geom
          type="line"
          position="month*temperature"
          size={2}
          color="city"
          shape="smooth"
        />
        <Geom
          type="point"
          position="month*temperature"
          size={4}
          shape="circle"
          color="city"
          style={styles.point}
        />
      </Chart>
    </div>
  );
}

const styles = {
  point: {
    stroke: '#fff',
    lineWidth: 1,
  },
};
