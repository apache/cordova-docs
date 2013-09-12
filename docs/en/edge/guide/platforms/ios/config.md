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

The `config.xml` settings file controls various Cordova settings.
This is application wide, and not set per CDVViewController instance.
The `config.xml` file is located within the `<project
folder>/<appname>` directory.

## `<preference>`

Various preferences (as `<preference>` tags) default on not breaking
existing apps. The available preferences are:

* `DisallowOverscroll` (boolean, defaults to `false`): set to `true` if
  you don't want the WebView to rubber-band.

* `TopActivityIndicator` (string, defaults to `gray`): this is the top
  spinning throbber in the status/battery bar, valid values are
  `whiteLarge`, `white`, and `gray`.

* `EnableLocation` (boolean, defaults to `false`): set to `true`, to
  initialize the Geolocation plugin at start-up (so the fix on your
  location can be more accurate) __DEPRECATED__: please set the
  `onload` attribute of the `Geolocation` plugin to `true`
  instead.

* `EnableViewportScale` (boolean, defaults to `false`): set to `true` to
  prevent viewport scaling through a meta tag.

* `AutoHideSplashScreen` (boolean, defaults to `true`): set to `false` to
  control when the splashscreen is hidden through a JavaScript API.

* `FadeSplashScreen` (boolean, defaults to `true`): set to `false` to
  prevent the splash-screen to fade in and out when showing or hiding
  it.

* `FadeSplashScreenDuration` (float, defaults to 2): The splash-screen
  Fade duration in seconds.

* `ShowSplashScreenSpinner` (boolean, defaults to `true`): set to `false`
  to hide the splash-screen spinner.

* `MediaPlaybackRequiresUserAction` (boolean, defaults to `false`): set
  to true to not allow autoplayed HTML5 video.

* `AllowInlineMediaPlayback` (boolean, defaults to `false`): set to
  true to allow inline HTML5 media playback, also, the video element
  in the HTML document must also include the webkit-playsinline
  attribute.

* `BackupWebStorage` (string, defaults to `cloud`): valid values are
  `none`, `cloud` and `local`. Set to `cloud` to allow the web
  storage data to be backed up to iCloud, and set to `local` to only
  allow local backups (iTunes sync). Set to `none` to not allow any
  backups of web storage.

* `KeyboardDisplayRequiresUserAction` (boolean, defaults to `true`):
  set to false to open the keyboard when form elements get focus via
  the JavaScript focus() call.

* `SuppressesIncrementalRendering` (boolean, defaults to `false`): set
  to true to wait until all new view content has been received
  before it is rendered.

* `HideKeyboardFormAccessoryBar` (boolean, defaults to `false`): set to
  true to hide the additional toolbar that is on top of the
  keyboard. This toolbar features the __Prev__, __Next__, and __Done__
  buttons.

* `KeyboardShrinksView` (boolean, defaults to `false`): set to `true` to
  shrink the WebView when the keyboard comes up. The WebView shrinks
  instead of the viewport shrinking and the page scrollable. This
  applies to apps that position their elements relative to the bottom
  of the WebView. This is the default behaviour on Android, and makes
  a lot of sense when building apps as opposed to webpages.

<!--

 #### Target a Specific Device

* `target-device` with possible values `handset`, `tablet`, or
  `universal`

  * example: `<preference name="target-device" value="universal" />`

  * please note that this currently only applies to iOS builds; by
    default all builds are universal

 #### WebView Bounce

* `webviewbounce` with values `true` or `false`

  * example: `<preference name="webviewbounce" value="false" />`

  * controls whether the screen "bounces" when scrolled beyond the top
    or bottom on iOS. By default, the bounce is _on_

 #### Prerendered Icon

* `prerendered-icon` with values `true` or `false`

  * example: `<preference name="prerendered-icon" value="true" />`

  * if icon is prerendered, iOS will not apply it's gloss to the app's
    icon on the user's home screen

  * default is _false_

 #### Open all links in WebView

* __Deprecated__ -- use <a
  href="http://docs.phonegap.com/en/2.9.0/cordova_inappbrowser_inappbrowser.md.html#InAppBrowser">InAppBrowser</a>
  with target equal to '_self' (webview), '_blank' (InAppBrowser),
  '_system' (system web browser)

* `stay-in-webview` with values `true` or `false`

  * example: `<preference name="stay-in-webview" value="true" />`

  * if set to true, all links (even with target set to blank) will
    open in the app's webview

  * only use this preference if you want pages from your server to
    take over your entire app

  * default is _false_

 #### Status Bar Style

* `ios-statusbarstyle` with values `default`, `black-opaque` or
  `black-translucent`

  * example: `<preference name="ios-statusbarstyle" value="black-opaque" />`

  * default is a grey status bar, `black-opaque` will appear black

  * although `black-translucent` is supported, the PhoneGap webview
    does not extend beneath the status bar, so it will appear
    identical to `black-opaque` once your app is running

 #### Detect Data Types

* `detect-data-types` with values `true` or `false`

  * example: `<preference name="detect-data-types" value="false" />`

  * controls whether certain data types (such as phone numbers and
    dates) are automatically turned into links by the system. Defaults
    to "true" (as does the system web view)

  * supported on PhoneGap 2.0.0 and above

 #### Exit On Suspend

* `exit-on-suspend` with values `true` or `false`

  * example: `<preference name="exit-on-suspend" value="true" />`

  * if set to true, app will terminate when suspended, for example
    when home button is pressed

  * default is _false_

 #### Show Splash Screen Spinner

* `show-splash-screen-spinner` with values `true` or `false`

  * example: `<preference name="show-splash-screen-spinner"
    value="false" />`

  * if set to false, the spinner won't appear on the splash screen
    during app loading

  * default is _true_

 #### Auto-Hide Splash Screen

* `auto-hide-splash-screen` with values `true` or `false`

  * example: `<preference name="auto-hide-splash-screen" value="false"
    />`

  * if set to false, the splash screen must be hidden using a
    JavaScript API

  * default is _true_

-->