import React from 'react';
import OverviewPieChart from './components/OverviewPieChart';
import BizchartsBarBasicColumn from './components/BizchartsBarBasicColumn';
import BizchartsLineCurved from './components/BizchartsLineCurved';
import BizchartsOtherBubbleImage from './components/BizchartsOtherBubbleImage';

export default function BasicCharts() {
  return (
    <div>
      <OverviewPieChart />
      <BizchartsBarBasicColumn />
      <BizchartsLineCurved />
      <BizchartsOtherBubbleImage />
    </div>
  );
}

