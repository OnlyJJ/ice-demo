import React from 'react';

import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

const MyUserLoing = React.lazy(() => import('@/pages/MyUserLoing'));
const Finance = React.lazy(() => import('@/pages/Finance'));
const Decision = React.lazy(() => import('@/pages/Decision'));
const Home = React.lazy(() => import('@/pages/Home'));

const Yaoping = React.lazy(() => import('@/pages/Yaoping'));

const UserRegister = React.lazy(() => import('@/pages/UserRegister'));
const Dashboard = React.lazy(() => import('@/pages/Dashboard'));
const Charts = React.lazy(() => import('@/pages/Charts'));
const BasicCharts = React.lazy(() => import('@/pages/BasicCharts'));
const Terms = React.lazy(() => import('@/pages/Terms'));

const BasicList = React.lazy(() => import('@/pages/BasicList'));
const ProjectList = React.lazy(() => import('@/pages/ProjectList'));
const BasicTable = React.lazy(() => import('@/pages/BasicTable'));
const GeneralTable = React.lazy(() => import('@/pages/GeneralTable'));
const Profile = React.lazy(() => import('@/pages/Profile'));
const Setting = React.lazy(() => import('@/pages/Setting'));
const Fail = React.lazy(() => import('@/pages/Fail'));
const Empty = React.lazy(() => import('@/pages/Empty'));
const Forbidden = React.lazy(() => import('@/pages/Forbidden'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));
const ServerError = React.lazy(() => import('@/pages/ServerError'));

const routerConfig = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      { path: '/login', component: MyUserLoing },
      { path: '/register', component: UserRegister },
      { path: '/', redirect: '/user/login' },
      { component: NotFound },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      { path: '/exception/500', component: ServerError },
      { path: '/account/setting', component: Setting },
      { path: '/chart/basic', component: BasicCharts },
      { path: '/list/basic', component: BasicList },
      { path: '/list/general', component: ProjectList },
      { path: '/result/fail', component: Fail },
      { path: '/table/basic', component: BasicTable },
      { path: '/profile/basic', component: Profile },
      { path: '/chart/general', component: Charts },
      { path: '/table/general', component: GeneralTable },
      { path: '/dashboard/monitor', component: Dashboard },
      { path: '/profile/general', component: Terms },
      { path: '/exception/403', component: Forbidden },
      { path: '/exception/204', component: Empty },
      { path: '/exception/404', component: NotFound },
      { path: '/user/login', component: MyUserLoing },
      { path: '/yp/cost', component: Yaoping },
      { path: '/home', component: Home },
      { path: '/decision/basic', component: Decision },
      { path: '/dashboard/cost', component: Finance },
      { path: '/', redirect: '/home' },
      { component: NotFound },
    ],
  },
];

export default routerConfig;
