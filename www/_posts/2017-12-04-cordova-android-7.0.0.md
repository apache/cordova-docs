---
layout: post
author:
    name: Joe Bowser
    url: https://twitter.com/infil00p
title:  "Cordova Android 7.0.0 Released!"
categories: announcements
tags: news releases
---

We are happy to announce that `Cordova Android 7.0.0` has been released! 

With this release, we have changed the default project structure for Android projects.  People who currently use the CLI and treat everything in the platforms directory as a build artifact should not notice a difference. 

However this a major breaking change for people creating standalone Cordova Android projects.  This also means that the locations of files have changed and have been brought in line to the structure used by Android Studio.  
This may affect plugin.xml files and config.xml files that use edit-config, and make it so plugins that use edit-config will not be able to be compatible with both Android 6.x and Android 7.x.  To fix this issue, please do the following in your XML files: 

```
<!-- An existing config.xml -->
<edit-config file="AndroidManifest.xml" target="/manifest/application" mode="merge">

<!-- needs to change to -->
<edit-config file="app/src/main/AndroidManifest.xml" target="/manifest/application" mode="merge">
```

## Major Changes include:
 * Support for Java 1.8 language features in Cordova Plugins
 * CordovaInterface now has a Context getter so that contexts can be retrieved without an Activity
 * Cordova can now build for x86_64, arm64 and armeabi architecture when building plugins that use the NDK
 * The minimum Android API version supported is now API Level 19
 * Due to the directory structure change, we no longer support in-line upgrading, bringing us in line with iOS
 * ANT builds are no longer supported and the functionality has been removed.

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform remove android
    cordova platform add android@7.0.0

To add it explicitly:

    cordova platform add android@7.0.0

<!--more-->
## Curated Changelog
* [CB-13612](https://issues.apache.org/jira/browse/CB-13612) Fix the remapper so that XML files copy over and the Camera works again.
* [CB-13741](https://issues.apache.org/jira/browse/CB-13741) Bump `package.json` so we can install plugins
* [CB-13610](https://issues.apache.org/jira/browse/CB-13610) Compress the default app assets
* [CB-12835](https://issues.apache.org/jira/browse/CB-12835) add a Context getter in CordovaInterface
* [CB-8976](https://issues.apache.org/jira/browse/CB-8976) Added the `cdvVersionCodeForceAbiDigit` flag to the template build.gradle that appends 0 to the versionCode when `cdvBuildMultipleApks` is not set
* [CB-12291](https://issues.apache.org/jira/browse/CB-12291) (android) Add x86_64, arm64 and armeabi architecture flavors
* [CB-13602](https://issues.apache.org/jira/browse/CB-13602) We were setting the path wrong, this is hacky but it works
* [CB-13601](https://issues.apache.org/jira/browse/CB-13601) Fixing the standalone run scripts to make sure this works without using the CLI
* [CB-13580](https://issues.apache.org/jira/browse/CB-13580) fix build for multiple apks (different product flavors)
* [CB-13558](https://issues.apache.org/jira/browse/CB-13558) Upgrading the gradle so we can upload the AAR
* [CB-13297](https://issues.apache.org/jira/browse/CB-13297) This just works once you bump the project structure.  Java 1.8 compatibility baked-in
* [CB-11244](https://issues.apache.org/jira/browse/CB-11244) **Android** Studio 3 work, things have changed with how the platform is built
* [CB-11244](https://issues.apache.org/jira/browse/CB-11244) Found bug where the gradle subproject changes weren't actually getting written to the correct gradle file
* [CB-13470](https://issues.apache.org/jira/browse/CB-13470) Fix Clean so that it cleans the **Android** Studio structure
* [CB-11244](https://issues.apache.org/jira/browse/CB-11244) Adding specs for resource files inside an **Android** Studio Project
* [CB-11244](https://issues.apache.org/jira/browse/CB-11244) Added remapping for drawables
* [CB-11244](https://issues.apache.org/jira/browse/CB-11244) Found bug in Api.js where xml/strings.xml is used instead of values/strings.xml
* [CB-11244](https://issues.apache.org/jira/browse/CB-11244) Setup Api.js to support multiple builders based on project structure
* [CB-11244](https://issues.apache.org/jira/browse/CB-11244) Changing directory creation, will most likely hide this behind a flag for the next release of `cordova-android`, and then make it default in the next major pending feedback
* Adding the Studio Builder to build a project based on **Android** Studio, and deleting Ant, since Google does not support Ant Builds anymore. Sorry!

