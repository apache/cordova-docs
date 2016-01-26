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

title: Android Platform Guide
---

# Android Platform Guide

This guide shows how to set up your SDK environment to deploy Cordova
apps for Android devices, and how to optionally use Android-centered
command-line tools in your development workflow.  You need to install
the Android SDK regardless of whether you want to use these
platform-centered shell tools or cross-platform Cordova CLI for
development. For a comparison of the two development paths, see the
[Overview](../../overview/index.html).  For details on the CLI, see [The Command-Line Interface](../../cli/index.html).

## Requirements and Support

### Java Development Kit (JDK)

Install [Java Development Kit (JDK) 7](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)
or later.

When installing on Windows you also need to set `JAVA_HOME` Environment Variable
according to JDK installation path (for example, `C:\Program Files\Java\jdk1.7.0_75`).

### Android SDK

Cordova for Android requires the Android SDK which could be installed
on OS X, Linux or Windows operation system. See the Android SDK's
[System Requirements](http://developer.android.com/sdk/index.html#Requirements).
Cordova's latest Android package supports up to Android [API-Level](http://developer.android.com/guide/topics/manifest/uses-sdk-element.html#ApiLevels) 23.
The supported Android API-Levels for the past few cordova-android releases can
be found in this table:

cordova-android Version | Supported Android API-Levels
------------------------|-----------------------------
5.X.X                   | 14 - 23
4.1.X                   | 14 - 22
4.0.X                   | 10 - 22
3.7.X                   | 10 - 21

Please note that the versions listed here are for Cordova's Android package,
[cordova-android](https://github.com/apache/cordova-android), and not for the
Cordova CLI. To determine what version of Cordova's Android package is installed
in your Cordova project, run the command `cordova platform ls` in the directory
that holds your project.

As a general rule, Android versions become unsupported by Cordova as
they dip below 5% on Google's
[distribution dashboard](http://developer.android.com/about/dashboards/index.html).

#### Installing the Android SDK

Install the [Android Stand-alone SDK Tools](http://developer.android.com/sdk/installing/index.html?pkg=tools) or [Android Studio](http://developer.android.com/sdk/installing/index.html?pkg=studio).
Proceed with Android Studio if you plan on
developing new Cordova for Android plugins or using native tools to
run and debug Android platform. Otherwise, the Android Stand-alone SDK Tools
are enough to build and deploy Android application.

Detailed installation instructions are available as part of installation
links above.

#### Update your PATH

For Cordova's CLI and command line tools to work correctly, you will need to
include the SDK's `tools` and `platform-tools` directories in your `PATH`.

##### OS X and Linux

On a Mac or Linux, you can use a text editor to create or modify the
`~/.bash_profile` file, adding a line such as the following
(substitute the paths with your local Android SDK installation's location):

        export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools

Reload your terminal to see this change reflected or run the following command:

        $ source ~/.bash_profile

##### Windows

On Windows, you must modify the `PATH` environment variable. These steps may
vary depending on your installed version of Windows:

1. Click on the __Start__ menu in the lower-left corner of the desktop

1. In the search bar, search for __Environment Variables__ and select __Edit the system Environment Variables__ from the options that appear

1. In the window that appears, click the __Environment Variables__ button

1. Select the __PATH__ variable and press __Edit__.

1. Append the relevant locations to the __PATH__ based on where you installed
   the SDK, for example:

        ;C:\Development\android-sdk\platform-tools;C:\Development\android-sdk\tools

1. Save the value and close both dialog boxes.

1. Close and reopen any command prompt windows to see the change reflected

#### Adding SDK Packages

After installing the Android SDK, you must also install the packages for
whatever [API level](http://developer.android.com/guide/topics/manifest/uses-sdk-element.html#ApiLevels)
you wish to target. It is recommended that you install the highest SDK version
that your version of cordova-android supports (see above).

Open Android SDK Manager (for example, run `android` from the terminal) and make
sure the following are installed:

1. Android Platform SDK for your targeted version of Android
1. Android SDK Build-tools version 19.1.0 or higher
1. Android Support Repository (found under "Extras")

See Android's documentation on [Installing SDK Packages](http://developer.android.com/sdk/installing/adding-packages.html)
for more details.

## Setting up an Emulator

If you wish to run your Cordova app on an Android emulator, you will first need
to create an Android Virtual Device (AVD). See the Android documentation for
[managing AVDs](http://developer.android.com/tools/devices/managing-avds.html)
and the [instructions](http://developer.android.com/tools/devices/emulator.html)
for configuring the emulator and setting up hardware acceleration.

Once your AVD is configured correctly, you should be able to see it by running
the command:

    $ cordova run --list

## Opening a Project in Android Studio

Cordova for Android projects can be opened in the Android IDE, [Android Studio](http://developer.android.com/sdk/installing/index.html?pkg=studio).
This can be useful if you wish to use Android Studio's built in Android
debugging/profiling tools or if you are developing Android plugins. Please note
that when opening your project in Android studio, it is recommended that you do
NOT edit your code in the IDE. This will edit the code in the `platforms` folder
of your project (not `www`), and changes are liable to be overwritten. Instead,
edit the `www` folder and copy over your changes by running `cordova build`.

Plugin developers wishing to edit their native code in the IDE should use the
`--link` flag when adding their plugin to the project via `cordova plugin add`.
This will link the files so that changes to the plugin files in the `platforms`
folder are reflected in your plugin's source folder (and vice versa).

To open a Cordova for Android project in Android Studio:

  1. Launch __Android Studio__.

  1. Select __Import Project (Eclipse ADT, Gradle, etc)__.

      ![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_project.png)

  1. Select the Android platform directory in your project (`<your-project>/platforms/android`).

      ![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_select_location.png)

  1. For the `Gradle Sync` question you can simply answer __Yes__.

Once it finishes importing, you should be able build and run the app directly
from __Android Studio__. See [Android Studio Overview](http://developer.android.com/tools/studio/index.html)
and [Building and Running from Android Studio](http://developer.android.com/tools/building/building-studio.html)
for more details.

![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_done.png)
