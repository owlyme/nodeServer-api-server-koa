import Router from 'koa-router';
import multer from 'koa-multer';
import path from 'path';
import wxUpload from '../../../common/wxUpload';
import { readDuration } from '../../upload/ffmpeg';
import proxyService from '../../../common/proxyService';
// import getWebData from '../../../common/getWebData.js';
import {
  saveWXMedia,
  saveCloudFile,
  updateMedia,
  deleteMedia,
  getCssFileList,
  saveOrUpdateCssFile,
  deleteCssFile,
  saveOrUpdateGroup,
  deleteGroup,
  updateGroupOrder,
  queryCssGroup,
  queryCssMediaVoiceList,
  queryCssMediaImgList,
  queryCssMediaNewsList,
  queryCssMediaVideoList,
  getCssWxMediaInfo,
  saveMediaNews,
  updateMediaNews,
  downWxMediaVoice,
  queryCssMediaCount,
  saveOrUpdateUrlNews,
  updateGetCloudToken,
  queryMediaExited,
  getMediaIdDetailData,
} from '../../../api';

const router = new Router();
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.resolve(__dirname, '../../../../cacheFiles'));
  },
  filename: function(ctx, file, cb) {
    // const fileFormat = file.originalname.split('.');
    cb(null, file.originalname);
  },
});
// 设置有存储路径的上传中间件
const upload = multer({ storage: storage });

// 保存素材
router.post('/saveMedia', upload.single('file'), async ctx => {
  const body = ctx.req.body; // json数据
  const file = ctx.req.file; // 文件对象
  let timeLength = 0;
  const { metarialType, desc, title, cloudUrl, ...params } = body;

  if (metarialType === 'voice') {
    timeLength = await readDuration(file.path);
  }
  // 上传微信及上传java
  wxUpload(file.path, metarialType, ctx, { desc, title, ...params }).then(resWx => {
    //resWx mediaId,url
    proxyService.postProxy(ctx, saveWXMedia, {
      params: { ...params, ...resWx, title, timeLength },
    });
  });
  // 腾讯云图片上传java
  const response = await proxyService.postProxy(ctx, saveCloudFile, {
    params: { cloudUrl, ...params },
  });
  return (ctx.body = response);
});

router.post('/syncSaveMedia', upload.single('file'), async ctx => {
  const body = ctx.req.body; // json数据
  const file = ctx.req.file; // 文件对象
  let timeLength = 0;
  console.log(1, body);
  const { metarialType, desc, title, cloudUrl, ...params } = body;
  if (metarialType === 'voice') {
    try {
      timeLength = await readDuration(file.path);
    } catch (err) {
      return (ctx.body = { code: 0, data: false, message: '读取时长失败' });
    }
  }

  // 上传微信及上传java
  let resWx = await wxUpload(file.path, metarialType, ctx, { desc, title, ...params });
  console.log(2, resWx);
  proxyService.postProxy(ctx, saveWXMedia, {
    params: { ...params, ...resWx, title, timeLength },
  });

  // 腾讯云图片上传java
  const response = await proxyService.postProxy(ctx, saveCloudFile, {
    params: { cloudUrl, ...params },
  });
  console.log(3, response);

  return (ctx.body = { ...response, ...resWx });
});

// 保存素材 需要返回mediaId
router.post('/autoSaveMedia', async ctx => {
  const requestParams = ctx.requestParams;

  let timeLength = 0;
  const { metarialType, desc, title, cloudUrl, fileOnlinePath, ...params } = requestParams;
  if (metarialType === 'voice') {
    try {
      timeLength = await readDuration(fileOnlinePath);
    } catch (err) {
      return (ctx.body = { code: 0, data: false, message: '读取时长失败' });
    }
  }
  // 上传微信及上传java
  let resWx = await wxUpload(fileOnlinePath, metarialType, ctx, { desc, title, ...params });
  //resWx mediaId,url
  proxyService.postProxy(ctx, saveWXMedia, { params: { ...params, ...resWx, title, timeLength } });

  // 腾讯云图片上传java
  const response = await proxyService.postProxy(ctx, saveCloudFile, {
    params: { cloudUrl, ...params },
  });

  return (ctx.body = { ...response, ...resWx });
});

router.post('/queryMediaExited', async ctx => {
  const response = await proxyService.postProxy(ctx, queryMediaExited);
  return (ctx.body = response);
});

router.post('/getMediaIdDetailData', async ctx => {
  const response = await proxyService.postProxy(ctx, getMediaIdDetailData);
  return (ctx.body = response);
});

router.post('/updateMedia', async ctx => {
  const response = await proxyService.postProxy(ctx, updateMedia);
  return (ctx.body = response);
});

router.post('/deleteMedia', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteMedia);
  return (ctx.body = response);
});

router.post('/getCssFileList', async ctx => {
  const response = await proxyService.postProxy(ctx, getCssFileList);
  return (ctx.body = response);
});

router.post('/saveOrUpdateCssFile', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateCssFile);
  return (ctx.body = response);
});

router.post('/deleteCssFile', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteCssFile);
  return (ctx.body = response);
});

router.post('/saveOrUpdateGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateGroup);
  return (ctx.body = response);
});

router.post('/deleteGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteGroup);
  return (ctx.body = response);
});

router.post('/updateGroupOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, updateGroupOrder);
  return (ctx.body = response);
});

router.post('/queryCssGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssGroup);
  return (ctx.body = response);
});

router.post('/queryCssMediaVoiceList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssMediaVoiceList);
  return (ctx.body = response);
});

router.post('/queryCssMediaImgList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssMediaImgList);
  return (ctx.body = response);
});

router.post('/queryCssMediaNewsList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssMediaNewsList);
  return (ctx.body = response);
});

router.post('/queryCssMediaVideoList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssMediaVideoList);
  return (ctx.body = response);
});

router.post('/getCssWxMediaInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getCssWxMediaInfo);
  return (ctx.body = response);
});

router.post('/saveMediaNews', async ctx => {
  const response = await proxyService.postProxy(ctx, saveMediaNews);
  return (ctx.body = response);
});

router.post('/updateMediaNews', async ctx => {
  const response = await proxyService.postProxy(ctx, updateMediaNews);
  return (ctx.body = response);
});

router.post('/downWxMediaVoice', async ctx => {
  const response = await proxyService.postProxy(ctx, downWxMediaVoice);
  //  let response = await getWebData.httpsGet('https://xds-10-1-1255528578.file.myqcloud.com/voice/media/5/1-1-113ba8eecc2fbd8477d6b082b72bf8e4.mp3')
  return (ctx.body = response);
});

router.post('/queryCssMediaCount', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssMediaCount);
  return (ctx.body = response);
});

router.post('/saveOrUpdateUrlNews', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateUrlNews);
  return (ctx.body = response);
});

// 销大师公众号素材管理菜单，上传除图文外的微信素材获取上传token
router.post('/updateGetCloudToken', async ctx => {
  const response = await proxyService.postProxy(ctx, updateGetCloudToken);
  return (ctx.body = response);
});

// 上传微信素材
router.post('/uploadMeterial', upload.single('file'), async ctx => {
  // const body = ctx.req.body; // json数据
  const file = ctx.req.file; // 文件对象
  const res = await wxUpload(file.path, 'image'); // 微信素材上传返回返回
  return (ctx.body = res);
});
export default router;
