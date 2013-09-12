---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements. See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership. The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
         under the License.
---

# Android Configuration

The `config.xml` file controls various Cordova settings. These
apply to each application and CordovaWebView instance.

## `<preference>`

Various other preferences (as `<preference>` tags) default on not
breaking existing apps. The available preferences are:

* `useBrowserHistory` (boolean, defaults to `true`): set to `false` if you
  want to use the history shim that was used to work around the
  hashtag error present in Android 3.x prior to the history fix.
  (Note: This setting will be deprecated in April 2013)

* `loadingDialog`: Display a native loading dialog when loading the
  app. The value's format is _Title, Message_

* `loadingPageDialog`: Display a native loading dialog when loading
  sub-pages. The value's format is _Title, Message_

* `errorUrl`: Set the error page for your application. Should be
  located in your Android project in `file://android_asset/www/`

* `backgroundColor`: Set the background color for your application.
  Supports a four-byte hex value, with the first byte representing
  alpha value, and the following three bytes with standard RGB
  values. For example, `0x00000000` is black.

* `loadUrlTimeoutValue`: How much time Cordova should wait before
  throwing a timeout error on the application.

* `keepRunning` (boolean, defaults to `true`): Determines whether
  Cordova stays running in the background.

* `splashscreen`: The name of the file minus its extension in the
  `res/drawable` directory.  If you have multiple assets, they all
  must share this common name in their respective directories.

* `disallowOverscroll` (boolean, defaults to `false`): set to `true` to
  disable the glow when a user scrolls beyond the edge of the webview.

## `<plugin>`

Android supports using `<feature>` as analogues to `<plugin>` elements.

<!--

 ### Android Specific

 #### Minimum and Maximum SDK Version

* `android-minSdkVersion` and/or `android-maxSdkVersion`, with integer
  values

  * minSdkVersion example: `<preference name="android-minSdkVersion" value="10" />`

  * maxSdkVersion example: `<preference name="android-maxSdkVersion" value="15" />`

  * corresponds to the `usesSdk` attributes in the
    `AndroidManifest.xml` file - more details are in [the Android
    documentation](http://developer.android.com/guide/topics/manifest/uses-sdk-element.html)

  * minSdkVersion defaults to 7 (Android 2.1); maxSdkVersion is unset
    by default

 #### Install Location

* `android-installLocation` with values `internalOnly`, `auto` or `preferExternal`

  * example: `<preference name="android-installLocation" value="auto"
    />`

  * where an app can be installed - defaults to `internalOnly` (as the
    Android SDK)

  * `auto` or `preferExternal` allow the app to be installed on an SD
    card - this can lead to unexpected behavior

  * more details available in [the Android
    documentation](http://developer.android.com/guide/appendix/install-location.html)

 #### Splash Screen Duration

  * `splash-screen-duration` with a value in milliseconds

  * defaults to 5000 (5 seconds)

  * example: `<preference name="splash-screen-duration" value="10000"
    />`

  * for auto-hide behaviour call `navigator.splashscreen.hide();` in
    the device-ready method

  * supported on PhoneGap 2.1.0 and above
  
 #### Load URL timeout

  * `load-url-timeout` with a value in milliseconds

  * defaults to 20000 (20 seconds)

  * example: `<preference name="load-url-timeout" value="15000" />`

-->