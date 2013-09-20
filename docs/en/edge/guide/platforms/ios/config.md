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

* `TopActivityIndicator` (string, defaults to `gray`): Controls the
  appearance of the small spinning icon in the status bar that
  indicates significant processor activity.  Valid values are
  `whiteLarge`, `white`, and `gray`.

        <preference name="TopActivityIndicator" value="white"/>

* `EnableViewportScale` (boolean, defaults to `false`): Set to `true`
  to use a viewport meta tag to either disable or restrict the range
  of user scaling. 

        <preference name="EnableViewportScale" value="true"/>

* `FadeSplashScreen` (boolean, defaults to `true`): set to `false` to
  prevent the splash-screen to fade in and out when showing or hiding
  it.

        <preference name="FadeSplashScreen" value="false"/>

* `FadeSplashScreenDuration` (float, defaults to 2): The splash-screen
  Fade duration in seconds.

        <preference name="FadeSplashScreenDuration" value="4"/>

* `ShowSplashScreenSpinner` (boolean, defaults to `true`): set to `false`
  to hide the splash-screen spinner.

        <preference name="ShowSplashScreenSpinner" value="false"/>

* `MediaPlaybackRequiresUserAction` (boolean, defaults to `false`): set
  to `true` to not allow autoplayed HTML5 video.

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
  the JavaScript focus() call.

        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>

* `SuppressesIncrementalRendering` (boolean, defaults to `false`): set
  to `true` to wait until all new view content has been received
  before it is rendered.

        <preference name="SuppressesIncrementalRendering" value="true"/>

* `KeyboardShrinksView` (boolean, defaults to `false`): set to `true` to
  shrink the WebView when the keyboard comes up. The WebView shrinks
  instead of the viewport shrinking and the page scrollable. This
  applies to apps that position their elements relative to the bottom
  of the WebView. This is the default behaviour on Android, and makes
  a lot of sense when building apps as opposed to webpages.

        <preference name="KeyboardShrinksView" value="true"/>



