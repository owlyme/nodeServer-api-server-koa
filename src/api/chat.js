const api = '';
const basePath = '/xds/chat';
const mass = '/xds/chat/mass';

module.exports = {
  getCompanyConnectConfig: basePath + '/im/getCompanyConnectConfig', // 前端获取im连接配置
  chatLogin: api + '/user/loginNormal', // 登陆
  chatLogout: api + '/user/logout', // 登出
  chatGetSession: api + '/user/getSession', // 获取信息
  // 聊天
  saveChatLoginBySession: basePath + '/convr/login/saveChatLoginBySession', //聊天系统会话控制
  getChatSeatInfo: basePath + '/convr/login/getChatSeatInfo', // 获取坐席对象信息
  chatLoginOutBySession: basePath + '/convr/login/chatLoginOutBySession', // 退出登录
  updateChatStateByType: basePath + '/convr/login/updateChatStateByType', // 切换在线状态
  getChatSeatONLineState: basePath + '/convr/login/getChatSeatONLineState', // 获取在线状态
  getTmpQrcode: basePath + '/convr/qrcode/getTmpQrcode', // 获取在线状态
  getScanResult: basePath + '/sys/qrcode/getScanResult', // 获取在线状态
  getUserCorpAuthMulti: basePath + '/convr/corp/getUserCorpAuthMulti', // 获取企业列表
  saveSearchCorpIdLoginBySession: basePath + '/convr/login/saveSearchCorpIdLoginBySession', // 选择公司登陆
  // 设置》快捷回复
  saveOrUpdateQuickReply: api + '/setting/quickReply/saveOrUpdateQuickReply', // 回复（新增、修改）
  delQuickReply: api + '/setting/quickReply/delQuickReply', // 回复（删除）
  delQuickReplyByIds: api + '/setting/quickReply/delQuickReplyByIds', // 回复（批量删除）
  moveQuickReply: api + '/setting/quickReply/moveQuickReply', // 回复（批量移动分组）
  queryQuickReplyListByPage: api + '/setting/quickReply/queryQuickReplyListByPage', // 回复（查询）
  saveOrUpdateQuickReplyGroup: api + '/setting/quickReply/saveOrUpdateQuickReplyGroup', // 回复分组（新增、修改）
  delQuickReplyGroup: api + '/setting/quickReply/delQuickReplyGroup', // 回复分组（删除）
  updateQuickReplyGroupSort: api + '/setting/quickReply/updateQuickReplyGroupSort', // 回复分组（修改排序）
  queryQuickReplyGroupList: api + '/setting/quickReply/queryQuickReplyGroupList', // 回复分组（列表）
  // 设置》
  getAcItemValueByKfSystem: basePath + '/setting/item/getAcItemValueByKfSystem', // 获取设置信息
  updateAcItemValueByKfSystem: basePath + '/setting/item/updateAcItemValueByKfSystem', // 修改设置信息
  getAcItemValueByAppAccountId: basePath + '/setting/item/getAcItemValueByAppAccountId', // 获取协作客服设置信息
  updateAcItemValueByAppAccountId: basePath + '/setting/item/updateAcItemValueByAppAccountId', // 设置协作客服设置信息

  getActorItemInfo: basePath + '/setting/item/getActorItemInfo', // 获取选中状态（新消息提醒、回复设置、协作客服设置）
  updateActorItem: basePath + '/setting/item/updateActorItem', // 修改选中状态（新消息提醒、回复设置、协作客服设置）
  saveInitSeting: basePath + '/setting/item/saveInitSeting', // 初始化选中状态
  // 公众号相关
  getPublicAccountList: basePath + '/convr/wxPublicAccount/getPublicAccountList', // 获取公众号列表信息
  // 个性化设置
  getPersonalizeInfo: basePath + '/setting/seatPublicNum/getPersonalizeInfo', // 获取个性化设置数据
  updatePersonalizeInfo: basePath + '/setting/seatPublicNum/updatePersonalizeInfo', // 修改个性化设置数据
  getTXCloudTokenByUploadSeatCHAT:
    api + '/xds/client/seatPublicNum/getTXCloudTokenByUploadSeatHeadImg', // 获取上传头像的token值
  // 会话
  // getFansDetail: basePath + '/fans/getFansDetail', // 获取粉丝详情
  // updateFansExtInfo: basePath + '/fans/updateFansExtInfo', // 修改粉丝扩展信息
  // getKfFansGroupList: basePath + '/fans/getKfFansGroupList', // 获取客服所属粉丝分组列表
  getConversationList: basePath + '/convr/message/getConversationList', // 获取抢单池列表
  getWillOutActiveConvListByPage: basePath + '/convr/message/getWillOutActiveConvListByPage', // 获取即将脱离活跃的粉丝会话消息集合
  getJustNowOutActiveConvListByPage: basePath + '/convr/message/getJustNowOutActiveConvListByPage', // 获取刚刚脱离活跃的粉丝会话消息集合
  getConversatingList: basePath + '/convr/message/getConversatingList', // 获取正在会话中列表
  getRecentContactsList: basePath + '/convr/message/getRecentContactsList', // 获取最近联系人列表会话消息集合
  getCollaborativeList: basePath + '/convr/message/getCollaborativeList', // 获取协作会话列表会话消息集合
  getVisitNoSpeakList: basePath + '/convr/message/getVisitNoSpeakList', // 获取来访未发言列表会话消息集合
  getScrambleOrderList: basePath + '/convr/message/getScrambleOrderList', // 获取抢单池列表
  searchConversationList: basePath + '/convr/message/searchConversationList', // 搜索会话列表
  closeConversating: basePath + '/convr/message/closeConversatingByConvrId', // 关闭正在会话中中指定会话
  getScrambleOrder: basePath + '/convr/message/getScrambleOrder', // 获取当前坐席的抢单池
  getConvListByConId: basePath + '/convr/message/getConvMessageListByConvId', // 获取指定会话消息列表
  getConversationStatistics: basePath + '/convr/message/getInteractiveStatistics', // 会话互动统计
  getFansRecord: basePath + '/convr/message/getConversationMessageByGroup', // 粉丝轨迹
  textChat: basePath + '/convr/message/send/text', // 发送文本消息
  newsChat: basePath + '/convr/message/send/news', // 发送图文消息
  templateChat: basePath + '/convr/message/send/template', // 发送模板消息
  imageChat: basePath + '/convr/message/send/image', // 发送图片消息
  fileChat: basePath + '/convr/message/send/file', // 发送文件
  videoChat: basePath + '/convr/message/send/video', // 发送视频消息
  voiceChat: basePath + '/convr/message/send/voice', // 发送语音消息
  forcedtextChat: basePath + '/convr/message/forcedchat/send/text', // 强制发送文本消息
  forcednewsChat: basePath + '/convr/message/forcedchat/send/news', // 强制发送图文消息
  forcedtemplateChat: basePath + '/convr/message/forcedchat/send/template', // 强制发送模板消息
  forcedimageChat: basePath + '/convr/message/forcedchat/send/image', // 强制发送图片消息
  forcedfileChat: basePath + '/convr/message/forcedchat/send/file', // 强制发送文件
  forcedvideoChat: basePath + '/convr/message/forcedchat/send/video', // 强制发送视频消息
  forcedvoiceChat: basePath + '/convr/message/forcedchat/send/voice', // 强制发送语音消息
  updateExclusiveSeat: basePath + '/convr/message/updateExclusiveSeat', // 设为专属粉丝
  updateKfSeat1: basePath + '/fans/group/updateKfSeat',
  requestCooperation: basePath + '/convr/cooperation/requestCooperation', // 请求协作
  incrUnRead: basePath + '/convr/message/incrUnRead', // 减少未读会话条数
  updateOwnerSeat: basePath + '/convr/message/updateOwnerSeat', // 设为所属粉丝
  clickScrambleOrder: basePath + '/convr/message/clickScrambleOrder', // 抢单池点击抢单
  getAllCooperationList: basePath + '/convr/cooperation/getAllCooperationList', // 获取所有协作客服
  getAlreadyCooperationList: basePath + '/convr/cooperation/getAlreadyCooperationList', // 获取已协作客服
  closeAssisSeatBySeatId: basePath + '/convr/message/closeAssisSeatBySeatId', // 关闭协作
  getForcedChatMsgCountToDay:
    basePath + '/convr/message/forcedchat/send/getForcedChatMsgCountToDay', // 获取强制发送次数
  getConversationListCount: basePath + '/convr/message/getConversationListCount', // 最近联系人列表count
  getCollaborativeListCount: basePath + '/convr/message/getCollaborativeListCount', // 协作会话列表count
  getVisitNoSpeakListCount: basePath + '/convr/message/getVisitNoSpeakListCount', // 获取来访未发言的粉丝会话消息count
  getWillOutActiveConvListCount: basePath + '/convr/message/getWillOutActiveConvListCount', // 获取即将脱离活跃的粉丝会话消息count
  getJustNowOutActiveConvListCount: basePath + '/convr/message/getJustNowOutActiveConvListCount', // 获取刚刚脱离活跃的粉丝会话消息count
  // 模板消息
  queryCssGroupMT: basePath + '/convr/customTemplate/queryCssGroup', // 模板分组列表
  getCustomTemplateListByPage: basePath + '/convr/customTemplate/getCustomTemplateListByPage', // 模板列表
  getAllPrivateTemplateFromDatabase:
    basePath + '/convr/customTemplate/getAllPrivateTemplateFromDatabase', // 模板列表
  getPrivateTemplateInfo: basePath + '/convr/customTemplate/getPrivateTemplateInfo', // 模板详情
  // 群发
  addTemplateMass: mass + '/cssGroupSending/saveOrUpdatecssGroupSendingTemplate', // 模板消息群发（新增、修改）
  addServiceMass: mass + '/cssGroupSending/saveCssGroupSending', // 高级、客服消息群发（新增）
  upServiceMass: mass + '/cssGroupSending/updateCssGroupSending', // 高级、客服消息群发（修改）
  getMassNum: mass + '/cssGroupSending/getNounData', // 高级、客服、模板消息群发（配额信息）
  delMass: mass + '/cssGroupSending/deleteCssGroupSending', // 高级、客服、模板消息群发（删除）
  cancesSend: mass + '/cssGroupSending/cancelCssGroupSending', // 高级、客服、模板消息群发（取消发送）
  getMassList: mass + '/cssGroupSending/getCssGroupSendingListByPage', // 高级、客服、模板消息群发（获取列表）
  getMassInfo: mass + '/cssGroupSending/getCssGroupSendingInfo', // 高级、客服、模板消息群发（获取详情）
  getFansCount: mass + '/cssGroupSending/getFansUserCount', // 获取群发预估人数
  // 粉丝
  getAllFansUserList1: basePath + '/fans/getAllFansUserList', // 所有公众号的粉丝
  getKfAllFansList1: basePath + '/fans/getKfAllFansList', // 客服全部粉丝列表
  getKfFansGroupList1: basePath + '/fans/getKfFansGroupList', // 客服所属粉丝分组列表
  updateBatchSetFansUserTagSingle: basePath + '/fans/updateBatchSetFansUserTagSingle', // 批量为用户设置标签
  getFansDetail1: basePath + '/fans/getFansDetail', // 粉丝详情
  updateBatchSetUserTag1: basePath + '/fans/updateBatchSetUserTag', // 设置用户标签
  updateFansKfSeatId1: basePath + '/fans/updateFansKfSeatId', // 修改粉丝坐席
  updateFansExtInfo1: basePath + '/fans/updateFansExtInfo', // 修改粉丝信息
  getPublicBySeat1: basePath + '/fans/getPublicAccountListBySeatId', // 根据客服id获取公众号列表
  deleteFans1: basePath + '/fans/deleteFans',
  // 粉丝客服及粉丝分组
  getGroupListData1: basePath + '/fans/group/getGroupListData', // 分组列表
  updateKfSeatSet1: basePath + '/fans/group/updateKfSeatSet', // 设置客服
  updateWxGroupByOrder1: basePath + '/fans/group/updateWxGroupByOrder', // 坐席分组排序
  updateWxGroup1: basePath + '/fans/group/updateWxGroup', // 修改坐席分组
  saveWxGroup1: basePath + '/fans/group/saveWxGroup', // 增加坐席分组
  deleteWxGroup1: basePath + '/fans/group/deleteWxGroup', // 删除坐席分组
  updateWxGroupByMove1: basePath + '/fans/group/updateWxGroupByMove', // 移动粉丝分组
  updateWxGroupByMoveSingle: basePath + '/fans/group/updateWxGroupByMoveSingle', // 移动粉丝分组
  // 粉丝坐席标签
  getTagsBySeatId1: basePath + '/fans/tag/getTagsBySeatIdAndAccountIds', // 根据坐席和公众号获取粉丝标签
  // 粉丝筛选条件
  addFsSelectConditions1: basePath + '/fans/addFsSelectConditions', // 新增粉丝筛选条件
  getFsSelectConditions1: basePath + '/fans/getFsSelectConditions', // 获取粉丝筛选条件详情
  getFsSelectConditionsList1: basePath + '/fans/getFsSelectConditionsList', // 获取粉丝筛选条件列表
  deleteFsSelectConditions1: basePath + '/fans/deleteFsSelectConditions', // 删除粉丝筛选条件
  createConversation1: basePath + '/fans/createConversation', // 发起会话
  // 查询坐席列表接口
  getSeatListAdmin1: api + '/seat/getSeatList',
  getSeatList: basePath + '/convr/seat/getSeatList',

  // 素材
  queryCssGroupChat: basePath + '/conver/cssMediaChat/queryCssGroup',
  queryCssMediaNewsListChat: basePath + '/conver/cssMediaChat/queryCssMediaNewsList',
  queryCssMediaVideoListChat: basePath + '/conver/cssMediaChat/queryCssMediaVideoList',
  queryCssMediaVoiceListChat: basePath + '/conver/cssMediaChat/queryCssMediaVoiceList',
  queryCssMediaImgListChat: basePath + '/conver/cssMediaChat/queryCssMediaImgList',
  getCssFileListChat: basePath + '/conver/cssMediaChat/getCssFileList',
  // 云
  queryMediaExitedChat: basePath + '/conver/tmpMeedia/queryMediaExited', //
  saveWXMediaChat: basePath + '/conver/tmpMeedia/saveWXMedia', // 微信上传完成后保存数据
  getWXUploadUrlChat: basePath + '/conver/tmpMeedia/getWXUploadUrl', //  获取微信上传链接
  saveCloudFileChat: basePath + '/conver/tmpMeedia/saveCloudFile', // 云服务器上传
  updateGetCloudTokenChat: basePath + '/conver/tmpMeedia/updateGetCloudToken', // 销大师公众号素材管理菜单，上传除图文外的微信素材获取上传token
  queryTmpFileListChat: basePath + '/conver/tmpMeedia/queryTmpFileList', // 获取文件列表
  queryTmpMediaVideoListChat: basePath + '/conver/tmpMeedia/queryTmpMediaVideoList', //  获取视屏素材列表
  queryTmpMediaVoiceListChat: basePath + '/conver/tmpMeedia/queryTmpMediaVoiceList', // 获取语音素材列表
  queryTmpMediaImgListChat: basePath + '/conver/tmpMeedia/queryTmpMediaImgList', // 获取图片素材列表
  // 个人中心
  saveMsgCloudFileChat: basePath + '/conver/tmpMeedia/saveMsgCloudFile', // 获取图片素材列表
  //  知识库
  queryKnowledgeBaseGroupListInfoChat:
    basePath + '/conver/knowledgeAndQuickReply/queryKnowledgeBaseGroupListInfo', // 知识库分组列表
  queryKnowledgeBaseListByPageChat:
    basePath + '/conver/knowledgeAndQuickReply/queryKnowledgeBaseListByPage', // 知识库列表
  saveQuickReplyGroupChat: basePath + '/conver/knowledgeAndQuickReply/saveQuickReplyGroup', // 新建快捷回复分组
  queryQuickReplyGroupListChat:
    basePath + '/conver/knowledgeAndQuickReply/queryQuickReplyGroupList', // 快捷回复分组列表
  saveQuickReplyChat: basePath + '/conver/knowledgeAndQuickReply/saveQuickReply', //  快捷回复添加
  queryQuickReplyListByPageChat:
    basePath + '/conver/knowledgeAndQuickReply/queryQuickReplyListByPage', //  会话快捷回复列

  // 收藏
  saveCollectData: '/actor/collect/saveCollect', // 添加收藏
  deleteCollectById: '/actor/collect/deleteCollect', // 删除收藏
  getCollectDetailById: '/convr/collect/getCollectDetailById', // 获取收藏详情
  getCollectListByPage: '/actor/collect/queryCollectByPage', // 收藏列表

  // 统计
  getAppAccountsBySeatIdCHAT: basePath + '/convr/repSeatConvrHis/getAppAccountsBySeatId', // 获取应用号
  getSeatConvrStatisticsPaginationCHAT:
    basePath + '/convr/repSeatConvrHis/getSeatConvrStatisticsPagination', // 分页查询统计记录
  getSeatConvrStatisticsListCHAT: basePath + '/convr/repSeatConvrHis/getSeatConvrStatisticsList', // 查询统计记录列表
  getRepSeatConvrStatisticsCHAT: basePath + '/convr/repSeatConvrHis/getRepSeatConvrStatistics', // 获取总统计
  getRepSeatConvrTodayCHAT: basePath + '/convr/repSeatConvrHis/getRepSeatConvrToday', // 获取今天统计记录
};
