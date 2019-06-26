import Router from 'koa-router';
import proxyService from '../../../common/proxyService';

import {
  getFansDetail1,
  updateFansExtInfo1,
  getKfFansGroupList1,
  getWillOutActiveConvListByPage,
  getJustNowOutActiveConvListByPage,
  getConversatingList,
  getRecentContactsList,
  getCollaborativeList,
  getVisitNoSpeakList,
  getScrambleOrderList,
  closeConversating,
  getScrambleOrder,
  getConvListByConId,
  getConversationStatistics,
  getFansRecord,
  textChat,
  newsChat,
  templateChat,
  imageChat,
  fileChat,
  videoChat,
  voiceChat,
  getConversationList,
  updateExclusiveSeat,
  updateKfSeat1,
  requestCooperation,
  incrUnRead,
  updateOwnerSeat,
  clickScrambleOrder,
  getAllCooperationList,
  getAlreadyCooperationList,
  closeAssisSeatBySeatId,
  forcedtextChat,
  forcednewsChat,
  forcedtemplateChat,
  forcedimageChat,
  forcedfileChat,
  forcedvideoChat,
  forcedvoiceChat,
  searchConversationList,
  getForcedChatMsgCountToDay,
  getConversationListCount,
  getCollaborativeListCount,
  getVisitNoSpeakListCount,
  getWillOutActiveConvListCount,
  getJustNowOutActiveConvListCount,
} from '../../../api';

const router = new Router();
//  最近联系人列表count
router.post('/getConversationListCount', async ctx => {
  const response = await proxyService.postProxy(ctx, getConversationListCount);
  return (ctx.body = response);
});
//  协作会话列表count
router.post('/getCollaborativeListCount', async ctx => {
  const response = await proxyService.postProxy(ctx, getCollaborativeListCount);
  return (ctx.body = response);
});
//  获取来访未发言的粉丝会话消息count
router.post('/getVisitNoSpeakListCount', async ctx => {
  const response = await proxyService.postProxy(ctx, getVisitNoSpeakListCount);
  return (ctx.body = response);
});
//  获取即将脱离活跃的粉丝会话消息count
router.post('/getWillOutActiveConvListCount', async ctx => {
  const response = await proxyService.postProxy(ctx, getWillOutActiveConvListCount);
  return (ctx.body = response);
});
//  获取刚刚脱离活跃的粉丝会话消息count
router.post('/getJustNowOutActiveConvListCount', async ctx => {
  const response = await proxyService.postProxy(ctx, getJustNowOutActiveConvListCount);
  return (ctx.body = response);
});
// 搜索会话列表
router.post('/getAllCooperationList', async ctx => {
  const response = await proxyService.postProxy(ctx, getAllCooperationList);
  return (ctx.body = response);
});
// 获取强制发送次数
router.post('/getForcedChatMsgCountToDay', async ctx => {
  const response = await proxyService.postProxy(ctx, getForcedChatMsgCountToDay);
  return (ctx.body = response);
});
// 获取所有协作客服
router.post('/searchConversationList', async ctx => {
  const response = await proxyService.postProxy(ctx, searchConversationList);
  return (ctx.body = response);
});
// 关闭协作
router.post('/closeAssisSeatBySeatId', async ctx => {
  const response = await proxyService.postProxy(ctx, closeAssisSeatBySeatId);
  return (ctx.body = response);
});
// 获取已协作客服
router.post('/getAlreadyCooperationList', async ctx => {
  const response = await proxyService.postProxy(ctx, getAlreadyCooperationList);
  return (ctx.body = response);
});
// 请求协作
router.post('/requestCooperation', async ctx => {
  const response = await proxyService.postProxy(ctx, requestCooperation);
  return (ctx.body = response);
});
// 减少未读会话条数
router.post('/incrUnRead', async ctx => {
  const response = await proxyService.postProxy(ctx, incrUnRead);
  return (ctx.body = response);
});
// 设为所属粉丝
router.post('/updateOwnerSeat', async ctx => {
  const response = await proxyService.postProxy(ctx, updateOwnerSeat);
  return (ctx.body = response);
});
// 抢单池点击抢单
router.post('/clickScrambleOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, clickScrambleOrder);
  return (ctx.body = response);
});
// 设为专属粉丝
router.post('/updateExclusiveSeat', async ctx => {
  const response = await proxyService.postProxy(ctx, updateExclusiveSeat);
  return (ctx.body = response);
});
// 设所属客服
router.post('/updateKfSeat', async ctx => {
  const response = await proxyService.postProxy(ctx, updateKfSeat1);
  return (ctx.body = response);
});
// 强制发送文本消息
router.post('/forcedtextChat/send/text', async ctx => {
  const response = await proxyService.postProxy(ctx, forcedtextChat);
  return (ctx.body = response);
});
// 强制发送图文消息
router.post('/forcednewsChat/send/news', async ctx => {
  const response = await proxyService.postProxy(ctx, forcednewsChat);
  return (ctx.body = response);
});
// 强制发送模板消息
router.post('/forcedtemplateChat/send/template', async ctx => {
  const response = await proxyService.postProxy(ctx, forcedtemplateChat);
  return (ctx.body = response);
});
// 强制发送图片消息
router.post('/forcedimageChat/send/image', async ctx => {
  const response = await proxyService.postProxy(ctx, forcedimageChat);
  return (ctx.body = response);
});
// 强制发送文件
router.post('/forcedfileChat/send/file', async ctx => {
  const response = await proxyService.postProxy(ctx, forcedfileChat);
  return (ctx.body = response);
});
// 强制发送视频消息
router.post('/forcedvideoChat/send/video', async ctx => {
  const response = await proxyService.postProxy(ctx, forcedvideoChat);
  return (ctx.body = response);
});
// 强制发送语音消息
router.post('/forcedvoiceChat/send/voice', async ctx => {
  const response = await proxyService.postProxy(ctx, forcedvoiceChat);
  return (ctx.body = response);
});
// 发送文本消息
router.post('/send/text', async ctx => {
  const response = await proxyService.postProxy(ctx, textChat);
  return (ctx.body = response);
});
// 发送图文消息
router.post('/send/news', async ctx => {
  const response = await proxyService.postProxy(ctx, newsChat);
  return (ctx.body = response);
});
// 发送模板消息
router.post('/send/template', async ctx => {
  const response = await proxyService.postProxy(ctx, templateChat);
  return (ctx.body = response);
});
// 发送图片消息
router.post('/send/image', async ctx => {
  const response = await proxyService.postProxy(ctx, imageChat);
  return (ctx.body = response);
});
// 发送文件
router.post('/send/file', async ctx => {
  const response = await proxyService.postProxy(ctx, fileChat);
  return (ctx.body = response);
});
// 发送视频消息
router.post('/send/video', async ctx => {
  const response = await proxyService.postProxy(ctx, videoChat);
  return (ctx.body = response);
});
// 发送语音消息
router.post('/send/voice', async ctx => {
  const response = await proxyService.postProxy(ctx, voiceChat);
  return (ctx.body = response);
});
// 获取粉丝详情
router.post('/getFansDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, getFansDetail1);
  return (ctx.body = response);
});
// 修改粉丝扩展信息
router.post('/updateFansExtInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, updateFansExtInfo1);
  return (ctx.body = response);
});
// 获取客服所属粉丝分组列表
router.post('/getKfFansGroupList', async ctx => {
  const response = await proxyService.postProxy(ctx, getKfFansGroupList1);
  return (ctx.body = response);
});
//  获取即将脱离活跃的粉丝会话消息集合
router.post('/getWillOutActiveConvListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getWillOutActiveConvListByPage);
  return (ctx.body = response);
});
//  获取即将脱离活跃的粉丝会话消息集合
router.post('/getConversationList', async ctx => {
  const response = await proxyService.postProxy(ctx, getConversationList);
  return (ctx.body = response);
});
//  获取刚刚脱离活跃的粉丝会话消息集合
router.post('/getJustNowOutActiveConvListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getJustNowOutActiveConvListByPage);
  return (ctx.body = response);
});
//  获取正在会话中列表
router.post('/getConversatingList', async ctx => {
  const response = await proxyService.postProxy(ctx, getConversatingList);
  return (ctx.body = response);
});
//  获取最近联系人列表会话消息集合
router.post('/getRecentContactsList', async ctx => {
  const response = await proxyService.postProxy(ctx, getRecentContactsList);
  return (ctx.body = response);
});
//  获取协作会话列表会话消息集合
router.post('/getCollaborativeList', async ctx => {
  const response = await proxyService.postProxy(ctx, getCollaborativeList);
  return (ctx.body = response);
});
//  获取来访未发言列表会话消息集合
router.post('/getVisitNoSpeakList', async ctx => {
  const response = await proxyService.postProxy(ctx, getVisitNoSpeakList);
  return (ctx.body = response);
});
//  获取抢单池列表
router.post('/getScrambleOrderList', async ctx => {
  const response = await proxyService.postProxy(ctx, getScrambleOrderList);
  return (ctx.body = response);
});
//  关闭正在会话中中指定会话
router.post('/closeConversating', async ctx => {
  const response = await proxyService.postProxy(ctx, closeConversating);
  return (ctx.body = response);
});
// 获取当前坐席的抢单池
router.post('/getScrambleOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, getScrambleOrder);
  return (ctx.body = response);
});
// 获取指定会话消息列表
router.post('/getConvListByConId', async ctx => {
  const response = await proxyService.postProxy(ctx, getConvListByConId);
  return (ctx.body = response);
});
// 会话互动统计
router.post('/getConversationStatistics', async ctx => {
  const response = await proxyService.postProxy(ctx, getConversationStatistics);
  return (ctx.body = response);
});
// 粉丝轨迹
router.post('/getFansRecord', async ctx => {
  const response = await proxyService.postProxy(ctx, getFansRecord);
  return (ctx.body = response);
});
export default router;
