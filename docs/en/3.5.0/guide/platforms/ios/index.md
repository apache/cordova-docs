---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# iOS Platform Guide

This guide shows how to set up your SDK development environment to
deploy Cordova apps for iOS devices such as iPhone and iPad. See the
following for more detailed platform-specific information:

* iOS Configuration
* Upgrading iOS
* iOS WebViews
* iOS Plugins
* iOS Command-line Tools

The command-line tools above refer to versions prior to Cordova 3.0.
See The Command-Line Interface for information about the
current interface.

## Requirements and Support

Apple® tools required to build iOS applications run only on the OS X
operating system on Intel-based Macs. Xcode® 4.5 (the minimum required
version) runs only on OS X version 10.7 (Lion) or greater, and
includes the iOS 6 SDK (Software Development Kit).  To submit apps to
the Apple App Store℠ requires the latest versions of the Apple tools.

You can test many of the Cordova features using the iOS emulator
installed with the iOS SDK and Xcode, but you need an actual device to
fully test all of the app's device features before submitting to the
App Store.  The device must have at least iOS 5.x installed, the
minimum iOS version supported as of Cordova 2.3.  Supporting devices
include all iPad® models, iPhone® 3GS and above, and iPod® Touch 3rd
Generation or later. To install apps onto a device, you must also be a
member of Apple's
[iOS Developer Program](https://developer.apple.com/programs/ios/),
which costs $99 per year. This guide shows how to deploy apps to the
iOS emulator, for which you don't need to register with the developer
program.

## Install the SDK

There are two ways to download Xcode:

* from the [App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12),
  available by searching for "Xcode" in the __App Store__ application.

* from [Apple Developer Downloads](https://developer.apple.com/downloads/index.action),
  which requires registration as an Apple Developer.

Once Xcode is installed, several command-line tools need to be enabled
for Cordova to run. From the __Xcode__ menu, select __Preferences__,
then the __Downloads__ tab. From the __Components__ panel, press the
__Install__ button next to the __Command Line Tools__ listing.

## Open a Project in the SDK

Use the `cordova` utility to set up a new project, as described in The
Cordova The Command-Line Interface. For example, in a source-code directory:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add ios
        $ cordova prepare              # or "cordova build"

Once created, you can open it from within Xcode. Double-click to open
the `hello/platforms/ios/hello.xcodeproj` file.  The screen should
look like this:

![](img/guide/platforms/ios/helloworld_project.png)

## Deploy to Emulator

To preview the app in the iOS emulator:

1. Make sure the _.xcodeproj_ file is selected in the left panel.

2. Select the __hello__ app in the panel immediately to the right.

3. Select the intended device from the toolbar's __Scheme__ menu, such
   as the iPhone 6.0 Simulator as highlighted here:

   ![](img/guide/platforms/ios/select_xcode_scheme.png)

4. Press the __Run__ button that appears in the same toolbar to the
   left of the __Scheme__. That builds, deploys and runs the
   application in the emulator. A separate emulator application opens
   to display the app:

   ![](img/guide/platforms/ios/HelloWorldStandard.png)

   Only one emulator may run at a time, so if you want to test the app
   in a different emulator, you need to quit the emulator application
   and run a different target within Xcode.

Xcode comes bundled with emulators for the latest versions of iPhone
and iPad. Older versions may be available from the __Xcode &rarr;
Preferences &rarr; Downloads &rarr; Components__ panel.

## Deploy to Device

For details about various requirements to deploy to a device, refer
to the _Configuring Development and Distribution Assets_ section of
Apple's
[Tools Workflow Guide for iOS](http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959).
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

   ![](img/guide/platforms/ios/xcode_build_location.png)

This is the default setting for a new Xcode install, but it may be set
differently following an upgrade from an older version of Xcode.

For further information, consult Apple's documentation:

*  [Start Developing iOS Apps Today](http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343) provides a quick overview of steps for developing iOS Apps.

* [Member Center home page](https://developer.apple.com/membercenter/index.action)
   provides links to several iOS technical resources including
   technical resources, the provisioning portal, distribution guides
   and community forums.

* [Tools Workflow Guide for iOS](http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959)

* [Xcode 4 User Guide](http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215)

* [Session Videos](https://developer.apple.com/videos/wwdc/2012/) from
  the Apple World Wide Developer Conference 2012 (WWDC2012)

* The [xcode-select command](http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html),
  which helps specify the correct version of Xcode if more than one is installed.

(Mac®, OS X®, Apple®, Xcode®, App Store℠, iPad®, iPhone®, iPod® and  Finder® are Trademarks of Apple Inc.)

