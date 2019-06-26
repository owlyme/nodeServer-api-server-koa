import Router from 'koa-router';
import proxyService from '../../../common/proxyService';

import {
  saveCollectData,
  deleteCollectById,
  getCollectDetailById,
  getCollectListByPage,
} from '../../../api';
const router = new Router();
// 添加收藏
router.post('/saveCollectData', async ctx => {
  console.log(ctx);
  const response = await proxyService.postProxy(ctx, saveCollectData);
  return (ctx.body = response);
});
// 删除收藏
router.post('/deleteCollectById', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteCollectById);
  return (ctx.body = response);
});
// 获取收藏详情
router.post('/getCollectDetailById', async ctx => {
  const response = await proxyService.postProxy(ctx, getCollectDetailById);
  return (ctx.body = response);
});
// 收藏列表
router.post('/getCollectListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getCollectListByPage);
  return (ctx.body = response);
});
export default router;
