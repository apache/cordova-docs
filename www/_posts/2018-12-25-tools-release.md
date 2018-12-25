---
layout: post
author:
    name: Bryan Ellis
title:  "Tools Released!"
categories: news
tags: release tools
---

We are happy to announce that we have just released an update to our tools!

* [cordova-app-hello-world@4.0.0](https://www.npmjs.org/package/cordova-app-hello-world)
* [cordova-fetch@2.0.0](https://www.npmjs.org/package/cordova-fetch)
* [cordova-js@5.0.0](https://www.npmjs.org/package/cordova-js)
* [cordova-serve@3.0.0](https://www.npmjs.org/package/cordova-serve)

## Release Highlights

As NodeJS 4.x support has been dropped by the NodeJS team on April 30th, 2018, we have raised the minimum required NodeJS version for this release to 6.x.

Please report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:


## cordova-app-hello-world

* [GH-24](https://github.com/apache/cordova-app-hello-world/pull/24) Absorb cordova-template-reference 
* Slight CSS modernization & use system fonts
* [CB-12886](https://issues.apache.org/jira/browse/CB-12886): Fix for safe-area handling on iOS 11+
* [CB-14098](https://issues.apache.org/jira/browse/CB-14098): Remove unused res folder
* [CB-12397](https://issues.apache.org/jira/browse/CB-12397): fix .gitignore for plugins & platforms
* [CB-12762](https://issues.apache.org/jira/browse/CB-12762): point package.json repo items to github instead of apache mirrors site

## cordova-fetch

* [GH-56](https://github.com/apache/cordova-fetch/pull/56) Bump dependency cordova-common@3 and fs-extra@7
* [GH-48](https://github.com/apache/cordova-fetch/pull/48) Added test coverage
* [GH-49](https://github.com/apache/cordova-fetch/pull/49) Drop Q usage for native promises
* [GH-50](https://github.com/apache/cordova-fetch/pull/50) Handle broken `NODE_PATH` setups gracefully
* [GH-44](https://github.com/apache/cordova-fetch/pull/44) Look for node_modules in any recursive parent directory
* [GH-26](https://github.com/apache/cordova-fetch/pull/26) [CB-14173](https://issues.apache.org/jira/browse/CB-14173): Fix cordova `<platform|plugin> add --link`
* [GH-24](https://github.com/apache/cordova-fetch/pull/24) [CB-14133](https://issues.apache.org/jira/browse/CB-14133): Avoid fetching already installed packages
* [GH-23](https://github.com/apache/cordova-fetch/pull/23) [CB-14140](https://issues.apache.org/jira/browse/CB-14140): Remove shelljs
* [GH-18](https://github.com/apache/cordova-fetch/pull/18) Simplify installation location retrieval
* [GH-22](https://github.com/apache/cordova-fetch/pull/22) Handle missing options
* [GH-21](https://github.com/apache/cordova-fetch/pull/21) [CB-14066](https://issues.apache.org/jira/browse/CB-14066): Drop support for Node 4
* [CB-13503](https://issues.apache.org/jira/browse/CB-13503): fix trimID bug when using `file:path/to/plugin`
* [GH-12](https://github.com/apache/cordova-fetch/pull/12) Enabling support for git+http

## cordova-js

* [GH-168](https://github.com/apache/cordova-js/pull/168) [CB-14071](https://issues.apache.org/jira/browse/CB-14071): Drop Node 4 Support
* [GH-162](https://github.com/apache/cordova-js/pull/162) [CB-14156](https://issues.apache.org/jira/browse/CB-14156): Remove Browserify
* [GH-175](https://github.com/apache/cordova-js/pull/175) Remove support for deprecated platforms, unused dependency (express) and unused tasks

## cordova-serve

* [GH-14](https://github.com/apache/cordova-serve/pull/14) [CB-14198](https://issues.apache.org/jira/browse/CB-14198): (all) Fix bug when running `simulate --target=` under non-US Windows 10
* [GH-15](https://github.com/apache/cordova-serve/pull/15) Don't restore mocked resource prior to resolution
* [GH-13](https://github.com/apache/cordova-serve/pull/13) Dependency updates & replacing shelljs with which
* [GH-12](https://github.com/apache/cordova-serve/pull/12) [CB-14069](https://issues.apache.org/jira/browse/CB-14069): Drop Node 4, Add Node 10 Support
* [GH-10](https://github.com/apache/cordova-serve/pull/10) [CB-14191](https://issues.apache.org/jira/browse/CB-14191): (android) Fix bug with module requiring
