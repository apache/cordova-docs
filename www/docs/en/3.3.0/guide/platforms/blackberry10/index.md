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

title: BlackBerry 10 Platform Guide
---

# BlackBerry 10 Platform Guide

This guide shows how to set up your development environment to build
and deploy Cordova apps for BlackBerry 10 devices.  For previous
versions of BlackBerry, you need to use a different set of
command-line tools, described in BlackBerry Platform Guide.

## Requirements

The development environment is available on Windows, Mac and Linux.

Developers should use the `cordova` utility in conjunction with the
BlackBerry Native SDK.  See [The Command-Line Interface](../../cli/index.html) for information
how to install `cordova`, add projects, then build and deploy for each
platform.

## Install the BlackBerry Native SDK

The BlackBerry Native SDK is available from
[developer.blackberry.com](http://developer.blackberry.com/native/download/).
Following installation, you need to add its command-line tools to your
system path.

On Windows:

* Go to __My Computer &rarr; Properties &rarr; Advanced &rarr; Environment Variables__.

* Append the Native SDK's install directory to the PATH, for example:

    ;C:\bbndk\host_10_2_0_132\darwin\x86\usr\bin\

On Mac and Linux:

* Edit the `~/.bash_profile` file, adding a line such as the
  following, depending on where the Native SDK was installed:

    $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/

* Run the following to apply the change in the current session:

    $ source ~/.bash_profile

## Set up for Signing

If you wish to test on a device or distribute apps through BlackBerry
World, your system must be setup for code signing.

To obtain a signing key, go to the [BlackBerry Keys Order Form] (https://www.blackberry.com/SignedKeys/codesigning.html).

Select the first checkbox: "for BlackBerry10 apps developed using BlackBerry 
NDK" and then sign in or create a BBID.

Enter a password and click "Get Token" to download bbidtoken.csk. Save this
file to the default location for your OS which will be displayed on the
download page.

The final step is to generate a signing certificate:

    $ blackberry-keytool -genkeypair -storepass <password> -author 'Your Name’

## Create a Project

Use the `cordova` utility to set up a new project, as described in The
Command-Line Interface. For example, in a source-code directory:
 
    $ cordova create hello com.example.hello
    $ cd hello
    $ cordova platform add blackberry10
    $ cordova build

## Deploy to Emulator

If you wish to run a device emulator, download and install the
BlackBerry 10 Simulator.

* [Download](http://developer.blackberry.com/native/download/)
* [Getting Started](http://developer.blackberry.com/devzone/develop/simulator/blackberry_10_simulator_start.html)

Before testing an app on either an emulator or a device, you need to
enable development mode.

Launch the emulator image, then choose __Settings__ from the home screen:

![]({{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png)

Navigate to the __Security and Privacy &rarr; Development Mode__
section and enable the option:

![]({{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png)

Then, run the `emulate` command to view the app:

    $ cordova emulate blackberry10 --devicepass <password>

## Deploy to Device

To deploy to a device, make sure it is plugged into your computer and
development mode is enabled.

Then, run the `run` command to view the app:

    $ cordova run blackberry10 --devicepass <password>

If a debug token is not yet set up for the device, an error message
prompts you to provide the password you defined when configuring your
computer to sign applications.

    $ cordova run blackberry10 --devicepass <password> --keystorepass <signing password>

## Debugging with WebInspector

When debugging on the device or an emulator, you may run WebInspector
remotely to view the application's internal state.  A prompt displays
the URL that allows you to connect to your app with a standard web
browser.  For more information, see
[Debugging using WebInspector](http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html).

## Building a Release Version

By default, running the `cordova build` command creates an unsigned
_.bar_ package file suitable for testing on a device or simulator.

Use `--release` to create a release version suitable for distribution
through BlackBerry World.

    $ cordova build --release --keystorepass <signing password>

The `--keystorepass` option specifies the password you defined when
configuring your computer to sign applications.


## Deploy to Other Locations

The instructions above assume a device is plugged in via USB or a
simulator is running on the local machine. It is also possible to
deploy to other locations.

An additional set of command-line utilities are included when you set
up the BlackBerry 10 platform for your project.  The following
command, in this case invoked from the project top-level directory,
associates a target named _emu_ with an IP address.

* On Windows:

    $ platforms\blackberry10\cordova\target.bat add emu 192.168.2.24 -t simulator

* On Mac/Linux:

    $ platforms/blackberry10/cordova/target add emu 192.168.2.24 -t simulator

Once the target is defined, you can provide it to the run command using
`--target`:

    $ cordova run blackberry10 --target=emu
