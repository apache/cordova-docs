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

The `config.xml` file controls an app's basic settings that apply
across each application and CordovaWebView instance. This section
details preferences that only apply to Android builds. See [The config.xml
File](config_ref_index.md.html#The%20config.xml%20File) for information on global configuration options.

- `KeepRunning` (boolean, defaults to `true`): Determines whether the
  application stays running in the background even after a `[pause](../../../cordova/events/events.pause.html)`
  event fires. Setting this to `false` does not kill the app after a
  `[pause](../../../cordova/events/events.pause.html)` event, but simply halts execution of code within the cordova
  webview while the app is in the background.

        <preference name="KeepRunning" value="false"/>

- `LoadUrlTimeoutValue` (number in milliseconds, default to `20000`,
  20 seconds): When loading a page, the amount of time to wait before throwing
  a timeout error. This example specifies 10 seconds rather than 20:

        <preference name="LoadUrlTimeoutValue" value="10000"/>

- `SplashScreen` (string, defaults to `splash`): The name of the file minus
  its extension in the `res/drawable` directory.  Various assets must share
  this common name in various subdirectories.

        <preference name="SplashScreen" value="mySplash"/>

- `SplashScreenDelay` (number in milliseconds, defaults to `3000`): The amount
  of time the splash screen image displays.

        <preference name="SplashScreenDelay" value="10000"/>

- `InAppBrowserStorageEnabled` (boolean, defaults to `true`): Controls
  whether pages opened within an InAppBrowser can access the same
  localStorage and WebSQL storage as pages opened with the default
  browser.

        <preference name="InAppBrowserStorageEnabled" value="true"/>

- `LoadingDialog` (string, defaults to `null`): If set, displays a dialog with
  the specified title and message, and a spinner, when loading the first
  page of an application. The title and message are separated by a comma
  in this value string, and that comma is removed before the dialog is
  displayed.

        <preference name="LoadingDialog" value="My Title,My Message"/>

- `LoadingPageDialog` (string, defaults to `null`): The same as `LoadingDialog`,
  but for loading every page after the first page in the application.

        <preference name="LoadingPageDialog" value="My Title,My Message"/>

- `ErrorUrl` (URL, defaults to `null`):
  If set, will display the referenced page upon an error in the application
  instead of a dialog with the title "Application Error".

        <preference name="ErrorUrl" value="myErrorPage.html"/>

- `ShowTitle` (boolean, defaults to `false`): Show the title at the top
  of the screen.

        <preference name="ShowTitle" value="true"/>

- `LogLevel` (string, defaults to `ERROR`): Sets the minimum log level
  through which log messages from your application will be filtered. Valid
  values are `ERROR`, `WARN`, `INFO`, `DEBUG`, and `VERBOSE`.

        <preference name="LogLevel" value="VERBOSE"/>

- `SetFullscreen` (boolean, defaults to `false`): Same as the `Fullscreen`
  parameter in the global configuration of this xml file. This Android-specific
  element is deprecated in favor of the global `Fullscreen` element, and will
  be removed in a future version.

- `AndroidLaunchMode` (string, defaults to `singleTop`): Sets the Activity
  `android:launchMode` attribute.  This changes what happens when the app is
  launched from app icon or intent and is already running.
  Valid values are `standard`, `singleTop`, `singleTask`, `singleInstance`.

        <preference name="AndroidLaunchMode" value="singleTop"/>

- `DefaultVolumeStream` (string, defaults to `default`, added in cordova-android 3.7.0): Sets which volume
  the hardware volume buttons link to. By default this is "call" for phones
  and "media" for tablets. Set this to "media" to have your app's volume
  buttons always change the media volume. Note that when using Cordova's
  media plugin, the volume buttons will dynamically change to controlling
  the media volume when any Media objects are active.

- `OverrideUserAgent` (string, not set by default):
  If set, the value will replace the old UserAgent of webview.
  It is helpful to identify the request from app/browser when requesting remote pages.
  Use with caution, this may causes compitiable issue with web servers.
  For most cases, use AppendUserAgent instead.

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />

- `AppendUserAgent` (string, not set by default):
  If set, the value will append to the end of old UserAgent of webview.
  When using with OverrideUserAgent, this value will be ignored.

        <preference name="AppendUserAgent" value="My Browser" />


