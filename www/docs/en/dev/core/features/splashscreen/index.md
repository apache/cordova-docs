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

title: Splash Screen
toc_title: Splash Screen
---

# Splash Screen

This core feature gives the ability to configure and control the platform's splash screen while your web application is launching.

- [Splash Screen](#splash-screen)
  - [Supported Platforms](#supported-platforms)
  - [Platform Splash Screen Image Configuration](#platform-splash-screen-image-configuration)
    - [Example Configuration](#example-configuration)
    - [Android-specific Information](#android-specific-information)
      - [Example Android Configuration](#example-android-configuration)
    - [iOS-specific Information](#ios-specific-information)
      - [Launch Storyboard Images](#launch-storyboard-images)
        - [Designing Launch Storyboard Images](#designing-launch-storyboard-images)
        - [Scale](#scale)
        - [Idioms](#idioms)
        - [Size classes](#size-classes)
        - [Single-image launch screen](#single-image-launch-screen)
        - [Multi-image launch screen](#multi-image-launch-screen)
        - [Dark Mode](#dark-mode)
  - [config.xml Preferences](#configxml-preferences)
    - [`AutoHideSplashScreen`](#autohidesplashscreen)
    - [`FadeSplashScreen`](#fadesplashscreen)
    - [`FadeSplashScreenDuration`](#fadesplashscreenduration)
    - [`ShowSplashScreenSpinner`](#showsplashscreenspinner)
    - [`SplashScreenDelay`](#splashscreendelay)
    - [`AndroidPostSplashScreenTheme`](#androidpostsplashscreentheme)
    - [`AndroidWindowSplashScreenAnimatedIcon`](#androidwindowsplashscreenanimatedicon)
    - [`AndroidWindowSplashScreenAnimationDuration`](#androidwindowsplashscreenanimationduration)
    - [`AndroidWindowSplashScreenBackground`](#androidwindowsplashscreenbackground)
    - [`AndroidWindowSplashScreenBrandingImage`](#androidwindowsplashscreenbrandingimage)
    - [`AndroidWindowSplashScreenIconBackgroundColor`](#androidwindowsplashscreeniconbackgroundcolor)
  - [JavaScript Public APIs](#javascript-public-apis)
    - [`navigator.splashscreen.hide`](#navigatorsplashscreenhide)
    - [`navigator.splashscreen.show`](#navigatorsplashscreenshow)
  - [Quirks & Known Issues](#quirks--known-issues)
    - [iOS](#ios)
    - [Android](#android)

## Supported Platforms

- Android
- iOS

For other platforms, check the `cordova-plugin-splashscreen` for support.

## Platform Splash Screen Image Configuration

### Example Configuration

In the top-level `config.xml` file (not the one in `platforms`), add configuration elements like those specified here.

The value of the "src" attribute is relative to the project root directory and NOT to the `www` directory (see `Directory structure` below). You can name the source image file whatever you like. The internal name in the application is automatically determined by Cordova.

**Directory structure:**

```
projectRoot
    platforms
    plugins
    www
    res
        screen
            android
            ios
```

**Config.xml:**

```xml
<platform name="android">
    <preference name="AndroidWindowSplashScreenAnimatedIcon" value="res/screen/android/splashscreen.xml" />
</platform>

<!--
  Storyboard (supports all devices):
  Note: images are determined by scale, idiom, and size traits. The following
  are suggested based on current device form factors
-->
<platform name="ios">
    <splash src="res/screen/ios/Default@2x~universal~anyany.png" />
    <splash src="res/screen/ios/Default@2x~universal~comany.png" />
    <splash src="res/screen/ios/Default@2x~universal~comcom.png" />
    <splash src="res/screen/ios/Default@3x~universal~anyany.png" />
    <splash src="res/screen/ios/Default@3x~universal~anycom.png" />
    <splash src="res/screen/ios/Default@3x~universal~comany.png" />
</platform>
```

### Android-specific Information

Starting in Android 12, Google has implemented a new SplashScreen API to control the app launch animation which runs on a device with Android 12 and higher. For backwards compatibility, Cordova has included the `core-splashscreen` compatibility library which extends this features back to Android API 21 and higher.

To effectively create your own Android SplashScreen assets, it is important to understand the requirements of an Adaptive Icon.

**Resource:**

- [Splash Screen dimensions](https://developer.android.com/guide/topics/ui/splash-screen#splash_screen_dimensions)
- [Adaptive icons](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive)

#### Example Android Configuration

```xml
<platform name="android">
    <!-- Default -->
    <preference name="AndroidWindowSplashScreenAnimatedIcon" value="res/screen/android/splashscreen.xml" />
</platform>
```

### iOS-specific Information

Launch storyboard images are sized based on scale, idiom, and size classes. It supports all devices, and can be used with split-screen/slide-over multitasking.

There is no official support for providing a native-resolution launch image for the iPad Pro 12.9 or for providing launch images that work with split-screen multitasking or slide-over.

**Note:** Since iOS 11, for iPhone X devices and greater (with notch screen), make sure to add `viewport-fit=cover` to the viewport meta tag in your `index.html` file to display the app correctly like so: `<meta name="viewport" content="user-scalable=no, initial-scale=1, width=device-width, viewport-fit=cover">` and make some modification to your app style by adding: `padding: env(safe-area-inset-top)` to your `index.css` file to avoid the unsafe areas behind notches in the screen.

#### Launch Storyboard Images

To support newer form factors and split-screen/slide-over multitasking, launch storyboard images are used.

- images are not specific to a given device.
- images are scaled to fill the available viewport (while maintaining the aspect ratio).
- the outer edges of the images will be cropped, and the amount will vary based on device an viewport.
- there is no need to provide an image for each possible device, viewport, and orientation; iOS will choose the best image for the situation automatically.

##### Designing Launch Storyboard Images

The key to designing a launch storyboard image is understanding that the edges of the image will almost certainly be cropped. Therefore, one should not place any important information near the edges of any images provided to the launch storyboard. Only the center is a safe area, and this all but guarantees that following Apple's advice of presenting an unpopulated user interface will not work well.

Instead, the following tips should enable you to create a launch image that works across a multitude of form factors, viewports, and orientations:

- Important graphics (logos, icons, titles) should be centered. The safe bounding region will vary, so you will need to test to ensure that the important graphics are never cropped. Better yet, don't supply any important graphics in the first place.

  - You _can_ fine-tune the placement and size of these graphics.

- Use a simple color wash. If you use two colors, you'll want one color to fill the top half of the image, and the second to fill the bottom half.  If you use a gradient, you'll probably want to ensure that the middle of the gradient lines up with the center of the image.

- Don't worry about pixel perfection -- because the images are scaled, there's almost no chance the images will be perfectly fit to the pixel grid. Since all supported iOS devices use retina screens, users will be hard pressed to notice it anyway.

It is important to understand the concept of scale, idiom, and size class traits in order to use launch storyboard images effectively. Of the images supplied to the launch storyboard, iOS will choose the image that best matches the device and viewport and render that image. It is possible to supply only one launch image if so desired, but it is also possible to fine-tune the displayed launch image based on traits. When fine-tuning, one can ignore traits that aren't targeted or supported by the app.

##### Scale

|    scale    |    devices             |
|:-----------:|:----------------------:|
|     1x      | All non-retina devices |
|     2x      | Most retina devices    |
|     3x      | iPhone 6+/6s+,7s+      |

In general, you'll want to supply 2x and 3x images. Cordova only supports retina devices now, so there's no point in supplying 1x images.

##### Idioms

|    idiom    |    devices    |
|:-----------:|:-------------:|
|    ipad     | All iPads     |
|   iphone    | All iPhones and iPod Touches    |
|  universal  | All devices   |

You only need to provide universal images unless you need to fine-tune for a specific device idiom.

##### Size classes

There are two size classes applies to both screen axes. Narrow viewports are considered to be the "compact" size class, and remaining viewports are considered "regular". When supplying images to Xcode, however, one must choose between "any & compact" and "any & regular". To stay consistent with the native terminology, this feature will match based on "any" and "compact". `any` will match regular-sized viewports.

Note: this feature uses `com` as an abbreviation for "compact" classes.

The following classes are supported by this feature:

|    width    |    height    |    orientation    |
|:-----------:|:------------:|:-----------------:|
|     any     |     any      |        any        |
|     com     |     any      |     portrait      |
|     any     |     com      |  landscape (wide) |
|     com     |     com      | landscape (narrow)|

To see the complete list of size classes associated with devices and viewports, see <http://www.sizeclasses.com>.

##### Single-image launch screen

If your launch image is simple, you may be able to avoid creating a lot of different launch images and supply only one. The launch image needs to meet the following requirements:

- the image should be square
- the image should be large enough to fit on an iPad Pro 12.9": 2732x2732
- anything important should fit within the center

Keep in mind that the image will be cropped, possibly quite severely, depending upon the viewport.

Once the image is created, you can include it in your project by adding the following to `config.xml`:

```xml
    <splash src="res/screen/ios/Default@2x~universal~anyany.png" />
```

Because only one image is provided, iOS will utilize it in every context.

##### Multi-image launch screen

If a single launch image won't meet your needs, you will probably need to supply at least six images, if not more. Furthermore, keep in mind that it will not be possible to fine tune the image to a specific device, but only to a device class, display factor, and viewport size.

If you don't need to target images to a specific idiom, you should create six images, as follows:

|    scale    |    idiom    |    width    |    height    |    size    |    filename    |
|:-----------:|:-----------:|:-----------:|:------------:|:----------:|:--------------:|
|     2x*     |  universal  |     any     |     any      | 2732x2732  | `Default@2x~universal~anyany.png` |
|     2x      |  universal  |     com     |     any      | 1278x2732  | `Default@2x~universal~comany.png` |
|     2x      |  universal  |     com     |     com      | 1334x750   | `Default@2x~universal~comcom.png` |
|     3x*     |  universal  |     any     |     any      | 2208x2208  | `Default@3x~universal~anyany.png` |
|     3x      |  universal  |     any     |     com      | 2208x1242  | `Default@3x~universal~anycom.png` |
|     3x      |  universal  |     com     |     any      | 1242x2208  | `Default@3x~universal~comany.png` |

\* this image is required in order for iOS utilize the other images within this scale and idiom.

> Note: If the 3x sizes look small too you, that's because there's only one device class that currently has a 3x density: the iPhone 6+/6s+/7+.

The above looks like the following snippet when present in `config.xml`:

```xml
    <splash src="res/screen/ios/Default@2x~universal~anyany.png" />
    <splash src="res/screen/ios/Default@2x~universal~comany.png" />
    <splash src="res/screen/ios/Default@2x~universal~comcom.png" />
    <splash src="res/screen/ios/Default@3x~universal~anyany.png" />
    <splash src="res/screen/ios/Default@3x~universal~anycom.png" />
    <splash src="res/screen/ios/Default@3x~universal~comany.png" />
```

Should one need to further fine tune based upon device idiom, one can do so. This might look like so:

|    scale    |    idiom    |    width    |    height    |    size    |    filename    |
|:-----------:|:-----------:|:-----------:|:------------:|:----------:|:--------------:|
|     2x*     |    iphone   |     any     |     any      | 1334x1334  | `Default@2x~iphone~anyany.png` |
|     2x      |    iphone   |     com     |     any      | 750x1334   | `Default@2x~iphone~comany.png` |
|     2x      |    iphone   |     com     |     com      | 1334x750   | `Default@2x~iphone~comcom.png` |
|     3x*     |    iphone   |     any     |     any      | 2208x2208  | `Default@3x~iphone~anyany.png` |
|     3x      |    iphone   |     any     |     com      | 2208x1242  | `Default@3x~iphone~anycom.png` |
|     3x      |    iphone   |     com     |     any      | 1242x2208  | `Default@3x~iphone~comany.png` |
|     2x*     |     ipad    |     any     |     any      | 2732x2732  | `Default@2x~ipad~anyany.png`   |
|     2x      |     ipad    |     com     |     any      | 1278x2732  | `Default@2x~ipad~comany.png`   |

\* this image is required in order for iOS utilize the other images within this scale and idiom.

The above looks like the following in `config.xml`:

```xml
    <splash src="res/screen/ios/Default@2x~iphone~anyany.png" />
    <splash src="res/screen/ios/Default@2x~iphone~comany.png" />
    <splash src="res/screen/ios/Default@2x~iphone~comcom.png" />
    <splash src="res/screen/ios/Default@3x~iphone~anyany.png" />
    <splash src="res/screen/ios/Default@3x~iphone~anycom.png" />
    <splash src="res/screen/ios/Default@3x~iphone~comany.png" />
    <splash src="res/screen/ios/Default@2x~ipad~anyany.png" />
    <splash src="res/screen/ios/Default@2x~ipad~comany.png" />
```

##### Dark Mode

Since [Cordova-iOS@6.1.0](https://github.com/apache/cordova-ios), it is now possible to optionally specify different SplashScreen images to use when the app is running in dark mode. The luminosity of SplashScreen images can be defined in `config.xml` using the `~dark` and `~light` suffixes.

```xml
<!-- Default image to be used for all modes -->
<splash src="res/screen/ios/Default@2x~universal~anyany.png" />

<!-- Image to use specifically for dark mode devices -->
<splash src="res/screen/ios/Default@2x~universal~anyany~dark.png" />

<!-- Image to use specifically for light mode devices -->
<splash src="res/screen/ios/Default@2x~universal~anyany~light.png" />
```

**Note:** This works since iOS 13. iOS 12 and below will use the default SplashScreen without a luminosity suffix specified.

## config.xml Preferences

### `AutoHideSplashScreen`

Indicates whether to hide splash screen automatically or not. The splash screen is hidden after the amount of time specified in the `SplashScreenDelay` preference.

**Supported Platforms:**

- Android
- iOS

**Data Type:** `Boolean`

**Default Value:** `true`

**Usage Example:**

```xml
<preference name="AutoHideSplashScreen" value="true" />
```

### `FadeSplashScreen`

Controlls the ability of the fade in and out of the splash screen.

For Android, it controlls only the fade out.

**Supported Platforms:**

- Android
- iOS

**Data Type:** `Boolean`

**Default Value:** `true`

**Usage Example:**

```xml
<preference name="FadeSplashScreen" value="false"/>
```

### `FadeSplashScreenDuration`

Controlls the length of the the splash screen fade effect.

**Supported Platforms:**

- Android
- iOS

**Data Type:** `Float`, in milliseconds

**Default Value:** `500`

**Usage Example:**

```xml
<preference name="FadeSplashScreenDuration" value="750"/>
```

_iOS Note_: `FadeSplashScreenDuration` is included into `SplashScreenDelay`, for example if you have `<preference name="SplashScreenDelay" value="3000" />` and `<preference name="FadeSplashScreenDuration" value="1000"/>` defined in `config.xml`:

- 00:00 - splashscreen is shown
- 00:02 - fading has started
- 00:03 - splashscreen is hidden

Turning the fading off via `<preference name="FadeSplashScreen" value="false"/>` technically means fading duration to be `0` so that in this example the overall splash screen delay will still be 3 seconds.

_Note_: This only applies to the application startup - you need to take the fading timeout into account when manually showing/hiding the splash screen in your application's code:

```javascript
navigator.splashscreen.show();
window.setTimeout(function () {
    navigator.splashscreen.hide();
}, splashDuration - fadeDuration);
```

### `ShowSplashScreenSpinner`

Controlls the splash screen spinner.

**Supported Platforms:**

- iOS

**Data Type:** `Boolean`

**Default Value:** `true`

**Usage Example:**

```xml
<preference name="ShowSplashScreenSpinner" value="false"/>
```

### `SplashScreenDelay`

Amount of time in milliseconds to wait before automatically hide splash screen.

**Supported Platforms:**

- Android
- iOS

**Data Type:** `Number`, in milliseconds

**Default Value:** `true`

- Android
  `-1`: The splash screen will automatically hide when the `onPageFinished` has been triggered.

- iOS
  `3000`: The splash screen will automatically hide in 3 seconds.

**Usage Example:**

```xml
<preference name="SplashScreenDelay" value="3000" />
```

### `AndroidPostSplashScreenTheme`

Sets the post-theme of the activity after splash screen hides.

_Note:_ This setting is available but use at your own risk.

**Supported Platforms:**

- Android

**Data Type:** `String`

**Default Value:** `@style/Theme.AppCompat.NoActionBar`

**Usage Example:**

```xml
<preference name="AndroidPostSplashScreenTheme" value="@style/Theme.AppCompat.NoActionBar"/>
```

### `AndroidWindowSplashScreenAnimatedIcon`

The splash screen image. This preference is used for both animated and non-animated icons. The current acceptable asset files can either be a XML Vector Drawable or PNG.

**Supported Platforms:**

- Android

**Data Type:** `String`, file path to the asset file

**Default Value:** If not supplied, the Cordova's default asset is used.

**Usage Example:**

```xml
<preference name="AndroidWindowSplashScreenAnimatedIcon" value="res/screen/android/splashscreen.xml" />
```

### `AndroidWindowSplashScreenAnimationDuration`

Defines the duration of the icon's animation if an Animated Vector Drawable is supplied as the splash screen image.

**Supported Platforms:**

- Android

**Data Type:** `Number`, in milliseconds

**Default Value:** `undefined`

**Usage Example:**

```xml
<preference name="AndroidWindowSplashScreenAnimationDuration" value="3000"/>
```

### `AndroidWindowSplashScreenBackground`

The splash screen background color.

**Supported Platforms:**

- Android

**Data Type:** `String`, color hex code value.

**Default Value:** `#ffffff`

**Usage Example:**

```xml
<preference name="AndroidWindowSplashScreenBackground" value="#ffffff" />
```

### `AndroidWindowSplashScreenBrandingImage`

> :warning: this setting is currently unsupported. The core-splashscreen compatibility library, that Cordova Android relies on for providing backwards support, has not implemented this functionality. [See Google Android Issue Tracker](https://issuetracker.google.com/issues/194301890)

<!--
The splash screen's branding image.

**Supported Platforms:**

- Android

**Data Type:** `String`, file path to the asset file

**Default Value:** `undefined`

**Usage Example:**

```xml
<preference name="AndroidWindowSplashScreenBrandingImage" value="res/screen/android/splashscreen_branding.xml" />
```
-->

### `AndroidWindowSplashScreenIconBackgroundColor`

The splash screen's icons background color. Useful to seperate increase the contrast seperation between the background and icon.

**Supported Platforms:**

- Android

**Data Type:** `String`, color hex code value.

**Default Value:** `undefined`

**Usage Example:**

```xml
<preference name="AndroidWindowSplashScreenIconBackgroundColor" value="#c0c0c0" />
```

## JavaScript Public APIs

### `navigator.splashscreen.hide`

Dismiss the splash screen.

**Supported Platforms:**

- Android
- iOS

**Usage Example:**

```js
navigator.splashscreen.hide();
```

**iOS Quirk:**

The `config.xml` file's `AutoHideSplashScreen` setting must be `false`. To delay hiding the splash screen for two seconds, add a timer such as the following in the `deviceready` event handler:

```js
setTimeout(function() {
    navigator.splashscreen.hide();
}, 2000);
```

### `navigator.splashscreen.show`

Displays the splash screen.

**Supported Platforms:**

- iOS

**Usage Example:**

```js
navigator.splashscreen.show();
```

Your application cannot call `navigator.splashscreen.show()` until the application has
started and the `deviceready` event has fired. But since typically the splash
screen is meant to be visible before your application has started, that would seem to
defeat the purpose of the splash screen.  Providing any parameters in
`config.xml` will automatically `show` the splash screen immediately after your
application is launched and before it has fully started and received the `deviceready`
event. For this reason, it is unlikely you will need to call `navigator.splashscreen.show()` to make the splash
screen visible for application startup.

## Quirks & Known Issues

### iOS

1. In iOS, the splash screen images are called launch images. These images are mandatory on iOS.

2. **App on target may not reflect changes to images**
   Once you run the app on a target, iOS caches the launch image. Unfortunately, when you change the image, iOS does _not_ invalidate the cache, which means you'll still see the old launch image. You should either: delete the app, or reset content & settings (simulator).

3. **Simulator may not show expected images when launched from CLI**
   When Xcode deploys to a specific simulator, it only copies the assets that match the simulator's characteristics. For example, if you try to run an app on the iPhone 6s Plus simulator, only @3x launch images are copied. When compiling from the CLI, however, the default is to assume an iPhone 5s, which means only @2x launch images are copied. Unless your launch images are markedly different, chances are good the difference would go unnoticed, but this does mean that the only accurate method of testing is to test on a physical device.

4. **`anyany` must be provided for other variations to be used**
   If you don't provide an `anyany` version of the launch image for a specific scale and idiom, the other variations (like `anycom`, `comany`, and `comcom`) will ignored.

### Android

1. **Android 12 does not show the splash screen when launching the application from Android Studio or Cordova CLI.**
   This is a known Android 12 issue. After uploading the app to the device or simulator, exiting and opening the app will show the Splash Screen. If changes are not shown, try also performing a clean build.
It has been fixed on Android 13.
