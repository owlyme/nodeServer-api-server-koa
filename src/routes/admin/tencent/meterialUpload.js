import Router from 'koa-router';
const router = new Router();

// 接受formdata数据格式及其他数据
router.post('/uploadMeterial', async ctx => {
  console.log(ctx);
  // let type = ctx.requestParams.type;
  // if (type === 'getWXqrcode') {
  //   let response = await getWebData.httpsGet(ctx.requestParams.qrcodeSrc);
  //   let base64Img = response.toString('base64');
  //   ctx.body = { base64: 'data:image/jpeg;base64,' + base64Img };
  // } else if (type === 'base64') {
  //   let src_str = ctx.requestParams.postcard,
  //     pic_ext = src_str.split(';', 1)[0].split('/', 2)[1],
  //     fileName = ctx.requestParams.name;
  //   let buf = base64String(src_str);
  //   let store_path = 'uploadFiles/' + fileName + '.' + pic_ext;

  //   fs.writeFile(store_path, buf, err => {
  //     if (err) {
  //       ctx.body = { code: 0, err };
  //     } else {
  //       ctx.body = { store_path };
  //     }
  //   });
  // }
});

export default router;
