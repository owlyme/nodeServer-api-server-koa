import Router from 'koa-router';
const router = new Router();

// 获取时间
router.get('/getServerTime', async ctx => {
  let time = Date.now();
  return (ctx.body = { code: 1, data: time });
});

module.exports = router;
