import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  queryKnowledgeBaseGroupListInfoChat,
  queryKnowledgeBaseListByPageChat,
  saveQuickReplyGroupChat,
  queryQuickReplyGroupListChat,
  saveQuickReplyChat,
  queryQuickReplyListByPageChat,
} from '../../api';

const router = new Router();

// 根据类型获取分组列表
router.post('/queryKnowledgeBaseGroupListInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, queryKnowledgeBaseGroupListInfoChat);
  return (ctx.body = response);
});

router.post('/queryKnowledgeBaseListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, queryKnowledgeBaseListByPageChat);
  return (ctx.body = response);
});

router.post('/saveQuickReplyGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, saveQuickReplyGroupChat);
  return (ctx.body = response);
});

router.post('/queryQuickReplyGroupList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryQuickReplyGroupListChat);
  return (ctx.body = response);
});

router.post('/saveQuickReply', async ctx => {
  const response = await proxyService.postProxy(ctx, saveQuickReplyChat);
  return (ctx.body = response);
});

router.post('/queryQuickReplyListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, queryQuickReplyListByPageChat);
  return (ctx.body = response);
});

module.exports = router;
