import Router from 'koa-router';
const router = new Router();

import time from './time.js';

router.prefix('/api');

router.get('/check/checkserver', async ctx => {
  return (ctx.body = 'server is running...');
});

router.use('/nodeServer', time.routes(), time.allowedMethods()); // 快捷回复

export default function(app) {
  app.use(router.routes());
}
