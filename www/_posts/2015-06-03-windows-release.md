---
layout: post
author:
    name: Nikhil Khandelwal
    url: https://twitter.com/nikhilkh
title:  "Apache Cordova Windows 4.0.0 release"
categories: announcements
tags: news releases
---

We are happy to announce that Cordova Windows 4.0.0 has been released!

##Key features
* The default Windows target version is now 8.1. Windows 8.0 support is deprecated and a warning will be issued when building for Windows 8.0. The support for Windows 8.0 will be removed in 6 months. If you have `windows-target-version` preference in config.xml set to 8.0, you will see this warning and you should consider changing it to 8.1.
* `windows8` platform keyword is deprecated. For all plugins, use `windows` as the platform keyword.  
* Support for Windows 10 Insider Preview and building using Visual Studio 2015 RC. More details can be found below. This support will evolve as Windows 10 release comes along.
* Support for specifying parameters for signing Windows apps - like signing certificate, publisher identity etc. More details can be found in [docs](http://cordova.apache.org/docs/en/edge/guide_platforms_win8_packaging.md.html#Windows%20Plugins)

##What's new in Windows 10
* Windows 10 Insider Preview introduces the [Universal Windows Platform (UWP)](https://msdn.microsoft.com/en-us/library/windows/apps/dn894631.aspx) which provides a guaranteed core API layer across devices. You can create a single app package that can be installed onto a wide range of devices. A single store makes it easy to publish apps across all device types - desktop, mobile, Xbox, iOT.
* In Windows 8 and 8.1, the app was loaded in the ms-appx  context. In Windows 10 for Cordova, by default the app is loaded in ms-appx-web  and have access to most Windows Runtime APIs. This allows you to [host remote content](https://msdn.microsoft.com/en-us/library/windows/apps/dn705792.aspx) in your Windows Cordova app. More details on how to customize this behavior can be found [here](http://cordova.apache.org/docs/en/edge/guide_platforms_win8_win10-support.md.html#Cordova%20for%20Windows%2010). 
* Some JavaScript libraries could not run in Windows 8/8.1 due to the safeHTML restriction and we needed to use winstore-jscompat. In Windows 10 Cordova apps, the security can be applied using [Content Security Policies](http://content-security-policy.com/).

<!--more-->
##Install
You will need to update to cordova-cli 5.1.1 or higher to use this version of the Windows platform:

To add it to an existing project:

    npm install -g cordova
    cordova platform update windows

Alternatively, to add it to a new project:

    npm install -g cordova
    cordova platform add windows

## Changes include:

* [CB-8954](https://issues.apache.org/jira/browse/CB-8954) Adds `requirements` command support to check_reqs module
* [CB-9073](https://issues.apache.org/jira/browse/CB-9073) Fixes build error when path to project contains `&` symbol
* [CB-8889](https://issues.apache.org/jira/browse/CB-8889) Persist app/package name and product ID during platform update.
* Updating appx manifest to a large extent now happens in the `prepare` step as opposed to the `build` step. This change implies that cordova-windows 4.0.0 can only work with with cordova CLI > 5.0
* [CB-8486](https://issues.apache.org/jira/browse/CB-8486) Support for creating signed package and build.json for Windows
* Add preview support for Windows 10 Universal Apps. To target Windows 10, add `<preference name="windows-target-version" value="10.0" />` to config.xml.
* The default windows target version is now 8.1.
* Support for `--appx` command line argument to override the windows target version
* [CB-8946](https://issues.apache.org/jira/browse/CB-8946): Added the `WindowsToastCapable` preference to indicate that the app can support toasts.  This is to support the Local Notifications plugin.
* [CB-8856](https://issues.apache.org/jira/browse/CB-8856) Fix 'Id' attribute is invalid when creating Windows Store submission build
* [CB-8307](https://issues.apache.org/jira/browse/CB-8307): Adding a 25-year expiration temporary certificate.
* [CB-8760](https://issues.apache.org/jira/browse/CB-8760) platform list doesn't show version for windows platform.

##Known Issues with 4.0.0 and Windows 10

* Windows 10 Insider Preview does not have a command-line compatible emulator deployment scenario.  To deploy to an emulator, open your solution file in Visual Studio.
* The Windows SDK included with Visual Studio 2015 RC does not include a tool to deploy to a Windows 10 Phone.  To deploy to a phone, open your solution file in Visual Studio.
* WinJS is included inline in the package.  In the future, it might be migrated to an NPM dependency. WinJS UI functionality is not included and should be add by you. (see [WinJS on Github](http://github.com/winjs/winjs))
