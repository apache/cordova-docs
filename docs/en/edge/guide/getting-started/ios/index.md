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

iOS Platform Guide
========================

## Requirements and Support

Apple® tools required to build iOS applications run only on the OS X
operating system on Intel-based Macs. Xcode® 4.5 (the minimum required
version) runs only on OS X version 10.7 (Lion) or greater, and
includes the iOS 6 SDK (Software Development Kit).  To submit apps to
the Apple App Store℠ requires the latest versions of the Apple tools.

You can test many of the Cordova features using the iOS simulator
installed with the iOS SDK and Xcode, but you need an actual device to
fully test all of the app's device features before submitting to the
App Store.  The device must have at least iOS 5.x installed, the
minimum iOS version supported as of Cordova 2.3.  Supporting devices
include all iPad® models, iPhone® 3GS and above, and iPod® Touch 3rd
Generation or later. To install apps onto a device, you must also be a
member of Apple's
[iOS Developer Program](https://developer.apple.com/programs/ios/),
which costs $99 per year. This guide shows how to deploy apps to the
iOS simulator, for which you don't need to register with the developer
program.

## Install the SDK

There are two ways to download Xcode:

* from the [App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12),
  available by searching for "Xcode" in the __App Store__ application.

* from [Apple Developer Downloads](https://developer.apple.com/downloads/index.action),
  which requires registration as an Apple Developer.

Once Xcode is installed, several command-line tools need to be enabled
for Cordova to run. From the __Xcode__ menu, select __Preferences__,
then the __Downloads__ tab. Press the __Install__ button next to the
__Command Line Tools__ listing.

## Open a Project in the SDK

Using the Finder app, navigate to the location where you created the
project. This guide uses `~/Documents/CordovaXY/HelloWorld`.
Double-click the `HelloWorld.xcodeproj` file to open the project in
Xcode.

Your screen should look similar to:

![](img/guide/getting-started/ios/helloworld_project.png)

## Deploy to Emulator

  1. In the upper-left corner of Xcode, click on the Scheme drop-down list and select the project name, HelloWorld, as the target.
  2. Click the device section and select an iOS Simulator such as iPhone 6.0 Simulator as shown:
![](img/guide/getting-started/ios/select_xcode_scheme.png)

  3. Click the __Run__ button in your project window's toolbar to build, deploy and run the application in the simulator.



## Deploy to Device

  There are several requirements to deploy to a device. Since this information is not related directly to Cordova, please refer to the _Configuring Development and Distribution Assets_ section of Apple's [Tools Workflow Guide for iOS](http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959).

  - Join the Apple iOS Developer Program

  - Create a Provisioning Profile within the [iOS Provisioning Portal](https://developer.apple.com/ios/manage/overview/index.action).   You can use the Development Provisioning Assistant within the Provisioning Portal to create and install the profile and certificate for use within Xcode.

  - Verify that the Code Signing Identity in the Code Signing sections of the Hello World Xcode project settings has been set with your provisioning profile name.

   Deployment Steps:

  1. Plug your device into your Mac via the USB Cable.
  2. Select the Target and device

    1. In the upper-left corner of the Xcode window, click the Scheme drop-down list and select the project name, HelloWorld, as the target.
    2. Click the device section and select your device from the list.  If your device is plugged in via the USB but not visible in the device list, click the __Organizer__ button to determine any errors.

  3. Click the __run__ button to build, deploy and run the application on your device.

  ![](img/guide/getting-started/ios/HelloWorldStandard.png)

## Common Problems

  - [Start Developing iOS Apps Today](http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343) provides a quick overview of steps for developing iOS Apps.
  - [Member Center home page](https://developer.apple.com/membercenter/index.action) provides links to several iOS technical resources including technical resources, the provisioning portal, distribution guides and community forums.
  - [Tools Workflow Guide for iOS](http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959)
  - [Xcode 4 User Guide](http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215)
  - [Session Videos](https://developer.apple.com/videos/wwdc/2012/) from the Apple World Wide Developer Conference 2012 (WWDC2012)

~~~







### Building Your Own Applications

  __Include Cordova__

  All of the code for the sample application is contained within the
  Xcode project's `www` directory, where the starting page is named
  `index.html`.  Any page that invokes Cordova APIs must reference the
  version-specific `cordova-x.x.x.js` file, as shown in the sample
  `HelloWorld` application's `index.html`:

      <script type="text/javascript" src="cordova-x.x.x.js"></script>
      <script type="text/javascript" src="js/index.js"></script>
      <script type="text/javascript">
          app.initialize();
      </script>






### Credits

  Mac®, OS X®, Apple®, Xcode®, App Store℠, iPad®, iPhone®, iPod® and  Finder® are Trademarks of Apple Inc.



## Common Problems

__Deprecation Warnings:__ When an application programming interface
(API) is changed or replaced by another API, it is marked as
_deprecated_.  The API still works in the near term, but is eventually
removed.  Some of these deprecated interfaces are reflected in Apache
Cordova, and Xcode issues warnings about them when you build and
deploy an application.  The Xcode warning about the ‘invokeString’
method concerns functionality that launches the app from a custom
URL. While the mechanism to load from a custom URL has changed, this
code is included to provide backwards functionality for apps created
with older versions of Cordova.  The sample app does not use this
functionality, so these warnings can be ignored.

If you wish to remove the warnings you can remove the code that
references the deprecated invokeString API:

1. Edit the `Classes/MainViewController.m` file.

2. Find and comment out the following code by surrounding it with the
   begin, /*, and end, */, comment characters as highlighted in the
   code snippet below.

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

  3. Press Command s to save the file.

  4. Navigate to the AppViewDelegate.m file in the Classes Folder.

  5. Comment out the following line by placing a double slash at the beginning of line 73 as shown below:

        //self.viewController.invokeString = invokeString;

  6. Press Command-s to save the file.

  7. Press Command-b to rebuild the project and eliminate the warnings.

### Missing Headers

  Some users have encountered compilation errors relating to missing headers.  This refers to a problem in the build location and is fixed via Xcode preferences.

  1.  Within the Xcode menus select __Xcode &rarr; Preferences &rarr; Locations__.

  2. In the __Derived Data__ section click the __Advanced__ button and select __Unique__ as the __Build Location_ as shown:
![](img/guide/getting-started/ios/xcode_build_location.png)

  This is the default setting for a new Xcode install, but it may be set differently if you upgraded from an older version of Xcode.




  3. Fix Common Problems

      __No Developer Directory Found__

      The “Error: No developer directory found at /Developer” message is displayed if the create script can not find the location of the command-line tools within Xcode. This can occur if more than one version of Xcode is installed on the system or when upgrading from older versions of Xcode.  The solution is to run the xcode-select command to set the location.  If you have installed Xcode in the default location the command to execute is:

            sudo /usr/bin/xcode-select -switch /Applications/Xcode.app/Contents/Developer

      See [http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html](http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html) for more information on the xcode-select command if you have installed Xcode in a different location.




  - __Additional Parameters__

  The default create script copies the necessary common library files from the Cordova distribution directory into your Xcode project directory.  These files appear within the project's `CordovaLib` directory.  Some development organizations prefer that developers reference the common Cordova library files from a fixed location, which helps ensure that all developers use the exact same copy of the CordovaLib code.  To do this, add the `--shared` parameter to the `create` command.  The following command creates a project that references the CordovaLib directory from the iOS directory location in which you run the `create` script:

        ./create --shared ~/Documents/CordovaXY/HelloWorld org.apache.cordova.HelloWorld HelloWorld
     The Xcode project files are still in the `~/Documents/CordovaXY/HelloWorld` directory, but the CordovaLib files are referenced from the Cordova distribution directory.
  - __Additional Scripts__

  Within the cordova-ios/bin directory there is an additional script that changes the location of the CordovaLib directory to refer to a shared location after the project has been created,

         ./update_cordova_subproject path/to/your/project

  Most users are satisfied with the default project creation procedure and do not need this additional script. This script uses the location of CordovaLib directory at the same directory level as the bin directory from which it is run as the shared location for CordovaLib. To modify the newly created HelloWorld project to use a shared location for CordovaLib, execute the following command from the `bin` directory:

        ./update_cordova_subproject ~/Documents/CordovaXY/HelloWorld



### Apache Cordova

  The [Apache Cordova home page](http://cordova.apache.org/) contains all of the links below and more.

  - Cordova API documentation is available at [http://docs.cordova.io](http://docs.cordova.io)
  - [PhoneGap google group](https://groups.google.com/forum/?fromgroups=%23!forum/phonegap) to discuss and ask questions about Cordova.  This forum is monitored by Cordova developers as well as users.  When posting please include the platform, device type, Cordova version and as many details as possible about the error or problem.
  - File Cordova bugs at [https://issues.apache.org/jira/browse/CB](https://issues.apache.org/jira/browse/CB)

