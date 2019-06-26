import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  saveChatLoginBySession,
  getChatSeatInfo,
  chatLoginOutBySession,
  updateChatStateByType,
  getChatSeatONLineState,
  saveSearchCorpIdLoginBySession,
} from '../../api';
const router = new Router();

// 聊天系统会话控制
router.post('/saveChatLoginBySession', async ctx => {
  const response = await proxyService.postProxy(ctx, saveChatLoginBySession);
  return (ctx.body = response);
});
// 获取坐席对象信息
router.post('/getChatSeatInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getChatSeatInfo);
  return (ctx.body = response);
});
// 退出登录
router.post('/chatLoginOutBySession', async ctx => {
  const response = await proxyService.postProxy(ctx, chatLoginOutBySession);
  return (ctx.body = response);
});
// 切换在线状态
router.post('/updateChatStateByType', async ctx => {
  const response = await proxyService.postProxy(ctx, updateChatStateByType);
  return (ctx.body = response);
});
// 获取在线状态
router.post('/getChatSeatONLineState', async ctx => {
  const response = await proxyService.postProxy(ctx, getChatSeatONLineState);
  return (ctx.body = response);
});

router.post('/saveSearchCorpIdLoginBySession', async ctx => {
  const response = await proxyService.postProxy(ctx, saveSearchCorpIdLoginBySession);
  return (ctx.body = response);
});

module.exports = router;
