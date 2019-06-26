const api = '';
const basePath = '/xds/chat';

module.exports = {
  chatLogin: api + '/user/loginNormal', // 登陆
  chatLogout: api + '/user/logout', // 登出
  chatGetSession: api + '/user/getSession', // 获取信息
  saveChatLoginBySession: basePath + '/convr/login/saveChatLoginBySession', //聊天系统会话控制
  getChatSeatInfo: basePath + '/convr/login/getChatSeatInfo', // 获取坐席对象信息
  chatLoginOutBySession: basePath + '/convr/login/chatLoginOutBySession', // 退出登录
  updateChatStateByType: basePath + '/convr/login/updateChatStateByType', // 切换在线状态
  getChatSeatONLineState: basePath + '/convr/login/getChatSeatONLineState', // 获取在线状态
  getTmpQrcodeChat: basePath + '/sys/qrcode/getTmpQrcode', // 获取在线状态
  getScanResultChat: basePath + '/sys/qrcode/getScanResult', // 获取在线状态
  getUserCorpAuthMulti: basePath + '/convr/corp/getUserCorpAuthMulti', // 获取企业列表
  saveSearchCorpIdLoginBySession: basePath + '/convr/login/saveSearchCorpIdLoginBySession', // 选择公司登陆
  // 设置》快捷回复
  saveOrUpdateQuickReply: basePath + '/setting/quickReply/saveOrUpdateQuickReply', // 回复（新增、修改）
  delQuickReply: basePath + '/setting/quickReply/delQuickReply', // 回复（删除）
  delQuickReplyByIds: basePath + '/setting/quickReply/delQuickReplyByIds', // 回复（批量删除）
  moveQuickReply: basePath + '/setting/quickReply/moveQuickReply', // 回复（批量移动分组）
  queryQuickReplyListByPage: basePath + '/setting/quickReply/queryQuickReplyListByPage', // 回复（查询）
  saveOrUpdateQuickReplyGroup: basePath + '/setting/quickReply/saveOrUpdateQuickReplyGroup', // 回复分组（新增、修改）
  delQuickReplyGroup: basePath + '/setting/quickReply/delQuickReplyGroup', // 回复分组（删除）
  updateQuickReplyGroupSort: basePath + '/setting/quickReply/updateQuickReplyGroupSort', // 回复分组（修改排序）
  queryQuickReplyGroupList: basePath + '/setting/quickReply/queryQuickReplyGroupList', // 回复分组（列表）
};
