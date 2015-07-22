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

# The Command-line Interface

This guide shows you how to create applications and deploy them to
various native mobile platforms using the `cordova` command-line
interface (CLI). This tool allows you to create new projects, build
them on different platforms, and run them within an emulator. You can
also use the CLI to initialize project code, after which you use
various platforms' SDKs to develop them further.

## Prerequisites

Before running any command-line tools, you need to install SDKs for
each platform you wish to target.
(See the Platform Guides for more details.)

To add support or rebuild a project for any platform, you need to run
the command-line interface from the same machine that supports the
platform's SDK. The CLI supports the following combinations:

* iOS             (Mac)
* Android         (Mac, Linux, Windows)
* BlackBerry 10   (Mac, Linux, Windows)
* Windows Phone 7 (Windows)
* Windows Phone 8 (Windows)
* Windows 8       (Windows)
* Firefox OS      (Mac, Linux, Windows)

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

## Create the App

Go to the directory where you maintain your source code, and run a
command such as the following:

        $ cordova create hello com.example.hello HelloWorld

It may take some time for the command to complete, so be patient. Run
the `cordova -d` to see information about progress.

The first argument specifies a _hello_ directory to be generated
for your project. Its `www` subdirectory houses your application's
home page, along with various resources under `css`, `js`, and `img`,
which follow common web development file-naming conventions. The
`config.xml` file contains important metadata needed to generate and
distribute the application.

The other two arguments are optional: the `com.example.hello` argument
provides your project with a reverse domain-style identifier, and the
`HelloWorld` provides the application's display text. You can edit
both of these values later in the `config.xml` file.

## Add Platforms

All subsequent commands need to be run within the project's directory,
or any subdirectories within its scope:

        $ cd hello

Before you can build the project, you need to specify a set of target
platforms. Your ability to run these commands depends on whether your
machine supports each SDK, and whether you have already installed each
SDK.  Run any of these from a Mac:

        $ cordova platform add ios
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos

Run any of these from a Windows machine, where _wp_ refers to
different versions of the Windows Phone operating system:

        $ cordova platform add wp7
        $ cordova platform add wp8
        $ cordova platform add windows8
        $ cordova platform add android
        $ cordova platform add blackberry10
        $ cordova platform add firefoxos

Run this to check your current set of platforms:

        $ cordova platforms ls

(Note the `platform` and `platforms` commands are synonymous.)

Run either of the following synonymous commands to remove a platform:

        $ cordova platform remove blackberry10
        $ cordova platform rm android

Running commands to add or remove platforms affects the contents of
the project's _platforms_ directory, where each specified platform
appears as a subdirectory. The _www_ source directory is reproduced
within each platform's subdirectory, appearing for example in
`platforms/ios/www` or `platforms/android/assets/www`.  By default,
each platform's configuration file is set up to be able to access all
of Cordova's APIs.

If you wish, you can use an SDK at this point to open the project you
created. However, any edits you make to the project within an SDK
affect the derivative set of assets, not the original cross-platform
source files. Use this approach if you simply want to initialize a
project.
(See the Platform Guides for information on how to develop applications within each SDK.)
Read on if you wish to use command-line tools for the entire
development cycle.

## Build the App

By default, the `cordova create` script generates a skeletal web-based
application whose home page is the project's `www/index.html` file.
Edit this application however you want, but any initialization should
be specified as part of the `deviceready` event handler, referenced by
default from `www/js/index.js`.
<!-- XREF
(See the Application Development Guide for details.)
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
approach with other platforms' SDKs.

## Test the App on an Emulator or Device

SDKs for mobile platforms often come bundled with emulators that
execute a device image, so that you can launch the app from the home
screen and see how it interacts with many platform features.  Run a
command such as the following to rebuild the app and view it within a
specific platform's emulator:

        $ cordova emulate android

Some mobile platforms emulate a particular device by default, such as
the iPhone for iOS projects. For other platforms, you may need to
first associate a device with an emulator.
(See the Platform Guides for details.)
For example, you may first run the `android` command to launch the
Android SDK, then run a particular device image, which launches it
according to its default behavior:

![](img/guide/cli/android_emulate_init.png)

Following up with the `cordova emulate` command refreshes the emulator
image to display the latest application, which is now available for
launch from the home screen:

![](img/guide/cli/android_emulate_install.png)

Alternately, you can plug the handset into your computer and test the
app directly:

        $ cordova run android

Before running this command, you need to set up the device for
testing, following procedures that vary for each platform. In
Android's case, you would have to enable a __USB debugging__ option on
the device, and perhaps add a USB driver depending on your development
environmnent.
See Platform Guides for details on each platform's requirements.

## Add Features

When you build and view a new project, the default application that
appears doesn't do very much. You can modify the app in many ways to
take advantage of standard web technologies, but for the app to
communicate closely with various device-level features, you need to
add plugins that provide access to core Cordova APIs.

A _plugin_ is a bit of add-on code that provides an interface to
native components. You can design your own plugin interface, for
example when designing a hybrid app that mixes a Cordova WebView with
native components. (See Embedding WebViews and Plugin Development Guide for details.)  More commonly, you would add a plugin to enable
one of Cordova's basic device-level features
<!-- XREF
discussed in the Application Development Guide and
XREF -->
detailed in the API Reference.

The `cordova plugin add` command requires you to specify the
repository for the plugin code.  Here are examples of features you
might add:

* Basic device information (Device API):

        $ cordova plugin add org.apache.cordova.device

* Network Connection and Battery Events:

        $ cordova plugin add org.apache.cordova.network-information
        $ cordova plugin add org.apache.cordova.battery-status

* Accelerometer, Compass, and Geolocation:

        $ cordova plugin add org.apache.cordova.device-motion
        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin add org.apache.cordova.geolocation

* Camera, Media playback and Capture:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin add org.apache.cordova.media    

* Access files on device or network (File API):

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin add org.apache.cordova.file-transfer

* Notification via dialog box or vibration:

        $ cordova plugin add org.apache.cordova.dialogs
        $ cordova plugin add org.apache.cordova.vibration

* Contacts:

        $ cordova plugin add org.apache.cordova.contacts

* Globalization:

        $ cordova plugin add org.apache.cordova.globalization

* Splashscreen:

        $ cordova plugin add org.apache.cordova.splashscreen

* Open new browser windows (InAppBrowser):

        $ cordova plugin add org.apache.cordova.inappbrowser

* Debug console:

        $ cordova plugin add org.apache.cordova.console

Use `plugin ls` (or `plugin list`, or `plugin` by itself) to view
currently installed plugins. Each displays by its identifier:

        $ cordova plugin ls    # or 'plugin list'
        [ 'org.apache.cordova.console' ]

To remove a plugin, refer to it by the same identifier that appears in
the listing. For example, here is how you would remove support for a
debug console from a release version:

        $ cordova plugin rm org.apache.cordova.console        
        $ cordova plugin remove org.apache.cordova.console    # same

You can batch-remove or add plugins by specifying more than one
argument for each command.

## Customize Each Platform

While Cordova allows you to easily deploy an app for many different
platforms, sometimes you need to add customizations.  In that case,
you don't want to modify the source files in various `www` directories
within the top-level `platforms` directory, because they're regularly
replaced with the top-level `www` directory's cross-platform source.

Instead, the top-level `merges` directory offers a place to specify
assets to deploy on specific platforms. Each platform-specific
subdirectory within `merges` mirrors the directory structure of the
`www` source tree, allowing you to override or add files as needed.
For example, here is how you might uses `merges` to boost the default
font size for Android devices:

* Edit the `www/index.html` file, adding a link to an additional CSS
  file, `overrides.css` in this case:

        <link rel="stylesheet" type="text/css" href="css/overrides.css" />

* Optionally create an empty `www/css/overrides.css` file, which would
  apply for all non-Android builds, preventing a missing-file error.

* Create a `css` subdirectory within `merges/android`, then add a
  corresponding `overrides.css` file. Specify CSS that overrides the
  12-point default font size specified within `www/css/index.css`, for
  example:

        body { font-size:14px; }

When you rebuild the project, the Android version features the custom
font size, while others remain unchanged.

You can also use `merges` to add files not present in the original
`www` directory. For example, an app can incorporate a _back button_
graphic into the iOS interface, stored in
`merges/ios/img/back_button.png`, while the Android version can
instead capture `backbutton` events from the corresponding hardware
button.

## Updating Cordova

After installing the `cordova` utility, you can always
update it to the latest version by running the following command:

        $ sudo npm update -g cordova

Use this syntax to install a specific version:

        $ sudo npm install -g cordova@3.1.0

Run `cordova -v` to see the currently running version.  Run the `npm
info` command for a longer listing that includes the current version
along with other available version numbers:

        $ npm info cordova

Cordova 3.0 is the first version to support the command-line interface
described in this section. If you are updating from a version prior to
3.0, you need to create a new project as described above, then copy
the older application's assets into the top-level `www` directory.
Where applicable, further details about upgrading to 3.0 are available
in the Platform Guides.  Once you upgrade to the `cordova`
command-line interface and use `npm update` to stay current, the more
time-consuming procedures described there are no longer relevant.
