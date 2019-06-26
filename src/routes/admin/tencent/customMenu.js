import Router from 'koa-router';
import proxyService from '../../../common/proxyService';
import {
  getWxMenuList,
  customSaveWxMenu,
  customUpdateWxMenu,
  customDeleteWxMenu,
  customSaveAndPublishWxMenu,
  customUpdateWxMenuBySysn,
  queryCssMediaImgList,
  queryCssGroup,
  updateIdxOrder,
  saveBatchWxMenu,
} from '../../../api';

const router = new Router();

// 获取自定义菜单列表
router.post('/getWxMenuList', async ctx => {
  const response = await proxyService.postProxy(ctx, getWxMenuList);
  return (ctx.body = response);
});

// 获取自定义菜单列表
router.post('/saveBatchWxMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, saveBatchWxMenu);
  return (ctx.body = response);
});

// 新增自定义菜单
router.post('/saveWxMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, customSaveWxMenu);
  return (ctx.body = response);
});
// 自定义菜单修改
router.post('/updateWxMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, customUpdateWxMenu);
  return (ctx.body = response);
});
// 自定义菜单保存并发布
router.post('/saveAndPublishWxMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, customSaveAndPublishWxMenu);
  return (ctx.body = response);
});
// 自定义菜单删除
router.post('/deleteWxMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, customDeleteWxMenu);
  return (ctx.body = response);
});
// 自定义菜单同步
router.post('/updateWxMenuBySysn', async ctx => {
  const response = await proxyService.postProxy(ctx, customUpdateWxMenuBySysn);
  return (ctx.body = response);
});
// 获取公众号列表
router.post('/queryCssMediaImgList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssMediaImgList);
  return (ctx.body = response);
});
// 获取公众号列表
router.post('/queryCssGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssGroup);
  return (ctx.body = response);
});

// 修改菜单排序
router.post('/updateIdxOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, updateIdxOrder);
  return (ctx.body = response);
});

export default router;
