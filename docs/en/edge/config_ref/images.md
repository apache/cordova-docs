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

# Icons and Splash Screens

This section shows how to configure an app's icon and optional splash
screen for various platforms, both when working in the Cordova CLI
(described in The Command-line Interface) or using platform-specific
SDK tools (detailed in the Platform Guides).

## Configuring Icons in the CLI

When working in the CLI, icon source files are located within various
platform-specific subdirectories within the project's `www/res/icons`
directory. Newly created projects come with a default set of Cordova
icons for you to replace for the platforms you wish to target.

Android specifies icons for low, medium, high, and extra-high resolutions:

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png

The iOS platform specifies 72-pixel-square icons for iPads, and
57-pixel icons for iPhones and iPods, with high-resolution _2x_
variants for retina displays:

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png

Windows Phone specifies a default 48-pixel icon, along with various
devices' background tiling images used when representing applications:

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png

Blackberry requires an 80-pixel icon:

        blackberry/icon-80.png

Tizen requires an 128-pixel icon:

        tizen/icon-128.png

## Configuring Splash Screens in the CLI

Use the Splashscreen API to enable display of an app's introductory
splash screen on many platforms.  When working in the CLI, splash
screen source files are located within the project's `www/res/screens`
subdirectory.

Android specifies both portrait- and landscape-oriented splash screen
images for low, medium, high, and extra-high resolutions:

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png

The iOS platform specifies variants for iPhone/iPod and iPad, with
variants for retina displays and different orientations. The _568h_
file is customized for the iPhone 5's taller screen:

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png

BlackBerry and Windows Phone both specify a single splash screen
image:

        blackberry/screen-225.png
        windows-phone/screen-portrait.jpg

The following sections detail how to set up splash screens when
working with SDKs and related command-line tools described in Platform
Guides.

## Splash Screens for the Android Platform 

Place [9-patch image](https://developer.android.com/tools/help/draw9patch.html)
files in the Android project's `res/drawable` directory. The size for
each should be:

- xlarge (xhdpi): at least 960 &times; 720
- large (hdpi): at least 640 &times; 480
- medium (mdpi): at least 470 &times; 320
- small (ldpi): at least 426 &times; 320

In the `onCreate` method of the class that extends `DroidGap`, add the
following two lines:

        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.loadUrl(Config.getStartUrl(), 10000);

The first line sets the image to display as the splash screen. If you
name your image anything other than `splash.png`, you need to modify
this line.

The second line is the normal `super.loadUrl` line, but its second
parameter specifies a timeout value to display the splash screen. In
this example the splash screen displays for 10 seconds. To dismiss the
splash screen once the app receives the `deviceready` event, call the
`navigator.splashscreen.hide()` method.

## Splash Screens for the iOS Platform 

Copy your splash screen images into the iOS project's
`Resources/splash` directory. Only add the images for the devices you
want to support, such as iPad or iPhone. The size of each image should
be:

- Default-568h@2x~iphone.png (640x1136 pixels)
- Default-Landscape@2x~ipad.png (2048x1496 pixels)
- Default-Landscape~ipad.png (1024x748 pixels)
- Default-Portrait@2x~ipad.png (1536x2008 pixels)
- Default-Portrait~ipad.png (768x1004 pixels)
- Default@2x~iphone.png (640x960 pixels)
- Default~iphone.png (320x480 pixels)

## Splash Screens for the BlackBerry 10 Platform 

Copy your splash screen images into the project's
`res/screen/blackberry10` directory. The file names should be:

- splash-1280x768.png (1280x768 pixels)
- splash-720x720.png (720x720 pixels)
- splash-768x1280.png (768x1280 pixels)
