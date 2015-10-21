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

This guide describes how to set up your development environment for Cordova and run a sample application.

Video Tutorials:
----------------

- [Cordova Installer - Xcode 4 Template](http://www.youtube.com/v/R9zktJUN7AI?autoplay=1)


1. Requirements
---------------
- Intel-based computer with Mac OS X Lion (10.7)
- Necessary for Installing on [Device](../../../cordova/device/device.html):
    - An Apple iOS device (iPhone, iPad, iPod Touch)
    - iOS developer certification


2. Install SDK + Cordova
------------------------

- Install Xcode from the [Mac App Store](http://itunes.apple.com/us/app/xcode/id497799835?mt=12) </p>
- Download the latest copy of [Cordova](http://phonegap.com/download) and extract its contents. We will be working with the **lib/ios** directory.


3. Setup New Project
--------------------

- Launch Xcode
- Select the **File** menu
- Select **New**, then **New Project...**
- Select **Cordova-based Application** from the list of templates

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/XCode4-templates.png)
- Select the **Next** button
- Fill in the "Product Name" &amp; "Company Identifier" for your app

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/xcode4-name_your_app.png)
    
- **IMPORTANT! DO NOT CHECK** the "Use Automatic Reference Counting" checkbox 
- Select the **Next** button
- **Choose a folder** to save your new app in
- Select the **Create** button, this will create your project
- Select the **Run** button in the top left corner. Your build should succeed and launch in the iOS Simulator

    a. You should see an error in the iOS Simulator informing you that **www/index.html** was not found
    
    b. To fix this, we need to add a folder reference to the **www** directory into the project. 
    
    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/index-not-found.png)

- **Right-click** on the project icon in the Project Navigator (left sidebar) and select **Show in Finder**
- **In the Finder**, you should see the **www** directory beside your project

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/www-folder.png)

- **IMPORTANT**! **Drag** the **www** folder into Xcode 4. **Don't** drag the www folder into your app's folder. **It needs to be dragged into Xcode 4.** For example, you would drag and drop it on the **highlighted red section** of the HelloWorld project shown below.
    
    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/project.jpg)
- A window sheet should slide down with a few options, after the **"www"** folder has been dragged and dropped into the project. 
- Select the radio-button **Create folder references for any added folders**.

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/create-folder-reference.png)

- Select the **Finish** button


4. [Hello World](../webos/index.html)
--------------

- Select the folder named **www** in your Project Navigator in Xcode
- Select the **index.html** file
- Type `<h1>[Hello World](../webos/index.html)</h1>` after the `<body>` tag

You can also add any associated JavaScript and CSS files there as well.
    
    
5A. Deploy to Simulator
-----------------------

- Change the Active SDK in the Scheme drop-down menu on the toolbar to **iOS version# Simulator**.
- Select the **Run** button in your project window's toolbar


5B. Deploy to [Device](../../../cordova/device/device.html)
--------------------

- Open [AppName]-Info.plist (where [AppName] is your application's name), under the "Supporting Files" group
- Change **BundleIdentifier** to the identifier provided by Apple, or your own bundle identifier. If you have a developer license, you can access and run the Assistant [here](http://developer.apple.com/iphone/manage/overview/index.action) and register your app.
- Change the Active SDK in the Scheme drop-down menu on the toolbar to **[DEVICENAME]** where [DEVICENAME] is the name of the device you want to deploy to.
- Select the **Run** button in your project window's toolbar

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/HelloWorldiPhone4.png)    


Done!
-----

Add more HTML, CSS and JavaScript to your **www** folder outside of Xcode, your file additions will be picked up automatically inside Xcode.
