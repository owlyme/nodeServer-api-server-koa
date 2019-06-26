import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { getTmpQrcodeChat, getScanResultChat } from '../../api';

const router = new Router();

// // 生成临时二维码 仅用于官方公众号
router.post('/getTmpQrcode', async ctx => {
  const response = await proxyService.postProxy(ctx, getTmpQrcodeChat);
  return (ctx.body = response);
});
// // 扫描二维码后，查询二维码结果
router.post('/getScanResult', async ctx => {
  const response = await proxyService.postProxy(ctx, getScanResultChat);
  return (ctx.body = response);
});

module.exports = router;
