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

# Windows 8 Platform Guide

This guide shows how to set up your SDK development environment to
deploy Cordova apps in Windows 8.  It shows how to use either shell
tools specific to Windows 8 to generate and build apps, or the
cross-platform Cordova CLI discussed in The Command-Line Interface.
(See the Overview for a comparison of these development options.) This
section also shows how to modify Cordova apps within Visual Studio.
Regardless of which approach you take, you need to install the Visual
Studio SDK, as described below.

See Upgrading Windows 8 for information on how to upgrade existing
Windows 8 Cordova projects.

Cordova WebViews running on Windows 8 rely on Internet Explorer 10 as
their rendering engine, so as a practical matter you can use IE10's
powerful debugger to test any web content that doesn't invoke Cordova
APIs.  The Windows Phone Developer Blog provides
[helpful guidance](http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx)
on how to support IE10 along with comparable WebKit browsers.

## Requirements and Support

You need the following:

- A 64-bit version of Windows 8 Pro, either an installation disk or an
  _ISO_ disk image file. An evaluation version is available on the
  [Microsoft Developer Network](http://msdn.microsoft.com/en-US/evalcenter/jj554510).

  <!-- 64-bit necessary? Pro necessary? ELSE still recommended for parallel WP dev -->

- [Visual Studio](http://www.visualstudio.com/downloads), either the
  _Ultimate_, _Premium_, or _Professional_ 2013 editions.

  <!-- true? -->

To develop Cordova apps for Windows 8, you may use a PC running
Windows, but you may also develop on a Mac, either by running a
virtual machine environment or by using Boot Camp to dual-boot a
Windows 8 partition. Consult these resources to set up the required
Windows development environment on a Mac:

- [VMWare Fusion](http://msdn.microsoft.com/en-US/library/windows/apps/jj945426)

- [Parallels Desktop](http://msdn.microsoft.com/en-US/library/windows/apps/jj945424),
  
- [Boot Camp](http://msdn.microsoft.com/en-US/library/windows/apps/jj945423).
  
<!-- confirm: no "virtualization" BIOS setting necessary -->

## Install Cordova Shell Tools

If you want to use Cordova's Windows 8-centered shell tools in
conjunction with the SDK, download Cordova from
[cordova.apache.org](http://cordova.apache.org). Otherwise ignore this
section if you plan to use the cross-platform CLI utility.

The Cordova download contains separate archives for each platform. Be
sure to expand the appropriate archive, `cordova-windows8\windows8` in
this case, within an empty directory.  The relevant batch utilities
are available in the top-level `bin` directory. (Consult the
__README__ file if necessary for more detailed directions.)

These shell tools allow you to create, build, and run Windows 8 apps.
For information on the additional command-line interface that enables
plugin features across all platforms, see Using Plugman to Manage
Plugins.

## Install the SDK

Install the _Ultimate_, _Premium_, or _Professional_ 2013 editions of
[Visual Studio](http://www.visualstudio.com/downloads).

![](img/guide/platforms/win8/win8_installSDK.png)

## Create a New Project

At this point, to create a new project you can choose between the
cross-platform CLI tool described in The Command-Line Interface, or
the set of Windows 8-specific shell tools. From within a source-code
directory, this CLI approach generates an app named _HelloWorld_
within a new `hello` project directory:

        > cordova create hello com.example.hello HelloWorld
        > cd hello
        > cordova platform add windows8
        > cordova build

Here's the corresponding lower-level shell-tool approach:

        C:\path\to\cordova-win8\bin\create.bat C:\path\to\new\hello com.example.hello HelloWorld

## Build and Deploy the Project

## Modify the Project in the SDK

<!--

Microsoft deprecated the name _Metro-style apps_ in Windows 8 and
Windows RT. MSDN now refers to this type of app as a _Windows Store_
app, and this guide follows that convention. Also, in this guide
_Windows 8_ signifies both Windows 8 and Windows RT.

## Requirements

- Windows 8

- Visual Studio 2012 Professional or better, or Visual Studio 2012 Express for Windows 8

Follow the instructions at
[windowsstore.com](http://www.windowsstore.com/)
to submit your app to Windows Store.

## Install SDK and Cordova

Set up your preferred variant of Visual Studio 2012. All of the
product's paid versions (Professional, etc.) let you build Windows
Store apps. You need __Express for Windows 8__ to build Windows Store
apps using the
[Express editions](http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products).

Download and extract the latest copy of
[Cordova](http://phonegap.com/download).
These instructions apply to the `lib\windows-8` subdirectory.

## Set up a New Project

You can already build Windows 8 apps using the _HTML/JavaScript track_
available in Windows Store apps. Use Cordova in Windows Store apps to
expose the same APIs as on other Cordova-supported platforms.

- Open Visual Studio 2012 and choose __New Project__.

- Select __Installed &rarr; Template &rarr; Other Languages &rarr;
  JavaScript &rarr; Windows Store__ from the tree, and then __Blank
  App__ from the projects list. Enter whatever project name you like,
  such as `CordovaWin8Foo` as in this example:

    ![](img/guide/platforms/win8/wsnewproject.png)

- Microsoft continues to use `default.html` as the default home page,
  but most web developers use `index.html`. It's a good idea to do so,
  at least to match other platforms you're likely working on.  To fix
  this, in __Solution Explorer__ rename the `default.html` file to
  `index.html`. Then double-click the `package.appxmanifest` file and
  change the __Start page__ value to `index.html`:

        ![](img/guide/platforms/win8/wschangemanifest.png)

- To include `cordova.js` in your project, right-click on the `js`
  directory in __Solution Explorer__ and select __Add &rarr; New
  Item__. Locate the `cordova.js` file in the `lib\windows-8`
  directory.

- Edit the code for `index.html`. Add a reference to `cordova.js`. You
  can do this manually, or by dragging the file from __Solution
  Explorer__. Add the following other dependencies to the app's home page:

            <!-- WinJS references -->
            <link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel="stylesheet" />
            <script src="//Microsoft.WinJS.1.0/js/base.js"></script>
            <script src="//Microsoft.WinJS.1.0/js/ui.js"></script>

            <!-- Cordova -->
            <script src="/js/cordova.js"></script>

            <!-- CordovaWin8Foo references -->
            <link href="/css/default.css" rel="stylesheet" />
            <script src="/js/default.js"></script>

- Add a `deviceready` handler to demonstrate Cordova is working:

        <body>
            <p>Content goes here</p>
            <script type="text/javascript">
                console.log("Subscribing...");
                document.addEventListener("deviceready", function () {
                    navigator.notification.alert("The device is ready!");
                });
            </script>
        </body>

## Test the Project

Run the project from Visual Studio. You'll see the message box appear:

        ![](img/guide/platforms/win8/wsalert.png)

That's it. You're now ready to build Windows Store apps with Cordova.

-->
