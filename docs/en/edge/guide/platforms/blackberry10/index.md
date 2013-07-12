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

BlackBerry 10 Platform Guide
==================================

This guide describes how to set up your SDK development environment to
deploy Cordova apps for Blackberry 10 devices.

## Requirements and Support

The development environment is available on Windows XP (32-bit),
Windows 7 (32-bit or 64-bit), or Mac OS X 10.6.4+.

Developers should use the `cordova` utility in conjunction with the
Blackberry 10 SDK.  See The Command-line Interface for information how
to install it, add projects, then build and deploy a project.

You can use the Cordova CLI to develop Blackberry 10 projects.  For
previous versions of Blackberry, you need to use a different set of
command-line tools, described in BlackBerry Platform Guide.

## Install the SDK

The BlackBerry 10 Native SDK is available from
[developer.blackberry.com](http://developer.blackberry.com/native/download/).
If you wish to run a device emulator, it is available on the same
page. The device image is bundled with a _controller_ application that
modifies hardware status, such as location and battery strength.
(On Mac, the emulator runs as a VMware Fusion image.)

Along with the SDK, you also need to register for a code signing key
and debug token.  The signing key allows you to distribute apps
through BlackBerry World. The debug token allows you to test unsigned
apps on a BlackBerry 10 emulator or device. You do not need to create
and install the debug token yourself; if you supply the keystore
password, the build script creates and installs the debug token for
you.  To set up the signing key, go to the Blackberry website to
obtain it, making sure to retain the password you specify. Then run
the `blackberry-signer` utility that is included with the SDK. Consult
the following for more information:

* [Register for your code signing key.](https://www.blackberry.com/SignedKeys/codesigning.html)

* [Set up your computer for code signing.](http://developer.blackberry.com/html5/documentation/set_up_for_signing.html)

* [Learn more about debug tokens.](http://developer.blackberry.com/html5/documentation/running_your_bb10_app_2008471_11.html)

* [Comprehensive guide to setting up your SDK environment.](http://developer.blackberry.com/native/documentation/bb10/com.qnx.doc.native_sdk.quickstart/topic/set_up_your_environment.html)

## Create a Project

Use the `cordova` utility to set up a new project, as described in The
Cordova The Command-line Interface. For example, in a source-code
directory:

        $ cordova create hello com.example.hello "Hello World"
        $ cd hello
        $ cordova platform add blackberry
        $ cordova build

## Deploy to Emulator

Before testing an app on either on an emulator or a device, you need
to add a _target_ to your project. Each is identified with a unique
name, and associated with an IP address. You need to get the IP
address from the emulator before you use it to view apps.

Launch the emulator image, then choose __Settings__ from the home
screen:

![](img/guide/platforms/blackberry10/bb_home.png)

Navigate to the __Security and Privacy &rarr; Development Mode__
section, enable the option, and obtain the emulator's IP address from
the screen:

![](img/guide/platforms/blackberry10/bb_devel.png)

An additional set of command-line utilities are included when you set
up the Blackberry platform for your project.  The following commands,
in this case invoked from the project's top-level directory,
associates a target named _emu_ with the IP address displayed above,
and makes that target the default.  The `add` command's `-t` option
specifies the `simulator` target _type_, another word for _emulator_:

        $ platforms/blackberry/cordova/target add emu 169.254.0.1 -t simulator
        $ platforms/blackberry/cordova/target default emu

Then, run the `emulate` command to view the app:

        $ cordova emulate blackberry

The first time you run the command, you may be prompted for
information on the intended target, and the keystore password you
initially set up.

<!-- ![](img/guide/platforms/blackberry10/bb_hello.png) -->

## Deploy to Device

To deploy to a device, make sure it is plugged into your computer, and
obtain the IP address using the same procedure as described above.
Then run a variation of the `target` command such as this:

        $ platforms/blackberry/cordova/target add handset 169.254.0.1 -t device -p unlockme --pin 123456

The `--pin` option refers to whatever password you set up when
requesting a signing key, as described above.  The `-p` option refers
to whatever local password locks the device itself.  Here is the full
syntax:

        $ cordova/target add <name> <ip-address> [-t <device | simulator>] [-p | --password <password>] [--pin <device-pin>]

where:

* `<name>` specifies a unique name for the target.

* `<ip-address>` specifies the ip address of the BlackBerry device or
  simulator.

* `-t <device | simulator>` specifies the target type.  The default
  value is `device`.

* `-p|--password <password>` specifies the password for the device or
  simulator, which only applies if either is password-protected.

* `--pin <device-pin>` specifies the PIN of the BlackBerry device,
  which identifies it as a valid host for the debug token.  This
  argument is required only if you create a debug token.

To remove a target:

        $ cordova/target remove <name>

To set a target as the default:

        $ cordova/target default <name>

When debugging on the device or a simulator, you may run a Web
Inspector remotely to view the application's internal state.  A prompt
displays the URL that allows you to connect to your app with a
standard web browser. For more information on using Web Inspector, see
[Debugging using Web Inspector](http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html).

## Building a Release Version

By default, running the `cordova build` command creates an unsigned
_.bar_ package file suitable for testing in a device or simulator.
You need to run a different `build` command to create a release
version suitable for distribution through BlackBerry World.  This
command, also available within `platforms/blackberry`, uses the
following syntax:

        $ cordova/build release -k|--keystorepass <password> [-b|--buildId <number>] [-p|--params <params-JSON-file>]

where:

* `-k|--keystorepass <password>` specifies the password you defined
  when you configured your computer to sign applications.

* `-b|--buildId <number>` specifies the build version number of your
  application, which you typically increment from the previously
  submitted signed version. This argument is optional.

* `-p|--params <params-JSON-file>` specifies a JSON file containing
  additional parameters to pass to downstream tools. This argument is
  optional.

