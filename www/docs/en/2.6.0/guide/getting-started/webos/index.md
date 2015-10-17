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

title: Getting Started with WebOS
---

Getting Started with WebOS
==========================

This guide describes how to set up your development environment for Cordova and run a sample application.  Note that Cordova used to be called PhoneGap, so some of the sites still use the old PhoneGap name.

Video Tutorials:
----------------

- [Cordova and HP Palm webOS quick start video](http://www.youtube.com/v/XEnAUbDRZfw?autoplay=1)
- [How to convert iPhone app to a Palm](http://www.youtube.com/v/wWoJfQw79XI?autoplay=1)


1. Requirements
---------------

- Windows, OS X, or Linux


2. Install SDK + Cordova
----------------------------

- Download and install [Virtual Box](http://www.virtualbox.org/)
- Download and install [WebOS SDK](http://developer.palm.com/index.php?option=com_content&view=article&layout=page&id=1788&Itemid=321/)
- Download and install [cygwin SDK](http://developer.palm.com/index.php?option=com_content&amp;view=article&amp;layout=page&amp;id=1788&amp;Itemid=321)  (Windows only). Make sure you select "make" as it is not included by default
- Download the latest copy of [Cordova](http://phonegap.com/download) and extract its contents. We will be working with the webOS directory.
- Download and install XCode from the [Mac App Store](http://itunes.apple.com/ca/app/xcode/id497799835?mt=12) (OSX only)
- Download and install Command Line Tools for XCode (OSX only); this can be done by going to XCode's Preferences -> Downloads -> Components and then click install on Command Line Tools

 
3. Setup New Project
--------------------

- Open up terminal/cygwin and navigate to where you extracted your Cordova Download. Go into the webOS directory.


4. Hello World
--------------

In phonegap/webOS/framework/www, open up index.html with your favourite editor. After the body tag add `<h1>Hello World</h1>`


5A. Deploy to Simulator
-----------------------

- Open up your Palm Emulator from your applications folder/start menu.
- Type `make` in your terminal/cygwin while in the webOS directory.


5B. Deploy to [Device](../../../cordova/device/device.html)
--------------------

- Make sure your device is in [Developer Mode and plug it in.](http://developer.palm.com/index.php?option=com_content&amp;view=article&amp;id=1552&amp;Itemid=59#dev_mode)
- Type `make` in your terminal/cygwin while in the webOS directory.
       

Done!
-----

You can also checkout more detailed version of this guide [here](http://wiki.phonegap.com/w/page/16494781/Getting-Started-with-PhoneGap-webOS).

