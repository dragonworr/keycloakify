//This code was automatically generated by running scripts/generate-i18n-messages.ts
//PLEASE DO NOT EDIT MANUALLY

/* spell-checker: disable */
const messages = {
    "invalidPasswordMinLengthMessage": "كلمة المرور غير صالحة: الحد الأدنى للطول {0}.",
    "invalidPasswordMaxLengthMessage": "كلمة المرور غير صالحة: الحد الأقصى للطول {0}.",
    "invalidPasswordMinLowerCaseCharsMessage": "كلمة المرور غير صالحة: يجب أن تحتوي على {0} حروف صغيرة على الأقل.",
    "invalidPasswordMinDigitsMessage": "كلمة المرور غير صالحة: يجب أن تحتوي على {0} أرقام على الأقل.",
    "invalidPasswordMinUpperCaseCharsMessage": "كلمة المرور غير صالحة: يجب أن تحتوي على {0} حروف كبيرة على الأقل.",
    "invalidPasswordMinSpecialCharsMessage": "كلمة المرور غير صالحة: يجب أن تحتوي على {0} رموز على الأقل.",
    "invalidPasswordNotUsernameMessage": "كلمة المرور غير صالحة: يجب ألا تكون مطابقة لاسم المستخدم.",
    "invalidPasswordNotEmailMessage": "كلمة المرور غير صالحة: يجب ألا تكون مطابقة للبريد الإلكتروني.",
    "invalidPasswordRegexPatternMessage": "كلمة المرور غير صالحة: يجب ألا تكون مطابقة للأنماط المحددة.",
    "invalidPasswordHistoryMessage": "كلمة المرور غير صالحة: يجب ألا تكون مطابقة لأي من كلمات المرور الـ {0} الأخيرة.",
    "invalidPasswordBlacklistedMessage": "كلمة المرور غير صالحة: كلمة المرور في القائمة السوداء.",
    "invalidPasswordGenericMessage": "كلمة المرور غير صالحة: كلمة المرور الجديدة لا تتطابق مع سياسات كلمة المرور.",
    "ldapErrorEditModeMandatory": "وضع التحرير إلزامي",
    "ldapErrorInvalidCustomFilter": 'لا يبدأ عامل تصفية LDAP المخصص بـ "(" أو لا ينتهي بـ ")".',
    "ldapErrorConnectionTimeoutNotNumber": "وقت مهلة الاتصال يجب أن يكون رقمًا",
    "ldapErrorReadTimeoutNotNumber": "وقت مهلة القراءة يجب أن يكون رقمًا",
    "ldapErrorMissingClientId": "يجب توفير معرف العميل Client ID في التكوين عند عدم استخدام تعيين أدوار المنظومة.",
    "ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType": "لا يمكن الحفاظ على خاصية وراثة المجموعة واستخدام نوع عضوية UID في نفس الوقت.",
    "ldapErrorCantWriteOnlyForReadOnlyLdap": 'لا يمكن تعيين خاصية "للكتابة فقط" عندما لا يكون وضع مزود LDAP قابل للكتابة.',
    "ldapErrorCantWriteOnlyAndReadOnly": 'لا يمكن تعيين خاصية "للكتابة فقط" وخاصية "للقراءة فقط" في نفس الوقت',
    "ldapErrorCantEnableStartTlsAndConnectionPooling": 'لا يمكن تفعيل ميزة StartTLS وميزة "مشاركة الاتصالات" في نفس الوقت.',
    "ldapErrorCantEnableUnsyncedAndImportOff": "لا يمكن تعطيل استيراد المستخدمين عندما يكون وضع مزود LDAP غير متزامن.",
    "ldapErrorMissingGroupsPathGroup": "مسار المجموعة غير موجود - يرجى إنشاء المجموعة على المسار المحدد أولاً",
    "ldapErrorValidatePasswordPolicyAvailableForWritableOnly": "التحقق من سياسة كلمة المرور ينطبق فقط مع وضع التحرير القابل للكتابة",
    "clientRedirectURIsFragmentError": "عناوين موقع إعادة التوجيه يجب ألا يحتوي على ملحق",
    "clientRootURLFragmentError": "عنوان الموقع الجذر يجب ألا يحتوي على ملحق",
    "clientRootURLIllegalSchemeError": "عنوان الموقع الجذر يستخدم بادئة مخالفة",
    "clientBaseURLIllegalSchemeError": "عنوان الموقع الأساس يستخدم بادئة مخالفة",
    "backchannelLogoutUrlIllegalSchemeError": "عنوان الموقع لتسجيل الخروج عن طريق القناة الخلفية يستخدم بادئة مخالفة",
    "clientRedirectURIsIllegalSchemeError": "عنوان موقع إعادة التوجيه يستخدم بادئة مخالفة",
    "clientBaseURLInvalid": "عنوان الموقع الأساس غير صالح",
    "clientRootURLInvalid": "عنوان الموقع الجذر غير صالح",
    "clientRedirectURIsInvalid": "عنوان موقع إعادة التوجيه غير صالح",
    "backchannelLogoutUrlIsInvalid": "عنوان الموقع لتسجيل الخروج عن طريق القناة الخلفية غير صالح",
    "pairwiseMalformedClientRedirectURI": "عنوان موقع إعادة التوجيه الخاص بالعميل غير صالح.",
    "pairwiseClientRedirectURIsMissingHost": "عناوين موقع إعادة التوجيه الخاصة بالعميل يجب أن تتكون من جزئية مضيف صالحة.",
    "pairwiseClientRedirectURIsMultipleHosts":
        "من دون إعداد عنوان موقع لمعرف القطاع، عناوين موقع إعادة التوجيه الخاصة بالعميل يجب ألا تتكون من عدة جزئيات مضيف.",
    "pairwiseMalformedSectorIdentifierURI": "عنوان الموقع لمعرف القطاع معطوب.",
    "pairwiseFailedToGetRedirectURIs": "فشل في الحصول على عناوين موقع إعادة التوجيه من عنوان الموقع لمعرف القطاع.",
    "pairwiseRedirectURIsMismatch":
        "لا تتطابق عناوين موقع إعادة التوجيه الخاصة بالعميل مع عناوين موقع إعادة التوجيه التي تم جلبها من عنوان الموقع لمعرف القطاع",
    "duplicatedJwksSettings": 'لا يمكن تفعيل المفتاح "استخدام JWKS" والمفتاح "استخدام عنوان موقع JWKS" في نفس الوقت.',
    "error-invalid-value": "قيمة غير صالحة.",
    "error-invalid-blank": "يرجى تحديد قيمة.",
    "error-empty": "يرجى تحديد قيمة.",
    "error-invalid-length": "الطول يجب أن يكون بين {1} و {2}.",
    "error-invalid-length-too-short": "الطول يجب ألا يقل عن {1}.",
    "error-invalid-length-too-long": "الطول يجب ألا يزيد عن {2}.",
    "error-invalid-email": "بريد إلكتروني غير صالح.",
    "error-invalid-number": "رقم غير صالح.",
    "error-number-out-of-range": "الرقم يجب أن يكون بين {1} و {2}.",
    "error-number-out-of-range-too-small": "الرقم يجب ألا تقل قيمته عن {1}.",
    "error-number-out-of-range-too-big": "الرقم يجب ألا تزيد قيمته عن {2}.",
    "error-pattern-no-match": "قيمة غير صالحة.",
    "error-invalid-uri": "عنوان موقع غير صالح.",
    "error-invalid-uri-scheme": "بادئة عنوان موقع غير صالحة.",
    "error-invalid-uri-fragment": "ملحق عنوان موقع غير صالح.",
    "error-user-attribute-required": "يرجى تحديد هذا الحقل.",
    "error-invalid-date": "تاريخ غير صالح.",
    "error-user-attribute-read-only": "هذا الحقل للقراءة فقط.",
    "error-username-invalid-character": "القيمة تحتوي على حرف غير صالح.",
    "error-person-name-invalid-character": "القيمة تحتوي على حرف غير صالح."
};

export default messages;
/* spell-checker: enable */
