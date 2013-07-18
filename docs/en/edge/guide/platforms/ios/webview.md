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

1. **Cordova 2.3.0** or greater
2. **Xcode 4.5** or greater
3. `config.xml` file (from a newly created iOS project)

## Adding Cleaver to your Xcode project (CordovaLib sub-project)

1. **Download and extract the Cordova source** to a **permanent folder location** on your hard drive (say to `~/Documents/Cordova`)
2. **Quit Xcode** if it is running.
3. **Navigate** to the directory where you put the downloaded source above, using **Terminal.app**.
4. **Copy** the `config.xml` file into your project folder on disk (see **Prerequisites** above)
5. **Drag and drop** the `config.xml` file into the Project Navigator of Xcode
6. **Choose** the **Create groups for any added folders** radio button and press **Finish**
7. **Drag and drop** the `CordovaLib.xcodeproj` file into the Project Navigator of Xcode (from the permanent folder location above, and it should be in the CordovaLib sub-folder)
8. Select `CordovaLib.xcodeproj` in the Project Navigator
9. Type the **Option-Command-1** key combination to show the **File Inspector**
10. Choose **Relative to Group** in the **File Inspector** for the drop-down menu for **Location**
11. Select the **project icon** in the Project Navigator, select your **Target**, then select the **Build Settings** tab
12. Add `-all_load` and `-Obj-C` for the **Other Linker Flags** value
13. Click on the **project icon** in the Project Navigator, select your **Target**, then select the **Build Phases** tab
14. Expand **Link Binaries with Libraries**
15. Select the **+** button, and add these **frameworks** (and optionally in the Project Navigator, **move** them under the Frameworks group):

        AddressBook.framework
        AddressBookUI.framework
        AudioToolbox.framework
        AVFoundation.framework
        CoreLocation.framework
        MediaPlayer.framework
        QuartzCore.framework
        SystemConfiguration.framework
        MobileCoreServices.framework
        CoreMedia.framework

16. Expand **Target Dependencies** - the top box labeled like this if you have multiple boxes!
17. Select the **+** button, and add the `CordovaLib` build product
18. Expand **Link Binaries with Libraries** - the top box labeled like
    this if you have multiple boxes!
19. Select the **+** button, and add `libCordova.a`
20. Set the Xcode preference **Xcode Preferences &rarr; Locations &rarr; Derived Data &rarr; Advanced...** to **Unique**
21. Select the **project icon** in the Project Navigator, select your **Target**, then select the **Build Settings** tab
22. Search for **Header Search Paths**. For that setting, add these three values below (with quotes):

        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"

    With **Cordova 2.1.0**, CordovaLib has been upgraded to use **Automatic Reference Counting (ARC)**. You don't need to upgrade to **ARC** to use CordovaLib, but if you want to upgrade your project to use **ARC**, please use the Xcode migration wizard from the menu: **Edit &rarr; Refactor &rarr; Convert to Objective-C ARC...**, **de-select libCordova.a**, then run the wizard to completion.

## Using CDVViewController in your code

1. Add this **header**:

        #import <Cordova/CDVViewController.h>

2. Instantiate a **new** `CDVViewController`, and **retain it somewhere** (e.g. to a property in your class):

        CDVViewController* viewController = [CDVViewController new];

3. (_OPTIONAL_) Set the `wwwFolderName` property (defaults to `www`):

        viewController.wwwFolderName = @"myfolder";

4. (_OPTIONAL_) Set the start page in your config.xml, the `<content>` tag.

        <content src="index.html" />

    OR

        <content src="http://apache.org" />

5. (_OPTIONAL_) Set the `useSplashScreen` property (defaults to `NO`):

        viewController.useSplashScreen = YES;

6. Set the **view frame** (always set this as the last property):

        viewController.view.frame = CGRectMake(0, 0, 320, 480);

7. **Add** Cleaver to your view:

        [myView addSubview:viewController.view];

## Adding your HTML, CSS and JavaScript assets

1. Create a **new folder** in your project **on disk**, `www` for example.
2. Put your **HTML, CSS and JavaScript** assets into this folder.
3. **Drag and drop** the folder into the Project Navigator of Xcode.
4. **Choose** the **Create folder references for any added folders** radio button.
5. **Set the appropriate `wwwFolderName` and `startPage` properties** for the folder you created in **(1)** or use the defaults (see previous section) when you instantiate the `CDVViewController`.

        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"

