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

title: Customize app icons
description: Learn how to customize icons for your Cordova app
---

# Customize Icons

This section shows how to configure an app's icon for various platforms. Support for splash screen has moved to a Cordova plugin of its own. The configuration options can be found in the [Splashscreen plugin docs][splashscreen_plugin].

## Configuring Icons in the CLI

When working in the CLI you can define app icon(s) via `<icon>` element (`config.xml`).
If you do not specify an icon then the Apache Cordova logo is used.

```xml
    <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
```

Attributes    | Description
--------------|--------------------------------------------------------------------------------
src           | *Required* <br/> Location of the image file, relative to your project directory
platform      | *Optional* <br/> Target platform
width         | *Optional* <br/> Icon width in pixels
height        | *Optional* <br/> Icon height in pixels
density       | *Optional* <br/> Specified icon density (Android Specific)


The following configuration can be used to define single default icon
which will be used for all platforms.
```xml
    <icon src="res/icon.png" />
```
For each platform you can also define a pixel-perfect icons set to fit
different screen resolutions.

##Android
```xml
    <platform name="android">
        <!-- 
            ldpi    : 36x36 px
            mdpi    : 48x48 px
            hdpi    : 72x72 px
            xhdpi   : 96x96 px
            xxhdpi  : 144x144 px
            xxxhdpi : 192x192 px
        -->
        <icon src="res/android/ldpi.png" density="ldpi" />
        <icon src="res/android/mdpi.png" density="mdpi" />
        <icon src="res/android/hdpi.png" density="hdpi" />
        <icon src="res/android/xhdpi.png" density="xhdpi" />
        <icon src="res/android/xxhdpi.png" density="xxhdpi" />
        <icon src="res/android/xxxhdpi.png" density="xxxhdpi" />
    </platform>
```
###See Also
- [Android icon guide](https://www.google.com/design/spec/style/icons.html)
- [Android - Supporting multiple screens](http://developer.android.com/guide/practices/screens_support.html)

##BlackBerry10
```xml
    <platform name="blackberry10">
        <icon src="res/bb10/icon-86.png" />
        <icon src="res/bb10/icon-150.png" />
    </platform>
```
###See Also
- [BlackBerry's documentation][blackberry_icon] for targeting multiple sizes and locales.

##iOS
```xml
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
```
###See Also
- [App icon and image size guidelines](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/IconMatrix.html)

##Windows
```xml
    <platform name="windows">
        <icon src="res/windows/logo.png" width="150" height="150" />
        <icon src="res/windows/smalllogo.png" width="30" height="30" />
        <icon src="res/windows/storelogo.png" width="50" height="50" />
        <icon src="res/Windows/Square44x44Logo.scale-100.png" width="44" height="44" />
        <icon src="res/Windows/Square44x44Logo.scale-240.png" width="106" height="106" />
        <icon src="res/Windows/Square70x70Logo.scale-100.png" width="70" height="70" />
        <icon src="res/Windows/Square71x71Logo.scale-100.png" width="71" height="71" />
        <icon src="res/Windows/Square71x71Logo.scale-240.png" width="170" height="170" />
        <icon src="res/Windows/Square150x150Logo.scale-240.png" width="360" height="360" />
        <icon src="res/Windows/Square310x310Logo.scale-100.png" width="310" height="310" />
        <icon src="res/Windows/Wide310x150Logo.scale-100.png" width="310" height="150" />
        <icon src="res/Windows/Wide310x150Logo.scale-240.png" width="744" height="360" />
    </platform>
```
###See Also:
- [Windows platform guidelines for icons](https://msdn.microsoft.com/en-us/library/windows/apps/mt412102.aspx).

##Windows Phone 8 (WP8 Platform)
```xml
    <platform name="wp8">
        <icon src="res/wp/ApplicationIcon.png" width="99" height="99" />
        <!-- tile image -->
        <icon src="res/wp/Background.png" width="159" height="159" />
    </platform>
```

[blackberry_icon]: http://developer.blackberry.com/html5/documentation/icon_element.html
[splashscreen_plugin]: ../cordova-plugin-splashscreen/