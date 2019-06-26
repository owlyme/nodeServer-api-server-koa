import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getCorpItemValueByCorpSystem, // 获取设置信息
  updateCorpItemValueByCorpSystem, // 修改设置信息
  getCorpItemValueByCorpAppId, // 获取接待组设置信息
  updateCorpItemValueByCorpAppId, // 修改接待组设置信息
  load,
  save,
  saveInitSeting,
} from '../../api';

const router = new Router();

// 获取设置信息
router.post('/getCorpItemValueByCorpSystem', async ctx => {
  const response = await proxyService.postProxy(ctx, getCorpItemValueByCorpSystem);
  return (ctx.body = response);
});

// 修改设置信息
router.post('/updateCorpItemValueByCorpSystem', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCorpItemValueByCorpSystem);
  return (ctx.body = response);
});

// 获取接待组设置信息
router.post('/getCorpItemValueByCorpAppId', async ctx => {
  const response = await proxyService.postProxy(ctx, getCorpItemValueByCorpAppId);
  return (ctx.body = response);
});

// 修改接待组设置信息
router.post('/updateCorpItemValueByCorpAppId', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCorpItemValueByCorpAppId);
  return (ctx.body = response);
});

// 获取开关状态
router.post('/load', async ctx => {
  const response = await proxyService.postProxy(ctx, load);
  return (ctx.body = response);
});

// 修改开关状态
router.post('/save', async ctx => {
  const response = await proxyService.postProxy(ctx, save);
  return (ctx.body = response);
});

// （分配规则、接待组设置、会话设置）生成默认设置
router.post('/saveInitSeting', async ctx => {
  const response = await proxyService.postProxy(ctx, saveInitSeting);
  return (ctx.body = response);
});

export default router;
