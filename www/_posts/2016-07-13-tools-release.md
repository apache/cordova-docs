---
layout: post
author:
    name: Vladimir Kotikov
    url: https://github.com/vladimir-Kotikov
title:  "Tools Release"
categories: news
tags: release tools
---

New updates of `cordova`, `cordova-lib`, `cordova-common` and `cordova-fetch` are now live!

* [cordova@6.3.0](https://www.npmjs.org/package/cordova)
* [cordova-lib@6.3.0](https://www.npmjs.org/package/cordova-lib)
* [cordova-common@1.4.0](https://www.npmjs.org/package/cordova-lib)
* [cordova-fetch@1.0.1](https://www.npmjs.org/package/cordova-lib)

Release Highlights:

* [CB-11023](https://issues.apache.org/jira/browse/CB-11023) Add edit-config functionality
* [CB-11412](https://issues.apache.org/jira/browse/CB-11412) template support for www folders
* [CB-11349](https://issues.apache.org/jira/browse/CB-11349) added --fetch and cordova fetch to create --template
* [CB-11491](https://issues.apache.org/jira/browse/CB-11491) Introduce before_deploy hook

Starting from this version app and plugin developers will get the ability to edit XML configuration files from `config.xml` and
`plugin.xml` files using `edit-config` directive. The documentation for this feature is still under development but for now you can refer to this
[pull request](https://github.com/apache/cordova-docs/pull/614/files?short_path=05fc570#diff-05fc570968adb1e99e14d627e082f7ea)

Also the `cordova-fetch` feature is now available for `create` command and you can use it when creating new app from template.

    cordova create Foo --template TEMPLATE_NAME --fetch

To update your cordova CLI:

    npm install -g cordova@latest

Make sure to report any issues you find at [issues.cordova.io](http://issues.cordova.io/)!

<!--more-->
# Changes include:

## cordova-lib

* [CB-11491](https://issues.apache.org/jira/browse/CB-11491) Introduce before_deploy hook
* [CB-11412](https://issues.apache.org/jira/browse/CB-11412) template support for www folders
* Fix config.xml path in PlatformApi.prepare
* [CB-11412](https://issues.apache.org/jira/browse/CB-11412) improve template implementation
* [CB-11164](https://issues.apache.org/jira/browse/CB-11164) Allow forced dependent plugin removal
* [CB-11339](https://issues.apache.org/jira/browse/CB-11339) Add a warning about prerelease platform usage
* [CB-11349](https://issues.apache.org/jira/browse/CB-11349) added --fetch and cordova fetch to create --template
* [CB-11337](https://issues.apache.org/jira/browse/CB-11337) Use latest released platform version in e2e tests
* [CB-11274](https://issues.apache.org/jira/browse/CB-11274) Platform browser: wrong path for config.xml
* [CB-11274](https://issues.apache.org/jira/browse/CB-11274) Make serve dashboard take config.xml -> content.src entry point into account
* [CB-11261](https://issues.apache.org/jira/browse/CB-11261) Cut out '-nightly' prerelease tag when checking plugin engines
* [CB-9858](https://issues.apache.org/jira/browse/CB-9858) added fetch tests to travis
* [CB-9858](https://issues.apache.org/jira/browse/CB-9858) fixed failing travis and appveyor tests

## cordova-cli

* [CB-11412](https://issues.apache.org/jira/browse/CB-11412) removed link-to, aliased copy-from to template
* [CB-11349](https://issues.apache.org/jira/browse/CB-11349) passing --fetch to create
* [CB-11284](https://issues.apache.org/jira/browse/CB-11284) Telemetry: Track platforms/plugins subcommands(add/rm/etc...)
* [CB-11262](https://issues.apache.org/jira/browse/CB-11262) Add a warning about prerelease lib/cli usage
* [CB-11263](https://issues.apache.org/jira/browse/CB-11263) 'cordova telemetry help' should display help text

## cordova-common

* [CB-11023](https://issues.apache.org/jira/browse/CB-11023) Add edit-config functionality

## cordova-fetch

* Fixed broken fetch tests
* enhanced cordova-fetch to better handle multiple fetches via git urls
* [CB-11252](https://issues.apache.org/jira/browse/CB-11252) Fix cordova-fetch tests
* [CB-11252](https://issues.apache.org/jira/browse/CB-11252) minor fix to trimID function in cordova-fetch
* [CB-11252](https://issues.apache.org/jira/browse/CB-11252) Fix cordova fetch for scoped packages
* [CB-11252](https://issues.apache.org/jira/browse/CB-11252) added scoped package test to cordova-fetch

## Pinned Platform Versions for **Cordova CLI 6.3.0**

* Cordova Amazon-FireOS: ~3.6.3
* Cordova Android: ~5.2.0
* Cordova BlackBerry10: ~3.8.0
* Cordova Browser: ~4.1.0
* Cordova FirefoxOS: ~3.6.3
* Cordova iOS: ~4.2.0
* Cordova OSX: ~4.0.1
* Cordova Ubuntu: ~4.3.4
* Cordova Windows: ~4.4.0
* Cordova WebOS: ~3.7.0
* Cordova WP8: ~3.8.2
