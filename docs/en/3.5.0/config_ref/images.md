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
(described in The Command-Line Interface) or using platform-specific
SDK tools (detailed in the Platform Guides).

## Configuring Icons in the CLI

When working in the CLI you can define app icon(s) via `<icon>` element (`config.xml`).
If you do not specify an icon then the Apache Cordova logo is used.

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />

src: (required) specifies the location of the image file, relative to your www directory

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

Blackberry10

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

Tizen

         <platform name="tizen">
                  <icon src="res/tizen/icon-128.png" width="128" height="128" />
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
file applies to the iPhone 5's taller screen:

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png

Windows Phone specifies a single splash screen image:

        windows-phone/screen-portrait.jpg

The following sections detail how to set up splash screens when
working with SDKs and related command-line tools described in Platform
Guides.

Don't forget to install the SplashScreen plugin before trying to use the
`navigator.splashscreen.hide()` or `navigator.splashscreen.show()` methods.

## Splash Screens for the Android Platform

Place [9-patch image](https://developer.android.com/tools/help/draw9patch.html)
files in the Android project's `platforms/android/res/drawable*` directories.

The size for each should be:

- xlarge (xhdpi): at least 960 &times; 720
- large (hdpi): at least 640 &times; 480
- medium (mdpi): at least 470 &times; 320
- small (ldpi): at least 426 &times; 320

When creating a new Android project, the default splash screen images
provided in the Cordova sample app should already be present in the
`platforms/android/res/drawable*` directories. Feel free to replace these
with your own images.
When providing your own splash screen images, you do not need to 
provide the same permutation of 8 as the Cordova default ones
here.  More or less optimization can be used. 
The `drawable` directory names must follow the Android conventions for
supporting
[screen sizes](http://developer.android.com/guide/practices/screens_support.html) and
[alternate resources](http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources).

In the top-level `config.xml` file (not the one in `platforms`), add the
following preferences:

    <preference name="SplashScreen" value="screen" />
    <preference name="SplashScreenDelay" value="10000" />

The first line sets the image to display as the splash screen. This is the
file name of the png in the `drawable*` directories, minus the `.png`
extension. The default value for SplashScreen is `screen` (for the file
`platforms/android/res/drawable*/screen.png`), so if you
name the image anything other than `screen.png` in the `drawable*` directories,
you need to add/modify this line.

The second line sets the default delay of how long the splashscreen appears in
milliseconds. This should be the worst-case expected start time.
The default value for SplashScreenDelay is 3000 ms.

Finally, as a best practice, the splash screen should be present only as long
as necessary. When your app has started and the webview has loaded, your app
should hide the splash screen so that your main view is visible as soon as it
is ready. Because the app start time will vary quite a bit due to a number of
factors such as CPU speed and network, it is recommended that your app
explicitly invoke `navigator.splashscreen.hide()` in the JavaScript
method that responds to the `deviceready` event. Otherwise the splash screen
will be visible for the SplashScreenDelay value that you configured above,
which is likely longer than necessary.
This event-driven approach is highly recommended versus having the splash
screen visible for always a fixed duration.

## Splash Screens for the iOS Platform

Copy splash screen images into the iOS project's `Resources/splash`
directory. Only add those images for the devices you want to support,
such as iPad or iPhone. The size of each image should be:

- Default-568h@2x~iphone.png (640x1136 pixels)
- Default-Landscape@2x~ipad.png (2048x1496 pixels)
- Default-Landscape~ipad.png (1024x748 pixels)
- Default-Portrait@2x~ipad.png (1536x2008 pixels)
- Default-Portrait~ipad.png (768x1004 pixels)
- Default@2x~iphone.png (640x960 pixels)
- Default~iphone.png (320x480 pixels)

## Splash Screens for the BlackBerry 10 Platform

Add a rim:splash element to config.xml for each resolution and locale you wish
to support:

<http://developer.blackberry.com/html5/documentation/rim_splash_element.html>
