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

title: Upgrading Cordova iOS
---

Upgrading Cordova iOS
=====================

Please note that **Xcode 4 is required**. To submit to the Apple App Store, you must use the latest shipped version of the iOS SDK, which is iOS 5.1. The iOS 5.1 SDK requires Xcode 4.

## Upgrading Cordova 1.9.0 projects to 2.0.0 ##

1. **Install** Cordova 2.0.0
2. **Create a new project** from the command-line tools - you will have to grab the assets from this new project
3. **Copy** the **www/cordova-2.0.0.js** file from the new project into your **www** folder, and delete your **www/cordova-1.9.0.js** file
4. **Update** the Cordova script reference in your **www/index.html** file (and any other files that contain the script reference) to point to the new **cordova-2.0.0.js** file
5. Copy the **"cordova"** folder from the new project into your project's root folder (if you want the project command-line tools) 
6. **Add** a new entry under **Plugins** in your **Cordova.plist** file (under the **Supporting Files** group) - the key is **Device** and the value is **CDVDevice**
7. Remove **Cordova.framework**
8. Remove **verify.sh** from the **Supporting Files** group
9. Select the **project icon** in the Project Navigator, select your project **Target**, then select the **"Build Settings"** tab
10. Search for **"Preprocessor Macros"**, then remove all **"CORDOVA_FRAMEWORK=1"** values
11. Locate the **CordovaLib** folder that was installed in your hard-drive under your home folder's **Documents** sub-folder.
12. Locate the **CordovaLib.xcodeproj** file in the **CordovaLib** folder, then **drag and drop** the file into your project - it should appear as a **sub-project**.
13. **Build** your project, you should get some **errors** relating to **#import** directives
14. For the **#import errors**, change any **quote-based** imports in this style:

        #import "CDV.h"
        
    to this **brackets-based** style:
    
        #import <Cordova/CDV.h>
        
    and remove any **#ifdef** wrappers around any Cordova imports, they are not needed anymore (the imports are **unified** now)    
15. **Build** your project again, and it should not have any **#import** errors.
16. Select the **project icon** in the Project Navigator, select your project **Target**, then select the **"Build Phases"** tab
17. Expand the **"Target Dependencies"** phase, then select the **"+"** button
18. Select the **"CordovaLib"** target, then select the **"Add"** button
19. Expand the **first** **"Link Binary with Libraries"** phase (it should already contain a bunch of frameworks), then select the **"+"** button
20. Select the **libCordova.a** static library, then select the **"Add"** button
21. Delete the **"Run Script"** phase.
22. Select the **project icon** in the Project Navigator, select your project **Target**, then select the **"Build Settings"** tab
23. Search for **"Other Linker [Flags](../../../cordova/file/flags/flags.html)"**, and add the values **-all_load** and **-Obj-C**
24. Expand the **"CordovaLib" sub-project**
25. Locate the **"VERSION"** file, drag it into your main project (we want to create a link to it, not a copy)
26. Select the **"Create groups for any added folders"** radiobutton, then select the **"Finish"** button
27. Select the **"VERSION"** file that you just dragged in a previous step
28. Press the key combination **Option-Command-1** to show the **File Inspector** (or menuitem **View -> Utilities -> Show [File](../../../cordova/file/fileobj/fileobj.html) Inspector**)
29. Choose **"Relative to CORDOVALIB"** in the **File Inspector** for the drop-down menu for **Location**
30. **Build** your project, it should compile and link with **no issues**.
31. **Select your project** from the **Scheme** drop-down, and then select **"iPhone 5.1 Simulator"**
32. Select the **Run** button

**NOTE 1:**<br /> 
If your project is **not working** as expected in the Simulator, please **take a note of any errors** in the **console log in Xcode** for clues.

**NOTE 2:**<br /> 
For the **unified #import headers** to work, the build products should **build into the same build directory**. You may need to set the preference **"Xcode Preferences -> Locations -> Derived Data -> Advanced…"** to **"Unique"**

## Upgrading Cordova 1.8.x projects to 1.9.0 ##

1. **Install** Cordova 1.9.0
2. **Create a new project** - you will have to grab assets from this new project
3. **Copy** the **www/cordova-1.9.0.js** file from the new project into your **www** folder, and delete your **www/cordova-1.8.x.js** file
4. **Update** the Cordova script reference in your **www/index.html** file (and any other files that contain the script reference) to point to the new **cordova-1.9.0.js** file

**Note:**

1.9.0 supports the new **"BackupWebStorage"** boolean setting in Cordova.plist. By default, this setting is turned on, set it to "false" to turn it off - especially for iOS 6 - see [Release Notes - Safari and UIKit Section](https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html)


## Upgrading Cordova 1.7.0 projects to 1.8.x ##

1. **Install** Cordova 1.8.0
2. **Create a new project** - you will have to grab assets from this new project
3. **Copy** the **www/cordova-1.8.0.js** file from the new project into your **www** folder, and delete your **www/cordova-1.7.x.js** file
4. **Update** the Cordova script reference in your **www/index.html** file (and any other files that contain the script reference) to point to the new **cordova-1.8.0.js** file

If you intend on using the **Capture API**, you will need the new **iPad retina-display** assets:

1.  **Copy** the **Resources/Capture.bundle** item from the new project into your project folder, over-writing your existing **Resources/Capture.bundle** item
2.  In your project, select the **Capture.bundle** item into Xcode into your Project Navigator, and press the **Delete** key, then select **Remove Reference** from the dialog that pops up.
3.  Drag the new **Capture.bundle** from Step 1. above into Xcode into your Project Navigator, and select the **Create groups for any added folders** radio-button

## Upgrading Cordova 1.6.x projects to 1.7.0 ##

1. **Install** Cordova 1.7.0
2. **Create a new project** - you will have to grab assets from this new project
3. **Copy** the **www/cordova-1.7.0.js** file from the new project into your **www** folder, and delete your **www/cordova-1.6.0.js** file
4. **Update** the Cordova script reference in your **www/index.html** file (and any other files that contain the script reference) to point to the new **cordova-1.7.0.js** file

## Upgrading Cordova 1.5.0 projects to 1.6.x ##

1. **Install** Cordova 1.6.1
2. **Make a backup** of **AppDelegate.m**, **AppDelegate.h**, **MainViewController.m**, **MainViewController.h**, and **Cordova.plist** in your project
3. **Create a new project** - you will have to grab assets from this new project
4. **Copy** these files from the **new** project into your 1.5.0 based project folder on disk, **replacing** any old files (**backup** your files first from step 2 above):

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
5. **Add** all the new **MainViewController** and **AppDelegate** files into your Xcode project
6. **Copy** the **www/cordova-1.6.1.js** file from the new project into your **www** folder, and delete your **www/cordova-1.5.0.js** file
7. **Update** the Cordova script reference in your **www/index.html** file (and any other files that contain the script reference) to point to the new **cordova-1.6.1.js** file
8. **Add** the new **Cordova.plist** file into your project - this is because the core plugin service names needed to be changed to match the ones from Android and Blackberry, for a unified Cordova JavaScript file (cordova-js). 
9. **Integrate** any settings, **Plugins** and **ExternalHosts** entries that you had in your **backed-up Cordova.plist** into the new **Cordova.plist**
10. **Integrate** any project specific code that you have in your **backed-up AppDelegate.h and AppDelegate.m** into the new AppDelegate files. Any **UIWebViewDelegate** or **CDVCommandDelegate** code in **AppDelegate.m** will need to go into MainViewController.m now (see commented out sections in that file)
11. **Integrate** any project specific code that you have in your **backed-up MainViewController.h and MainViewController.m** into the new MainViewController files
12. Click on the **project icon** in the Project Navigator, select your **Project**, then select the **"Build Settings"** tab
13. Enter **"Compiler for C/C++/Objective-C"** in the search field
14. Select the **"Apple LLVM Compiler 3.1"** value


## Upgrading Cordova 1.4.x projects to 1.5.0 ##

1. **Install** Cordova 1.5.0
2. **Create a new project** and run it once - you will have to grab assets from this new project
3. **Copy** the **www/cordova-1.5.0.js** file from the new project into your **www** folder, and delete your **www/phonegap-1.4.x.js** file
4. **Update** the Cordova script reference in your **www/index.html** file (and any other files that contain the script reference) to point to the new Cordova **cordova-1.5.0.js** file
5. Find **"PhoneGap.framework"** in your Project Navigator, select it
6. Press the **Delete** key and delete the **"PhoneGap.framework"** reference in the Project Navigator
7. Press the key combination **Option-Command-A**, which should drop down a sheet to add files to your project (the **"Add Files..." sheet**). Make sure the **"Created groups for any added folders"** radio-button is selected
8. Press the key combination **Shift-Command-G**, which should drop down another sheet for you to go to a folder (the **"Go to the folder:" sheet**)
9. Enter **"/Users/Shared/Cordova/Frameworks/Cordova.framework"** in the **"Go to the folder:" sheet** and then press the **"Go"** button
10. Press the **"Add"** button in the **"Add Files..." sheet**
11. **Select "Cordova.framework"** in the Project Navigator
12. Press the key combination **Option-Command-1** to show the **File Inspector**
13. Choose **"Absolute Path"** in the **File Inspector** for the drop-down menu for **Location**
14. Press the key combination **Option-Command-A**, which should drop down a sheet to add files to your project (the **"Add Files..." sheet**). Make sure the **"Created groups for any added folders"** radio-button is selected
15. Press the key combination **Shift-Command-G**, which should drop down another sheet for you to go to a folder (the **"Go to the folder:" sheet**)
16. Enter **"~/Documents/CordovaLib/Classes/deprecated"** in the **"Go to the folder:" sheet** and then press the **"Go"** button
17. Press the **"Add"** button in the **"Add Files..." sheet**
18. In your **AppDelegate.h, AppDelegate.m, and MainViewController.h** files - replace the whole **#ifdef PHONEGAP_FRAMEWORK** block with:

        #import "CDVDeprecated.h"
19. Click on the **project icon** in the Project Navigator, select your **Target**, then select the **"Build Settings"** tab
20. Search for **"Framework Search Paths"**
21. Replace the existing value with **"/Users/Shared/Cordova/Frameworks"** 
22. Search for **"Preprocessor Macros"**
23. For the first (combined) value, replace the value with **"CORDOVA_FRAMEWORK=YES"**
24. Select the **"Build Phases"** tab
25. Expand **"Run Script"**
26. Replace any occurrences of **PhoneGap** with **Cordova**
27. Find your **"PhoneGap.plist"** file in the Project Navigator, and click on the filename once to enter name edit mode
28. Rename **"PhoneGap.plist"** to **"Cordova.plist"**
29. Right-click on **"Cordova.plist"** and choose **"Open As" --> "Source Code"**
30. Press **Option-Command-F**, choose **"Replace"** from the drop-down on the top left of the Source window
31. Enter **com.phonegap** for the Find string, and **org.apache.cordova** for the Replace string - then press the **"Replace All"** button
32. Enter **PG** for the Find string, and **CDV** for the Replace string - then press the **"Replace All"** button
33. Press **Command-B** to build, you will still have deprecations that you can get rid of in the future (see **CDVDeprecated.h** - replace classes in your code that use PG* to CDV*, for example)

## Upgrading Cordova 1.4.0 projects to 1.4.1 ##

1. **Install** Cordova 1.4.1
2. **Make a backup** of **MainViewController.m**
3. **Create a new project** - you will have to grab assets from this new project
4. **Copy** the **MainViewController.m** file from the **new** project into your 1.4.0 based project folder on disk, **replacing** the old file (**backup** your files first from step 2 above).
5. **Add** the **MainViewController.m** file into your Xcode project
6. **Integrate** any project specific code that you have in your **backed-up MainViewController.m** into the new file
7. Updating the phonegap-X.X.X.js file is optional, nothing has changed in the JavaScript between 1.4.0 and 1.4.1

## Upgrading Cordova 1.3.0 projects to 1.4.0 ##

1. **Install** Cordova 1.4.0
2. **Make a backup** of **AppDelegate.m** and **AppDelegate.h** in your project
3. **Create a new project** - you will have to grab assets from this new project
4. **Copy** these files from the **new** project into your 1.3.0 based project folder on disk, **replacing** any old files (**backup** your files first from step 2 above):

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
5. **Add** all the **MainViewController** files into your Xcode project
6. **Copy** the **www/phonegap-1.4.0.js** file from the new project into your **www** folder, and delete your **www/phonegap-1.3.0.js** file
7. **Update** the Cordova script reference in your **www/index.html** file (and any other files that contain the script reference) to point to the new **phonegap-1.4.0.js** file
8. **Add** a new entry under **Plugins** in your **PhoneGap.plist** file - key is **com.phonegap.battery** and the value is **PGBattery**
9. **Integrate** any project specific code that you have in your **backed-up AppDelegate.h and AppDelegate.m** into the new AppDelegate files

## Upgrading Cordova 1.2.0 projects to 1.3.0 ##

1. **Install** Cordova 1.3.0
2. **Make a backup** of **AppDelegate.m** and **AppDelegate.h** in your project
3. **Create a new project** - you will have to grab assets from this new project
4. **Copy** these files from the **new** project into your 1.2.0 based project folder on disk, **replacing** any old files (**backup** your files first from step 2 above):

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
5. **Add** all the **MainViewController** files into your Xcode project
6. **Copy** the **www/phonegap-1.3.0.js** file from the new project into your **www** folder, and delete your **www/phonegap-1.2.0.js** file
7. **Update** the Cordova script reference in your **www/index.html** file (and any other files that contain the script reference) to point to the new **phonegap-1.3.0.js** file
8. **Add** a new entry under **Plugins** in your **PhoneGap.plist** file - key is **com.phonegap.battery** and the value is **PGBattery**
9. **Integrate** any project specific code that you have in your **backed-up AppDelegate.h and AppDelegate.m** into the new AppDelegate files

## Upgrading Cordova 1.1.0 projects to 1.2.0 ##

1. **Install** Cordova 1.2.0
2. **Make a backup** of **AppDelegate.m** and **AppDelegate.h** in your project
3. **Create a new project** - you will have to grab assets from this new project
4. **Copy** these files from the **new** project into your 1.1.0 based project folder on disk, **replacing** any old files (**backup** your files first from step 2 above):

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
5. **Add** all the **MainViewController** files into your Xcode project
6. **Copy** the **www/phonegap-1.2.0.js** file from the new project into your **www** folder, and delete your **www/phonegap-1.1.0.js** file
7. **Update** the Cordova script reference in your **www/index.html** file (and any other files that contain the script reference) to point to the new **phonegap-1.2.0.js** file
8. **Add** a new entry under **Plugins** in your **PhoneGap.plist** file - key is **com.phonegap.battery** and the value is **PGBattery**
9. **Integrate** any project specific code that you have in your **backed-up AppDelegate.h and AppDelegate.m** into the new AppDelegate files

## Upgrading Cordova 1.0.0 projects to 1.1.0 ##

1. **Install** Cordova 1.1.0
2. **Make a backup** of **AppDelegate.m** and **AppDelegate.h** in your project
3. **Create a new project** - you will have to grab assets from this new project
4. **Copy** these files from the **new** project into your 1.0.0 based project folder on disk, **replacing** any old files (**backup** your files first from step 2 above):

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
5. **Add** all the **MainViewController** files into your Xcode project
6. **Copy** the **www/phonegap-1.1.0.js** file from the new project into your **www** folder, and delete your **www/phonegap-1.0.0.js** file
7. **Update** the Cordova script reference in your **www/index.html** file (and any other files that contain the script reference) to point to the new **phonegap-1.1.0.js** file
8. **Add** a new entry under **Plugins** in your **PhoneGap.plist** file - key is **com.phonegap.battery** and the value is **PGBattery**
9. **Integrate** any project specific code that you have in your **backed-up AppDelegate.h and AppDelegate.m** into the new AppDelegate files

## Upgrading Cordova 0.9.6 projects to 1.0.0 ##

1. **Install** Cordova 1.0.0
2. **Make a backup** of **AppDelegate.m** and **AppDelegate.h** in your project
3. **Create a new project** - you will have to grab assets from this new project
4. **Copy** these files from the **new** project into your 0.9.6 based project folder on disk, **replacing** any old files (**backup** your files first from step 2 above):

        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
5. **Add** all the **MainViewController** files into your Xcode project
6. **Copy** the **www/phonegap-1.0.0.js** file from the new project into your **www** folder, and delete your **www/phonegap-0.9.6.js** file
7. **Update** the Cordova script reference in your **www/index.html** file (and any other files that contain the script reference) to point to the new **phonegap-1.0.0.js** file
8. **Add** a new entry under **Plugins** in your **PhoneGap.plist** file - key is **com.phonegap.battery** and the value is **PGBattery**
9. **Integrate** any project specific code that you have in your **backed-up AppDelegate.h and AppDelegate.m** into the new AppDelegate files
