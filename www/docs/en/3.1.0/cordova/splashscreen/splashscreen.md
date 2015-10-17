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

title: Splashscreen
---

# Splashscreen

> Displays and hides the application's splash screen.

## Methods

- [splashscreen.show](splashscreen.show.html)
- [splashscreen.hide](splashscreen.hide.html)

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.splashscreen
        $ cordova plugin ls
        [ 'org.apache.cordova.splashscreen' ]
        $ cordova plugin rm org.apache.cordova.splashscreen

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Android (in `app/res/xml/config.xml`)

        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.splashscreen.SplashScreen" />
        </feature>

* iOS (in `config.xml`)

        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>

Some platforms may support this feature without requiring any special
configuration.  See _Platform Support_ in the [Overview](../../guide/overview/index.html) section.

## Setup

### Android

1. Copy the splash screen image into the Android project's `res/drawable` directory. The size for each image should be:

   - xlarge (xhdpi): at least 960 &times; 720
   - large (hdpi): at least 640 &times; 480
   - medium (mdpi): at least 470 &times; 320
   - small (ldpi): at least 426 &times; 320

   You should use a [9-patch image](https://developer.android.com/tools/help/draw9patch.html) for your splash screen.

2. In config.xml, add the following preferences:

        <preference name="splashscreen" value="splash" />
        <preference name="splashScreenDelay" value="10000" />
      
      The first line sets the image to display as the splash screen. If you name your image anything other than `splash.png`, you need to modify this line.
    The second line sets the delay of how long the splashscreen appears in milliseconds. To dismiss the splash screen once the app receives the `deviceready` event, call the `navigator.splashscreen.hide()` method.

### iOS

Copy your splash screen images into the iOS project's
`Resources/splash` directory. Only add the images for the devices you
want to support, such as iPad or iPhone. The size of each image
should be:

- Default-568h@2x~iphone.png (640x1136 pixels)
- Default-Landscape@2x~ipad.png (2048x1496 pixels)
- Default-Landscape~ipad.png (1024x748 pixels)
- Default-Portrait@2x~ipad.png (1536x2008 pixels)
- Default-Portrait~ipad.png (768x1004 pixels)
- Default@2x~iphone.png (640x960 pixels)
- Default~iphone.png (320x480 pixels)

### BlackBerry 10

Copy your splash screen images into the project's
'res/screen/blackberry10' directory. The file names should be:

- splash-1280x768.png (1280x768 pixels)
- splash-720x720.png (720x720 pixels)
- splash-768x1280.png (768x1280 pixels)
