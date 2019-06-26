import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getCorpListMultiByPager,
  getCorpInfoMulti,
  updateCorpPackName,
  queryCorpPackRoleList,
  updateCorpStatusByCorpId,
  getNewCorpApplyOrderForM,
  getCorpApplyDetail,
  getCorpPackageModifyRecord,
  updateCorpPackageResources,
  updateCorpPackageFunction,
  getCorpPackageDetail,
} from '../../api';

const router = new Router();

//
router.post('/getCorpListMultiByPager', async ctx => {
  const response = await proxyService.postProxy(ctx, getCorpListMultiByPager);
  return (ctx.body = response);
});

router.post('/getCorpInfoMulti', async ctx => {
  const response = await proxyService.postProxy(ctx, getCorpInfoMulti);
  return (ctx.body = response);
});
router.post('/updateCorpPackName', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCorpPackName);
  return (ctx.body = response);
});

router.post('/queryCorpPackRoleList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCorpPackRoleList);
  return (ctx.body = response);
});

router.post('/updateCorpStatusByCorpId', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCorpStatusByCorpId);
  return (ctx.body = response);
});
// 新创建企业列表查询(运营平台)
router.post('/getNewCorpApplyOrderForM', async ctx => {
  const response = await proxyService.postProxy(ctx, getNewCorpApplyOrderForM);
  return (ctx.body = response);
});

// 运营端新创建企业详情
router.post('/getCorpApplyDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, getCorpApplyDetail);
  return (ctx.body = response);
});

// 获取公司修改记录
router.post('/getCorpPackageModifyRecord', async ctx => {
  const response = await proxyService.postProxy(ctx, getCorpPackageModifyRecord);
  return (ctx.body = response);
});

// 获取公司修改记录
router.post('/updateCorpPackageResources', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCorpPackageResources);
  return (ctx.body = response);
});

// 获取公司修改记录
router.post('/updateCorpPackageFunction', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCorpPackageFunction);
  return (ctx.body = response);
});

router.post('/getCorpPackageDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, getCorpPackageDetail);
  return (ctx.body = response);
});
export default router;
