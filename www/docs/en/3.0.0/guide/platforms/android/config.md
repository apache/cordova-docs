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

title: Android Configuration
---

# Android Configuration

The `config.xml` file controls various Cordova settings. These apply
across the application, and per CordovaWebView instance.

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
  Cordova stays running in the background. Note: setting this to 
  false will not kill the app after a [pause](../../../cordova/events/events.pause.html) event, it will only 
  halt execution of code in the cordova webview while the app is 
  in the background.

* `splashscreen`: The name of the file minus its extension in the
  `res/drawable` directory.  If you have multiple assets, they all
  must share this common name in their respective directories.

* `disallowOverscroll` (boolean, defaults to `false`): set to `true` to
  disable the glow when a user scrolls beyond the edge of the webview.

## `<plugin>`

Android supports using `<feature>` as analogues to `<plugin>` elements.

