const api = '/xds/client';
const basePath = '/xds/client';

module.exports = {
  ctSaveLoginBySession: basePath + '/login/saveWebAdminLoginBySession',
  ctGetPersonalInfo: api + '/login/getPersonalInfo',
  ctGetSession: api + '/login/getSession',
  ctCheckVersion: api + '/login/checkVersion',
  ctGetUserCorpAuthMulti: basePath + '/corp/getUserCorpAuthMulti',
  ctChatLoginOutBySession: api + '/login/chatLoginOutBySession',
  ctGetChatSeatInfo: api + '/login/getChatSeatInfo',
  ctSaveSearchCorpIdLoginBySession: api + '/login/saveSearchCorpIdLoginBySession',
  ctGetScanResult: api + '/qrcode/getScanResult',
  ctGetTmpQrcode: api + '/qrcode/getTmpQrcode',
  ctUpdateSession: api + '/login/updateSession',
  // ctSaveWebAdminLoginBySession: api + 'login/saveWebAdminLoginBySession'
};
