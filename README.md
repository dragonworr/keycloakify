<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/109387840-eba11f80-7903-11eb-9050-db1dad883f78.png">  
</p>
<p align="center">
    <i>🔏  Create Keycloak themes using React 🔏</i>
    <br>
    <br>
    <img src="https://github.com/garronej/keycloakify/workflows/ci/badge.svg?branch=develop">
    <img src="https://img.shields.io/bundlephobia/minzip/keycloakify">
    <img src="https://img.shields.io/npm/dw/keycloakify">
    <img src="https://img.shields.io/npm/l/keycloakify">
    <img src="https://camo.githubusercontent.com/0f9fcc0ac1b8617ad4989364f60f78b2d6b32985ad6a508f215f14d8f897b8d3/68747470733a2f2f62616467656e2e6e65742f62616467652f547970655363726970742f7374726963742532302546302539462539322541412f626c7565">
    <a href="https://github.com/thomasdarimont/awesome-keycloak">
        <img src="https://awesome.re/mentioned-badge.svg"/>
    </a>
</p>

<p align="center">
    <i>Ultimately this build tool generates a Keycloak theme</i>
    <img src="https://user-images.githubusercontent.com/6702424/110260457-a1c3d380-7fac-11eb-853a-80459b65626b.png">
</p>

**NEW in v2**  
- It's now possible to implement custom `.ftl` pages.
- Support for Keycloak plugins that introduce non standard ftl values. 
  (Like for example [this plugin](https://github.com/micedre/keycloak-mail-whitelisting) that define `authorizedMailDomains` in `register.ftl`).
# Motivations

Keycloak provides [theme support](https://www.keycloak.org/docs/latest/server_development/#_themes) for web pages. This allows customizing the look and feel of end-user facing pages so they can be integrated with your applications.
It involves, however, a lot of raw JS/CSS/[FTL]() hacking, and bundling the theme is not exactly straightforward.

Beyond that, if you use Keycloak for a specific app you want your login page to be tightly integrated with it.
Ideally, you don't want the user to notice when he is being redirected away. 

Trying to reproduce the look and feel of a specific app in another stack is not an easy task not to mention
the cheer amount of maintenance that it involves.

<p align="center">
    <i>Without keycloakify, users suffers from a harsh context switch, no fronted form pre-validation</i><br>
    <img src="https://user-images.githubusercontent.com/6702424/134997335-a28b4a57-0884-47ec-9341-a0e49f835c4d.gif">
</p>

Wouldn't it be great if we could just design the login and register pages as if they were part of our app?  
Here is `keycloakify` for you 🍸

<p align="center">
    <i> <a href="https://datalab.sspcloud.fr">With keycloakify:</a> </i> 
    <br>
    <img src="https://user-images.githubusercontent.com/6702424/114332075-c5e37900-9b45-11eb-910b-48a05b3d90d9.gif">
</p>  

**TL;DR**: [Here](https://github.com/garronej/keycloakify-demo-app) is a Hello World React project with Keycloakify set up.  

If you already have a Keycloak custom theme, it can be easily ported to Keycloakify.

---


- [Motivations](#motivations)
- [Requirements](#requirements)
  - [My framework doesn’t seem to be supported, what can I do?](#my-framework-doesnt-seem-to-be-supported-what-can-i-do)
- [How to use](#how-to-use)
  - [Setting up the build tool](#setting-up-the-build-tool)
    - [Changing just the look of the default Keycloak theme](#changing-just-the-look-of-the-default-keycloak-theme)
    - [Advanced pages configuration](#advanced-pages-configuration)
    - [Hot reload](#hot-reload)
  - [Enable loading in a blink of an eye of login pages ⚡ (--external-assets)](#enable-loading-in-a-blink-of-an-eye-of-login-pages----external-assets)
- [Support for Terms and conditions](#support-for-terms-and-conditions)
- [Some pages still have the default theme. Why?](#some-pages-still-have-the-default-theme-why)
- [GitHub Actions](#github-actions)
- [Limitations](#limitations)
  - [`process.env.PUBLIC_URL` not supported.](#processenvpublic_url-not-supported)
  - [`@font-face` importing fonts from the `src/` dir](#font-face-importing-fonts-from-thesrc-dir)
    - [Example of setup that **won't** work](#example-of-setup-that-wont-work)
    - [Possible workarounds](#possible-workarounds)
- [Implement context persistence (optional)](#implement-context-persistence-optional)
- [Kickstart video](#kickstart-video)
- [About the errors related to `objectToJson` in Keycloak logs.](#about-the-errors-related-to-objecttojson-in-keycloak-logs)
- [Email domain whitelist](#email-domain-whitelist)

# Requirements 

Tested with the following Keycloak versions: 
- [11.0.3](https://hub.docker.com/layers/jboss/keycloak/11.0.3/images/sha256-4438f1e51c1369371cb807dffa526e1208086b3ebb9cab009830a178de949782?context=explore)  
- [12.0.4](https://hub.docker.com/layers/jboss/keycloak/12.0.4/images/sha256-67e0c88e69bd0c7aef972c40bdeb558a974013a28b3668ca790ed63a04d70584?context=explore)  
- Tests ongoing with [14.0.0](https://hub.docker.com/layers/jboss/keycloak/14.0.0/images/sha256-ca713e87ad163da71ab329010de2464a41ff030a25ae0aef15c1c290252f3d7f?context=explore) 

This tool will be maintained to stay compatible with Keycloak v11 and up, however, the default pages you will get 
(before you customize it) will always be the ones of Keycloak v11.

This tool assumes you are bundling your app with Webpack (tested with 4.44.2) .
It assumes there is a `build/` directory at the root of your react project directory containing a `index.html` file
and a `build/static/` directory generated by webpack. 
For more information see [this issue](https://github.com/InseeFrLab/keycloakify/issues/5#issuecomment-832296432)

**All this is defaults with [`create-react-app`](https://create-react-app.dev)** (tested with 4.0.3)

- `mvn` ([Maven](https://maven.apache.org/)), `rm`, `mkdir`, `wget`, `unzip` are assumed to be available.
- `docker` must be up and running when running `yarn keycloak`.

On Windows you'll have to use [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

## My framework doesn’t seem to be supported, what can I do?  

Currently Keycloakify is only compatible with `create-react-app` apps.
It doesn’t mean that you can't use Keycloakify if you are using Next.js, Express or any other 
framework that involves SSR but your Keycloak theme will need to be a standalone project.  
Find specific instructions about how to get started [**here**](https://github.com/garronej/keycloakify-demo-app#keycloak-theme-only).  

To share your styles between your main app and your login pages you will need to externalize your design system by making it a
separate module. Checkout [ts_ci](https://github.com/garronej/ts_ci), it can help with that.
# How to use
## Setting up the build tool

```bash
yarn add keycloakify
```

[`package.json`](https://github.com/garronej/keycloakify-demo-app/blob/main/package.json)
```json
"scripts": {
    "keycloak": "yarn build && build-keycloak-theme",
}
```

```bash
yarn keycloak # generates keycloak-theme.jar
```

On the console will be printed all the instructions about how to load the generated theme in Keycloak

### Changing just the look of the default Keycloak theme

The first approach is to only customize the style of the default Keycloak login by providing
your own class names.

If you have created a new React project specifically to create a Keycloak theme and nothing else then
your index should look something like:  

`src/index.tsx`
```tsx
import { App } from "./<wherever>/App";
import { 
  KcApp, 
  defaultKcProps, 
  getKcContext
} from "keycloakify";
import { css } from "tss-react/@emotion/css";

const { kcContext } = getKcContext();

const myClassName = css({ "color": "red" });

reactDom.render(
        <KcApp 
            kcContext={kcContext} 
            {...{
                ...defaultKcProps,
                "kcHeaderWrapperClass": myClassName
            }} 
        />
    document.getElementById("root")
);
```

If you share a unique project for your app and the Keycloak theme, your index should look
more like this: 

`src/index.tsx`
```tsx
import { App } from "./<wherever>/App";
import { 
  KcApp, 
  defaultKcProps, 
  getKcContext
} from "keycloakify";
import { css } from "tss-react/@emotion/css";

const { kcContext } = getKcContext();

const myClassName = css({ "color": "red" });

reactDom.render(
    // Unless the app is currently being served by Keycloak 
    // kcContext is undefined.
    kcContext !== undefined ? 
        <KcApp 
            kcContext={kcContext} 
            {...{
                ...defaultKcProps,
                "kcHeaderWrapperClass": myClassName
            }} 
        /> :
        <App />, // Your actual app
    document.getElementById("root")
);
```


<p align="center">
    <i>result:</i></br>
    <img src="https://user-images.githubusercontent.com/6702424/114326299-6892fc00-9b34-11eb-8d75-85696e55458f.png">
</p>

Example of a customization using only CSS: [here](https://github.com/InseeFrLab/onyxia-ui/blob/012639d62327a9a56be80c46e32c32c9497b82db/src/app/components/KcApp.tsx) 
(the [index.tsx](https://github.com/InseeFrLab/onyxia-ui/blob/012639d62327a9a56be80c46e32c32c9497b82db/src/app/index.tsx#L89-L94) )
and the result you can expect: 

<p align="center">
    <i> <a href="https://datalab.sspcloud.fr">Customization using only CSS:</a> </i> 
    <br>
    <img src="https://github.com/InseeFrLab/keycloakify/releases/download/v0.3.8/keycloakify_after.gif">
</p>

### Advanced pages configuration

If you want to go beyond only customizing the CSS you can re-implement some of the 
pages or even add new ones. 

If you want to go this way checkout the demo setup provided [here](https://github.com/garronej/keycloakify-demo-app/tree/look_and_feel).
If you prefer a real life example you can checkout [onyxia-web's source](https://github.com/InseeFrLab/onyxia-web/tree/main/src/app/components/KcApp). 
The web app is in production [here](https://datalab.sspcloud.fr).

Main takeaways are:
- You must declare your custom pages in the package.json. [example](https://github.com/garronej/keycloakify-demo-app/blob/4eb2a9f63e9823e653b2d439495bda55e5ecc134/package.json#L17-L22)
- (TS only) You must declare theses page in the type argument of the getter 
  function for the `kcContext` in order to have the correct typings. [example](https://github.com/garronej/keycloakify-demo-app/blob/4eb2a9f63e9823e653b2d439495bda55e5ecc134/src/KcApp/kcContext.ts#L16-L21)
- (TS only) If you use Keycloak plugins that defines non standard `.ftl` values
  (Like for example [this plugin](https://github.com/micedre/keycloak-mail-whitelisting) 
  that define `authorizedMailDomains` in `register.ftl`) you should 
  declare theses value to get the type. [example](https://github.com/garronej/keycloakify-demo-app/blob/4eb2a9f63e9823e653b2d439495bda55e5ecc134/src/KcApp/kcContext.ts#L6-L13)
- You should provide sample data for all the non standard value if you want to be able
  to debug the page outside of keycloak. [example](https://github.com/garronej/keycloakify-demo-app/blob/4eb2a9f63e9823e653b2d439495bda55e5ecc134/src/KcApp/kcContext.ts#L28-L43)

WARNING: If you chose to go this way use:
```json
"dependencies": {
    "keycloakify": "~X.Y.Z"
}
```
in your `package.json` instead of `^X.Y.Z`. A minor update of Keycloakify might break your app.

### Hot reload

Rebuild the theme each time you make a change to see the result is not practical.
If you want to test your login screens outside of Keycloak you can mock a given `kcContext`: 

```tsx
import {
    KcApp,
    defaultKcProps,
    getKcContext
} from "keycloakify";

const { kcContext } = getKcContext({
    "mockPageId": "login.ftl"
});

reactDom.render(
        <KcApp 
            kcContext={kcContextMocks.kcLoginContext}
            {...defaultKcProps} 
        />
    document.getElementById("root")
);
```

Then `yarn start`, you will see your login page.

Checkout [this concrete example](https://github.com/garronej/keycloakify-demo-app/blob/main/src/index.tsx)

## Enable loading in a blink of an eye of login pages ⚡ (--external-assets)

By default the theme generated is standalone. Meaning that when your users
reach the login pages all scripts, images and stylesheet are downloaded from the Keycloak server.  
If you are specifically building a theme to integrate with an app or a website that allows users
to first browse unauthenticated before logging in, you will get a significant 
performance boost if you jump through those hoops:

- Provide the url of your app in the `homepage` field of package.json. [ex](https://github.com/garronej/keycloakify-demo-app/blob/7847cc70ef374ab26a6cc7953461cf25603e9a6d/package.json#L2)
- Build the theme using `npx build-keycloak-theme --external-assets` [ex](https://github.com/garronej/keycloakify-demo-app/blob/7847cc70ef374ab26a6cc7953461cf25603e9a6d/.github/workflows/ci.yaml#L21)
- Enable [long-term assets caching](https://create-react-app.dev/docs/production-build/#static-file-caching) on the server hosting your app.
- Make sure not to build your app and the keycloak theme separately
  and remember to update the Keycloak theme every time you update your app.
- Be mindful that if your app is down your login pages are down as well.

Checkout a complete setup [here](https://github.com/garronej/keycloakify-demo-app#about-keycloakify)

# Support for Terms and conditions

[Many organizations have a requirement that when a new user logs in for the first time, they need to agree to the terms and conditions of the website.](https://www.keycloak.org/docs/4.8/server_admin/#terms-and-conditions).

First you need to enable the required action on the Keycloak server admin console:  
![image](https://user-images.githubusercontent.com/6702424/114280501-dad2e600-9a39-11eb-9c39-a225572dd38a.png)

Then to load your own therms of services using [like this](https://github.com/garronej/keycloakify-demo-app/blob/8168c928a66605f2464f9bd28a4dc85fb0a231f9/src/index.tsx#L42-L66).

# Some pages still have the default theme. Why?

This project only support out of the box the most common user facing pages of Keycloak login.  
[Here](https://user-images.githubusercontent.com/6702424/116787906-227fe700-aaa7-11eb-92ee-22e7673717c2.png) is the complete list of pages (you get them after running `yarn test`)
and [here](https://github.com/InseeFrLab/keycloakify/tree/main/src/lib/components) are the pages currently implemented by this module.  
If you need to customize pages that are not supported yet or if you need to implement some non standard `.ftl` pages please refer to [Advanced pages configuration](#advanced-pages-configuration).

# GitHub Actions

![image](https://user-images.githubusercontent.com/6702424/114286938-47aea600-9a63-11eb-936e-17159e8826e8.png)

[Here is a demo repo](https://github.com/garronej/keycloakify-demo-app) to show how to automate
the building and publishing of the theme (the .jar file).
# Limitations
## `process.env.PUBLIC_URL` not supported.

You won't be able to [import things from your public directory **in your JavaScript code**](https://create-react-app.dev/docs/using-the-public-folder/#adding-assets-outside-of-the-module-system). 
(This isn't recommended anyway).



## `@font-face` importing fonts from the `src/` dir

If you are building the theme with [--external-assets](#enable-loading-in-a-blink-of-a-eye-of-login-pages-) 
this limitation doesn't apply, you can import fonts however you see fit.

### Example of setup that **won't** work 

- We have a `fonts/` directory in `src/`
- We import the font like this [`src: url("/fonts/my-font.woff2") format("woff2");`](https://github.com/garronej/keycloakify-demo-app/blob/07d54a3012ef354ee12b1374c6f7ad1cb125d56b/src/fonts.scss#L4) in a `.scss` a file.  

### Possible workarounds  

- Use [`--external-assets`](#enable-loading-in-a-blink-of-a-eye-of-login-pages-).
- If it is possible, use Google Fonts or any other font provider.
- If you want to host your font recommended approach is to move your fonts into the `public` 
directory and to place your `@font-face` statements in the `public/index.html`.  
Example [here](https://github.com/InseeFrLab/onyxia-ui/blob/0e3a04610cfe872ca71dad59e05ced8f785dee4b/public/index.html#L6-L51).  
- You can also [use non relative url](https://github.com/garronej/keycloakify-demo-app/blob/2de8a9eb6f5de9c94f9cd3991faad0377e63268c/src/fonts.scss#L16) but don't forget [`Access-Control-Allow-Origin`](https://github.com/garronej/keycloakify-demo-app/blob/2de8a9eb6f5de9c94f9cd3991faad0377e63268c/nginx.conf#L17-L19).

# Implement context persistence (optional)

If, before logging in, a user has selected a specific language 
you don't want it to be reset to default when the user gets redirected to
the login or register pages.  
  
Same goes for the dark mode, you don't want, if the user had it enabled
to show the login page with light themes.  
  
The problem is that you are probably using `localStorage` to persist theses values across
reload but, as the Keycloak pages are not served on the same domain that the rest of your
app you won't be able to carry over states using `localStorage`.  

The only reliable solution is to inject parameters into the URL before
redirecting to Keycloak. We integrate with 
[`keycloak-js`](https://github.com/keycloak/keycloak-documentation/blob/master/securing_apps/topics/oidc/javascript-adapter.adoc), 
by providing you a way to tell `keycloak-js` that you would like to inject
some search parameters before redirecting.  

The method also works with [`@react-keycloak/web`](https://www.npmjs.com/package/@react-keycloak/web) (use the `initOptions`).

You can implement your own mechanism to pass the states in the URL and
restore it on the other side but we recommend using `powerhooks/useGlobalState`
from the library [`powerhooks`](https://www.powerhooks.dev) that provide an elegant
way to handle states such as `isDarkModeEnabled` or `selectedLanguage`.

Let's modify [the example](https://github.com/keycloak/keycloak-documentation/blob/master/securing_apps/topics/oidc/javascript-adapter.adoc) from the official `keycloak-js` documentation to
enables the states of `useGlobalStates` to be injected in the URL before redirecting.  
Note that the states are automatically restored on the other side by `powerhooks`

```typescript
import keycloak_js from "keycloak-js";
import { injectGlobalStatesInSearchParams } from "powerhooks/useGlobalState";
import { createKeycloakAdapter } from "keycloakify";

//...

const keycloakInstance = keycloak_js({
    "url": "http://keycloak-server/auth",
    "realm": "myrealm",
    "clientId": "myapp"
});

keycloakInstance.init({
    "onLoad": 'check-sso',
    "silentCheckSsoRedirectUri": window.location.origin + "/silent-check-sso.html",
    "adapter": createKeycloakAdapter({
        "transformUrlBeforeRedirect": injectGlobalStatesInSearchParams,
        keycloakInstance
    })
});

//...
```

If you really want to go the extra miles and avoid having the white
flash of the blank html before the js bundle have been evaluated
[here is a snippet](https://github.com/InseeFrLab/onyxia-ui/blob/a77eb502870cfe6878edd0d956c646d28746d053/public/index.html#L5-L54) that you can place in your `public/index.html` if you are using `powerhooks/useGlobalState`.

# Kickstart video

*NOTE: keycloak-react-theming was renamed keycloakify since this video was recorded*
[![kickstart_video](https://user-images.githubusercontent.com/6702424/108877866-f146ee80-75ff-11eb-8120-003b3c5f6dd8.png)](https://youtu.be/xTz0Rj7i2v8)

# About the errors related to `objectToJson` in Keycloak logs.  

The logs of your keycloak server will always show this kind of errors every time a client request a page:  
```log
FTL stack trace ("~" means nesting-related):
        - Failed at: #local value = object[key]  [in template "login.ftl" in macro "objectToJson" at line 70, column 21]
        - Reached through: @compress  [in template "login.ftl" in macro "objectToJson" at line 36, column 5]
        - Reached through: @objectToJson object=value depth=(dep...  [in template "login.ftl" in macro "objectToJson" at line 81, column 27]
        - Reached through: @compress  [in template "login.ftl" in macro "objectToJson" at line 36, column 5]
        - Reached through: @objectToJson object=(.data_model) de...  [in template "login.ftl" at line 163, column 43]
```
Theses are expected and can be safely ignored.  

To [converts the `.ftl` values into a JavaScript object](https://github.com/InseeFrLab/keycloakify/blob/main/src/bin/build-keycloak-theme/generateFtl/common.ftl) 
without making assumptions on the `.data_model` we have to do things that throws.  
It's all-right though because every statement that can fail is inside an `<#attempt><#recorver>` block but it results in errors being printed to the logs.

# Email domain whitelist

If you want to restrict the emails domain that can register, you can use [this plugin](https://github.com/micedre/keycloak-mail-whitelisting) 
and `kcRegisterContext["authorizedMailDomains"]` to validate on.
