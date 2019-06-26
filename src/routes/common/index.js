import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { queryQcCloudUrlRequestName } from '../../api';

const router = new Router();
router.prefix('/api');
//  统计
router.post('/wxPublicAccount/queryQcCloudUrlRequestName', async ctx => {
  const response = await proxyService.postProxy(ctx, queryQcCloudUrlRequestName);
  return (ctx.body = response);
});

export default function(app) {
  app.use(router.routes()).use(router.allowedMethods());
}
