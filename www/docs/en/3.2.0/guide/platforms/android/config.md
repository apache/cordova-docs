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
---

# Android Configuration

The `config.xml` file controls an app's basic settings that apply
across each application and CordovaWebView instance. This section
details preferences that only apply to Android builds. See The
config.xml <a href="../../../cordova/file/fileobj/fileobj.html">File</a> for information on global configuration options.

- `KeepRunning` (boolean, defaults to `true`): Determines whether the
  application stays running in the background even after a `<a href="../../../cordova/events/events.pause.html">pause</a>`
  event fires. Note: setting this to false will not kill the app after
  a <a href="../../../cordova/events/events.pause.html">pause</a> event, it will only halt execution of code in the cordova
  webview while the app is in the background.

        <preference name="KeepRunning" value="false"/>

- `LoadUrlTimeoutValue` (number, default to `20000`, 20 seconds): When loading a
  page, the amount of time to wait before throwing a timeout error.
  This example specifies 10 seconds rather than 20:

        <preference name="LoadUrlTimeoutValue" value="10000"/>

- `SplashScreen`: The name of the file minus its extension in the
  `res/drawable` directory.  Various assets must share this common
  name in various subdirectories.

        <preference name="SplashScreen" value="splash"/>

- `SplashScreenDelay` (number, defaults to `5000`): The amount of
  time the splash screen image displays.

        <preference name="SplashScreenDelay" value="10000"/>

- `<a href="../../../cordova/inappbrowser/inappbrowser.html">InAppBrowser</a><a href="../../../cordova/storage/storage.html">Storage</a>Enabled` (boolean, defaults to `true`): Controls
  whether pages opened within an <a href="../../../cordova/inappbrowser/inappbrowser.html">InAppBrowser</a> can access the same
  local<a href="../../../cordova/storage/storage.html">Storage</a> and WebSQL storage as pages opened with the default
  browser.
