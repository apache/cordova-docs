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

title: Creating your first Cordova app
description: Learn how to create your first Cordova hybrid app using Cordova CLI.
---

# Create your first Cordova app

This guide shows you how to create  a JS/HTML Cordova application and deploy them to
various native mobile platforms using the `cordova` command-line
interface (CLI). For detailed reference on Cordova command-line, review the [CLI reference]

## Installing the Cordova CLI

The Cordova command-line tool is distributed as an npm package. 

To install the `cordova` command-line tool, follow these steps:

1. Download and install [Node.js](https://nodejs.org/en/download/). On
   installation you should be able to invoke `node` and `npm` on your
   command line. 

1. (Optional) Download and install a [git client](http://git-scm.com/downloads), if you don't
   already have one. Following installation, you should be able to invoke `git`
   on your command line. The CLI uses it to download assets when they are referenced using a url to a git repo. 

1. Install the `cordova` module using `npm` utility of Node.js. The `cordova`
   module will automatically be downloaded by the `npm` utility.

   * on OS X and Linux:

            $ sudo npm install -g cordova

       On OS X and Linux, prefixing the `npm` command with
       `sudo` may be necessary to install this development utility in
       otherwise restricted directories such as
       `/usr/local/share`. If you are using the optional
       nvm/nave tool or have write access to the install directory,
       you may be able to omit the `sudo` prefix. There are
       [more tips](http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears)
       available on using `npm` without `sudo`, if you desire to do that.

   * on Windows:

            C:\>npm install -g cordova

   The `-g` flag above tells `npm` to install `cordova` globally. Otherwise
   it will be installed in the `node_modules` subdirectory of the current
   working directory.

   Following installation, you should be able to run
   `cordova` on the command line with no arguments and it should
   print help text.

## Create the App

Go to the directory where you maintain your source code, and create a cordova project:

        $ cordova create hello com.example.hello HelloWorld

This creates the required directory structure for your cordova app. By default, the `cordova create` script generates a skeletal web-based application whose home page is the project's `www/index.html` file. 

###See Also
- [Cordova create command reference documentation](../../cordova-cli/index.html#cordova-create-command)
- [Cordova project directory structure](../../cordova-cli/index.html#directory-structure)

## Add Platforms

All subsequent commands need to be run within the project's directory,
or any subdirectories:

        $ cd hello

Add the platforms that you want to target your app. We will add the 'ios' and 'android' platform and ensure they get saved to `config.xml`:

        $ cordova platform add ios --save
        $ cordova platform add android --save

To check your current set of platforms:

        $ cordova platform ls

Running commands to add or remove platforms affects the contents of
the project's _platforms_ directory, where each specified platform
appears as a subdirectory. 

> Note: When using the CLI to build your application, you should
_not_ edit any files in the `/platforms/` directory. The files
in this directory are routinely overwritten when preparing
applications for building, or when plugins are re-installed.

###See Also
- [Cordova platform command reference documentation](../../cordova-cli/index.html#cordova-platform-command)

##Install pre-requrisites for building
To build and run apps, you need to install SDKs for each platform you wish to target. Alternatively, if you are using browser for development you can use `browser` platform which does not require any platform SDKs.

To check if you satisfy requirements for building the platform:

```
    $ cordova requirements
    Requirements check results for android:
    Java JDK: installed .
    Android SDK: installed
    Android target: installed android-19,android-21,android-22,android-23,Google Inc.:Google APIs:19,Google Inc.:Google APIs (x86 System Image):19,Google Inc.:Google APIs:23
    Gradle: installed

    Requirements check results for ios:
    Apple OS X: not installed
    Cordova tooling for iOS requires Apple OS X
    Error: Some of requirements check failed
```

###See Also
- [Android platform requirements](../../guide/platforms/android/index.html#requirements-and-support)
- [iOS platform requirements](../../guide/platforms/ios/index.html#requirements-and-support)
- [Windows platform requirements](../../guide/platforms/win8/index.html#requirements-and-support)

## Build the App

By default, `cordova create` script generates a skeletal web-based application whose start page is the project's `www/index.html` file. Any 
initialization should be specified as part of the [deviceready][DeviceReadyEvent] event handler defined in `www/js/index.js`.  

Run the following command to build the project for _all_ platforms:

        $ cordova build

You can optionally limit the scope of each build to specific platforms - 'ios' in this case:

        $ cordova build ios

###See Also
- [Cordova build command reference documentation](../../dev/cordova-cli/index.html#cordova-build-command)

##Test the App

SDKs for mobile platforms often come bundled with emulators that
execute a device image, so that you can launch the app from the home
screen and see how it interacts with many platform features.  Run a
command such as the following to rebuild the app and view it within a
specific platform's emulator:

        $ cordova emulate android


![]({{ site.baseurl }}/static/img/guide/cli/android_emulate_init.png)

Following up with the `cordova emulate` command refreshes the emulator
image to display the latest application, which is now available for
launch from the home screen:

![]({{ site.baseurl }}/static/img/guide/cli/android_emulate_install.png)

Alternately, you can plug the handset into your computer and test the
app directly:

        $ cordova run android

Before running this command, you need to set up the device for
testing, following procedures that vary for each platform. 

###See Also
- [Setting up Android emulator](../../guide/platforms/android/index.html#setting-up-an-emulator)
- [Cordova run command reference documentation](../../cordova-cli/index.html#cordova-run-command)
- [Cordova emulate command reference documentation](../../cordova-cli/index.html#cordova-emulate-command)

## Add Plugins

You can modify the default generated app to take advantage of standard web technologies, 
but for the app to access device-level features, you need to add plugins.

A _plugin_ exposes a Javascript API for native SDK functionality. Plugins are typically hosted on 
npm and you can search for them on the [plugin search page](/plugins/). Some key APIs are provided by the Apache Cordova open source project and these are referred to as [Core Plugin APIs]. You can also use the CLI to launch the search page:

        $ cordova plugin search camera
        
To add the camera plugin, we will specify the npm package name for the camera plugin:

      $ cordova pluign add cordova-plugin-camera
      Fetching plugin "cordova-plugin-camera@~2.1.0" via npm
      Installing "cordova-plugin-camera" for android
      Installing "cordova-plugin-camera" for ios

Plugins can also be added using a directory or a git repo.

> __NOTE__: The CLI adds plugin code as appropriate for each platform.
If you want to develop with lower-level shell tools or platform SDKs
as discussed in the [Overview](../overview/index.html), you need to run the Plugman utility to
add plugins separately for each platform. (For more information, see
[Using Plugman to Manage Plugins](../../plugin_ref/plugman.html).)

Use `plugin ls` (or `plugin list`, or `plugin` by itself) to view
currently installed plugins. Each displays by its identifier:

        $ cordova plugin ls 
        cordova-plugin-camera 2.1.0 "Camera"
        cordova-plugin-whitelist 1.2.1 "Whitelist"

###See Also
- [Cordova plugin command reference documentation](../../cordova-cli/index.html#cordova-plugin-command)
- [Cordova plugin search page](/plugins/)
- [Core Plugin APIs]

## Using _merges_ to Customize Each Platform

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

```html
    <link rel="stylesheet" type="text/css" href="css/overrides.css" />
```

* Optionally create an empty `www/css/overrides.css` file, which would
  apply for all non-Android builds, preventing a missing-file error.

* Create a `css` subdirectory within `merges/android`, then add a
  corresponding `overrides.css` file. Specify CSS that overrides the
  12-point default font size specified within `www/css/index.css`, for
  example:

```css
    body { font-size:14px; }
```

When you rebuild the project, the Android version features the custom
font size, while others remain unchanged.

You can also use `merges` to add files not present in the original
`www` directory. For example, an app can incorporate a _back button_
graphic into the iOS interface, stored in
`merges/ios/img/back_button.png`, while the Android version can
instead capture [backbutton][BackButtonEvent] events from the corresponding hardware
button.


## Updating Cordova and Your Project

After installing the `cordova` utility, you can always update it to
the latest version by running the following command:

        $ sudo npm update -g cordova

Use this syntax to install a specific version:

        $ sudo npm install -g cordova@3.1.0-0.2.0

Run `cordova -v` to see which version is currently running. To find the latest released cordova version, you can run:

        $ npm info cordova version

To update platform that you're targeting:

        $ cordova platform update android --save
        $ cordova platform update ios --save
        ...etc.

[DeviceReadyEvent]: ../../cordova/events/events.html#deviceready
[BackButtonEvent]: ../../cordova/events/events.html#backbutton
[CLI reference]: ../../cordova-cli/index.html
[Core Plugin APIs]: ../../guide/support/index.html#core-plugin-apis
