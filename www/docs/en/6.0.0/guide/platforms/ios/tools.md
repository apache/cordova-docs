---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

title: iOS Shell Tool Guide
---

# iOS Shell Tool Guide

This guide shows how to use Cordova's set of platform-centered shell
tools to develop iOS apps. This development path, discussed in the
[Overview](../../overview/index.html), may offer you a greater range of development options for iOS
than the cross-platform CLI tool described in The Command-Line
Interface.  For example, you need to use shell tools when deploying a
custom Cordova WebView alongside native components. Before using
either development path, you must first configure the SDK environment
as described in the [iOS Platform Guide](index.html).  These tools rely upon
Xcode's command-line tools such as `xcode-select` and `xcodebuild`.

To enable shell tools for iOS, download Cordova from
[cordova.apache.org](http://cordova.apache.org). The download contains
separate archives for each platform. Expand each you wish to target,
`ios` in this case. The relevant tools are typically available in the
top-level `bin` directory, otherwise consult the __README__ file for
more detailed directions.

These tools allow you to create, build, and run iOS apps.  For
information on the additional command-line interface that enables
plugin features across all platforms, see Using Plugman to Manage
Plugins. See Application Plugins for details on how to develop
plugins.

## Create a Project

Run the `create` command, specifying the existing path to the project,
the reverse-domain-style package identifier, and the app's display
name.

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName

## Build a Project

        $ /path/to/my_new_project/cordova/build

## Run App on an Emulator

        $ /path/to/my_new_project/cordova/run --emulator

## Run App on a Device

        $ /path/to/my_new_project/cordova/run --device

## Signing the App

You can learn more about signing, distributing iOS apps, creating a certificate and provisioning profile on the [iOS Developer Library](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/ConfiguringYourApp/ConfiguringYourApp.html).

To sign the app in Cordova you need the following:

* Code signing identity (`--codeSignIdentity`): [Using XCode](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingCertificates/MaintainingCertificates.html#//apple_ref/doc/uid/TP40012582-CH31-SW6) you can create a new iOS signing identity and add it to your keychain. The type of of the code signing identity - typically distribution or development, needs to be specified here.

* Provisioning profile (`--provisioningProfile`):  [Using the Apple Member Center](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html#//apple_ref/doc/uid/TP40012582-CH30-SW61) you can create a provisioning profile. Download the provisioning profile onto your machine and launch it in XCode to register it. It is copied here on your Mac: ~/Library/MobileDevice/Provisioning\ Profiles/. Opening it in a text editor, you can find the UUID which needs to be specified here.

* Code signing resource rules(`--codeSignResourceRules`) (Optional): Allows you to specify custom signing resource rules.

These parameters can be specified using the command line arguments above to `build` or `run` scripts:

        $ /path/to/my_new_project/cordova/build --codeSignIdentitiy="iPhone Distribtion" --provisioningProfile="926c2bd6-8de9-4c2f-8407-1016d2d12954" 

Alternatively, you could specify them in a build configuration file (build.json) using (`--buildConfig`) argument. Here's a sample of a build configuration file:

    {
         "ios": {
             "debug": {
                 "codeSignIdentitiy": "iPhone Development",
                 "provisioningProfile": "926c2bd6-8de9-4c2f-8407-1016d2d12954",
             },
             "release": {
                 "codeSignIdentitiy": "iPhone Distribution"
                 "provisioningProfile": "70f699ad-faf1-4adE-8fea-9d84738fb306",
             }
         }
     }

There is also support to mix and match command line arguments and parameters in build.json file. Values from the command line arguments will get precedence. 

## Logging

        $ /path/to/my_new_project/cordova/log

