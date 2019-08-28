import React from 'react';
import { Grid, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import AreaChart from './AreaChart';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function Index() {
  return (
    <IceContainer title="收入支出比">
      <Row wrap>
        <Col xxs="12" s="12" l="6">
          <div className={styles.box}>
          <p className={styles.textLabel}>累计支出</p>
            <h2 className={styles.counterNum}>
              56.69 亿{' '}
              <Icon
                size="xs"
                type="arrow-down-filling"
                className={`${styles.arrowIcon} ${styles.arrowDown }`}
              />
            </h2>
            
          </div>
        </Col>
        
        <Col xxs="12" s="12" l="6">
          <div className={styles.box}>
          <p className={styles.textLabel}>累计收入</p>
            <h2 className={styles.counterNum}>
              89.54 亿{' '}
              <Icon
                size="xs"
                type="arrow-up-filling"
                className={`${styles.arrowIcon} ${styles.arrowUp }`}
              />
            </h2>
            
          </div>
        </Col>
      </Row>
      <AreaChart />
    </IceContainer>
  );
}
