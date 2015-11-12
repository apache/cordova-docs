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

title: Icons and Splash Screens
---

# Icons and Splash Screens

This section shows how to configure an app's icon and optional splash
screen for various platforms, both when working in the Cordova CLI
(described in The Command-Line Interface) or using platform-specific
SDK tools (detailed in the Platform Guides).

## Configuring Icons in the CLI

When working in the CLI you can define app icon(s) via `<icon>` element (`config.xml`).
If you do not specify an icon then the Apache Cordova logo is used.

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />

src: (required) specifies the location of the image file, relative to your project directory

platform: (optional) target platform

width: (optional) icon width in pixels

height: (optional) icon height in pixels

density: (optional) android specific, specifies icon density

The following configuration can be used to define single default icon
which will be used for all platforms.

        <icon src="res/icon.png" />

For each platform you can also define a pixel-perfect icons set to fit
different screen resolutions.

Amazon Fire OS

         <platform name="amazon-fireos">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>

Android

         <platform name="android">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>

BlackBerry10

         <platform name="blackberry10">
                  <icon src="res/bb10/icon-86.png" />
                  <icon src="res/bb10/icon-150.png" />
         </platform>

See BlackBerry's documentation for targeting multiple sizes and locales.
[http://developer.blackberry.com/html5/documentation/icon_element.html]

Firefox OS

         <platform name="firefoxos">
                  <icon src="res/ff/logo.png" width="60" height="60" />
         </platform>

iOS

         <platform name="ios">
                  <!-- iOS 8.0+ -->
                  <!-- iPhone 6 Plus  -->
                  <icon src="res/ios/icon-60@3x.png" width="180" height="180" />
                  <!-- iOS 7.0+ -->
                  <!-- iPhone / iPod Touch  -->
                  <icon src="res/ios/icon-60.png" width="60" height="60" />
                  <icon src="res/ios/icon-60@2x.png" width="120" height="120" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-76.png" width="76" height="76" />
                  <icon src="res/ios/icon-76@2x.png" width="152" height="152" />
                  <!-- iOS 6.1 -->
                  <!-- Spotlight Icon -->
                  <icon src="res/ios/icon-40.png" width="40" height="40" />
                  <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
                  <!-- iPhone / iPod Touch -->
                  <icon src="res/ios/icon.png" width="57" height="57" />
                  <icon src="res/ios/icon@2x.png" width="114" height="114" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-72.png" width="72" height="72" />
                  <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
                  <!-- iPhone Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-small.png" width="29" height="29" />
                  <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
                  <!-- iPad Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-50.png" width="50" height="50" />
                  <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
         </platform>

Windows Phone8

         <platform name="wp8">
                  <icon src="res/wp/ApplicationIcon.png" width="99" height="99" />
                  <!-- tile image -->
                  <icon src="res/wp/Background.png" width="159" height="159" />
         </platform>

Windows8

         <platform name="windows8">
                  <icon src="res/windows8/logo.png" width="150" height="150" />
                  <icon src="res/windows8/smalllogo.png" width="30" height="30" />
                  <icon src="res/windows8/storelogo.png" width="50" height="50" />
         </platform>

## Configuring Splash Screens in the CLI

In the top-level `config.xml` file (not the one in `platforms`), add configuration elements like those specified here.

# Example configuration

Please notice that the value of the "src" attribute is relative to the project directory and not to the www directory.
You can name the source image whatever you like. The internal name in the app are determined by Cordova.

    <platform name="android">
        <!-- you can use any density that exists in the Android project -->
        <splash src="res/screen/android/splash-land-hdpi.png" density="land-hdpi"/>
        <splash src="res/screen/android/splash-land-ldpi.png" density="land-ldpi"/>
        <splash src="res/screen/android/splash-land-mdpi.png" density="land-mdpi"/>
        <splash src="res/screen/android/splash-land-xhdpi.png" density="land-xhdpi"/>

        <splash src="res/screen/android/splash-port-hdpi.png" density="port-hdpi"/>
        <splash src="res/screen/android/splash-port-ldpi.png" density="port-ldpi"/>
        <splash src="res/screen/android/splash-port-mdpi.png" density="port-mdpi"/>
        <splash src="res/screen/android/splash-port-xhdpi.png" density="port-xhdpi"/>
    </platform>

    <platform name="ios">
        <!-- images are determined by width and height. The following are supported -->
        <splash src="res/screen/ios/Default~iphone.png" width="320" height="480"/>
        <splash src="res/screen/ios/Default@2x~iphone.png" width="640" height="960"/>
        <splash src="res/screen/ios/Default-Portrait~ipad.png" width="768" height="1024"/>
        <splash src="res/screen/ios/Default-Portrait@2x~ipad.png" width="1536" height="2048"/>
        <splash src="res/screen/ios/Default-Landscape~ipad.png" width="1024" height="768"/>
        <splash src="res/screen/ios/Default-Landscape@2x~ipad.png" width="2048" height="1536"/>
        <splash src="res/screen/ios/Default-568h@2x~iphone.png" width="640" height="1136"/>
        <splash src="res/screen/ios/Default-667h.png" width="750" height="1334"/>
        <splash src="res/screen/ios/Default-736h.png" width="1242" height="2208"/>
        <splash src="res/screen/ios/Default-Landscape-736h.png" width="2208" height="1242"/>
    </platform>

    <platform name="wp8">
        <!-- images are determined by width and height. The following are supported -->
        <splash src="res/screen/wp8/SplashScreenImage.jpg" width="768" height="1280"/>
    </platform>

    <platform name="windows8">
        <!-- images are determined by width and height. The following are supported -->
        <splash src="res/screen/windows8/splashscreen.png" width="620" height="300"/>
    </platform>

    <platform name="blackberry10">
        <!-- Add a rim:splash element for each resolution and locale you wish -->
        <!-- http://developer.blackberry.com/html5/documentation/rim_splash_element.html -->
        <rim:splash src="res/screen/windows8/splashscreen.png"/>
    </platform>


    <preference name="SplashScreenDelay" value="10000" />

# Supported platforms

As of now (Cordova 3.5.0 July 2014) the following platforms support splash screens.

    android
    ios
    wp8
    windows8
    blackberry10

# Splashscreen Plugin

  Apache Cordova also offers special splash screen plugin which could be used to programmatically display and hide a splash screen during application launch
  https://github.com/apache/cordova-plugin-splashscreen


