const api = '';
module.exports = {
  // 验证Session,获取用户信息,企业信息等
  getSession: api + '/user/getSession',
  // 生成临时二维码
  getTmpQrcodeAdmin: api + '/qrcode/getTmpQrcode',
  // 生成验证码
  resendCode: api + '/user/resendCode',
  // 用户绑定手机号,同时校验验证码
  bindUserEmailPhoneAndVerifyCode: api + '/user/bindUserEmailPhoneAndVerifyCode',
  // 加载系统配置内容树
  loadTConfigListTreeAdmin: api + '/tconfig/getValueByKey',
  // 分页查询系统字典明细表
  getValueByKeyAndPvAdmin: api + '/tconfig/getValueByKeyAndPv',
  // 保存创建公司申请
  saveCorpCreateApply: api + '/corp/saveCorpCreateApply',
  // 获取默认免费信息 套餐id 套餐角色id 官方appid对应的accountid
  getDefaultInfo: api + '/tSysCfg/getDefaultInfo',
  // 获取当前用户创建或加入（中） 与 审核通过的 公司列表
  getUserCorpAuthMultiAdmin: api + '/corp/getUserCorpAuthMulti',
  // 获取上传公司logo token
  getTXCloudTokenByUploadCorpLogo: api + '/corp/getTXCloudTokenByUploadCorpLogo',
  // 修改企业名称
  updateCorpName: api + '/corp/updateCorpName',
  // 更新公司状态
  updateCorpStatusByCorpIdAdmin: api + '/corp/updateCorpStatusForA',
  // 个人信息修改
  editUser: api + '/user/editUser',
  // 退出企业
  savelogoutCompany: api + '/corp/savelogoutCompany',
  // 获取个人信息
  getPersonalInfo: api + '/user/getPersonalInfo',
  // 修改绑定手机
  updateCorpMobileById: api + '/corp/updateCorpMobileById',
  // 扫描二维码后,查看扫描结果
  getScanResultAdmin: api + '/qrcode/getScanResult',
  // 登出
  logout: api + '/user/logout',
  // 获得关键指标
  getKeyIndicators: api + '/cssCfg/getKeyIndicators',
  // 进入公司信息
  saveloginCompany: api + '/corp/saveloginCompany',
  // 获取公司统计信息
  getCorpStatisticsInfo: api + '/corp/getCorpStatisticsInfo',
  // 根据id查询公司套餐
  queryCorpPackageById: api + '/corp/queryCorpPackageById',
  // 查询公司套餐的权限列表
  queryCorpPackRoleList: api + '/corp/queryCorpPackRoleList',
  // 查询公司状态
  queryCompanyStats: api + '/corp/queryCompanyStats',
  // 获取公众号列表
  getPublicAccountListAdmin: api + '/wxPublicAccount/getPublicAccountList',
  // 判断是否可以添加公众号
  checkAppIdNum: api + '/wxPublicAccount/checkAppIdNum',
  // 删除微信公众号
  updateCssWxPublicAccountStatusToDelete:
    api + '/wxPublicAccount/updatePublicAccountStatusToDelete',
  // 操作解除授权按钮停用微信公众号
  updateCssWxPublicAccountToAuthBlockUp:
    api + '/wxPublicAccount/updatePublicAccountToUnAuthorization',
  // 操作停用按钮停用微信公众号
  updateCssWxPublicAccountToBlockUp: api + '/wxPublicAccount/updatePublicAccountToBlockUp',
  // 禁用微信公众号
  updateCssWxPublicAccountToDisabled: api + '/wxPublicAccount/updatePublicAccountToDisabled',
  // 启用微信公众号
  updateCssWxPublicAccountToActive: api + '/wxPublicAccount/updatePublicAccountToActive',
  // 公众号信息一键同步
  updateCssWxPublicAccountDataToDb: api + '/wxPublicAccount/updateCssWxPublicAccountDataToDb',
  // 企业端公众号查询同步状态
  queryCssSynList: api + '/wxPublicAccount/queryCssSynList',
  // 用来生成第三方授权url
  getAuthUrl: api + '/thirdplat/getAuthUrl',
  // 新建企业检查
  checkCreateCorpApply: api + '/corp/checkCreateCorpApply',
  // 查看授权状态
  updateBindCorp: api + '/css/updateBindCorp',
  // 获得坐席列表
  getIntoSeatList: api + '/seat/getIntoSeatList',
  // 点击添加坐席生成坐席编号
  saveSeatNo: api + '/seat/saveSeatNo',
  // 保存坐席接口
  saveSeat: api + '/seat/saveSeat',
  // 修改坐席接口
  updateSeat: api + '/seat/updateSeat',
  // 获取坐席详情接口
  getSeatDetail: api + '/seat/getSeatDetail',
  // 查询坐席列表接口
  getSeatListAdmin: api + '/seat/getSeatList',
  // 批量为坐席修改公众号权限
  updateSeatAuthByBatch: api + '/seat/updateSeatAuthByBatch',
  // 解除授权/停用/批量停用/启用统一调用接口
  updateSeatStatus: api + '/seat/updateSeatStatus',
  // 修改坐席基本信息接口
  updateSeatBaseInfo: api + '/seat/updateSeatBaseInfo',
  // 修改坐席权限接口
  updateSeatAuth: api + '/seat/updateSeatAuth',
  // 修改个性化坐席接口
  updateConditionalSeat: api + '/seat/updateConditionalSeat',
  // 获取上传坐席头像token
  getTXCloudTokenByUploadSeatHeadImg: api + '/seat/getTXCloudTokenByUploadSeatHeadImg',
  // 是否能上传凭证
  isCanPayVoucherAdmin: api + '/uPayOrder/isCanPayVoucher',
  getTXCloudTokenByPayVoucher: api + '/uPayOrder/getTXCloudTokenByPayVoucher',
  // 银行汇款上传凭证,付款方名称账号上传
  saveAccountTradeOrderAdmin: api + '/uPayOrder/saveAccountTradeOrder',
  // 银行汇款上传凭证 ,付款凭证上传
  savePayVoucherTradeOrderAdmin: api + '/uPayOrder/savePayVoucherTradeOrder',
  // 是否存在待支付订单(管理平台)
  isBuyPackage: api + '/corp/isBuyPackage',
  // 获取公司当前订购服务(管理平台)
  getCurOrderDetail: api + '/corp/getCurOrderDetail',
  // 保存创建公司并创建订单
  saveCorpCreateApplyForOrder: api + '/corp/saveCorpCreateApplyForOrder',
  // 保存订单(重新订购)(管理平台)
  saveOrderInfo: api + '/order/saveOrderInfo',
  // 订单详情(管理平台)
  getDetail: api + '/order/getDetail',
  // 订单简单详情(管理平台
  getSimpleDetail: api + '/order/getSimpleDetail',
  // 取消订单(管理平台)
  updateBatchStatusForA: api + '/order/updateBatchStatusForA',
  // 修改公司logo
  updateCorpLogo: api + '/corp/updateCorpLogo',
  // 获取公司混合信息
  getCorpInfoMulti: api + '/corp/getCorpInfoMulti',
  // 查询公司，套餐，员工状态
  getCorpEmpPacStatus: api + '/corp/getCorpEmpPacStatus',
  // 修改公司省市区
  updateCorpAddress: api + '/corp/updateCorpAddress',
  // 修改管理员员工姓名
  updateAdminEmployeeName: api + '/employee/updateAdminEmployeeName',
  dateList: api + '/tconfig/queryTItemValueByPager', // 时间列表
  menuList: api + '/tPackage/getTPackageList', // 套餐列表
  recordsList: api + '/order/getOrderListByPage', // 订单列表
  orderStatus: api + '/tconfig/queryTItemValueByPager', // 订单状态列表
  orderDetail: api + '/order/getDetail', // 订单详情
  usingMenu: api + '/corp/getCurOrderDetail', // 正在使用的套餐
  ajaxUsingMenu: api + '/tconfig/queryTItemValueByPage', // 正在使用的套餐
  getTree: api + '/corp/loadCorpDeptTree', // 加载公司部门树
  addApart: api + '/corp/saveCorpDept', // 创建部门
  delApart: api + '/corp/deleteCorpDept', // 删除部门
  formWecode: api + '/employee/updateInviteEmployee', // 生成邀请二维码
  isAddUserAvail: api + '/employee/checkEeNum', // 查询是否可以添加员工
  getUsers: api + '/employee/getEmployeeListByPage', // 分页查询员工
  moveApart: api + '/corp/updateDeptOrder', // 移动部门
  modifyApart: api + '/modifyApart', // 修改部门
  processUser: api + '/employee/updateEmployeeListStatus', // 批量停用启用删除员工
  addUser: api + '/employee/saveEmployeeData', //  添加员工
  modifyUserDetail: api + '/employee/updateEmployeeData', // 修改员工详情
  modifyUserRole: api + '/employee/updateEmployeeAuth', // 修改员工角色
  userRightsList: api + '/employee/queryEmployeeRoleList', // 员工权限列表
  userDetail: api + '/employee/getEmployeeEditByEeId', // 查询员工详情
  setTopUser: api + '/employee/updateSetTopEmployee', // 置顶用户
  cancelTopUser: api + '/employee/updateCancelTopEmployee', // 取消置顶用户
  setUserZuoxi: api + '/employee/addEmployySeat', // 员工分配坐席
  addRights: api + '/auth/saveOrUpdateAuthItem', // 添加权限
  updateRole: api + '/xkdata-web/auth/saveOrUpdateAuthRole', // 保存或更新角色
  addMultiRights: api + '/auth/saveOrUpdateAuthRoleItem', // 根据角色添加多个权限
  createCompany: api + '/corp/saveCorpCreateApply', // 创建公司
  enterCompany: api + '/corp/saveloginCompany', // 进入公司
  getRightsList: api + '/corp/queryCorpPackRoleList', // 查询公司套餐的权限列表
  searchOption: api + '/tconfig/queryTItemValueByPager', // 分页查询系统字典明细表
  zuoxiList: api + '/seat/getSeatUnassignedTotal', // 获取坐席列表
  unbindUser: api + '/employee/updateInviteEmployUnBind', // 解绑

  // 个性化菜单
  getWxMenuList: api + '/wechat/wxMenu/getWxMenuList', // 个性化菜单列表
  saveWxMenu: api + '/wechat/wxMenuMatchRule/saveWxMenu', // 个性化菜单新增
  getWxMenuListByPage: api + '/wechat/wxMenuMatchRule/getWxMenuListByPage', // 个性化菜单列表(分页)
  saveAndPublishWxMenu: api + '/wechat/wxMenuMatchRule/saveAndPublishWxMenu', // 个性化菜单新增并保存
  deleteWxMenu: api + '/wechat/wxMenuMatchRule/deleteWxMenu', // 个性化菜单删除
  updateWxMenuDisable: api + '/wechat/wxMenuMatchRule/updateWxMenuDisable', // 个性化菜单禁用
  updateWxMenuEnable: api + '/wechat/wxMenuMatchRule/updateWxMenuEnable', // 个性化菜单启用
  updateAndPublishWxMenu: api + '/wechat/wxMenuMatchRule/updateAndPublishWxMenu', // 个性化菜单修改保存并发布
  checkMathRuleData: api + '/wechat/wxMenuMatchRule/checkMathRuleData', // 个性化菜单新增修改校验
  getUnPublishWxMenuList: api + '/wechat/wxMenuMatchRule/getUnPublishWxMenuList', // 未添加自定义规则的菜单
  isCanSaveCustomerMenu: api + '/wechat/wxMenuMatchRule/isCanSaveCustomerMenu', // 能否新建个性化菜单
  // 素材管理
  saveMedia: api + 'saveMedia', // 新增其他素材
  updateMedia: api + '/wxPublicAccount/updateMedia', // 修改其他素材
  deleteMedia: api + '/wxPublicAccount/deleteMedia', // 删除素材
  getCssFileList: api + '/wxPublicAccount/getCssFileList', // 个性化获取文件列表单启用
  saveOrUpdateCssFile: api + '/wxPublicAccount/saveOrUpdateCssFile', // 添加或修改文件
  deleteCssFile: api + '/wxPublicAccount/deleteCssFile', // 删除文件
  saveOrUpdateGroup: api + '/wxPublicAccount/saveOrUpdateGroup', // 新建或修改分组
  deleteGroup: api + '/wxPublicAccount/deleteGroup', // 删除分组
  updateGroupOrder: api + '/wxPublicAccount/updateGroupOrder', // 移动分组
  queryCssGroup: api + '/wxPublicAccount/queryCssGroup', // 根据类型获取分组列表
  queryCssMediaVoiceList: api + '/wxPublicAccount/queryCssMediaVoiceList', // 获取语音素材列表
  queryCssMediaImgList: api + '/wxPublicAccount/queryCssMediaImgList', // 获取图片素材列表
  queryCssMediaNewsList: api + '/wxPublicAccount/queryCssMediaNewsList', // 获取图文素材列表
  queryCssMediaVideoList: api + '/wxPublicAccount/queryCssMediaVideoList', // 获取视屏素材列表
  getCssWxMediaInfo: api + '/wxPublicAccount/getCssWxMediaInfo', // 获取图文详情
  saveMediaNews: api + '/wxPublicAccount/saveMediaNews', // 新增图文素材
  updateMediaNews: api + '/wxPublicAccount/updateMediaNews', // 修改图文素材
  downWxMediaVoice: api + '/wxPublicAccount/downWxMediaVoice', // 下载语音素材
  queryCssMediaCount: api + '/wxPublicAccount/queryCssMediaCount', // 获取素材总数配置
  getMediaIdDetailData: api + '/wxPublicAccount/getMediaIdDetailData', // 根据 media_id 获取具体详细数据
  queryMediaExited: api + '/wxPublicAccount/queryMediaExited', // 根据mediaId和业务类型，媒体类型查询媒体是否存在
  // 云空间
  deleteTmpMediaByGroup: api + '/cssWxTmpMedia/deleteTmpMediaByGroup', // 一键清理
  deleteCssTmpMedia: api + '/cssWxTmpMedia/deleteCssTmpMedia', // 批量删除云服务空间文件
  queryMsgGroup: api + '/cssWxTmpMedia/queryMsgGroup', // 根据类型获得分组列表
  queryTmpMediaVideoList: api + '/cssWxTmpMedia/queryTmpMediaVideoList', // 获取视频素材列表
  queryTmpMediaVoiceList: api + '/cssWxTmpMedia/queryTmpMediaVoiceList', // 获取语音素材列表
  queryTmpFileList: api + '/cssWxTmpMedia/queryTmpFileList', // 获取文件列表
  queryTmpMediaImgList: api + '/cssWxTmpMedia/queryTmpMediaImgList', // 获取图片素材列表
  // 上传腾讯云
  saveOrUpdateUrlNews: api + '/wxPublicAccount/saveOrUpdateUrlNews', // 上传或修改外链图文
  saveWXMedia: '/wxPublicAccount/saveWXMedia', // 微信上传完成后保存数据
  getWXUploadUrl: '/wxPublicAccount/getWXUploadUrl', // 获取微信上传链接
  saveCloudFile: '/wxPublicAccount/saveCloudFile', // 云服务器上传
  updateGetCloudToken: '/wxPublicAccount/updateGetCloudToken', // 销大师公众号素材管理菜单，上传除图文外的微信素材获取上传token
  // 模板消息
  queryTemplateCssGroup: api + '/customTemplate/queryCssGroup', // 获取模板分组列表
  deleteTemplateGroup: api + '/customTemplate/deleteGroup', // 删除模板分组
  getCustomTemplateListByPage: api + '/customTemplate/getCustomTemplateListByPage', // 获取自定义模板列表
  getCssCustomTemplateInfo: api + '/customTemplate/getCssCustomTemplateInfo', // 获取自定义模板详情
  saveOrUpdateCssCustomTemplate: api + '/customTemplate/saveOrUpdateCssCustomTemplate', // 添加或修改自定义模板消息和
  deleteCssCustomTemplate: api + '/customTemplate/deleteCssCustomTemplate', // 删除
  syncWechatTemplateList: api + '/wechat/templateMessage/saveAllPrivateTemplateToDatabase', // 同步微信模板
  getWechatTemplateList: api + '/wechat/templateMessage/getAllPrivateTemplateFromDatabase', // 获取微信模板列表
  getWechatTemplate: api + '/wechat/templateMessage/getPrivateTemplateInfo', // 获取微信模板详情

  // 自定义菜单
  customSaveWxMenu: api + '/wechat/wxMenu/saveWxMenu',
  customUpdateWxMenu: api + '/wechat/wxMenu/updateWxMenu',
  customDeleteWxMenu: api + '/wechat/wxMenu/deleteWxMenu',
  saveBatchWxMenu: api + '/wechat/wxMenu/saveBatchWxMenu', // 批量保存菜单
  customSaveAndPublishWxMenu: api + '/wechat/wxMenu/saveAndPublishWxMenu',
  customUpdateWxMenuBySysn: api + '/wechat/wxMenu/updateWxMenuBySync',
  updateIdxOrder: api + '/wechat/wxMenu/updateIdxOrder',
  // 知识库
  queryKnowledgeBaseListByPage: api + '/cropKnowledgeBase/queryKnowledgeBaseListByPage', // 知识库列表分页（包含搜索以及点击分组）
  updateOrSaveCorpKnowledgeBase: api + '/cropKnowledgeBase/updateOrSaveCorpKnowledgeBase', // 知识库更新或者保存
  delCorpKnowledgeBase: api + '/cropKnowledgeBase/delCorpKnowledgeBase', // 删除知识库
  saveOrUpdateCorpKnowledgeBaseGroup: api + '/cropKnowledgeBase/saveOrUpdateCorpKnowledgeBaseGroup', // 更新或者保存知识库分组
  delCorpKnowledgeBaseGroup: api + '/cropKnowledgeBase/delCorpKnowledgeBaseGroup', // 删除知识库分组
  changeCorpKnowledgeBaseGroupSort: api + '/cropKnowledgeBase/changeCorpKnowledgeBaseGroupSort', // 调整知识库分组排序
  queryKnowledgeBaseGroupListInfo: api + '/cropKnowledgeBase/queryKnowledgeBaseGroupListInfo', // 知识库分组列表以及总条数
  moveKnowledgeBase: api + '/cropKnowledgeBase/moveKnowledgeBase', // 知识库移动
  delCorpKnowledgeBaseByIds: api + '/cropKnowledgeBase/delCorpKnowledgeBaseByIds', // 根据ids批量删除知识库
  checkKnowledgeBaseGroup: api + '/cropKnowledgeBase/checkKnowledgeBaseGroup', // 知识库分组检测

  // 粉丝标签
  getWxGroupAndTagList: api + '/wx/tag/getWxGroupAndTagList', // 获取公众号下所有标签分组及标签信息
  addOrUpdateWxTagGroup: api + '/wx/tag/addOrUpdateWxTagGroup ', // 添加或修改标签分组
  updateWxGroupSort: api + '/wx/tag/updateWxGroupSort ', // 上移下移修改分组操作
  deleteWxTagGroup: api + '/wx/tag/deleteWxTagGroup', // 删除标签分组
  getWxAppAccountList: api + '/wx/tag/getWxAppAccountList ', // 点击复制标签分组接口获取公众号列表
  updateCopyTagGroupFromOtherAppId: api + '/wx/tag/updateCopyTagGroupFromOtherAppId', // 复制标签分组
  updateCopyTagFromOtherAppId: api + '/wx/tag/updateCopyTagFromOtherAppId ', // 复制标签
  addOrUpdateWxTag: api + '/wx/tag/addOrUpdateWxTag', // 添加或修改标签
  updateWxTagSort: api + '/wx/tag/updateWxTagSort ', // 左右移动修改标签位置操作
  deleteWxTag: api + '/wx/tag/deleteWxTag ', // 删除标签
  updateWxTagGroup: api + '/wx/tag/updateWxTagGroup', // 设置标签分组
  getAndCheckTagAndTagGroup: api + '/wx/tag/getAndCheckTagAndTagGroup', // 检测标签及标签分组 适用于新建分组/复制标签分组/添加标签/复制标签的点击事件

  // 自动回复
  getCssAutoreplyRuleListByPage: api + '/autoreplyRule/getCssAutoreplyRuleListByPage', //关键词回复(列表)
  saveOrUpdateCssAutoreplyRule: api + '/autoreplyRule/saveOrUpdateCssAutoreplyRule', //关键词回复(添加、修改、禁/启用)
  deleteCssAutoreplyRule: api + '/autoreplyRule/deleteCssAutoreplyRule', //关键词回复规则(删除规则)
  getCssAutoreplyRuleInfo: api + '/autoreplyRule/getCssAutoreplyRuleInfo', //关键词回复规则(详情)
  deleteCssAutoreplyRuleContent: api + '/autoreplyRule/deleteCssAutoreplyRuleContent', //关键词回复规则(删除回复内容)
  updateCssAutoreplyRuleContentOrder: api + '/autoreplyRule/updateCssAutoreplyRuleContentOrder', //关键词回复(修改顺序)
  // saveOrUpdateAutoreplyTypeCssAutoreplyRule:
  //   api + '/autoreplyRule/saveOrUpdateAutoreplyTypeCssAutoreplyRule', //被关注回复 与 收到消息回复 (添加、修改)
  saveOrUpdateAutoreplyTypeCssAutoreplyRule: api + '/autoreplyRule/saveOrUpdateFollowedReply', // 被关注回复(添加、修改)
  getCssAutoreplyRuleByAutoreplyType: api + '/autoreplyRule/getFollowedReplies', //被关注回复 (查询)
  // getCssAutoreplyRuleByAutoreplyType: api + '/autoreplyRule/getCssAutoreplyRuleByAutoreplyType', //被关注回复 与 收到消息回复 (查询)
  deleteAutoreplyTypeCssAutoreplyRule: api + '/autoreplyRule/deleteAutoreplyTypeCssAutoreplyRule', //被关注回复 与 收到消息回复 (删除)
  getCssAutoreplyRuleStatus: api + '/autoreplyRule/getCssAutoreplyRuleStatus', //三类自动回复状态:是否开启 (查询)
  updateCssAutoreplyRuleStatus: api + '/autoreplyRule/updateCssAutoreplyRuleStatus', //三类自动回复状态 (修改)
  getAutoreplyRuleMaxCount: api + '/autoreplyRule/getAutoreplyRuleMaxCount', // 获取自动回复数量

  // 设置》分配规则、接待组设置、会话设置*/
  getCorpItemValueByCorpSystem: api + '/corp/item/getCorpItemValueByCorpSystem', // 获取设置信息
  updateCorpItemValueByCorpSystem: api + '/corp/item/updateCorpItemValueByCorpSystem', // 修改设置信息
  getCorpItemValueByCorpAppId: api + '/corp/item/getCorpItemValueByCorpAppId', // 获取接待组设置信息
  updateCorpItemValueByCorpAppId: api + '/corp/item/updateCorpItemValueByCorpAppId', // 修改接待组设置信息

  load: api + '/corp/item/load', // 获取开关状态
  save: api + '/corp/item/save', // 修改开关状态
  saveInitSeting: api + '/corp/item/saveInitSeting', // （分配规则、接待组设置、会话设置）生成默认设置

  // 粉丝
  getAllFansUserList: api + '/wx/user/getAllFansUserList', // 所有公众号的粉丝
  getKfAllFansList: api + '/wx/user/getKfAllFansList', // 客服全部粉丝列表
  getKfFansGroupList: api + '/wx/user/getKfFansGroupList', // 客服所属粉丝分组列表
  getFansDetail: api + '/wx/user/getFansDetail', // 粉丝详情
  updateBatchSetUserTag: api + '/wx/user/updateBatchSetUserTag', // 设置用户标签
  updateFansKfSeatId: api + '/wx/user/updateFansKfSeatId', // 修改粉丝坐席
  updateFansExtInfo: api + '/wx/user/updateFansExtInfo', // 修改粉丝信息
  getPublicBySeat: api + '/wxPublicAccount/getPublicAccountListBySeatId', // 根据客服id获取公众号列表
  deleteFans: api + '/wx/user/deleteFans',
  // 粉丝客服及粉丝分组
  getGroupListData: api + '/fsWxGroup/getGroupListData', // 分组列表
  updateKfSeatSet: api + '/fsWxGroup/updateKfSeatSet', // 设置客服 批量设置
  updateKfSeat: api + '/fsWxGroup/updateKfSeat', // 单个设置
  updateWxGroupByOrder: api + '/fsWxGroup/updateWxGroupByOrder', // 坐席分组排序
  updateWxGroup: api + '/fsWxGroup/updateWxGroup', // 修改坐席分组
  saveWxGroup: api + '/fsWxGroup/saveWxGroup', // 增加坐席分组
  deleteWxGroup: api + '/fsWxGroup/deleteWxGroup', // 删除坐席分组
  updateWxGroupByMove: api + '/fsWxGroup/updateWxGroupByMove', // 移动粉丝分组
  updateBatchSetFansUserTagSingle1: api + '/wx/user/updateBatchSetFansUserTagSingle', // 批量为用户设置标签
  updateWxGroupByMoveSingle1: api + '/fsWxGroup/updateWxGroupByMoveSingle', // 移动粉丝分组
  updateExclusiveSeat1: api + '/fsWxGroup/updateExclusiveSeat',
  // 粉丝坐席标签
  getTagsBySeatId: api + '/wx/tag/getTagsBySeatIdAndAccountIds', // 根据坐席和公众号获取粉丝标签
  // 粉丝筛选条件
  addFsSelectConditions: api + '/wx/user/addFsSelectConditions', // 新增粉丝筛选条件
  getFsSelectConditions: api + '/wx/user/getFsSelectConditions', // 获取粉丝筛选条件详情
  getFsSelectConditionsList: api + '/wx/user/getFsSelectConditionsList', // 获取粉丝筛选条件列表
  deleteFsSelectConditions: api + '/wx/user/deleteFsSelectConditions', // 删除粉丝筛选条件
  createConversation: api + '/wx/user/createConversation',
  getInteractiveStatistics1: api + '/wx/user/getInteractiveStatistics',
  getConversationMessageByGroup1: api + '/wx/user/getConversationMessageByGroup',
  // 群发消息
  saveOrUpdatecssGroupSendingTemplate: api + '/cssGroupSending/saveOrUpdatecssGroupSendingTemplate', // 模板消息群发（新增、修改）
  saveCssGroupSending: api + '/cssGroupSending/saveCssGroupSending', // 高级、客服消息群发（新增）
  updateCssGroupSending: api + '/cssGroupSending/updateCssGroupSending', // 高级、客服消息群发（修改）
  getNounData: api + '/cssGroupSending/getNounData', // 高级、客服、模板消息群发（配额信息）
  deleteCssGroupSending: api + '/cssGroupSending/deleteCssGroupSending', // 高级、客服、模板消息群发（删除）
  cancelCssGroupSending: api + '/cssGroupSending/cancelCssGroupSending', // 高级、客服、模板消息群发（取消发送）
  getCssGroupSendingListByPage: api + '/cssGroupSending/getCssGroupSendingListByPage', // 高级、客服、模板消息群发（获取列表）
  getCssGroupSendingInfo: api + '/cssGroupSending/getCssGroupSendingInfo', // 高级、客服、模板消息群发（获取详情）
  getFansUserCount: api + '/cssGroupSending/getFansUserCount', // 获取群发预估人数
  getSeatId: api + '/cssGroupSending/getSeatId', // 获取当前用户的坐席id

  // 营销 二维码
  validCssAppAccountType: api + '/channelQrCode/validCssAppAccountType', // 公众号类型和认证状态判断
  updateThemeToGroup: api + '/channelQrCode/updateThemeToGroup', // 移动二维码主题到指定分组
  selectAllSeat: api + '/channelQrCode/selectAllSeat', // 查询公众号下客服列表
  selectAllDept: api + '/channelQrCode/selectAllDept', // 查询所有部门
  selectAllEmployee: api + '/channelQrCode/selectAllEmployee', // 查询所有的员工（带搜索）
  deleteGchannelQrCodeByIds: api + '/channelQrCode/deleteGchannelQrCodeByIds', // 根据id集合删除二维码
  queryGchannelQrCodeById: api + '/channelQrCode/queryGchannelQrCodeById', // 根据二维码查询二维码详情
  getGchannelQrCodeListByPage: api + '/channelQrCode/getGchannelQrCodeListByPage', // 查询渠道二维码列表
  getQrCodeNum: api + '/channelQrCode/getQrCodeNum', // 获取已使用的二维码数量和套餐二维码总数量
  updateGchannelQrCode: api + '/channelQrCode/updateGchannelQrCode', // 修改渠道二维码
  saveQrCode: api + '/channelQrCode/saveQrCode', // 新增二维码
  canSaveQrCode: api + '/channelQrCode/canSaveQrCode', // 能否新增二维码
  deleteGroupM: api + '/channelQrCode/deleteGroup', // 删除二维码主题分类
  queryCssGroupM: api + '/channelQrCode/queryCssGroup', // 查询渠道二维码分组列表
  deleteGchannelQrCodeTheme: api + '/channelQrCode/deleteGchannelQrCodeTheme', // 删除二维码主题
  saveOrUpdateGchannelQrCodeTheme: api + '/channelQrCode/saveOrUpdateGchannelQrCodeTheme', // 添加或修改二维码主题
  getGchannelQrCodeThemeListByPage: api + '/channelQrCode/getGchannelQrCodeThemeListByPage', // 查询渠道二维码主题列表
  getChannelQrCodeThemeStatistics: api + '/channelQrCode/getChannelQrCodeThemeStatistics', // 统计总数量
  getChannelQrCodeThemeStatisticsList: api + '/channelQrCode/getChannelQrCodeThemeStatisticsList', // 图
  getChannelQrCodeStatistics: api + '/channelQrCode/getChannelQrCodeStatistics', // 统计总数量
  getChannelQrCodeStatisticsList: api + '/channelQrCode/getChannelQrCodeStatisticsList', // 图
  getChannelQrCodeImage: api + '/channelQrCode/getChannelQrCodeImage', // 下载
  // 营销 海报
  getFansPosterStatisticsList: api + '/posterTemplate/getFansPosterStatisticsList',
  getFansPosterStatistics: api + '/posterTemplate/getFansPosterStatistics',
  getFansPosterTemplateStatisticsList: api + '/posterTemplate/getFansPosterTemplateStatisticsList',
  queryPosterByPage: api + '/posterTemplate/queryPosterByPage',
  saveOrUpdatePostertTemplate: api + '/posterTemplate/saveOrUpdatePostertTemplate',
  deletePosterTemplate: api + '/posterTemplate/deletePosterTemplate',
  updatePosterTemplateGroup: api + '/posterTemplate/updatePosterTemplateGroup',
  getPosterTemplate: api + '/posterTemplate/getPosterTemplate',
  getPosterTemplateByPage: api + '/posterTemplate/getPosterTemplateByPage',
  validCssAppAccountTypeP: api + '/posterTemplate/validCssAppAccountType',
  updateGetPosterCloudToken: api + '/posterTemplate/updateGetPosterCloudToken',
  saveOrUpdateGroupP: api + '/posterTemplate/saveOrUpdateGroup',
  updateGroupOrderP: api + '/posterTemplate/updateGroupOrder',
  getFansPosterTemplateStatisticsInfo: api + '/posterTemplate/getFansPosterTemplateStatisticsInfo',
  getFansPosterInfo: api + '/posterTemplate/getFansPosterInfo',
  deleteGroupP: api + '/posterTemplate/deleteGroup',
  queryCssGroupP: api + '/posterTemplate/queryCssGroup',
  getFansPosterImageById: api + '/posterTemplate/getFansPosterImageById', // 根据粉丝海报id获取粉丝海报图片
  getAllDeptAndEmp: api + '/channelQrCode/getAllDeptAndEmp', // 获取部门员工树
  getFansPosterTemplateStatistics: api + '/posterTemplate/getFansPosterTemplateStatistics',
  // 营销 智能接待
  updateQueryIntelligentReception: api + '/intelligentReception/updateQueryIntelligentReception', // 获取智能接待配置信息
  updateScenesSet: api + '/intelligentReception/updateScenesSet', // 修改智能接待配置信息
  queryTaskList: api + '/intelligentReception/queryTaskList', // 获取智能接待任务列表
  canSaveTask: api + '/intelligentReception/canSaveTask', // 判断能否新建接待任务
  saveIntelligentReceptionTask: api + '/intelligentReception/saveIntelligentReceptionTask', // 新建智能接待任务
  updateIntelligentReceptionTask: api + '/intelligentReception/updateIntelligentReceptionTask', // 修改智能接待任务
  deleteIntelligentReceptionTask: api + '/intelligentReception/deleteIntelligentReceptionTask', // 删除智能接待任务

  getPublicAccountUserPage: api + '/repPublicAccountUser/getPublicAccountUserPage',
  getPublicAccountUserCount: api + '/repPublicAccountUser/getPublicAccountUserCount',
  getPublicAccountUserYesterdayCount:
    api + '/repPublicAccountUser/getPublicAccountUserYesterdayCount',
  getSeatConvrStatisticsPagination: api + '/repSeatConvrHis/getSeatConvrStatisticsPagination',
  getSeatConvrStatisticsList: api + '/repSeatConvrHis/getSeatConvrStatisticsList',
  getRepSeatConvrStatistics: api + '/repSeatConvrHis/getRepSeatConvrStatistics',
  getRepSeatConvrToday: api + '/repSeatConvrHis/getRepSeatConvrToday',
  getRepAppaccountConvrStatistics: api + '/repAppaccountConvrHis/getRepAppaccountConvrStatistics',
  getAppaccountConvrStatisticsList: api + '/repAppaccountConvrHis/getAppaccountConvrStatisticsList',
  getAppaccountConvrStatisticsPagination:
    api + '/repAppaccountConvrHis/getAppaccountConvrStatisticsPagination',
  getRepAppaccountConvrToday: api + '/repAppaccountConvrHis/getRepAppaccountConvrToday',
  getKfSeatList: api + '/repSeatConvrHis/getKfSeatList',

  queryCurrVersion: api + '/oms/versionCfg/queryCurrVersion',
};
