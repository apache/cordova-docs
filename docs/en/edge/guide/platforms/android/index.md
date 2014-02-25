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

# Android Platform Guide

This guide shows how to set up your SDK development environment to
deploy Cordova apps for Android devices. It shows how to install the
Android SDK, open an Android project in the SDK, and deploy it to an
emulator or device.  You need to follow the instructions to install
the Android SDK, regardless of whether you use the cross-platform
workflow discussed in the Overview, or the platform-centered shell
tools detailed at Android Command-line Tools.

See the following for more detailed platform-specific information:

* Android Configuration
* Android WebViews
* Android Plugins
* Upgrading Android
* Android Command-line Tools

The command-line tools above refer to versions prior to Cordova 3.0.
See The Command-Line Interface for information about the
current interface.

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

Developers should use the `cordova` utility in conjunction with
the Android SDK.  See The Command-Line Interface for
information how to install it, add projects, then build and deploy a
project.

Install the Android SDK from
[developer.android.com/sdk](http://developer.android.com/sdk/). The android sdk
is distributed as an 'adt-bundle-&lt;os&gt;-&lt;arch&gt;-&lt;ver&gt;' file.
On windows, the adt-bundle is packaged with an installer.
On OSX and Linux, simply unpack the 'adt-bundle' in the location you store development tools. 
[More detailed information on Android SDK setup can be found here](http://developer.android.com/sdk/installing/bundle.html)


For Cordova command-line tools to work, you need to include the SDK's
`tools` and `platform-tools` directories in your PATH environment. You also
will need `java` and `ant`. You may already have `java` and `ant` in your
PATH environment, try invoking them from a command line prompt to see if they
are missing, and add only what is missing to your PATH. Be aware that Mavericks
omits `ant` as compared to previous versions of OSX, so you may need to
install `ant` separately if you are using Mavericks or later of OSX. On
OSX or Linux, you can use a text editor to create or modify the
`~/.bash_profile` file, adding a line such as the following (modify the
locations to where the SDK is installed on your workstation):

    export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools

Add the paths for `java` and `ant` if needed. This line in `~/.bash_profile`
exposes these tools in newly opened terminal windows. If your terminal
window is already open in OSX, or to avoid a logout/login on Linux, run
this to make them available in the current terminal window:

    $ source ~/.bash_profile

To modify the PATH environment on Windows:

* Click on the __Start__ menu in the lower-left corner of the desktop,
  right-click on __Computer__, then click __Properties__.

* Click __Advanced System Settings__ in the column on the left.

* In the resulting dialog box, press __Environment Variables__.

* Select the __PATH__ variable and press __Edit__.

* Append the following to the PATH based on where you installed the
  SDK, for example:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools

* Save the value and close both dialog boxes.

* You may also need to add Java and Ant. Open a command prompt and
type `java`, and also type `ant`. For whichever fail to run, append to the PATH
like this:

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin

## Open a Project in the SDK

Use the `cordova` utility to set up a new project, as described in The
Cordova The Command-Line Interface. For example, in a source-code directory:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add android
        $ cordova build

Once created, you can use the Eclipse that comes along with the Android SDK to modify it:

* Launch the __Eclipse__ application.

* Select the __New Project__ menu item.

* Choose __Android Project from Existing Code__ from the resulting dialog box, and press __Next__:
    ![](img/guide/platforms/android/eclipse_new_project.png)

* Navigate to `hello`, or whichever directory you created for the project, then to the `platforms/android` subdirectory.

* Make sure both `hello` and `hello-CordovaLib` projects are selected to be imported. The `hello-CordovaLib` project is needed as of Cordova 3.3.0 because Cordova is now used as an Android Library instead of a .jar file.

* Press __Finish__.

Once the Eclipse window opens, a red __X__ may appear to indicate
unresolved problems. If so, follow these additional steps:

* Right-click on the project directory.

* In the resulting __Properties__ dialog, select __Android__ from the navigation pane.

* For the project build target, select the highest Android API level you have installed.

* Click __OK__.

* Select __Clean__ from the __Project__ menu. This should correct all the errors in the project.

## Deploy to Emulator

You can use the `cordova` utility to run an app in an emulator, or you
can run it within the SDK.  Either way, the SDK must first be
configured to display at least one device. To do so, use the Android
SDK Manager, a Java application that runs separately from Eclipse.
There are two ways to open it:

* Run `android` on the command line.

* From within Eclipse, press this toolbar icon:

  ![](img/guide/platforms/android/eclipse_android_sdk_button.png)

Once open, the Android SDK Manager displays various runtime libraries:

![](img/guide/platforms/android/asdk_window.png)

Choose __Tools &rarr; Manage AVDs__ (Android Virtual Devices), then
choose any item from __Device Definitions__ in the resulting dialog
box:

![](img/guide/platforms/android/asdk_device.png)

Press __Create AVD__, optionally modifying the name, then press __OK__
to accept the changes:

![](img/guide/platforms/android/asdk_newAVD.png)

The AVD then appears in the __Android Virtual Devices__ list:

![](img/guide/platforms/android/asdk_avds.png)

To open the emulator as a separate application, select the AVD and
press __Start__. It launches much as it would on the device, with
additional controls available for hardware buttons:

![](img/guide/platforms/android/asdk_emulator.png)

At this point you can use the `cordova` utility to deploy the
application to the emulator from the command line:

        $ cordova emulate android

If instead you work within Eclipse, right-click the project and
choose __Run As &rarr; Android Application__. You may be asked to
specify an AVD if none are already open.

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

![](img/guide/platforms/android/intel_pid_util_620px.png)

In order to speed up the emulator, you need to download and install one or more `Intel x86 Atom` System Images, 
as well as the `Intel Hardware Accelerated Execution Manager (HAXM)`.

Open your Android SDK Manager, and select the `Intel x86 Atom` System Image, for whichever version that you want to test. Then go to `Extras` 
and select `Intel x86 Emulator Accelerator (HAXM)`, and install those packages:

![](img/guide/platforms/android/asdk_man_intel_image_haxm.png)

After download, run the Intel installer, which is available within your
Android SDK at `extras/intel/Hardware_Accelerated_Execution_Manager`. 
__Note__:`If you have any problems installing the package, you can find more information and step by step guidance check this` 
[Intel Article](http://software.intel.com/en-us/android/articles/speeding-up-the-android-emulator-on-intel-architecture).

Once installed, in order to test it, create new a AVD  with the `CPU/ABI` set to an `Intel (Atom) x86`  Image:

![](img/guide/platforms/android/asdk_new_and_dev_intel.png)

If you are using `Linux-based system`, follow the instructions in the [Android Developer Site](http://developer.android.com/tools/devices/emulator.html#vm-linux).

When starting the emulator, ensure there are no error messages indicating a failure to load HAXM modules.

## Deploy to Device

To push an app directly to the device, make sure USB debugging is
enabled on your device as described on the
[Android Developer Site](http://developer.android.com/tools/device.html),
and use a mini USB cable to plug it into your system.

You can push the app to the device from the command line:

        $ cordova run android

Alternately within Eclipse, right-click the project and choose __Run
As &rarr; Android Application__.
