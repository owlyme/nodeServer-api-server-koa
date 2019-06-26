import Router from 'koa-router';
import multer from 'koa-multer';
import path from 'path';
import fs from 'fs';
import wxUpload from '../../common/wxUpload';
import { readDuration } from '../upload/ffmpeg';
import proxyService from '../../common/proxyService';
import { base64String } from '../../utils/utils.js';

import {
  queryCssGroupChat,
  queryCssMediaNewsListChat,
  queryCssMediaVideoListChat,
  queryCssMediaVoiceListChat,
  queryCssMediaImgListChat,
  queryMediaExitedChat,
  saveWXMediaChat,
  getWXUploadUrlChat,
  saveCloudFileChat,
  updateGetCloudTokenChat,
  queryTmpFileListChat,
  queryTmpMediaVideoListChat,
  queryTmpMediaVoiceListChat,
  queryTmpMediaImgListChat,
  getCssFileListChat,
  saveCloudFile,
  saveMsgCloudFileChat,
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
  console.log('1,--------------------------- get message');
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
    try {
      timeLength = await readDuration(file.path);
    } catch (err) {
      return (ctx.body = { code: 0, data: false, message: '读取时长失败' });
    }
  }

  // 上传微信
  let resWx = await wxUpload(file.path, metarialType, ctx, { desc, title, ...params });
  console.log(`2,------------------------------ wx upload ${JSON.stringify(resWx)}`);

  proxyService.postProxy(ctx, saveWXMediaChat, {
    params: { ...params, ...resWx, title, timeLength },
  });

  // 腾讯云图片上传java
  const response = await proxyService.postProxy(ctx, saveCloudFile, {
    params: { cloudUrl, ...params },
  });
  console.log(`3 ------------------------------- ${JSON.stringify(response)}`);

  return (ctx.body = { ...response, ...resWx });
});
// 云服务
router.post('/queryMediaExited', async ctx => {
  const response = await proxyService.postProxy(ctx, queryMediaExitedChat);
  return (ctx.body = response);
});
// 同步个人中心（文本文件）
router.post('/saveMsgCloudFile', async ctx => {
  const response = await proxyService.postProxy(ctx, saveMsgCloudFileChat);
  return (ctx.body = response);
});

// 微信上传完成后保存数据
router.post('/saveWXMedia', async ctx => {
  const response = await proxyService.postProxy(ctx, saveWXMediaChat);
  return (ctx.body = response);
});

// 获取微信上传链接
router.post('/getWXUploadUrl', async ctx => {
  const response = await proxyService.postProxy(ctx, getWXUploadUrlChat);
  return (ctx.body = response);
});
// 云服务器上传
router.post('/saveCloudFile', async ctx => {
  const response = await proxyService.postProxy(ctx, saveCloudFileChat);
  return (ctx.body = response);
});
// 销大师公众号素材管理菜单，上传除图文外的微信素材获取上传token
router.post('/updateGetCloudToken', async ctx => {
  const response = await proxyService.postProxy(ctx, updateGetCloudTokenChat);
  return (ctx.body = response);
});
// 获取文件列表
router.post('/queryTmpFileList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTmpFileListChat);
  return (ctx.body = response);
});
// Video列表
router.post('/queryTmpMediaVideoList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTmpMediaVideoListChat);
  return (ctx.body = response);
});
// 获取语音素材列表
router.post('/queryTmpMediaVoiceList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTmpMediaVoiceListChat);
  return (ctx.body = response);
});
// 获取图片素材列表
router.post('/queryTmpMediaImgList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTmpMediaImgListChat);
  return (ctx.body = response);
});

// 根据类型获取分组列表
router.post('/queryCssGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssGroupChat);
  return (ctx.body = response);
});

router.post('/queryCssMediaNewsList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssMediaNewsListChat);
  return (ctx.body = response);
});

router.post('/queryCssMediaVideoList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssMediaVideoListChat);
  return (ctx.body = response);
});

router.post('/queryCssMediaVoiceList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssMediaVoiceListChat);
  return (ctx.body = response);
});

router.post('/queryCssMediaImgList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssMediaImgListChat);
  return (ctx.body = response);
});

router.post('/getCssFileList', async ctx => {
  const response = await proxyService.postProxy(ctx, getCssFileListChat);
  return (ctx.body = response);
});

module.exports = router;
