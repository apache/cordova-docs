---
layout: post
author:
    name: Jan Piotrowski
    url: https://twitter.com/sujan
title:  "Cordova Windows 6.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce the release of `cordova-windows 6.0.0`. 

This is a major release that changes functionality you might rely on, so please make sure to read the following list of changes:

## Changes

- **Windows 10 / UWP** builds are now default, meaning `cordova build windows` will now build a Windows 10 UWP app by default. Windows (Phone) 8.1 is still supported of course, just use `cordova build windows -- --appx=8.1-win`, `cordova build windows -- --appx=8.1-phone` or an equivalent configuration option.
- You can now build apps with a current installation of **Visual Studio 2017** (`15.5.x` at the time of writing) without any additional configuration or hacks (like the environment variable `VSINSTALLDIR` that was required for 5.0.0).
    * Note: [Visual Studio 2017 doesn't support Windows 8.1 apps any more](https://docs.microsoft.com/en-us/visualstudio/productinfo/vs2017-compatibility-vs#windows-store-and-windows-phone-apps), so you can only build these apps with Visual Studio 2015 installed.
- New **ENV variable `MSBUILDDIR`** allows to directly configure the MSBuild Tools to be used to build the app. While `VSINSTALLDIR` always has been a hack that accidentally also worked to switch between different MSBuildTools versions, we now we this functionality explicit:  Just set the ENV var to a your desired MSBuild folder (e.g. `C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\MSBuild\15.0\Bin` or `C:\Program Files (x86)\MSBuild\14.0\bin\`) and it will be used to build your project. 
    * If you have Visual Studio 2017 and Visual Studio 2015 installed at the same time, the normal logic would always choose Visual Studio 2017's MSBuild 15 - and fail on a Windows (Phone) 8.1 project. If you set the environment variable MSBuild 14, it can successfully build your 8.1 apps.
    * If the supplied path is invalid or doesn't contain a working MSBuild, the normal MSBuild selection logic will be triggered
- Fixes several bugs

## Installation

As usual this new version will be added as the default `cordova-windows` version only with the next release of Cordova CLI. Until then, please use these commands to remove and re-add the `windows` platform:

```
cordova platform rm windows
cordova platform add windows@6.0.0
```

### Known limitations

As it's often the case, the 6.0.0 release of cordova-windows is not perfect and has some known limitations:

- If you only have Visual Studio 2017 installed on your machine, you can not build Windows (Phone) 8.1 apps.
- "Windows 10 Phone emulator is currently not supported. If you want to deploy to emulator, use Visual Studio instead."
- [Some `build`](https://github.com/apache/cordova-windows/issues/266) and [requirements error messages](https://github.com/apache/cordova-windows/issues/267) are a bit misleading

## Feedback

If you encounter problems with this new version, you can use the [GitHub issues of the `cordova-windows` repository](https://github.com/apache/cordova-windows/issues) to do so now. (`cordova-windows` is the first Apache Cordova repository on GitHub that enabled issue tracking. Yay!)

## Open questions

Working on this update showed how much code is there to support other platform variants beside Windows 10 desktop.

TODO refine 

- Is Windows 8.1 support still needed or would it make sense to get rid of _really_ much code and do a 7.0.0 release that drops support for that?
- Windows 10 Phone? Still relevant?
- Where should the project move? What is missing? What should be supported? What do you need?

Please help us decide how to further develop `cordova-windows` by answering these questions below in the comments. Thanks!

<!--more-->
## Curated Changelog

* [CB-13889](https://issues.apache.org/jira/browse/CB-13889) Allow test failures for Visual Studio 2017 environments (#263)
* [CB-13878](https://issues.apache.org/jira/browse/CB-13878) MSBUILDDIR env variable (#262)
* [CB-13883](https://issues.apache.org/jira/browse/CB-13883) Visual Studio 2017 support (#261)
* [CB-13877](https://issues.apache.org/jira/browse/CB-13877) Clean up MSBuildTools.js (#259)
* [CB-13870](https://issues.apache.org/jira/browse/CB-13870) Improve check_reqs (#258)
* [CB-13877](https://issues.apache.org/jira/browse/CB-13877) more env information about msbuild and visual studio on appveyor (#257)
* [CB-13877](https://issues.apache.org/jira/browse/CB-13877) First MSBuildTools.js work: Debug output, move misplaced method, comments (#255)
* [CB-13875](https://issues.apache.org/jira/browse/CB-13875) add `prepare` script that can be called in e2e tests (#254)
* [CB-13817](https://issues.apache.org/jira/browse/CB-13817) Add new alias `uwp` for `--appx` param including tests (#251)
* [CB-13870](https://issues.apache.org/jira/browse/CB-13870) change default from UAP to 10.0 (#253)
* [CB-13829](https://issues.apache.org/jira/browse/CB-13829) Fix tests that were broken since [CB-13237](https://issues.apache.org/jira/browse/CB-13237) (#246)
* [CB-11968](https://issues.apache.org/jira/browse/CB-11968) Add support for config-file in `config.xml` (#235)
* [CB-13799](https://issues.apache.org/jira/browse/CB-13799) updated npm test for `cordova-windows`
* [CB-13812](https://issues.apache.org/jira/browse/CB-13812) run tests on AppVeyor with VS 2017 as well
* [CB-13641](https://issues.apache.org/jira/browse/CB-13641) support transparent splash screen background color. (#245)
* [CB-13175](https://issues.apache.org/jira/browse/CB-13175) fixing Windows8.1 crash on startup
* [CB-13422](https://issues.apache.org/jira/browse/CB-13422) (windows) Fix typo in build error message
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) ignoring cordova.js for eslint & removing comments and references to jshint
* [CB-13237](https://issues.apache.org/jira/browse/CB-13237) Default to UAP
* [CB-13155](https://issues.apache.org/jira/browse/CB-13155) Improved target parsing
* [CB-13022](https://issues.apache.org/jira/browse/CB-13022) Correct a VS installation warning during check_reqs
* [CB-12636](https://issues.apache.org/jira/browse/CB-12636) Fix check_reqs to properly find VS 2017
* [CB-12895](https://issues.apache.org/jira/browse/CB-12895) setup eslint and removed jshint
* Allow build when using --bundle and multiple architectures. This closes #175
* README: Fix broken Markdown headings
* [CB-12617](https://issues.apache.org/jira/browse/CB-12617) Removed node 0.x from CI
* [CB-12847](https://issues.apache.org/jira/browse/CB-12847) fixed `bugs` entry in `package.json`
* [CB-12784](https://issues.apache.org/jira/browse/CB-12784) Fixed a crash on Windows 10 Creators Update
* Add support for uap3.
* [CB-12018](https://issues.apache.org/jira/browse/CB-12018) updated tests to work with jasmine instead of jasmine-node
* [CB-12499](https://issues.apache.org/jira/browse/CB-12499) UWP: Dependent external libraries specified as resource-file not being referenced in Release mode
