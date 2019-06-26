import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getAllFansUserList1,
  getKfAllFansList1,
  getKfFansGroupList1,
  getFansDetail1,
  addFsSelectConditions1,
  getFsSelectConditions1,
  getFsSelectConditionsList1,
  deleteFsSelectConditions1,
  getPublicBySeat1,
  getWxGroupAndTagList1,
  updateWxGroupByOrder1,
  updateWxGroup1,
  saveWxGroup1,
  deleteWxGroup1,
  getGroupListData1,
  updateFansExtInfo1,
  getTagsBySeatId1,
  updateBatchSetUserTag1,
  updateKfSeatSet1,
  // getSeatList,
  updateWxGroupByMove1,
  updateFansKfSeatId1,
  updateBatchSetFansUserTagSingle,
  updateWxGroupByMoveSingle,
  getSeatListAdmin1,
  deleteFans1,
  createConversation1,
} from '../../api';

const router = new Router();

// 根据客服Id获取公众号列表
router.post('/getPublicBySeat', async ctx => {
  const response = await proxyService.postProxy(ctx, getPublicBySeat1);
  return (ctx.body = response);
});
// 批量为用户设置标签
router.post('/updateBatchSetFansUserTagSingle', async ctx => {
  const response = await proxyService.postProxy(ctx, updateBatchSetFansUserTagSingle);
  return (ctx.body = response);
});
// 移动分组
router.post('/updateWxGroupByMoveSingle', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxGroupByMoveSingle);
  return (ctx.body = response);
});
// 获取所有公众号粉丝列表
router.post('/getAllFansUserList', async ctx => {
  const response = await proxyService.postProxy(ctx, getAllFansUserList1);
  return (ctx.body = response);
});

// 获取所有公众号粉丝列表
router.post('/updateFansExtInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, updateFansExtInfo1);
  return (ctx.body = response);
});

//
router.post('/getKfAllFansList', async ctx => {
  const response = await proxyService.postProxy(ctx, getKfAllFansList1);
  return (ctx.body = response);
});

//
router.post('/getKfFansGroupList', async ctx => {
  const response = await proxyService.postProxy(ctx, getKfFansGroupList1);
  return (ctx.body = response);
});

// 获取粉丝详情
router.post('/getFansDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, getFansDetail1);
  return (ctx.body = response);
});

// 筛选条件
router.post('/addFsSelectConditions', async ctx => {
  const response = await proxyService.postProxy(ctx, addFsSelectConditions1);
  return (ctx.body = response);
});

//
router.post('/getFsSelectConditions', async ctx => {
  const response = await proxyService.postProxy(ctx, getFsSelectConditions1);
  return (ctx.body = response);
});

//
router.post('/getFsSelectConditionsList', async ctx => {
  const response = await proxyService.postProxy(ctx, getFsSelectConditionsList1);
  return (ctx.body = response);
});

//
router.post('/deleteFsSelectConditions', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteFsSelectConditions1);
  return (ctx.body = response);
});

// 获取所有分组标签
router.post('/getWxGroupAndTagList', async ctx => {
  const response = await proxyService.postProxy(ctx, getWxGroupAndTagList1);
  return (ctx.body = response);
});
//
router.post('/getGroupListData', async ctx => {
  const response = await proxyService.postProxy(ctx, getGroupListData1);
  return (ctx.body = response);
});

//
router.post('/updateWxGroupByOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxGroupByOrder1);
  return (ctx.body = response);
});

//
router.post('/updateWxGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxGroup1);
  return (ctx.body = response);
});

//
router.post('/saveWxGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, saveWxGroup1);
  return (ctx.body = response);
});

//
router.post('/deleteWxGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteWxGroup1);
  return (ctx.body = response);
});
// 获取粉丝标签
router.post('/getTagsBySeatId', async ctx => {
  const response = await proxyService.postProxy(ctx, getTagsBySeatId1);
  return (ctx.body = response);
});
// 设置粉丝标签
router.post('/updateBatchSetUserTag', async ctx => {
  const response = await proxyService.postProxy(ctx, updateBatchSetUserTag1);
  return (ctx.body = response);
});
// 获取坐席
router.post('/getSeatList', async ctx => {
  const response = await proxyService.postProxy(ctx, getSeatListAdmin1);
  return (ctx.body = response);
});
// 设置坐席
router.post('/updateKfSeatSet', async ctx => {
  const response = await proxyService.postProxy(ctx, updateKfSeatSet1);
  return (ctx.body = response);
});

router.post('/updateWxGroupByMove', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxGroupByMove1);
  return (ctx.body = response);
});

router.post('/updateFansKfSeatId', async ctx => {
  const response = await proxyService.postProxy(ctx, updateFansKfSeatId1);
  return (ctx.body = response);
});

router.post('/deleteFans', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteFans1);
  return (ctx.body = response);
});

router.post('/createConversation', async ctx => {
  const response = await proxyService.postProxy(ctx, createConversation1);
  return (ctx.body = response);
});
export default router;
