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

# iOS WebViews

Beginning with Cordova 1.4, you can use Cordova as a component in your
iOS applications. This component is code-named 'Cleaver'.

New Cordova-based applications created using the Xcode template
provided in Cordova 1.4 or greater use Cleaver. (The template is
Cleaver's reference implementation.)

Cordova 2.0.0 and subsequent versions only support the sub-project
based Cleaver implementation.

## Prerequisites

* Cordova 2.3.0 or greater

* Xcode 4.5 or greater

* `config.xml` file (from a newly created iOS project)

## Adding Cleaver to your Xcode project (CordovaLib sub-project)

1. Download and extract the Cordova source to a permanent directory location on your hard drive, for example to `~/Documents/Cordova`.

2. Quit Xcode if it is running.

3. Using Terminal.app, navigate to the directory where you put the downloaded source above.

4. Copy the `config.xml` file into your project directory on disk (see the Prerequisites above).

5. Drag and drop the `config.xml` file into the Project Navigator of Xcode.

6. Choose the __Create groups for any added folders__ radio button and press __Finish__.

7. Drag and drop the `CordovaLib.xcodeproj` file into the Project Navigator of Xcode (from the permanent directory location above, and it should be in the `CordovaLib` subdirectory).

8. Select `CordovaLib.xcodeproj` in the Project Navigator.

9. Type the __Option-Command-1__ key combination to show the __File Inspector__.

10. Choose __Relative to Group__ in the __File Inspector__ for the drop-down menu for __Location__.

11. Select the __project icon__ in the Project Navigator, select your __Target__, then select the __Build Settings__ tab.

12. Add `-all_load` and `-Obj-C` for the __Other Linker Flags__ value.

13. Click on the __project icon__ in the Project Navigator, select your __Target__, then select the __Build Phases__ tab.

14. Expand __Link Binaries with Libraries__.

15. Select the __+__ button, and add the following __frameworks__. Optionally in the Project Navigator, move them under the __Frameworks__ group):

        AssetsLibrary.framework
        CoreLocation.framework
        CoreGraphics.framework
        MobileCoreServices.framework

16. Expand __Target Dependencies__, the top box labeled like this if you have multiple boxes!

17. Select the __+__ button, and add the `CordovaLib` build product.

18. Expand __Link Binaries with Libraries__, the top box labeled like
    this if you have multiple boxes!

19. Select the __+__ button, and add `libCordova.a`.

20. Set the Xcode preference __Xcode Preferences &rarr; Locations &rarr; Derived Data &rarr; Advanced...__ to __Unique__.

21. Select the __project icon__ in the Project Navigator, select your __Target__, then select the __Build Settings__ tab.

22. Search for __Header Search Paths__. For that setting, add these three values below (with quotes):

        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"

    With Cordova 2.1.0, `CordovaLib` has been upgraded to use __Automatic Reference Counting (ARC)__. You don't need to upgrade to __ARC__ to use CordovaLib, but if you want to upgrade your project to use __ARC__, please use the Xcode migration wizard from the menu: __Edit &rarr; Refactor &rarr; Convert to Objective-C ARC...__, __de-select libCordova.a__, then run the wizard to completion.

## Using CDVViewController in your code

1. Add this header:

        #import <Cordova/CDVViewController.h>

2. Instantiate a new `CDVViewController`, and retain it somewhere (e.g., to a property in your class):

        CDVViewController* viewController = [CDVViewController new];

3. (_OPTIONAL_) Set the `wwwFolderName` property (defaults to `www`):

        viewController.wwwFolderName = @"myfolder";

4. (_OPTIONAL_) Set the start page in your config.xml, the `<content>` tag.

        <content src="index.html" />

    OR

        <content src="http://apache.org" />

5. (_OPTIONAL_) Set the `useSplashScreen` property (defaults to `NO`):

        viewController.useSplashScreen = YES;

6. Set the __view frame__ (always set this as the last property):

        viewController.view.frame = CGRectMake(0, 0, 320, 480);

7. Add Cleaver to your view:

        [myView addSubview:viewController.view];

## Adding your HTML, CSS and JavaScript assets

1. Create a new directory in your project on disk, `www` for example.

2. Put your HTML, CSS and JavaScript assets into this directory.

3. Drag and drop the directory into the Project Navigator of Xcode.

4. Choose the __Create folder references for any added folders__ radio button.

5. Set the appropriate `wwwFolderName` and `startPage` properties for the folder you initially created, or use the defaults (see previous section) when you instantiate the `CDVViewController`.

        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"

