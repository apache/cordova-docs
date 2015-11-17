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
details preferences that only apply to iOS builds. See [The config.xml
File](config_ref_index.md.html#The%20config.xml%20File) for information on global configuration options.

- `EnableViewportScale` (boolean, defaults to `false`): Set to `true`
  to allow a viewport meta tag to either disable or restrict the range
  of user scaling, which is enabled by default.

        <preference name="EnableViewportScale" value="true"/>

  Place a viewport such as the following in the HTML to disable
  scaling and fit content flexibly within the rendering WebView:

        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />

- `MediaPlaybackAllowsAirPlay` (boolean, defaults to `true`):
  Set to `false` to prevent Air Play from being used in this view. Available in default UIWebView and WKWebView.

        <preference name="MediaPlaybackAllowsAirPlay" value="false"/>

- `MediaPlaybackRequiresUserAction` (boolean, defaults to `false`):
  Set to `true` to prevent HTML5 videos or audios from playing
  automatically with the `autoplay` attribute or via JavaScript.

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

- `KeyboardDisplayRequiresUserAction` (boolean, defaults to `true`):
  Set to `false` to allow the keyboard to appear when calling
  `focus()` on form inputs.

        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>

- `SuppressesIncrementalRendering` (boolean, defaults to `false`): Set
  to `true` to wait until all content has been received before it
  renders to the screen.

        <preference name="SuppressesIncrementalRendering" value="true"/>

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

- `UIWebViewDecelerationSpeed` (string, defaults to `normal`): Valid values are `normal`,
  `fast`. This property controls the deceleration speed of momentum scrolling. `normal` is
  the default speed for most native apps, and `fast` is the default for Mobile Safari.

        <preference name="UIWebViewDecelerationSpeed" value="fast" />

- `ErrorUrl` (string, not set by default):
  If set, will display the referenced local page upon an error in the application.

        <preference name="ErrorUrl" value="myErrorPage.html"/>

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

- `target-device` (string, defaults to `universal`): Valid values are `handset`, `tablet`, `universal`
  For targeting a specific device family.  This property maps directly to `TARGETED_DEVICE_FAMILY`
  in the xcode project.
  Note that if you target `universal` (which is the default) you will need to supply screen shots for
  both iPhone and iPad or your app may be rejected.

        <preference name="target-device" value="universal" />

- `deployment-target` (string, not set by default):
  This sets the `IPHONEOS_DEPLOYMENT_TARGET` in the build, which ultimately tranlsates to the `MinimumOSVersion` in the ipa.
  For more details please refer to Apple's documentation on
  [`Deployment Target Settings`](https://developer.apple.com/library/mac/documentation/DeveloperTools/Conceptual/cross_development/Configuring/configuring.html)

        <preference name="deployment-target" value="7.0" />

- `CordovaWebViewEngine` (string, defaults to 'CDVUIWebViewEngine'):
  This sets the WebView engine plugin to be used to render the host app. The plugin must conform to the CDVWebViewEngineProtocol protocol. The 'value' here should match the 'feature' name of the WebView engine plugin that is installed. This preference usually would be set by the WebView engine plugin that is installed, automatically.

        <preference name="CordovaWebViewEngine" value="CDVUIWebViewEngine" />

- `SuppressesLongPressGesture` (boolean, defaults to `false`): Set to `true` to
  avoid iOS9+ rendering a magnifying glass widget when the user longpresses the webview.
  Test your app thoroughly since this may interfere with text selection capabilities.

        <preference name="SuppressesLongPressGesture" value="true" />

- `Suppresses3DTouchGesture` (boolean, defaults to `false`): Set to `true` to
  avoid 3D Touch capable iOS devices rendering a magnifying glass widget when the user
  applies force while longpressing the webview. Test your app thoroughly since this
  disables `onclick` handlers, but plays nice with `ontouchend`.
  If this setting is `true`, `SuppressesLongPressGesture` will effectively be `true` as well.

        <preference name="Suppresses3DTouchGesture" value="true" />
