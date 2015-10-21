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

title: Windows Phone 7 Platform Guide
---

# Windows Phone 7 Platform Guide

This guide shows how to set up your SDK development environment to
deploy Cordova apps for Windows Phone 7 devices.  Apps also run on
Windows Phone 8 devices using the same APIs, but version 7 lacks some
of IE10's advanced features available on Windows Phone 8. Windows
Phone 8 apps do _not_ run on Windows Phone 7 devices.

See the following for more detailed platform-specific information that
applies to both versions:

* [Upgrading Windows Phone](../wp8/upgrading.html)
* [Windows Phone Plugins](../wp8/plugin.html)
* [Windows Phone Shell Tool Guide](../wp8/tools.html)

The command-line tools above refer to versions prior to Cordova 3.0.
See [The Command-Line Interface](../../cli/index.html) for information about the
current interface.

## System Requirements

Use Windows 7 or Windows 8 (Pro) or Windows Vista with SP2.  The
64-bit version (x64) of Windows is required for the SDK.  The Pro
version is recommended for running a device emulator.

Register and pay for a [Windows Phone Dev
Center](http://dev.windowsphone.com/en-us/publish) account if you want
to install an app on a real device or submit it to Market Place.

__NOTE__: Running the SDK in Virtual Machine may present challenges.
Read [Windows Phone on a Mac](http://aka.ms/BuildaWP8apponaMac) for
insights on developing solutions.

## Install SDK and Cordova

Download and install the [Windows Phone
SDK](http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=27570).

Download and extract the latest copy of
[Cordova](http://phonegap.com/download). You need to work in the
`lib\windows-phone-8\wp7` subdirectory, `lib\windows-phone-8\wp8`
contains the Windwos Phone 8 version of Cordova.

Copy the `CordovaWP7_x_x_x.zip` file to the `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` directory.

## Building the Template

__NOTE__: Skip this step if the `lib\windows-phone` directory already
contains a `CordovaWP7_x_x_x.zip` file.

To simplify development, Cordova bundles a script to build Visual
Studio templates. These allow you to rapidly generate Cordova apps,
and you can modify them if necessary.  The steps below [show](../../../cordova/inappbrowser/inappbrowser.html) how to
generate it.

### Run the Batch File to Create and Install the Templates

The root of the repo contains a `createTemplates.bat` file.
Double-clicking this file generates two `.zip` files:
`CordovaWP7_x_x_x.zip` and `CordovaWP8_x_x_x.zip`, where _3.3.0_ is
the current version number. To use these files easily in Visual
Studio, copy them to the `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` subdirectory. You are then able to
create new __Apache Cordova Windows Phone_ apps from Visual Studio's
__File &rarr; New Project__ menu.

If you run the batch file from the command line, you can also call
with a parameter to install automatically:

        >createTemplates.bat -install

## Set up a New Project

- Open Visual Studio Express for Windows Phone and choose __New
  Project__.

- Select __CordovaWP7__. The version number displays in the template
  description.

- Give the project a name, and select __OK__.

## Review the Project Structure

The `www` directory features `html`, `js`, and `css` subdirectories
and any other resources the app requires.
Any additional content needs to be a part of the Visual Studio
project, and it must be set as content.

The following sample structure represents a 2.3.0 project, but may
vary depending on installed version:

![]({{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png)

## Build the Project for the Device

Before testing your application on a device, the device must be
registered. Consult
[Microsoft's documentation](http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105\).aspx)
for details on how to deploy and test on Windows Phone 7. These are
the basic steps:

- Make sure your phone is connected, and the screen is unlocked.

- In Visual Studio, select __Device__ from the drop-down menu at the top.

- Press the green __play__ button next to the main drop-down menu to
  start debugging, or else type __F5__.

![]({{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png)

At this point, you're done.
