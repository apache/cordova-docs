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

# BlackBerry 10 Platform Guide

This guide shows how to set up your development environment to build and deploy Cordova apps for BlackBerry 10 devices.

For previous versions of BlackBerry, you need to use a different set of command-line tools, described in BlackBerry Platform Guide.

## Requirements

The development environment is available on Windows, Mac and Linux.

Developers should use the `cordova` utility in conjunction with the Blackberry Native SDK.  See The Command-line Interface for information how to install `cordova`, add projects, then build and deploy.

## Install the BlackBerry Native SDK

The BlackBerry Native SDK is available from [developer.blackberry.com](http://developer.blackberry.com/native/download/).

After installing the BlackBerry Native SDK, its tools must be added to your system path. Either manually add the bin directory to your path or run the following scripts from the directory where you installed the NDK:

Windows 

    bbndk-env.bat

Linux/Mac 

    source bbndk-env.sh

## Set up Emulators

If you wish to run a device emulator, download and install the BlackBerry 10 Simulator.

* [Download](http://developer.blackberry.com/native/download/)
* [Getting Started](http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html)

## Set up for Signing

If you wish to test on a device or distribute apps through BlackBerry World, your system must be setup for code signing.

To obtain a signing key, go to the BlackBerry website and make sure to retain the password you specify. Then run the `blackberry-signer` utility that is included with the BlackBerry Native SDK.

Detailed instuctions can be found here:

* [Register for your code signing key.](https://www.blackberry.com/SignedKeys/codesigning.html)
* [Set up your system for code signing.](https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html)

## Create a Project

Use the `cordova` utility to set up a new project, as described in The Command-line Interface. For example, in a source-code
directory:
 
    cordova create hello com.example.hello
    cd hello
    cordova platform add blackberry10
    cordova build

*Note*: the create command bootstraps dependency installation through the 'npm install' command. Depending on installation directory and system permissions, this may require admin privileges. If a problem is encountered on OSX/Linux, run 'sudo npm install' before using the create command. On Windows, run 'npm install' in a command line utility opened with admin privileges.

## Deploy to Emulator

Before testing an app on either an emulator or a device, you need to add a _target_ to your project. Each is identified with a unique name, and associated with an IP address. You need to get the IP address from the emulator before you use it to view apps.

Launch the emulator image, then choose __Settings__ from the home screen:

![](img/guide/platforms/blackberry10/bb_home.png)

Navigate to the __Security and Privacy &rarr; Development Mode__ section, enable the option, and obtain the IP address:

![](img/guide/platforms/blackberry10/bb_devel.png)

An additional set of command-line utilities are included when you set up the BlackBerry 10 platform for your project.  The following command, in this case invoked from the project top-level directory, associates a target named _emu_ with the IP address displayed above.

Windows

    platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator

Mac/Linux

    platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator

Then, run the `emulate` command to view the app:

    cordova emulate blackberry10

## Deploy to Device

To deploy to a device, make sure it is plugged into your computer. Enable development mode and obtain the IP address as desribed in the emulator section above. You will also need to obtain the PIN from the the __Settings__ application under __About &rarr; Hardware__.

![](img/guide/platforms/blackberry10/bb_pin.png)

Run the target command-line utility to associate a name with an IP address, device password and PIN.

Windows

    platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E

Mac/Linux

    platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E

--password refers to the password to unlock the device

--pin refers to the device PIN obtained from the Settings application

Then, run the `run` command to view the app:

    cordova run blackberry10

If a debug token has not yet been created for this device, an error message will prompt you to use the platform run script with the password you provided when registering for signing keys.

Windows

    platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret

Mac/Linux

    platforms/blackberry10/cordova/run --device --keystorepass mysecret

## Debugging with WebInspector

When debugging on the device or a simulator, you may run WebInspector remotely to view the application's internal state.

A prompt displays the URL that allows you to connect to your app with a standard web browser.

For more information, see [Debugging using WebInspector](http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html).

## Building a Release Version

By default, running the `cordova build` command creates an unsigned _.bar_ package file suitable for testing in a device or simulator.

You need to run a different `build` command to create a release version suitable for distribution through BlackBerry World.  This command, also available within `platforms/blackberry10`, uses the following syntax:

Windows

    platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret

Mac/Linux

    platforms/blackberry10/cordova/build --release --keystorepass mysecret

--keystorepass specifies the password you defined when you configured your computer to sign applications.
