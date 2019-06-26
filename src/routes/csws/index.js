import Router from 'koa-router';
import common from './common';
import chatList from './chat/chatList';
import collect from './chat/collect';
import fastReply from './setting/fastReply';
import other from './setting/other';
import selfdom from './setting/selfdom';
import getToken from './setting/getToken';
import fans from './fans';
import material from './material';
import knowledge from './knowledge';
import login from './login';
import qrcode from './qrcode';
import corp from './corp'; // 公司信息相关
import im from './im'; // 获取长连接host port namespace
import mass from './mass'; // 群发相关
import template from './template'; // 模板消息
import statistics from './statistics'; // 统计

const router = new Router();

router.prefix('/api');
// 生成sessionId
router.get('/chatGetSessionId', async ctx => {
  const sessionId = ctx.sessionId;
  return (ctx.body = {
    sessionId,
  });
});

router.use('/chat', chatList.routes(), chatList.allowedMethods());
router.use('/chat', collect.routes(), collect.allowedMethods());
router.use('/chat', common.routes(), common.allowedMethods());
router.use('/chat/login', login.routes(), login.allowedMethods());
router.use('/chat/qrcode', qrcode.routes(), qrcode.allowedMethods());
router.use('/chat/corp', corp.routes(), corp.allowedMethods());
router.use('/chat/im', im.routes(), im.allowedMethods()); // 快捷回复
router.use('/quickReply', fastReply.routes(), fastReply.allowedMethods()); // 快捷回复
router.use('/xds/chat', other.routes(), other.allowedMethods()); // 设置模块
router.use('/xds/chat/seatPublicNum', selfdom.routes(), selfdom.allowedMethods()); // 个性化设置
router.use('/xds/client/seatPublicNum', getToken.routes(), getToken.allowedMethods()); // 获取个性化设置上传头像token
router.use('/xds/chat/mass/cssGroupSending', mass.routes(), mass.allowedMethods()); // 群发
router.use('/xds/chat/convr', template.routes(), template.allowedMethods()); // 模板消息
router.use('/chat/fans', fans.routes(), fans.allowedMethods());
router.use('/cssMediaChat', material.routes(), material.allowedMethods());
router.use('/knowledgeAndQuickReply', knowledge.routes(), knowledge.allowedMethods());
router.use('/webchatstatistics', statistics.routes(), statistics.allowedMethods());

export default function(app) {
  app.use(router.routes());
}
