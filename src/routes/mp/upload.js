import Router from 'koa-router';
import multer from 'koa-multer';
import proxyService from '../../common/proxyService';
import path from 'path';
import fs from 'fs';
import wxUpload from '../../common/wxUpload';
import { readDuration } from '../upload/ffmpeg';
import { base64String } from '../../utils/utils.js';

import {
  updateGetCloudTokenMP,
  saveCloudFileMP,
  saveWXMediaMP,
  queryMediaExitedMP,
} from '../../api';

const router = new Router();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.resolve(__dirname, '../../../cacheFiles'));
  },
  filename: function(ctx, file, cb) {
    cb(null, file.originalname);
  },
});
// 设置有存储路径的上传中间件
const upload = multer({ storage: storage });

// 同步文件到微信
router.post('/syncSaveMedia', upload.single('file'), async ctx => {
  console.log('1,--------------------------- get message', ctx.req.body);
  const body = ctx.req.body; // json数据
  let file = ctx.req.file; // 文件对象

  if (!file) {
    let src_str = body.file;
    let pic_ext = src_str.split(';', 1)[0].split('/', 2)[1];
    let buf = base64String(src_str);
    let store_path = `${path.resolve(__dirname, '../../../cacheFiles')}/${body.title}.${pic_ext}`;
    delete body.file;
    fs.writeFileSync(store_path, buf);
    file = { path: store_path };
    console.log('1.1, create file');
  }

  let timeLength = 0;
  const { metarialType, desc, title, cloudUrl, ...params } = body;
  if (metarialType === 'voice') {
    // if (body.timeLength ) {
    //   timeLength = body.timeLength;
    // } else {
    try {
      timeLength = await readDuration(file.path);
    } catch (err) {
      return (ctx.body = { code: 0, data: false, message: '读取时长失败' });
    }
    // }
  }
  // 上传微信
  let resWx = await wxUpload(file.path, metarialType, ctx, { desc, title, ...params }, true);
  console.log(`2,------------------------------ wx upload ${JSON.stringify(resWx)}`);

  proxyService.postProxy(ctx, saveWXMediaMP, {
    params: { ...params, ...resWx, title, timeLength },
  });

  // 腾讯云图片上传java
  const response = await proxyService.postProxy(ctx, saveCloudFileMP, {
    params: { cloudUrl, ...params },
  });
  console.log(`3 ------------------------------- ${JSON.stringify(response)}`);

  return (ctx.body = { ...response, ...resWx, timeLength });
});

// 获取默认免费信息
router.post('/updateGetCloudToken', async ctx => {
  const response = await proxyService.postProxy(ctx, updateGetCloudTokenMP);
  return (ctx.body = response);
});

// 获取默认免费信息
router.post('/queryMediaExited', async ctx => {
  const response = await proxyService.postProxy(ctx, queryMediaExitedMP);
  return (ctx.body = response);
});

export default router;
