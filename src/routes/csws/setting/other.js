import Router from 'koa-router';
import proxyService from '../../../common/proxyService';

import {
  getPublicAccountList,
  getSeatList,
  getAcItemValueByKfSystem, // 获取设置信息
  updateAcItemValueByKfSystem, // 修改设置信息
  getAcItemValueByAppAccountId, // 获取协作客服设置信息
  updateAcItemValueByAppAccountId, // 设置协作客服设置信息
  getActorItemInfo,
  updateActorItem,
  saveInitSeting,
} from '../../../api';

const router = new Router();

// 获取公众号列表信息
router.post('/wxPublicAccount/getPublicAccountList', async ctx => {
  const response = await proxyService.postProxy(ctx, getPublicAccountList);
  return (ctx.body = response);
});

// 获取坐席列表数据
router.get('/convr/getSeatList', async ctx => {
  const response = await proxyService.postProxy(ctx, getSeatList);
  return (ctx.body = response);
});
// router.get('/seat/getSeatList', async ctx => {
//   const response = await proxyService.postProxy(ctx, getSeatList);
//   return (ctx.body = response);
// });

// 获取设置信息（新消息提醒、回复设置、协作客服设置）
router.post('/setting/item/getAcItemValueByKfSystem', async ctx => {
  const response = await proxyService.postProxy(ctx, getAcItemValueByKfSystem);
  return (ctx.body = response);
});

// 修改设置信息（新消息提醒、回复设置、协作客服设置）
router.post('/setting/item/updateAcItemValueByKfSystem', async ctx => {
  const response = await proxyService.postProxy(ctx, updateAcItemValueByKfSystem);
  return (ctx.body = response);
});

// 获取协作客服设置信息
router.post('/setting/item/getAcItemValueByAppAccountId', async ctx => {
  const response = await proxyService.postProxy(ctx, getAcItemValueByAppAccountId);
  return (ctx.body = response);
});

// 修改协作客服设置信息
router.post('/setting/item/updateAcItemValueByAppAccountId', async ctx => {
  const response = await proxyService.postProxy(ctx, updateAcItemValueByAppAccountId);
  return (ctx.body = response);
});

// 新消息提醒、回复设置、协作客服设置数据获取
router.post('/item/getActorItemInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getActorItemInfo);
  return (ctx.body = response);
});

// 新消息提醒、回复设置、协作客服设置数据修改
router.post('/item/updateActorItem', async ctx => {
  const response = await proxyService.postProxy(ctx, updateActorItem);
  return (ctx.body = response);
});

// 新消息提醒、回复设置、协作客服设置数据初始化
router.post('/item/saveInitSeting', async ctx => {
  const response = await proxyService.postProxy(ctx, saveInitSeting);
  return (ctx.body = response);
});

export default router;
