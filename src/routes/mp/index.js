import Router from 'koa-router';
import publics from './public';
import wxmini from './wxmini';
import upload from './upload';
import chatList from './chatList';
import login from './login';
import fans from './fans';

import sendmsg from './sendmsg';
import convr from './convr';
import config from './config';
import im from './im';
const router = new Router();
router.prefix('/mp'); // 设置路径前缀

// 公共接口
router.use('/public', publics.routes(), publics.allowedMethods());
// 微信相关接口
router.use('/api/wechatNotify', wxmini.routes(), wxmini.allowedMethods());

router.use('/tmpMeedia', upload.routes(), upload.allowedMethods());
// 会话及统计相关接口
router.use('/chatList', chatList.routes(), chatList.allowedMethods());
// 登录相关接口
router.use('/xds/mp/login', login.routes(), login.allowedMethods());

// 登录相关接口
router.use('/fans', fans.routes(), fans.allowedMethods());
router.use('/message/send', sendmsg.routes(), sendmsg.allowedMethods());

router.use('/chat/convr', convr.routes(), convr.allowedMethods());
// 我的
router.use('/tconfig', config.routes(), config.allowedMethods());

router.use('/im', im.routes(), im.allowedMethods());

export default function(app) {
  app.use(router.routes(), router.allowedMethods());
}
