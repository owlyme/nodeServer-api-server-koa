import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getAppAccountsBySeatIdCHAT,
  getSeatConvrStatisticsPaginationCHAT,
  getSeatConvrStatisticsListCHAT,
  getRepSeatConvrStatisticsCHAT,
  getRepSeatConvrTodayCHAT,
} from '../../api';

const router = new Router();

// 生成临时二维码 仅用于官方公众号
router.post('/getAppAccountsBySeatId', async ctx => {
  const response = await proxyService.postProxy(ctx, getAppAccountsBySeatIdCHAT);
  return (ctx.body = response);
});
// 生成临时二维码 仅用于官方公众号
router.post('/getSeatConvrStatisticsPagination', async ctx => {
  const response = await proxyService.postProxy(ctx, getSeatConvrStatisticsPaginationCHAT);
  return (ctx.body = response);
});
// 生成临时二维码 仅用于官方公众号
router.post('/getSeatConvrStatisticsList', async ctx => {
  const response = await proxyService.postProxy(ctx, getSeatConvrStatisticsListCHAT);
  return (ctx.body = response);
});
// 生成临时二维码 仅用于官方公众号
router.post('/getRepSeatConvrStatistics', async ctx => {
  const response = await proxyService.postProxy(ctx, getRepSeatConvrStatisticsCHAT);
  return (ctx.body = response);
});
// 生成临时二维码 仅用于官方公众号
router.post('/getRepSeatConvrToday', async ctx => {
  const response = await proxyService.postProxy(ctx, getRepSeatConvrTodayCHAT);
  return (ctx.body = response);
});

module.exports = router;
