---
layout: post
author:
    name: Shazron Abdullah
    url: https://twitter.com/shazron
title:  "Cordova iOS 4.4.0"
categories: announcements
tags: news releases
---

We are happy to announce a minor version of `Cordova iOS 4.4.0` has been released!

Three new features were added:
1. [&lt;resource-file&gt;](https://cordova.apache.org/docs/en/latest/config_ref/index.html#resource-file) tag support in config.xml
2. [Carthage support](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/webview.html)
3. Dynamic framework support through the ["embed" attribute](https://cordova.apache.org/docs/en/latest/plugin_ref/spec.html#framework) of the &lt;framework&gt; tag in plugin.xml (needs cordova-cli@7.0.0, which is coming soon)

Other notable issues:

1. Fixed build error on Xcode 8.3.2
2. Removed iOS 8 Support (only iOS 9 and greater supported now)
3. Removed node.js 0.x support

<br />

**Note:** When updating **iOS**, make sure to save your plugins as current unsaved plugins may not be reinstalled otherwise. Run the following command in your project to save your currently installed plugins into `config.xml`:

    cordova plugin save

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform rm ios
    cordova platform add ios@4.4.0

To add it explicitly:

    cordova platform add ios@4.4.0

<!--more-->
## What's new in iOS

* [CB-12009](https://issues.apache.org/jira/browse/CB-12009) - <resource-file> target attribute ignored on iOS when installing a Cordova plugin
* [CB-12673](https://issues.apache.org/jira/browse/CB-12673) - ios platform does not build on Xcode 8.3.2
* [CB-12665](https://issues.apache.org/jira/browse/CB-12665) - removing engineStrict as it is no longer supported
* [CB-8980](https://issues.apache.org/jira/browse/CB-8980) - Adding resource-file element to config.xml for iOS
* [CB-11895](https://issues.apache.org/jira/browse/CB-11895) - openURL: is deprecated on iOS 10
* [CB-10026](https://issues.apache.org/jira/browse/CB-10026) - Fix warnings in Objective-C tests
* [CB-12617](https://issues.apache.org/jira/browse/CB-12617) - added engine strict for users with older node versions
* [CB-11233](https://issues.apache.org/jira/browse/CB-11233) - Support installing frameworks into "Embedded Binaries" section of the Xcode project
* [CB-12577](https://issues.apache.org/jira/browse/CB-12577) - Fix module import warnings when using Cordova.framework (Carthage)
* [CB-12571](https://issues.apache.org/jira/browse/CB-12571) - Podfile gets overwritten and some dependencies disappear.
* [CB-12050](https://issues.apache.org/jira/browse/CB-12050) - ios: Create shared scheme for framework target, for Carthage support
* [CB-12384](https://issues.apache.org/jira/browse/CB-12384) - ios: Add Cocoa Touch Framework target for CordovaLib functionality
* [CB-12309](https://issues.apache.org/jira/browse/CB-12309) - Missing CLI help for --developmentTeam
* [CB-12405](https://issues.apache.org/jira/browse/CB-12405) - .ipa is uncompressed in preparation for 'run' command during a 'build', resulting in slow builds
* [CB-12523](https://issues.apache.org/jira/browse/CB-12523) - Remove iOS 8 support
* [CB-12522](https://issues.apache.org/jira/browse/CB-12522) - Remove node 0.x support in CI
* [CB-12377](https://issues.apache.org/jira/browse/CB-12377) - Fix bug with updating platform
* [CB-12473](https://issues.apache.org/jira/browse/CB-12473) - Delete the correct build output folder
* [CB-12402](https://issues.apache.org/jira/browse/CB-12402) [CB-12206](https://issues.apache.org/jira/browse/CB-12206) - Properly encode app name to generate XML files
* [CB-12388](https://issues.apache.org/jira/browse/CB-12388) - Fix memory leak due to strong reference
* [CB-12287](https://issues.apache.org/jira/browse/CB-12287) - Remove hardcoded sim build destination
* [CB-12018](https://issues.apache.org/jira/browse/CB-12018) - updated pkg.json with jasmine changes to work with jasmine instead of jasmine-node and rebased off of master branch.
* [CB-12018](https://issues.apache.org/jira/browse/CB-12018) - updated tests to function with jasmine instead of jasmine-node
* [CB-12341](https://issues.apache.org/jira/browse/CB-12341) - Possible crash in [CDVUserAgentUtil releaseLock:]
* [CB-12247](https://issues.apache.org/jira/browse/CB-12247) - Symlinking resource files leads to inability to install app on iOS 10
* [CB-6274](https://issues.apache.org/jira/browse/CB-6274) - Added support for BackgroundColor preference
* [CB-12098](https://issues.apache.org/jira/browse/CB-12098) - Update supportedInterfaceOrientations return type (removed spaces)
* [CB-11810](https://issues.apache.org/jira/browse/CB-11810) - (ios) fix unable to load index page from frameworkpath
* Removed no-longer-working and generally-unused `diagnose_project` script

