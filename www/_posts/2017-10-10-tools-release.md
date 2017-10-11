---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Released!"
categories: news
tags: release tools
---

We just released a small update to our tools!

* [cordova@7.1.0](https://www.npmjs.org/package/cordova)
* [cordova-lib@7.1.0](https://www.npmjs.org/package/cordova-lib)
* [cordova-plugman@1.5.1](https://www.npmjs.org/package/plugman)
* [cordova-fetch@1.2.0](https://www.npmjs.org/package/cordova-fetch)
* [cordova-common@2.1.1](https://www.npmjs.org/package/cordova-common)
* [cordova-node-xcode@1.0.0](https://www.npmjs.org/package/xcode)
* [cordova-js@4.2.2](https://www.npmjs.org/package/cordova-js)

## Release Highlights

* [CB-13303](https://issues.apache.org/jira/browse/CB-13303) added `--production` flag by default. This means that when the commands `cordova platform add android` or `cordova plugin add cordova-plugin-device` are run, under the hood we are running `npm install cordova-android --production`. The `--production` flag only installs `dependencies` from `package.json` and skips `devDependencies`.  This should speed up installs (especially when installing local copies of platforms and plugins). You can turn the flag off by passing the `--noprod` flag or setting it off globally via `cordova config set production false`.
* [CB-13353](https://issues.apache.org/jira/browse/CB-13353) added `--save-exact` flag. This will allow to save an exact version of a platform or plugin instead of a range. `cordova platform add android@6.3.0 --save-exact`. You can also set it true by default in your global config via `cordova config set save-exact true`
* This is the first release of `cordova-node-xcode` under the apache cordova banner. It was originally created and used as a dependency for `cordova-lib`, but now is being used by many other projects as well. We have decided to give the project a major release to `1.0.0`. This is to represent stability for the project in terms of `semver`. No breaking change has happened from the previous release. 
* [CB-13308](https://issues.apache.org/jira/browse/CB-13308) fixed issues with restoring plugins and platforms while using `npm@5+`.
* [CB-12787](https://issues.apache.org/jira/browse/CB-12787) Fix plugin installation with `--link` option.
* [CB-13056](https://issues.apache.org/jira/browse/CB-13056) added deprecation notice for **WebOS**
* [CB-13057](https://issues.apache.org/jira/browse/CB-13057) added deprecation warning for `cordova platform save`
* [CB-12901](https://issues.apache.org/jira/browse/CB-12901) Deprecated `.raw` from `cordova-lib` API calls. If you consume `cordova-lib` as a node module, please update your API calls! You can see an example of the change at [https://github.com/apache/cordova-cli/commit/0a42092971dc8fe2f483bd42c3b9de26fdec677c](https://github.com/apache/cordova-cli/commit/0a42092971dc8fe2f483bd42c3b9de26fdec677c). 

To update your cordova CLI:

    npm install -g cordova@latest

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-lib

* [CB-13303](https://issues.apache.org/jira/browse/CB-13303) added `--save_exact`, `--production` flags
* [CB-13288](https://issues.apache.org/jira/browse/CB-13288) updated `index.js` and test to fix `cordova plugin search`
* [CB-13206](https://issues.apache.org/jira/browse/CB-13206) fixed incorrect target being passed in to `plugin add` from `restore-util.js`
* [CB-13145](https://issues.apache.org/jira/browse/CB-13145) added `variable-merge.js` to deal with `plugin.xml` variables for uninstall
* [CB-12870](https://issues.apache.org/jira/browse/CB-12870) catch all use cases for `getPlatformApiFunction` and update tests accordingly
* [CB-12944](https://issues.apache.org/jira/browse/CB-12944) Platform's spec is ignored in `config.xml` if `package.json` doesn't contain dependency for platform
* [CB-12361](https://issues.apache.org/jira/browse/CB-12361) added new unit tests for plugin tests
* [CB-13020](https://issues.apache.org/jira/browse/CB-13020) (plugman) install filters out `nohooks`
* [CB-13056](https://issues.apache.org/jira/browse/CB-13056) added deprecation notice for **WebOS**
* [CB-13057](https://issues.apache.org/jira/browse/CB-13057) added deprecation warning for `cordova platform save`
* [CB-12361](https://issues.apache.org/jira/browse/CB-12361) added tests for `save.js` and rebased
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) switched from `jshint` to `eslint`
* [CB-12361](https://issues.apache.org/jira/browse/CB-12361) updated `addHelper` tests
* [CB-11980](https://issues.apache.org/jira/browse/CB-11980) Update `README` to reflect new repos
* [CB-6143](https://issues.apache.org/jira/browse/CB-6143) Change `plugman.emit()` to `events.emit()`
* Reorganized unit test directory. Changes include: - consolidate `spec-cordova/` and `spec-plugman/` into a single `spec/` dir. - put `jasmine config` and helper modules in top-level spec dir. - changed `package.json` npm run scripts to reflect purposes of tasks. remove `npm run ci`. Updated `README` to reflect `package.json` npm run script changes. 
* [CB-12361](https://issues.apache.org/jira/browse/CB-12361) added unit tests for `prepare.spec.js`
* Update cordova-lib api. Deprecate `raw` from api calls. 
* [CB-11980](https://issues.apache.org/jira/browse/CB-11980) moved `fetch`, `common` and `serve` into their own repos
* [CB-12786](https://issues.apache.org/jira/browse/CB-12786) Improve logic for searching plugin id in case of module already exists in `node_modules`
* [CB-12250](https://issues.apache.org/jira/browse/CB-12250) [CB-12409](https://issues.apache.org/jira/browse/CB-12409) **iOS**: Fix bug with escaping properties from plist file
* [CB-12762](https://issues.apache.org/jira/browse/CB-12762) point `package.json` repo items to github mirrors instead of apache repos site
* [CB-12777](https://issues.apache.org/jira/browse/CB-12777) removed **Android**, **iOS**, and **Windows** projects fixtures
* [CB-12787](https://issues.apache.org/jira/browse/CB-12787) Fix plugin installation with `--link` option
* [CB-12738](https://issues.apache.org/jira/browse/CB-12738) Cordova ignores plugin dependency version on **Windows** platform
* [CB-12766](https://issues.apache.org/jira/browse/CB-12766) Consistently write JSON with 2 spaces indentation

## cordova-cli

* [CB-13303](https://issues.apache.org/jira/browse/CB-13303) added `--noprod` and `--production` flags as options, `--noprod` turns off our auto adding of `--production` flag
* [CB-13353](https://issues.apache.org/jira/browse/CB-13353) added `--save-exact` flag to cli and unit test
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) Added `eslint` and removed `jshint`
* [CB-12862](https://issues.apache.org/jira/browse/CB-12862) Added `searchpath` as a config option
* [CB-12762](https://issues.apache.org/jira/browse/CB-12762) point `package.json` repo items to github mirrors instead of apache repos site
* [CB-12693](https://issues.apache.org/jira/browse/CB-12693) Included examples for `Browserify`, `fetch`, and `autosave` and include options with a more detailed description.
* [CB-12901](https://issues.apache.org/jira/browse/CB-12901) removed `.raw` from `cordova-lib` calls

## cordova-plugman

* [CB-13380](https://issues.apache.org/jira/browse/CB-13380) Updated `cordova-lib` dependency to `7.1.0`
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) setup `eslint` and remove `jshint`

## cordova-fetch

* [CB-13353](https://issues.apache.org/jira/browse/CB-13353) added `saveexact` as an option and updated fetch test
* [CB-13308](https://issues.apache.org/jira/browse/CB-13308), [CB-13252](https://issues.apache.org/jira/browse/CB-13252) fix issue with plugins turning into symlinks on restore
* [CB-13303](https://issues.apache.org/jira/browse/CB-13303) setting production flag to true by default during npm install
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) setting up `eslint` and removing `jshint`
* [CB-13010](https://issues.apache.org/jira/browse/CB-13010) Improve logic for searching packages which being installed from `git url`
* [CB-11980](https://issues.apache.org/jira/browse/CB-11980) fixed incorrect `appveyor` image
* [CB-12786](https://issues.apache.org/jira/browse/CB-12786) Improve logic for searching plugin id in case of module already exists in `node_modules`
* [CB-12762](https://issues.apache.org/jira/browse/CB-12762) updated `packageJson` to github mirrors
* [CB-12787](https://issues.apache.org/jira/browse/CB-12787) Fix plugin installation with `--link` option
* [CB-12738](https://issues.apache.org/jira/browse/CB-12738) Cordova ignores plugin dependency version on **windows** platform

## cordova-common

* [CB-13145](https://issues.apache.org/jira/browse/CB-13145) added `getFrameworks` to unit tests
* [CB-13145](https://issues.apache.org/jira/browse/CB-13145) added variable replacing to framework tag

## cordova-node-xcode

* Bump version to 1.0.0 to represent stability and follow semver more closely
* Fix null-access errors in `addTo/removeFrom*PbxGroup` methods
* Fix possible null-access error in `removeFromFrameworksPbxGroup`
* add check for `isArray` so that strings don't cause an error when calling `.filter`
* Updated License, Copyright, Contributors and repo url, in prep for contributing this project to Apache Cordova

## cordova-js

* [CB-12017](https://issues.apache.org/jira/browse/CB-12017) updated dependencies for `Browserify`
* [CB-12762](https://issues.apache.org/jira/browse/CB-12762) point `package.json` repo items to github mirrors instead of apache repos
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) added `eslint` to repo
* [CB-13232](https://issues.apache.org/jira/browse/CB-13232) added test for cordova's unique local style require
* [CB-8990](https://issues.apache.org/jira/browse/CB-8990) bump nodejs requirement to 4.0.0+
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) added `bugs` entry to `package.json`.
* [CB-12748](https://issues.apache.org/jira/browse/CB-12748) Update CI to test node 4 and 6
