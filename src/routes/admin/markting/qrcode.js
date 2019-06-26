import Router from 'koa-router';
import proxyService from '../../../common/proxyService';
import {
  updateThemeToGroup, // 移动二维码主题到指定分组
  selectAllSeat, // 查询公众号下客服列表
  selectAllDept,
  selectAllEmployee, // 查询所有的员工（带搜索）
  deleteGchannelQrCodeByIds, // 根据id集合删除二维码
  queryGchannelQrCodeById, // 根据二维码查询二维码详情
  getGchannelQrCodeListByPage, // 查询渠道二维码列表
  getQrCodeNum, // 获取已使用的二维码数量和套餐二维码总数量
  updateGchannelQrCode, // 修改渠道二维码
  saveQrCode, // 新增二维码
  canSaveQrCode, // 能否新增二维码
  deleteGroupM, // 删除二维码主题分类
  queryCssGroupM, // 查询渠道二维码分组列表
  deleteGchannelQrCodeTheme, // 删除二维码主题
  saveOrUpdateGchannelQrCodeTheme, // 添加或修改二维码主题
  getGchannelQrCodeThemeListByPage, // 查询渠道二维码主题列表
  validCssAppAccountType,
  getAllDeptAndEmp,
  getChannelQrCodeThemeStatisticsList,
  getChannelQrCodeThemeStatistics,
  getChannelQrCodeStatistics,
  getChannelQrCodeStatisticsList,
  getChannelQrCodeImage,
} from '../../../api';

const router = new Router();

router.post('/validCssAppAccountType', async ctx => {
  const response = await proxyService.postProxy(ctx, validCssAppAccountType);
  return (ctx.body = response);
});

router.post('/updateThemeToGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, updateThemeToGroup);
  return (ctx.body = response);
});

router.post('/selectAllSeat', async ctx => {
  const response = await proxyService.postProxy(ctx, selectAllSeat);
  return (ctx.body = response);
});

router.post('/selectAllDept', async ctx => {
  const response = await proxyService.postProxy(ctx, selectAllDept);
  return (ctx.body = response);
});

router.post('/selectAllEmployee', async ctx => {
  const response = await proxyService.postProxy(ctx, selectAllEmployee);
  return (ctx.body = response);
});

router.post('/deleteGchannelQrCodeByIds', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteGchannelQrCodeByIds);
  return (ctx.body = response);
});

router.post('/queryGchannelQrCodeById', async ctx => {
  const response = await proxyService.postProxy(ctx, queryGchannelQrCodeById);
  return (ctx.body = response);
});

router.post('/getGchannelQrCodeListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getGchannelQrCodeListByPage);
  return (ctx.body = response);
});

router.post('/getQrCodeNum', async ctx => {
  const response = await proxyService.postProxy(ctx, getQrCodeNum);
  return (ctx.body = response);
});

router.post('/updateGchannelQrCode', async ctx => {
  const response = await proxyService.postProxy(ctx, updateGchannelQrCode);
  return (ctx.body = response);
});

router.post('/saveQrCode', async ctx => {
  const response = await proxyService.postProxy(ctx, saveQrCode);
  return (ctx.body = response);
});

router.post('/canSaveQrCode', async ctx => {
  const response = await proxyService.postProxy(ctx, canSaveQrCode);
  return (ctx.body = response);
});

router.post('/deleteGroupM', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteGroupM);
  return (ctx.body = response);
});

router.post('/queryCssGroupM', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCssGroupM);
  return (ctx.body = response);
});

router.post('/deleteGchannelQrCodeTheme', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteGchannelQrCodeTheme);
  return (ctx.body = response);
});

router.post('/saveOrUpdateGchannelQrCodeTheme', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateGchannelQrCodeTheme);
  return (ctx.body = response);
});

router.post('/getGchannelQrCodeThemeListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getGchannelQrCodeThemeListByPage);
  return (ctx.body = response);
});

router.post('/getAllDeptAndEmp', async ctx => {
  const response = await proxyService.postProxy(ctx, getAllDeptAndEmp);
  return (ctx.body = response);
});

router.post('/getChannelQrCodeThemeStatisticsList', async ctx => {
  const response = await proxyService.postProxy(ctx, getChannelQrCodeThemeStatisticsList);
  return (ctx.body = response);
});

router.post('/getChannelQrCodeThemeStatistics', async ctx => {
  const response = await proxyService.postProxy(ctx, getChannelQrCodeThemeStatistics);
  return (ctx.body = response);
});

router.post('/getChannelQrCodeStatistics', async ctx => {
  const response = await proxyService.postProxy(ctx, getChannelQrCodeStatistics);
  return (ctx.body = response);
});

router.post('/getChannelQrCodeStatisticsList', async ctx => {
  const response = await proxyService.postProxy(ctx, getChannelQrCodeStatisticsList);
  return (ctx.body = response);
});

router.post('/getChannelQrCodeImage', async ctx => {
  const response = await proxyService.postProxy(ctx, getChannelQrCodeImage);
  return (ctx.body = response);
});

export default router;
