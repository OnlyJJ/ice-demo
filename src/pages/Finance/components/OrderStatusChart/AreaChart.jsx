import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import { DataSet } from '@antv/data-set';

export default function AreaChart() {
  const data = [
    { year: '2012年', 支出: 23556.24, 收入: 82834.29 },
    { year: '2013年', 支出: 31907.82, 收入: 95180.35 },
    { year: '2014年', 支出: 45108.33, 收入: 101808.19 },
    { year: '2015年', 支出: 65725.27, 收入: 118193.26 },
    { year: '2016年', 支出: 60280.72, 收入: 107081.28 },
    { year: '2017年', 支出: 78088.29, 收入: 125928.62 },
    { year: '2018年', 支出: 71953.38, 收入: 128074.15 },
    { year: '2019年', 支出: 81548.76, 收入: 134106.24 },
  ];
  const dv = new DataSet.View().source(data);
  dv.transform({
    type: 'fold',
    fields: ['支出', '收入'],
    key: 'type',
    value: 'value',
  });

  const scale = {
    value: {
      alias: 'The Share Price in Dollars',
      formatter: (val) => {
        return `${val}`;
      },
    },
    year: {
      range: [0, 1],
    },
  };

  return (
    <Chart
      height={400}
      data={dv}
      padding={[40, 20, 40, 50]}
      scale={scale}
      forceFit
    >
      <Tooltip crosshairs />
      <Axis />
      <Legend />
      <Geom type="area" position="year*value" color="type" shape="smooth" />
      <Geom
        type="line"
        position="year*value"
        color="type"
        shape="smooth"
        size={2}
      />
    </Chart>
  );
}
