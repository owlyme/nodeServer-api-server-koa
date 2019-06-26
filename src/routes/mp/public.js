import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getValueByKeyMP, // 根据字典key值获取相应数据
  getValueByKeyAndPvMP, // 根据父级和字典key获取相应数据
} from '../../api';

const router = new Router();

// 根据字典key值获取相应数据
router.post('/getValueByKey', async ctx => {
  const response = await proxyService.postProxy(ctx, getValueByKeyMP);
  return (ctx.body = response);
});

// 根据父级和字典key获取相应数据
router.post('/getValueByKeyAndPv', async ctx => {
  const response = await proxyService.postProxy(ctx, getValueByKeyAndPvMP);
  return (ctx.body = response);
});

export default router;
