import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { getJsTicket } from '../../api';

const router = new Router();

// 获取默认免费信息
router.post('/getJsTicket', async ctx => {
  const response = await proxyService.postProxy(ctx, getJsTicket);
  return (ctx.body = response);
});

export default router;
