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
both 7.5 and 8 devices, develope for Windows Phone 7 instead as
detailed in the [Windows Phone 7 Platform Guide](../wp7/index.html).  Version 7 does not
have all the advanced features included in IE10, but implements the
same set of APIs. Windows Phone 8 apps do _not_ run on Windows Phone 7
devices.

See the following for more detailed platform-specific information that
applies to both versions:

* [Upgrading Windows Phone](upgrading.html)
* [Windows Phone Plugins](plugin.html)
* [Windows Phone Command-line Tools](tools.html)

The command-line tools above refer to versions prior to Cordova 3.0.
See [The Command-line Interface](../../cli/index.html) for information about the
current interface.

## 1. System Requirements

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

- SDK + IDE (Visual Studio)
    - Visual Studio 2012 Professional, Premium, or Ultimate. Note that Visual Studio Express for Windows Phone (included in the SDK) is not recommended because you can not build the template (see below) with VS Express, as it does not have the __Export Template__ functionality, which is only in VS Pro or higher.

- Register and pay for a [Windows Phone Dev Center](http://dev.windowsphone.com/en-us/publish) account if you want to install your app on a real device or submit it to Market Place.

__NOTE:__ Running the SDK in Virtual Machine might present some challenges. You can read this blog post that gives insight on the solutions to develop for [Windows Phone on a Mac](http://aka.ms/BuildaWP8apponaMac).

## 2. Install SDK + Cordova

- Download and install [Windows Phone SDK](http://www.microsoft.com/en-us/download/details.aspx?id=35471)

- Download and extract the latest copy of [Cordova](http://phonegap.com/download). You will be working in the `lib\windows-phone-8\wp8` subdirectory, `lib\windows-phone-8\wp7` contains the Windwos Phone 7 version of Cordova.

- Copy the `CordovaWP8_x_x_x.zip` file to the `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\` directory.

## 2.1. Building the template

__NOTE:__ this step may not be required.  If the lib\windows-phone directory already contains a file CordovaWP8_x_x_x.zip then you may skip this step.

In order to simplify the development process, Cordova comes with a script to build Visual Studio templates. This allows for rapid creation of Cordova applications inside Visual Studio. This template can be modified if needed and the below steps indicate how to proceed if you want to generate the template.

### Run the batch file to create and install the templates.

- The root of the repo contains a file createTemplates.bat.  Double clicking this file will generate 2 .zip files. (CordovaWP7_x_x_x.zip + CordovaWP8_x_x_x.zip where 3.1.0 is the current version number)  To easily use these files in Visual Studio, copy them to 
"My Documents\Visual Studio 2012\Templates\ProjectTemplates\" You will then be able to create new Apache Cordova Windows Phone apps from the Visual Studio File->New Project menu.

- If you run the batch file from the command line, you can also call with a parameter to install automatically

Run the script :

    >createTemplates.bat -install

## 3. Set up New Project

- Open Visual Studio Express for Windows Phone and choose __New Project__.

- Select __CordovaWP8__. (The version number is displayed in the template description.)

- Give the project a name, and select __OK__.

![]({{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png)

## 4. Review the project structure

- The `www` directory contains your Cordova `html/js/css` and any other resources included in your app.

- Any content that you add here needs to be a part of the Visual Studio project, and it must be set as content.

- Note: This screen capture was from the cordova-2.3.0 download, your listing will vary based on the actual version installed.

![]({{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png)

## 5. Build and Deploy to Emulator

- Make sure __Windows Phone Emulator__ is selected in the main drop-down menu.

- Press the green __play__ button next to the drop-down menu to start debugging, or type __F5__.

![]({{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png)

## 6. Build your project for the device

In order to test your application on a device, the device must be registered. Click [here][register-url] to read documentation on deploying and testing on your Windows Phone 8.

- Make sure your phone is connected, and the screen is unlocked.

- In Visual Studio, select '[Device](../../../cordova/device/device.html)' from the top drop-down menu.

- Press the green __play__ button next to the main drop-down menu to start debugging, or type __F5__.

![]({{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png)

## Done!

## Further Reading

For more details on the specific differences between IE10 and WebKit browsers, and how to support both MS has a helpful [guide here](http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx)

[register-url]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx
