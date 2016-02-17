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
developing iOS plugins. Please note that when opening your project in Android studio, 
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

## Deploy to Emulator

To preview the app in the iOS emulator:

1. Make sure the _.xcodeproj_ file is selected in the left panel.

2. Select the __HelloCordova__ app in the panel immediately to the right.

3. Select the intended device from the toolbar's __Scheme__ menu, such
   as the iPhone 6.0 Simulator as highlighted here:

   ![]({{ site.baseurl }}/static/img/guide/platforms/ios/select_xcode_scheme.png)

4. Press the __Run__ button that appears in the same toolbar to the
   left of the __Scheme__. That builds, deploys and runs the
   application in the emulator. A separate emulator application opens
   to display the app:

   ![]({{ site.baseurl }}/static/img/guide/platforms/ios/HelloWorldStandard.png)

   Only one emulator may run at a time, so if you want to test the app
   in a different emulator, you need to quit the emulator application
   and run a different target within Xcode.

Xcode comes bundled with emulators for the latest versions of iPhone
and iPad. Older versions may be available from the __Xcode &rarr;
Preferences &rarr; Downloads &rarr; Components__ panel.

## Deploy to Device

For details about various requirements to deploy to a device, refer
to the _Launch Your App On Devices_ section of
Apple's
[About App Distribution Workflows](https://developer.apple.com/library/prerelease/ios/documentation/IDEs/Conceptual/AppDistributionGuide/Introduction/Introduction.html).
Briefly, you need to do the following before deploying:

1. Join the Apple iOS Developer Program.

2. Create a _Provisioning Profile_ within the
   [iOS Provisioning Portal](https://developer.apple.com/ios/manage/overview/index.action).
   You can use its _Development Provisioning Assistant_ to create and
   install the profile and certificate Xcode requires.

3. Verify that the _Code Signing_ section's _Code Signing Identity_
   within the project settings is set to your provisioning profile
   name.

To deploy to the device:

1. Use the USB cable to plug the device into your Mac.

2. Select the name of the project in the Xcode window's __Scheme__
   drop-down list.

3. Select your device from the __Device__ drop-down list. If it is
   plugged in via USB but still does not appear, press the
   __Organizer__ button to resolve any errors.

4. Press the __Run__ button to build, deploy and run the application
   on your device.

## Common Problems

__Deprecation Warnings__: When an application programming interface
(API) is changed or replaced by another API, it is marked as
_deprecated_.  The API still works in the near term, but is eventually
removed.  Some of these deprecated interfaces are reflected in Apache
Cordova, and Xcode issues warnings about them when you build and
deploy an application.

Xcode's warning about the `invokeString` method concerns functionality
that launches an app from a custom URL. While the mechanism to load
from a custom URL has changed, this code is still present to provide
backwards functionality for apps created with older versions of
Cordova.  The sample app does not use this functionality, so these
warnings can be ignored.  To prevent these warnings from appearing,
remove the code that references the deprecated invokeString API:

* Edit the _Classes/MainViewController.m_ file, surround the following
  block of code with `/*` and `*/` comments as shown below, then type
  __Command-s__ to save the file:

        (void)webViewDidFinishLoad:(UIWebView*)theWebView
        {
        // only valid if ___PROJECTNAME__-Info.plist specifies a protocol to handle
        /*
        if (self.invokeString) {
          // this is passed before the deviceready event is fired, so you can access it in js when you receive deviceready
          NSLog(@"DEPRECATED: window.invokeString - use the window.handleOpenURL(url) function instead, which is always called when the app is launched through a custom scheme url.");
          NSString* jsString = [NSString stringWithFormat:@"var invokeString = \"%@\";", self.invokeString];
          [theWebView stringByEvaluatingJavaScriptFromString:jsString];
        }
        */
        // Black base color for background matches the native apps
        theWebView.backgroundColor = [UIColor blackColor];

        return [super webViewDidFinishLoad:theWebView];
        }

* Edit the _Classes/AppViewDelegate.m_ file, comment out the following
  line by inserting a double slash as shown below, then type
  __Command-s__ to save the file:

        //self.viewController.invokeString = invokeString;

* Press __Command-b__ to rebuild the project and eliminate the warnings.

<!-- Does this fix only last until the next "cordova prepare"? -->

__Missing Headers__: Compilation errors relating to missing headers
result from problems with the build location, and can be fixed 
via Xcode preferences:

1. Select __Xcode &rarr; Preferences &rarr; Locations__.

2. In the __Derived Data__ section, press the __Advanced__ button and
   select __Unique__ as the __Build Location__ as shown here:

   ![]({{ site.baseurl }}/static/img/guide/platforms/ios/xcode_build_location.png)

This is the default setting for a new Xcode install, but it may be set
differently following an upgrade from an older version of Xcode.

For further information, consult Apple's documentation:

*  [Start Developing iOS Apps Today](http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343) provides a quick overview of steps for developing iOS Apps.

* [Member Center home page](https://developer.apple.com/membercenter/index.action)
   provides links to several iOS technical resources including
   technical resources, the provisioning portal, distribution guides
   and community forums.

* [Tools Workflow Guide for iOS](http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959)

* [Xcode User Guide](http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215)

* [Session Videos](https://developer.apple.com/videos/wwdc/2012/) from
  the Apple World Wide Developer Conference 2012 (WWDC2012)

* The [xcode-select command](http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html),
  which helps specify the correct version of Xcode if more than one is installed.

(Mac®, OS X®, Apple®, Xcode®, App Store℠, iPad®, iPhone®, iPod® and  Finder® are Trademarks of Apple Inc.)

