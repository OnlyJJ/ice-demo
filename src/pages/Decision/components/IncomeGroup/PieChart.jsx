import React from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

export default function PieChart() {
  const { DataView } = DataSet;
  const data = [
    {
      item: '住院',
      count: 36,
    },
    {
      item: '门诊',
      count: 21,
    },
    {
      item: '检验',
      count: 10,
    },
    {
      item: '药品',
      count: 18,
    },
    {
      item: '护理',
      count: 10,
    },
    {
      item: '体检',
      count: 5,
    },
  ];
  const dv = new DataView();
  dv.source(data).transform({
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent',
  });
  const cols = {
    percent: {
      formatter: (val) => {
        val = `${val * 100}%`;
        return val;
      },
    },
  };
  return (
    <Chart height={228} data={dv} scale={cols} padding={[10]}>
      <Coord type="theta" radius={0.85} />
      <Axis name="percent" />
      <Legend position="right" offsetX={-100} offsetY={-60} />
      <Tooltip
        showTitle={false}
        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
      />
      <Geom
        type="intervalStack"
        position="percent"
        color="item"
        tooltip={[
          'item*percent',
          (item, percent) => {
            percent = `${percent * 100}%`;
            return {
              name: item,
              value: percent,
            };
          },
        ]}
        style={{
          lineWidth: 1,
          stroke: '#fff',
        }}
      >
        <Label
          content="percent"
          offset={-40}
          textStyle={{
            rotate: 0,
            textAlign: 'center',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)',
          }}
        />
      </Geom>
    </Chart>
  );
}
