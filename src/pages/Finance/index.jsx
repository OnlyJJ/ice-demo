import React, { Component } from 'react';
import MultiplePieChart from './components/MultiplePieChart';
import OrderStatusChart from './components/OrderStatusChart';
import TableChartCard from './components/TableChartCard';

export default function() {
  return (
    <div className="Finance-page">
      <TableChartCard />
      {/* 基于 highCharts 的饼图组合 */}
      
      {/* 订单状态型的图表 */}
      <OrderStatusChart />
    </div>
  );
}
