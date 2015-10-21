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

title: Getting Started with iOS
---

Getting Started with iOS
========================

This guide describes how to set up your development environment for Apache Cordova and run a sample Apache Cordova application.

Requirements
------------
- Xcode 4.3+
- Xcode Command Line Tools 
- Intel-based computer with Mac OS X Lion or greater (10.7+)
- Necessary for installing on device:
    - Apple iOS device (iPhone, iPad, iPod Touch)
    - iOS developer certificate

Install the iOS SDK and Apache Cordova
----------------------------------

- Install Xcode from the [Mac App Store](http://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- Install the Xcode Command Line Tools (Xcode Preferences -> Downloads -> Components -> Command Line Tools -> Install).
- Download the latest release of [Apache Cordova](http://phonegap.com/download)
    - extract its contents
    - Apache Cordova iOS is found under `lib/ios`

Setup New Project
-----------------
- Run the installer **'Cordova-2.0.0.pkg'** to completion
- Copy the **bin** folder (either from the source, or from the .dmg) to a location on your hard drive

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/bin_folder.png)

- Launch **Terminal.app**
- Drag the copied **bin** folder to the **Terminal.app** icon in your Dock, it should launch a new Terminal window
- Type in `./create <project_folder_path> <package_name> <project_name>` then press **"Enter"**

        <project_folder_path> is the path to your new Cordova iOS project (it must be empty if it exists)
        <package_name> is the package name, following reverse-domain style convention
        <project_name> is the project name
        
    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/bin_create_project.png)


- **Locate** your new project folder that you just created
- **Launch** the .xcodeproj file in the folder

    
Deploy to Simulator
-------------------

- Change the **Target** in the **Scheme** drop-down menu on the toolbar to **"HelloWorld"** (your project name)
- Change the **Active SDK** in the **Scheme** drop-down menu on the toolbar to **iOS [version] Simulator**

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/active_scheme_simulator.png)

- Select the **Run** button in your project window's toolbar

Deploy to [Device](../../../cordova/device/device.html)
----------------

- Open `HelloWorld-Info.plist`, under the **Resources** group
- Change **BundleIdentifier** to the identifier provided by Apple or your own bundle identifier
    - If you have a developer license, you can run the [Assistant](http://developer.apple.com/iphone/manage/overview/index.action) to register your app
- Change the **Target** in the **Scheme** drop-down menu on the toolbar to **"HelloWorld"** (your project name)
- Change the **Active SDK** in the Scheme drop-down menu on the toolbar to **[Your [Device](../../../cordova/device/device.html) Name]**
    - You will need to have your device connected via USB

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/active_scheme_device.png)
    
- Select the **Run** button in your project window's toolbar

Results
----------------
- You should see the screen below, with a pulsating green **"device is ready"** message

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/HelloWorldStandard.png)
    
Problems in Xcode
----------------
If you have compilation problems related to missing headers, the build products should **build into the same build directory**. You may need to set the preference **"Xcode Preferences -> Locations -> Derived Data -> Advanced…"** to **"Unique"**. This is the default setting for Xcode on a fresh new install, if you upgraded from older versions of Xcode, you might have a legacy preference in there that you need to update.

Also, when installing **Cordova-2.0.0.pkg**, you must ensure Xcode is not running, if not certain Xcode variables won't be set. 


Build Your App
--------------

You now have an Xcode project setup and you can build and run on the Simulator and device.
It is important to understand that you do not need to use Xcode to write your web application.
You can use your favourite text editor and simply rebuild your project using Xcode, or the [command-line tools](guide_command-line_index.md.html#Command-Line%20Usage) in your project folder (under the **cordova** sub-folder)
Xcode will automatically detect the files that are changed in `www`.

Problems in the Command Line Tools
----------------
If you see this error: **"Error: No developer directory found at /Developer. Run /usr/bin/xcode-select to update the developer directory path."** Run this to set your Developer folder:

        sudo /usr/bin/xcode-select -switch /Applications/Xcode.app/Contents/Developer
