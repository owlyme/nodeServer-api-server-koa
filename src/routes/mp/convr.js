import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { getSeatListMP, getInteractiveStatisticsMP, getConvMessageListByConvIdMP } from '../../api';

const router = new Router();

// 获取默认免费信息
router.post('/getSeatList', async ctx => {
  const response = await proxyService.postProxy(ctx, getSeatListMP);
  return (ctx.body = response);
});

router.post('/getInteractiveStatistics', async ctx => {
  const response = await proxyService.postProxy(ctx, getInteractiveStatisticsMP);
  return (ctx.body = response);
});

router.post('/getConvMessageListByConvId', async ctx => {
  const response = await proxyService.postProxy(ctx, getConvMessageListByConvIdMP);
  return (ctx.body = response);
});

export default router;
