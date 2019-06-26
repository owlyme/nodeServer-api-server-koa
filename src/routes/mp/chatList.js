import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getConversationListCountMP,
  getConversationListMP,
  getWillOutActiveConvListByPageMP,
  getJustNowOutActiveConvListByPageMP,
  getRecentContactsListMP,
  getCollaborativeListMP,
  getVisitNoSpeakListMP,
  closeConversatingMP,
  getScrambleOrderMP,
  incrUnReadMP,
  clickScrambleOrderMP,
  updateChatStateByTypeMP,
  checkSeatFansBindMP,
  getChatSeatInfoMP,
  getConvMessageListByConvIdMP,
  getForcedChatMsgCountToDayMP,
} from '../../api';

const router = new Router();

router.post('/getConvMessageListByConvId', async ctx => {
  const response = await proxyService.postProxy(ctx, getConvMessageListByConvIdMP);
  return (ctx.body = response);
});
router.post('/getConversationListCount', async ctx => {
  const response = await proxyService.postProxy(ctx, getConversationListCountMP);
  return (ctx.body = response);
});
router.post('/getChatSeatInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getChatSeatInfoMP);
  console.log(response);
  return (ctx.body = response);
});
// 获取默认免费信息
router.post('/getConversationList', async ctx => {
  const response = await proxyService.postProxy(ctx, getConversationListMP);
  return (ctx.body = response);
});
// 获取默认免费信息
router.post('/getWillOutActiveConvListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getWillOutActiveConvListByPageMP);
  return (ctx.body = response);
});
// 获取默认免费信息
router.post('/getJustNowOutActiveConvListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getJustNowOutActiveConvListByPageMP);
  return (ctx.body = response);
});
// 获取默认免费信息
router.post('/getRecentContactsList', async ctx => {
  const response = await proxyService.postProxy(ctx, getRecentContactsListMP);
  return (ctx.body = response);
});
// 获取默认免费信息
router.post('/getCollaborativeList', async ctx => {
  const response = await proxyService.postProxy(ctx, getCollaborativeListMP);
  return (ctx.body = response);
});
// 获取默认免费信息
router.post('/getVisitNoSpeakList', async ctx => {
  const response = await proxyService.postProxy(ctx, getVisitNoSpeakListMP);
  return (ctx.body = response);
});
// 获取默认免费信息
router.post('/closeConversating', async ctx => {
  const response = await proxyService.postProxy(ctx, closeConversatingMP);
  return (ctx.body = response);
});
// 获取默认免费信息
router.post('/getScrambleOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, getScrambleOrderMP);
  return (ctx.body = response);
});
// 获取默认免费信息
router.post('/incrUnRead', async ctx => {
  const response = await proxyService.postProxy(ctx, incrUnReadMP);
  return (ctx.body = response);
});
// 获取默认免费信息
router.post('/clickScrambleOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, clickScrambleOrderMP);
  return (ctx.body = response);
});
// 获取默认免费信息
router.post('/updateChatStateByType', async ctx => {
  const response = await proxyService.postProxy(ctx, updateChatStateByTypeMP);
  return (ctx.body = response);
});
// 获取默认免费信息
router.post('/checkSeatFansBind', async ctx => {
  const response = await proxyService.postProxy(ctx, checkSeatFansBindMP);
  return (ctx.body = response);
});

router.post('/getForcedChatMsgCountToDay', async ctx => {
  const response = await proxyService.postProxy(ctx, getForcedChatMsgCountToDayMP);
  return (ctx.body = response);
});

export default router;
