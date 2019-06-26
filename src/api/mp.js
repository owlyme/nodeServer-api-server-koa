let url = '/xds/mp/chat/convr/message';
const base = '';
module.exports = {
  getValueByKeyMP: base + '/xds/mp/tconfig/getValueByKey', // 根据字典key值获取相应数据
  getValueByKeyAndPvMP: base + '/xds/mp/tconfig/getValueByKeyAndPv', // 根据父级和字典key获取相应数据

  getJsTicket: '/wechatNotify/getJsTicket', // wx 小程序sdk congfig

  updateGetCloudTokenMP: '/xds/mp/tmpMeedia/updateGetCloudToken', // 销大师公众号素材管理菜单，上传除图文外的微信素材获取上传token	POST 	刘源	2019-06-04 21:30:47	修改 删除
  saveCloudFileMP: '/xds/mp/tmpMeedia/saveCloudFile', // 云服务器上传	POST 	刘源	2019-06-04 21:32:26	修改 删除
  getWXUploadUrlMP: '/xds/mp/tmpMeedia/getWXUploadUrl', // 获取微信上传链接	POST 	刘源	2019-06-04 21:36:11	修改 删除
  saveWXMediaMP: '/xds/mp/tmpMeedia/saveWXMedia', // 微信上传完成后保存数据	POST 	刘源	2019-06-04 21:37:16	修改 删除
  queryMediaExitedMP: '/xds/mp/tmpMeedia/queryMediaExited', // 根据mediaId和业务类型，媒体类型查询媒体是否存在	POST 	刘源	2019-06-04 21:38:42	修改 删除

  getConversationListCountMP: url + '/getConversationListCount', // 获取最近联系人列表统计计数(即将脱离活跃,刚刚脱离活跃,来访未发言,他人协作)
  getConversationListMP: url + '/getConversationList', // 获取会话列表或抢单列表
  getWillOutActiveConvListByPageMP: url + '/getWillOutActiveConvListByPage', // 获取即将脱离活跃的粉丝会话消息集合
  getJustNowOutActiveConvListByPageMP: url + '/getJustNowOutActiveConvListByPage', // 获取刚刚脱离活跃的粉丝会话消息集合
  getRecentContactsListMP: url + '/getRecentContactsList', // 获取最近联系人列表会话消息集合
  getCollaborativeListMP: url + '/getCollaborativeList', // 获取协作会话列表会话消息集合
  getVisitNoSpeakListMP: url + '/getVisitNoSpeakList', // 获取来访未发言列表会话消息集合
  closeConversatingMP: url + '/closeConversatingByConvrId', // 关闭正在会话中中指定会话
  getScrambleOrderMP: url + '/getConversationList', // 获取当前坐席的抢单池
  incrUnReadMP: url + '/incrUnRead', // 减少未读会话条数
  clickScrambleOrderMP: url + '/clickScrambleOrder', // 抢单池点击抢单
  updateChatStateByTypeMP: '/xds/mp/login/updateChatStateByType', // 切换在线状态
  checkSeatFansBindMP: url + '/checkSeatFansBind', // 坐席粉丝应用号关系校验

  updateBindSession: '/xds/mp/login/updateBindSession', // 绑定用户sessionId
  updateUserDataInfo: '/xds/mp/login/updateUserDataInfo', // 更新用户信息与session信息
  getUserMobile: '/xds/mp/login/getUserMobile', // 解析用户手机号
  getUserCorpAuthMulti: '/xds/mp/login/getUserCorpAuthMulti', // 获取用户公司列表
  saveCorpCreateForFreeOrder: '/xds/mp/login/saveCorpCreateForFreeOrder', // 创建免费企业
  saveLoginCorpIdBySession: '/xds/mp/login/saveLoginCorpIdBySession', // 进入公司
  mpGetSession: '/xds/mp/login/getSession', // 验证session有效性
  logoutBySession: '/xds/mp/login/logoutBySession', // 企业列表解绑session

  getRepSeatConvrStatistics: '/mp/chat/convr/repSeatConvrHis/getRepSeatConvrStatistics', // 获取统计数据
  // 粉丝管理
  updateFansExtInfoMp: '/xds/mp/chat/fans/updateFansExtInfo', // 编辑粉丝
  getConversationMessageByGroupMp: '/xds/mp/chat/fans/getConversationMessageByGroup', // 粉丝轨迹
  getKfFansGroupListMp: '/xds/mp/chat/fans/getKfFansGroupList', //粉丝分组列表
  updateWxGroupByMoveMp: '/xds/mp/chat/fans/group/updateWxGroupByMove', // 移动分组
  updateExclusiveSeatMp: '/xds/mp/chat/fans/group/updateExclusiveSeat', // 设置专属
  updateKfSeatMp: '/xds/mp/chat/fans/group/updateKfSeat',
  getFansDetailMp: '/xds/mp/chat/fans/getFansDetail',
  updateBatchSetFansUserTagSingleMp: '/xds/mp/chat/fans/updateBatchSetFansUserTagSingle',
  getTagsByAppAccountIdMp: '/xds/mp/chat/fans/tag/getTagsByAppAccountId',
  getInteractiveStatisticsMp: '/xds/mp/chat/convr/message/getInteractiveStatistics', // 互动统计
  getSeatListMp: '/xds/mp/chat/convr/seat/getSeatList', // 坐席列表
  getChatSeatInfoMP: '/xds/mp/chat/convr/seat/getChatSeatInfo', // 获取坐席对象信息
  getConvMessageListByConvIdMP: url + '/getConvMessageListByConvId', // 获取指定会话消息列表

  updateBindSessionMP: '/xds/mp/login/updateBindSession', // 绑定用户sessionId
  updateUserDataInfoMP: '/xds/mp/login/updateUserDataInfo', // 更新用户信息与session信息
  getUserMobileMP: '/xds/mp/login/getUserMobile', // 解析用户手机号
  getUserCorpAuthMultiMP: '/xds/mp/login/getUserCorpAuthMulti', // 获取用户公司列表
  saveCorpCreateForFreeOrderMP: '/xds/mp/login/saveCorpCreateForFreeOrder', // 创建免费企业
  saveLoginCorpIdBySessionMP: '/xds/mp/login/saveLoginCorpIdBySession', // 进入公司
  getSessionMP: '/xds/mp/login/getSession', // 验证session有效性
  logoutBySessionMP: '/xds/mp/login/logoutBySession', // 企业列表解绑session
  getPublicAccountListMP: '/xds/mp/login/getPublicAccountList', // 获取公众号列表

  getRepSeatConvrStatisticsMP: '/xds/mp/chat/convr/repSeatConvrHis/getRepSeatConvrStatistics', // 获取统计数据

  sendtextMP: '/xds/mp/message/send/text', // 发送文本消息
  sendimageMP: '/xds/mp/message/send/image', // 发送图片消息
  sendvoiceMP: '/xds/mp/message/send/voice', // 发送语音消息
  forceSendTextMP: '/xds/mp/message/forcedchat/send/text', // 强制发送文本消息

  getSeatListMP: '/xds/mp/chat/convr/seat/getSeatList', //	yhc
  getInteractiveStatisticsMP: '/xds/mp/chat/convr/message/getInteractiveStatistics', // 获取互动统计	yhc

  getMyNotificationConfigInfoMP: '/xds/mp/tconfig/getMyNotificationConfigInfo', // 小程序获取消息设置内容
  updateMyNotificationConfigMP: '/xds/mp/tconfig/updateMyNotificationConfig', // 小程序更新设置内容
  getCompanyConnectConfigMP: '/xds/mp/login/getCompanyConnectConfig', // 查询im CompanyConnectConfig
  updateConnectConfigMP: '/xds/mp/login/updateConnectConfig', // socket

  getForcedChatMsgCountToDayMP: '/xds/mp/message/forcedchat/send/getForcedChatMsgCountToDay', // 获取强制发送次数
};
