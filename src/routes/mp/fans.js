import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  updateFansExtInfoMp,
  getConversationMessageByGroupMp,
  getKfFansGroupListMp,
  updateWxGroupByMoveMp,
  updateExclusiveSeatMp,
  updateKfSeatMp,
  getFansDetailMp,
  updateBatchSetFansUserTagSingleMp,
  getTagsByAppAccountIdMp,
  getInteractiveStatisticsMp,
  getSeatListMp,
} from '../../api';

const router = new Router();

// 获取粉丝信息
router.post('/getFansDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, getFansDetailMp);
  return (ctx.body = response);
});

// 设置专属
router.post('/updateExclusiveSeat', async ctx => {
  const response = await proxyService.postProxy(ctx, updateExclusiveSeatMp);
  return (ctx.body = response);
});

// 互动统计
router.post('/getInteractiveStatistics', async ctx => {
  const response = await proxyService.postProxy(ctx, getInteractiveStatisticsMp);
  return (ctx.body = response);
});

// 分组列表
router.post('/getKfFansGroupList', async ctx => {
  const response = await proxyService.postProxy(ctx, getKfFansGroupListMp);
  return (ctx.body = response);
});

// 移动分组
router.post('/updateWxGroupByMove', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxGroupByMoveMp);
  return (ctx.body = response);
});

// 坐席列表
router.post('/getSeatList', async ctx => {
  const response = await proxyService.postProxy(ctx, getSeatListMp);
  return (ctx.body = response);
});

// 坐席列表
router.post('/updateKfSeat', async ctx => {
  const response = await proxyService.postProxy(ctx, updateKfSeatMp);
  return (ctx.body = response);
});

//
router.post('/getConversationMessageByGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, getConversationMessageByGroupMp);
  return (ctx.body = response);
});

// 修改粉丝信息
router.post('/updateFansExtInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, updateFansExtInfoMp);
  return (ctx.body = response);
});

router.post('/updateBatchSetFansUserTagSingle', async ctx => {
  const response = await proxyService.postProxy(ctx, updateBatchSetFansUserTagSingleMp);
  return (ctx.body = response);
});

router.post('/getTagsByAppAccountId', async ctx => {
  const response = await proxyService.postProxy(ctx, getTagsByAppAccountIdMp);
  return (ctx.body = response);
});
export default router;
