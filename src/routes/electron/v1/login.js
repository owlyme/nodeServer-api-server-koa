import Router from 'koa-router';
import proxyService from '../../../common/proxyService';
import {
  ctSaveLoginBySession,
  ctGetPersonalInfo,
  ctGetSession,
  ctCheckVersion,
  ctGetUserCorpAuthMulti,
  ctChatLoginOutBySession,
  ctGetChatSeatInfo,
  ctSaveSearchCorpIdLoginBySession,
  ctGetScanResult,
  ctGetTmpQrcode,
  ctUpdateSession,
} from '../../../api';

const router = new Router();

router.post('/saveLoginBySession', async ctx => {
  const response = await proxyService.postProxy(ctx, ctSaveLoginBySession);
  return (ctx.body = response);
});

router.post('/getPersonalInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, ctGetPersonalInfo);
  return (ctx.body = response);
});

router.post('/getSession', async ctx => {
  const response = await proxyService.postProxy(ctx, ctGetSession);
  return (ctx.body = response);
});

router.post('/checkVersion', async ctx => {
  const response = await proxyService.postProxy(ctx, ctCheckVersion);
  return (ctx.body = response);
});

router.post('/getUserCorpAuthMulti', async ctx => {
  const response = await proxyService.postProxy(ctx, ctGetUserCorpAuthMulti);
  return (ctx.body = response);
});

router.post('/chatLoginOutBySession', async ctx => {
  const response = await proxyService.postProxy(ctx, ctChatLoginOutBySession);
  return (ctx.body = response);
});

// 获取用户信息
router.post('/getChatSeatInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, ctGetChatSeatInfo);
  return (ctx.body = response);
});

router.post('/saveSearchCorpIdLoginBySession', async ctx => {
  const response = await proxyService.postProxy(ctx, ctSaveSearchCorpIdLoginBySession);
  return (ctx.body = response);
});

router.post('/getScanResult', async ctx => {
  const response = await proxyService.postProxy(ctx, ctGetScanResult);
  return (ctx.body = response);
});

router.post('/getTmpQrcode', async ctx => {
  const response = await proxyService.postProxy(ctx, ctGetTmpQrcode);
  return (ctx.body = response);
});

router.post('/updateSession', async ctx => {
  const response = await proxyService.postProxy(ctx, ctUpdateSession);
  return (ctx.body = response);
});

export default router;
