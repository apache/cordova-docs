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

title: Amazon Fire OS Platform Guide
---

# Amazon Fire OS Platform Guide

This guide shows how to set up your SDK development environment to
deploy Cordova apps for Amazon Fire OS devices, such as the Kindle Fire HDX.

See the following for more detailed platform-specific information:

* [Amazon Fire OS Configuration](config.html)
* [Amazon Fire OS WebViews](webview.html)
* [Amazon Fire OS Plugins](plugin.html)

## Requirements and Support

Developing Cordova apps for Amazon Fire OS requires the Android SDK and the Amazon WebView SDK. Check the requirements for these SDKs at the links below:

* [Android SDK System](http://developer.android.com/sdk/)

* [Amazon WebView SDK](https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv)

## Installation


### Android SDK

Install the Android SDK from
[developer.android.com/sdk](http://developer.android.com/sdk/).  You
may be presented with a choice of where to install the SDK, otherwise
move the downloaded `adt-bundle` tree to wherever you store
development tools.

For Cordova command-line tools to work, you need to include the SDK's
`tools` and `platform-tools` directories in your PATH environment.

On Mac, Linux or other Unix-like platforms, you can use a text editor to create or modify the
`~/.bash_profile` file, adding a line such as the following, depending
on where the SDK installs:

    export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools

This exposes SDK tools in newly opened terminal windows. Otherwise run
this to make them available in the current session:

    $ source ~/.bash_profile

To modify the PATH environment on Windows 7:

* Click on the __Start__ menu in the lower-left corner of the desktop,
  right-click on __Computer__, then click __Properties__.

* Click __Advanced System Settings__ in the column on the left.

* In the resulting dialog box, press __Environment Variables__.

* Select the __PATH__ variable and press __Edit__.

* Append the following to the PATH based on where you installed the
  SDK, for example:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools

* Save the value and close both dialog boxes.

You may also need to enable Java and Ant. Open a command prompt and
type `java`, and also type `ant`. Append to the PATH whichever fail to
run:

    ;%JAVA_HOME%\bin;%ANT_HOME%\bin

### Amazon WebView SDK

Download the Amazon WebView SDK from the [Amazon Developer Portal](https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv).

* Create a `libs/` folder in `~/.cordova/lib/amazon-fireos/cordova/3.1.0/` folder.
* Add the `awv_interface.jar` from the downloaded SDK to  `~/.cordova/lib/amazon-fireos/cordova/3.1.0/libs/`


## Open a Project in the SDK

Use the `cordova` utility to set up a new project, as described in The
Cordova The Command-line Interface. For example, in a source-code directory:

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build

Once created, you can use the Eclipse that comes along with the Android SDK to modify it:

* Launch the __Eclipse__ application.

* Select the __New Project__ menu item.

* Choose __Android Project from Existing Code__ from the resulting dialog box, and press __Next__:
    ![]({{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png)

* Navigate to `hello`, or whichever directory you created for the project, then to the `platforms/amazon-fireos` subdirectory.

* Press __Finish__.

Once the Eclipse window opens, a red __X__ may appear to indicate
unresolved problems. If so, follow these additional steps:

* Right-click on the project directory.

* In the resulting __Properties__ dialog, select __Android__ from the navigation pane.

* For the project build target, select the highest Android API level you have installed.

* Click __OK__.

* Select __Clean__ from the __Project__ menu. This should correct all the errors in the project.

## Deploy to Device

To push an app directly to the device, make sure USB debugging is enabled on your device as described on the
[Android Developer Site](http://developer.android.com/tools/device.html),
and use a mini USB cable to plug it into your system.

You can push the app to the device from the command line:

    $ cordova run amazon-fireos

Alternately within Eclipse, right-click the project and choose __Run
As &rarr; Android Application__.

__Note__: Currently, testing via an emulator is not supported for Amazon WebView based apps.
