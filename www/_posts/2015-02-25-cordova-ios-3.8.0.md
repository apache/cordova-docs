---
layout: post
author:
    name: Shazron Abdullah
    url: https://twitter.com/shazron
title:  "Apache Cordova iOS 3.8.0"
categories: announcements
tags: news releases
---

**UPDATE:** To deploy to iOS devices, developers will have to update their `ios-deploy` dependency to the latest release. Run `npm install ios-deploy -g` to download the latest release of version `1.4.0`. 

We are happy to announce that `Cordova iOS 3.8.0` has been released!

This release has various bug fixes, and will be the default iOS version when the cordova-cli 4.3.0 is released.
This release also requires Xcode 6.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update ios

To add it explicitly:

    cordova platform add ios@3.8.0



For non-CLI projects or for pre-3.0 projects, refer to the [upgrade guides](http://cordova.apache.org/docs/en/dev/guide_platforms_index.md.html).

<!--more-->

## What's new in iOS

* [CB-8436](https://issues.apache.org/jira/browse/CB-8436) Remove more bad quotes from build command
* [CB-8436](https://issues.apache.org/jira/browse/CB-8436) Remove unneeded "" when composing xcodebuild arguments (closes #130)
* [CB-8084](https://issues.apache.org/jira/browse/CB-8084) Allow for a way to disable push notification delegate methods (through xcconfig). Style fixup using uncrustify.
* [CB-7606](https://issues.apache.org/jira/browse/CB-7606) handleOpenURL not working correctly on cold start (handler not evaluated yet) and warm start
* [CB-8435](https://issues.apache.org/jira/browse/CB-8435) Enable jshint for iOS platform
* [CB-8417](https://issues.apache.org/jira/browse/CB-8417) moved platform specific js into platform
* [CB-8336](https://issues.apache.org/jira/browse/CB-8336) Remove plugin prefs from iOS defaults.xml
* [CB-8254](https://issues.apache.org/jira/browse/CB-8254) Enable use of .xcconfig when building for emulator
* [CB-8351](https://issues.apache.org/jira/browse/CB-8351) Deprecate all non-prefixed class extensions
* [CB-8358](https://issues.apache.org/jira/browse/CB-8358) Make --link an alias for --shared plus some code simplification.
* [CB-8197](https://issues.apache.org/jira/browse/CB-8197) Convert all bash scripts to node.js (closes #126)
* [CB-8314](https://issues.apache.org/jira/browse/CB-8314) Speed up Travis CI (close #125)
* [CB-8036](https://issues.apache.org/jira/browse/CB-8036) Don't exclude bin/node_modules from npm pack (via .gitignore)
* [CB-7872](https://issues.apache.org/jira/browse/CB-7872) Fix CODE_SIGN_RESOURCE_RULES_PATH being set wrong in xcconfig (closes #120)
* [CB-8168](https://issues.apache.org/jira/browse/CB-8168) `cordova/run --list` support for iOS (closes #122)
* [CB-8044](https://issues.apache.org/jira/browse/CB-8044) support for --nobuild flag in run script
* [CB-6637](https://issues.apache.org/jira/browse/CB-6637) Removed - request:isFragmentIdentifierToRequest: deprecated method in CDVWebViewDelegate (closes #121)
* [CB-8002](https://issues.apache.org/jira/browse/CB-8002) (CB-7735) Update cordova.js to include bridge fix
* [CB-5706](https://issues.apache.org/jira/browse/CB-5706) convert some of the bash scripts to nodejs (closes #118)
* [CB-8506](https://issues.apache.org/jira/browse/CB-8506) Use npm version of uncrustify in cordova-ios (devDependency only)
* Have CordovaLib classes import CDVJSON_private.h rather than CDVJSON.h
* Trim down checked-in node_module files to minimal set
