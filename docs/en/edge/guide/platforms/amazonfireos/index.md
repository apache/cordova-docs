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

# Amazon Fire OS Platform Guide

This guide shows how to set up your SDK development environment to
deploy Cordova apps for Amazon Fire OS devices, such as the Kindle Fire HDX.

See the following for more detailed platform-specific information:

* Amazon Fire OS Configuration
* Amazon Fire OS WebViews
* Amazon Fire OS Plugins

## Introduction

By targeting the Amazon Fire OS platform, Cordova developers can create hybrid web apps that take advantage of the advanced web engine integrated into Kindle Fire devices. Amazon WebView API (AWV) is a Chromium-derived web runtime exclusive to Fire OS. A drop-in replacement for the WebView that comes with Android devices, AWV makes it possible to create better performing and more powerful hybrid web apps by providing support for a faster JavaScript engine (V8), remote debugging, and hardware optimizations for Kindle Fire devices including an accelerated 2D Canvas, and access to HTML5 features not supported by Android’s built in WebView such as: CSS Calc, Form Validation, getUserMedia, IndexedDB, Web Workers, WebSockets and WebGL. 

For more information about the Amazon WebView API, please see the Amazon Developer Portal's [HTML5 Hybrid Apps page](https://developer.amazon.com/public/solutions/platforms/android-fireos/docs/building-and-testing-your-hybrid-app). For questions about getting started and other support issues, please see the Amazon Developer Portal [Forums - HTML5 Hybrid Apps](http://forums.developer.amazon.com/forums/category.jspa?categoryID=41).


## Requirements and Support

Developing Cordova apps for Amazon Fire OS requires installation of a variety of support files, including everything needed for Android development, as well as the Amazon WebView SDK. Check the list below for the required installs: 

* The Command-Line Interface
* [Android SDK](http://developer.android.com/sdk/)
* [Apache Ant](http://ant.apache.org)
* [Amazon WebView SDK](https://developer.amazon.com/public/solutions/platforms/android-fireos/docs/building-and-testing-your-hybrid-app)

## Installation


### Android SDK and Apache Ant

Install the Android SDK from
[developer.android.com/sdk](http://developer.android.com/sdk/).  You
may be presented with a choice of where to install the SDK, otherwise
move the downloaded `adt-bundle` tree to wherever you store
development tools.

You'll need to run the Android SDK Manager (`android` from a command line) at least once before starting your Cordova project. Make sure to install the most recent version of the Android SDK Tools and SDK Platform **specifically API level 19**. Please see [Setting up your Development Environment](https://developer.amazon.com/public/resources/development-tools/ide-tools/tech-docs/01-setting-up-your-development-environment) on the Amazon Developer Portal for more information about setting up your development environment for Kindle Fire OS devices. 

Install the Apache Ant build tool by [downloading an Ant binary distribution](http://ant.apache.org/bindownload.cgi), unzipping into a directory you can refer to later. See the [Ant manual](http://ant.apache.org/manual/index.html) for more info.

For Cordova command-line tools to work, you need to include the Android SDK's
`tools`, `platform-tools` and `apache-ant/bin` directories in your PATH environment.

#### Mac/Linux Path

On Mac, Linux or other Unix-like platforms, you can use a text editor to create or modify the
`~/.bash_profile` file, adding a line such as the following, depending
on where the SDK and Ant are installed:

    export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools:/Development/apache-ant/bin

This exposes SDK tools in newly opened terminal windows. Otherwise run
this to make them available in the current session:

    $ source ~/.bash_profile

#### Windows Path

To modify the PATH environment on Windows:

* Click on the __Start__ menu in the lower-left corner of the desktop,
  right-click on __Computer__, then click __Properties__.

* Click __Advanced System Settings__ in the column on the left.

* In the resulting dialog box, press __Environment Variables__.

* Select the __PATH__ variable and press __Edit__.

* Append the following to the PATH based on where you installed the
  SDK and Ant, for example:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools;C:\Development\apache-ant\bin

* Save the value and close both dialog boxes.

* You will also need to enable Java. Open a command prompt and
type `java`, if it does not run, append the location of the Java binaries to your PATH as well. Make sure %JAVA_HOME% is pointing to installed JDK directory. You might have to add JAVA_HOME environment variable seperately.

    	;%JAVA_HOME%\bin


### Amazon WebView SDK

In order to create Cordova apps using the Amazon Fire OS platform target, you'll need to download, unpack and install the Amazon WebView SDK support files. This step will only need to be done for your first Amazon Fire OS project, or if you upgrade Cordova.

* Download the Amazon WebView SDK from the [Amazon Developer Portal](https://developer.amazon.com/public/solutions/platforms/android-fireos/docs/building-and-testing-your-hybrid-app).

* Copy `awv_interface.jar` from the downloaded SDK to Cordova's working directory: 
	
	**Mac/Linux:** 
	`~/.cordova/lib/amazon-fireos/cordova/[cordova_release]/framework/libs/`

	**Windows:**
	`%USERPROFILE%\.cordova\lib\amazon-fireos\cordova\[cordova_release]\framework\libs`

***Note:*** Because of Cordova's on-demand install process, the `~/.cordova/lib/amazon-fireos` platform directory will not be created until you add the platform to your first project.

## Create New Project for Amazon Fire OS

Use the `cordova` utility to set up a new project, as described in The
Cordova The Command-line Interface. For example, in a source-code directory:

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build

***Note:*** The first time the amazon-fireos platform is installed on your system, it will download the appropriate files to the Cordova working directory, but will then fail as it is missing the AWV SDK support files (see above). Follow the instructions above to install the `awv_interface.jar`, then remove and re-add the amazon-fireos platform to your project. This step will only need to be done for first Amazon Fire OS project.


## Deploy to Device

To push an app directly to the device, make sure USB debugging is enabled on your device as described on the
[Android Developer Site](http://developer.android.com/tools/device.html),
and use a mini USB cable to plug it into your system.

You can push the app to the device from the command line:

    $ cordova run amazon-fireos

Alternately within Eclipse, right-click the project and choose __Run
As &rarr; Android Application__.

__Note__: Currently, testing via an emulator is not supported for Amazon WebView based apps, additionally the Amazon WebView API is only available on Fire OS devices. For more information, please see the [Amazon WebView API SDK](https://developer.amazon.com/public/solutions/platforms/android-fireos/docs/building-and-testing-your-hybrid-app) documentation.

### Run Flags

The run command accepts optional parameters as specified in the Cordova Command Line Interface document, Fire OS also accepts an additional `--debug` flag which will enable Chromium's Developer Tools for remote web debugging. 

To use Developer Tools, enter:

	$ cordova run --debug amazon-fireos

This will enable the tools on the running client. You can then connect to the client by port forwarding using the Android Debug Bridge (adb) referring to the app's package name. 

For example:

	adb forward tcp:9222 localabstract:com.example.helloworld.devtools

You can then use the DevTools via a Chromium-based browser by navigating to: `http://localhost:9222`.

### Optional Eclipse support

Once created, you can use the Eclipse that comes along with the Android SDK to modify the project. Beware that modifications made through Eclipse will be overwritten if you continue to use Cordova command line tools.

* Launch the __Eclipse__ application.

* Select the __New Project__ menu item.

* Choose __Android Project from Existing Code__ from the resulting dialog box, and press __Next__:
    ![](img/guide/platforms//eclipse_new_project.png)

* Navigate to `hello`, or whichever directory you created for the project, then to the `platforms/amazon-fireos` subdirectory.

* Eclipse will show you hello and hello-CorddovaLib - 2 projects to be added. Add both.

* Press __Finish__.

Once the Eclipse window opens, a red __X__ may appear to indicate
unresolved problems. If so, follow these additional steps:

* Right-click on the project directory.

* In the resulting __Properties__ dialog, select __Android__ from the navigation pane.

* For the project build target, select the highest Android API level (currently API Level 19) you have installed.

* Click __OK__.

* Select __Clean__ from the __Project__ menu. This should correct all the errors in the project.

