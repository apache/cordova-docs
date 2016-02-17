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

title: iOS Platform Guide
---

# iOS Platform Guide

This guide shows how to set up your SDK development environment to
deploy Cordova apps for iOS devices such as iPhone and iPad, 
and how to optionally use iOS-centered command-line tools in your 
development workflow. You need to install the SDK tools regardless of 
whether you want to use these platform-centered shell tools 
or cross-platform Cordova CLI for development. For a comparison of the two 
development paths, see the [Overview](../../overview/index.html#development-paths). 
For details on the CLI, see [The Command-Line Interface](../../cli/index.html).  

## Requirements and Support

Apple® tools required to build iOS applications only run on the OS X
operating system on Intel-based Macs. Xcode® 6.0 (the minimum required
version) runs only on OS X version 10.9 (Mavericks) or greater, and
includes the iOS 8 SDK (Software Development Kit).  To submit apps to
the Apple App Store℠ requires the latest versions of the Apple tools.

You can test many of the Cordova features using the iOS emulator
installed with the iOS SDK and Xcode, but you need an actual device to
fully test all of the app's device features before submitting to the
App Store.  The device must have at least iOS 6.x installed, the
minimum iOS version supported as of Cordova 3.0.  Supporting devices
include all iPad® models, iPhone® 3GS and above, and iPod® Touch 3rd
Generation or later. To install apps onto a device, you must also be a
member of Apple's
[iOS Developer Program](https://developer.apple.com/programs/ios/),
which costs [$99](https://developer.apple.com/support/purchase-activation/) per year. This guide shows how to deploy apps to the
iOS emulator, for which you don't need to register with the developer
program.

## Installing the Requirements

### Xcode

There are two ways to download Xcode:

* from the [App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12),
  available by searching for "Xcode" in the __App Store__ application.

* from [Apple Developer Downloads](https://developer.apple.com/downloads/index.action),
  which requires registration as an Apple Developer.

Once Xcode is installed, several command-line tools need to be enabled
for Cordova to run. From the __Xcode__ menu, select __Preferences__,
then the __Downloads__ tab. From the __Components__ panel, press the
__Install__ button next to the __Command Line Tools__ listing. 

### Deployment Tools

The [ios-sim](https://www.npmjs.org/package/ios-sim) and 
[ios-deploy](https://www.npmjs.org/package/ios-deploy) tools - allows you
to launch iOS apps into the iOS Simulator and iOS Device from the command-line.

To install them, run the following from command-line terminal:

        $ npm install -g ios-sim
        $ npm install -g ios-deploy

## Project Configuration

Installing Xcode will mostly set everything needed to get started.

## Signing an App

First, you should read through the [Code Signing Support Page](https://developer.apple.com/support/code-signing/) 
and the [App Distribution Workflows](https://developer.apple.com/library/prerelease/ios/documentation/IDEs/Conceptual/AppDistributionGuide/Introduction/Introduction.html).

### Using Flags

To sign an app, you need the following parameters:

| Parameter                | Flag                     | Description
|--------------------------|--------------------------|-----------------------------------
| Code Sign Identity       | `--codeSignIdentity`     | Name of the code signing identity to use for signing
| Provisioning Profile     | `--provisioningProfile`  | GUID representing the provisioning profile to be used for signing
| Code Sign Resource Rules | `--codesignResourceRules`| (Optional) Used to control which files in a bundle should be sealed by a code signature. For more details, read [The OS X Code Signing In Depth article](https://developer.apple.com/library/mac/technotes/tn2206/_index.html#//apple_ref/doc/uid/DTS40007919-CH1-TNTAG206) 

### Using build.json

Alternatively, you could specify them in a build configuration file (`build.json`)
using the `--buildConfig` argument to the same commands. Here's a sample of a
build configuration file:

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
    
### Using xcrun

You can also sign from the command line using the following command:

```
    xcrun -sdk iphoneos PackageApplication -v /home/user/app/build/device/MyApp.app -o /home/user/app/build/device/MyApp.ipa --sign "iPhone Development" --embed "7151ab45-6085-4ea1-9bcd-022b5cebe44b"
```

## Debugging

For details on the debugging tools that come with Xcode, see this [article](https://developer.apple.com/support/debugging)
and this [video](https://developer.apple.com/videos/play/wwdc2014-413/).

### Open a Project within Xcode

Cordova for iOS projects can be opened in Xcode. This can be useful if 
you wish to use Xcode built in debugging/profiling tools or if you are
developing iOS plugins. Please note that when opening your project in Xcode, 
it is recommended that you do NOT edit your code in the IDE. This will edit the code 
in the ```platforms``` folder of your project (not ```www```), and changes are liable to be overwritten. 
Instead, edit the ```www``` folder and copy over your changes by running ```cordova build```.

Plugin developers wishing to edit their native code in the IDE should use the ```--link``` flag when adding their 
plugin to the project via cordova plugin add. This will link the files so that changes to the plugin files in the 
platforms folder are reflected in your plugin's source folder (and vice versa).

Once the ios platform is added to your project and built using ```cordova build```, you can open it from 
within Xcode. Double-click to open the `${PROJECT_NAME}/platforms/ios/${PROJECT_NAME}.xcodeproj`
file. The screen should look like this:

![]({{ site.baseurl }}/static/img/guide/platforms/ios/helloworld_project.png)

## Platform Centered Workflow

cordova-ios includes a number of scripts that allow the platform to be used
without the full Cordova CLI. This development path may offer you a greater
range of development options in certain situations than the cross-platform CLI
tool described in [The Command-Line Interface](../../cli/index.html).
For example, you need to use shell tools when deploying a custom
Cordova WebView alongside native components. Before using this
development path, you must still configure the SDK environment
as described in [Requirements and Support](#link-requirements-and-support)
above.

For each of the scripts discussed below, refer to
[The Command-Line Interface](../../cli/index.html) for more information on their
arguments and usage. Each script has a name that matches the corresponding CLI
command. For example, `cordova-ios/bin/create` is equivalent to
`cordova create`.

To get started, either download the cordova-ios package from
[npm](https://www.npmjs.com/package/cordova-ios) or
[Github](https://github.com/apache/cordova-ios).

To create a project using this package, run the `create` script in the `bin`
folder:

    $ cordova-ios/bin/create ...

The created project will have a folder named `cordova` inside that contains
scripts for the project-specific Cordova commands (e.g. `run`, `build`, etc.).
Additionally, The project will feature a structure different from that of a
normal Cordova project. Notably, `/www` is moved to `/assets/www`.

To install plugins in this project, use the [Cordova Plugman Utility](../../../plugin_ref/plugman.html).


(Mac®, OS X®, Apple®, Xcode®, App Store℠, iPad®, iPhone®, iPod® and  Finder® are Trademarks of Apple Inc.)

