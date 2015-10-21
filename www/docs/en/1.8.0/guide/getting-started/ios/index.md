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

Video Tutorial
--------------

- [Cordova Installer - Xcode 4 Template](http://www.youtube.com/v/R9zktJUN7AI?autoplay=1)

Requirements
------------

- Intel-based computer with Mac OS X Lion (10.7)
- Necessary for installing on device:
    - Apple iOS device (iPhone, iPad, iPod Touch)
    - iOS developer certificate

Install iOS SDK and Apache Cordova
----------------------------------

- Install Xcode from the [Mac App Store](http://itunes.apple.com/us/app/xcode/id497799835?mt=12)
- Download the latest release of [Apache Cordova](http://phonegap.com/download)
    - extract its contents
    - Apache Cordova iOS is found under `lib/ios`

Setup New Project
-----------------

- Launch Xcode
- Select the _File Menu_
- Select _New_ -> _New Project..._
- Select _Cordova-based Application_ from the list of templates

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/XCode4-templates.png)

- Select the _Next_ button
- Fill in the _Product Name_ and _Company Identifier_ for your app

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/xcode4-name_your_app.png)

- **Note:** Do **not** check _Use Automatic Reference Counting_
- Select the _Next_ button
- Choose a folder to save your new app
- Select the _Create_ button

We've now created an Apache Cordova project. Next, we need to associate the
project with a web directory. We need to do this step because of a limitation
in Xcode project templates.

- Select the _Run_ button in the top left corner. 
    - your build should succeed and launch in the iOS Simulator
    - you should see an error in the iOS Simulator informing you that _www/index.html was not found_
    - we can fix this by adding a folder to the project that references `www`

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/index-not-found.png)

- Right-click on the project icon in the _Project Navigator_ (left sidebar) and select _Show in Finder_
- Using Finder, you should see a `www` directory inside your project

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/www-folder.png)

- Drag the `www` directory into Xcode
    - A common mistake is to drag the `www` directory into your app's directory inside of Finder
    - Please follow the red highlighted section of the image below:

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/project.jpg)

- After dragging `www` into Xcode, you will be prompted with a few options.
    - Select _Create folder references for any added folders_
    - Select the _Finish_ button

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/create-folder-reference.png)

[Hello World](../webos/index.html)
-----------

- Select the folder named `www` in the Xcode _Project Navigator_
- Select the file `index.html`
- Add the following after `<body>`:

        <h1>Hello World</h1>

You can also add any associated JavaScript and CSS files there as well.
    
Deploy to Simulator
-------------------

- Change the _Active SDK_ in the Scheme drop-down menu on the toolbar to _iOS version Simulator_
- Select the _Run_ button in your project window's toolbar

Deploy to [Device](../../../cordova/device/device.html)
----------------

- Open `YourAppName-Info.plist`, under the _Supporting Files_ group
- Change _BundleIdentifier_ to the identifier provided by Apple or your own bundle identifier
    - If you have a developer license, you can run the [Assistant](http://developer.apple.com/iphone/manage/overview/index.action) to register your app
- Change the _Active SDK_ in the Scheme drop-down menu on the toolbar to _YourDeviceName_
    - You will need to have your device connected via USB
- Select the _Run_ button in your project window's toolbar

    ![]({{ site.baseurl }}/static/img/guide/platforms/ios/HelloWorldiPhone4.png)

Build Your App
--------------

You now have an Xcode project setup and you can build and run on the simulator and device.
It is important to understand that you do not need to use Xcode to write your web application.
You can use your favourite text editor and simply rebuild your project using Xcode.
Xcode will automatically detect the files that are changed in `www`.
