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

Windows Phone 7 Platform Guide
==================================

This guide describes how to set up your development environment for Cordova and run a sample application.  Note that Cordova used to be called PhoneGap, so some of the sites still use the old PhoneGap name.

Video Tutorials:
----------------

- [Cordova and Windows Phone quick setup video](http://www.youtube.com/v/wO9xdRcNHIM?autoplay=1)
- [Cordova and Windows Phone deep dive](http://www.youtube.com/v/BJFX1GRUXj8?autoplay=1)


1. Requirements
---------------

- Windows 7, Windows 8 or Windows Vista with SP2

__NOTE:__ Running in VM does not work well. If you are on a Mac, you need to set up a bootcamp partition with Windows 7 or Vista.

- Become an [App Hub member](http://create.msdn.com/en-US/home/membership). You need to do so to install onto a device and submit the application to the market place.


2. Install SDK + Cordova
----------------------------

- Download and install [Windows Phone  SDK](http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=27570)
- Download and extract the latest copy of [Cordova](http://phonegap.com/download). You will be working in the `lib\windows-phone` subfolder.
- Copy the `CordovaWP7_x.x.x.zip` to the `\My Documents\Visual Studio 2012\Templates\ProjectTemplates\` folder.
(If the template file does not exist, you need to build it as described in 2.1 below.)
if you have just installed VisualStudio, you should launch it once to create this folder
if you prefer, you may add the project instead to the `Silverlight for Windows Phone` subfolder of `Visual C#`. This is up to you, and only affects where the project template is shown when creating a new project. Also, You may need to create this folder.

2.1. Building the template
-----------------------------

__NOTE:__ Skip this step if the `lib\windows-phone` directory already contains a `CordovaWP7_x.x.x.zip` file.

- Open the `lib\windows-phone\templates\standalone\CordovaSolution.sln` in Visual Studio Express for Windows Phone
- Select __Export Template...__ from the __File__ menu.
- Choose template type __Project template__
- Supply a name of the exported template, such as `CordovaStarter-2.1.0` to produce a `CordovaStarter-2.1.0.zip` file.

- Optionally, add a description, icon image, or Preview image.  These are displayed in Visual Studio's __New Project__ dialog.
- __NOTE:__ If you select __Automatically import the template...__, then you don't need to copy the `.zip` file over as outlined in step 2.
- Press __Finish__.


3. Set up New Project
--------------------

- Open Visual Studio Express for Windows Phone and choose **New Project**.
- Select **CordovaStarter**. (The version number displays in the template description.)
- - __NOTE:__ If you do not see it, you may have to select the top-level 'Visual C#'.
- Give your project a name, and select __OK__.

    ![]({{ site.baseurl }}/static/img/guide/platforms/wp7/wpnewproj.png)


4. Review the project structure
-------------------------------

- The 'www' folder contains your Cordova html/js/css and any other resources included in your app.
- Any content that you add needs to be a part of the Visual Studio project, and it must be set as content.

    ![]({{ site.baseurl }}/static/img/guide/platforms/wp7/wp7projectstructure.png)


5. Build and Deploy to Emulator
-------------------------------

- Make sure **Windows Phone Emulator** is selected in the main drop-down menu.
- Press the green **play** button next to the drop-down menu to start debugging, or else type __F5__.

    ![]({{ site.baseurl }}/static/img/guide/platforms/wp7/wprun.png)

    ![]({{ site.baseurl }}/static/img/guide/platforms/wp7/wpfirstrun.png)


6. Build your project for the device
------------------------------------

To test your application on a device, the device must be registered. MSDN provides [documentation][register-url] to help deploy and test your Windows Phone.

- Make sure your phone is connected, and the screen is unlocked
- In Visual Studio, select 'Windows Phone [Device](../../../cordova/device/device.html)' from the top drop-down menu.
- Press the green **play** button next to the main drop-down menu to start debugging, or type __F5__.

    ![]({{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png)


Done!
-----

You can also checkout more detailed version of this guide [here](http://wiki.phonegap.com/w/page/48672055/Getting%20Started%20with%20PhoneGap%20Windows%20Phone%207).

[register-url]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx
