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

title: Project Settings for iOS
---

[Project Settings](../index.html) for iOS
========================

The `config.xml` settings file controls various settings of Cordova. This is application wide, and not set per CDVViewController instance.
The `config.xml` file is located in your `<project folder>/<appname>` directory.

## &lt;preference&gt;

Various preferences (as **&lt;preference&gt;** tags) default on not breaking existing apps. The available preferences are:

1. **DisallowOverscroll (boolean, defaults to false)** - set to true if you don't want the WebView to rubber-band

2. **TopActivityIndicator (string, defaults to 'gray')** - this is the top spinning throbber in the status/battery bar, valid values are "whiteLarge", "white" and "gray"

3. **EnableLocation (boolean, defaults to false)** - set to true, to initialize the [Geolocation](../../../cordova/geolocation/geolocation.html) plugin at start-up (so the fix on your location can be more accurate) **DEPRECATED**: please set the **onload** attribute of the **Geolocation** plugin to **true** instead.

4. **EnableViewportScale (boolean, defaults to false)** - set to true to prevent viewport scaling through a meta tag

5. **AutoHideSplashScreen (boolean, defaults to true)** - set to false to control when the splashscreen is hidden through a JavaScript API

6. **FadeSplashScreen (boolean, defaults to true)** - set to false to prevent the splash-screen to fade in and out when showing/hiding it.

7. **FadeSplashScreenDuration (float, defaults to 2)** - The splash-screen Fade duration in seconds.

8. **ShowSplashScreenSpinner (boolean, defaults to true)** - set to false to [hide](../../../cordova/splashscreen/splashscreen.hide.html) the splash-screen spinner

9. **MediaPlaybackRequiresUserAction (boolean, defaults to false)** - set to true to not allow autoplayed HTML5 video

10. **AllowInlineMediaPlayback (boolean, defaults to false)** - set to true to allow inline HTML5 media playback, also, the video element in the HTML document must also include the webkit-playsinline attribute

11. **BackupWebStorage (string, defaults to 'cloud')** - valid values are 'none', 'cloud' and 'local'. Set to 'cloud' to allow the web storage data to be backed up to iCloud, and set to 'local' to only allow local backups (iTunes sync). Set to 'none' to not allow any backups of web storage.

12. **KeyboardDisplayRequiresUserAction (boolean, defaults to true)** - set to false to open the keyboard when form elements get focus via the JavaScript focus() call.

13. **SuppressesIncrementalRendering (boolean, defaults to false)** - set to true to wait until all new view content has been received before it is rendered.

14. **HideKeyboardFormAccessoryBar (boolean, defaults to false)** - set to true to [hide](../../../cordova/splashscreen/splashscreen.hide.html) the additional toolbar that is on top of the keyboard (this is the toolbar that has the Prev, Next and Done buttons)

15. **KeyboardShrinksView (boolean, defaults to false)** -  set to true to shrink the WebView when the keyboard comes up. The WebView shrinks instead of the viewport shrinking and the page scrollable. This applies to apps that position their elements relative to the bottom of the WebView. This is the default behaviour on Android, and makes a lot of sense when building apps as opposed to webpages.