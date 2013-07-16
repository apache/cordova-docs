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

BlackBerry Platform Guide
============================

This guide shows you how to set up an SDK environment to target
applications for the BlackBerry platform prior to version 10.  If you
want to target the most recent version, see BlackBerry 10 Platform
Guide.

## Requirements and Support

This version of BlackBerry is not supported by the `cordova` utility
described in The Command-line Interface, but by a separate set of
command-line tools. Download the Cordova distribution from
[cordova.apache.org](http://cordova.apache.org/#download).

Cordova for BlackBerry relies on the [BlackBerry WebWorks
framework](https://bdsc.webapps.blackberry.com/html5), which is
available for Windows XP (32-bit), Windows 7 (32-bit and 64-bit), and
Mac (OS X 10.6.4+).  WebWorks applications can _only_ be deployed on
the following BlackBerry platforms:

* BlackBerry OS 5.0 and higher
* BlackBerry PlayBook
* BlackBerry 10 (QNX)

WebWorks requires the Java Development Kit (JDK). For Windows, use the
32-bit version of
[Oracle JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk).
Java in installed by default on Mac OS X up to version 10.7, which
requires
[a separate installation](http://support.apple.com/kb/DL1421).
It also requires Apache Ant, which on Mac is part of the Java
installation. The Windows version is available from
[ant.apache.org](http://ant.apache.org/bindownload.cgi).

## Install the SDK

Download and install the appropriate WebWorks SDK for your
development. BlackBerry PlayBook and BlackBerry Smartphone WebWorks
SDKs can be downloaded from the following locations.

- [BlackBerry PlayBook SDK] (https://developer.blackberry.com/html5/download/#playbook) and [Adobe Air SDK](http://www.adobe.com/devnet/air/air-sdk-download.html)
- [BlackBerry Smartphones SDK] (https://developer.blackberry.com/html5/download/#smartphones)

3.  Register for Signing Keys
-------------------------
If you wish to publish your application on BlackBerry App World, or deploy on an actual device you’ll need to register for a set of free Code Signing Keys.

To register for Signing Keys visit, and complete the [BlackBerry Keys Order Form](https://www.blackberry.com/SignedKeys).

Once you receive your Signing Keys, they'll need to be setup. To learn how to setup your Signing Keys visit the [BlackBerry HTML5/WebWorks website](https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html).

4.  Install Cordova
-------------------------

Download and extract the latest copy of [Cordova](http://cordova.apache.org/#download).

5.  Set up New Project
--------------------

- Open up a command-line terminal and navigate to where you extracted Cordova.
- There is a directory for each platform that Cordova supports.  CD into the `blackberry` directory.
- The blackberry directory contains several directories.  The `example` folder contains a complete Cordova project.  Copy the `example` folder to another location on your computer.
- Change to the newly created directory.
- Open up the project.properties file with your favorite editor and edit the entries for the WebWorks SDKs you are using. For example...

BlackBerry 10 (QNX)
- `qnx.bbwp.dir=C:\\Program Files (x86)\\Research In Motion\\BlackBerry 10 WebWorks SDK 1.0.2.9`

Along with the SDK, you also need to register for a code signing key
and debug token. The signing key allows you to distribute apps through
BlackBerry World. The debug token allows you to test unsigned apps on
a BlackBerry emulator or device. You do not need to create and
install the debug token yourself; if you supply the keystore password,
the build script creates and installs the debug token for you. To set
up the signing key, go to the Blackberry website to obtain it, making
sure to retain the password you specify. Then run the
`blackberry-signer` utility that is included with the SDK. Consult the
following for more information:

* [Register for your code signing key](https://www.blackberry.com/SignedKeys/codesigning.html)

* [Set up your computer for code signing](http://developer.blackberry.com/html5/documentation/set_up_for_signing.html)

Build the Cordova sample project by typing `./cordova/build <target>` in your command prompt while you are in your project's directory. Replace `<target>` with either `qnx` `playbook` or `blackberry`. For example...

* [Comprehensive guide to setting up your SDK environment](http://developer.blackberry.com/native/documentation/bb10/com.qnx.doc.native_sdk.quickstart/topic/set_up_your_environment.html)

## Set up a New Project

* Open up a command-line terminal. From the directory where you
  extracted Cordova, navigate to the `blackberry` subdirectory.

* Copy the `blackberry` directory's `example` subdirectory to another
  location on your computer and navigate there.

* Edit the `project.properties` file to specify the WebWorks SDK you
  are using. For example, here are the respective settings for
  BlackBerry PlayBook or BlackBerry Smartphone (OS5-7):

        playbook.bbwp.dir=C:\\Program Files\\Research In Motion\\BlackBerry WebWorks SDK for TabletOS 2.1.0.6\\bbwp
        blackberry.bbwp.dir=C:\\Program Files\\Research In Motion\\BlackBerry WebWorks Packager

These correspond to parameters you specify when building your project.
The first time you run these commands, they generate a "Hello World"
application:

    cordova/build playbook
    cordova/build blackberry

## Deploy to Emulator

BlackBerry smartphone emulators are only available on Windows.
BlackBerry PlayBook emulators require VMWare Player (Windows) or
VMWare Fusion (Mac OS X). The WebWorks SDK provides a default
emulator, but additional emulators are [available through
BlackBerry](http://us.blackberry.com/developers/resources/simulators.jsp).

While in your project directory, in command prompt type `./cordova/run <target>`. Replace `<target>` with either `qnx`, `playbook`, or `blackberry`. Note, for BlackBerry 10 and PlayBook, the emulator virtual image must already be started.  For example...

* [BlackBerry PlayBook](https://developer.blackberry.com/html5/documentation/using_the_tablet_simulator_1866980_11.html)

* [BlackBerry Smartphone](https://developer.blackberry.com/html5/documentation/run_your_app_on_smartphone_sim_1876976_11.html)

For BlackBerry Playbook, edit the `project.properties` file to
customize the `playbook.sim.ip` and `playbook.sim.password`
properties.  The emulator's IP address is available through the
__Settings__ application on the home screen. Enable the __Security and
Privacy &rarr; Development Mode__ option to display the address. The
password can also be set in the __Security and Privacy__ tab.

For BlackBerry Smartphone, edit the `project.properties` file to
customize the `blackberry.sim.dir` and `blackberry.sim.bin`
properties.  You need to escape path delimiters when specifying
directory paths on Windows, for example: `C:\\Program
Files\\BlackBerry\\Simulator`.

Once the emulator is installed and running, run either of the
following to install an application to the home screen:

    cordova/run playbook
    cordova/run blackberry

If you are prompted whether a device is connected to your computer,
answer no.

__NOTE:__ On BlackBerry OS 5, the application is installed in the
`Downloads` folder.

## Deploy to Device

To deploy your app to a device, it must be connected, and you must be
registered for code signing keys as described above.  Also, to deploy
apps on BlackBerry PlayBook, the __Settings &rarr; Security &rarr;
Development Mode__ option must be enabled.

On Blackberry PlayBook, edit the `project.properties` file and modify
the following to reflect the device's IP and password as descibed
above, along with the signing key password you set up:

While in your project directory, in command prompt type `./cordova/run <target>`. Replace `<target>` with either `qnx`, `playbook`, or `blackberry`.  For example...

On BlackBerry Smartphone (OS5-7), specify the
`blackberry.sigtool.password` property as the signing key password.

Then from the project's directory, run either of the commands you
would to view the app in an emulator:

    cordova/run playbook
    cordova/run blackberry

If you are prompted whether a device is connected to your computer,
answer yes.

__NOTE:__ On BlackBerry OS 5, the application is installed in the
`Downloads` folder.

## Additional Information

The following articles may help resolve common problems when
developing applications built for the BlackBerry WebWorks framework:

* [BlackBerry WebWorks Development Pitfalls](http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Common-BlackBerry-WebWorks-development-pitfalls-that-can-be/ta-p/624712)

* [Best practices for packaging WebWorks applications](https://bdsc.webapps.blackberrycom/html5/documentation/ww_developing/bestpractice_compiling_ww_apps_1873324_11.html)
