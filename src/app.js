import Koa from 'koa';
import cors from 'koa-cors';
import onerror from 'koa-onerror';
import bodyparser from 'koa-bodyparser';
import json from 'koa-json';
import path from 'path';
import logger from 'koa-logger'; // 代替console
import convert from 'koa-convert';
import logUtil from './utils/logUtil';
import fs from 'fs';
// 中间件
import { removeTimestamp, getRequestParams, SessionId } from './middlewares';
// 接口服务
import common from './routes/common';
import account from './routes/account';
import mobile from './routes/mobile';
import admin from './routes/admin';
import manage from './routes/manage';
import csws from './routes/csws';
import upload from './routes/upload';
import wx from './routes/wx';
import serverInfo from './routes/serverInfo';
import electron from './routes/electron';
import mp from './routes/mp';
// 缓存文件
const config = require('config-lite')({
  filename: 'default',
  config_basedir: __dirname,
  config_dir: 'config',
});
const { cachePath, publicPath } = config;
// 项目目录初始化
if (!fs.existsSync(cachePath)) {
  fs.mkdirSync(cachePath);
}
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath);
}

const app = new Koa();

// error handler
onerror(app);

// middlewares
app.use(
  convert(
    cors({
      maxAge: 2592000000, // 30天
    })
  )
);
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);

app.use(json());
app.use(convert(logger()));
app.use(require('koa-static')(path.resolve(__dirname, '../public')));
app.use(require('koa-favicon')(path.resolve(__dirname, '../public/favicon.ico')));

// 监听日志
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  try {
    // 记录请求响应日志
    logUtil.logResponse(ctx, ms);
  } catch (error) {
    // 记录异常日志
    logUtil.logError(ctx, error, ms);
  }
});
// 自定义中间件
app.use(SessionId);
app.use(removeTimestamp);
app.use(getRequestParams);
common(app);
// 手机端
mobile(app);
// 官网
admin(app);
// 聊天
csws(app);
// 账户
account(app);
// 运营
manage(app);
// 上传
upload(app);
// 微信
wx(app);
// 本服务器的信息
serverInfo(app);
// electron接口
electron(app);
// 小程序接口
mp(app);

// error-handling
app.on('error', (err, ctx) => {
  logger.error('server error', err, ctx);
});

module.exports = app;
