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

title: Getting Started with Windows Phone 8
---

Getting Started with Windows Phone 8
==================================

This guide describes how to set up your development environment for Cordova and run a sample application.  Note that Cordova used to be called PhoneGap, so some of the sites still use the old PhoneGap name.

Note: Applications built with Apache Cordova for Windows Phone 8 will only run on Windows Phone 8 devices. If you are looking to target both 7.5 AND 8 devices, then you should be using Apache Cordova for Windows Phone 7, which does not have all the new shiny features included in IE10, but implements the same APIs.

1. System Requirements
---------------

- Operating System: 
 - Windows 8, Windows 8 Pro

- Hardware:
 - 6.5 GB of free hard disk space
 - 4 GB RAM
 - 64-bit (x64) CPU

- Windows Phone 8 Emulator:
 - Windows 8 Pro edition or greater
 - Requires a processor that supports Second Level Address Translation (SLAT)

- SDK + IDE ( Visual Studio )
 - VS Express for Windows Phone ( included in the SDK )
 - Visual Studio Professional, Premium, or Ultimate

Note: Running in Virtual Machine might present some challenges. You can read this blog post that gives insight on the solutions to develop for Windows Phone on a Mac: http://aka.ms/BuildaWP8apponaMac

Necessary for Installing on [Device](../../../cordova/device/device.html) and Submitting to Market Place:

- •	Register for the [Windows Phone Developer Center](http://dev.windowsphone.com/en-us/publish)


2. Install SDK + Cordova
----------------------------

- Download and install [Windows Phone  SDK](http://www.microsoft.com/en-us/download/details.aspx?id=35471)
- Download the latest copy of [Cordova](http://phonegap.com/download) and extract its contents. We will be working with the subfolder: lib\windows-phone-8\
- copy the file CordovaWP8AppFull-x.x.x.zip to the folder : \My Documents\Visual Studio 2012\Templates\ProjectTemplates\





2.1. Building the template
-----------------------------
Note: this step may not be required.  If the lib\windows-phone directory already contains a file CordovaStarter-x.x.x.zip then you may skip this step )
In order to simplify the development process, Cordova comes with a Visual Studio template that allows creating a Cordova application rapidly. This template can be modified if needed and the below steps indicate how to proceed if you want to modify and re-generate the template.

- Open the file lib\windows-phone\templates\standalone\CordovaSolution.sln in Visual Studio Express for Windows Phone
- From the file menu, select 'Export Template...' 
- Choose template type 'Project template'
- Give the exported template a name, ex. CordovaStarter-2.1.0 will produce CordovaStarter-2.1.0.zip
- Optionally, you may add a description, icon image, and Preview image.  These are what is displayed in Visual Studio in the 'New Project' dialog.- 
- Note: If you select ( 'Automatically import the template ... ') then you will not need to copy the .zip file over as outlined in step 2.
- Press 'Finish'

2.2 About the different templates
--------------------
Apache Cordova for Windows Phone 8 supports 2 different types of templates.  
The 'Full' template includes a pre-built dll containing all the framework code for Apache Cordova.  This template will create a project that is easy to update, as you can simply replace the JavaScript and .dll in your project and rebuild when a new version comes out. The downside of this approach is that because the dll contains ALL of the Cordova API, it requires all available permissions even if the APIs are not called.  When you submit an app to the App store, Microsoft will run a static analyzer against your application, and detect that you require all available permissions, and place a disclaimer on you app that is presented to the user when they choose to install your app.  Users may be discouraged if they see a required permission that does not make sense ( ie, why does this drawing program need access to my media library and contacts ).

The 'Stand-Alone' template includes ALL the source code for Apache Cordova.  This project is easier to fine-tune to use just the features you need, thereby working around the permissions issues of the 'Full' template, however this type of project will be more difficult to update, as you will need to update individual files within your project and manage any dependancies yourself.  In order to exclude an API you are not using, you can simply right-click-select the Command class file in Visual Studio and choose 'do not include in project'.



3. Setup New Project
--------------------

- Open Visual Studio Express for Windows Phone and choose **New Project**.
- Select **CordovaWP8AppFull** or **CordovaWP8AppStandalone**. ( the version number will be displayed in the template description )
- Give your project a name, and select OK.

![]({{ site.baseurl }}/static/img/guide/platforms/wp8/FullTemplate.png)
![]({{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png)

 
4. Review the project structure
-------------------------------

- The 'www' folder contains your Cordova html/js/css and any other resources included in your app.
- Any content that you add here needs to be a part of the Visual Studio project, and it must be set as content. 

![]({{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png)


5. Build and Deploy to Emulator
-------------------------------

- Make sure to have **Windows Phone Emulator** selected in the top drop-down menu.
- Hit the green **play button** beside the Windows Phone Emulator drop-down menu to start debugging or press F5.

![]({{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png)


6. Build your project for the device
------------------------------------

In order to test your application on a device, the device must be registered. Click [here][register-url] to read documentation on deploying and testing on your Windows Phone 8.

- Make sure your phone is connected, and the screen is unlocked
- In Visual Studio, select '[Device](../../../cordova/device/device.html)' from the top drop-down menu.
- Hit the green **play button** beside the drop-down menu to start debugging or press F5.

![]({{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png)


Done!
-----

Further Reading 
-------

For more details on the specific differences between IE10 and WebKit browsers, and how to support both MS has a helpful [guide here](http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx)

[register-url]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx
