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

title: The Cordova Command-line Interface
---

# The Cordova Command-line Interface

This guide shows you how to create applications and deploy them to
various native mobile platforms using the `cordova` command-line
interface (CLI). This tool allows you to create new projects, build
them on different platforms, and run them within an emulator. You can
also use the CLI to initialize project code, after which you use
various platforms' IDEs to develop them further.

## Prerequisites

Before running any command-line tools, you need to install SDKs for
each platform you wish to target.
<!-- XREF
(See the [Platform Guides](../getting-started/index.html) for more details.)
XREF -->

To add support or rebuild a project for any platform, you need to run
the command-line interface from the same machine that supports the
platform's SDK. The CLI supports the following combinations:

* iOS             (Mac)
* Android         (Mac, Linux)
* BlackBerry      (Mac, Windows)
* Windows Phone 7 (Windows)
* Windows Phone 8 (Windows)

On the Mac, the command-line is available via the _Terminal_
application. On the PC, it's available as _Command Prompt_ under
_Accessories_.

The more likely it is that you run the CLI from different machines,
the more it makes sense to maintain a remote source code repository,
whose assets you pull down to local working directories.

To install the `cordova` command-line tool, follow these steps:

1. Download and install [Node.js](http://nodejs.org/). Following
   installation, you should be able to invoke `node` or `npm` on your
   command line.

1. Install the `cordova` utility. In Unix, prefixing the additional
   `sudo` command may be necessary to install development utilities in
   otherwise restricted directories:

        $ sudo npm install -g cordova

   The installation log may produce errors for any uninstalled
   platform SDKs.  Following installation, you should be able to run
   `cordova` on the command line.

1. To ensure permissions are correct, run this command on Mac or
   Linux, changing _LOGIN_ to match your account name:

        $ sudo chown -R LOGIN /usr/local/lib/node_modules/cordova

After installing the `cordova` utility, you can always update it to
the latest version by running the following command:

        $ sudo npm update -g cordova

Use this syntax to install a specific version:

        $ sudo npm install -g cordova@2.8.0

Run the `info` command for a listing that includes the current version
along with other available version numbers:

        $ npm info cordova

## Create an App

Go to the directory where you maintain your source code, and run a
command such as the following:

        $ cordova create HelloWorld com.example.hello "Hello World"

The first argument specifies a _HelloWorld_ directory to be generated
for your project. Its `www` subdirectory houses your application's
home page, along with various resources under `css`, `js`, and `img`,
which follow common web development file-naming conventions. The
`config.xml` file contains important metadata needed to generate and
distribute the application.

The other two arguments are optional: the `com.example.hello` argument
provides your project with a reverse-domain-style identifier, and the
`"Hello World!"` provides the application's display text. You can edit
both of these values later in the `config.xml` file.

## Add Platforms

All subsequent commands need to be run within the project's directory,
or any subdirectories within its scope:

        $ cd HelloWorld

Before you can build the project, you need to specify a set of target
platforms. Your ability to run these commands depends on whether your
machine supports each SDK, and whether you have already installed each
SDK.  Run any of these from a Mac:

        $ cordova platform add ios
        $ cordova platform add android
        $ cordova platform add blackberry

Run any of these from a Windows machine, where _wp_ refers to
different versions of the Windows Phone operating system:

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add android
        $ cordova platform add blackberry

Run this to check your current set of platforms:

        $ cordova platforms ls

(Note the `platform` and `platforms` commands are synonymous.)

Run either of the following synonymous commands to remove a platform:

        $ cordova platform remove blackberry
        $ cordova platform rm android

Running commands to add or remove platforms affects the contents of
the project's _platforms_ directory, where each specified platform
appears as a subdirectory. The _www_ source directory is reproduced
within each platform's subdirectory, appearing for example in
_platforms/ios/www_ or _platforms/android/assets/www_.  By default,
each platform's configuration file is set up to be able to access all
of Cordova's APIs.

If you wish, you can use an SDK at this point to open the project you
created. However, any edits you make to the project within an SDK
affect the derivative set of assets, not the original cross-platform
source files. Use this approach if you simply want to initialize a
project.
<!-- XREF
(See the [Platform Guides](../getting-started/index.html) for information on how to develop applications within each SDK.)
XREF -->
Read on if you wish to use command-line tools for the entire
development cycle.

## Build the App

By default, the `cordova create` script generates a skeletal web-based
application whose home page is the project's `www/index.html` file.
Edit this application however you want, but any initialization should
be specified as part of the `[deviceready](../../cordova/events/events.deviceready.html)` event handler, referenced by
default from `www/js/index.js`.
<!-- XREF
(See API and Configuration Guide for details.)
XREF -->

Run the following command to iteratively build the project:

        $ cordova build

This generates platform-specific code within the project's `platforms`
subdirectory.  You can optionally limit the scope of each build to
specific platforms:

        $ cordova build ios

The `cordova build` command is a shorthand for the following, which in
this example is also targeted to a single platform:

        $ cordova prepare ios
        $ cordova compile ios

In this case, once you run `prepare`, you can use Apple's Xcode SDK as
an alternative to modify and compile the platform-specific code that
Cordova generates within `platforms/ios`. You can use the same
approach with other platforms' IDEs.

<!-- NOTE: assume `ripple` command will be removed, along with `serve`

## View the App in a Browser

Since the application uses web-based components, you can often use a
standard web browser to preview them directly from the source _www_
directory.  The `ripple` command previews the application within a
browser-based emulation environment, in this case mimicking how it
would appear on an iPhone:

        $ cordova ripple ios

![]({{ site.baseurl }}/static/img/guide/cli/scr_ripple.png)

The _ripple_ emulator provides an outer skin that demonstrates how
applications work with many device-level features. For example, you
can simulate changes in location, changes to orientation, and other
accelerometer-driven shaking gestures. Other platform features, such
as access to the camera or user contacts, can often be tested on the
SDK's device emulator, or else on the device itself.
(See View the App in an Emulator, below.)

The default application Cordova provides demonstrates a handler for
the custom `[deviceready](../../cordova/events/events.deviceready.html)` event, which ordinarily fires once Cordova
establishes contact with device-level APIs, at which point an
application can start running. Within the ripple emulator, you must
fire the event manually:

![]({{ site.baseurl }}/static/img/guide/cli/scr_ripple_event.png)

As part of its initialization phase, The application displays a new
log message:

![]({{ site.baseurl }}/static/img/guide/cli/scr_ripple_ready.png)

Specifying a platform, such as `ios` or `android`, makes the
application run under `ripple` with a user agent string and screen
size for a particular device.  You also have the option to modify the
__Devices__ tab at the top left to change the target device.  For
example, here is how an application would appear on an iPad that's
tipped to its side:

![]({{ site.baseurl }}/static/img/guide/cli/scr_ripple_ipad.png)

The `ripple` command is appropriate if your application responds to
location, orientation, and varying network conditions, or else if it
doesn't interact with any of the Cordova APIs at all. The following
section shows how to run the app in a full platform emulator, which
may allow access to other device features. Otherwise see Run the App
on the [Device](../../cordova/device/device.html), below.

-->

## View the App in an Emulator

SDKs for mobile platforms come bundled with emulators that execute a
device image, so that you can launch the app from the home screen and
see how it interacts with many platform features.  Run a command such
as the following to rebuild the app and view it within a specific
platform's emulator:

        $ cordova emulate android

Some mobile platforms emulate a particular device by default, such as
the iPhone for iOS projects. For other platforms, you may need to
first associate a device with an emulator.
<!-- XREF
(See the [Platform Guides](../getting-started/index.html) for details.)
XREF -->
For example, you may first run the `android` command to launch the
Android SDK, then run a particular device image, which launches it
according to its default behavior:

![]({{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png)

Following up with the `cordova emulate` command refreshes the emulator
image to display the latest application, which is now available for
launch from the home screen:

![]({{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png)

<!--

## Run the App on the Device

## Add a Plug-in

plugin(s) [add|remove|ls [path]] ..... adds or removes a
         plugin (from the specified path), or lists all
         currently-added plugins

-->
