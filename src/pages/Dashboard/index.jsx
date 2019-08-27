import React from 'react';
import Overivew from './components/Overivew';
import TabChart from './components/TabChart';
import EditableTable from './components/EditableTable';
import LatestActivity from './components/LatestActivity';
import ProjectAnalysis from './components/ProjectAnalysis';
import PieDoughnutChart from './components/PieDoughnutChart';
import Mydecision from './components/Mydecision';


export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <Mydecision />
     
      <TabChart />
     
      
    </div>
  );
}
