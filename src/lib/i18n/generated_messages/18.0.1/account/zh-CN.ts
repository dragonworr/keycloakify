//This code was automatically generated by running dist/bin/generate-i18n-messages.js
//PLEASE DO NOT EDIT MANUALLY

/* spell-checker: disable */
const messages = {
    "doSave": "保存",
    "doCancel": "取消",
    "doLogOutAllSessions": "登出所有会话",
    "doRemove": "删除",
    "doAdd": "添加",
    "doSignOut": "登出",
    "editAccountHtmlTitle": "编辑账户",
    "federatedIdentitiesHtmlTitle": "链接的身份",
    "accountLogHtmlTitle": "账户日志",
    "changePasswordHtmlTitle": "更改密码",
    "sessionsHtmlTitle": "会话",
    "accountManagementTitle": "Keycloak账户管理",
    "authenticatorTitle": "认证者",
    "applicationsHtmlTitle": "应用",
    "authenticatorCode": "一次性认证码",
    "email": "电子邮件",
    "firstName": "名",
    "givenName": "姓",
    "fullName": "全名",
    "lastName": "姓",
    "familyName": "姓",
    "password": "密码",
    "passwordConfirm": "确认",
    "passwordNew": "新密码",
    "username": "用户名",
    "address": "地址",
    "street": "街道",
    "locality": "城市住所",
    "region": "省，自治区，直辖市",
    "postal_code": "邮政编码",
    "country": "国家",
    "emailVerified": "验证过的Email",
    "gssDelegationCredential": "GSS Delegation Credential",
    "role_admin": "管理员",
    "role_realm-admin": "域管理员",
    "role_create-realm": "创建域",
    "role_view-realm": "查看域",
    "role_view-users": "查看用户",
    "role_view-applications": "查看应用",
    "role_view-clients": "查看客户",
    "role_view-events": "查看事件",
    "role_view-identity-providers": "查看身份提供者",
    "role_manage-realm": "管理域",
    "role_manage-users": "管理用户",
    "role_manage-applications": "管理应用",
    "role_manage-identity-providers": "管理身份提供者",
    "role_manage-clients": "管理客户",
    "role_manage-events": "管理事件",
    "role_view-profile": "查看用户信息",
    "role_manage-account": "管理账户",
    "role_read-token": "读取 token",
    "role_offline-access": "离线访问",
    "role_uma_authorization": "获取授权",
    "client_account": "账户",
    "client_security-admin-console": "安全管理终端",
    "client_admin-cli": "管理命令行",
    "client_realm-management": "域管理",
    "client_broker": "代理",
    "requiredFields": "必填项",
    "allFieldsRequired": "所有项必填",
    "backToApplication": "« 回到应用",
    "backTo": "回到 {0}",
    "date": "日期",
    "event": "事件",
    "ip": "IP",
    "client": "客户端",
    "clients": "客户端",
    "details": "详情",
    "started": "开始",
    "lastAccess": "最后一次访问",
    "expires": "过期时间",
    "applications": "应用",
    "account": "账户",
    "federatedIdentity": "关联身份",
    "authenticator": "认证方",
    "sessions": "会话",
    "log": "日志",
    "application": "应用",
    "availablePermissions": "可用权限",
    "grantedPermissions": "授予权限",
    "grantedPersonalInfo": "授权的个人信息",
    "additionalGrants": "可授予的权限",
    "action": "操作",
    "inResource": "in",
    "fullAccess": "所有权限",
    "offlineToken": "离线 token",
    "revoke": "收回授权",
    "configureAuthenticators": "配置的认证者",
    "mobile": "手机",
    "totpStep1":
        '在你的设备上安装 <a href="https://fedorahosted.org/freeotp/" target="_blank">FreeOTP</a> 或者 Google Authenticator.两个应用可以从 <a href="https://play.google.com">Google Play</a> 和 Apple App Store下载。',
    "totpStep2": "打开应用扫描二维码输入验证码",
    "totpStep3": "输入应用提供的一次性验证码单击保存",
    "missingUsernameMessage": "请指定用户名",
    "missingFirstNameMessage": "请指定名",
    "invalidEmailMessage": "无效的电子邮箱地址",
    "missingLastNameMessage": "请指定姓",
    "missingEmailMessage": "请指定邮件地址",
    "missingPasswordMessage": "请输入密码",
    "notMatchPasswordMessage": "密码不匹配",
    "missingTotpMessage": "请指定认证者代码",
    "invalidPasswordExistingMessage": "无效的旧密码",
    "invalidPasswordConfirmMessage": "确认密码不相符",
    "invalidTotpMessage": "无效的认证码",
    "usernameExistsMessage": "用户名已经存在",
    "emailExistsMessage": "电子邮箱已经存在",
    "readOnlyUserMessage": "无法修改账户，因为它是只读的。",
    "readOnlyPasswordMessage": "不可以更该账户因为它是只读的。",
    "successTotpMessage": "手机认证者配置完毕",
    "successTotpRemovedMessage": "手机认证者已删除",
    "successGrantRevokedMessage": "授权成功回收",
    "accountUpdatedMessage": "您的账户已经更新",
    "accountPasswordUpdatedMessage": "您的密码已经修改",
    "missingIdentityProviderMessage": "身份提供者未指定",
    "invalidFederatedIdentityActionMessage": "无效或者缺少操作",
    "identityProviderNotFoundMessage": "指定的身份提供者未找到",
    "federatedIdentityLinkNotActiveMessage": "这个身份不再使用了。",
    "federatedIdentityRemovingLastProviderMessage": "你不可以移除最后一个身份提供者因为你没有设置密码",
    "identityProviderRedirectErrorMessage": "尝试重定向到身份提供商失败",
    "identityProviderRemovedMessage": "身份提供商成功删除",
    "identityProviderAlreadyLinkedMessage": "链接的身份 {0} 已经连接到已有用户。",
    "staleCodeAccountMessage": "页面过期。请再试一次。",
    "consentDenied": "不同意",
    "accountDisabledMessage": "账户已经关闭，请联系管理员",
    "accountTemporarilyDisabledMessage": "账户暂时关闭，请联系管理员或稍后再试。",
    "invalidPasswordMinLengthMessage": "无效的密码:最短长度 {0}.",
    "invalidPasswordMinLowerCaseCharsMessage": "无效的密码: 至少包含 {0} 小写字母。",
    "invalidPasswordMinDigitsMessage": "无效的密码:  至少包含 {0} 数字。",
    "invalidPasswordMinUpperCaseCharsMessage": "无效的密码: 至少包含 {0} 大写字母",
    "invalidPasswordMinSpecialCharsMessage": "无效的密码: 至少包含 {0} 个特殊字符",
    "invalidPasswordNotUsernameMessage": "无效的密码: 不能与用户名相同",
    "invalidPasswordRegexPatternMessage": "无效的密码:  无法与正则表达式匹配",
    "invalidPasswordHistoryMessage": "无效的密码: 不能与之前的{0} 个旧密码相同"
};

export default messages;
/* spell-checker: enable */
