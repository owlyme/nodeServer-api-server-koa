import Router from 'koa-router';
import proxyService from '../../../common/proxyService';
import {
  deleteTmpMediaByGroup,
  deleteCssTmpMedia,
  queryMsgGroup,
  queryTmpMediaVideoList,
  queryTmpMediaVoiceList,
  queryTmpFileList,
  queryTmpMediaImgList,
} from '../../../api';

const router = new Router();

router.post('/deleteTmpMediaByGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteTmpMediaByGroup);
  return (ctx.body = response);
});

router.post('/deleteCssTmpMedia', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteCssTmpMedia);
  return (ctx.body = response);
});

router.post('/queryMsgGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, queryMsgGroup);
  return (ctx.body = response);
});

router.post('/queryTmpMediaVideoList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTmpMediaVideoList);
  return (ctx.body = response);
});

router.post('/queryTmpMediaVoiceList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTmpMediaVoiceList);
  return (ctx.body = response);
});

router.post('/queryTmpFileList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTmpFileList);
  return (ctx.body = response);
});

router.post('/queryTmpMediaImgList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTmpMediaImgList);
  return (ctx.body = response);
});

export default router;
