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

title: Getting Started with BlackBerry 10
---

Getting Started with BlackBerry 10
==================================

Apache Cordova is an application development platform that allows you to use common web technologies - primarily HTML5, JavaScript, and CSS - to create applications for mobile devices. Cordova uses a standard set of APIs to access common device features. Additional plugins allow you to access BlackBerry specific APIs, so that you can extend your application to tightly integrate with the BlackBerry 10 OS.

Requirements
------------

Cordova for BlackBerry has the following software requirements:

-   Windows XP (32-bit) or Windows 7 (32-bit and 64-bit) or Mac OSX 10.6.4+
-   node.js (> 0.9.9) [Download node.js now](http://nodejs.org/)
-   BlackBerry 10 Native SDK. [Download the BlackBerry 10 Native SDK now.](http://developer.blackberry.com/native/download/)

Setting up your signing keys
----------------------------

Before starting development, you'll need to register for your code signing key and debug token. The signing key allows you to sign your completed app so that you can distribute it through BlackBerry World. The debug token allows you to test an unsigned app on a BlackBerry 10 device. You do not need to create and install the debug token yourself; if you supply the keystore password, the build script will create and install the debug token for you.

-   [Register for your code signing key now.](https://www.blackberry.com/SignedKeys/codesigning.html)
-   [Set your computer up for code signing. ](http://developer.blackberry.com/html5/documentation/set_up_for_signing.html)
-   [Learn more about debug tokens.](http://developer.blackberry.com/html5/documentation/running_your_bb10_app_2008471_11.html)

Creating your project
-------------------------

To create a new project, you use the `create` command to set up the folder structure for your app.

1.  On the command line, navigate to the folder where you extracted Cordova.
2.  Run the `create` command using the following syntax:
    ```
	bin/create <path-to-project>
	```

This command creates the folder structure for your project at the specified location. All of your project resource files should be stored in the *<path-to-project>*/www folder, or in a subfolder within it.

Adding and managing targets
---------------------------

A target refers to a BlackBerry device or simulator that you will use to test your app. Targets are added directly to your project; you can add multiple targets to your project, each with a unique name. Then, when you want to deploy your app to a particular target, you can simply refer to that target by name when you run your script.

###Add a target

To add a target, on the command line, type the following command:

```
<path-to-project>/cordova/target  add  <name>  <ip-address>  [-t <device | simulator>]  [-p | --password <password>]  [--pin <device-pin>]
```

where

-   `<name>`  specifies a unique name for the target.
-   `<ip-address>`  specifies the ip address of the BlackBerry device or simulator.
-   `-t <device | simulator>` specifies the target type. If not provided, the default value is device.
-   `-p|--password <password>`  specifies the password for the device or simulator. This is required only if the device or simulator is password protected.
-   `--pin <device-pin>`  specifies the PIN of the BlackBerry device, which identifies that device as a valid host for the debug token. This argument is required only if you are creating a debug token.

###Remove a target

To remove a target, on the command line, type the following command:

```
<path-to-project>/cordova/target  remove  <name>
```

###Set a target as the default

To specify a specific target as the default, on the command line, type the following command:

```
<path-to-project>/cordova/target  default  <name>
```

Building your app
-----------------

To build your app, run the build script. You can build the app in either release mode or in debug mode.

-   When you build the app in release mode, you are preparing it for distribution through BlackBerry World. The script packages your app resources and plugins together in a .bar file, then signs the app.
-   When you build the app in debug mode, you are preparing it to be tested. The script packages your app resources and plugins together in a .bar file, but does not sign it. The script can also deploy the app onto a previously defined target. If you have not already created and installed a debug token, you can supply the keystore password, and the build script will create and install the debug token for you as well.

    Debug mode also enables Web Inspector for the app, which allows you to remotely inspect the source code. A prompt displays the URL that you can use to connect to and inspect your app. For more information on using Web Inspector, see [Debugging using Web Inspector](http://developer.blackberry.com/html5/documentation/web_inspector_overview_1553586_11.html).

###Build your app in release mode

To build your app in release mode, on the command line, type the following command:

```
<path-to-project>/cordova/build  release  -k|--keystorepass <password>  [-b|--buildId <number>]  [-p|--params <params-JSON-file>]
```

where

-   `-k|--keystorepass <password>`  specifies the password you defined when you configured your computer to sign applications.
-   `-b|--buildId <number>`  specifies the build version number of your application. Typically, this number should be incremented from the previous signed version. This argument is optional.
-   `-p|--params <params-JSON-file>`  specifies a JSON file containing additional parameters to pass to downstream tools. This argument is optional.

###Build your app in debug mode

To build your app in release mode, on the command line, type the following command:

```
<path-to-project>/cordova/build  debug  [<target>]  [-k|--keystorepass <password>]  [-p|--params <params-JSON-file>]  [-ll|--loglevel <error|warn|verbose>]
```

where

-   `<target>`  specifies the name of a previously added target. If `<target>`  is not specified, the default target is used, if one has been created. This argument is only required if you want the script to deploy your app to a BlackBerry device or simulator and you have not created a default target. Additionally, if `<target>`  is a device, then that device must be connected to your computer by USB connection or be connected to the same Wi-Fi network as your computer.
-   `-k|--keystorepass <password>`  specifies the password you defined when you configured your computer to sign applications. This password is also used to create your debug token. This argument is only required if you want the script to create and install the debug token for you.
-   `-p|--params <params-JSON-file>`  specifies a JSON file containing additional parameters to pass to downstream tools.
-   `-ll|--loglevel <level>`  specifies the log level. The log level may be one of `error`, `warn`, or `verbose`.

Note that all of these parameters are optional. If you have previously defined a default target (and installed a debug token, if that target is a BlackBerry device), you can run the script with no arguments, and the script will package your app and deploy it to the default target. For example:

```
<path-to-project>/cordova/build debug
```

Deploying an app
-------------------------

You can test your app using either a BlackBerry device or a simulator. Before deploying your app, you must first create a target for the device or simulator you want to deploy your app to.

The run script will first build  your app. If you intend to deploy an app to a physical device for testing, you must first install a debug token on that device. If you specify the `--keystorepass <password>` argument when running the run script, the script will create and install the debug token for you. You do not need a debug token to test your app on a simulator, even if that app is unsigned.

To deploy your app to a device or simulator, on a command line type the following command:

```
<path-to-project>/cordova/run <target> [--no-build]
```

where
-   `<target>`  specifies the name of a previously added target. If `<target>`  is a device, then that device must be connected to your computer by USB connection or be connected to the same Wi-Fi network as your computer.

-   `-no--build` will use the most recently built version of the application rather than re-building. This is useful to test an application in release mode.

Adding and managing plugins
---------------------------

To add additional functionality that is outside of the core features of Cordova, you'll need to add plugins. A plugin represents a set of APIs that provide access to additional features of the platform.

In order to use a plugin, you must first add it into your project. Once added into your project, the plugin will be bundled with your project during the build process, to ensure that your app has access to all the APIs it needs.

###Add a plugin

To add a plugin, on the command line, type the following command:

```
<path-to-project>/cordova/plugin add <path to plugin>
```

###Remove a plugin

To remove a plugin, on the command line, type the following command:

```
<path-to-project>/cordova/plugin rm <name>
```

###View a list of installed plugins

To view a list of installed plugins, on the command line, type the following command:

```
<path-to-project>/cordova/plugin ls
```
