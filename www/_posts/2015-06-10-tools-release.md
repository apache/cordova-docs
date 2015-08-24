---
layout: post
author:
    name: Steve Gill
    url: https://twitter.com/stevesgill
title:  "Tools Release: June 10, 2015"
categories: news
tags: release tools
---

New versions of cordova tools are now live!

* [cordova-lib@5.1.1](https://www.npmjs.org/package/cordova-lib)
* [cordova@5.1.1](https://www.npmjs.org/package/cordova)
* [plugman@0.23.3](https://www.npmjs.org/package/plugman)
* [cordova-js@4.0.0](https://www.npmjs.org/package/cordova-js)

Release highlights:

* [CB-8898](https://issues.apache.org/jira/browse/CB-8898) Introduced a new `cordova requirements` command
* [CB-8441](https://issues.apache.org/jira/browse/CB-8441) `cordova prepare --browserify` now supports 3rd party plugins to build your `cordova.js` at run time! Try it out!
* [CB-9075](https://issues.apache.org/jira/browse/CB-9075) pinned platforms will include platform patch updates without requiring a new tools release.

To update your tools:

  * If you have `cordova` installed:

        npm install -g cordova

  * If you have `plugman` installed:

        npm install -g plugman
<!--more-->

# Changes include:

## Platform updates
When adding these platforms to your project, the following versions are now used by default.
These platform versions were released recently, and the tools' defaults were updated:

* [Cordova Android 4.0.2](http://cordova.apache.org/announcements/2015/05/26/android-402.html)
* [Cordova Windows 4.0.0](http://cordova.apache.org/announcements/2015/06/03/windows-release.html)

## cordova-lib
* [CB-9087](https://issues.apache.org/jira/browse/CB-9087) Updated pinned version of **cordova-windows** to `4.0.0`
* [CB-9108](https://issues.apache.org/jira/browse/CB-9108) Handle version ranges when add platform with `--usegit`.
* [CB-8898](https://issues.apache.org/jira/browse/CB-8898) Makes error message descriptive when `requirements` is called outside of cordova project.
* [CB-8007](https://issues.apache.org/jira/browse/CB-8007) Two cordova plugins modifying `*-Info.plist CFBundleURLTypes`
* [CB-9065](https://issues.apache.org/jira/browse/CB-9065) Allow removing plugins by short name.
* [CB-9001](https://issues.apache.org/jira/browse/CB-9001) Set `WMAppManifest.xml` Author, Description and Publisher attributes based on `config.xml`
* [CB-9073](https://issues.apache.org/jira/browse/CB-9073) Allow to add platform if project path contains `&` symbol
* [CB-8783](https://issues.apache.org/jira/browse/CB-8783) - Revert `all` as a global preference value for Orientation (specific to iOS for now)
* [CB-8783](https://issues.apache.org/jira/browse/CB-8783) - `default` value for Orientation does not support both landscape and portrait orientations. (new `all` value)
* [CB-9075](https://issues.apache.org/jira/browse/CB-9075) pinned platforms will include patch updates without new tools release
* [CB-9051](https://issues.apache.org/jira/browse/CB-9051) Plugins don't get re-added if platforms folder deleted.
* [CB-9025](https://issues.apache.org/jira/browse/CB-9025) Call **Windows** `prepare` logic on as part of cordova-lib `prepare`. This closes #217
* [CB-8965](https://issues.apache.org/jira/browse/CB-8965) copy platform specific js into `platform_www` when adding new platforms for browserify workflow
* Add support to specify a build config file. If none is specified `build.json` in the project root is used as a default This closes #215
* [CB-9030](https://issues.apache.org/jira/browse/CB-9030): Modifies superspawn to support a `chmod` option. When truthy, attempts to set the target file mode to 755 before executing.  Specifies this argument as truthy for common CLI operations (compile, run, and steps in plugman).  Didn't add it for hooks runner since that particular mode is in legacy support.
* [CB-6462](https://issues.apache.org/jira/browse/CB-6462) [CB-6026](https://issues.apache.org/jira/browse/CB-6026) - Orientation preference now updates `UISupportedInterfaceOrientations~ipad` too.
* [CB-8898](https://issues.apache.org/jira/browse/CB-8898) Introduces `requirements` cordova module
* Update elementtree dependency to 0.1.6. Note it has a breaking API change. https://github.com/racker/node-elementtree/issues/24 (closes #209)
* [CB-8757](https://issues.apache.org/jira/browse/CB-8757) Resolve symlinks in order to avoid relative path issues (close #212)
* [CB-8956](https://issues.apache.org/jira/browse/CB-8956) Remove hardcoded reference to `registry.npmjs.org`
* [CB-8934](https://issues.apache.org/jira/browse/CB-8934) fixed regression with projects config.json not being used in cordova create
* [CB-8908](https://issues.apache.org/jira/browse/CB-8908) Make fetching via git faster via `--depth=1`
* [CB-8897](https://issues.apache.org/jira/browse/CB-8897) Make default icon/splash on Android map to mdpi

## cordova-cli
* [CB-8898](https://issues.apache.org/jira/browse/CB-8898) Adds missing section about `requirements` to general cordova help
* [CB-8898](https://issues.apache.org/jira/browse/CB-8898) Introduces `cordova requirements` command
* Updated `cordova-lib` dependency to `5.1.1`

## cordova-js
* [CB-9057](https://issues.apache.org/jira/browse/CB-9057): Updated `cordova.j`s for **Windows** to refer to `base.js` instead of the full-blown `WinJS.js`.
* [CB-6865](https://issues.apache.org/jira/browse/CB-6865) added browserify support for plugins with any id
* [CB-8441](https://issues.apache.org/jira/browse/CB-8441) added missing requires and updated npm run scripts
* [CB-8441](https://issues.apache.org/jira/browse/CB-8441) `platformVersion` flag not required anymore. Grab version from dependecy platform versions
* [CB-8441](https://issues.apache.org/jira/browse/CB-8441) updated workflow to use `cordova-js-src` when available
* [CB-8441](https://issues.apache.org/jira/browse/CB-8441) grunt compile now uses platform dependencies `cordova-js-src` directory for platform specific exec files
* [CB-8441](https://issues.apache.org/jira/browse/CB-8441) added platforms as dev dependencies
* Added template-packaged `WinJS` reference for **Windows 10** support. This closes #111
* [CB-8996](https://issues.apache.org/jira/browse/CB-8996) **Windows** Fixed invalid null comparison. This closes #110.
* updated browserify dependency to 10.1.3
* android: Delete `PRIVATE_API` bridge mode enum, since it was removed in `4.0.0`
* [CB-8838](https://issues.apache.org/jira/browse/CB-8838) - Disabled `commandQueue` for `WK_WEBVIEW_BINDING`. (closes #107)

## plugman
* Updated `cordova-lib` dependency to `5.1.1`

## Pinned Platform Versions for **Cordova CLI 5.1.1**

* Cordova Amazon-FireOS: 3.6.3
* Cordova Android: 4.0.2
* Cordova BlackBerry10: 3.7.0
* Cordova Browser: 3.6.0
* Cordova FirefoxOS: 3.6.3
* Cordova iOS: 3.8.0
* Cordova Ubuntu: 4.0.0
* Cordova Windows: 4.0.0
* Cordova WP8: 3.8.1
