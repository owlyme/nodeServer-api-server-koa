import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { transformData } from '../../utils/utils';
import {
  getTmpQrcodeAdmin,
  getSession,
  bindUserEmailPhoneAndVerifyCode,
  resendCode,
  loadTConfigListTreeAdmin,
  getValueByKeyAndPvAdmin,
  saveCorpCreateApply,
  getDefaultInfo,
  queryCurrVersion,
} from '../../api';

const router = new Router();

// 生成临时二维码
router.get('/getTmpQrcode', async ctx => {
  let params = ctx.request.query;
  params.platformType = Number(params.platformType);
  params.expireSeconds = Number(params.expireSeconds);
  if (params.corpId) {
    params.corpId = Number(params.corpId);
  }
  const response = await proxyService.postProxy(ctx, getTmpQrcodeAdmin, { params });
  return (ctx.body = response);
});

// 获取用户信息
router.get('/getSession', async ctx => {
  let response = await proxyService.postProxy(ctx, getSession);
  if (response.code === 1) {
    response.data = transformData(response.data, {
      bindMobile: 'bindMobile',
      mobileStatus: 'mobileStatus',
      nickName: 'nickName',
      picUrl: 'picUrl',
      userId: 'userId',
      sessionId: 'sessionId',
    });
  }
  return (ctx.body = response);
});

//生成验证码
router.get('/resendCode', async ctx => {
  let params = ctx.request.query;
  params.validateCodeType = Number(params.validateCodeType);
  params.validateCodeLength = Number(params.validateCodeLength);
  let response;
  if (params.validateCode) {
    response = await proxyService.postProxy(ctx, bindUserEmailPhoneAndVerifyCode, { params });
  } else {
    response = await proxyService.postProxy(ctx, resendCode, { params });
  }
  return (ctx.body = response);
});

// 加载系统配置内容树
router.get('/loadTConfigListTree', async ctx => {
  const response = await proxyService.postProxy(ctx, loadTConfigListTreeAdmin);
  return (ctx.body = response);
});

// 分页查询系统明细
router.get('/getValueByKeyAndPv', async ctx => {
  const response = await proxyService.postProxy(ctx, getValueByKeyAndPvAdmin);
  return (ctx.body = response);
});

// 保存创建公司申请
router.get('/saveCorpCreateApply', async ctx => {
  let params = ctx.request.query;
  params.userId = Number(params.userId);
  params.corpId = Number(params.corpId);
  const response = await proxyService.postProxy(ctx, saveCorpCreateApply, { params });
  return (ctx.body = response);
});

// 获取默认免费信息
router.get('/getDefaultInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getDefaultInfo);
  return (ctx.body = response);
});

// 获取默认免费信息
router.post('/queryCurrVersion', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCurrVersion);
  return (ctx.body = response);
});

export default router;
