import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getRepSeatConvrStatisticsMP, // 统计数据
  updateBindSessionMP, // 绑定用户sessionId
  updateUserDataInfoMP, // 更新用户信息与session信息
  getUserMobileMP, // 解析用户手机号
  getUserCorpAuthMultiMP, // 获取用户公司列表
  saveCorpCreateForFreeOrderMP, // 创建免费企业
  saveLoginCorpIdBySessionMP, // 进入公司
  getSessionMP, // 验证session有效性
  logoutBySessionMP, // 企业列表解绑session
  getPublicAccountListMP, // 获取公众号列表
} from '../../api';

const router = new Router();

// 获取统计信息
router.post('/getRepSeatConvrStatistics', async ctx => {
  const response = await proxyService.postProxy(ctx, getRepSeatConvrStatisticsMP);
  return (ctx.body = response);
});

// 绑定用户sessionId
router.post('/updateBindSession', async ctx => {
  const response = await proxyService.postProxy(ctx, updateBindSessionMP);
  return (ctx.body = response);
});

// 更新用户信息与session信息
router.post('/updateUserDataInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, updateUserDataInfoMP);
  return (ctx.body = response);
});

// 解析用户手机号
router.post('/getUserMobile', async ctx => {
  const response = await proxyService.postProxy(ctx, getUserMobileMP);
  return (ctx.body = response);
});

// 获取用户公司列表
router.post('/getUserCorpAuthMulti', async ctx => {
  const response = await proxyService.postProxy(ctx, getUserCorpAuthMultiMP);
  return (ctx.body = response);
});

// 创建免费企业
router.post('/saveCorpCreateForFreeOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, saveCorpCreateForFreeOrderMP);
  return (ctx.body = response);
});

// 进入公司
router.post('/saveLoginCorpIdBySession', async ctx => {
  const response = await proxyService.postProxy(ctx, saveLoginCorpIdBySessionMP);
  return (ctx.body = response);
});

// 验证session有效性
router.post('/getSession', async ctx => {
  const response = await proxyService.postProxy(ctx, getSessionMP);
  return (ctx.body = response);
});

// 企业列表解绑session
router.post('/logoutBySession', async ctx => {
  const response = await proxyService.postProxy(ctx, logoutBySessionMP);
  return (ctx.body = response);
});

// 获取公众号列表
router.post('/getPublicAccountList', async ctx => {
  const response = await proxyService.postProxy(ctx, getPublicAccountListMP);
  return (ctx.body = response);
});

export default router;
