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

# Windows Phone Platform Guide

This guide shows how to set up your SDK development environment to
deploy Cordova apps for Windows Phone devices.  It focuses on Windows
Phone 8, but provides additional details on how to support Windows
Phone 7.

<!-- 2DO: can we easily discuss wp7 within wp8 topic? -->

It shows how to use either Windows Phone-specific shell tools to
generate and build apps, or the cross-platform Cordova CLI discussed
in The Command-Line Interface.  (See the Overview for a comparison of
these command-line development options.) This section also shows how
to open Cordova apps so that you can modify them within Visual Studio.
Regardless of which approach you take, you need to install the Windows
Phone SDK, as described below.

See the following for details specific to the Windows Phone platform:

- Windows Phone Plugins
- Upgrading Windows Phone

## Requirements and Support

You will need the following:

- A 64-bit version of Windows 8 Pro, either an installation disk or an
  _ISO_ disk image file. An evaluation version is available on the
  [Microsoft Developer Network](http://msdn.microsoft.com/en-US/evalcenter/jj554510).
  The Pro version is necessary to run the device emulator,

- The [Windows Phone SDK](https://dev.windowsphone.com/en-us/downloadsdk).

To develop Cordova apps for Windows Phone devices, you may use a PC
running Windows, but you may also develop on a Mac, either by running
a virtual machine environment or by using Boot Camp to dual-boot a
Windows partition. Consult these resources to set up the required
Windows development environment on a Mac:

- __VMWare Fusion__: To set up the Windows 8 virtual machine, follow
  the instructions provided by the
  [Microsoft Developer Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945426),
  then follow the instructions at Configuring VMWare Fusion to prepare
  the virtual environment to run the emulator bundled with the SDK.

  <!-- 2DO: bug: VMware doesn't recognize ISO's Win8 component. -->
  
- __Parallels Desktop__: To set up the Windows 8 virtual machine,
  follow the instructions provided by the
  [Microsoft Developer Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945424),
  then follow the instructions at Configuring Parallels Desktop to
  prepare the virtual environment to run the emulator bundled with the
  SDK.
  
- __VirtualBox__: To set up the Windows 8 virtual machine, follow the
  installation instructions provided by the [Microsoft Developer
  Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945425).

  <!-- 2DO: virtualBox doesn't work yet; any extra config info? -->
  
- __Boot Camp__: To set up the Windows 8 partition, follow the
  installation instructions provided by the [Microsoft Developer
  Network](http://msdn.microsoft.com/en-US/library/windows/apps/jj945423).
  
If you are developing on a PC, its processor must support
virtualization (_VT-x_ on Intel) and [Second Level Address Translation
(SLAT)](http://en.wikipedia.org/wiki/Second_Level_Address_Translation).
Consult [Intel's list of supporting
processors](http://ark.intel.com/Products/VirtualizationTechnology).
Virtualization is typically disabled by default, so you need to enable
it in your BIOS settings. The PC should have at least 6.5GB of free
hard disk space, and 4GB of RAM.

## Install Cordova Shell Tools

If you want to use Cordova's Windows Phone-centered shell tools in
conjunction with the SDK, download Cordova from
[cordova.apache.org](http://cordova.apache.org). Otherwise ignore this
section if you plan to use the cross-platform CLI utility, but see The
Command-Line Interface for instructions how to install it on Windows 8.

The Cordova download contains separate archives for each platform. Be
sure to expand the appropriate archive, `wp8` in this case, within an
empty directory.  The relevant executible utilities are available in
the top-level `bin` directory. (Consult the __README__ file if
necessary for more detailed directions.)

These shell tools allow you to create, build, and run Windows Phone
apps.  For information on the additional command-line interface that
enables plugin features across all platforms, see Using Plugman to
Manage Plugins. See Application Plugins for guidance on how to develop
plugins, and Windows Phone Plugins for details specific to the Windows
Phone platform.

## Install the SDK

Install the latest version of the Windows Phone SDK from the
__Downloads__ area of
[dev.windowsphone.com](https://dev.windowsphone.com/en-us/downloadsdk),
along with any more recent emulator updates.

After installing the SDK, you need to modify the system's PATH to make
the SDK available to Cordova on the Windows command line:

- First you need to get the path string. Open the __File Explorer__,
  navigate to `C:\Windows\Microsoft.NET\Framework`, then open the most
  recent framework. Click on the right of the navigation path to view
  the full path string, then type __CTRL-c__ to copy it:

  ![](img/guide/platforms/wp8/modpath_copy.png)

- Then you need to modify the path. Open the __Control Panel__ from
  within the __Apps__ area of the Windows 8 home screen:

  ![](img/guide/platforms/wp8/modpath_control_panel.png)

- Open the __System__ control panel item:

  ![](img/guide/platforms/wp8/modpath_system.png)

- Choose the __Advanced System Settings__ from the list on the left:

  ![](img/guide/platforms/wp8/modpath_advanced.png)

- At the bottom of the resulting panel, press the __Environment
  Variables__ button:

  ![](img/guide/platforms/wp8/modpath_environment.png)

- Choose __PATH__ from the __User Variables__, then press __Edit__:

  ![](img/guide/platforms/wp8/modpath_edit.png)

  Otherwise if there is no __PATH__ available, press __New__ to create it.

  <!- 2DO: check any PATH if no npm install? -->

- If a PATH value already exists, append a semicolon and paste the
  path string you copied earlier. Otherwise simply paste the string:

  ![](img/guide/platforms/wp8/modpath_append.png)

  Here is a sample __PATH__ value that also specifies the `npm`
  utility that is required to install the Cordova CLI:

    C:\Users\sierra\AppData\Roaming\npm;C:\Windows\Microsoft.NET\Framework\v4.0.30319

## Create a New Project

At this point, to create a new project you can choose between the
cross-platform CLI tool described in The Command-Line Interface, or
the set of Windows Phone-specific shell tools. From within a
source-code directory, here's the CLI approach:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add wp8
        > cordova build

Here's the corresponding lower-level shell-tool approach:

        C:\path\to\cordova-wp8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld

<!-- 2DO: how to open WP SDK to modify project -->

## Build the Project

If you are using the CLI in development, the project directory's
top-level `www` directory contains the source files. Run either of
these within the project directory to rebuild the app:

        > cordova build
        > cordova build wp8   # do not rebuild other platforms

If you are using the Windows Phone-specific shell tools in
development, there is a different approach.  Once you generate the
project, the default app's source is available in the `assets/www`
subdirectory.
<!-- 2DO: check location of locally generated src files -->
Subsequent commands are available in its `cordova` subdirectory.

The `build` command cleans project files and rebuilds the app.  The first
example generates debugging information, and the second signs the apps
for release:
<!-- 2DO: check if CL debug/release build flags are available -->

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release

## Deploy to Emulator

At this point you can use the `cordova` CLI utility to deploy the
application to the emulator from the command line:

        > cordova emulate wp8

Otherwise use the alternate shell interface:

        > /path/to/project/cordova/run --emulator

The emulator launches a device image with the app installed. From the
home screen, navigate to the apps panel to launch the __HelloWorld__
app:

![](img/guide/platforms/wp8/wp8_emulator.png)

The emulator's basic controls on the top-right of the device screen
allow you to toggle between portrait and landscape orientation. The
__>>__ button opens more controls that allow you to test more complex
orientations and gestures:

![](img/guide/platforms/wp8/wp8_emulator_orient.png)

These advanced controls also allow you to modify the device's
location or to simulate sequences of movements:

![](img/guide/platforms/wp8/wp8_emulator_loc.png)

## Deploy to Device

Before testing your application on a device, the device must be
registered. Consult [Microsoft's documentation](http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx)
for details on how to deploy and test on Windows Phone 8. The basic
steps are simple:

- Make sure the phone is connected to the computer, and the screen is
  unlocked.

- In Visual Studio, select __Windows Phone Device__ from the drop-down
  menu at the top.

- Press the green __Play__ button next to the main drop-down menu to
  start debugging, or else type __F5__.

## Modify the Project in the SDK

Once you build a Cordova app as described above, you can open it with
the SDK. The various `build` commands generates a Visual Studio
Solution (_.sln_) file. Open the file to modify the project within
Visual Studio. The web-based source code is available within the
project's `www` directory. Along with other tools the SDK provides,
the control below the menu allows you to launch the app in a Windows
Phone emulator:

![](img/guide/platforms/wp8/wp8_vs.png)

Consult the Overview for advice on how to use Cordova's command-line
tools or the SDK in your workflow. The Cordova CLI relies on
cross-platform source code that routinely overwrites the
platform-specific files used by the SDK. If you want to work within
the SDK, use the lower-level shell tools as an alternative to the CLI.

<!--

# Windows Phone 7

Version 7 does not have all the advanced features included in Internet
Explorer 10, but implements the same set of APIs. Windows Phone 8 apps
do _not_ run on Windows Phone 7 devices.

## Further Reading

The Windows Phone Developer Blog provides
[helpful details](http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx)
on differences between IE10 and WebKit browsers, and how to support
both.

-->

