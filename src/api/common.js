const api = '';
module.exports = {
  getSession: api + '/user/getSession', // 获取信息
  queryQcCloudUrlRequestName: '/wxPublicAccount/queryQcCloudUrlRequestName', //根据业务类型获取腾讯云cos文件访问域名
};
