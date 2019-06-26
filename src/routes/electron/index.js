import Router from 'koa-router';
import login from './v1/login';
const router = new Router();
router.prefix('/api/client');
// 账户登陆
router.use('/login', login.routes(), login.allowedMethods());

export default function(app) {
  app.use(router.routes());
}
