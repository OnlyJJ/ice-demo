import React from 'react';
import { Chart, Axis, Geom, Tooltip } from 'bizcharts';

export default function BasicLine() {
  // 参考：https://alibaba.github.io/BizCharts/
  // 数据源
  const data = [
    { year: '2011', value: 8.8 },
    { year: '2012', value: 9.2 },
    { year: '2013', value: 10.1 },
    { year: '2014', value: 11.2 },
    { year: '2015', value: 10.8 },
    { year: '2016', value: 12.5 },
    { year: '2017', value: 13.2 },
    { year: '2018', value: 15.4 },
    { year: '2019', value: 17.3 },
  ];

  const cols = {
    value: { min: 0 },
    year: { range: [0, 1] },
  };

  return (
    <div className="basic-line">
      <Chart
        height={300}
        data={data}
        scale={cols}
        // forceFit
        padding={[40, 35, 40, 35]}
      >
        <Axis name="year" />
        <Axis name="value" />
        <Tooltip crosshairs={{ type: 'y' }} />
        <Geom type="line" position="year*value" size={2} />
        <Geom
          type="point"
          position="year*value"
          size={4}
          shape="circle"
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
