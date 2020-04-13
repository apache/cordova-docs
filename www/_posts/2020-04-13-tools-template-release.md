---
layout: post
author:
    name: Bryan Ellis
title:  "Tools & Template Released!"
categories: news
tags: release tools template
---

We are happy to announce that we have just released an update to our tools and template!

* [cordova-fetch@3.0.0](https://www.npmjs.org/package/cordova-fetch)
* [cordova-js@6.0.0](https://www.npmjs.org/package/cordova-js)
* [xcode@3.0.0](https://www.npmjs.org/package/xcode)
* [cordova-serve@4.0.0](https://www.npmjs.org/package/cordova-serve)
* [cordova-app-hello-world@5.0.0](https://www.npmjs.org/package/cordova-app-hello-world)

## Release Highlights

We have raised the minimum required Node.js version for all of our packages to 10.x and begun to modernize the node JavaScript to use supported ES6.

### cordova-fetch

* [GH-78](https://github.com/apache/cordova-fetch/pull/78) Work around npm bug when uninstalling old cordova platforms
* [GH-65](https://github.com/apache/cordova-fetch/pull/65) Save platforms and plugins to devDependencies
* [GH-65](https://github.com/apache/cordova-fetch/pull/65) fix npm install package-name detection when a package has post-install

### cordova-js

* [GH-211](https://github.com/apache/cordova-js/pull/211) Improve callback error handling
* [GH-215](https://github.com/apache/cordova-js/pull/215) Do not try to replace `window.navigator`
* [GH-200](https://github.com/apache/cordova-js/pull/200) Fix parsing of some parameter formats in `argscheck.checkArgs`
* [GH-188](https://github.com/apache/cordova-js/pull/188) Add **Electron** Support

### xcode

* [GH-106](https://github.com/apache/cordova-node-xcode/pull/106) Update build property by `targetname`
* [GH-79](https://github.com/apache/cordova-node-xcode/pull/79) feat: add new optional paramter to `pbxProject.addTarget`

### cordova-serve

* [GH-30](https://github.com/apache/cordova-serve/pull/30) breaking: replace dependency `opn` w/ `open`

### cordova-app-hello-world

* [GH-43](https://github.com/apache/cordova-app-hello-world/pull/43) feature: dark mode
* [GH-58](https://github.com/apache/cordova-app-hello-world/pull/58) chore(index.html): add charset, prevent scaling, use default attributes
* [GH-57](https://github.com/apache/cordova-app-hello-world/pull/57) Update `index.css`, fixes duplicated `env` right
* [GH-55](https://github.com/apache/cordova-app-hello-world/pull/55) Simplify demo app JavaScript
* [GH-52](https://github.com/apache/cordova-app-hello-world/pull/52) fix: remove unsupported hooks directory

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-fetch

* Added NOTICE & LICENSE file for release
* [GH-84](https://github.com/apache/cordova-fetch/pull/84) doc(README): fix markdown lint warning
* [GH-82](https://github.com/apache/cordova-fetch/pull/82) refactor: modernize code & update `README`
  * refactor: transform `var` to `let` & `const`
  * refactor: consolidate `cordova-common` vars
  * refactor: transform arrow functions & arrow returns
  * refactor: transform template strings
  * doc(README): update & formatting
  * chore(npm): update package repo & bugs url
  * chore: apply suggestions
  * chore: revert promise chain flattening
* [GH-83](https://github.com/apache/cordova-fetch/pull/83) breaking(npm): bump dependencies
  * `@cordova/eslint-config@^3.0.0`
  * `nyc@^15.0.0`
  * `rewire@^5.0.0`
  * `cordova-common@^3.2.1`
  * `fs-extra@^9.0.0`
  * `npm-package-arg@^8.0.1`
  * `pify@^5.0.0`
  * `resolve@^1.15.1`
  * `semver@^7.1.3`
  * `which@^2.0.2`
  * `cordova-common@4.0.0`
* [GH-79](https://github.com/apache/cordova-fetch/pull/79) feat: update package & ci services
  * ci: replace current services with gh-actions
  * ci(gh-action): update workflow
  * chore(package-lock): rebuild
  * chore(npm): drop appveyor from ignore list
  * chore(npm-script): rename cover to test:coverage
* [GH-81](https://github.com/apache/cordova-fetch/pull/81) chore: consolidate eslint configs
* [GH-70](https://github.com/apache/cordova-fetch/pull/70) refactor: eslint setup
* [GH-65](https://github.com/apache/cordova-fetch/pull/65) Save platforms and plugins to devDependencies
* [GH-72](https://github.com/apache/cordova-fetch/pull/72) chore: update `file-url` dependency to `^3.0.0`
* [GH-80](https://github.com/apache/cordova-fetch/pull/80) Drop code supporting `npm@<5`
* [GH-74](https://github.com/apache/cordova-fetch/pull/74) chore: improve npm ignore list
* [GH-73](https://github.com/apache/cordova-fetch/pull/73) chore: bump production dependencies
* [GH-71](https://github.com/apache/cordova-fetch/pull/71) chore: update `jasmine` dependencies
* [GH-69](https://github.com/apache/cordova-fetch/pull/69) chore: drop node 6 and 8 support
* [GH-68](https://github.com/apache/cordova-fetch/pull/68) chore: bump version to 3.0.0-dev
* [GH-78](https://github.com/apache/cordova-fetch/pull/78) Work around npm bug when uninstalling old cordova platforms
* [GH-77](https://github.com/apache/cordova-fetch/pull/77) chore: update `nyc` dev dependency
* [GH-63](https://github.com/apache/cordova-fetch/pull/63) Add Node.js 12 to CI Services

## cordova-js

* [GH-227](https://github.com/apache/cordova-js/pull/227) doc(README): update
* [GH-225](https://github.com/apache/cordova-js/pull/225) breaking(npm): bump dependencies
  * `@cordova/eslint-config@^3.0.0`
  * `cordova-android@^8.1.0`
  * `cordova-ios@^5.1.1`
  * `eslint-plugin-es5@^1.5.0`
  * `grunt@^1.1.0`
  * `jasmine-core@^3.5.0`
  * `karma@^4.4.1`
  * `karma-chrome-launcher@^3.1.0`
  * `karma-coverage@^2.0.1`
  * `karma-jasmine@^3.1.1`
  * `puppeteer@^2.1.1`
  * `execa@^4.0.0`
  * `fs-extra@^9.0.0`
  * `globby@^11.0.0`
* [GH-226](https://github.com/apache/cordova-js/pull/226) ci(github-actions): add workflow w/ supported changes
* [GH-224](https://github.com/apache/cordova-js/pull/224) chore(npm): package cleanup
* [GH-223](https://github.com/apache/cordova-js/pull/223) breaking: bump minimum `node` support `>=10`
* [GH-221](https://github.com/apache/cordova-js/pull/221) refactor: eslint setup
* [GH-220](https://github.com/apache/cordova-js/pull/220) fix: move `eslint-plugin-es5` to `devDependencies`
* [GH-211](https://github.com/apache/cordova-js/pull/211) Improve callback error handling
* [GH-215](https://github.com/apache/cordova-js/pull/215) Do not try to replace `window.navigator`
* [GH-216](https://github.com/apache/cordova-js/pull/216) Re-enable ESLint rules
* [GH-217](https://github.com/apache/cordova-js/pull/217) Target next major version 6.0.0
* [GH-218](https://github.com/apache/cordova-js/pull/218) Minor formatting improvements in `cordova.js`
* [GH-204](https://github.com/apache/cordova-js/pull/204) ESLint improvements
* [GH-214](https://github.com/apache/cordova-js/pull/214) Drop unused test helpers
* [GH-209](https://github.com/apache/cordova-js/pull/209) Collect & report test coverage for our browser code
* [GH-208](https://github.com/apache/cordova-js/pull/208) Make built JS output a bit prettier
* [GH-207](https://github.com/apache/cordova-js/pull/207) Add platforms used during tests as `devDependencies`
* [GH-205](https://github.com/apache/cordova-js/pull/205) Completely refactor build system
* [GH-199](https://github.com/apache/cordova-js/pull/199) Add Node.js 12 to CI Services
* [GH-198](https://github.com/apache/cordova-js/pull/198) Document `argscheck.checkArgs`
* [GH-201](https://github.com/apache/cordova-js/pull/201) Improve `README`
* [GH-200](https://github.com/apache/cordova-js/pull/200) Fix parsing of some parameter formats in `argscheck.checkArgs`
* [GH-197](https://github.com/apache/cordova-js/pull/197) Use `.gitgnore` as `.eslintignore`
* [GH-196](https://github.com/apache/cordova-js/pull/196) Allow to define modules whose name appears on `Object.prototype`
* [GH-195](https://github.com/apache/cordova-js/pull/195) Integrate unused CommonJS tests where applicable
* [GH-194](https://github.com/apache/cordova-js/pull/194) Minor cleanup of require/define tests
* [GH-193](https://github.com/apache/cordova-js/pull/193) Update `README`
* [GH-192](https://github.com/apache/cordova-js/pull/192) Update dependencies & fix resulting ESLint violations
  * Fix new ESLint `object-curly-spacing` violations
* [GH-190](https://github.com/apache/cordova-js/pull/190) Drop build/test support for Node.js 6
* [GH-191](https://github.com/apache/cordova-js/pull/191) Lint (almost) all JS files
* [GH-189](https://github.com/apache/cordova-js/pull/189) Remove obsolete stuff from AppVeyor CI config
* [GH-188](https://github.com/apache/cordova-js/pull/188) Add **Electron** Support
* Add or update GitHub pull request and issue template

## xcode

* node-xcode-3.0.0 Added NOTICE for release
* [GH-107](https://github.com/apache/cordova-node-xcode/pull/107) doc(README): fix CI badge url
* [GH-106](https://github.com/apache/cordova-node-xcode/pull/106) Update build property by `targetname`
* [GH-79](https://github.com/apache/cordova-node-xcode/pull/79) feat: add new optional paramter to `pbxProject.addTarget`
* [GH-96](https://github.com/apache/cordova-node-xcode/pull/96) ci: switch travis ci for github actions
* [GH-94](https://github.com/apache/cordova-node-xcode/pull/94) breaking(npm): bump dependencies
  * `simple-plist@^1.1.0`
  * `uuid@^7.0.3`
* [GH-93](https://github.com/apache/cordova-node-xcode/pull/93) chore(npm): use short notation for repo & bugs
* [GH-90](https://github.com/apache/cordova-node-xcode/pull/90) ci(travis): removes Node.js v6 and v8 from testing
* [GH-92](https://github.com/apache/cordova-node-xcode/pull/92) chore: bump node requirement (`>=10`)
* [GH-89](https://github.com/apache/cordova-node-xcode/pull/89) chore(npm): improve ignore list

## cordova-serve

* [GH-31](https://github.com/apache/cordova-serve/pull/31) doc(README): formatting, syntax updating, wording
* [GH-35](https://github.com/apache/cordova-serve/pull/35) refactor: transform template
* [GH-34](https://github.com/apache/cordova-serve/pull/34) refactor: transform object shorthand
* [GH-33](https://github.com/apache/cordova-serve/pull/33) refactor: transform arrow & arrow-returns
* [GH-32](https://github.com/apache/cordova-serve/pull/32) refactor: transform `var` to `let` & `const`
* [GH-30](https://github.com/apache/cordova-serve/pull/30) breaking: replace dependency `opn` w/ `open`
* [GH-29](https://github.com/apache/cordova-serve/pull/29) ci: replace existing services with GitHub Actions
* [GH-27](https://github.com/apache/cordova-serve/pull/27) chore(npm): update package & add ignore list
* [GH-28](https://github.com/apache/cordova-serve/pull/28) breaking(npm): bump dependencies
  * `@cordova/eslint-config@^3.0.0`
  * `rewire@^5.0.0`
  * `chalk@^3.0.0`
  * `compression@^1.7.4`
  * `express@^4.17.1`
  * `opn@^6.0.0`
  * `which@^2.0.2`
* [GH-25](https://github.com/apache/cordova-serve/pull/25) chore: consolidate `eslint` configs
* [GH-24](https://github.com/apache/cordova-serve/pull/24) chore: update `jasmine` dependencies & settings
* [GH-23](https://github.com/apache/cordova-serve/pull/23) refactor: `eslint` setup
* [GH-22](https://github.com/apache/cordova-serve/pull/22) chore: drop node 6 and 8 support
* [GH-20](https://github.com/apache/cordova-serve/pull/20) Spec cleanup
* [GH-19](https://github.com/apache/cordova-serve/pull/19) Improve linting
* [GH-17](https://github.com/apache/cordova-serve/pull/17) chore: remove appveyor allow node12 failure
* [GH-16](https://github.com/apache/cordova-serve/pull/16) Add Node.js 12 to CI Services
* Add or update GitHub pull request and issue template

## cordova-app-hello-world

* [GH-64](https://github.com/apache/cordova-app-hello-world/pull/64) doc(README): fix markdown lint warnings & add npm badge
* [GH-62](https://github.com/apache/cordova-app-hello-world/pull/62) chore(git): ignores `node_modules` folder
* [GH-61](https://github.com/apache/cordova-app-hello-world/pull/61) chore(npm): add ignore list & update package data
* [GH-60](https://github.com/apache/cordova-app-hello-world/pull/60) refactor: transform `var` to `let` & `const`
* [GH-43](https://github.com/apache/cordova-app-hello-world/pull/43) feature: dark mode
* [GH-59](https://github.com/apache/cordova-app-hello-world/pull/59) style: update `config.xml`
  * replace single quotation marks with double quotation mark
  * capitalize `UTF-8`
* [GH-58](https://github.com/apache/cordova-app-hello-world/pull/58) chore(index.html): add charset, prevent scaling, use default attributes
* [GH-57](https://github.com/apache/cordova-app-hello-world/pull/57) Update `index.css`, fixes duplicated `env` right
* [GH-55](https://github.com/apache/cordova-app-hello-world/pull/55) Simplify demo app JavaScript
* [GH-56](https://github.com/apache/cordova-app-hello-world/pull/56) fix: move default plugin to `package.json`
* [GH-52](https://github.com/apache/cordova-app-hello-world/pull/52) fix: remove unsupported hooks directory
* [GH-50](https://github.com/apache/cordova-app-hello-world/pull/50) feat: ensure `.gitignore` file in generated app
* Add or update GitHub pull request and issue template
