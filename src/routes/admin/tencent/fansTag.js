import Router from 'koa-router';
import proxyService from '../../../common/proxyService';
import {
  getWxGroupAndTagList,
  addOrUpdateWxTagGroup,
  updateWxGroupSort,
  deleteWxTagGroup,
  getWxAppAccountList,
  updateCopyTagGroupFromOtherAppId,
  updateCopyTagFromOtherAppId,
  addOrUpdateWxTag,
  updateWxTagSort,
  deleteWxTag,
  updateWxTagGroup,
  getAndCheckTagAndTagGroup,
} from '../../../api';

const router = new Router();
// 获取公众号下所有标签分组及标签信息
router.post('/getWxGroupAndTagList', async ctx => {
  const response = await proxyService.postProxy(ctx, getWxGroupAndTagList);
  return (ctx.body = response);
});
// 添加或修改标签分组
router.post('/addOrUpdateWxTagGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, addOrUpdateWxTagGroup);
  return (ctx.body = response);
});
// 上移下移修改分组操作
router.post('/updateWxGroupSort', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxGroupSort);
  return (ctx.body = response);
});
// 删除标签分组
router.post('/deleteWxTagGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteWxTagGroup);
  return (ctx.body = response);
});
// 点击复制标签分组接口获取公众号列表
router.post('/getWxAppAccountList', async ctx => {
  const response = await proxyService.postProxy(ctx, getWxAppAccountList);
  return (ctx.body = response);
});
// 复制标签分组
router.post('/updateCopyTagGroupFromOtherAppId', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCopyTagGroupFromOtherAppId);
  return (ctx.body = response);
});
// 复制标签
router.post('/updateCopyTagFromOtherAppId', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCopyTagFromOtherAppId);
  return (ctx.body = response);
});
// 添加或修改标签
router.post('/addOrUpdateWxTag', async ctx => {
  const response = await proxyService.postProxy(ctx, addOrUpdateWxTag);
  return (ctx.body = response);
});
// 左右移动修改标签位置操作
router.post('/updateWxTagSort', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxTagSort);
  return (ctx.body = response);
});
// 删除标签
router.post('/deleteWxTag', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteWxTag);
  return (ctx.body = response);
});
// 设置标签分组
router.post('/updateWxTagGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWxTagGroup);
  return (ctx.body = response);
});
// 设置标签分组
router.post('/getAndCheckTagAndTagGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, getAndCheckTagAndTagGroup);
  return (ctx.body = response);
});
export default router;
