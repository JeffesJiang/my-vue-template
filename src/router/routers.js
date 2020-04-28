export default [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '主页'
    },
    component: () => import('@/views/home/index')
  }
];
