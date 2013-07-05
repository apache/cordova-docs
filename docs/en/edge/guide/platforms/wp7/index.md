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

Windows Phone 7 Platform Guide
==================================

## Requirements and Support

Requires Windows 7, Windows 8 or Windows Vista with SP2.  Running
Windows as a virtual machine does not work well, so Mac users should
set up a Bootcamp partition to run Windows 7 or Vista.

To install the app onto a device or submit it to the market place, you
need to become an
[App Hub member](http://create.msdn.com/en-US/home/membership).

Developers should use the the `cordova` utility in conjunction with
the Windows Phone SDK.  Before installing it on Windows, open a
command line and type `git` to make sure it is installed. If not,
download it from [mysysgit.github.io](http://mysysgit.github.io). When
prompted to configure your PATH, choose the option: __Run Git and
included Unix tools from the Windows Command Prompt__. Once git is
available, follow the instructions in The Cordova Command-line
Interface for information how to install it, add projects, then build
and deploy a project.

## Install the SDK

Download and install the
[Windows Phone SDK](http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=27570/)

## Open a Project in the SDK

After installing the `cordova` utility, use the following to create a
new project, then add and build the Windows Phone 7 project.

        $ cordova create hello com.example.hello "Hello World"
        $ cd hello
        $ cordova platform add wp7
        $ cordova build

Open Visual Studio and choose __Open Project__. Navigate to the
`hello/platforms/wp7` directory and choose the `Hello_World.sln` file.
The SDK displays the directory's contents:

![](img/guide/platforms/wp7/wp7vs.png)

At this point you can modify the app within the SDK, but running the
`build` or `prepare` commands again wipes out local changes. If Visual
Studio is open, it alerts you about modified files and offers you the
option to reload them.  See The Command-line Interface for
more information.

## Deploy to Emulator

Within the SDK, select the __Windows Phone Emulator__ target from the
popup menu in the main menu bar, and press the green button to run the
emulator:

![](img/guide/platforms/wp7/wprun.png)

The app displays on the emulator's home screen as it would on a real
device:

![](img/guide/platforms/wp7/wp7emulator.png)

## Deploy to Device

To test your application on a device, the device must be registered.
MSDN provides
[documentation][http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx]
to help deploy and test your Windows Phone.

Once registered, you need to make sure the phone is connected via USB
with its screen unlocked. In Visual Studio, choose the __Windows Phone
Device__ target and press the green button to run it:

![](img/guide/platforms/wp7/wpd.png)

