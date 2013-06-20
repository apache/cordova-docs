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

Getting Started with Android
============================

This guide describes how to set up your SDK development environment to
deploy Cordova apps for Android devices.

## Requirements and Support

See the [System Requirements](http://developer.android.com/sdk/index.html)
for the Android SDK.

Cordova supports Android 2.2, 2.3, and 4.x.  As a general rule,
platforms are deprecated as they dip below 5% on Google's
[distribution dashboard](http://developer.android.com/about/dashboards/index.html).

<!--
NOTE, doc said:
- Android 2.1 (Deprecated May 2013)
- Android 3.x (Deprecated May 2013)
-->

Developers should use the the `cordova` utility in conjunction with
the Android SDK.  See The Cordova Command-line Interface for
information how to install it, add projects, then build and deploy a
project.

## Install the SDK

Install the Android SDK from
[developer.android.com/sdk](http://developer.android.com/sdk/).  You
may be presented with a choice of where to install the SDK, otherwise
move the downloaded `adt-bundle` tree to wherever you store
development tools.

For Cordova command-line tools to work, you need to include the SDK's
`tools` and `platform-tools` directories in your PATH environment.  On
Mac, you can use a text editor to create or modify the
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

## Open a Project in the SDK

Use the `cordova` utility to set up a new project, as described in The
Cordova Command-line Interface. For example, in a source-code directory:

        $ cordova create hello com.example.hello "Hello World"
        $ cd hello
        $ cordova platform add android
        $ cordova build

Once created, here's how to use the SDK to modify it:

* Launch the __Eclipse__ application.
* Select the __New Project__ menu item.
* Choose __Android Project from Existing Code__ from the resulting dialog box, and press __Next__:
    ![](img/guide/getting-started/android/eclipse_new_project.png)
* Navigate to select `hello`, or whichever directory you created for the project.
* Press __Finish__.

Once the Eclipse window opens, a red __X__ may appear to indicate
unresolved problems. If so, follow these additional steps:

* Right-click on the project folder.
* In the resulting __Properties__ dialog, select __Android__ from the navigation pane.
* For the project build target, select the highest Android API level you have installed.
* Click __OK__.
* Select __Clean__ from the __Project__ menu. This should correct all the errors in the project.

## Deploy to Emulator

You can use the `cordova` utility to run an app in an emulator

- Right-click the project and go to **Run As &rarr; Android Application**
- Eclipse asks you to select an appropriate AVD. If there isn't one, then you'll need to create it.

__NOTE:__ For a faster experience, use an Intel-based emulator image.

- Open the Android SDK Manager:
  ![](img/guide/getting-started/android/eclipse_android_sdk_button.png)
- Install one or more `Intel x86 Atom` System Images as well as the `Intel Hardware Accelerated Execution Manager` (under Extras).
- Run the Intel installer, which has been downloaded to: `extras/intel/Hardware_Accelerated_Execution_Manager` within your Android SDK
- Create a new AVD with the Target set to an Intel image.
- When starting the emulator, ensure there are no error messages about the HAX module failing to load.

## Deploy to Device

Make sure USB debugging is enabled on your device and plug it into
your system. Information can be found on the [Android Developer
Site](http://developer.android.com/tools/device.html)

Right-click the project and go to **Run As &rarr; Android
Application**

