import React from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const frameworkIcon = require('./images/yongyao.png');
const componentIcon = require('./images/component_icon.png');
const apiIcon = require('./images/api_icon.png');

const abilities = [
  {
    icon: frameworkIcon,
    title: '医疗质量分析',
    content: '',
    link: '/#/chart/basic',
  },
  {
    icon: componentIcon,
    title: '门急诊分析',
    content: '',
    link: '/components/',
  },
  {
    icon: apiIcon,
    title: '住院分析',
    content: '',
    link: '/api/',
  },
  {
    icon: frameworkIcon,
    title: '护理分析',
    content: '',
    link: '/framework/',
  },
  {
    icon: componentIcon,
    title: '药品分析',
    content: '',
    link: '/components/',
  },
  {
    icon: apiIcon,
    title: '设备分析',
    content: '',
    link: '/api/',
  },
  {
    icon: componentIcon,
    title: '人力资源',
    content: '',
    link: '/components/',
  },
  {
    icon: apiIcon,
    title: '绩效分析',
    content: '',
    link: '/api/',
  },
];

export default function Index() {
  const renderAblities = () => {
    return abilities.map(({ icon, title, content, link }, idx) => {
      return (
        <Col xxs="24" l="8" className={styles.item} key={idx}>
          <a href={link} className={styles.link}>
          <img src={icon}  className={styles.icon} alt="" />
         
          </a>
          <div className={styles.icon_title}>
          <a href={link} className={styles.link}>
            {title}
          </a>
          </div>
          <div
            className={styles.content}
          >
           
              {content}
           
          </div>
         
        </Col>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>全院应用系统</div>
      <Row wrap className={styles.group}>
        {renderAblities()}
      </Row>
    </div>
  );
}


