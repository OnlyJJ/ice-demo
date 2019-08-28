import React from 'react';
import { Table } from '@alifd/next';
import styles from  './index.module.scss'

// MOCK 数据，实际业务按需进行替换

const getData = () => {
  return Array.from({ length: 10 }).map(() => {
    return {
      rank: `${index + 1}`,
      developer: '淘小宝',
      cost: `123${index}`,
      score: `8${index}.${index}`,
    };
  });
};

export default function CustomTable() {
  const down = (
    <img
      src={require('./images/TB1ReMsh3vD8KJjy0FlXXagBFXa-12-18.png')}
      className={styles.down}
      alt=""
    />
  );

  const up = (
    <img
      src={require('./images/TB1Q1Msh3vD8KJjy0FlXXagBFXa-12-18.png')}
      className={styles.up}
      alt=""
    />
  );

  let list = [
  {
    rank:1,
    name:"内科",
    cost:12518.45,
    tub:up
  },
  {
    rank:2,
    name:"外科",
    cost:9319.55,
    tub:up
  },
  {
    rank:3,
    name:"药剂科",
    cost:8703.91,
    tub:down
  },
  {
    rank:4,
    name:"口腔科",
    cost:8391.37,
    tub:up
  },
  {
    rank:5,
    name:"皮肤科",
    cost:7261.79,
    tub:down
  },
  {
    rank:6,
    name:"放射科",
    cost:5710.42,
    tub:down
  },
  {
    rank:7,
    name:"妇产科",
    cost:4920.56,
    tub:down
  },
  {
    rank:8,
    name:"儿科",
    cost:4308.18,
    tub:up
  },
  {
    rank:9,
    name:"检验科",
    cost:3718.03,
    tub:up
  },
  {
    rank:10,
    name:"眼科",
    cost:3162.92,
    tub:up
  },

];

  return (
    <Table dataSource={list} hasBorder={false}>
      <Table.Column title="排名" dataIndex="rank" />
      <Table.Column title="科室" dataIndex="name" />
      <Table.Column title="费用支出（万）" dataIndex="cost" />
      <Table.Column title="同比去年" dataIndex="tub" />
    </Table>
  );
}
