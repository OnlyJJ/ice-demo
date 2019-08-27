import React, { Component } from 'react';
import MultiplePieChart from './components/MultiplePieChart';
import OrderStatusChart from './components/OrderStatusChart';

export default function() {
  return (
    <div className="Finance-page">
      {/* 基于 highCharts 的饼图组合 */}
      <MultiplePieChart />
      {/* 订单状态型的图表 */}
      <OrderStatusChart />
    </div>
  );
}
