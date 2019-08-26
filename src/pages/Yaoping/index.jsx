import React, { Component } from 'react';
import OverviewChartCard from './components/OverviewChartCard';
import CostOverview from './components/CostOverview';
import OverviewChart from './components/OverviewChart';
import OverviewInfo from './components/OverviewInfo';

export default function() {
  return (
    <div className="Yaoping-page">
      {/* 图表套件组合展示 */}
      <OverviewChartCard />
      {/* 适用于环形图和概要展示组合的信息展示场景 */}
      <CostOverview />

      <OverviewChart />
      {/* 适用于概述信息和图表结合的展示 */}
      <OverviewInfo />
    </div>
  );
}
