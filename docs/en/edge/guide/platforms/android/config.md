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

The `config.xml` file controls an app's basic settings that apply
across each application and CordovaWebView instance. This section
details preferences that only apply to Android builds. See The
config.xml File for information on global configuration options.

<!-- QUERY A: is useBrowserHistory deprecated?

* `UseBrowserHistory` (boolean, defaults to `true`): set to `false` if
  you want to use the history shim that was used to work around the
  hashtag error present in Android 3.x prior to the history fix.
  (Note: This setting will be deprecated in April 2013)

        <preference name="UseBrowserHistory" value="false"/>

-->

* `LoadingDialog`: Display a native loading dialog when loading the
  app. The value's format is _Title, Message_

        <preference name="LoadingDialog" value="Please wait, the app is loading"/>

* `LoadingPageDialog`: Display a native loading dialog when loading
  sub-pages. The value's format is _Title, Message_

        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>

* `ErrorUrl`: Set the error page for your application. Should be
  located in your Android project in `file://android_asset/www/`

        <preference name="ErrorUrl" value="error.html"/>

<!-- QUERY A: under what conditions does the errorUrl page display? -->

* `LoadUrlTimeoutValue`: How much time Cordova should wait before
  throwing a timeout error on the application.

        <preference name="LoadUrlTimeoutValue" value="20000"/>

<!-- QUERY A: is loadUrlTimeoutValue expressed in milliseconds? is 20000 the default?-->

<!-- QUERY A: confirm loadUrlTimeoutValue replaces PGB's load-url-timeout

 #### Load URL timeout

  * `load-url-timeout` with a value in milliseconds

  * defaults to 20000 (20 seconds)

  * example: `<preference name="load-url-timeout" value="15000" />`

-->

* `KeepRunning` (boolean, defaults to `true`): Determines whether
  Cordova stays running in the background.

        <preference name="KeepRunning" value="false"/>

<!-- QUERY A: does keepRunning mean in effect the app continues to execute following pause event? Does event still fire? -->

* `SplashScreen`: The name of the file minus its extension in the
  `res/drawable` directory.  Various assets must share this common
  name in various subdirectories.  For details, see the _Icons and
  Splash Screens_ section in The config.xml File.

        <preference name="SplashScreen" value="splash"/>

* `SplashScreenDelay` (number, defaults to `5000`): The amount of
  time the splash screen image displays.

        <preference name="SplashScreenDelay" value="10000"/>

<!-- QUERY PGB A: do android-minSdkVersion, android-maxSdkVersion apply outside PG Build?

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

-->

<!-- QUERY A: does android-installLocation apply outside PGB?

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

-->

