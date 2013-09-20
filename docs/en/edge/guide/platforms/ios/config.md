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

# iOS Configuration

The `config.xml` file controls an app's basic settings that apply
across each application and CordovaWebView instance. This section
details preferences that only apply to iOS builds. See The config.xml
File for information on global configuration options.

* `TopActivityIndicator` (string, defaults to `gray`): controls the
  appearance of the small spinning icon that appears in the
  status/battery bar to indicate a demanding process is executing.
  Valid values are `whiteLarge`, `white`, and `gray`.

        <preference name="TopActivityIndicator" value="white"/>

* `EnableViewportScale` (boolean, defaults to `false`): set to `true` to
  prevent viewport scaling through a meta tag.

        <preference name="EnableViewportScale" value="true"/>

<!-- QUERY I: confirm EnableViewportScale allows viewport metatag to control range of scale, including disabling? -->

* `AutoHideSplashScreen` (boolean, defaults to `true`): set to `false`
  to use the SplashScreen API to control when the opening image stops
  displaying.

        <preference name="AutoHideSplashScreen" value="false"/>

* `FadeSplashScreen` (boolean, defaults to `true`): set to `false` to
  prevent the splash-screen from fading in or out when showing or
  hiding it.

        <preference name="FadeSplashScreen" value="false"/>

* `FadeSplashScreenDuration` (float, defaults to `2`): The splash-screen
  Fade duration in seconds.

        <preference name="FadeSplashScreenDuration" value="4"/>

* `ShowSplashScreenSpinner` (boolean, defaults to `true`): set to `false`
  to hide the splash screen spinner element.

        <preference name="ShowSplashScreenSpinner" value="false"/>

* `MediaPlaybackRequiresUserAction` (boolean, defaults to `false`):
  set to `true` to prevent HTML5 video from playing automatically with
  the `autoplay` attribute.

        <preference name="MediaPlaybackRequiresUserAction" value="true"/>

* `AllowInlineMediaPlayback` (boolean, defaults to `false`): set to
  `true` to allow inline HTML5 media playback, also, the video element
  in the HTML document must also include the webkit-playsinline
  attribute.

        <preference name="AllowInlineMediaPlayback" value="true"/>

* `BackupWebStorage` (string, defaults to `cloud`): valid values are
  `none`, `cloud` and `local`. Set to `cloud` to allow the web
  storage data to be backed up to iCloud, and set to `local` to only
  allow local backups (iTunes sync). Set to `none` to not allow any
  backups of web storage.

        <preference name="BackupWebStorage" value="local"/>

* `KeyboardDisplayRequiresUserAction` (boolean, defaults to `true`):
  set to `false` to open the keyboard when form elements get focus via
  the JavaScript `focus()` call.

        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>

* `SuppressesIncrementalRendering` (boolean, defaults to `false`): set
  to `true` to wait until all new view content has been received
  before it renders.

        <preference name="SuppressesIncrementalRendering" value="true"/>

* `KeyboardShrinksView` (boolean, defaults to `false`): set to `true`
  to scale down the webview when the keyboard appears rather than
  shrinking the viewport, matching the default behaviour for Android.
  This applies to apps that position their elements relative to the
  bottom of the webview.

        <preference name="KeyboardShrinksView" value="true"/>


<!-- QUERY I: Is ios-statusbarstyle OK?

 #### Status Bar Style

* `ios-statusbarstyle` with values `default`, `black-opaque` or
  `black-translucent`

  * example: `<preference name="ios-statusbarstyle" value="black-opaque" />`

  * default is a grey status bar, `black-opaque` will appear black

  * although `black-translucent` is supported, the PhoneGap webview
    does not extend beneath the status bar, so it will appear
    identical to `black-opaque` once your app is running

-->

<!-- QUERY I: Is detect-data-types OK?

 #### Detect Data Types

* `detect-data-types` with values `true` or `false`

  * example: `<preference name="detect-data-types" value="false" />`

  * controls whether certain data types (such as phone numbers and
    dates) are automatically turned into links by the system. Defaults
    to "true" (as does the system web view)

  * supported on PhoneGap 2.0.0 and above

-->

<!-- QUERY I: Is exit-on-suspend OK?

 #### Exit On Suspend

* `exit-on-suspend` with values `true` or `false`

  * example: `<preference name="exit-on-suspend" value="true" />`

  * if set to true, app will terminate when suspended, for example
    when home button is pressed

  * default is _false_

-->

<!-- QUERY I: Is show-splash-screen-spinner OK?

 #### Show Splash Screen Spinner

* `show-splash-screen-spinner` with values `true` or `false`

  * example: `<preference name="show-splash-screen-spinner"
    value="false" />`

  * if set to false, the spinner won't appear on the splash screen
    during app loading

  * default is _true_

-->

<!-- QUERY I: Is auto-hide-splash-screen OK?

 #### Auto-Hide Splash Screen

* `auto-hide-splash-screen` with values `true` or `false`

  * example: `<preference name="auto-hide-splash-screen" value="false"
    />`

  * if set to false, the splash screen must be hidden using a
    JavaScript API

  * default is _true_

-->

