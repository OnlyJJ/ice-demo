import React from 'react';
// import { withAuth } from '@/components/Auth';
import Table from './components/Table';

export default function BasicList() {
  return (
    <div className="list-page">
      <Table />
    </div>
  );
}
// 权限
// export default withAuth({
//   authorities: ['admin', 'user', '','Guest'],
// })(BasicList);

