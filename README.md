# Low Starter Kit

A front-end template that helps you build fast, modern mobile web apps.

## Prerequisites

### [Node.js](https://nodejs.org)

Bring up a terminal and type `node --version`.
Node should respond with a version at or above 0.10.x.
If you require Node, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

### [Gulp](http://gulpjs.com)

Bring up a terminal and type `gulp --version`.
If Gulp is installed it should return a version number at or above 3.9.x.
If you need to install/upgrade Gulp, open up a terminal and type in the following:

```sh
$ npm install --global gulp
$ npm install -g gulp-cli
```

_This will install Gulp globally. Depending on your user account, you may need to [configure your system](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) to install packages globally without administrative privileges._

### Local dependencies

Next, install the local dependencies starter requires:

```sh
$ npm install
```

Watch For Changes & Automatically Refresh Across Devices

```sh
$ gulp
```

Build production files

```sh
$ gulp build
```

## 3rd Party Library Installation

Simply install your library via `npm install lib-name --save` and import it in your code.

Then add the needed script files to `src/partials/layout.html`:

```html
<!--build:js js/bundle.js -->
<script type="text/javascript" src="../node_modules/path/to/lib-name"></script>
<!-- endbuild -->
```

## External modules

- [Sass media queries](https://github.com/paranoida/sass-mediaqueries)

## Methodologies

- [BEM](http://getbem.com/)
- [SMACSS](https://smacss.com/)

\*\*

1. install nvm.setup

2. open cmd as administrator

3. nvm -v to check version

4. type - nvm install 10.16.0

5. type - nvm use 10.16.0

6. copy my gulp starter into your project

7. npm init

8. npm install

9. npm install --global gulp-cli

10. gulp build

11. gulp

12. happy coding :)
