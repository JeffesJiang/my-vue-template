export default [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '主页'
    },
    component: () => import('@/view/home/index')
  }
];
