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

Cordova for Android requires the Android SDK which could be installed
on OS X, Linux or Windows operation system. See the Android SDK's
[System Requirements](http://developer.android.com/sdk/index.html#Requirements).

Cordova supports Android 4.0.x (starting with Android API level 14)
and higher.  As a general rule, Android versions become unsupported by Cordova as
they dip below 5% on Google's
[distribution dashboard](http://developer.android.com/about/dashboards/index.html).
Android versions earlier than API level 10, and the 3.x versions (Honeycomb,
API levels 11-13) fall significantly below that 5% threshold.

## Install Cordova Shell Tools

If you want to use Cordova's Android-centered shell tools in
conjunction with the SDK, download Cordova from
[cordova.apache.org](http://cordova.apache.org). Otherwise ignore this
section if you plan to use the cross-platform CLI tool described in
[The Command-Line Interface](../../cli/index.html).

The Cordova download contains separate archives for each platform. Be
sure to expand the appropriate archive, `android` in this case, within
an empty directory.  The relevant executible utilities are available
in the top-level `bin` directory. (Consult the __README__ file if
necessary for more detailed directions.)

These shell tools allow you to create, build, and run Android apps.
For information on the additional command-line interface that enables
plugin features across all platforms, see Using Plugman to Manage
Plugins. See Application Plugins for details on how to develop
plugins.

## Install the Java Development Kit (JDK)

Install [Java Development Kit (JDK) 7](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)
or later. 

When installing on Windows you also need to set `JAVA_HOME` Environment Variable
according to JDK installation path (for example, C:\Program Files\Java\jdk1.7.0_75).

## Install the Android SDK

Install the [Android Stand-alone SDK Tools](http://developer.android.com/sdk/installing/index.html?pkg=tools) or [Android Studio](http://developer.android.com/sdk/installing/index.html?pkg=studio). Procceed with `Android Studio` if you plan 
developing new Cordova for Android plugins or using native tools to
run and debug Android platform. Otherwise, `Android Stand-alone SDK Tools`
are enough to build and deploy Android application.

Detailed installation instructions are available as part of installation
links above.

For Cordova command-line tools to work, or the CLI that is based upon
them, you need to include the SDK's `tools` and `platform-tools`
directories in your `PATH`.  On a Mac or Linux, you can use a text editor to
create or modify the `~/.bash_profile` file, adding a line such as the
following, depending on where the SDK installs:

        export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools

This line in `~/.bash_profile` exposes these tools in newly opened terminal
windows. If your terminal window is already open in OSX, or to avoid a logout/login
on Linux, run this to make them available in the current terminal window:

        $ source ~/.bash_profile

To modify the `PATH` environment on Windows:

1. Click on the __Start__ menu in the lower-left corner of the desktop,
   right-click on __Computer__, then select __Properties__.

1. Select __Advanced System Settings__ in the column on the left.

1. In the resulting dialog box, press __Environment Variables__.

1. Select the __PATH__ variable and press __Edit__.

1. Append the following to the `PATH` based on where you installed the
   SDK, for example:

        ;C:\Development\android-sdk\platform-tools;C:\Development\android-sdk\tools

1. Save the value and close both dialog boxes.

## Install SDK Packages

Open Android SDK Manager (for example, via terminal: `android`) and install:

1. Android 5.1.1 (API 22) platform SDK
1. Android SDK Build-tools version 19.1.0 or higher
1. Android Support Repository (Extras)

See [Installing SDK Packages](http://developer.android.com/sdk/installing/adding-packages.html)
for more details.

## Configure an Emulator

Android sdk doesn't provide any default emulator instance by default. You can 
create a new one by running `android` on the command line.
The press __Tools &rarr; Manage AVDs__ (Android Virtual Devices),
then choose any item from __Device Definitions__ in the resulting dialog
box:

![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png)

Press __Create AVD__, optionally modifying the name, then press __OK__
to accept the changes:

![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png)

The AVD then appears in the __Android Virtual Devices__ list:

![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png)

To open the emulator as a separate application, select the AVD and
press __Start__. It launches much as it would on the device, with
additional controls available for hardware buttons:

![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png)


For a faster experience, you can use the `Virtual Machine Acceleration` to improve 
the execution speed.
Many modern CPUs provide extensions to execute Virtual Machines more efficiently.
Before attempting to use this type of acceleration, you need to determine if your 
current development system's CPU, supports one the following virtualization technologies:

* __Intel Virtualization Technology__ (VT-x, vmx) &rarr; [Intel VT-x supported processor list](http://ark.intel.com/products/virtualizationtechnology)
* __AMD Virtualization__ (AMD-V, SVM), only supported for Linux (Since May 2006, all CPUs AMD include AMD-V, except Sempron).

Another way to find out if your Intel processor supports VT-x Technology, it's by executing the 
`Intel Processor Identification Utility`, for `Windows`you can download it from the Intel [Download Center](https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7838),
or you can use the [booteable utility](https://downloadcenter.intel.com/Detail_Desc.aspx?ProductID=1881&DwnldID=7840&lang=eng), which is `OS Independent`.

After install and execute the `Intel Processor Identification Utility` over Windows, you will get the following window, 
in order to check if your CPU supports the Virtualization Technologies:

![]({{ site.baseurl }}/static/img/guide/platforms/android/intel_pid_util_620px.png)

In order to speed up the emulator, you need to download and install one or more `Intel x86 Atom` System Images, 
as well as the `Intel Hardware Accelerated Execution Manager (HAXM)`.

Open your Android SDK Manager, and select the `Intel x86 Atom` System Image, for whichever version that you want to test. Then go to `Extras` 
and select `Intel x86 Emulator Accelerator (HAXM)`, and install those packages:

![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_man_intel_image_haxm.png)

After download, run the Intel installer, which is available within your
Android SDK at `extras/intel/Hardware_Accelerated_Execution_Manager`. 
__Note__:`If you have any problems installing the package, you can find more information and step by step guidance check this` 
[Intel Article](http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture).

1. Install one or more `Intel x86 Atom` System Images as well as the
   `Intel Hardware Accelerated Execution Manager`, available under
   __Extras__.

1. Run the Intel installer, which is available within your Android SDK
   at `extras/intel/Hardware_Accelerated_Execution_Manager`.

1. Create a new AVD with the target set to an Intel image.

1. When starting the emulator, ensure there are no error messages
   indicating a failure to load HAX modules.

## Create a New Project

At this point, to create a new project you can choose between the
cross-platform CLI tool described in [The Command-Line Interface](../../cli/index.html), or
the set of Android-specific shell tools. From within a source-code
directory, here's the CLI approach:

        $ cordova create hello com.example.hello HelloWorld
        $ cd hello
        $ cordova platform add android
        $ ccordova prepare              # or "cordova build"

Here's the corresponding lower-level shell-tool approach for both Unix
and Windows:

        $ /path/to/cordova-android/bin/create /path/to/new/hello com.example.hello HelloWorld
        C:\path\to\cordova-android\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld

## Build the Project

If you are using the CLI in development, the project directory's
top-level `www` directory contains the source files. Run any of
these within the project directory to rebuild the app:

        $ cordova build                   # build all platforms that were added
        $ cordova build android           # build debug for only Android
        $ cordova build android --debug   # build debug for only Android
        $ cordova build android --release # build release for only Android

If you are using the Android-specific shell tools in development,
there is a different approach.  Once you generate the project, the
default app's source is available in the `assets/www` subdirectory.
Subsequent commands are available in its `cordova` subdirectory.

The `build` command cleans project files and rebuilds the app. Here is
the syntax for both Mac and Windows. The first pair of examples
generate debugging information, and the second builds the apps for
release:

        $ /path/to/project/cordova/build --debug
        C:\path\to\project\cordova\build.bat --debug
        
        $ /path/to/project/cordova/build --release
        C:\path\to\project\cordova\build.bat --release

## Deploy the app

You can use the `cordova` CLI utility to deploy the
application to the emulator or the device from the command line:

        $ cordova emulate android       #to deploy the app on a default android emulator
        $ cordova run android --device  #to deploy the app on a connected device

Otherwise, use the alternate shell interface:

        $ /path/to/project/cordova/run --emulator
        $ /path/to/project/cordova/run --device

You can use __cordova run android --list__ to see all available targets and 
__cordova run android --target=target_name__ to run application on a specific 
device or emulator (for example,  `cordova run android --target="Nexus4_emulator"`).

You can also use __cordova run --help__ to see additional build and run
options.

This pushes the app to the home screen and launches it:

![]({{ site.baseurl }}/static/img/guide/platforms/android/emulator2x.png)

When you `run` the app, you also `build` it. You can append additional
`--debug`, `--release`, and `--nobuild` flags to control how it is
built, or even whether a rebuild is necessary:

        $ /path/to/project/cordova/run --emulator --nobuild

## Other Commands

The following generates a detailed log of the app as it runs:

        $ /path/to/project/cordova/log
        C:\path\to\project\cordova\log.bat

The following cleans the project files:

        $ /path/to/project/cordova/clean
        C:\path\to\project\cordova\clean.bat

## Open a New Project in the SDK

Once android platform is added to your project, you can open it from 
within [Android Studio](http://developer.android.com/sdk/installing/index.html?pkg=studio):

1. Launch the __Android Studio__ application.

1. Select __Import Project (Eclipse ADT, Gradle, etc)__.

  ![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_project.png)

1. Select location where android platform is stored (`your/project/platforms/android`).
  
  ![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_select_location.png)

1. For the `Gradle Sync` question you can simply answer __Yes__.

You are all set now and can build and run the app directly from `Android Studio`.

![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_done.png)

See [Android Studio Overview](http://developer.android.com/tools/studio/index.html) and
And [Building and Running from Android Studio](http://developer.android.com/tools/building/building-studio.html) for more details.


