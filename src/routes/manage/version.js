import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  updateGetAppVersionToken,
  updateAppVersionIsUpdate,
  saveAppVersion,
  queryVersionById,
  queryTAppVersionByPagerMV,
  queryNewVersion,
  updateVersionMV,
} from '../../api';
const router = new Router();

router.post('/updateGetAppVersionToken', async ctx => {
  const response = await proxyService.postProxy(ctx, updateGetAppVersionToken);
  return (ctx.body = response);
});

router.post('/updateAppVersionIsUpdate', async ctx => {
  const response = await proxyService.postProxy(ctx, updateAppVersionIsUpdate);
  return (ctx.body = response);
});

router.post('/saveAppVersion', async ctx => {
  const response = await proxyService.postProxy(ctx, saveAppVersion);
  return (ctx.body = response);
});

router.post('/queryVersionById', async ctx => {
  const response = await proxyService.postProxy(ctx, queryVersionById);
  return (ctx.body = response);
});

router.post('/queryTAppVersionByPager', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTAppVersionByPagerMV);
  return (ctx.body = response);
});
router.post('/queryNewVersion', async ctx => {
  const response = await proxyService.postProxy(ctx, queryNewVersion);
  return (ctx.body = response);
});

router.post('/updateVersionMV', async ctx => {
  const response = await proxyService.postProxy(ctx, updateVersionMV);
  return (ctx.body = response);
});

export default router;
