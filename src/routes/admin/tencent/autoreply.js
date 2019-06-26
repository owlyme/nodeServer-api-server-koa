import Router from 'koa-router';
import proxyService from '../../../common/proxyService';
import {
  getCssAutoreplyRuleListByPage,
  saveOrUpdateCssAutoreplyRule,
  deleteCssAutoreplyRule,
  getCssAutoreplyRuleInfo,
  deleteCssAutoreplyRuleContent,
  updateCssAutoreplyRuleContentOrder,
  saveOrUpdateAutoreplyTypeCssAutoreplyRule,
  getCssAutoreplyRuleByAutoreplyType,
  deleteAutoreplyTypeCssAutoreplyRule,
  getCssAutoreplyRuleStatus,
  updateCssAutoreplyRuleStatus,
  getAutoreplyRuleMaxCount,
} from '../../../api';

const router = new Router();

//关键词回复(列表)
router.post('/getCssAutoreplyRuleListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getCssAutoreplyRuleListByPage);
  return (ctx.body = response);
});

//关键词回复(添加、修改、禁/启用)
router.post('/saveOrUpdateCssAutoreplyRule', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateCssAutoreplyRule);
  return (ctx.body = response);
});

//关键词回复规则(删除规则)
router.post('/deleteCssAutoreplyRule', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteCssAutoreplyRule);
  return (ctx.body = response);
});

//关键词回复规则(详情)
router.post('/getCssAutoreplyRuleInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getCssAutoreplyRuleInfo);
  return (ctx.body = response);
});

//关键词回复规则(删除回复内容)
router.post('/deleteCssAutoreplyRuleContent', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteCssAutoreplyRuleContent);
  return (ctx.body = response);
});

//关键词回复(修改顺序)
router.post('/updateCssAutoreplyRuleContentOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCssAutoreplyRuleContentOrder);
  return (ctx.body = response);
});

//被关注回复 与 收到消息回复 (添加、修改)
router.post('/saveOrUpdateAutoreplyTypeCssAutoreplyRule', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateAutoreplyTypeCssAutoreplyRule);
  return (ctx.body = response);
});

//被关注回复 与 收到消息回复 (查询)
router.post('/getCssAutoreplyRuleByAutoreplyType', async ctx => {
  const response = await proxyService.postProxy(ctx, getCssAutoreplyRuleByAutoreplyType);
  return (ctx.body = response);
});

//被关注回复 与 收到消息回复 (删除)
router.post('/deleteAutoreplyTypeCssAutoreplyRule', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteAutoreplyTypeCssAutoreplyRule);
  return (ctx.body = response);
});

//三类自动回复状态:是否开启 (查询)
router.post('/getCssAutoreplyRuleStatus', async ctx => {
  const response = await proxyService.postProxy(ctx, getCssAutoreplyRuleStatus);
  return (ctx.body = response);
});

//三类自动回复状态 (修改)
router.post('/updateCssAutoreplyRuleStatus', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCssAutoreplyRuleStatus);
  return (ctx.body = response);
});

//获取自动回复数量
router.post('/getAutoreplyRuleMaxCount', async ctx => {
  const response = await proxyService.postProxy(ctx, getAutoreplyRuleMaxCount);
  return (ctx.body = response);
});

export default router;
