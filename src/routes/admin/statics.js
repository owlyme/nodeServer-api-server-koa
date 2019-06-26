import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getPublicAccountUserPage,
  getPublicAccountUserCount,
  getSeatConvrStatisticsPagination,
  getSeatConvrStatisticsList,
  getRepSeatConvrStatistics,
  getRepSeatConvrToday,
  getRepAppaccountConvrStatistics,
  getAppaccountConvrStatisticsList,
  getAppaccountConvrStatisticsPagination,
  getRepAppaccountConvrToday,
  getKfSeatList,
  getPublicAccountUserYesterdayCount,
} from '../../api';

const router = new Router();

// 模板消息群发（新增、修改）
router.post('/getPublicAccountUserPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getPublicAccountUserPage);
  return (ctx.body = response);
});

// 高级、客服消息群发（新增）
router.post('/getPublicAccountUserCount', async ctx => {
  const response = await proxyService.postProxy(ctx, getPublicAccountUserCount);
  return (ctx.body = response);
});

//获取昨日统计总数
router.post('/getPublicAccountUserYesterdayCount', async ctx => {
  const response = await proxyService.postProxy(ctx, getPublicAccountUserYesterdayCount);
  return (ctx.body = response);
});

// 高级、客服消息群发（修改）
router.post('/getSeatConvrStatisticsPagination', async ctx => {
  const response = await proxyService.postProxy(ctx, getSeatConvrStatisticsPagination);
  return (ctx.body = response);
});

// 高级、客服、模板消息群发（配额信息）
router.post('/getSeatConvrStatisticsList', async ctx => {
  const response = await proxyService.postProxy(ctx, getSeatConvrStatisticsList);
  return (ctx.body = response);
});

// 高级、客服、模板消息群发（删除）
router.post('/getRepSeatConvrStatistics', async ctx => {
  const response = await proxyService.postProxy(ctx, getRepSeatConvrStatistics);
  return (ctx.body = response);
});

// 高级、客服、模板消息群发（取消发送）
router.post('/getRepSeatConvrToday', async ctx => {
  const response = await proxyService.postProxy(ctx, getRepSeatConvrToday);
  return (ctx.body = response);
});

// 高级、客服、模板消息群发（获取列表）
router.post('/getRepAppaccountConvrStatistics', async ctx => {
  const response = await proxyService.postProxy(ctx, getRepAppaccountConvrStatistics);
  return (ctx.body = response);
});

// 高级、客服、模板消息群发（获取详情）
router.post('/getAppaccountConvrStatisticsList', async ctx => {
  const response = await proxyService.postProxy(ctx, getAppaccountConvrStatisticsList);
  return (ctx.body = response);
});

// 获取预估人数
router.post('/getAppaccountConvrStatisticsPagination', async ctx => {
  const response = await proxyService.postProxy(ctx, getAppaccountConvrStatisticsPagination);
  return (ctx.body = response);
});

// 获取当前用户的坐席id
router.post('/getRepAppaccountConvrToday', async ctx => {
  const response = await proxyService.postProxy(ctx, getRepAppaccountConvrToday);
  return (ctx.body = response);
});

router.post('/getKfSeatList', async ctx => {
  const response = await proxyService.postProxy(ctx, getKfSeatList);
  return (ctx.body = response);
});

export default router;
