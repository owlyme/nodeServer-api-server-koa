const STS = require('qcloud-cos-sts');
const config = require('config-lite')({
  filename: 'default',
  config_basedir: __dirname,
  config_dir: 'config',
});
const { txuploadConfig } = config;

// 腾讯云配置拓展
const corConfig = {
  secretId: txuploadConfig.SecretId,
  secretKey: txuploadConfig.SecretKey,
  durationSeconds: 1800, // 临时密钥有效期
  proxy: '', //
  allowActions: [
    // 临时token允许的操作权限
    'name/cos:PutObject',
    'name/cos:InitiateMultipartUpload',
    'name/cos:ListMultipartUploads',
    'name/cos:ListParts',
    'name/cos:UploadPart',
    'name/cos:CompleteMultipartUpload',
  ],
};

function gererateUploadKey() {
  // 权限配置， 权限资源，资源动作，，完全的读写权限
  const policy = {
    version: '2.0',
    statement: {
      effect: 'allow',
      action: 'cos:*',
      resource: '*',
    },
    // 'statement': [{
    //     'action': corConfig.allowActions,
    //     'effect': 'allow',
    //     'principal': {'qcs': ['*']},
    //     'resource': [
    //         'qcs::cos:ap-guangzhou:uid/' + AppId + ':prefix//' + AppId + '/' + ShortBucketName + '/' + config.allowPrefix,
    //     ],
    // }],
  };
  return new Promise((resolve, reject) => {
    STS.getCredential(
      {
        secretId: corConfig.secretId,
        secretKey: corConfig.secretKey,
        proxy: corConfig.proxy,
        durationSeconds: corConfig.durationSeconds,
        policy: policy,
      },
      function(err, tempKeys) {
        if (err) {
          reject(err);
        } else {
          console.log(tempKeys, tempKeys.credentials);
          resolve(tempKeys);
        }
      }
    );
  });
}

// gererateUploadKey()
export default gererateUploadKey;
