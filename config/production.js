module.exports = {
  name: '销大师NODE中间件',
  BASE_IP: '10.0.1.11',
  PORT: '8080',
  PATH: '/xkdata-web',
  BASE_URL: 'http://10.0.1.11:8080/xkdata-web',
  UPLOAD_URL: 'http://192.168.0.244:8888/',
  // 微信公众号相关配置
  wx: {
    appId: 'wx56d79c8dd49c2be7',
    secret: '120af7a4617f80c660aea35fd27fd1a7',
    paySecret: 'BbeKjoQ8K2zh5L7ai3abhGAMehPbvS3W', // 商户密钥
  },
  // fdfs文件存储配置
  fdfsConfig: {
    trackers: [
      {
        host: '192.168.0.244',
        port: 6000,
      },
    ],
    timeout: 10000,
    defaultExt: 'txt',
    charset: 'utf8',
  },
  cookiesConfig: {
    httpOnly: false,
    maxAge: 1000 * 60 * 60,
  },
  // session相关配置
  sessionConfig: {
    name: 'sessionId',
    httpOnly: false,
    secure: false,
    maxAge: 60 * 10 * 1000,
  },
  // log4js相关配置
  logConfig: {
    appenders: {
      http: {
        type: 'dateFile',
        filename: 'logs/access.log',
        pattern: '-yyyy-MM-dd',
        category: 'http',
      },
      app: {
        type: 'file',
        filename: 'logs/app.log',
        maxLogSize: 10485760,
        numBackups: 3,
      },
      errorFile: {
        type: 'file',
        filename: 'logs/errors.log',
      },
      errors: {
        type: 'logLevelFilter',
        level: 'ERROR',
        appender: 'errorFile',
      },
    },
    categories: {
      default: {
        appenders: ['app', 'errors'],
        level: 'ERROR',
      },
      http: {
        appenders: ['http'],
        level: 'ERROR',
      },
    },
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID',
    level: 'error',
  },
};
