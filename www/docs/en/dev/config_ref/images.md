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
toc_title: Customize icons
description: Learn how to customize icons for your Cordova application.
---

# Customize Icons

This section shows how to configure an application's icon for various platforms. Documentation about splash screen images can be found in the Cordova-Plugin-Splashscreen documentation [Splashscreen plugin docs][splashscreen_plugin].

## Configuring Icons in the CLI

When working in the CLI you can define application icon(s) via the `<icon>` element (`config.xml`).
If you do not specify an icon, the Apache Cordova logo is used.

```xml
    <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
```

Attributes    | Description
--------------|--------------------------------------------------------------------------------
src           | *Required* <br/> Location of the image file, relative to your project directory.
platform      | *Optional* <br/> Target platform
width         | *Optional* <br/> Icon width in pixels
height        | *Optional* <br/> Icon height in pixels
target        | *Optional* <br/> ==Electron== <br/> Set target to supply unique icons for `application` and `installer`

The following configuration can be used to define a single default icon
which will be used for all platforms.
```xml
    <icon src="res/icon.png" />
```
For each platform, you can also define a pixel-perfect icon set to fit
different screen resolutions.

## Android

Instead of using a single image for an icon, you can use two images (background and foreground) to create an **Adaptive Icon**. To use Adaptive Icons in Cordova, at minimum **Cordova CLI** 9.0.0 and **Cordova-Android** 8.0.0 is required.

Android 13 has introduced themed icons which are monochrome images appended to the existing **Adaptive Icons**. To use Themed Icon in Cordova, at minimum **Cordova CLI** 12.0.0 and **Cordova-Android** 12.0.0 is required.

Attributes    | Description
--------------|--------------------------------------------------------------------------------
background    | *Required for Adaptive* <br/> Location of the image (png or vector) relative to your project directory, or color reference
foreground    | *Required for Adaptive* <br/> Location of the image (png or vector) relative to your project directory, or color reference
monochrome    | *Optional for Adaptive but required for themed icons* <br/> Location of the image (png or vector) relative to your project directory
density       | *Required* <br/> Specified icon density

### Adaptive Icons

To use the adaptive icons the `background`, `foreground` and optionally `monochrome` attributes must be defined in place of the `src` attribute. The `src` attribute is not used for adaptive icons.

#### Adaptive Icon with Images:
```xml
<platform name="android">
  <icon monochrome="res/icon/android/ldpi-monochrome.png" background="res/icon/android/ldpi-background.png" density="ldpi" foreground="res/icon/android/ldpi-foreground.png" />
  <icon monochrome="res/icon/android/mdpi-monochrome.png" background="res/icon/android/mdpi-background.png" density="mdpi" foreground="res/icon/android/mdpi-foreground.png" />
  <icon monochrome="res/icon/android/hdpi-monochrome.png" background="res/icon/android/hdpi-background.png" density="hdpi" foreground="res/icon/android/hdpi-foreground.png" />
  <icon monochrome="res/icon/android/xhdpi-monochrome.png" background="res/icon/android/xhdpi-background.png" density="xhdpi" foreground="res/icon/android/xhdpi-foreground.png" />
  <icon monochrome="res/icon/android/xxhdpi-monochrome.png" background="res/icon/android/xxhdpi-background.png" density="xxhdpi" foreground="res/icon/android/xxhdpi-foreground.png" />
  <icon monochrome="res/icon/android/xxxhdpi-monochrome.png" background="res/icon/android/xxxhdpi-background.png" density="xxxhdpi" foreground="res/icon/android/xxxhdpi-foreground.png" />
</platform>
```

**Note:** In this example, the foreground image will also be used as the fallback icon for Android devices that do not support the adaptive icons. The fallback icon can be overridden by setting the src attribute.

#### Adaptive Icon with Vectors:
```xml
<platform name="android">
  <icon monochrome="res/icon/android/ldpi-monochrome.png" background="res/icon/android/ldpi-background.xml" density="ldpi" foreground="res/icon/android/ldpi-foreground.xml" src="res/android/ldpi.png" />
  <icon monochrome="res/icon/android/mdpi-monochrome.png" background="res/icon/android/mdpi-background.xml" density="mdpi" foreground="res/icon/android/mdpi-foreground.xml" src="res/android/mdpi.png" />
  <icon monochrome="res/icon/android/hdpi-monochrome.png" background="res/icon/android/hdpi-background.xml" density="hdpi" foreground="res/icon/android/hdpi-foreground.xml" src="res/android/hdpi.png" />
  <icon monochrome="res/icon/android/xhdpi-monochrome.png" background="res/icon/android/xhdpi-background.xml" density="xhdpi" foreground="res/icon/android/xhdpi-foreground.xml" src="res/android/xhdpi.png" />
  <icon monochrome="res/icon/android/xxhdpi-monochrome.png" background="res/icon/android/xxhdpi-background.xml" density="xxhdpi" foreground="res/icon/android/xxhdpi-foreground.xml" src="res/android/xxhdpi.png" />
  <icon monochrome="res/icon/android/xxxhdpi-monochrome.png" background="res/icon/android/xxxhdpi-background.xml" density="xxxhdpi" foreground="res/icon/android/xxxhdpi-foreground.xml" src="res/android/xxxhdpi.png" />
</platform>
```

**Note:** In this example, the src attribute must be defined when then foreground attribute is defined with a vector or color.

#### Adaptive Icon with Colors:
Create a `res/values/colors.xml` resource file in your project directory to store the app's color definitions.
```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="background">#FF0000</color>
</resources>
```

In the `config.xml`, we will add `resource-file` to copy the `colors.xml` into the approprate location so that the colors are available during build time.

```xml
<platform name="android">
  <resource-file src="res/values/colors.xml" target="/app/src/main/res/values/colors.xml" />

  <icon monochrome="res/icon/android/ldpi-monochrome.png" background="@color/background" density="ldpi" foreground="res/icon/android/ldpi-foreground.png" />
  <icon monochrome="res/icon/android/mdpi-monochrome.png" background="@color/background" density="mdpi" foreground="res/icon/android/mdpi-foreground.png" />
  <icon monochrome="res/icon/android/hdpi-monochrome.png" background="@color/background" density="hdpi" foreground="res/icon/android/hdpi-foreground.png" />
  <icon monochrome="res/icon/android/xhdpi-monochrome.png" background="@color/background" density="xhdpi" foreground="res/icon/android/xhdpi-foreground.png" />
  <icon monochrome="res/icon/android/xxhdpi-monochrome.png" background="@color/background" density="xxhdpi" foreground="res/icon/android/xxhdpi-foreground.png" />
  <icon monochrome="res/icon/android/xxxhdpi-monochrome.png" background="@color/background" density="xxxhdpi" foreground="res/icon/android/xxxhdpi-foreground.png" />
</platform>
```

### Standard Icons

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

### See Also
- [Android icon guide](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive)
- [Android Adaptive icons - User theming](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive#user-theming)
- [Android - Supporting multiple screens](https://developer.android.com/guide/practices/screens_support.html)

## Browser
Icons are not applicable to the Browser platform.

## iOS
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
        <!-- Spotlight Icon -->
        <icon src="res/ios/icon-40.png" width="40" height="40" />
        <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
        <!-- iOS 6.1 -->
        <!-- iPhone / iPod Touch -->
        <icon src="res/ios/icon.png" width="57" height="57" />
        <icon src="res/ios/icon@2x.png" width="114" height="114" />
        <!-- iPad -->
        <icon src="res/ios/icon-72.png" width="72" height="72" />
        <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
        <!-- iPad Pro -->
        <icon src="res/ios/icon-167.png" width="167" height="167" />
        <!-- iPhone Spotlight and Settings Icon -->
        <icon src="res/ios/icon-small.png" width="29" height="29" />
        <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
        <icon src="res/ios/icon-small@3x.png" width="87" height="87" />
        <!-- iPad Spotlight and Settings Icon -->
        <icon src="res/ios/icon-50.png" width="50" height="50" />
        <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
        <!-- iTunes Marketing Image -->
        <icon src="res/ios/icon-1024.png" width="1024" height="1024" />
    </platform>
```
### See Also
- [App Icons on iPad and iPhone](https://developer.apple.com/library/content/qa/qa1686/_index.html)

[splashscreen_plugin]: ../reference/cordova-plugin-splashscreen/

## Electron

### Customizing the Application's Icon

Customized icon(s) can be declared with the `<icon>` element(s) in the `config.xml` file. There are two types of icons that can be defined, the application icon and the package installer icon. These icons should be defined in the Electron's platform node `<platform name="electron">`.

One icon can be used for the application and installer, but this icon should be at least **512x512** pixels to work across all operating systems.

_Notice: If a customized icon is not provided, the Apache Cordova default icons are used._

_Notice: macOS does not display custom icons when using `cordova run`. It defaults to the Electron's icon._

```xml
<platform name="electron">
    <icon src="res/electron/icon.png" />
</platform>
```

You can supply unique icons for the application and installer by setting the `target` attribute. As mentioned above, the installer image should be **512x512** pixels to work across all platforms.

```xml
<platform name="electron">
    <icon src="res/electron/app.png" target="app" />
    <icon src="res/electron/installer.png" target="installer" />
</platform>
```

For devices that support high-DPI resolutions, such as Apple's Retina display, you can create a set of images with the same base filename but suffix with its multiplier.

For example, if the base image's filename `icon.png` and is the standard resolution, then `icon@2x.png` will be treated as a high-resolution image that with a DPI doubled from the base.

- icon.png (256px x 256px)
- icon@2x.png (512px x 512px)

If you want to support displays with different DPI densities at the same time, you can put images with different sizes in the same folder and use the filename without DPI suffixes. For example:

```xml
<platform name="electron">
    <icon src="res/electron/icon.png" />
    <icon src="res/electron/icon@1.5x.png" />
    <icon src="res/electron/icon@2x.png" />
    <icon src="res/electron/icon@4x.png" target="installer" />
</platform>
```
