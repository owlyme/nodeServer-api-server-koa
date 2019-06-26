import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { getCompanyConnectConfigMP, updateConnectConfigMP } from '../../api';

const router = new Router();

// 获取默认免费信息
// router.post('/getCompanyConnectConfig', async ctx => {
//   // const response = await proxyService.postProxy(ctx, getSeatListMP);
//   return (ctx.body = {
//     code: 1,
//     data: {
//       adrr: 'http://127.0.0.1:8091',
//       namespace: '/21',
//     },
//     message: 'success',
//   });
// });

router.post('/getCompanyConnectConfig', async ctx => {
  const response = await proxyService.postProxy(ctx, getCompanyConnectConfigMP);
  return (ctx.body = response);
});

router.post('/updateConnectConfig', async ctx => {
  const response = await proxyService.postProxy(ctx, updateConnectConfigMP);
  return (ctx.body = response);
});

export default router;
