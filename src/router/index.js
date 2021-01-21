import Vue from 'vue';
import Router from 'vue-router';
import { constantRoutes } from './routers';

// fix vue-router NavigationDuplicated
const VueRouterPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return VueRouterPush.call(this, location).catch(err => err);
};
const VueRouterReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return VueRouterReplace.call(this, location).catch(err => err);
};

Vue.use(Router);

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

