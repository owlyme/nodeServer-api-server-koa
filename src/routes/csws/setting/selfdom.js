import Router from 'koa-router';
import proxyService from '../../../common/proxyService';

const router = new Router();

import { getPersonalizeInfo, updatePersonalizeInfo } from '../../../api';

// 获取个性化设置
router.post('/getPersonalizeInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getPersonalizeInfo);
  return (ctx.body = response);
});

// 修改个性化设置
router.post('/updatePersonalizeInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, updatePersonalizeInfo);
  return (ctx.body = response);
});

export default router;
