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
command-line tools, described in [BlackBerry Platform Guide](../blackberry/index.html).

## Requirements

The development environment is available on Windows, Mac and Linux.

Developers should use the `cordova` utility in conjunction with the
BlackBerry Native SDK.  See [The Command-line Interface](../../cli/index.html) for information
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

    ;C:\bbndk\host_10_1_0_132\darwin\x86\usr\bin\

On Mac and Linux:

* Edit the `~/.bash_profile` file, adding a line such as the
  following, depending on where the Native SDK was installed:

    $ export PATH=${PATH}:/Applications/bbndk/host_10_1_0_132/darwin/x86/usr/bin/

  or for the 10.2 Native SDK:

    $ export PATH=${PATH}:/Applications/Momentics.app/host_10_2_0_15/darwin/x86/usr/bin/

* Run the following to apply the change in the current session:

    $ source ~/.bash_profile

## Set up for Signing

If you wish to test on a device or distribute apps through BlackBerry
World, your system must be setup for code signing.

To obtain a signing key, go to the BlackBerry website and make sure to
retain the password you specify. Then run the `blackberry-signer`
utility that is included with the BlackBerry Native SDK.

Detailed instuctions can be found here:

* [Register for your code signing key.](https://www.blackberry.com/SignedKeys/codesigning.html)

* [Set up your system for code signing.](https://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html)

## Create a Project

Use the `cordova` utility to set up a new project, as described in The
Command-line Interface. For example, in a source-code directory:
 
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
add a _target_ to your project. Each is identified with a unique name,
and associated with an IP address. You need to get the IP address from
the emulator before you use it to view apps.

Launch the emulator image, then choose __Settings__ from the home screen:

![]({{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_home.png)

Navigate to the __Security and Privacy &rarr; Development Mode__
section, enable the option, and obtain the IP address:

![]({{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_devel.png)

An additional set of command-line utilities are included when you set
up the BlackBerry 10 platform for your project.  The following
command, in this case invoked from the project top-level directory,
associates a target named _emu_ with the IP address displayed above.

* On Windows:

    $ platforms\blackberry10\cordova\target.bat add emu 169.254.0.1 -t simulator

* On Mac/Linux:

    $ platforms/blackberry10/cordova/target add emu 169.254.0.1 -t simulator

Then, run the `emulate` command to view the app:

    $ cordova emulate blackberry10

## Deploy to Device

To deploy to a device, make sure it is plugged into your computer.
Enable development mode and obtain the IP address as desribed in the
emulator section above. You will also need to obtain the PIN from the
the __Settings__ application under __About &rarr; Hardware__:

![]({{ site.baseurl }}/static/img/guide/platforms/blackberry10/bb_pin.png)

Run the target command-line utility to associate a name with an IP
address, device password and PIN.

* On Windows:

    $ platforms\blackberry10\cordova\target.bat add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E

* On Mac/Linux:

    $ platforms/blackberry10/cordova/target add mydevice 169.254.0.1 -t device --password 123456 --pin FFFF972E

where:

* `--password` refers to the password to unlock the device.

* `--pin` refers to the device PIN obtained from the __Settings__ application.

Then, run the `run` command to view the app:

    $ cordova run blackberry10

If a debug token is not yet set up for the device, an error message
prompts you to use the platform run script with the password you
provided when registering for signing keys.

* On Windows:

    $ platforms\blackberry10\cordova\run.bat --device --keystorepass mysecret

* On Mac/Linux:

    $ platforms/blackberry10/cordova/run --device --keystorepass mysecret

## Debugging with WebInspector

When debugging on the device or an emulator, you may run WebInspector
remotely to view the application's internal state.  A prompt displays
the URL that allows you to connect to your app with a standard web
browser.  For more information, see
[Debugging using WebInspector](http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html).

## Building a Release Version

By default, running the `cordova build` command creates an unsigned
_.bar_ package file suitable for testing on a device or simulator.

You need to run a different `build` command to create a release
version suitable for distribution through BlackBerry World.  It does
not rely on the `cordova` CLI tool, and instead uses the following
syntax:

* On Windows:

    $ platforms\blackberry10\cordova\build.bat --release --keystorepass mysecret

* On Mac/Linux:

    $ platforms/blackberry10/cordova/build --release --keystorepass mysecret

The `--keystorepass` option specifies the password you defined when
configuring your computer to sign applications.
