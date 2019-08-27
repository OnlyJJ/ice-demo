import React, { Component } from 'react';
import IncomeGroup from './components/IncomeGroup';
import Top5Analysis from './components/Top5Analysis';
import UserTrafficStastistics from './components/UserTrafficStastistics';
import PerformanceIndicator from './components/PerformanceIndicator';

export default function() {
  return (
    <div className="Decision-page">
      {/* 适用于概述信息和图表结合的展示 */}
      <IncomeGroup />

      <Top5Analysis />
      

    </div>
  );
}
