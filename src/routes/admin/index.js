import Router from 'koa-router';
import admin from './admin';
import center from './center';
import order from './order';
import seats from './seats';
import setting from './setting/setting';
import repository from './setting/repository';
import stuff from './stuff';
import survey from './survey';
import tencent from './tencent/tencentManage';
import customMenu from './tencent/customMenu';
import pay from './pay';
import autoreply from './tencent/autoreply';
import corp from './corp';
import personalizedMenu from './personalizedMenu';
import material from './tencent/material';
import cloudSpace from './tencent/cloudSpace';
import templateMsg from './tencent/templateMsg';
import fansTag from './tencent/fansTag';
import fans from './fans';
import mass from './mass';
import qrcode from './markting/qrcode';
import poster from './markting/poster';
import smart from './markting/smart';
import statics from './statics.js';
const router = new Router();
router.prefix('/api');
// 生成sessionId
router.get('/getSessionId', async ctx => {
  const sessionId = ctx.sessionId;
  return (ctx.body = {
    sessionId,
  });
});
// 用户登录注册
router.use('/adminUser', admin.routes(), admin.allowedMethods());
// 企业中心
router.use('/adminCenter', center.routes(), center.allowedMethods());
// 员工
router.use('/stuff', stuff.routes(), stuff.allowedMethods());

router.use('/survey', survey.routes(), survey.allowedMethods());
// 公众号
router.use('/tencent', tencent.routes(), tencent.allowedMethods());
// 自定义菜单
router.use('/customMenu', customMenu.routes(), customMenu.allowedMethods());
// 坐席
router.use('/seats', seats.routes(), seats.allowedMethods());
// 订单
router.use('/order', order.routes(), order.allowedMethods());
// 支付
router.use('/pay', pay.routes(), pay.allowedMethods());
// 设置
router.use('/set', setting.routes(), setting.allowedMethods());
// 个性化菜单
router.use('/wechat', personalizedMenu.routes(), personalizedMenu.allowedMethods());
// 素材管理
router.use('/wxPublicAccount', material.routes(), material.allowedMethods());
// 素材管理 云空间
router.use('/cssWxTmpMedia', cloudSpace.routes(), cloudSpace.allowedMethods());
// 模板消息
router.use('/templateMsg', templateMsg.routes(), templateMsg.allowedMethods());
// 知识库
router.use('/repository', repository.routes(), repository.allowedMethods());
// 粉丝标签
router.use('/fansTag', fansTag.routes(), fansTag.allowedMethods());
// 自动回复
router.use('/autoreplyRule', autoreply.routes(), autoreply.allowedMethods());
// 设置》坐席、分配规则、接待组设置
router.use('/corp/item', corp.routes(), corp.allowedMethods());
router.use('/fans', fans.routes(), fans.allowedMethods());
// 群发消息
router.use('/cssGroupSending', mass.routes(), mass.allowedMethods());
// 营销 二维码
router.use('/channelQrCode', qrcode.routes(), qrcode.allowedMethods());
// 营销 海报
router.use('/posterTemplate', poster.routes(), poster.allowedMethods());
// 营销 智能接待
router.use('/intelligentReception', smart.routes(), smart.allowedMethods());
//  统计
router.use('/adminstatics', statics.routes(), statics.allowedMethods());
export default function(app) {
  app.use(router.routes());
}
