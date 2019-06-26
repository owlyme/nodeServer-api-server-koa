import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  queryCssGroupMT,
  getCustomTemplateListByPage,
  getAllPrivateTemplateFromDatabase,
  getPrivateTemplateInfo,
} from '../../api';

const router = new Router();

// 模板消息分组列表
router.post('/queryCssGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssGroupMT);
  return (ctx.body = response);
});

// 模板消息列表
router.post('/getCustomTemplateListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getCustomTemplateListByPage);
  return (ctx.body = response);
});

// 模板列表
router.post('/getAllPrivateTemplateFromDatabase', async ctx => {
  const response = await proxyService.postProxy(ctx, getAllPrivateTemplateFromDatabase);
  return (ctx.body = response);
});

// 模板详情
router.post('/getPrivateTemplateInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getPrivateTemplateInfo);
  return (ctx.body = response);
});

module.exports = router;
