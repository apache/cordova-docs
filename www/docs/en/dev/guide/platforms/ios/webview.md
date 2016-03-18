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

title: iOS WebViews
---

# iOS WebViews

This guide shows how to embed a Cordova-enabled WebView component
within a larger iOS application. For details on how these components
can communicate with each other, see Application Plugins.

Support for WebViews for iOS started with Cordova version 1.4, using a
`Cleaver` component for which the Xcode template serves as a reference
implementation.  Cordova 2.0 and later versions only support the
subproject-based Cleaver implementation.

These instructions require at least Cordova 3.x and Xcode 6.0, along
with a `config.xml` file from a newly created iOS project. You can use
the procedure in [The Command-Line Interface](../../cli/index.html) to create a new project,
then obtain the `config.xml` file from within the named application's
subdirectory within `platforms/ios`.

To follow these instructions, make sure you have the latest Cordova
distribution. Download it from
[cordova.apache.org](http://cordova.apache.org) and unzip its iOS
package.

## Adding Cleaver to the Xcode Project (CordovaLib Sub-Project)

1. Quit Xcode if it is running.

1. Open a terminal and navigate to the source directory for Cordova
   iOS.

1. Copy the `config.xml` file described above into the project
   directory.

1. Open Xcode and use the Finder to copy the `config.xml` file into
   its __Project Navigator__ window.

1. Choose __Create groups for any added folders__ and press
   __Finish__.

1. Use the Finder to copy the `CordovaLib/CordovaLib.xcodeproj` file
   into Xcode's __Project Navigator__

1. Select `CordovaLib.xcodeproj` within the __Project Navigator__.

1. Type the __Option-Command-1__ key combination to show the __File
   Inspector__.

1. Choose __Relative to Group__ in the __File Inspector__ for the
   drop-down menu for __Location__.

1. Select the __project icon__ in the __Project Navigator__, select
   the __Target__, then select the __Build Settings__ tab.

1. Add `-force_load` and `-Obj-C` for the __Other Linker Flags__ value.

1. Click on the __project icon__ in the Project Navigator, select the
   __Target__, then select the __Build Phases__ tab.

1. Expand __Link Binaries with Libraries__.

1. Select the __+__ button, and add the following __frameworks__.
   Optionally within the __Project Navigator__, move them under the
   __Frameworks__ group:

    ```
    AssetsLibrary.framework
    CoreLocation.framework
    CoreGraphics.framework
    MobileCoreServices.framework
    ```

1. Expand __Target Dependencies__, the top box with that label if
   there's more than one box.

1. Select the __+__ button, and add the `CordovaLib` build product.

1. Expand __Link Binaries with Libraries__, the top box with that label
  if there's more than one box.

1. Select the __+__ button, and add `libCordova.a`.

1. Set the __Xcode Preferences &rarr; Locations &rarr; Derived Data
   &rarr; Advanced...__ to __Unique__.

1. Select the __project icon__ in the Project Navigator, select your
   __Target__, then select the __Build Settings__ tab.

1. Search for __Header Search Paths__. For that setting, add these
   three values below, including the quotes:

    ```
    "$(TARGET_BUILD_DIR)/usr/local/lib/include"
    "$(OBJROOT)/UninstalledProducts/include"
    "$(OBJROOT)/UninstalledProducts/$(PLATFORM_NAME)/include"
    "$(BUILT_PRODUCTS_DIR)"
    ```

    As of Cordova 2.1.0, `CordovaLib` has been upgraded to use
    __Automatic Reference Counting (ARC)__. You don't need to upgrade
    to __ARC__ to use `CordovaLib`, but if you want to upgrade your
    project to use __ARC__, you should use the Xcode migration wizard
    from the __Edit &rarr; Refactor &rarr; Convert to Objective-C
    ARC...__ menu, __de-select libCordova.a__, then run the wizard to
    completion.

## Using CDVViewController

1. Add the following header:

    ```objective_c
    #import <Cordova/CDVViewController.h>
    ```

1. Instantiate a new `CDVViewController` and retain it somewhere,
   e.g., to a class property:

    ```objective_c
    CDVViewController* viewController = [CDVViewController new];
    ```

1. Optionally, set the `wwwFolderName` property, which defaults to `www`:

    ```objective_c
    viewController.wwwFolderName = @"myfolder";
    ```

1. Optionally, set the start page in the `config.xml` file's
   `<content>` tag, either a local file:

    ```xml
    <content src="index.html" />
    ```

    ...or a remote site:

    ```xml
    <content src="http://apache.org" />
    ```

1. Optionally, set the `useSplashScreen` property, which defaults to
   `NO`:

    ```objective_c
    viewController.useSplashScreen = YES;
    ```

1. Set the __view frame__. Always set this as the last property:

    ```objective_c
    viewController.view.frame = CGRectMake(0, 0, 320, 480);
    ```

1. Add Cleaver to the view:

    ```objective_c
    [myView addSubview:viewController.view];
    ```

## Adding HTML, CSS and JavaScript Assets

1. Create a new directory within the project, `www` for example.

1. Place HTML, CSS and JavaScript assets into this directory.

1. Use the Finder to copy the directory into Xcode's __Project
   Navigator__ window.

1. Select __Create folder references for any added folders__.

1. Set the appropriate `wwwFolderName` and `startPage` properties for
   the directory you initially created, or use the defaults (specified
   in the previous section) when instantiating the
   `CDVViewController`.

    ```objective_c
    /*
        if you created a folder called 'myfolder' and
        you want the file 'mypage.html' in it to be
        the startPage
    */
    viewController.wwwFolderName = @"myfolder";
    viewController.startPage = @"mypage.html"
    ```

