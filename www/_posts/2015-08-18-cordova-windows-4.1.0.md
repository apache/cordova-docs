---
layout: post
author:
    name: Rob Paveza
    url: https://twitter.com/robpaveza
title:  "Apache Cordova Windows 4.1.0"
categories: announcements
tags: news releases
---
We are happy to announce that `Cordova Windows 4.1.0` has been released and will be the
default Windows version after next `cordova-cli` release.

This release aligns with the RTM release of Windows 10, and supports the web platform enhancements that it included, such as hosted apps and a new version of WinJS.  It also supports the new .NET Native compilation model for Cordova plugins which include a native or .NET component.

There are also a number of bug fixes, including platform dependency problems and the ability to perform a `cordova prepare` for Windows while on a Mac.

Finally, user-configurable packaging parameters are now fully baked, so that Windows code signing requirements don't overwrite code signing requirements for other platforms.  Use the `windows-packageVersion` attribute of `<widget>` in config.xml to specify an independent version for Windows Store submission, and to incorporate the name of the application which is assigned by the Windows Store, set the `<preference>` named `WindowsStoreIdentityName`.

Now there is support to see console.log messages and exceptions from your app in the console. This can be useful for quick diagnostics. In an admin command prompt, you can run:

    platforms\windows\cordova\log

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update windows@4.1.0

To add it explicitly:

    cordova platform add windows@4.1.0 --save

For non-CLI projects or for pre-3.0 projects, refer to the [upgrade guides](http://cordova.apache.org/docs/en/dev/guide_platforms_index.md.html).

<!--more-->

## What's new in the Windows platform
* [CB-9499](https://issues.apache.org/jira/browse/CB-9499): Run failure targeting x64 with an x86 version of Node
* [CB-8936](https://issues.apache.org/jira/browse/CB-8936): Logs: Stability and formatting improvements
* [CB-8936](https://issues.apache.org/jira/browse/CB-8936): Windows logs: Improvements
* [CB-9482](https://issues.apache.org/jira/browse/CB-9482): Mobile deployment failure
* [CB-9482](https://issues.apache.org/jira/browse/CB-9482): Mobile emulator deployment failure
* [CB-8936](https://issues.apache.org/jira/browse/CB-8936): Added logging functionality
* [CB-9458](https://issues.apache.org/jira/browse/CB-9458): Updated the baseline version of Universal Windows to 10240.
* [CB-9456](https://issues.apache.org/jira/browse/CB-9456): Fixed windows app crash on startup
* [CB-9450](https://issues.apache.org/jira/browse/CB-9450): `WindowsStoreIdentityName` preference for Store publishing
* [CB-9455](https://issues.apache.org/jira/browse/CB-9455): Fixed requirements check failure
* [CB-8965](https://issues.apache.org/jira/browse/CB-8965): Wait for project creation before adding to it.
* [CB-8965](https://issues.apache.org/jira/browse/CB-8965): Copy cordova-js-src directory to platform folder during create
* [CB-9359](https://issues.apache.org/jira/browse/CB-9359): Adds support for .appxbundle creation
* [CB-9410](https://issues.apache.org/jira/browse/CB-9410): Added preferences for Windows Store ingestion.
* [CB-9408](https://issues.apache.org/jira/browse/CB-9408): Added a `windows-packageVersion` attribute to the `<widget>` element
* [CB-9283](https://issues.apache.org/jira/browse/CB-9283): Add support for Windows 10 WinAppDeployCmd for deployment to remote devices.
* [CB-9239](https://issues.apache.org/jira/browse/CB-9239): Fixes issue with windows prepare on posix platforms.
* [CB-9235](https://issues.apache.org/jira/browse/CB-9235): Adds more checks based on the windows-target-version
* [CB-9159](https://issues.apache.org/jira/browse/CB-9159): Fix WP8.1 deploy when 'window-target-version' is 10.0.
* [CB-9335](https://issues.apache.org/jira/browse/CB-9335): Windows quality-of-life improvements.
* [CB-9271](https://issues.apache.org/jira/browse/CB-9271): Removed the unnecessary device capabilities from the Windows 10 app manifest.
* [CB-9252](https://issues.apache.org/jira/browse/CB-9252): Migrate WinJS to an NPM dependency
* [CB-9164](https://issues.apache.org/jira/browse/CB-9164): Better error message when deploying to Windows10 phone emulator
* [CB-9097](https://issues.apache.org/jira/browse/CB-9097): fail with a more descriptive error if run as admin

**Known Issues with 4.1.0 and Windows 10**

* The Windows 10 SDK includes a tool which can deploy to Windows 10 Phone, but not to a Windows 10 Phone Emulator.  To deploy to an emulator, open your solution file in Visual Studio.
