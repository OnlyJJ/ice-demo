// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  { name: 'home', path: '/home', icon: 'home2', id: 'Menu_dle2h' },
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home2',
    children: [
      { name: 'monitor', path: '/dashboard/monitor', id: 'Menu_1oy6s' },
    ],

    id: 'Menu_wq5in',
  },

  {
    name: 'chart',
    path: '/chart',
    icon: 'chart',
    children: [
      { name: 'basic', path: '/chart/basic', id: 'Menu_hwlf8' },
      { name: 'general', path: '/chart/general', id: 'Menu_dj199' },
    ],

    id: 'Menu_oypdm',
  },

  {
    name: '表格页',
    path: '/table',
    icon: 'cascades',
    children: [
      { name: 'basic', path: '/table/basic', id: 'Menu_o1dar' },
      { name: 'general', path: '/table/general', id: 'Menu_ky6hn' },
    ],

    id: 'Menu_a34pn',
  },

  {
    name: '列表页',
    path: '/list',
    icon: 'menu',
    children: [
      { name: 'basic', path: '/list/basic', id: 'Menu_jd1s5' },
      { name: 'general', path: '/list/general', id: 'Menu_h5o7p' },
    ],

    id: 'Menu_w6ujt',
  },

  {
    name: 'profile',
    path: '/profile',
    icon: 'content',
    children: [
      { name: 'basic', path: '/profile/basic', id: 'Menu_g8rb5' },
      { name: 'terms', path: '/profile/general', id: 'Menu_lbk9j' },
    ],

    id: 'Menu_oje2t',
  },

  {
    name: '药品分析',
    icon: 'home2',
    path: '/yp',
    children: [{ name: 'ypQualit', path: '/yp/cost', id: 'Menu_1oy5' }],
    id: 'Menu_r4wrw',
  },

  {
    name: 'account',
    path: '/account',
    icon: 'yonghu',
    children: [{ name: 'setting', path: '/account/setting', id: 'Menu_qghux' }],
    id: 'Menu_pt0h9',
  },
];

export { headerMenuConfig, asideMenuConfig };
