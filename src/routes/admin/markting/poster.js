import Router from 'koa-router';
import proxyService from '../../../common/proxyService';
import {
  getFansPosterStatisticsList,
  getFansPosterTemplateStatisticsList,
  queryPosterByPage,
  saveOrUpdatePostertTemplate,
  deletePosterTemplate,
  updatePosterTemplateGroup,
  getPosterTemplate,
  getPosterTemplateByPage,
  validCssAppAccountTypeP,
  updateGetPosterCloudToken,
  saveOrUpdateGroupP,
  updateGroupOrderP,
  getFansPosterTemplateStatistics,
  getFansPosterStatistics,
  deleteGroupP,
  queryCssGroupP,
  getFansPosterImageById,
} from '../../../api';

const router = new Router();

router.post('/getFansPosterStatisticsList', async ctx => {
  const response = await proxyService.postProxy(ctx, getFansPosterStatisticsList);
  return (ctx.body = response);
});

router.post('/getFansPosterTemplateStatisticsList', async ctx => {
  const response = await proxyService.postProxy(ctx, getFansPosterTemplateStatisticsList);
  return (ctx.body = response);
});

router.post('/queryPosterByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, queryPosterByPage);
  return (ctx.body = response);
});

router.post('/saveOrUpdatePostertTemplate', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdatePostertTemplate);
  return (ctx.body = response);
});

router.post('/deletePosterTemplate', async ctx => {
  const response = await proxyService.postProxy(ctx, deletePosterTemplate);
  return (ctx.body = response);
});

router.post('/updatePosterTemplateGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, updatePosterTemplateGroup);
  return (ctx.body = response);
});

router.post('/getPosterTemplate', async ctx => {
  const response = await proxyService.postProxy(ctx, getPosterTemplate);
  return (ctx.body = response);
});

router.post('/getPosterTemplateByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getPosterTemplateByPage);
  return (ctx.body = response);
});

router.post('/validCssAppAccountType', async ctx => {
  const response = await proxyService.postProxy(ctx, validCssAppAccountTypeP);
  return (ctx.body = response);
});

router.post('/updateGetPosterCloudToken', async ctx => {
  const response = await proxyService.postProxy(ctx, updateGetPosterCloudToken);
  return (ctx.body = response);
});

router.post('/saveOrUpdateGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateGroupP);
  return (ctx.body = response);
});

router.post('/updateGroupOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, updateGroupOrderP);
  return (ctx.body = response);
});

router.post('/getFansPosterTemplateStatistics', async ctx => {
  const response = await proxyService.postProxy(ctx, getFansPosterTemplateStatistics);
  return (ctx.body = response);
});

router.post('/getFansPosterStatistics', async ctx => {
  const response = await proxyService.postProxy(ctx, getFansPosterStatistics);
  return (ctx.body = response);
});

router.post('/deleteGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteGroupP);
  return (ctx.body = response);
});

router.post('/queryCssGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssGroupP);
  return (ctx.body = response);
});

router.post('/getFansPosterImageById', async ctx => {
  const response = await proxyService.postProxy(ctx, getFansPosterImageById);
  return (ctx.body = response);
});
export default router;
