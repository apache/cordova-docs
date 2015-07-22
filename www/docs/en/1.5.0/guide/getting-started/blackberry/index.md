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

title: Getting Started with BlackBerry
---

Getting Started with BlackBerry
============================


Video Tutorials:
----------------

- [PhoneGap and BlackBerry Widgets uick Start Video](http://www.youtube.com/v/eF0h0K0OLwI?autoplay=1)



1. Requirements
---------------

- Windows XP (32-bit) or Windows 7 (32-bit and 64-bit) or Mac OSX 10.6.4+

For 4.x devices check out [this guide](http://wiki.phonegap.com/w/page/25653281/Getting%20Started%20with%20PhoneGap-BlackBerry%20with%20the%20Latest%20Environment).


2. Install SDK + PhoneGap
-------------------------

- (Windows Only) Download and install [SUN JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html#jdk) (32-Bit Version). Add it to your PATH variable.
- (Windows Only) Download and extract [Apache Ant](http://ant.apache.org/bindownload.cgi). Add it to your PATH variable.
- Download [BlackBerry WebWorks Smartphone SDK](ttps://bdsc.webapps.blackberry.com/html5/download/sdk) for BlackBerry development and/or [BlackBerry WebWorks Tablet OS SDK](https://bdsc.webapps.blackberry.com/html5/download/sdk) for Playbook development. Keep note of the directories you install these SDKs.
- Download the latest copy of [PhoneGap](http://phonegap.com/download) and extract its contents. We will be working with the Android directory.


3. Setup New Project
--------------------

- Open up a command prompt/terminal and navigate to where you extracted PhoneGap. CD into the PhoneGapBlackBerry directory.
- Create a PhoneGap BlackBerry and PlayBook project. Type 'ant create -Dproject.path='followed by the location you wish to create your project into the command prompt/terminal.
- Change to the newly created directory located at `C:\Dev\bbw\sample`.
- Open up the project.properties file with your favourite editor and change the lines `BlackBerry.bbwp.dir=` and `PlayBook.bbwp.dir=` to equal the respective install locations of the SDKs you downloaded earlier.


4. [Hello World](../webos/index.html)
--------------

Build the PhoneGap sample project by typing `ant target build` in your command prompt/terminal while you are in your project's directory. Replace the target with either blackberry or playbook. Note this is the sample PhoneGap project and not a basic hello world application. You can go edit the index.html file located in the www directory of your project to make it say [Hello World](../webos/index.html) if you wish.


5A. Deploy to Simulator (Windows Only)
--------------------------------------

- While in your project directory, in command prompt/terminal type `ant target load-simulator`. Replace the target with either blackberry or playbook.
- Press the BlackBerry button on the simulator, go to downloads and you should see your app loaded there.


5B. Deploy to [Device](../../../phonegap/device/device.html) (Windows and Mac)
--------------------------------------

- You have to have your signing keys from RIM by filling out this [form](https://www.blackberry.com/SignedKeys/).
- While in your project directory, in command prompt/terminal type `ant target load-device`. Replace the target with either blackberry or playbook.
- Press the BlackBerry button on the simulator, go to downloads and you should see your app loaded there.


Done!
-----

You can also checkout more detailed [version](../../../phonegap/storage/parameters/version.html) of this guide [here](http://wiki.phonegap.com/w/page/31930982/Getting-Started-with-PhoneGap-BlackBerry-WebWorks).

