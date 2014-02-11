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

## Build the Project

If you are using the CLI in development, the project directory's
top-level `www` directory contains the source files. Run either of
these within the project directory to rebuild the app:

        > cordova build
        > cordova build windows8   # do not rebuild other platforms

If you are using the Windows Phone-specific shell tools in
development, there is a different approach.  Once you generate the
project, the default app's source is available in the
`projects\windows8\www` subdirectory. Subsequent commands are available in
the `cordova` subdirectory at the same level.

The `build` command cleans project files and rebuilds the app.  The first
example generates debugging information, and the second signs the apps
for release:

        C:\path\to\project\cordova\build.bat --debug        
        C:\path\to\project\cordova\build.bat --release

The `clean` command helps flush out directories in preparation for the
next `build`:

        C:\path\to\project\cordova\clean.bat

## Open the Project in the SDK and Deploy the App

<!-- wasn't able to 'run' or 'emulate', so doc'ing SDK as fallback -->

Once you build a Cordova app as described above, you can open it with
Visual Studio. The various `build` commands generate a Visual Studio
Solution (_.sln_) file. Open the file in the File Explorer to modify
the project within Visual Studio:

![](img/guide/platforms/win8/win8_sdk_openSLN.png)

The `CordovaApp` component displays within the solution, and its `www`
directory contains the web-based source code, including the
`index.html` home page:

![](img/guide/platforms/win8/win8_sdk.png)

The controls below Visual Studio's main menu allow you to test or
deploy the app:

![](img/guide/platforms/win8/win8_sdk_deploy.png)

With __Local Machine__ selected, press the green arrow to install the
app on the same machine running Visual Studio. Once you do so, the app
appears in Windows 8's app listings, as shown below on the left. Once
available in this view, holding down the __CTRL__ key while selecting
the app allows you to pin it to the main screen, as shown on the
right:

![](img/guide/platforms/win8/win8_sdk_run.png)

Alternately, choose the __Simulator__ deployment option to view the
app as if it were running on a tablet device:

![](img/guide/platforms/win8/win8_sdk_sim.png)

Unlike desktop deployment, this option allows you to simulate the
tablet's orientation, location, and vary its network settings.

__NOTE__: Consult the Overview for advice on how to use Cordova's
command-line tools or the SDK in your workflow. The Cordova CLI relies
on cross-platform source code that routinely overwrites the
platform-specific files used by the SDK. If you want to use the SDK to
modify the project, use the lower-level shell tools as an alternative
to the CLI.

<!--

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
