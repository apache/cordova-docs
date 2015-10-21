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

title: Windows Phone 8 Platform Guide
---

# Windows Phone 8 Platform Guide

This guide shows how to set up your SDK development environment to
deploy Cordova apps for Windows Phone 8 devices. If you want to target
both 7.5 and 8 devices, develop for Windows Phone 7 instead as
detailed in the [Windows Phone 7 Platform Guide](../wp7/index.html).  Version 7 does not
have all the advanced features included in Internet Explorer 10, but
implements the same set of APIs. Windows Phone 8 apps do _not_ run on
Windows Phone 7 devices.

See the following for more detailed platform-specific information that
applies to both versions:

- [Upgrading Windows Phone](upgrading.html)
- [Windows Phone Plugins](plugin.html)
- [Windows Phone Command-line Tools](tools.html)

The command-line tools above refer to versions prior to Cordova 3.0.
See [The Command-Line Interface](../../cli/index.html) for information about the
current interface.

## System Requirements

- Operating System:
    - Windows 8 or Windows 8 Pro
        - The 64-bit version (x64) of Windows is required for the SDK.
        - The Pro version is recommended so you can run a device emulator.

- Hardware:
    - 6.5 GB of free hard disk space
    - 4 GB RAM
    - 64-bit (x64) CPU

- Windows Phone 8 Emulator
    - The phone emulator uses Hyper-V, so this list includes those pre-requisites.
    - Windows 8 Pro 64-bit edition or greater
    - Requires a processor that supports virtualization and [Second Level Address Translation (SLAT)](http://en.wikipedia.org/wiki/Second_Level_Address_Translation)
        - See the [list of Intel processors that support VT-x (virtualization) and EPT (SLAT)](http://ark.intel.com/Products/VirtualizationTechnology)
    - Enable the virtualization capability (i.e., VT-x on Intel) in your BIOS settings, as usually this is disabled by default.

- SDK and IDE (Visual Studio)
    - Visual Studio 2012 Professional, Premium, or Ultimate. Note that Visual Studio Express for Windows Phone (included in the SDK) is not recommended because you can not build the template (see below) with VS Express, as it does not have the __Export Template__ functionality, which is only in VS Pro or higher.

- Register and pay for a [Windows Phone Dev Center](http://dev.windowsphone.com/en-us/publish) account if you want to install your app on a real device or submit it to Market Place.

__NOTE__: Running the SDK in Virtual Machine might present some challenges. You can read this blog post that gives insight on the solutions to develop for [Windows Phone on a Mac](http://aka.ms/BuildaWP8apponaMac).

## Install SDK and Cordova

Download and install [Windows Phone
SDK](http://www.microsoft.com/en-us/download/details.aspx?id=35471).

Download and extract the latest copy of
[Cordova](http://phonegap.com/download). The `lib\windows-phone-8\wp8`
subdirectory is where you need to do your work.

Copy the `CordovaWP8_x_x_x.zip` file to the `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` directory.

## Building the Template

__NOTE__: Skip this step if the `lib\windows-phone` directory already
contains a `CordovaWP8_x_x_x.zip` file.

To simplify development, Cordova bundles a script to build Visual
Studio templates. These allow you to rapidly generate Cordova apps,
and you can modify them if necessary.  The steps below show how to
generate it.

### Run the Batch File to Create and Install the Templates

The repo's root directory contains a `createTemplates.bat` file.
Double-click this to generate two `.zip` files: `CordovaWP7_x_x_x.zip`
and `CordovaWP8_x_x_x.zip`, where _3.4.0_ is the current version
number. To use these files easily in Visual Studio, copy them to `My
Documents\Visual Studio 2012\Templates\ProjectTemplates\`. You are
then able to create new Apache Cordova Windows Phone apps from the
__Visual Studio File &rarr; New Project__ menu.

If you run the batch file from the command line, you can also call it
with a parameter to install automatically:

        >createTemplates.bat -install

## Set up a New Project

Open Visual Studio Express for Windows Phone and choose __New
Project__.

Select __CordovaWP8__. The version number is displayed in the
template description.

Give the project a name, and select __OK__.

![]({{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png)

## Review the Project Structure

The `www` directory features `html`, `js`, and `css` subdirectories
and any other resources your app requires.
Any additional content needs to be a part of the Visual Studio
project, and it must be set as content.

The following sample structure represents a 2.3.0 project, but may
vary depending on the installed version:

![]({{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png)

## Build and Deploy to Emulator

Make sure __Windows Phone Emulator__ is selected in the main drop-down menu.

Then press the green __play__ button next to the drop-down menu to
start debugging, or type __F5__.

![]({{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png)

## Build the Project for the Device

Before testing your application on a device, the device must be
registered. Consult
[Microsoft's documentation](http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105\).aspx)
for details on how to deploy and test on Windows Phone 8. These are
the basic steps:

- Make sure your phone is connected, and the screen is unlocked.

- In Visual Studio, select __Device__ from the drop-down menu at the top.

- Press the green __play__ button next to the main drop-down menu to
  start debugging, or else type __F5__.

![]({{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png)

At this point, you're done.

## Further Reading

The Windows Phone Developer Blog provides
[helpful details](http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx)
on differences between IE10 and WebKit browsers, and how to support
both.

