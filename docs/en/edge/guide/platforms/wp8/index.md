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

Windows Phone 8 Platform Guide
==================================

This guide describes how to set up your development environment for Cordova and run a sample application.  Note that Cordova used to be called PhoneGap, so some of the sites still use the old PhoneGap name.

__NOTE:__ Applications built with Apache Cordova for Windows Phone 8 run only on Windows Phone 8 devices. If you want to target both 7.5 'and' 8 devices, then use Apache Cordova for Windows Phone 7, which does not have all the advanced features included in IE10, but implements the same APIs.

1. System Requirements
---------------

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

- SDK + IDE ( Visual Studio )
    - Visual Studio 2012 Professional, Premium, or Ultimate. Note that Visual Studio Express for Windows Phone (included in the SDK) is not recommended because you can not build the template (see below) with VS Express, as it does not have the __Export Template__ functionality, which is only in VS Pro or higher.

- Register and pay for a [Windows Phone Dev Center](http://dev.windowsphone.com/en-us/publish) account if you want to install your app on a real device and/or submit it to Market Place.

__NOTE:__ Running the SDK in Virtual Machine might present some challenges. You can read this blog post that gives insight on the solutions to develop for [Windows Phone on a Mac](http://aka.ms/BuildaWP8apponaMac).

2. Install SDK + Cordova
----------------------------

- Download and install [Windows Phone SDK](http://www.microsoft.com/en-us/download/details.aspx?id=35471)
- Download and extract the latest copy of [Cordova](http://phonegap.com/download). You will be working in the `lib\windows-phone-8` subfolder.
- Copy the file CordovaWP8_x_x_x.zip to the folder : \My Documents\Visual Studio 2012\Templates\ProjectTemplates\

2.1. Building the template
-----------------------------

__NOTE:__ this step may not be required.  If the lib\windows-phone directory already contains a file CordovaWP8_x_x_x.zip then you may skip this step.

In order to simplify the development process, Cordova comes with a Visual Studio template that allows creating a Cordova application rapidly. This template can be modified if needed and the below steps indicate how to proceed if you want to modify and re-generate the template.

- Open the `lib\windows-phone\templates\standalone\CordovaSolution.sln` file in Visual Studio Express for Windows Phone.
- Select __Export Template...__ from the __File__ menu.
- Choose template type __Project template__
- Give the exported template a name, such as `CordovaStarter-2.1.0`, which produces a `CordovaStarter-2.1.0.zip` archive.
- Optionally, you may add a description, icon image, and preview image.  These  display in Visual Studio's __New Project__ dialog.
- __NOTE:__ If you select __Automatically import the template...__, then you don't need to copy the `.zip` file over as outlined in step 2.
- Press __Finish__

2.2 About the different templates
---------------------------------

Apache Cordova for Windows Phone 8 only supports the standalone template.

The 'Stand-Alone' template includes _all_ the source code for Apache
Cordova.  This project is easier to fine-tune to use just the features
you need, thereby working around the permissions issues of the 'Full'
template, however this type of project is more difficult to update, as
you update individual files within your project and manage any
dependancies yourself.  In order to exclude an unused API, simply
right-click-select the __Command__ class file in Visual Studio and
choose __do not include in project__.

3. Set up New Project
--------------------

- Open Visual Studio Express for Windows Phone and choose **New Project**.
- Select **CordovaWP8**. (The version number is displayed in the template description.)
- Give the project a name, and select __OK__.

![](img/guide/platforms/wp8/StandAloneTemplate.png)

4. Review the project structure
-------------------------------

- The 'www' folder contains your Cordova html/js/css and any other resources included in your app.
- Any content that you add here needs to be a part of the Visual Studio project, and it must be set as content.
- Note: This screen capture was from the cordova-2.3.0 download, your listing will vary based on the actual version installed.

![](img/guide/platforms/wp8/projectStructure.png)

5. Build and Deploy to Emulator
-------------------------------

- Make sure **Windows Phone Emulator** is selected in the main drop-down menu.
- Press the green **play** button next to the drop-down menu to start debugging, or type __F5__.

![](img/guide/platforms/wp8/BuildEmulator.png)

6. Build your project for the device
------------------------------------

In order to test your application on a device, the device must be registered. Click [here][register-url] to read documentation on deploying and testing on your Windows Phone 8.

- Make sure your phone is connected, and the screen is unlocked.
- In Visual Studio, select 'Device' from the top drop-down menu.
- Press the green **play** button next to the main drop-down menu to start debugging, or type __F5__.

![](img/guide/platforms/wp7/wpd.png)

Done!
-----

Further Reading
-------

For more details on the specific differences between IE10 and WebKit browsers, and how to support both MS has a helpful [guide here](http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx)

[register-url]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx
