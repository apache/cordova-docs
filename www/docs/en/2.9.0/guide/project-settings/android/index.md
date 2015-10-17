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

title: Project Settings for Android
---

[Project Settings](../index.html) for Android
===================================

The `config.xml` settings file controls various settings of Cordova. This is application wide, and not set per CordovaWebView Instance.

## &lt;preference&gt;

Various **other** preferences (as **&lt;preference&gt;** tags) default on not breaking existing apps. The available preferences are:

1. **useBrowserHistory (boolean, defaults to true)** - set to false if you want to use the history shim that was used to work around the hashtag error present in Android 3.x prior to the history fix.  (Note: This setting will be deprecated in April 2013)
2. **loadingDialog** - Display a native loading dialog when loading the app. The value's format is _Title, Message_
3. **loadingPageDialog** - Display a native loading dialog when loading sub-pages. The value's format is _Title, Message_
4. **errorUrl** - Set the error page for your application. Should be located in your Android project in file://android_asset/www/
5. **backgroundColor** - Set the background color for your application.  Supports a four-byte hex value, with the first byte representing alpha value, and the following three bytes with standard RGB values. (i.e. 0x00000000 = Black)
6. **loadUrlTimeoutValue** - How much time Cordova should wait before throwing a timeout error on the application.
7. **keepRunning (boolean, defaults to true)** - Determines whether Cordova will keep running in the background or not
8. **splashscreen** - The name of the file minus its extension in the res/drawable directory.  If you have multiple assets, they all must share this common name in their respective directories.
9. **disallowOverscroll (boolean, defaults to false)** - set to true if you want to disable the glow when a user scrolls beyond the edge of the webview.

## &lt;plugin&gt;

Android supports using &lt;feature&gt; as analogues to &lt;plugin&gt; elements.
