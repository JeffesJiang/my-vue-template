/* Layout */
// import Layout from '@/layout';

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '主页'
    },
    component: () => import('@/views/home/index')
  }
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [];

