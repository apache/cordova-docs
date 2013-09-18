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
deploy Cordova apps for Windows 8. See the following for more
detailed platform-specific information:

* Upgrading Windows 8
* Windows 8 Command-line Tools

The command-line tools above refer to versions prior to Cordova 3.0.
See The Command-line Interface for information about the
current interface.

Microsoft deprecated the name _Metro-style apps_ in Windows 8 and
Windows RT. MSDN now refers to this type of app as a _Windows Store_
app, and this guide follows that convention. Also, in this guide
_Windows 8_ signifies both Windows 8 and Windows RT.

## 1. Requirements

- Windows 8

- Visual Studio 2012 Professional or better, or Visual Studio 2012 Express for Windows 8

Follow the instructions [here](http://www.windowsstore.com/) to submit your apps Windows Store.

## 2. Install SDK + Cordova

- Set up your preferred variant of Visual Studio 2012. All of the product's paid versions (Professional, etc.) let you build Windows Store apps. You need __Express for Windows 8__ to build Windows Store apps using the [Express editions](http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products).

- Download and extract the latest copy of [Cordova](http://phonegap.com/download). You will be working in the `lib\windows-8` subdirectory.

## 3. Set up New Project

You can already build Windows 8 apps using the _HTML/JavaScript track_
available in Windows Store apps. Use Cordova in Windows Store apps to
expose the same APIs as on other Cordova-supported platforms.

- Open Visual Studio 2012 and choose __New Project__.

- Select __Installed &rarr; Template &rarr; Other Languages &rarr; JavaScript &rarr; Windows Store__ from the tree, and then __Blank App__ from the projects list. Enter whatever project name you like, such as `CordovaWin8Foo` as in this example.

    ![](img/guide/platforms/win8/wsnewproject.png)

- Microsoft continues to use `default.html` as the default home page, but most web developers use `index.html`. (Plus it's likely that in the other platform variants of your project you are using `index.html` as the name of your default page.) To fix this, in Solution Explorer rename the `default.html` file to `index.html`. Then double-click the `package.appxmanifest` file and change the __Start page__ value to `index.html`.

	![](img/guide/platforms/win8/wschangemanifest.png)

- To include `cordova.js` in your project, right-click on the `js` directory in Solution Explorer and select __Add &rarr; New Item__. Locate the `cordova.js` file in the `lib\windows-8` directory noted above.

- Edit the code for `index.html`. Add a reference to `cordova.js`. You can do this manually, or by dragging the file from Solution Explorer.

### Adding the reference...

	    <!-- WinJS references -->
	    <link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel="stylesheet" />
	    <script src="//Microsoft.WinJS.1.0/js/base.js"></script>
	    <script src="//Microsoft.WinJS.1.0/js/ui.js"></script>

	    <!-- Cordova -->
	    <script src="/js/cordova.js"></script>

	    <!-- CordovaWin8Foo references -->
	    <link href="/css/default.css" rel="stylesheet" />
	    <script src="/js/default.js"></script>

- Next, add some code that demonstrates Cordova is working.

### Adding a 'deviceready' handler...

	<body>
	    <p>Content goes here</p>

	    <script type="text/javascript">

	        console.log("Subscribing...");
	        document.addEventListener("deviceready", function () {

	            navigator.notification.alert("The device is ready!");

	        });

	    </script>

	</body>

## 5. Test the Project

- Run the project from Visual Studio. You'll see the message box appear:

	![](img/guide/platforms/win8/wsalert.png)

## Done!

That's it! You're now ready to build Windows Store apps with Cordova.

