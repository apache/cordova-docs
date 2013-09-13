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

## Icons and Splash Screens

Cordova supports icons for _classic_, _retina_, _iPad_, and _retina
iPad_ displays (the latter as of Cordova 2.5). The following defines
icons for each type of screen:

        <icon src="icons/ios/icon.png"          gap:platform="ios" width="57"  height="57"  />
        <icon src="icons/ios/icon-72.png"       gap:platform="ios" width="72"  height="72"  />
        <icon src="icons/ios/icon_at_2x.png"    gap:platform="ios" width="114" height="114" />
        <!-- retina iPad -->
	<icon src="icons/ios/icon-72_at_2x.png" gap:platform="ios" width="144" height="144" />

Cordova supports splash screens for _classic_, _retina_, _iPhone 5_,
and _iPad_ displays. Standard iPads have two different splash screens
for portrait and landscape orientation. Retina iPads have two
additional splash screens: retina portrait and retina landscape. The
following defines splash screens for each type of screen:

        <gap:splash src="splash/ios/Default.png"                 gap:platform="ios" width="320"  height="480"  />
        <gap:splash src="splash/ios/Default_at_2x.png"           gap:platform="ios" width="640"  height="960"  />
        <gap:splash src="splash/ios/Default_iphone5.png"         gap:platform="ios" width="640"  height="1136" />
        <gap:splash src="splash/ios/Default-Landscape.png"       gap:platform="ios" width="1024" height="748"  />
        <gap:splash src="splash/ios/Default-Portrait.png"        gap:platform="ios" width="768"  height="1004" />
        <!-- retina iPad -->
        <gap:splash src="splash/ios/Default-Landscape_at_2x.png" gap:platform="ios" width="2048" height="1496" />
        <gap:splash src="splash/ios/Default-Portrait_at_2x.png"  gap:platform="ios" width="1536" height="2008" />

## iOS Preferences

* `DisallowOverscroll` (boolean, defaults to `false`): set to `true` if
  you don't want the WebView to rubber-band.

        <preference name="DisallowOverscroll" value="true"/>

* `TopActivityIndicator` (string, defaults to `gray`): this is the top
  spinning throbber in the status/battery bar, valid values are
  `whiteLarge`, `white`, and `gray`.

        <preference name="TopActivityIndicator" value="white"/>

<!-- QUERY I: describe TopActivityIndicator top spinning throbber -->

* `EnableLocation` (boolean, defaults to `false`): set to `true`, to
  initialize the Geolocation plugin at start-up (so the fix on your
  location can be more accurate) __DEPRECATED__: please set the
  `onload` attribute of the `Geolocation` plugin to `true`
  instead.

        <preference name="EnableLocation" value="true"/>

<!-- QUERY I: is deprecated EnableLocation still functional? -->

* `EnableViewportScale` (boolean, defaults to `false`): set to `true` to
  prevent viewport scaling through a meta tag.

        <preference name="EnableViewportScale" value="true"/>

<!-- QUERY I: confirm EnableViewportScale allows viewport metatag to control range of scale, including disabling? -->

<!-- QUERY: Do viewport meta tags work as expected in other environments? -->

* `AutoHideSplashScreen` (boolean, defaults to `true`): set to `false` to
  control when the splashscreen is hidden through a JavaScript API.

        <preference name="AutoHideSplashScreen" value="false"/>

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

<!-- QUERY I: for ShowSplashScreenSpinner describe spinner -->

* `MediaPlaybackRequiresUserAction` (boolean, defaults to `false`): set
  to `true` to not allow autoplayed HTML5 video.

        <preference name="MediaPlaybackRequiresUserAction" value="true"/>

<!-- QUERY I: does MediaPlaybackRequiresUserAction also apply to audio? -->

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

* `HideKeyboardFormAccessoryBar` (boolean, defaults to `false`): set
  to `true` to hide the additional toolbar that is on top of the
  keyboard.  This toolbar features the __Prev__, __Next__, and
  __Done__ buttons.

        <preference name="HideKeyboardFormAccessoryBar" value="true"/>

<!-- QUERY: for HideKeyboardFormAccessoryBar, does form-helper UI only appear when there's >1 input? -->

* `KeyboardShrinksView` (boolean, defaults to `false`): set to `true` to
  shrink the WebView when the keyboard comes up. The WebView shrinks
  instead of the viewport shrinking and the page scrollable. This
  applies to apps that position their elements relative to the bottom
  of the WebView. This is the default behaviour on Android, and makes
  a lot of sense when building apps as opposed to webpages.

        <preference name="KeyboardShrinksView" value="true"/>

<!-- QUERY I: describe KeyboardShrinksView; shrink webview when keyboard appears -->

<!-- QUERY I: is target-device OK? 

 #### Target a Specific Device

* `target-device` with possible values `handset`, `tablet`, or
  `universal`

  * example: `<preference name="target-device" value="universal" />`

  * please note that this currently only applies to iOS builds; by
    default all builds are universal

-->

<!-- QUERY I: Is webviewbounce OK? 

 #### WebView Bounce

* `webviewbounce` with values `true` or `false`

        <preference name="webviewbounce" value="fubar"/>

  * example: `<preference name="webviewbounce" value="false" />`

  * controls whether the screen "bounces" when scrolled beyond the top
    or bottom on iOS. By default, the bounce is _on_

-->

<!-- QUERY I: Is prerendered-icon OK?

 #### Prerendered Icon

* `prerendered-icon` with values `true` or `false`

  * example: `<preference name="prerendered-icon" value="true" />`

  * if icon is prerendered, iOS will not apply it's gloss to the app's
    icon on the user's home screen

  * default is _false_

-->

<!-- QUERY I: Is deprecated stay-in-webview still enabled? 

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

-->

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

## Custom URL Schemes

On iOS, adding a `<gap:url-scheme>` element allows you to register
[custom URL schemes](https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/AdvancedAppTricks/AdvancedAppTricks.html#//apple_ref/doc/uid/TP40007072-CH7-SW50), as in the following example:

        <gap:url-scheme name="com.acme.myscheme" role="None">
          <scheme>pgbr</scheme>
          <scheme>pgbw</scheme>
        </gap:url-scheme>

The optional `name` attribute defaults to the app's bundle id. It must
be unique, otherwise the build fails.  The optional `role` must be
either `Editor`, `Viewer`, `Shell`, or `None`.  At least one `scheme`
must be registered.

