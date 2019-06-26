import Router from 'koa-router';
import proxyService from '../../../common/proxyService';

import {
  saveOrUpdateQuickReply,
  delQuickReply,
  delQuickReplyByIds,
  moveQuickReply,
  queryQuickReplyListByPage,
  saveOrUpdateQuickReplyGroup,
  delQuickReplyGroup,
  updateQuickReplyGroupSort,
  queryQuickReplyGroupList,
} from '../../../api';

const router = new Router();

//快捷回复（新增、修改）
router.post('/saveOrUpdateQuickReply', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateQuickReply);
  return (ctx.body = response);
});

//快捷回复（删除）
router.post('/delQuickReply', async ctx => {
  const response = await proxyService.postProxy(ctx, delQuickReply);
  return (ctx.body = response);
});

//快捷回复（批量删除）
router.post('/delQuickReplyByIds', async ctx => {
  const response = await proxyService.postProxy(ctx, delQuickReplyByIds);
  return (ctx.body = response);
});

//快捷回复（批量移动分组）
router.post('/moveQuickReply', async ctx => {
  const response = await proxyService.postProxy(ctx, moveQuickReply);
  return (ctx.body = response);
});

//快捷回复（查询）
router.post('/queryQuickReplyListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, queryQuickReplyListByPage);
  return (ctx.body = response);
});

//快捷回复分组（新增、修改）
router.post('/saveOrUpdateQuickReplyGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateQuickReplyGroup);
  return (ctx.body = response);
});

//快捷回复分组（删除）
router.post('/delQuickReplyGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, delQuickReplyGroup);
  return (ctx.body = response);
});

//快捷回复分组（修改顺序）
router.post('/updateQuickReplyGroupSort', async ctx => {
  const response = await proxyService.postProxy(ctx, updateQuickReplyGroupSort);
  return (ctx.body = response);
});

// 快捷回复分组（列表）
router.post('/queryQuickReplyGroupList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryQuickReplyGroupList);
  return (ctx.body = response);
});

export default router;
