import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  saveOrUpdatecssGroupSendingTemplate,
  saveCssGroupSending,
  updateCssGroupSending,
  getNounData,
  deleteCssGroupSending,
  cancelCssGroupSending,
  getCssGroupSendingListByPage,
  getCssGroupSendingInfo,
  getFansUserCount,
} from '../../api';

const router = new Router();

// 模板消息群发（新增、修改）
router.post('/saveOrUpdatecssGroupSendingTemplate', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdatecssGroupSendingTemplate);
  return (ctx.body = response);
});

// 高级、客服消息群发（新增）
router.post('/saveCssGroupSending', async ctx => {
  const response = await proxyService.postProxy(ctx, saveCssGroupSending);
  return (ctx.body = response);
});

// 高级、客服消息群发（修改）
router.post('/updateCssGroupSending', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCssGroupSending);
  return (ctx.body = response);
});

// 高级、客服、模板消息群发（配额信息）
router.post('/getNounData', async ctx => {
  const response = await proxyService.postProxy(ctx, getNounData);
  return (ctx.body = response);
});

// 高级、客服、模板消息群发（删除）
router.post('/deleteCssGroupSending', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteCssGroupSending);
  return (ctx.body = response);
});

// 高级、客服、模板消息群发（取消发送）
router.post('/cancelCssGroupSending', async ctx => {
  const response = await proxyService.postProxy(ctx, cancelCssGroupSending);
  return (ctx.body = response);
});

// 高级、客服、模板消息群发（获取列表）
router.post('/getCssGroupSendingListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getCssGroupSendingListByPage);
  return (ctx.body = response);
});

// 高级、客服、模板消息群发（获取详情）
router.post('/getCssGroupSendingInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getCssGroupSendingInfo);
  return (ctx.body = response);
});

// 获取预估人数
router.post('/getFansUserCount', async ctx => {
  const response = await proxyService.postProxy(ctx, getFansUserCount);
  return (ctx.body = response);
});

export default router;
