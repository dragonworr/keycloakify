### **4.2.6** (2021-11-08)  
  
- Fix deepClone so we can overwrite with undefined in when we mock kcContext    
  
### **4.2.5** (2021-11-07)  
  
- Better debugging experience with user profile    
  
### **4.2.4** (2021-11-01)  
  
- Better autoComplete typings    
  
### **4.2.3** (2021-11-01)  
  
- Make it more easy to understand that error in the log are expected    
  
### **4.2.2** (2021-10-27)  
  
- Replace 'path' by 'browserify-path' #47    
  
### **4.2.1** (2021-10-26)  
  
- useFormValidationSlice: update when params have changed  
- Explains that the password can't be validated    
  
## **4.2.0** (2021-10-26)  
  
- Export types definitions for Attribue and Validator    
  
## **4.1.0** (2021-10-26)  
  
- Document what's new in v4    
  
# **4.0.0** (2021-10-26)  
  
- fix RegisterUserProfile password confirmation field  
- Much better support for frontend field validation  
- Fix css injection order  
- Makes the download output predictable. This fixes the case where GitHub redirects and wget was trying to download a filename called "15.0.2", and then unzip wouldn't pick it up.
Changes wget to curl because curl is awesome. -L is to follow the GitHub redirects.  
- Remove duplicates    
  
### **3.0.2** (2021-10-18)  
  
- Scan deeper to retreive user attribute    
  
### **3.0.1** (2021-10-17)  
  
- Add client.description in type kcContext type def    
  
# **3.0.0** (2021-10-16)  
  
  
  
### **2.5.3** (2021-10-16)  
  
  
  
### **2.5.2** (2021-10-13)  
  
  
  
### **2.5.1** (2021-10-13)  
  
- Update tss-react    
  
## **2.5.0** (2021-10-12)  
  
- register-user-profile.ftl tested working  
- Make kcMessage more easily hackable  
- fix useKcMessage  
- Implement and type validators  
- Remove syntax error in ftl and make it more directly debugable  
- Support register-user-profile.ftl    
  
## **2.4.0** (2021-10-08)  
  
-  #38: Implement messagesPerField existsError and get    
  
## **2.3.0** (2021-10-07)  
  
- #20: Support advancedMsg    
  
## **2.2.0** (2021-10-07)  
  
- Feat scrip: download-builtin-keycloak-theme for downloading any version of the builtin themes  
- Use the latest version of keycloak for testing  
- Test locally with 15.0.2 instead of 11.0.3    
  
## **2.1.0** (2021-10-06)  
  
- Support Hungarian and Danish (use Keycloak 15 language resources)    
  
### **2.0.20** (2021-10-05)  
  
- Update README.md    
  
### **2.0.19** (2021-09-17)  
  
- Fix kcContext type definitions    
  
### **2.0.18** (2021-09-14)  
  
  
  
### **2.0.17** (2021-09-14)  
  
  
  
### **2.0.16** (2021-09-12)  
  
- Add explaination about errors in logs    
  
### **2.0.15** (2021-08-31)  
  
- Update tss-react    
  
### **2.0.14** (2021-08-20)  
  
- Update tss-react    
  
### **2.0.13** (2021-08-04)  
  
- Merge pull request #28 from marcmrf/main

fix(mvn): scoped packages compatibility  
- fix(mvn): scoped packages compatibility    
  
### **2.0.12** (2021-07-28)  
  
- Merge pull request #27 from jchn-codes/patch-1

add maven to requirements  
- add maven to requirements  
- Add #bluehats in the keyworks    
  
### **2.0.11** (2021-07-21)  
  
- Spaces in file path #22  
- uptdate dependnecies  
- Inport specific powerhooks files to reduce bundle size    
  
### **2.0.10** (2021-07-16)  
  
- Update dependencies    
  
### **2.0.9** (2021-07-14)  
  
- Fix #21    
  
### **2.0.8** (2021-07-12)  
  
- Fix previous release  
- #20: Add def for clientId and name on kcContext.client    
  
### **2.0.6** (2021-07-08)  
  
- Merge pull request #18 from asashay/add-custom-props-to-theme-properties

Add possibility to add custom properties to theme.properties file  
- add possibility to add custom properties to theme.properties file    
  
### **2.0.5** (2021-07-05)  
  
- Fix broken url for big stylesheet #16    
  
### **2.0.4** (2021-07-03)  
  
- Fix: #7    
  
### **2.0.3** (2021-06-30)  
  
- Escape double quote in ftl to js conversion #15  
- Update readme    
  
### **2.0.2** (2021-06-28)  
  
- Updagte README for implementing non incuded pages    
  
### **2.0.1** (2021-06-28)  
  
- Update documentation for v2    
  
# **2.0.0** (2021-06-28)  
  
- Fix last bugs before relasing v2  
- Implement a mechanism to overload kcContext  
- Give the option in template to pull the default assets or not  
- Enable possiblity to support custom pages (without forking keycloakify)  
- Implement a getter for kcContext  
- Update README.md    
  
# **2.0.0** (2021-06-28)  
  
- Fix last bugs before relasing v2  
- Implement a mechanism to overload kcContext  
- Give the option in template to pull the default assets or not  
- Enable possiblity to support custom pages (without forking keycloakify)  
- Implement a getter for kcContext  
- Update README.md    
  
### **1.2.1** (2021-06-22)  
  
- Remove unessesary log    
  
## **1.2.0** (2021-06-22)  
  
- Generate kcContext automatically :rocket:    
  
### **1.1.6** (2021-06-21)  
  
- Fix: Alert messages sometimes includes HTML that is not rendered  
- Update dist    
  
### **1.1.5** (2021-06-15)  
  
- #11: Provide socials in the register    
  
### **1.1.4** (2021-06-15)  
  
- Merge pull request #12 from InseeFrLab/email-typo

Fix typo on email  
- Fix typo on email    
  
### **1.1.3** (2021-06-14)  
  
- Add missing key in Login for providers    
  
### **1.1.2** (2021-06-14)  
  
  
  
### **1.1.1** (2021-06-14)  
  
  
  
## **1.1.0** (2021-06-14)  
  
- Add login-idp-link-confirm.ftl  
- Fix login-update-profile.ftl  
- Add login-update-profile.ftl page  
- Fix default background bug  
- Remove unused 'markdown' dependency  
- Fix warning related to powerhooks_useGlobalState_kcLanguageTag  
- Update README.md    
  
### **1.0.4** (2021-05-28)  
  
- Instructions for custom themes with custom components    
  
### **1.0.3** (2021-05-23)  
  
- Instuction about how to integrate with non CRA projects  
- Add mention to awesome list    
  
### **1.0.2** (2021-05-01)  
  
  
  
### **1.0.1** (2021-05-01)  
  
- Fix: LoginOtp (and not otc)    
  
# **1.0.0** (2021-05-01)  
  
- #4: Guide for implementing a missing page  
- Support OTP #4    
  
### **0.4.4** (2021-04-29)  
  
- Fix previous release    
  
### **0.4.3** (2021-04-29)  
  
- Add infos about the plugin that defines authorizedMailDomains    
  
### **0.4.2** (2021-04-29)  
  
- Client side validation of allowed email domains  
- Support email whitlisting  
- Restore kickstart video in the readme  
- Update README.md  
- Update README.md  
- Important readme update    
  
### **0.4.1** (2021-04-11)  
  
- Quietly re-introduce --external-assets  
- Give example of customization    
  
## **0.4.0** (2021-04-09)  
  
- Acual support of Therms of services    
  
### **0.3.24** (2021-04-08)  
  
- Add missing dependency: markdown    
  
### **0.3.23** (2021-04-08)  
  
- Allow to lazily load therms    
  
### **0.3.22** (2021-04-08)  
  
- update powerhooks  
- Support terms and condition  
- Fix info.ftl  
- For useKcMessage we prefer returning callbacks with a changing references    
  
### **0.3.21** (2021-04-04)  
  
- Update powerhooks    
  
### **0.3.20** (2021-04-01)  
  
- Always catch freemarker errors    
  
### **0.3.19** (2021-04-01)  
  
- Fix previous release    
  
### **0.3.18** (2021-04-01)  
  
- Fix error.ftt, Adopt best effort strategy to convert ftl values into JS    
  
### **0.3.17** (2021-03-29)  
  
- Use push instead of replace in keycloak-js adapter to enable going back    
  
### **0.3.15** (2021-03-28)  
  
- Remove all reference to --external-assets, broken feature    
  
### **0.3.14** (2021-03-28)  
  
- Fix standalone mode: imports from js    
  
### **0.3.13** (2021-03-26)  
  
  
  
### **0.3.12** (2021-03-26)  
  
- Fix mocksContext    
  
### **0.3.11** (2021-03-26)  
  
- Fix previous build, improve README    
  
### **0.3.10** (2021-03-26)  
  
- Handle <style> tag, improve documentation    
  
### **0.3.9** (2021-03-25)  
  
- Update readme  
- Document  --external-assets  
- Update README.md  
- Update README.md  
- Update README.md    
  
### **0.3.8** (2021-03-22)  
  
- Make standalone mode the default    
  
### **0.3.7** (2021-03-22)  
  
- (test) external asset mode by default    
  
### **0.3.6** (2021-03-22)  
  
- Fix previous release    
  
### **0.3.5** (2021-03-22)  
  
- support homepage with urlPath    
  
### **0.3.4** (2021-03-22)  
  
- Bugfix: Import assets from CSS    
  
### **0.3.3** (2021-03-22)  
  
- Fix submit not receving correct text    
  
### **0.3.2** (2021-03-21)  
  
- Fix broken previous release    
  
### **0.3.1** (2021-03-21)  
  
- kcHeaderClass can be updated after initial mount    
  
## **0.3.0** (2021-03-20)  
  
- Bump version  
- Feat: Cary over states using URL search params  
- Bugfix: with kcHtmlClass    
  
### **0.2.10** (2021-03-19)  
  
- Remove dependency to denoify    
  
### **0.2.9** (2021-03-19)  
  
- Update deps and CI workflow    
  
### **0.2.8** (2021-03-19)  
  
- Bugfix: keycloak_build that grow and grow in size  
- Add disclaimer about maitainment strategy  
- Add a note for tested version support    
  
### **0.2.7** (2021-03-13)  
  
- Bump version  
- Update README.md  
- Update README.md    
  
### **0.2.6** (2021-03-10)  
  
- Fix generated gitignore    
  
### **0.2.5** (2021-03-10)  
  
- Fix generated .gitignore    
  
### **0.2.4** (2021-03-10)  
  
- Update README.md    
  
### **0.2.3** (2021-03-09)  
  
- fix gitignore generation    
  
### **0.2.2** (2021-03-08)  
  
- Add table of content  
- Update README.md  
- Update README.md    
  
## **0.2.1** (2021-03-08)  
  
- Update ci.yaml  
- Update readme  
- Update readme  
- update deps  
- Update readme  
- Add all mocks for testing  
- many small fixes    
  
### **0.1.6** (2021-03-07)  
  
- Fix Turkish    
  
### **0.1.5** (2021-03-07)  
  
- Fix getKcLanguageLabel    
  
### **0.1.4** (2021-03-07)  
  
  
  
### **0.1.3** (2021-03-07)  
  
- Implement LoginVerifyEmail  
- Implement login-reset-password.ftl    
  
### **0.1.2** (2021-03-07)  
  
- Fix build  
- Fix build    
  
### **0.1.1** (2021-03-06)  
  
- Implement Error page  
- rename pageBasename by pageId  
- Implement reactive programing for language switching  
- Add Info page, refactor    
  
## **0.1.0** (2021-03-05)  
  
- Rename keycloakify    
  
### **0.0.33** (2021-03-05)  
  
- Fix syncronization with non react pages    
  
### **0.0.32** (2021-03-05)  
  
- bump version  
- Add log to tell when we are using react  
- Fix missing parentesis    
  
### **0.0.31** (2021-03-05)  
  
- Fix typo  
- Fix register page 500    
  
### **0.0.30** (2021-03-05)  
  
- Edit language statistique    
  
### **0.0.30** (2021-03-05)  
  
- avoid escaping urls  
- Use default value instead of value  
- Fix double single quote problem in messages  
- Fix typo  
- Fix non editable username  
- Fix some bugs  
- Fix Object.deepAssign  
- Make the dongle to download smaller  
- Split kcContext among pages  
- Implement register    
  
### **0.0.29** (2021-03-04)  
  
- Fix build  
- Fix i18n  
- Login appear to be working now  
- closer but not there yet    
  
### **0.0.28** (2021-03-03)  
  
- fix build  
- There is no reason not to let use translations outside of keycloak    
  
### **0.0.27** (2021-03-02)  
  
- Implement entrypoint    
  
### **0.0.26** (2021-03-02)  
  
- Login page implemented  
- Implement login  
- remove unesseary log    
  
### **0.0.25** (2021-03-02)  
  
- Fix build and reduce size  
- Implement the template    
  
### **0.0.24** (2021-03-01)  
  
- update  
- update  
- update    
  
### **0.0.23** (2021-03-01)  
  
- update    
  
### **0.0.23** (2021-03-01)  
  
- update  
- update    
  
### **0.0.23** (2021-03-01)  
  
- update  
- update    
  
### **0.0.23** (2021-03-01)  
  
- update  
- Handle formatting in translation function    
  
### **0.0.22** (2021-02-28)  
  
- Split page messages    
  
### **0.0.21** (2021-02-28)  
  
- Restore yarn file  
- Multiple fixes  
- Update deps  
- Update deps  
- includes translations  
- Update README.md  
- improve docs  
- update  
- Update README.md  
- update  
- update  
- update  
- update    
  
### **0.0.20** (2021-02-27)  
  
- update  
- update    
  
### **0.0.19** (2021-02-27)  
  
- update  
- update    
  
### **0.0.18** (2021-02-23)  
  
- Bump version number  
- Moving on with implementation of the lib  
- Update readme  
- Readme eddit  
- Fixing video link    
  
### **0.0.16** (2021-02-23)  
  
- Bump version  
- Give test container credentials    
  
### **0.0.14** (2021-02-23)  
  
- Bump version number  
- enable the docker container to be run from the root of the react project    
  
### **0.0.13** (2021-02-23)  
  
- bump version    
  
### **0.0.12** (2021-02-23)  
  
- update readme    
  
### **0.0.11** (2021-02-23)  
  
- Add documentation    
  
### **0.0.10** (2021-02-23)  
  
- Remove extra closing bracket    
  
### **0.0.9** (2021-02-22)  
  
- fix container startup script  
- minor update    
  
### **0.0.8** (2021-02-21)  
  
- Include theme properties    
  
### **0.0.7** (2021-02-21)  
  
- fix build  
- Fix bundle    
  
### **0.0.6** (2021-02-21)  
  
- Include missing files in the release bundle    
  
### **0.0.5** (2021-02-21)  
  
- Bump version number  
- Make the install faster    
  
### **0.0.4** (2021-02-21)  
  
- Fix script visibility    
  
### **0.0.3** (2021-02-21)  
  
- Do not run tests on window  
- Add script for downloading base themes  
- Generate debug files to be able to test the container  
- Fix many little bugs  
- refactor  
- Almoste there  
- Things are starting to take form  
- Seems to be working  
- First draft  
- Remove eslint and prettyer    
  
### **0.0.2** (2021-02-20)  
  
- Update package.json    
  
