import Router from 'koa-router';
import proxyService from '../../../common/proxyService';
import {
  updateQueryIntelligentReception, // 获取智能接待配置信息
  updateScenesSet, // 修改智能接待配置信息
  queryTaskList, // 获取智能接待任务列表
  canSaveTask, // 判断能否新建接待任务
  saveIntelligentReceptionTask, // 新建智能接待任务
  updateIntelligentReceptionTask, // 修改智能接待任务
  deleteIntelligentReceptionTask, // 删除智能接待任务
} from '../../../api';

const router = new Router();

// 获取智能接待配置信息
router.post('/updateQueryIntelligentReception', async ctx => {
  const response = await proxyService.postProxy(ctx, updateQueryIntelligentReception);
  return (ctx.body = response);
});

// 修改智能接待配置信息
router.post('/updateScenesSet', async ctx => {
  const response = await proxyService.postProxy(ctx, updateScenesSet);
  return (ctx.body = response);
});

// 获取智能接待任务列表
router.post('/queryTaskList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTaskList);
  return (ctx.body = response);
});

// 判断能否创建接待任务
router.post('/canSaveTask', async ctx => {
  const response = await proxyService.postProxy(ctx, canSaveTask);
  return (ctx.body = response);
});

// 新建智能接待任务
router.post('/saveIntelligentReceptionTask', async ctx => {
  const response = await proxyService.postProxy(ctx, saveIntelligentReceptionTask);
  return (ctx.body = response);
});

// 修改智能接待任务
router.post('/updateIntelligentReceptionTask', async ctx => {
  const response = await proxyService.postProxy(ctx, updateIntelligentReceptionTask);
  return (ctx.body = response);
});

// 删除智能接待任务
router.post('/deleteIntelligentReceptionTask', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteIntelligentReceptionTask);
  return (ctx.body = response);
});

export default router;
