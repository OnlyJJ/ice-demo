// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  { name: 'home', path: '/home', icon: 'home2', id: 'Menu_dle2h' },
];

const asideMenuConfig = [
  {
    name: '院长决策',
    path: '/decision',
    icon: 'cascades',
    children: [
      { name: 'monitor', path: '/decision/basic', id: 'Menu_13y62' },
    ],
    id: 'Menu_wo5tn',
  },
  {
    name: '财务报表',
    path: '/dashboard',
    icon: 'home',
    children: [
      { name: 'monitor', path: '/dashboard/monitor', id: 'Menu_1oy6s' },
      { name: 'dashboard', path: '/dashboard/cost', id: 'Menu_18yg2' },
    ],
    id: 'Menu_wq5in',
  },
  {
    name: '医疗质量',
    path: '/chart',
    icon: 'chart',
    children: [
      { name: 'basic', path: '/chart/basic', id: 'Menu_hwlf8' },
      { name: 'general', path: '/chart/general', id: 'Menu_dj199' },
    ],
    id: 'Menu_oypdm',
  },
  {
    name: '门急诊',
    path: '/table',
    icon: 'eye',
    children: [
      { name: 'basic', path: '/table/basic', id: 'Menu_o1dar' },
      { name: 'general', path: '/table/general', id: 'Menu_ky6hn' },
    ],
    id: 'Menu_a34pn',
  },
  {
    name: '住院护理',
    path: '/profile',
    icon: 'directory',
    children: [
      { name: 'basic', path: '/profile/basic', id: 'Menu_g8rb5' },
      { name: 'terms', path: '/profile/general', id: 'Menu_lbk9j' },
    ],
    id: 'Menu_oje2t',
  },
  {
    name: '药品药库',
    icon: 'hourglass',
    path: '/yp',
    children: [{ name: 'ypQualit', path: '/yp/cost', id: 'Menu_1oy5' }],
    id: 'Menu_r4wrw',
  },
  {
    name: '设备仪器',
    icon: 'creative',
    path: '/device',
    children: [{ name: 'ypQualit', path: '/yp/cost', id: 'Menu_1oy5' }],
    id: 'Menu_2notb',
  },
  {
    name: '人才绩效',
    path: '/list',
    icon: 'coupons',
    children: [
      { name: 'basic', path: '/list/basic', id: 'Menu_jd1s5' },
      { name: 'general', path: '/list/general', id: 'Menu_h5o7p' },
    ],
    id: 'Menu_w6ujt',
  },
  {
    name: '医技科研',
    path: '/technology',
    icon: 'publish',
    children: [
      { name: 'basic', path: '/list/basic', id: 'Menu_jd1s5' },
      { name: 'general', path: '/list/general', id: 'Menu_h5o7p' },
    ],
    id: 'Menu_w6ujt',
  },
  {
    name: '不良事件',
    path: '/accident',
    icon: 'lock',
    children: [
      { name: 'basic', path: '/list/basic', id: 'Menu_jd1s5' },
      { name: 'general', path: '/list/general', id: 'Menu_h5o7p' },
    ],
    id: 'Menu_w6ujt',
  },
  
];

export { headerMenuConfig, asideMenuConfig };
