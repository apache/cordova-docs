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

<!--

## Building your app

To build the app, run the `build` script, either in release or debug
mode.

* Building the app in release mode, prepares it for distribution
  through BlackBerry World. The script packages the app's resources
  and plugins together in a _.bar_ file, then signs the app.

* Building the app in debug mode prepares it to be tested. The script
  packages the app's resources and plugins together in a _.bar_ file,
  but does not sign it. The script can also deploy the app onto a
  previously defined target. If you have not already created and
  installed a debug token, you can supply the keystore password, and
  the build script then create and install the debug token for you as
  well.

Debug mode also enables Web Inspector for the app, which allows you to
remotely inspect the source code. A prompt displays the URL that you
can use to connect to and inspect your app. For more information on
using Web Inspector, see [Debugging using Web
Inspector](http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html).

### Build your app in release mode

To build your app in release mode, type the following command:

        $ cordova/build release -k|--keystorepass <password> [-b|--buildId <number>] [-p|--params <params-JSON-file>]

where

* `-k|--keystorepass <password>` specifies the password you defined
  when you configured your computer to sign applications.

* `-b|--buildId <number>` specifies the build version number of your
  application. Typically, this number should be incremented from the
  previous signed version. This argument is optional.

* `-p|--params <params-JSON-file>` specifies a JSON file containing
  additional parameters to pass to downstream tools. This argument is
  optional.

### Build your app in debug mode

To build your app in release mode, on the command line, type the
following command:

        $ cordova/build debug [<target>] [-k|--keystorepass <password>] [-p|--params <params-JSON-file>] [-ll|--loglevel <error|warn|verbose>]

where

* `<target>` specifies the name of a previously added target. If
  `<target>` is not specified, the default target is used, if one has
  been created. This argument is only required if you want the script
  to deploy your app to a BlackBerry device or simulator and you have
  not created a default target. Additionally, if `<target>` is a
  device, then that device must be connected to your computer by USB
  connection or be connected to the same Wi-Fi network as your
  computer.

* `-k|--keystorepass <password>` specifies the password you defined
  when you configured your computer to sign applications. This
  password is also used to create your debug token. This argument is
  only required if you want the script to create and install the debug
  token for you.

* `-p|--params <params-JSON-file>` specifies a JSON file containing
  additional parameters to pass to downstream tools.

* `-ll|--loglevel <level>` specifies the log level. The log level may
  be one of `error`, `warn`, or `verbose`.

Note that all of these parameters are optional. If you have previously
defined a default target (and installed a debug token, if that target
is a BlackBerry device), you can run the script with no arguments, and
the script will package your app and deploy it to the default
target. For example:

        $ cordova/build debug

## Deploying an app

You can test your app using either a BlackBerry device or a simulator.
Before deploying your app, you must first create a target for the
device or simulator you want to deploy your app to.

The run script will first build your app. If you intend to deploy an
app to a physical device for testing, you must first install a debug
token on that device. If you specify the `--keystorepass <password>`
argument when running the run script, the script will create and
install the debug token for you. You do not need a debug token to test
your app on a simulator, even if that app is unsigned.

To deploy your app to a device or simulator, on a command line type
the following command:

        $ cordova/run <target> [--no-build]

where:

* `<target>` specifies the name of a previously added target. If
  `<target>` is a device, then that device must be connected to your
  computer by USB connection or be connected to the same Wi-Fi network
  as your computer.

* `-no--build` will use the most recently built version of the
  application rather than re-building. This is useful to test an
  application in release mode.

-->
