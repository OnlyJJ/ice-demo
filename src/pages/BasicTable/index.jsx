import React from 'react';
import { withAuth } from '@/components/Auth';
import TableChartCard from './components/TableChartCard';
import TabTable from './components/TabTable';

function BasicTable() {
  return (
    <div>
      <TabTable />
      <TableChartCard />
    </div>
  );
}
// 权限控制
export default withAuth({
  authorities: ['admin', 'user', ''],
})(BasicTable);
