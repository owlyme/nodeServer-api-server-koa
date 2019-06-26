import Router from 'koa-router';
import proxyService from '../../../common/proxyService';

const router = new Router();

import { getTXCloudTokenByUploadSeatCHAT } from '../../../api';

// 获取个性化设置上传头像token
router.post('/getTXCloudTokenByUploadSeatHeadImg', async ctx => {
  console.log(getTXCloudTokenByUploadSeatCHAT);
  const response = await proxyService.postProxy(ctx, getTXCloudTokenByUploadSeatCHAT);
  return (ctx.body = response);
});

export default router;
