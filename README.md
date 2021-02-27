<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/109387840-eba11f80-7903-11eb-9050-db1dad883f78.png">  
</p>
<p align="center">
    <i>🔏 Keycloak theme generator for Reacts app💅</i>
    <br>
    <br>
    <img src="https://github.com/garronej/keycloak-react-theming/workflows/ci/badge.svg?branch=develop">
    <img src="https://img.shields.io/bundlephobia/minzip/keycloak-react-theming">
    <img src="https://img.shields.io/npm/dw/keycloak-react-theming">
    <img src="https://img.shields.io/npm/l/keycloak-react-theming">
</p>

# MOTIVATION

The problem: 

![keycloak_before](https://user-images.githubusercontent.com/6702424/108838381-dbbbcf80-75d3-11eb-8ae8-db41563ef9db.gif)

When we redirected to Keycloak the user suffers from a harsh context switch.
On je login/register pages the language is set back to default and the theme is different that the one on the app.  

Keycloak does offer a way to customize theses pages but it requires a lot of raw HTML/CSS hacking
to reproduce the look and feel of a specific app. Not mentioning the maintenance cost of such an endeavour.  

Wouldn't it be great if we could just design the login and register pages as if they where part of our app while
still letting Keycloak handle the heavy lifting of actually authenticating the users? 

Here is `yarn add keycloak-react-theming` for you 🍸

TODO: Insert video after.

# How to use

## Setting up the build tool

Add `keycloak-react-theming` to the dev dependencies of your project `npm install --save-dev keycloak-react-theming` or `yarn add --dev keycloak-react-theming`
then configure your `package.json` build's script to build the keycloak's theme by adding `&& build-keycloak-theme`.

Typically you will get: 

`package.json`:
```json
  "devDependencies": {
    "keycloak-react-theming": "^0.0.10"
  },
  "scripts": {
    "build": "react-scripts build && build-keycloak-theme"
  },
```

Then build your app with `yarn run build` or `npm run build`, you will be provided with instructions
about how to load the theme into Keycloak.

[![kickstart_video](https://user-images.githubusercontent.com/6702424/108877866-f146ee80-75ff-11eb-8120-003b3c5f6dd8.png)](https://youtu.be/xTz0Rj7i2v8)

## Developing your login and register pages in your React app

TODO

# How to implement context persistance

If you want dark mode preference, language and others users preferences your can do so
very easily by using [`powerhooks/useGlobalState`](https://github.com/garronej/powerhooks)

WARNING: `powerhooks` is still a work in progress.

# REQUIREMENTS

This tools assumes you are bundling your app with Webpack (tested with 4.44.2) .
It assumes there is a `build/` directory at the root of your react project directory containing a `index.html` file
and a `static/` directory generated by webpack.

**All this is defaults with [`create-react-app`](https://create-react-app.dev)** (tested with 4.0.3=)

- For building the theme: `mvn` (Maven) must be installed
- For development, (testing the theme in a local container ): `rm`, `mkdir`, `wget`, `unzip` are assumed to be available.

NOTE: This build tool has only be tested on MacOS.

# API Reference 

## The build tool 

Part of the lib that runs with node, at build time.

- `npx build-keycloak-theme`: Builds the theme, the CWD is assumed to be the root of your react project.
- `npx download-sample-keycloak-themes`: Downloads the keycloak default themes (for development purposes)

## The fronted lib ( imported into your react 

Part of the lib that you import in your react project and runs on the browser.

**TODO**
