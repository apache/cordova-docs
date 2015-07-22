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

title: Embedding Cordova WebView on iOS
---

Embedding Cordova WebView on iOS
================================

Beginning with Cordova 1.4, you can use Cordova as a component in your iOS applications. This component is code-named "Cleaver".

New Cordova-based applications created using the Xcode template provided in Cordova 1.4 or greater use Cleaver, and this template is considered the reference implementation for Cleaver.

Beginning with Cordova 2.0.0, we only support the sub-project based Cleaver implementation from now on.

Prerequisites
-------------

1. **Cordova 2.0.0** or greater
2. **Xcode 4.3** or greater
3. `Cordova.plist` file


Adding Cleaver to your Xcode project (CordovaLib sub-project)
-------------------------------------------------------------

0. **Install** Cordova
1. **Copy** the `Cordova.plist` file into your project folder on disk
2. **Drag and drop** the `Cordova.plist` file into the Project Navigator of Xcode
3. **Choose** the radio-button **"Create groups for any added folders"**
4. Press the key combination **Option-Command-A**, which should drop down a sheet to add files to your project (the **"Add Files..." sheet**). Make sure the **"Created groups for any added folders"** radio-button is selected
5. Press the key combination **Shift-Command-G**, which should drop down another sheet for you to go to a folder (the **"Go to the folder:" sheet**)
6. Enter `~/Documents/CordovaLib/` in the **"Go to the folder:" sheet** and then press the **"Go"** button
7. Select the `VERSION` file in the the **"Add Files..." sheet**
8. Press the **"Add"** button in the **"Add Files..." sheet**
9. Press the key combination **Option-Command-A**, which should drop down a sheet to add files to your project (the **"Add Files..." sheet**). Make sure the **"Created groups for any added folders"** radio-button is selected
10. Press the key combination **Shift-Command-G**, which should drop down another sheet for you to go to a folder (the **"Go to the folder:" sheet**)
11. Enter `~/Documents/CordovaLib/CordovaLib.xcodeproj` in the **"Go to the folder:" sheet** and then press the **"Go"** button
12. Press the **"Add"** button in the **"Add Files..." sheet**
13. Select `CordovaLib.xcodeproj` in the Project Navigator
14. Press the key combination **Option-Command-1** to show the **File Inspector**
15. Choose **"Relative to CORDOVALIB"** in the **File Inspector** for the drop-down menu for **Location** 
16. Click on the **project icon** in the Project Navigator, select your **Project**, then select the **"Build Settings"** tab
17. Add `-all_load` and `-Obj-C` - for the **"Other Linker [Flags](../../cordova/file/flags/flags.html)"** value
18. Click on the **project icon** in the Project Navigator, select your **Target**, then select the **"Build Phases"** tab
19. Expand **"Link Binaries with Libraries"** 
20. Click on the **"+" button**, and add these **frameworks** (and optionally in the Project Navigator, **move** them under the Frameworks group):

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

21. Expand **"Target Dependencies"** - the top box labeled like this if you have multiple boxes!
22. Click on the **"+" button**, and add the `CordovaLib` build product
23. Expand **"Link Binaries with Libraries"** - the top box labeled like
    this if you have multiple boxes!
24. Click on the **"+" button**, and add `libCordova.a`

Using CDVViewController in your code
------------------------------------

1. Add this **header**:

        #import <Cordova/CDVViewController.h>

2. Instantiate a **new** `CDVViewController`, and retain it somewhere: 

        CDVViewController* viewController = [CDVViewController new];

3. (_OPTIONAL_) Set the `wwwFolderName` property (defaults to `"www"`):

        viewController.wwwFolderName = @"myfolder";

4. (_OPTIONAL_) Set the `startPage` property (defaults to `"index.html"`):

        viewController.startPage = @"mystartpage.html";

5. (_OPTIONAL_) Set the `useSplashScreen` property (defaults to `NO`):

        viewController.useSplashScreen = YES;

6. Set the **view frame** (always set this as the last property):

        viewController.view.frame = CGRectMake(0, 0, 320, 480);

7. **Add** Cleaver to your view:

        [myView addSubview:viewController.view];

Adding your HTML, CSS and JavaScript assets
-------------------------------------------

1. Create a **new folder** in your project **on disk**, for example, name it `www`
2. Put your **HTML, CSS and JavaScript assets** into this folder
3. **Drag and drop** the folder into the Project Navigator of Xcode
4. **Choose** the radio-button **"Create folder references for any added folders"**
5. **Set the appropriate `wwwFolderName` and `startPage` properties** for the folder you created in **(1)** or use the defaults (see previous section) when you instantiate the `CDVViewController`.

        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be 
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"

