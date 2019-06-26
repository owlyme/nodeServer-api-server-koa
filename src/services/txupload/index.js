const path = require('path');
const COS = require('cos-nodejs-sdk-v5');
const config = require('config-lite')({
  filename: 'default',
  config_basedir: __dirname,
  config_dir: 'config',
});
const { txuploadConfig } = config;
// 腾讯云对象存储
class TxCos {
  constructor(config) {
    this.config = config;
    if (!this.cos) {
      this.cos = new COS({
        SecretId: config.SecretId,
        SecretKey: config.SecretKey,
      });
    }
  }
  sliceUploadFile() {
    // 分片上传到某个资源空间中
    // 分片上传
    this.cos.sliceUploadFile(
      {
        Bucket: this.config.Bucket,
        Region: this.config.Region,
        Key: 'logo',
        FilePath: path.resolve(__dirname, './logo.png'),
      },
      function(err, data) {
        console.log(err, data);
      }
    );
  }
  getService() {
    // 获取资源空间列表 返回资源名称和地址
    this.cos.getService(function(err, data) {
      console.log(err || data);
    });
  }
}
// new TxCos(txuploadConfig).getService()
export default new TxCos(txuploadConfig);
