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

title: iOS Configuration
---

# iOS Configuration

The `config.xml` file controls an app's basic settings that apply
across each application and CordovaWebView instance. This section
details preferences that only apply to iOS builds. See The config.xml
[File](../../../cordova/file/fileobj/fileobj.html) for information on global configuration options.

- `EnableViewportScale` (boolean, defaults to `false`): Set to `true`
  to use a viewport meta tag to either disable or restrict the range
  of user scaling. 

        <preference name="EnableViewportScale" value="true"/>

- `MediaPlaybackRequiresUserAction` (boolean, defaults to `false`):
  Set to `true` to prevent HTML5 videos from playing automatically
  with the `autoplay` attribute. Does not apply when calling `play()`
  on a video object.

        <preference name="MediaPlaybackRequiresUserAction" value="true"/>

- `AllowInlineMediaPlayback` (boolean, defaults to `false`): Set to
  `true` to allow HTML5 media playback to appear _inline_ within the
  screen layout, using browser-supplied controls rather than native
  controls. For this to work, add the `webkit-playsinline` attribute
  to any `<video>` elements.

        <preference name="AllowInlineMediaPlayback" value="true"/>

- `BackupWebStorage` (string, either `none`, `local`, or the default
  `cloud`): Set to `cloud` to allow web storage data to backup via
  iCloud. Set to `local` to allow only local backups via iTunes
  sync. Set to `none` prevent web storage backups.

        <preference name="BackupWebStorage" value="local"/>

- `TopActivityIndicator` (string, defaults to `gray`): Controls the
  appearance of the small spinning icon in the status bar that
  indicates significant processor activity.  Valid values are
  `whiteLarge`, `white`, and `gray`.

        <preference name="TopActivityIndicator" value="white"/>

- `FadeSplashScreen` (boolean, defaults to `true`): Set to `false` to
  prevent the splash screen from fading in and out when its display
  state changes.

        <preference name="FadeSplashScreen" value="false"/>

- `FadeSplashScreenDuration` (float, defaults to `2`): Specifies the
  number of seconds for the splash screen fade effect to execute.

        <preference name="FadeSplashScreenDuration" value="4"/>

- `ShowSplashScreenSpinner` (boolean, defaults to `true`): Set to `false`
  to hide the splash-screen spinner.

        <preference name="ShowSplashScreenSpinner" value="false"/>

- `KeyboardDisplayRequiresUserAction` (boolean, defaults to `true`):
  Set to `false` to allow the keyboard to appear when calling
  `focus()` on form inputs.

        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>

- `SuppressesIncrementalRendering` (boolean, defaults to `false`): Set
  to `true` to wait until all content has been received before it
  renders to the screen.

        <preference name="SuppressesIncrementalRendering" value="true"/>

- `KeyboardShrinksView` (boolean, defaults to `false`): Set to `true`
  to scale down the webview when the keyboard appears, overriding the
  default beavior that shrinks the viewport vertically. This matches
  the default behaviour for Android apps.

        <preference name="KeyboardShrinksView" value="true"/>

- `GapBetweenPages` (float, defaults to `0`): The size of the gap, in points, between pages.

        <preference name="GapBetweenPages" value="0"/>

- `PageLength` (float, defaults to `0`): The size of each page, in points, in the 
  direction that the pages flow. When PaginationMode is right to left or left to right, 
  this property represents the width of each page. When PaginationMode is topToBottom 
  or bottomToTop, this property represents the height of each page. The default value 
  is 0, which means the layout uses the size of the viewport to determine the dimensions
  of the page.

        <preference name="PageLength" value="0"/>

- `PaginationBreakingMode` (string, defaults to `page`): Valid values are `page` and 
  `column`.The manner in which column- or page-breaking occurs. This property 
  determines whether certain CSS properties regarding column- and page-breaking are 
  honored or ignored. When this property is set to `column`,  the content respects
  the CSS properties related to column-breaking in place of page-breaking.

        <preference name="PaginationBreakingMode" value="page"/>

- `PaginationMode` (string, defaults to `unpaginated`): Valid values are `unpaginated`,
  `leftToRight`, `topToBottom`, `bottomToTop`, and `rightToLeft`. This property determines 
  whether content in the web view is broken up into pages that fill the view one screen 
  at a time, or shown as one long scrolling view. If set to a paginated form, this 
  property toggles a paginated layout on the content, causing the web view to use the 
  values of PageLength and GapBetweenPages to relayout its content.

        <preference name="PaginationMode" value="unpaginated"/>

