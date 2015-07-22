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

title: Getting Started with Symbian
---

Getting Started with Symbian
============================

This guide describes how to set up your development environment for Cordova and run a sample application.  Note that Cordova used to be called PhoneGap, so some of the sites still use the old PhoneGap name.

Video Tutorials:
----------------

- [Cordova Installer - Xcode 4 Template](http://www.youtube.com/v/R9zktJUN7AI?autoplay=1)


1. Requirements
---------------

- Windows, OS X, or Linux

There are also [QT for Symbian](http://wiki.phonegap.com/w/page/16494811/PhoneGap-Symbian-%28Qt%29) and [Symbian with Sony Ericsson](http://wiki.phonegap.com/w/page/16494782/Getting-Started-with-PhoneGap-Symbian-(WRT-on-Sony-Ericsson)) guides.


2. Install SDK + Cordova
-------------------------

- Download and install [cygwin](http://www.cygwin.com/setup.exe) (Windows only). Make sure you select "make" as it is not included by default
- Download the latest copy of [Cordova](http://phonegap.com/download) and extract its contents. We will be working with the Android directory.


3. Setup New Project
--------------------

- In cygwin, navigate to where you extracted Cordova and go into the Symbian directory</li>

 
4. [Hello World](../webos/index.html)
--------------

- Open up index.html located in phonegap/symbian/framework/www with your favourite editor. 
- In the `body` tag, remove the line `"Build your phonegap app here! Dude!"` and add the line `<h1>[Hello World](../webos/index.html)</h1>`
- In cygwin/terminal, type make. This will produce phonegap-symbian.wrt/app.wgz. 


5A. Deploy to Simulator
-----------------------

- For Mac or Linux you should install [Aptana Studio](http://www.aptana.org/products/studio2/download) and [Nokia WRT Plug-in for Aptana Studio](http://www.forum.nokia.com/info/sw.nokia.com/id/00d62bd8-4214-4c86-b608-5f11b94dad54/Nokia_WRT_Plug_in_for_Aptana_Studio.html). This has a browser-based javascript emulator
- For Windows you can download the [S60 SDK](http://www.forum.nokia.com/info/sw.nokia.com/id/ec866fab-4b76-49f6-b5a5-af0631419e9c/S60_All_in_One_SDKs.html) which includes the S60 Emulator
- Load the phonegap-symbian.wrt/app.wgz file into the emulator.


5B. Deploy to [Device](../../../cordova/device/device.html)
--------------------

- Load the phonegap-symbian.wrt/app.wgz file into the device using bluetooth or email.


Done!
-----

You can also checkout more detailed version of this guide [here](http://wiki.phonegap.com/w/page/16494780/Getting-Started-with-Phonegap-Nokia-WRT).

