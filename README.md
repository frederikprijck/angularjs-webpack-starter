# angularjs-webpack-starter

[![Greenkeeper badge](https://badges.greenkeeper.io/frederikprijck/angularjs-webpack-starter.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/frederikprijck/angularjs-webpack-starter.svg?branch=master)](https://travis-ci.org/frederikprijck/angularjs-webpack-starter)
[![Dependencies](https://david-dm.org/frederikprijck/angularjs-webpack-starter/status.svg)](https://david-dm.org/frederikprijck/angularjs-webpack-starter)
[![DepDependencies](https://david-dm.org/frederikprijck/angularjs-webpack-starter/dev-status.svg)](https://david-dm.org/frederikprijck/angularjs-webpack-starter?type=dev)
[![Coverage Status](https://coveralls.io/repos/frederikprijck/angularjs-webpack-starter/badge.svg?branch=master)](https://coveralls.io/r/frederikprijck/angularjs-webpack-starter?branch=master)

The goal of this repository is to demonstrate a modern frontend setup for [AngularJS](https://github.com/angular/angular.js) projects, in such a way that it gets closer to how things are done with Angular. This project is using [NPM](https://github.com/npm/npm) as package manager, [TypeScript](https://github.com/Microsoft/TypeScript) and [Webpack](https://github.com/webpack/webpack) as module loader.

This is, by no means, ment to be used blindly in production.

## Features
- [x] TypeScript 2
- [x] TSLint
- [x] @types
- [x] Webpack 3 + Webpack dev server
- [x] Karma + Jasmine
- [ ] Protractor
- [x] Styling using SASS
- [x] NPM
- [x] Code Coverage
- [x] AngularJS 1.6
- [x] UI Router 1+
- [x] Strict DI using [ngAnnotate](https://github.com/olov/ng-annotate)
- [x] Production build containing chunks

## Usage
To use this starter you can simply clone it to your prefered location by using

```
 git clone https://github.com/frederikprijck/angularjs-webpack-starter.git <directory_name> --depth=1
 cd <directory_name>
```

and install the dependencies

```
 npm install
```

Once the repository has been cloned locally, you can use the following CLI commands:

```
npm start
npm run build
npm run test
npm run test:coverage
```

To run the production build, use:

```
npm run build:dist
```

If you would like to test the production build by running `http-server`, use

```
npm run serve:dist
```

## Contributions
Feel free to open an issue or create a PR.
