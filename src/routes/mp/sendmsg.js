import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { sendtextMP, sendimageMP, sendvoiceMP, forceSendTextMP } from '../../api';

const router = new Router();

// 获取统计信息
router.post('/text', async ctx => {
  const response = await proxyService.postProxy(ctx, sendtextMP);
  return (ctx.body = response);
});

// 绑定用户sessionId
router.post('/image', async ctx => {
  console.log(123);
  const response = await proxyService.postProxy(ctx, sendimageMP);
  return (ctx.body = response);
});

// 更新用户信息与session信息
router.post('/voice', async ctx => {
  const response = await proxyService.postProxy(ctx, sendvoiceMP);
  return (ctx.body = response);
});

router.post('/forcedtext', async ctx => {
  const response = await proxyService.postProxy(ctx, forceSendTextMP);
  return (ctx.body = response);
});

export default router;
