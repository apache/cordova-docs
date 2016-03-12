---
layout: post
author:
    name: Sergey Grebnov
    url: https://twitter.com/sgrebnov
title:  "Apache Cordova iOS 3.9.0"
categories: announcements
tags: news releases
---
We are happy to announce that `Cordova iOS 3.9.0` has been released and will be the
default iOS version after next cordova-cli release.

**UPDATE:** To deploy to iOS devices, developers will have to update their ios-deploy
dependency to the version 1.4.0 or greater. Run `npm install ios-deploy -g` to download
the latest release.

Apart from a number of bug fixes, there is now support for checking system
requirements for iOS platform:

    $>cordova requirements ios
    
    Requirements check results for ios:
    Apple OS X: installed darwin
    Xcode: installed 6.3
    ios-deploy: installed 1.7.0
    ios-sim: installed 4.1.1

and support for [Signing the App for iOS platform](
http://cordova.apache.org/docs/en/dev/guide_platforms_ios_tools.md.html#signing-the-app):

    $>/path/to/my/project/cordova/build --codeSignIdentity="iPhone Distribtion" --provisioningProfile="926c2bd6-8de9-4c2f-8407-1016d2d12954"

To upgrade:

    npm install -g cordova
    cd my_project
    cordova platform update ios@3.9.0

<!--more-->    
To add it explicitly:

    cordova platform add ios@3.9.0 --save

For non-CLI projects or for pre-3.0 projects, refer to the [upgrade guides](http://cordova.apache.org/docs/en/dev/guide_platforms_index.md.html).


## What's new in iOS platform
* [CB-8586](https://issues.apache.org/jira/browse/CB-8586) Update ios-deploy minimum version to 1.4.0
* [CB-8485](https://issues.apache.org/jira/browse/CB-8485) Support for signed archive for iOS
* [CB-8197](https://issues.apache.org/jira/browse/CB-8197) Switch to nodejs for ios platform scripts
* [CB-7747](https://issues.apache.org/jira/browse/CB-7747) Update project template with new whitelist settings
* [CB-8954](https://issues.apache.org/jira/browse/CB-8954) Adds `requirements` command support to check_reqs module
* [CB-8907](https://issues.apache.org/jira/browse/CB-8907) Cordova ios emulate --list it shows duplicates when ios simulators are present for 7.x and 8.x
* [CB-9013](https://issues.apache.org/jira/browse/CB-9013) Fix listing of multiple devices in list-devices for iOS
* [CB-3360](https://issues.apache.org/jira/browse/CB-3360) Set custom User-Agent
* [CB-8710](https://issues.apache.org/jira/browse/CB-8710) Cordova-ios jasmine tests do not clean up build products, tests can only be run once
* [CB-8785](https://issues.apache.org/jira/browse/CB-8785) Add try/catch for evalJS
* [CB-8948](https://issues.apache.org/jira/browse/CB-8948) Clipboard fix for iOS Safari copy
* [CB-8855](https://issues.apache.org/jira/browse/CB-8855) Fix display ios devices with --list
* [CB-8295](https://issues.apache.org/jira/browse/CB-8295) Update app template with fix to CSP string
* [CB-8965](https://issues.apache.org/jira/browse/CB-8965) Copy cordova-js-src directory to platform folder during create
* [CB-9273](https://issues.apache.org/jira/browse/CB-9273) "Copy www build phase" node is not found
* [CB-9088](https://issues.apache.org/jira/browse/CB-9088) Sms urls won't open in iframe
* [CB-8621](https://issues.apache.org/jira/browse/CB-8621) Fix Q require in list-devices (Q -> q)
