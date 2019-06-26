import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { getUserCorpAuthMulti } from '../../api';

const router = new Router();

// 生成临时二维码 仅用于官方公众号
router.post('/getUserCorpAuthMulti', async ctx => {
  const response = await proxyService.postProxy(ctx, getUserCorpAuthMulti);
  return (ctx.body = response);
});

module.exports = router;
