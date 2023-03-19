//This code was automatically generated by running scripts/generate-i18n-messages.ts
//PLEASE DO NOT EDIT MANUALLY

/* spell-checker: disable */
const messages = {
    "doLogIn": "登录",
    "doRegister": "注册",
    "doCancel": "取消",
    "doSubmit": "提交",
    "doYes": "是",
    "doNo": "否",
    "doContinue": "继续",
    "doAccept": "接受",
    "doDecline": "拒绝",
    "doForgotPassword": "忘记密码?",
    "doClickHere": "点击这里",
    "doImpersonate": "模拟",
    "kerberosNotConfigured": "Kerberos 没有配置",
    "kerberosNotConfiguredTitle": "Kerberos 没有配置",
    "bypassKerberosDetail": "您没有通过Kerberos登录 或者您的浏览器没有设置Kerberos登录. 请点击继续通过其他途径登录。",
    "kerberosNotSetUp": "Kerberos没有配置，您不可以登录",
    "registerWithTitle": "用 {0} 注册",
    "registerWithTitleHtml": "{0}",
    "loginTitle": "登录到 {0}",
    "loginTitleHtml": "{0}",
    "impersonateTitle": "{0} 模拟用户",
    "impersonateTitleHtml": "<strong>{0}</strong>模拟用户",
    "realmChoice": "域",
    "unknownUser": "未知用户",
    "loginTotpTitle": "手机验证者配置",
    "loginProfileTitle": "更新账户信息",
    "loginTimeout": "登录超时，请重新开始登录",
    "oauthGrantTitle": "授权",
    "oauthGrantTitleHtml": "{0}",
    "errorTitle": "很抱歉...",
    "errorTitleHtml": "我们<strong>很抱歉</strong> ...",
    "emailVerifyTitle": "验证电子邮件地址",
    "emailForgotTitle": "忘记密码?",
    "updatePasswordTitle": "更新密码",
    "codeSuccessTitle": "成功码",
    "codeErrorTitle": "错误码: {0}",
    "termsTitle": "条款",
    "termsTitleHtml": "条款",
    "termsText": "<p>需要确定的条款</p>",
    "recaptchaFailed": "无效的验证码",
    "recaptchaNotConfigured": "需要验证码，但是没有配置",
    "consentDenied": "许可被拒绝。",
    "noAccount": "新用户?",
    "username": "用户名",
    "usernameOrEmail": "用户名 或 电子邮箱地址",
    "firstName": "名",
    "givenName": "姓",
    "fullName": "全名",
    "lastName": "姓",
    "familyName": "姓",
    "email": "Email",
    "password": "密码",
    "passwordConfirm": "确认密码",
    "passwordNew": "新密码",
    "passwordNewConfirm": "新密码确认",
    "rememberMe": "记住我",
    "authenticatorCode": "一次性验证码",
    "address": "地址",
    "street": "街道",
    "locality": "市",
    "region": "省，自治区，直辖市",
    "postal_code": "邮政编码",
    "country": "国家",
    "emailVerified": "电子邮件已验证",
    "gssDelegationCredential": "GSS Delegation Credential",
    "loginTotpStep1":
        '在手机安装 <a href="https://fedorahosted.org/freeotp/" target="_blank">FreeOTP</a> 或 Google Authenticator. 这两个应用可以在 <a href="https://play.google.com">Google Play</a> 和 Apple App Store找到.',
    "loginTotpStep2": "打开应用扫描二维码或者输入一次性码",
    "loginTotpStep3": "输入应用提供的一次性码点击提交完成设置",
    "loginOtpOneTime": "一次性验证码",
    "oauthGrantRequest": "您是否想要授予下列权限?",
    "inResource": "in",
    "emailVerifyInstruction1": "一封包含验证邮箱具体步骤的邮件已经发送到您的邮箱。",
    "emailVerifyInstruction2": "邮箱没有收到验证码?",
    "emailVerifyInstruction3": "重新发送电子邮件",
    "emailLinkIdpTitle": "链接 {0}",
    "emailLinkIdp1": "一封包含链接账户 {0} 和账户 {1} 到账户 {2} 的邮件已经发送到您的邮箱。",
    "emailLinkIdp2": "邮箱没有收到验证码邮件?",
    "emailLinkIdp3": "重新发送电子邮件",
    "backToLogin": "&laquo; 回到登录",
    "emailInstruction": "输入您的用户名和邮箱，我们会发送一封带有设置新密码步骤的邮件到您的邮箱。",
    "copyCodeInstruction": "请复制这段验证码并粘贴到应用：",
    "personalInfo": "个人信息:",
    "role_admin": "管理员",
    "role_realm-admin": "域管理员",
    "role_create-realm": "创建域",
    "role_create-client": "创建客户",
    "role_view-realm": "查看域",
    "role_view-users": "查看用户",
    "role_view-applications": "查看应用",
    "role_view-clients": "查看客户",
    "role_view-events": "查看时间",
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
    "client_account": "账户",
    "client_security-admin-console": "安全管理控制台",
    "client_admin-cli": "管理命令行工具",
    "client_realm-management": "域管理",
    "client_broker": "代理",
    "invalidUserMessage": "无效的用户名或密码。",
    "invalidEmailMessage": "无效的电子邮件地址",
    "accountDisabledMessage": "账户被禁用，请联系管理员。",
    "accountTemporarilyDisabledMessage": "账户被暂时禁用，请稍后再试或联系管理员。",
    "expiredCodeMessage": "登录超时，请重新登录。",
    "missingFirstNameMessage": "请输入名",
    "missingLastNameMessage": "请输入姓",
    "missingEmailMessage": "请输入email.",
    "missingUsernameMessage": "请输入用户名",
    "missingPasswordMessage": "请输入密码",
    "missingTotpMessage": "请输入验证码",
    "notMatchPasswordMessage": "密码不匹配。",
    "invalidPasswordExistingMessage": "无效的旧密码",
    "invalidPasswordConfirmMessage": "确认密码不相同",
    "invalidTotpMessage": "无效的验证码",
    "usernameExistsMessage": "用户名已被占用",
    "emailExistsMessage": "电子邮件已存在。",
    "federatedIdentityExistsMessage": "用户 {0} {1} 已存在. 请登录账户管理界面链接账户.",
    "confirmLinkIdpTitle": "账户已存在",
    "federatedIdentityConfirmLinkMessage": "用户{0} {1} 已存在. 怎么继续?",
    "confirmLinkIdpReviewProfile": "审查您的信息",
    "confirmLinkIdpContinue": "添加到已知账户",
    "configureTotpMessage": "您需要设置验证码模块来激活您的账户",
    "updateProfileMessage": "您需要更新您的简介来激活您的账户",
    "updatePasswordMessage": "您需要更新您的密码来激活您的账户",
    "verifyEmailMessage": "您需要验证您的电子邮箱来激活您的账户",
    "linkIdpMessage": "您需要验证您的电子邮箱来连接到账户{0}.",
    "emailSentMessage": "您很快会收到一封关于接下来操作的邮件。",
    "emailSendErrorMessage": "无法发送邮件，请稍后再试",
    "accountUpdatedMessage": "您的账户已经更新。",
    "accountPasswordUpdatedMessage": "您的密码已经更新",
    "noAccessMessage": "无权限",
    "invalidPasswordMinLengthMessage": "无效的密码：最短长度 {0}.",
    "invalidPasswordMinDigitsMessage": "无效的密码： 至少包含{0} 个数字",
    "invalidPasswordMinLowerCaseCharsMessage": "无效的密码：至少包含 {0} 小写字母.",
    "invalidPasswordMinUpperCaseCharsMessage": "无效的密码：至少包含 {0} 大写字母.",
    "invalidPasswordMinSpecialCharsMessage": "无效的密码：至少包含 {0} 特殊字符.",
    "invalidPasswordNotUsernameMessage": "无效的密码： 不能与用户名相同.",
    "invalidPasswordRegexPatternMessage": "无效的密码： 无法与正则表达式匹配.",
    "invalidPasswordHistoryMessage": "无效的密码： 不能与前 {0} 个旧密码相同.",
    "failedToProcessResponseMessage": "无法处理回复",
    "httpsRequiredMessage": "需要HTTPS",
    "realmNotEnabledMessage": "域未启用",
    "invalidRequestMessage": "非法的请求",
    "failedLogout": "无法登出",
    "unknownLoginRequesterMessage": "未知的登录请求发起方",
    "loginRequesterNotEnabledMessage": "登录请求发起方为启用",
    "bearerOnlyMessage": "Bearer-only 的应用不允许通过浏览器登录",
    "standardFlowDisabledMessage": "客户程序不允许发起指定返回类型的浏览器登录. 标准的登录流程已禁用。",
    "implicitFlowDisabledMessage": "客户程序不允许发起指定返回类型的浏览器登录. 隐式的登录流程已禁用。",
    "invalidRedirectUriMessage": "无效的跳转链接",
    "unsupportedNameIdFormatMessage": "不支持的 nameID格式",
    "invalidRequesterMessage": "无效的发起者",
    "registrationNotAllowedMessage": "注册不允许",
    "resetCredentialNotAllowedMessage": "不允许重置密码",
    "permissionNotApprovedMessage": "许可没有批准",
    "noRelayStateInResponseMessage": "身份提供者没有返回中继状态信息",
    "insufficientPermissionMessage": "权限不足以链接新的身份",
    "couldNotProceedWithAuthenticationRequestMessage": "无法与身份提供者处理认证请求",
    "couldNotObtainTokenMessage": "未从身份提供者获得token",
    "unexpectedErrorRetrievingTokenMessage": "从身份提供者获得Token时遇到未知错误",
    "unexpectedErrorHandlingResponseMessage": "从身份提供者获得回复时遇到未知错误",
    "identityProviderAuthenticationFailedMessage": "认证失败，无法通过身份提供者认证",
    "couldNotSendAuthenticationRequestMessage": "无法向身份提供方发送认证请求",
    "unexpectedErrorHandlingRequestMessage": "在处理发向认证提供方的请求时，出现未知错误。",
    "invalidAccessCodeMessage": "无效的验证码",
    "sessionNotActiveMessage": "会话不在活动状态",
    "invalidCodeMessage": "发生错误，请重新通过应用登录",
    "identityProviderUnexpectedErrorMessage": "在与认证提供者认证过程中发生未知错误",
    "identityProviderNotFoundMessage": "无法找到认证提供方",
    "identityProviderLinkSuccess": "您的账户已经将账户{0} 与账户 {1} 链接.",
    "staleCodeMessage": "当前页面已无效，请到登录界面重新登录",
    "realmSupportsNoCredentialsMessage": "域不支持特定类型密码",
    "identityProviderNotUniqueMessage": "域支持通过多个身份提供者登录，不知道应用哪一种方式登录",
    "emailVerifiedMessage": "您的电子邮箱已经验证。",
    "staleEmailVerificationLink": "您点击的链接已无效。可能您已经验证过您的电子邮箱?",
    "backToApplication": "&laquo; 回到应用",
    "missingParameterMessage": "缺少参数 : {0}",
    "clientNotFoundMessage": "客户端未找到",
    "clientDisabledMessage": "客户端已禁用",
    "invalidParameterMessage": "无效的参数 : {0}",
    "alreadyLoggedIn": "您已经登录"
};

export default messages;
/* spell-checker: enable */
