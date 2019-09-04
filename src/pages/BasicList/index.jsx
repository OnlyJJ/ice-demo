import React from 'react';
// import { withAuth } from '@/components/Auth';
import Table from './components/Table';
import TodoList from './components/TodoList';
import ReviewDetailInfo from './components/ReviewDetailInfo';

import ColumnsTable from './components/ColumnsTable';
import Mydecision from './components/Mydecision';
import PostCategory from './components/PostCategory';


export default function BasicList() {
  return (
    <div className="list-page">
     
      <PostCategory />
    </div>
  );
}
// 权限
// export default withAuth({
//   authorities: ['admin', 'user', '','Guest'],
// })(BasicList);

