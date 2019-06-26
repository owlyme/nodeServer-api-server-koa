import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getWxMenuList,
  saveWxMenu,
  saveAndPublishWxMenu,
  deleteWxMenu,
  updateWxMenuDisable,
  updateWxMenuEnable,
  updateAndPublishWxMenu,
  getWxGroupAndTagList,
  getWxMenuListByPage,
  checkMathRuleData,
  getUnPublishWxMenuList,
  isCanSaveCustomerMenu,
} from '../../api';

const router = new Router();

// 未添加自定义规则的菜单
router.post('/wxMenuMatchRule/getUnPublishWxMenuList', async ctx => {
  const response = await proxyService.postProxy(ctx, getUnPublishWxMenuList);
  return (ctx.body = response);
});

// 能否新建个性化菜单
router.post('/wxMenuMatchRule/isCanSaveCustomerMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, isCanSaveCustomerMenu);
  return (ctx.body = response);
});

// 个性化菜单列表
router.post('/wxMenu/getWxMenuList', async ctx => {
  const response = await proxyService.postProxy(ctx, getWxMenuList);
  return (ctx.body = response);
});

// 个性化菜单新增修改校验
router.post('/wxMenuMatchRule/checkMathRuleData', async ctx => {
  const response = await proxyService.postProxy(ctx, checkMathRuleData);
  return (ctx.body = response);
});

router.post('/wxMenuMatchRule/getWxMenuListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getWxMenuListByPage);
  return (ctx.body = response);
});

//
router.post('/wxMenuMatchRule/isCanSaveCustomerMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, isCanSaveCustomerMenu);
  return (ctx.body = response);
});

// 个性化菜单新增
router.post('/wxMenuMatchRule/saveWxMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, saveWxMenu);
  return (ctx.body = response);
});
// 个性化菜单新增并保存
router.post('/wxMenuMatchRule/saveAndPublishWxMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, saveAndPublishWxMenu);
  return (ctx.body = response);
});
// 个性化菜单删除
router.post('/wxMenuMatchRule/deleteWxMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteWxMenu);
  return (ctx.body = response);
});
// 个性化菜单禁用
router.post('/wxMenuMatchRule/updateWxMenuDisable', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxMenuDisable);
  return (ctx.body = response);
});
// 个性化菜单启用
router.post('/wxMenuMatchRule/updateWxMenuEnable', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxMenuEnable);
  return (ctx.body = response);
});
// 个性化菜单修改保存并发布
router.post('/wxMenuMatchRule/updateAndPublishWxMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, updateAndPublishWxMenu);
  return (ctx.body = response);
});
// 获取公众号下所有标签分组及标签信息
router.post('/getWxGroupAndTagList', async ctx => {
  const response = await proxyService.postProxy(ctx, getWxGroupAndTagList);
  return (ctx.body = response);
});

export default router;
