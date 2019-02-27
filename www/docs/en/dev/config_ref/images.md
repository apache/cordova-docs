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
target        | *Optional* <br/> ==Windows== <br/> Destination filename for the image file and all its MRT companions


The following configuration can be used to define a single default icon
which will be used for all platforms.
```xml
    <icon src="res/icon.png" />
```
For each platform, you can also define a pixel-perfect icon set to fit
different screen resolutions.

## Android

On Android, instead of using a single image for an icon, you can use two images (background and foreground) to create an **Adaptive Icon**.

Attributes    | Description
--------------|--------------------------------------------------------------------------------
background    | *Required for Adaptive* <br/> Location of the image (png or vector) relative to your project directory, or color reference
foreground    | *Required for Adaptive* <br/> Location of the image (png or vector) relative to your project directory, or color reference
density       | *Optional* <br/> Specified icon density

### Adaptive Icons

To use the adaptive icons the `background` and `foreground` attributes must be defined in place of the `src` attribute. The `src` attribute is not used for adaptive icons.

#### Adaptive Icon with Images:
```xml
<platform name="android">
  <icon background="res/icon/android/ldpi-background.png" density="ldpi" foreground="res/icon/android/ldpi-foreground.png" />
  <icon background="res/icon/android/mdpi-background.png" density="mdpi" foreground="res/icon/android/mdpi-foreground.png" />
  <icon background="res/icon/android/hdpi-background.png" density="hdpi" foreground="res/icon/android/hdpi-foreground.png" />
  <icon background="res/icon/android/xhdpi-background.png" density="xhdpi" foreground="res/icon/android/xhdpi-foreground.png" />
  <icon background="res/icon/android/xxhdpi-background.png" density="xxhdpi" foreground="res/icon/android/xxhdpi-foreground.png" />
  <icon background="res/icon/android/xxxhdpi-background.png" density="xxxhdpi" foreground="res/icon/android/xxxhdpi-foreground.png" />
</platform>
```

**Note:** In this example, the foreground image will also be used as the fallback icon for Android devices that do not support the adaptive icons. The fallback icon can be overridden by setting the src attribute.

#### Adaptive Icon with Vectors:
```xml
<platform name="android">
  <icon background="res/icon/android/ldpi-background.xml" density="ldpi" foreground="res/icon/android/ldpi-foreground.xml" src="res/android/ldpi.png" />
  <icon background="res/icon/android/mdpi-background.xml" density="mdpi" foreground="res/icon/android/mdpi-foreground.xml" src="res/android/mdpi.png" />
  <icon background="res/icon/android/hdpi-background.xml" density="hdpi" foreground="res/icon/android/hdpi-foreground.xml" src="res/android/hdpi.png" />
  <icon background="res/icon/android/xhdpi-background.xml" density="xhdpi" foreground="res/icon/android/xhdpi-foreground.xml" src="res/android/xhdpi.png" />
  <icon background="res/icon/android/xxhdpi-background.xml" density="xxhdpi" foreground="res/icon/android/xxhdpi-foreground.xml" src="res/android/xxhdpi.png" />
  <icon background="res/icon/android/xxxhdpi-background.xml" density="xxxhdpi" foreground="res/icon/android/xxxhdpi-foreground.xml" src="res/android/xxxhdpi.png" />
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

  <icon background="@color/background" density="ldpi" foreground="res/icon/android/ldpi-foreground.png" />
  <icon background="@color/background" density="mdpi" foreground="res/icon/android/mdpi-foreground.png" />
  <icon background="@color/background" density="hdpi" foreground="res/icon/android/hdpi-foreground.png" />
  <icon background="@color/background" density="xhdpi" foreground="res/icon/android/xhdpi-foreground.png" />
  <icon background="@color/background" density="xxhdpi" foreground="res/icon/android/xxhdpi-foreground.png" />
  <icon background="@color/background" density="xxxhdpi" foreground="res/icon/android/xxxhdpi-foreground.png" />
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
- [Android icon guide](https://www.google.com/design/spec/style/icons.html)
- [Android - Supporting multiple screens](http://developer.android.com/guide/practices/screens_support.html)

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
        <!-- iPad Spotlight and Settings Icon -->
        <icon src="res/ios/icon-50.png" width="50" height="50" />
        <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
        <!-- iPad Pro -->
        <icon src="res/ios/icon-83.5@2x.png" width="167" height="167" />
    </platform>
```
### See Also
- [App Icons on iPad and iPhone](https://developer.apple.com/library/content/qa/qa1686/_index.html)

## Windows

For Windows the recommended approach to define application icons is to use the `target` attribute.

```xml
    <platform name="windows">
        <icon src="res/windows/storelogo.png" target="StoreLogo" />
        <icon src="res/windows/smalllogo.png" target="Square30x30Logo" />
        <icon src="res/windows/Square44x44Logo.png" target="Square44x44Logo" />
        <icon src="res/windows/Square70x70Logo.png" target="Square70x70Logo" />
        <icon src="res/windows/Square71x71Logo.png" target="Square71x71Logo" />
        <icon src="res/windows/Square150x150Logo.png" target="Square150x150Logo" />
        <icon src="res/windows/Square310x310Logo.png" target="Square310x310Logo" />
        <icon src="res/windows/Wide310x150Logo.png" target="Wide310x150Logo" />
    </platform>
```

where `src` is the path to the icon which needs to be added.

The Windows platform handles MRT icons automatically, so if you specify `src="res/windows/storelogo.png"` the following files will be copied into the application's `images` folder: `res/windows/storelogo.scale-100.png`, `res/windows/storelogo.scale-200.png`, etc.

TODO Define what MRT is.

The `target` attribute specifies the base name for the resultant icons. For every icon file, its destination filename is calculated as `target + '.' + MRT_qualifiers + extension(src)`. For the icons to display properly in the application, every `target` value should be one of the icon filenames defined in the application's `.appxmanifest` file.

Summarizing the above... using the `target` attribute it is possible to:

  * define a group of icons for different device scale factors using a single `<icon ...>` element, for example:
```xml
    <icon src="res/windows/AppListIcon.png" target="Square44x44Logo" />
```
  which is equivalent to the following lines:
```xml
    <icon src="res/windows/Square44x44Logo.scale-100.png" width="44" height="44" />
    <icon src="res/windows/Square44x44Logo.scale-150.png" width="66" height="66" />
    <icon src="res/windows/Square44x44Logo.scale-200.png" width="88" height="88" />
    <icon src="res/windows/Square44x44Logo.scale-240.png" width="106" height="106" />
```
  * define icons with scale factors other than `scale-100` and `scale-240` (and any other MRT qualifiers)

Although it is not recommended, it is also possible to define icons using the `width` and `height` attributes:

```xml
    <platform name="windows">
        <icon src="res/windows/logo.png" width="150" height="150" />
        <icon src="res/windows/smalllogo.png" width="30" height="30" />
        <icon src="res/windows/storelogo.png" width="50" height="50" />
        <icon src="res/windows/Square44x44Logo.scale-100.png" width="44" height="44" />
        <icon src="res/windows/Square44x44Logo.scale-240.png" width="106" height="106" />
        <icon src="res/windows/Square70x70Logo.scale-100.png" width="70" height="70" />
        <icon src="res/windows/Square71x71Logo.scale-100.png" width="71" height="71" />
        <icon src="res/windows/Square71x71Logo.scale-240.png" width="170" height="170" />
        <icon src="res/windows/Square150x150Logo.scale-240.png" width="360" height="360" />
        <icon src="res/windows/Square310x310Logo.scale-100.png" width="310" height="310" />
        <icon src="res/windows/Wide310x150Logo.scale-100.png" width="310" height="150" />
        <icon src="res/windows/Wide310x150Logo.scale-240.png" width="744" height="360" />
    </platform>
```

### See Also:
- [Windows 10 platform guidelines for icons](https://msdn.microsoft.com/en-us/library/windows/apps/mt412102.aspx).
- [Windows 8.1 tiles and icons sizes](https://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh781198.aspx)

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

* icon.png (256px x 256px)
* icon@2x.png (512px x 512px)

If you want to support displays with different DPI densities at the same time, you can put images with different sizes in the same folder and use the filename without DPI suffixes. For example:

```xml
<platform name="electron">
  <icon src="res/electron/icon.png" />
  <icon src="res/electron/icon@1.5x.png" />
  <icon src="res/electron/icon@2x.png" />
  <icon src="res/electron/icon@4x.png" target="installer" />
</platform>
```