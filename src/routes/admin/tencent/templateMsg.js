import Router from 'koa-router';
import proxyService from '../../../common/proxyService';
import {
  queryTemplateCssGroup,
  deleteTemplateGroup,
  saveOrUpdateGroup,
  updateGroupOrder,
  getCustomTemplateListByPage,
  getCssCustomTemplateInfo,
  saveOrUpdateCssCustomTemplate,
  deleteCssCustomTemplate,
  syncWechatTemplateList,
  getWechatTemplateList,
  getWechatTemplate,
} from '../../../api';

const router = new Router();

// 微信公众号模板消息模块

// 获取模板分组列表
router.post('/queryTemplateCssGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTemplateCssGroup);
  return (ctx.body = response);
});

// 删除分组
router.post('/deleteTemplateGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteTemplateGroup);
  return (ctx.body = response);
});
// 新建分组获取修改
router.post('/saveOrUpdateGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateGroup);
  return (ctx.body = response);
});
// 移动分组
router.post('/updateGroupOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, updateGroupOrder);
  return (ctx.body = response);
});
// 获取自定义模板列表
router.post('/getCustomTemplateListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getCustomTemplateListByPage);
  return (ctx.body = response);
});

// 获取自定义模板详情
router.post('/getCssCustomTemplateInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getCssCustomTemplateInfo);
  return (ctx.body = response);
});

// 添加修改自定义模板
router.post('/saveOrUpdateCssCustomTemplate', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateCssCustomTemplate);
  return (ctx.body = response);
});
// 删除
router.post('/deleteCssCustomTemplate', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteCssCustomTemplate);
  return (ctx.body = response);
});

// 同步微信模板消息
router.post('/syncWechatTemplateList', async ctx => {
  const response = await proxyService.postProxy(ctx, syncWechatTemplateList);
  return (ctx.body = response);
});

// 获取微信模板列表
router.post('/getWechatTemplateList', async ctx => {
  const response = await proxyService.postProxy(ctx, getWechatTemplateList);
  return (ctx.body = response);
});

// 获取微信模板
router.post('/getWechatTemplate', async ctx => {
  const response = await proxyService.postProxy(ctx, getWechatTemplate);
  return (ctx.body = response);
});

export default router;
