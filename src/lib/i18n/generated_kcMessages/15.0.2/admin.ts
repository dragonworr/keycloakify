//This code was automatically generated by running dist/bin/generate-i18n-messages.js
//PLEASE DO NOT EDIT MANUALLY

/* spell-checker: disable */
export const kcMessages = {
    "ca": {
        "invalidPasswordHistoryMessage":
            "Contrasenya incorrecta: no pot ser igual a cap de les últimes {0} contrasenyes.",
        "invalidPasswordMinDigitsMessage":
            "Contraseña incorrecta: debe contener al menos {0} caracteres numéricos.",
        "invalidPasswordMinLengthMessage":
            "Contrasenya incorrecta: longitud mínima {0}.",
        "invalidPasswordMinLowerCaseCharsMessage":
            "Contrasenya incorrecta: ha de contenir almenys {0} lletres minúscules.",
        "invalidPasswordMinSpecialCharsMessage":
            "Contrasenya incorrecta: ha de contenir almenys {0} caràcters especials.",
        "invalidPasswordMinUpperCaseCharsMessage":
            "Contrasenya incorrecta: ha de contenir almenys {0} lletres majúscules.",
        "invalidPasswordNotUsernameMessage":
            "Contrasenya incorrecta: no pot ser igual al nom d'usuari.",
        "invalidPasswordRegexPatternMessage":
            "Contrasenya incorrecta: no compleix l'expressió regular.",
    },
    "de": {
        "invalidPasswordMinLengthMessage":
            "Ungültiges Passwort: muss mindestens {0} Zeichen beinhalten.",
        "invalidPasswordMinLowerCaseCharsMessage":
            "Ungültiges Passwort: muss mindestens {0} Kleinbuchstaben beinhalten.",
        "invalidPasswordMinDigitsMessage":
            "Ungültiges Passwort: muss mindestens {0} Ziffern beinhalten.",
        "invalidPasswordMinUpperCaseCharsMessage":
            "Ungültiges Passwort: muss mindestens {0} Großbuchstaben beinhalten.",
        "invalidPasswordMinSpecialCharsMessage":
            "Ungültiges Passwort: muss mindestens {0} Sonderzeichen beinhalten.",
        "invalidPasswordNotUsernameMessage":
            "Ungültiges Passwort: darf nicht identisch mit dem Benutzernamen sein.",
        "invalidPasswordNotEmailMessage":
            "Ungültiges Passwort: darf nicht identisch mit der E-Mail-Adresse sein.",
        "invalidPasswordRegexPatternMessage":
            "Ungültiges Passwort: stimmt nicht mit Regex-Muster überein.",
        "invalidPasswordHistoryMessage":
            "Ungültiges Passwort: darf nicht identisch mit einem der letzten {0} Passwörter sein.",
        "invalidPasswordBlacklistedMessage":
            "Ungültiges Passwort: Passwort ist zu bekannt und auf der schwarzen Liste.",
        "invalidPasswordGenericMessage":
            "Ungültiges Passwort: neues Passwort erfüllt die Passwort-Anforderungen nicht.",
    },
    "en": {
        "invalidPasswordMinLengthMessage":
            "Invalid password: minimum length {0}.",
        "invalidPasswordMaxLengthMessage":
            "Invalid password: maximum length {0}.",
        "invalidPasswordMinLowerCaseCharsMessage":
            "Invalid password: must contain at least {0} lower case characters.",
        "invalidPasswordMinDigitsMessage":
            "Invalid password: must contain at least {0} numerical digits.",
        "invalidPasswordMinUpperCaseCharsMessage":
            "Invalid password: must contain at least {0} upper case characters.",
        "invalidPasswordMinSpecialCharsMessage":
            "Invalid password: must contain at least {0} special characters.",
        "invalidPasswordNotUsernameMessage":
            "Invalid password: must not be equal to the username.",
        "invalidPasswordNotEmailMessage":
            "Invalid password: must not be equal to the email.",
        "invalidPasswordRegexPatternMessage":
            "Invalid password: fails to match regex pattern(s).",
        "invalidPasswordHistoryMessage":
            "Invalid password: must not be equal to any of last {0} passwords.",
        "invalidPasswordBlacklistedMessage":
            "Invalid password: password is blacklisted.",
        "invalidPasswordGenericMessage":
            "Invalid password: new password does not match password policies.",
        "ldapErrorInvalidCustomFilter":
            'Custom configured LDAP filter does not start with "(" or does not end with ")".',
        "ldapErrorConnectionTimeoutNotNumber":
            "Connection Timeout must be a number",
        "ldapErrorReadTimeoutNotNumber": "Read Timeout must be a number",
        "ldapErrorMissingClientId":
            "Client ID needs to be provided in config when Realm Roles Mapping is not used.",
        "ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType":
            "Not possible to preserve group inheritance and use UID membership type together.",
        "ldapErrorCantWriteOnlyForReadOnlyLdap":
            "Can not set write only when LDAP provider mode is not WRITABLE",
        "ldapErrorCantWriteOnlyAndReadOnly":
            "Can not set write-only and read-only together",
        "ldapErrorCantEnableStartTlsAndConnectionPooling":
            "Can not enable both StartTLS and connection pooling.",
        "ldapErrorCantEnableUnsyncedAndImportOff":
            "Can not disable Importing users when LDAP provider mode is UNSYNCED",
        "ldapErrorMissingGroupsPathGroup":
            "Groups path group does not exist - please create the group on specified path first",
        "clientRedirectURIsFragmentError":
            "Redirect URIs must not contain an URI fragment",
        "clientRootURLFragmentError":
            "Root URL must not contain an URL fragment",
        "clientRootURLIllegalSchemeError": "Root URL uses an illegal scheme",
        "clientBaseURLIllegalSchemeError": "Base URL uses an illegal scheme",
        "backchannelLogoutUrlIllegalSchemeError":
            "Backchannel logout URL uses an illegal scheme",
        "clientRedirectURIsIllegalSchemeError":
            "A redirect URI uses an illegal scheme",
        "clientBaseURLInvalid": "Base URL is not a valid URL",
        "clientRootURLInvalid": "Root URL is not a valid URL",
        "clientRedirectURIsInvalid": "A redirect URI is not a valid URI",
        "backchannelLogoutUrlIsInvalid":
            "Backchannel logout URL is not a valid URL",
        "pairwiseMalformedClientRedirectURI":
            "Client contained an invalid redirect URI.",
        "pairwiseClientRedirectURIsMissingHost":
            "Client redirect URIs must contain a valid host component.",
        "pairwiseClientRedirectURIsMultipleHosts":
            "Without a configured Sector Identifier URI, client redirect URIs must not contain multiple host components.",
        "pairwiseMalformedSectorIdentifierURI":
            "Malformed Sector Identifier URI.",
        "pairwiseFailedToGetRedirectURIs":
            "Failed to get redirect URIs from the Sector Identifier URI.",
        "pairwiseRedirectURIsMismatch":
            "Client redirect URIs does not match redirect URIs fetched from the Sector Identifier URI.",
        "error-invalid-value": "Invalid value.",
        "error-invalid-blank": "Please specify value.",
        "error-empty": "Please specify value.",
        "error-invalid-length":
            "Attribute {0} must have a length between {1} and {2}.",
        "error-invalid-length-too-short":
            "Attribute {0} must have minimal length of {1}.",
        "error-invalid-length-too-long":
            "Attribute {0} must have maximal length of {2}.",
        "error-invalid-email": "Invalid email address.",
        "error-invalid-number": "Invalid number.",
        "error-number-out-of-range":
            "Attribute {0} must be a number between {1} and {2}.",
        "error-number-out-of-range-too-small":
            "Attribute {0} must have minimal value of {1}.",
        "error-number-out-of-range-too-big":
            "Attribute {0} must have maximal value of {2}.",
        "error-pattern-no-match": "Invalid value.",
        "error-invalid-uri": "Invalid URL.",
        "error-invalid-uri-scheme": "Invalid URL scheme.",
        "error-invalid-uri-fragment": "Invalid URL fragment.",
        "error-user-attribute-required": "Please specify attribute {0}.",
        "error-invalid-date": "Attribute {0} is invalid date.",
        "error-user-attribute-read-only": "Attribute {0} is read only.",
        "error-username-invalid-character": "{0} contains invalid character.",
        "error-person-name-invalid-character":
            "{0} contains invalid character.",
    },
    "es": {
        "invalidPasswordMinLengthMessage":
            "Contraseña incorrecta: longitud mínima {0}.",
        "invalidPasswordMinLowerCaseCharsMessage":
            "Contraseña incorrecta: debe contener al menos {0} letras minúsculas.",
        "invalidPasswordMinDigitsMessage":
            "Contraseña incorrecta: debe contener al menos {0} caracteres numéricos.",
        "invalidPasswordMinUpperCaseCharsMessage":
            "Contraseña incorrecta: debe contener al menos {0} letras mayúsculas.",
        "invalidPasswordMinSpecialCharsMessage":
            "Contraseña incorrecta: debe contener al menos {0} caracteres especiales.",
        "invalidPasswordNotUsernameMessage":
            "Contraseña incorrecta: no puede ser igual al nombre de usuario.",
        "invalidPasswordRegexPatternMessage":
            "Contraseña incorrecta: no cumple la expresión regular.",
        "invalidPasswordHistoryMessage":
            "Contraseña incorrecta: no puede ser igual a ninguna de las últimas {0} contraseñas.",
    },
    "fr": {
        "invalidPasswordMinLengthMessage":
            "Mot de passe invalide : longueur minimale requise de {0}.",
        "invalidPasswordMinLowerCaseCharsMessage":
            "Mot de passe invalide : doit contenir au moins {0} lettre(s) en minuscule.",
        "invalidPasswordMinDigitsMessage":
            "Mot de passe invalide : doit contenir au moins {0} chiffre(s).",
        "invalidPasswordMinUpperCaseCharsMessage":
            "Mot de passe invalide : doit contenir au moins {0} lettre(s) en majuscule.",
        "invalidPasswordMinSpecialCharsMessage":
            "Mot de passe invalide : doit contenir au moins {0} caractère(s) spéciaux.",
        "invalidPasswordNotUsernameMessage":
            "Mot de passe invalide : ne doit pas être identique au nom d'utilisateur.",
        "invalidPasswordRegexPatternMessage":
            "Mot de passe invalide : ne valide pas l'expression rationnelle.",
        "invalidPasswordHistoryMessage":
            "Mot de passe invalide : ne doit pas être égal aux {0} derniers mot de passe.",
    },
    "it": {},
    "ja": {
        "invalidPasswordMinLengthMessage":
            "無効なパスワード: 最小{0}の長さが必要です。",
        "invalidPasswordMinLowerCaseCharsMessage":
            "無効なパスワード: 少なくとも{0}文字の小文字を含む必要があります。",
        "invalidPasswordMinDigitsMessage":
            "無効なパスワード: 少なくとも{0}文字の数字を含む必要があります。",
        "invalidPasswordMinUpperCaseCharsMessage":
            "無効なパスワード: 少なくとも{0}文字の大文字を含む必要があります。",
        "invalidPasswordMinSpecialCharsMessage":
            "無効なパスワード: 少なくとも{0}文字の特殊文字を含む必要があります。",
        "invalidPasswordNotUsernameMessage":
            "無効なパスワード: ユーザー名と同じパスワードは禁止されています。",
        "invalidPasswordRegexPatternMessage":
            "無効なパスワード: 正規表現パターンと一致しません。",
        "invalidPasswordHistoryMessage":
            "無効なパスワード: 最近の{0}パスワードのいずれかと同じパスワードは禁止されています。",
        "invalidPasswordBlacklistedMessage":
            "無効なパスワード: パスワードがブラックリストに含まれています。",
        "invalidPasswordGenericMessage":
            "無効なパスワード: 新しいパスワードはパスワード・ポリシーと一致しません。",
        "ldapErrorInvalidCustomFilter":
            "LDAPフィルターのカスタム設定が、「(」から開始または「)」で終了となっていません。",
        "ldapErrorConnectionTimeoutNotNumber":
            "接続タイムアウトは数字でなければなりません",
        "ldapErrorReadTimeoutNotNumber":
            "読み取りタイムアウトは数字でなければなりません",
        "ldapErrorMissingClientId":
            "レルムロール・マッピングを使用しない場合は、クライアントIDは設定内で提供される必要があります。",
        "ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType":
            "グループの継承を維持することと、UIDメンバーシップ・タイプを使用することは同時にできません。",
        "ldapErrorCantWriteOnlyForReadOnlyLdap":
            "LDAPプロバイダー・モードがWRITABLEではない場合は、write onlyを設定することはできません。",
        "ldapErrorCantWriteOnlyAndReadOnly":
            "write-onlyとread-onlyを一緒に設定することはできません。",
        "ldapErrorCantEnableStartTlsAndConnectionPooling":
            "StartTLSと接続プーリングの両方を有効にできません。",
        "clientRedirectURIsFragmentError":
            "リダイレクトURIにURIフラグメントを含めることはできません。",
        "clientRootURLFragmentError":
            "ルートURLにURLフラグメントを含めることはできません。",
        "pairwiseMalformedClientRedirectURI":
            "クライアントに無効なリダイレクトURIが含まれていました。",
        "pairwiseClientRedirectURIsMissingHost":
            "クライアントのリダイレクトURIには有効なホスト・コンポーネントが含まれている必要があります。",
        "pairwiseClientRedirectURIsMultipleHosts":
            "設定されたセレクター識別子URIがない場合は、クライアントのリダイレクトURIは複数のホスト・コンポーネントを含むことはできません。",
        "pairwiseMalformedSectorIdentifierURI":
            "不正なセレクター識別子URIです。",
        "pairwiseFailedToGetRedirectURIs":
            "セクター識別子URIからリダイレクトURIを取得できませんでした。",
        "pairwiseRedirectURIsMismatch":
            "クライアントのリダイレクトURIは、セクター識別子URIからフェッチされたリダイレクトURIと一致しません。",
    },
    "lt": {
        "invalidPasswordMinLengthMessage":
            "Per trumpas slaptažodis: mažiausias ilgis {0}.",
        "invalidPasswordMinLowerCaseCharsMessage":
            "Neteisingas slaptažodis: privaloma įvesti {0} mažąją raidę.",
        "invalidPasswordMinDigitsMessage":
            "Neteisingas slaptažodis: privaloma įvesti {0} skaitmenį.",
        "invalidPasswordMinUpperCaseCharsMessage":
            "Neteisingas slaptažodis: privaloma įvesti {0} didžiąją raidę.",
        "invalidPasswordMinSpecialCharsMessage":
            "Neteisingas slaptažodis: privaloma įvesti {0} specialų simbolį.",
        "invalidPasswordNotUsernameMessage":
            "Neteisingas slaptažodis: slaptažodis negali sutapti su naudotojo vardu.",
        "invalidPasswordRegexPatternMessage":
            "Neteisingas slaptažodis: slaptažodis netenkina regex taisyklės(ių).",
        "invalidPasswordHistoryMessage":
            "Neteisingas slaptažodis: slaptažodis negali sutapti su prieš tai buvusiais {0} slaptažodžiais.",
        "ldapErrorInvalidCustomFilter":
            'Sukonfigūruotas LDAP filtras neprasideda "(" ir nesibaigia ")" simboliais.',
        "ldapErrorMissingClientId":
            "Privaloma nurodyti kliento ID kai srities rolių susiejimas nėra nenaudojamas.",
        "ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType":
            "Grupių paveldėjimo ir UID narystės tipas kartu negali būti naudojami.",
        "ldapErrorCantWriteOnlyForReadOnlyLdap":
            "Negalima nustatyti rašymo rėžimo kuomet LDAP teikėjo rėžimas ne WRITABLE",
        "ldapErrorCantWriteOnlyAndReadOnly":
            "Negalima nustatyti tik rašyti ir tik skaityti kartu",
        "clientRedirectURIsFragmentError":
            "Nurodykite URI fragmentą, kurio negali būti peradresuojamuose URI adresuose",
        "clientRootURLFragmentError":
            "Nurodykite URL fragmentą, kurio negali būti šakniniame URL adrese",
        "pairwiseMalformedClientRedirectURI":
            "Klientas pateikė neteisingą nukreipimo nuorodą.",
        "pairwiseClientRedirectURIsMissingHost":
            "Kliento nukreipimo nuorodos privalo būti nurodytos su serverio vardo komponentu.",
        "pairwiseClientRedirectURIsMultipleHosts":
            "Kuomet nesukonfigūruotas sektoriaus identifikatoriaus URL, kliento nukreipimo nuorodos privalo talpinti ne daugiau kaip vieną skirtingą serverio vardo komponentą.",
        "pairwiseMalformedSectorIdentifierURI":
            "Neteisinga sektoriaus identifikatoriaus URI.",
        "pairwiseFailedToGetRedirectURIs":
            "Nepavyko gauti nukreipimo nuorodų iš sektoriaus identifikatoriaus URI.",
        "pairwiseRedirectURIsMismatch":
            "Kliento nukreipimo nuoroda neatitinka nukreipimo nuorodų iš sektoriaus identifikatoriaus URI.",
    },
    "nl": {
        "invalidPasswordMinLengthMessage":
            "Ongeldig wachtwoord: de minimale lengte is {0} karakters.",
        "invalidPasswordMinLowerCaseCharsMessage":
            "Ongeldig wachtwoord: het moet minstens {0} kleine letters bevatten.",
        "invalidPasswordMinDigitsMessage":
            "Ongeldig wachtwoord: het moet minstens {0} getallen bevatten.",
        "invalidPasswordMinUpperCaseCharsMessage":
            "Ongeldig wachtwoord: het moet minstens {0} hoofdletters bevatten.",
        "invalidPasswordMinSpecialCharsMessage":
            "Ongeldig wachtwoord: het moet minstens {0} speciale karakters bevatten.",
        "invalidPasswordNotUsernameMessage":
            "Ongeldig wachtwoord: het mag niet overeenkomen met de gebruikersnaam.",
        "invalidPasswordRegexPatternMessage":
            "Ongeldig wachtwoord: het voldoet niet aan het door de beheerder ingestelde patroon.",
        "invalidPasswordHistoryMessage":
            "Ongeldig wachtwoord: het mag niet overeen komen met een van de laatste {0} wachtwoorden.",
        "invalidPasswordGenericMessage":
            "Ongeldig wachtwoord: het nieuwe wachtwoord voldoet niet aan het wachtwoordbeleid.",
        "ldapErrorInvalidCustomFilter":
            'LDAP filter met aangepaste configuratie start niet met "(" of eindigt niet met ")".',
        "ldapErrorConnectionTimeoutNotNumber":
            "Verbindingstimeout moet een getal zijn",
        "ldapErrorReadTimeoutNotNumber": "Lees-timeout moet een getal zijn",
        "ldapErrorMissingClientId":
            "Client ID moet ingesteld zijn als Realm Roles Mapping niet gebruikt wordt.",
        "ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType":
            "Kan groepsovererving niet behouden bij UID-lidmaatschapstype.",
        "ldapErrorCantWriteOnlyForReadOnlyLdap":
            "Alleen-schrijven niet mogelijk als LDAP provider mode niet WRITABLE is",
        "ldapErrorCantWriteOnlyAndReadOnly":
            "Alleen-schrijven en alleen-lezen mogen niet tegelijk ingesteld zijn",
        "clientRedirectURIsFragmentError":
            "Redirect URIs mogen geen URI fragment bevatten",
        "clientRootURLFragmentError": "Root URL mag geen URL fragment bevatten",
        "pairwiseMalformedClientRedirectURI":
            "Client heeft een ongeldige redirect URI.",
        "pairwiseClientRedirectURIsMissingHost":
            "Client redirect URIs moeten een geldige host-component bevatten.",
        "pairwiseClientRedirectURIsMultipleHosts":
            "Zonder een geconfigureerde Sector Identifier URI mogen client redirect URIs niet meerdere host componenten hebben.",
        "pairwiseMalformedSectorIdentifierURI":
            "Onjuist notatie in Sector Identifier URI.",
        "pairwiseFailedToGetRedirectURIs":
            "Kon geen redirect URIs verkrijgen van de Sector Identifier URI.",
        "pairwiseRedirectURIsMismatch":
            "Client redirect URIs komen niet overeen met redict URIs ontvangen van de Sector Identifier URI.",
    },
    "no": {
        "invalidPasswordMinLengthMessage":
            "Ugyldig passord: minimum lengde {0}.",
        "invalidPasswordMinLowerCaseCharsMessage":
            "Ugyldig passord: må inneholde minst {0} små bokstaver.",
        "invalidPasswordMinDigitsMessage":
            "Ugyldig passord: må inneholde minst {0} sifre.",
        "invalidPasswordMinUpperCaseCharsMessage":
            "Ugyldig passord: må inneholde minst {0} store bokstaver.",
        "invalidPasswordMinSpecialCharsMessage":
            "Ugyldig passord: må inneholde minst {0} spesialtegn.",
        "invalidPasswordNotUsernameMessage":
            "Ugyldig passord: kan ikke være likt brukernavn.",
        "invalidPasswordRegexPatternMessage":
            "Ugyldig passord: tilfredsstiller ikke kravene for passord-mønster.",
        "invalidPasswordHistoryMessage":
            "Ugyldig passord: kan ikke være likt noen av de {0} foregående passordene.",
        "ldapErrorInvalidCustomFilter":
            'Tilpasset konfigurasjon av LDAP-filter starter ikke med "(" eller slutter ikke med ")".',
        "ldapErrorMissingClientId":
            "KlientID må være tilgjengelig i config når sikkerhetsdomenerollemapping ikke brukes.",
        "ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType":
            "Ikke mulig å bevare gruppearv og samtidig bruke UID medlemskapstype.",
        "ldapErrorCantWriteOnlyForReadOnlyLdap":
            "Kan ikke sette write-only når LDAP leverandør-modus ikke er WRITABLE",
        "ldapErrorCantWriteOnlyAndReadOnly":
            "Kan ikke sette både write-only og read-only",
    },
    "pl": {},
    "pt-BR": {
        "invalidPasswordMinLengthMessage":
            "Senha inválida: deve conter ao menos {0} caracteres.",
        "invalidPasswordMinLowerCaseCharsMessage":
            "Senha inválida: deve conter ao menos {0} caracteres minúsculos.",
        "invalidPasswordMinDigitsMessage":
            "Senha inválida: deve conter ao menos {0} digitos numéricos.",
        "invalidPasswordMinUpperCaseCharsMessage":
            "Senha inválida: deve conter ao menos {0} caracteres maiúsculos.",
        "invalidPasswordMinSpecialCharsMessage":
            "Senha inválida: deve conter ao menos {0} caracteres especiais.",
        "invalidPasswordNotUsernameMessage":
            "Senha inválida: não deve ser igual ao nome de usuário.",
        "invalidPasswordRegexPatternMessage":
            "Senha inválida: falha ao passar por padrões.",
        "invalidPasswordHistoryMessage":
            "Senha inválida: não deve ser igual às últimas {0} senhas.",
        "ldapErrorInvalidCustomFilter":
            'Filtro LDAP não inicia com "(" ou não termina com ")".',
        "ldapErrorMissingClientId":
            "ID do cliente precisa ser definido na configuração quando mapeamentos de Roles do Realm não é utilizado.",
        "ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType":
            "Não é possível preservar herança de grupos e usar tipo de associação de UID ao mesmo tempo.",
        "ldapErrorCantWriteOnlyForReadOnlyLdap":
            "Não é possível definir modo de somente escrita quando o provedor LDAP não suporta escrita",
        "ldapErrorCantWriteOnlyAndReadOnly":
            "Não é possível definir somente escrita e somente leitura ao mesmo tempo",
        "clientRedirectURIsFragmentError":
            "URIs de redirecionamento não podem conter fragmentos",
        "clientRootURLFragmentError": "URL raiz não pode conter fragmentos",
    },
    "ru": {
        "invalidPasswordMinLengthMessage":
            "Некорректный пароль: длина пароля должна быть не менее {0} символов(а).",
        "invalidPasswordMinDigitsMessage":
            "Некорректный пароль: должен содержать не менее {0} цифр(ы).",
        "invalidPasswordMinLowerCaseCharsMessage":
            "Некорректный пароль: пароль должен содержать не менее {0} символов(а) в нижнем регистре.",
        "invalidPasswordMinUpperCaseCharsMessage":
            "Некорректный пароль: пароль должен содержать не менее {0} символов(а) в верхнем регистре.",
        "invalidPasswordMinSpecialCharsMessage":
            "Некорректный пароль: пароль должен содержать не менее {0} спецсимволов(а).",
        "invalidPasswordNotUsernameMessage":
            "Некорректный пароль: пароль не должен совпадать с именем пользователя.",
        "invalidPasswordRegexPatternMessage":
            "Некорректный пароль: пароль не прошел проверку по регулярному выражению.",
        "invalidPasswordHistoryMessage":
            "Некорректный пароль: пароль не должен совпадать с последним(и) {0} паролем(ями).",
        "invalidPasswordGenericMessage":
            "Некорректный пароль: новый пароль не соответствует правилам пароля.",
        "ldapErrorInvalidCustomFilter":
            'Сконфигурированный пользователем фильтр LDAP не должен начинаться с "(" или заканчиваться на ")".',
        "ldapErrorMissingClientId":
            "Client ID должен быть настроен в конфигурации, если не используется сопоставление ролей в realm.",
        "ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType":
            "Не удалось унаследовать группу и использовать членство UID типа вместе.",
        "ldapErrorCantWriteOnlyForReadOnlyLdap":
            'Невозможно установить режим "только на запись", когда LDAP провайдер не в режиме WRITABLE',
        "ldapErrorCantWriteOnlyAndReadOnly":
            'Невозможно одновременно установить режимы "только на чтение" и "только на запись"',
        "clientRedirectURIsFragmentError":
            "URI перенаправления не должен содержать фрагмент URI",
        "clientRootURLFragmentError":
            "Корневой URL не должен содержать фрагмент URL ",
        "pairwiseMalformedClientRedirectURI":
            "Клиент содержит некорректный URI перенаправления.",
        "pairwiseClientRedirectURIsMissingHost":
            "URI перенаправления клиента должен содержать корректный компонент хоста.",
        "pairwiseClientRedirectURIsMultipleHosts":
            "Без конфигурации по части идентификатора URI, URI перенаправления клиента не может содержать несколько компонентов хоста.",
        "pairwiseMalformedSectorIdentifierURI":
            "Искаженная часть идентификатора URI.",
        "pairwiseFailedToGetRedirectURIs":
            "Не удалось получить идентификаторы URI перенаправления из части идентификатора URI.",
        "pairwiseRedirectURIsMismatch":
            "Клиент URI переадресации не соответствует URI переадресации, полученной из части идентификатора URI.",
    },
    "zh-CN": {
        "invalidPasswordMinLengthMessage": "无效的密码：最短长度 {0}.",
        "invalidPasswordMinLowerCaseCharsMessage":
            "无效的密码：至少包含 {0} 小写字母",
        "invalidPasswordMinDigitsMessage": "无效的密码：至少包含 {0} 个数字",
        "invalidPasswordMinUpperCaseCharsMessage":
            "无效的密码：最短长度 {0} 大写字母",
        "invalidPasswordMinSpecialCharsMessage":
            "无效的密码：最短长度 {0} 特殊字符",
        "invalidPasswordNotUsernameMessage": "无效的密码： 不可以与用户名相同",
        "invalidPasswordRegexPatternMessage":
            "无效的密码： 无法与正则表达式匹配",
        "invalidPasswordHistoryMessage":
            "无效的密码：不能与最后使用的 {0} 个密码相同",
        "ldapErrorInvalidCustomFilter":
            '定制的 LDAP过滤器不是以 "(" 开头或以 ")"结尾.',
        "ldapErrorConnectionTimeoutNotNumber":
            "Connection Timeout 必须是个数字",
        "ldapErrorMissingClientId":
            "当域角色映射未启用时，客户端 ID 需要指定。",
        "ldapErrorCantPreserveGroupInheritanceWithUIDMembershipType":
            "无法在使用UID成员类型的同时维护组继承属性。",
        "ldapErrorCantWriteOnlyForReadOnlyLdap":
            "当LDAP提供方不是可写模式时，无法设置只写",
        "ldapErrorCantWriteOnlyAndReadOnly": "无法同时设置只读和只写",
        "clientRedirectURIsFragmentError": "重定向URL不应包含URI片段",
        "clientRootURLFragmentError": "根URL 不应包含 URL 片段",
        "pairwiseMalformedClientRedirectURI": "客户端包含一个无效的重定向URL",
        "pairwiseClientRedirectURIsMissingHost":
            "客户端重定向URL需要有一个有效的主机",
        "pairwiseClientRedirectURIsMultipleHosts":
            "Without a configured Sector Identifier URI, client redirect URIs must not contain multiple host components.",
        "pairwiseMalformedSectorIdentifierURI":
            "Malformed Sector Identifier URI.",
        "pairwiseFailedToGetRedirectURIs": "无法从服务器获得重定向URL",
        "pairwiseRedirectURIsMismatch":
            "客户端的重定向URI与服务器端获取的URI配置不匹配。",
    },
};
/* spell-checker: enable */
