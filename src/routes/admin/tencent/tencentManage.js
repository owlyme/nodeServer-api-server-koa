import Router from 'koa-router';
import proxyService from '../../../common/proxyService';
import {
  getPublicAccountListAdmin,
  checkAppIdNum,
  updateCssWxPublicAccountStatusToDelete,
  updateCssWxPublicAccountToAuthBlockUp,
  updateCssWxPublicAccountToBlockUp,
  updateCssWxPublicAccountToDisabled,
  updateCssWxPublicAccountToActive,
  updateCssWxPublicAccountDataToDb,
  queryCssSynList,
} from '../../../api';

const router = new Router();

// 获取公众号列表
router.get('/getPublicAccountList', async ctx => {
  const response = await proxyService.postProxy(ctx, getPublicAccountListAdmin);
  return (ctx.body = response);
});

// 判断是否可以添加公众号
router.get('/checkAppIdNum', async ctx => {
  const response = await proxyService.postProxy(ctx, checkAppIdNum);
  return (ctx.body = response);
});

// 公众号信息一键同步
router.post('/updateCssWxPublicAccountDataToDb', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCssWxPublicAccountDataToDb);
  return (ctx.body = response);
});

// 解除授权
router.get('/updateCssWxPublicAccountToAuthBlockUp', async ctx => {
  let response = await proxyService.postProxy(ctx, updateCssWxPublicAccountToAuthBlockUp);
  return (ctx.body = response);
});

// 停用
router.get('/updateCssWxPublicAccountToBlockUp', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCssWxPublicAccountToBlockUp);
  return (ctx.body = response);
});

// 禁用微信公众号
router.get('/updateCssWxPublicAccountToDisabled', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCssWxPublicAccountToDisabled);
  return (ctx.body = response);
});

// 启用微信公众号
router.get('/updateCssWxPublicAccountToActive', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCssWxPublicAccountToActive);
  return (ctx.body = response);
});

// 删除微信公众号
router.get('/updateCssWxPublicAccountStatusToDelete', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCssWxPublicAccountStatusToDelete);
  return (ctx.body = response);
});
// 企业端公众号查询同步状态
router.post('/queryCssSynList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssSynList);
  return (ctx.body = response);
});
export default router;
