import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getAllFansUserList,
  getKfAllFansList,
  getKfFansGroupList,
  getFansDetail,
  addFsSelectConditions,
  getFsSelectConditions,
  getFsSelectConditionsList,
  deleteFsSelectConditions,
  getPublicBySeat,
  getWxGroupAndTagList,
  updateWxGroupByOrder,
  updateWxGroup,
  saveWxGroup,
  deleteWxGroup,
  getGroupListData,
  updateFansExtInfo,
  getTagsBySeatId,
  updateBatchSetUserTag,
  updateKfSeatSet,
  // getSeatList,
  updateWxGroupByMove,
  updateFansKfSeatId,
  getSeatListAdmin,
  deleteFans,
  updateKfSeat,
  updateExclusiveSeat1,
  createConversation,
  getInteractiveStatistics1,
  getConversationMessageByGroup1,
  updateBatchSetFansUserTagSingle1,
  updateWxGroupByMoveSingle1,
} from '../../api';

const router = new Router();

// 根据客服Id获取公众号列表
router.post('/getPublicBySeat', async ctx => {
  const response = await proxyService.postProxy(ctx, getPublicBySeat);
  return (ctx.body = response);
});
// 批量为用户设置标签
router.post('/updateBatchSetFansUserTagSingle', async ctx => {
  const response = await proxyService.postProxy(ctx, updateBatchSetFansUserTagSingle1);
  return (ctx.body = response);
});
// 移动分组
router.post('/updateWxGroupByMoveSingle', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxGroupByMoveSingle1);
  return (ctx.body = response);
});
// 获取所有公众号粉丝列表
router.post('/getAllFansUserList', async ctx => {
  const response = await proxyService.postProxy(ctx, getAllFansUserList);
  return (ctx.body = response);
});

// 获取所有公众号粉丝列表
router.post('/updateFansExtInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, updateFansExtInfo);
  return (ctx.body = response);
});

//
router.post('/getKfAllFansList', async ctx => {
  const response = await proxyService.postProxy(ctx, getKfAllFansList);
  return (ctx.body = response);
});

//
router.post('/getKfFansGroupList', async ctx => {
  const response = await proxyService.postProxy(ctx, getKfFansGroupList);
  return (ctx.body = response);
});

// 获取粉丝详情
router.post('/getFansDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, getFansDetail);
  return (ctx.body = response);
});

// 筛选条件
router.post('/addFsSelectConditions', async ctx => {
  const response = await proxyService.postProxy(ctx, addFsSelectConditions);
  return (ctx.body = response);
});

//
router.post('/getFsSelectConditions', async ctx => {
  const response = await proxyService.postProxy(ctx, getFsSelectConditions);
  return (ctx.body = response);
});

//
router.post('/getFsSelectConditionsList', async ctx => {
  const response = await proxyService.postProxy(ctx, getFsSelectConditionsList);
  return (ctx.body = response);
});

//
router.post('/deleteFsSelectConditions', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteFsSelectConditions);
  return (ctx.body = response);
});

// 获取所有分组标签
router.post('/getWxGroupAndTagList', async ctx => {
  const response = await proxyService.postProxy(ctx, getWxGroupAndTagList);
  return (ctx.body = response);
});
//
router.post('/getGroupListData', async ctx => {
  const response = await proxyService.postProxy(ctx, getGroupListData);
  return (ctx.body = response);
});

//
router.post('/updateWxGroupByOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxGroupByOrder);
  return (ctx.body = response);
});

//
router.post('/updateWxGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxGroup);
  return (ctx.body = response);
});

//
router.post('/saveWxGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, saveWxGroup);
  return (ctx.body = response);
});

//
router.post('/deleteWxGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteWxGroup);
  return (ctx.body = response);
});
// 获取粉丝标签
router.post('/getTagsBySeatId', async ctx => {
  const response = await proxyService.postProxy(ctx, getTagsBySeatId);
  return (ctx.body = response);
});
// 设置粉丝标签
router.post('/updateBatchSetUserTag', async ctx => {
  const response = await proxyService.postProxy(ctx, updateBatchSetUserTag);
  return (ctx.body = response);
});
// 获取坐席
router.post('/getSeatList', async ctx => {
  const response = await proxyService.postProxy(ctx, getSeatListAdmin);
  return (ctx.body = response);
});
// 设置坐席
router.post('/updateKfSeatSet', async ctx => {
  const response = await proxyService.postProxy(ctx, updateKfSeatSet);
  return (ctx.body = response);
});

router.post('/updateWxGroupByMove', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxGroupByMove);
  return (ctx.body = response);
});

router.post('/updateFansKfSeatId', async ctx => {
  const response = await proxyService.postProxy(ctx, updateFansKfSeatId);
  return (ctx.body = response);
});

router.post('/deleteFans', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteFans);
  return (ctx.body = response);
});
router.post('/updateKfSeat', async ctx => {
  const response = await proxyService.postProxy(ctx, updateKfSeat);
  return (ctx.body = response);
});
router.post('/updateExclusiveSeat', async ctx => {
  const response = await proxyService.postProxy(ctx, updateExclusiveSeat1);
  return (ctx.body = response);
});

router.post('/createConversation', async ctx => {
  const response = await proxyService.postProxy(ctx, createConversation);
  return (ctx.body = response);
});
router.post('/getInteractiveStatistics', async ctx => {
  const response = await proxyService.postProxy(ctx, getInteractiveStatistics1);
  return (ctx.body = response);
});
router.post('/getConversationMessageByGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, getConversationMessageByGroup1);
  return (ctx.body = response);
});
export default router;
