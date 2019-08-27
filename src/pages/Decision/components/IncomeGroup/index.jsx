import React from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import PieChart from './PieChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function OverviewInfo() {
  return (
    <Row wrap gutter={20}>
      <Col l="12">
        <IceContainer className={styles.container}>
          <h4 className={styles.title}>院长预警：</h4>
          <ul className={styles.summary}>
            <li className={styles.item}>
              <span className={styles.label}>药品药库：</span>
              <span className={styles.special}>
                药库抗生素余量不多，需尽快补充！
              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.label}>住院护理：</span>
              <span className={styles.special}>
                院内ICU爆发感染，死亡率骤增！

              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.label}>仪器设备：</span>
              <span className={styles.special}>
                放射科核磁共振仪器损坏，急需维修!
              </span>
            </li>
            <li className={styles.item}>              
              <span className={styles.special}></span>
            </li>         
            <li className={styles.item}>               
              <span className={styles.value}></span>
            </li>
             <li className={styles.item}>             
              <span className={styles.value}></span>
            </li>
          </ul>
        </IceContainer>
      </Col>
      <Col l="12">
        <IceContainer className={styles.container}>
          <h4 className={styles.title}>
            <span className={styles.label2}>8月总收入：16234.59万</span>
            <span className={styles.morecol}>8月总支出：5516.23万</span>
          </h4>
            
          <PieChart />
        </IceContainer>
      </Col>
       
    </Row>
  );
}
