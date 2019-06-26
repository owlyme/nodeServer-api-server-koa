import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { getMyNotificationConfigInfoMP, updateMyNotificationConfigMP } from '../../api';

const router = new Router();

// 获取默认免费信息
router.post('/getMyNotificationConfigInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getMyNotificationConfigInfoMP);
  return (ctx.body = response);
});

router.post('/updateMyNotificationConfig', async ctx => {
  const response = await proxyService.postProxy(ctx, updateMyNotificationConfigMP);
  return (ctx.body = response);
});

export default router;
