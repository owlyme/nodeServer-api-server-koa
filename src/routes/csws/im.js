import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { getCompanyConnectConfig } from '../../api';

const router = new Router();

// 生成临时二维码 仅用于官方公众号
router.post('/getCompanyConnectConfig', async ctx => {
  const response = await proxyService.postProxy(ctx, getCompanyConnectConfig);
  return (ctx.body = response);
});

module.exports = router;
