import Router from 'koa-router';
import proxyService from '../../../common/proxyService';
import {
  queryKnowledgeBaseListByPage,
  updateOrSaveCorpKnowledgeBase,
  delCorpKnowledgeBase,
  saveOrUpdateCorpKnowledgeBaseGroup,
  delCorpKnowledgeBaseGroup,
  changeCorpKnowledgeBaseGroupSort,
  queryKnowledgeBaseGroupListInfo,
  moveKnowledgeBase,
  delCorpKnowledgeBaseByIds,
  checkKnowledgeBaseGroup,
} from '../../../api';

const router = new Router();

// 知识库分组检测
router.post('/checkKnowledgeBaseGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, checkKnowledgeBaseGroup);
  return (ctx.body = response);
});
// 知识库列表分页（包含搜索以及点击分组）
router.post('/queryKnowledgeBaseListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, queryKnowledgeBaseListByPage);
  return (ctx.body = response);
});
// 知识库更新或者保存
router.post('/updateOrSaveCorpKnowledgeBase', async ctx => {
  const response = await proxyService.postProxy(ctx, updateOrSaveCorpKnowledgeBase);
  return (ctx.body = response);
});
// 删除知识库
router.post('/delCorpKnowledgeBase', async ctx => {
  const response = await proxyService.postProxy(ctx, delCorpKnowledgeBase);
  return (ctx.body = response);
});
// 根据ids批量删除知识库
router.post('/delCorpKnowledgeBaseByIds', async ctx => {
  const response = await proxyService.postProxy(ctx, delCorpKnowledgeBaseByIds);
  return (ctx.body = response);
});
// 更新或者保存知识库分组
router.post('/saveOrUpdateCorpKnowledgeBaseGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateCorpKnowledgeBaseGroup);
  return (ctx.body = response);
});
// 删除知识库分组
router.post('/delCorpKnowledgeBaseGroup', async ctx => {
  const response = await proxyService.postProxy(ctx, delCorpKnowledgeBaseGroup);
  return (ctx.body = response);
});
// 调整知识库分组排序
router.post('/changeCorpKnowledgeBaseGroupSort', async ctx => {
  const response = await proxyService.postProxy(ctx, changeCorpKnowledgeBaseGroupSort);
  return (ctx.body = response);
});
// 知识库分组列表以及总条数
router.post('/queryKnowledgeBaseGroupListInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, queryKnowledgeBaseGroupListInfo);
  return (ctx.body = response);
});
// 知识库移动
router.post('/moveKnowledgeBase', async ctx => {
  const response = await proxyService.postProxy(ctx, moveKnowledgeBase);
  return (ctx.body = response);
});
export default router;
