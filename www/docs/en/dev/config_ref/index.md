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

title: Config.xml
---

# Config.xml

Config.xml is a global configuration file that controls many aspects
of a cordova application's behavior. This
platform-agnostic XML file is arranged based on the W3C's [Packaged
Web Apps (Widgets)](http://www.w3.org/TR/widgets/) specification, and
extended to specify core Cordova API features, plugins, and
platform-specific settings.

For projects created with the Cordova CLI (described in [The
Command-Line Interface](../guide/cli/index.html)), this file can be found in the top-level
directory:

        app/config.xml

Note that before version 3.3.1-0.2.0, the file existed at `app/www/config.xml`,
and that having it here is still supported.

When using the CLI to build a project, versions of this file are
passively copied into various `platforms/` subdirectories.
For example:

        app/platforms/ios/AppName/config.xml
        app/platforms/blackberry10/www/config.xml
        app/platforms/android/res/xml/config.xml

In addition to the various configuration options detailed below, you
can also configure an application's core set of images for each target
platform. See [Customize icons topic](images.html) for more information.

# widget
   Root element of the config.xml document.

   Attributes(type) | Description
   ---------------- | ------------
   id(string) | *Required* <br/> Specifies the app's reverse-domain identifier, and the `version` its full version number expressed in major/minor/patch notation.
   version(string) | *Required* <br/> Full version number expressed in major/minor/patch notation.
   android-versionCode(string) | ==Android== <br/> Alternative version for Android. Sets the [version code](http://developer.android.com/tools/publishing/versioning.html) for the application. See [the Android guide](../guide/platforms/android/index.html#setting-the-version-code) for information on how this attribute may be modified.
   ios-CFBundleVersion(string) |  ==iOS== <br/> Alternative version for iOS. For further details, see [iOS versioning](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-102364).
   osx-CFBundleVersion(string) |  ==OS X== <br/> Alternative version for OS X. For further details, see [OS X versioning](https://developer.apple.com/library/prerelease/mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-102364).
   packageVersion(string) |   ==Windows== <br/> Alternative version for Windows. For futher details, see [Windows versioning](https://msdn.microsoft.com/en-us/library/windows/apps/br211441.aspx)
   packageName(string) | *Default: Cordova.Example* <br/> ==Windows== <br/> Package name for Windows.
   xmlns(string) | *Required* <br/> Namespace for the config.xml document.
   xmlns:cdv(string) | *Required* <br/> Namespace prefix.

   Examples:

    <widget id="io.cordova.hellocordova" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    </widget>

    <!-- Android -->
    <widget android-versionCode="0.1.3">
    </widget>

    <!-- iOS -->
    <widget ios-CFBundleVersion="0.1.3">
    </widget>

    <!-- Windows -->
    <widget packageVersion="0.1.3">
    </widget>

    <!-- OS X -->
    <widget osx-CFBundleVersion="0.1.3">
    </widget>

## name
   Specifies the app's formal name, as it appears on the device's home screen and within app-store interfaces.

   Examples:

    <widget ...>
        <name>HelloCordova</name>
    </widget>

## description
   Specifies metadata that may appear within app-store listings.

   Examples:

    <widget ...>
        <description>A sample Apache Cordova application</description>
    </widget>


## author
   Specifies contact information that may appear within app-store lisitngs.

   Attributes(type) | Description
   ----------------- | ------------
   email(string) | *Required* <br/> Email of the author.
   href(string) | *Required* <br/> Website of the author.

   Examples:

    <widget ...>
        <author email="dev@cordova.apache.org" href="http://cordova.io"></author>
    </widget>


## content
   Defines the app's starting page in the top-level web assets directory. The default value is index.html, which customarily
   appears in a project's top-level ```www``` directory.

   Attributes(type) | Description
   ----------------- | ------------
   src(string) | *Required* <br/> Defines the app's starting page in the top-level web assets directory. The default value is index.html, which customarily
   appears in a project's top-level ```www``` directory.

   Examples:

    <widget ...>
        <content src="startPage.html"></content>
    </widget>


## access
   Defines the set of external domains the app is allowed to communicate with. The default value shown above allows it to access any server.
   See the Domain [Whitelist Guide](../guide/appdev/whitelist/index.html) for details.

   Attributes(type) | Description
   ----------------- | ------------
   origin(string) | *Required* <br/> Defines the set of external domains the app is allowed to communicate with.
   The default value shown above allows it to access any server.
   See the Domain [Whitelist Guide](../guide/appdev/whitelist/index.html) for details.

   Examples:

    <widget ...>
        <access origin="*"></content>
    </widget>

    <widget ...>
        <access origin="http://google.com"></content>
    </widget>


## allow-navigation
   Controls which URLs the WebView itself can be navigated to. Applies to top-level navigations only.

   Attributes(type) | Description
   ----------------- | ------------
   href(string) | *Required* <br/> Defines the set of external domains the WebView is allowed to navigate to.
   See the cordova-plugin-whitelist [cordova-plugin-whitelist](../cordova-plugin-whitelist/index.html#navigation-whitelist) for details.

   Examples:

    <!-- Allow links to example.com -->
    <allow-navigation href="http://example.com/*" />

    <!-- Wildcards are allowed for the protocol, as a prefix to the host, or as a suffix to the path -->
    <allow-navigation href="*://*.example.com/*" />

## allow-intent
   Controls which URLs the app is allowed to ask the system to open. By default, no external URLs are allowed.

   Attributes(type) | Description
   ----------------- | ------------
   href(string) | *Required* <br/> Defines which URLs the app is allowed to ask the system to open.
   See the cordova-plugin-whitelist [cordova-plugin-whitelist](../cordova-plugin-whitelist/index.html#intent-whitelist) for details.

   Examples:

    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    <allow-intent href="tel:*" />
    <allow-intent href="sms:*" />

## engine
   Specifies what platform to restore during a prepare. For more details, see the [Platforms & Plugins Version Management](../platform_plugin_versioning_ref/index.html).

   Attributes(type) | Description
   ----------------- | ------------
   name(string) | *Required* <br/> Name of the platform to be restored
   spec(string) | *Required* <br/> Version of the platform to be restored

   Examples:

    <engine name="android" spec="^4.0.0" />

## preference
   Sets various options as pairs of name/value attributes. Each preference's name is case-insensitive. Many preferences are unique to specific platforms,
   and will be indicated as such.

   Attributes(type) | Description
   ----------------- | ------------
   AllowInlineMediaPlayback(boolean) | *Default: false* <br/> ==iOS== <br/> Set to true to allow HTML5 media playback to appear inline within the screen layout, using browser-supplied controls rather than native controls. For this to work, add the webkit-playsinline attribute to any ```<video>``` elements.
   AndroidLaunchMode(string) | *Default: singleTop* <br/> Allowed values: standard, singleTop, singleTask, singleInstance <br/> ==Android== <br/> Sets the Activity android:launchMode attribute. This changes what happens when the app is launched from app icon or intent and is already running.
   android-maxSdkVersion(integer) | *Default: Not Specified* <br/> ==Android== <br/> Sets the `maxSdkVersion` attribute of the `<uses-sdk>` tag in the project's `AndroidManifest.xml` (see [here][uses-sdk]).
   android-minSdkVersion(integer) | *Default: Dependent on cordova-android Version* <br/> ==Android== <br/> Sets the `minSdkVersion` attribute of the `<uses-sdk>` tag in the project's `AndroidManifest.xml` (see [here][uses-sdk]).
   android-targetSdkVersion(integer) | *Default: Dependent on cordova-android Version* <br/> ==Android== <br/> Sets the `targetSdkVersion` attribute of the `<uses-sdk>` tag in the project's `AndroidManifest.xml` (see [here][uses-sdk]).
   AppendUserAgent(string) | ==Android== <br/> If set, the value will append to the end of old UserAgent of webview. When using with OverrideUserAgent, this value will be ignored.
   AppendUserAgent(string) | ==iOS== <br/> If set, the value will append to the end of old UserAgent of webview. When using with OverrideUserAgent, this value will be ignored.
   BackgroundColor(string) | ==Android== ==BlackBerry== ==Windows== <br/> Supports a four-byte hex value, with the first byte representing the alpha channel, and standard RGB values for the following three bytes.
   BackupWebStorage(string) | *Default: cloud* <br/> Allowed values: none, local, cloud. <br/> ==iOS== <br/>  Set to cloud to allow web storage data to backup via iCloud. Set to local to allow only local backups via iTunes sync. Set to none prevent web storage backups.
   ChildBrowser(string) | *Default: enable* <br/> ==BlackBerry== <br/> Disables child browser windows. By default, apps launch a secondary browser window to display resources accessed via window.open() or by specifying a _blank anchor target. Specify disable to override this default behavior.
   CordovaWebViewEngine(string) | *Default: CDVUIWebViewEngine* <br/> ==iOS== <br/> This sets the WebView engine plugin to be used to render the host app. The plugin must conform to the CDVWebViewEngineProtocol protocol. The 'value' here should match the 'feature' name of the WebView engine plugin that is installed. This preference usually would be set by the WebView engine plugin that is installed, automatically.
   DefaultVolumeStream(string) | *Default: default* <br/> ==Android==<br/> Added in cordova-android 3.7.0, This preference sets which volume the hardware volume buttons link to. By default this is "call" for phones and "media" for tablets. Set this to "media" to have your app's volume buttons always change the media volume. Note that when using Cordova's media plugin, the volume buttons will dynamically change to controlling the media volume when any Media objects are active.
   DisallowOverscroll(boolean) | *Default: false* <br/> ==iOS== ==Android== <br/> Set to **true** if you don't want the interface to display any feedback when users scroll past the beginning or end of content. On iOS, overscroll gestures cause content to bounce back to its original position. on Android, they produce a more subtle glowing effect along the top or bottom edge of the content. <br/>
   EnableViewportScale(boolean) | *Default: false* <br/>  ==iOS== <br/> Set to true to allow a viewport meta tag to either disable or restrict the range of user scaling, which is enabled by default. Place a viewport such as the following in the HTML to disable scaling and fit content flexibly within the rendering WebView: <br/> ```<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />```
   EnableWebGL(boolean) | *Default: false* <br/>  ==OS X **4.0.0**== <br/> Set to true to enable WebGL on the web view.
   ErrorUrl(URL) | *Default: null* <br/> ==Android== <br/> If set, will display the referenced page upon an error in the application instead of a dialog with the title "Application Error".
   ErrorUrl(string) | ==iOS== <br/> If set, will display the referenced local page upon an error in the application.
   FullScreen(boolean) | *Default: false* <br/> Allows you to hide the status bar at the top of the screen.
   GapBetweenPages(float) | *Default: 0* <br/> ==iOS== <br/> The size of the gap, in points, between pages.
   HideKeyboardFormAccessoryBar(boolean) | *Default: false* <br/> ==BlackBerry== <br/> Set to true to hide the additional toolbar that appears above the keyboard, helping users navigate from one form input to another.
   HideMousePointer(integer) | *Default: -1* <br/> ==OS X **4.0.0**== <br/> Sets the timeout for hiding the mouse pointer. Set to 0 for immediate, set to -1 for never.
   InAppBrowserStorageEnabled (boolean) | *Default: true* <br/> ==Android== <br/> Controls whether pages opened within an InAppBrowser can access the same localStorage and WebSQL storage as pages opened with the default browser.
   KeepRunning(boolean) | *Default: true* <br/> ==Android== <br/> Determines whether the application stays running in the background even after a [pause](../../../cordova/events/events.pause.html) event fires. Setting this to false does not kill the app after a [pause](../../../cordova/events/events.pause.html) event, but simply halts execution of code within the cordova webview while the app is in the background.
   KeyboardDisplayRequiresUserAction(boolean) | *Default: true* <br/> ==iOS== <br/> Set to false to allow the keyboard to appear when calling focus() on form inputs.
   LoadUrlTimeoutValue(number in milliseconds) | *Default: 20000, 20 seconds* <br/> ==Android== <br/> When loading a page, the amount of time to wait before throwing a timeout error.
   LoadingDialog(string) | *Default: null* <br/> ==Android== <br/> If set, displays a dialog with the specified title and message, and a spinner, when loading the first page of an application. The title and message are separated by a comma in this value string, and that comma is removed before the dialog is displayed.
   LogLevel(string) | *Default: ERROR* <br/> Allowed values: ERROR, WARN, INFO, DEBUG, VERBOSE <br/> ==Android== <br/> Sets the minimum log level through which log messages from your application will be filtered.
   MediaPlaybackAllowsAirPlay(boolean) | *Default: true* <br/> ==iOS== <br/> Set to false to prevent Air Play from being used in this view. Available in default UIWebView and WKWebView.
   MediaPlaybackRequiresUserAction(boolean) | *Default: false* <br/> ==iOS== <br/> Set to true to prevent HTML5 videos or audios from playing automatically with the autoplay attribute or via JavaScript.
   Min/Max Version(Regex) | ==Windows== <br/> Allowed values: **/(Microsoft.+? &#124; Windows.+?)-(MinVersion &#124; MaxVersionTested)/i** <br/> Identifies the ecosystems and their min/max versions the app is compatible with. There are three parts to each value: the **SDK**, the **version restriction**, and the **version value**.  These preferences are detected by beginning with `Windows` or `Microsoft` and ending in `-MinVersion` or `-MaxVersionTested`: <ul><li>The **SDK** defines what specialized platform you want to target.  The default is `Windows.Universal`.  Valid values for these are defined in the AppxManifest schema, in the `Package/Depednencies/TargetPlatform` elements.</li><li>The **version restriction** defines application compatibility rules.  For example, if the `-MinVersion` is set to 10.1.0.0, then OS versions which don't support at least 10.1.0.0 of the corresponding SDK won't be able to load it. Similarly you can also use `-MaxVersionTested` which specifies the highest-tested version of the SDK. If a new version of the corresponding SDK is released, it will run in compatibility mode for the specified version.</li><li>The **version value** is a 4-integer tuple in the form of *major.minor.build.qfe*.</li></ul> If no preferences of these types are specified in your config.xml file, then Windows.Universal version 10.0.0.0 will be chosen by default.
   Orientation(string) | *Default: default* <br/> Allowed values: default, landscape, portait <br/> Allows you to lock orientation and prevent the interface from rotating in response to changes in orientation. <br/> **NOTE:** The default value means Cordova will strip the orientation preference entry from the platform's manifest/configuration file allowing the platform to fallback to its default behavior. For iOS, to specify both portrait & landscape mode you would use the platform specific value 'all'.
   OSXLocalStoragePath(string) | ==OS X **4.0.0**== <br/> *Default: `~/Library/Application Support/{bundle.id}`* <br/> Sets the directory for the local storage path.
   OverrideUserAgent(string) | ==Android== <br/> If set, the value will replace the old UserAgent of webview. It is helpful to identify the request from app/browser when requesting remote pages. Use with caution, this may causes compitiable issue with web servers. For most cases, use AppendUserAgent instead.
   PageLength(float) | *Default: 0* <br/> ==iOS== <br/> The size of each page, in points, in the direction that the pages flow. When PaginationMode is right to left or left to right, this property represents the width of each page. When PaginationMode is topToBottom or bottomToTop, this property represents the height of each page. The default value is 0, which means the layout uses the size of the viewport to determine the dimensions of the page.
   PaginationBreakingMode(string) | *Default: page* <br/> Allowed values: page, column <br/> ==iOS== <br/> Valid values are page and column.The manner in which column- or page-breaking occurs. This property determines whether certain CSS properties regarding column- and page-breaking are honored or ignored. When this property is set to column, the content respects the CSS properties related to column-breaking in place of page-breaking.
   PaginationMode(string) | *Default: unpaginated* <br/> Allowed values: unpaginated, leftToRight, topToBottom, bottomToTop, rightToLeft <br/> ==iOS== <br/> This property determines whether content in the web view is broken up into pages that fill the view one screen at a time,or shown as one long scrolling view. If set to a paginated form, this property toggles a paginated layout on the content, causing the web view to use the values of PageLength and GapBetweenPages to relayout its content.
   PopupBlocker(string) | *Default: enable* <br/> ==BlackBerry== <br/> Enables the popup blocker, which prevents calls to window.open(). By default, popups display in a child browser window. Setting the preference to enable prevents it from displaying at all.
   SetFullscreen(boolean) | *Default: false* <br/> ==Android== <br/> Same as the Fullscreen parameter in the global configuration of this xml file. This Android-specific element is deprecated in favor of the global Fullscreen element, and will be removed in a future version.
   ShowTitle(boolean) | *Default: false* <br/> ==Android== <br/> Show the title at the top of the screen.
   Suppresses3DTouchGesture(boolean) | *Default: false* <br/> ==iOS== <br/> Set to true to avoid 3D Touch capable iOS devices rendering a magnifying glass widget when the user applies force while longpressing the webview. Test your app thoroughly since this disables onclick handlers, but plays nice with ontouchend. If this setting is true, SuppressesLongPressGesture will effectively be true as well.
   SuppressesIncrementalRendering(boolean) | *Default: false* <br/> ==iOS== <br/> Set to true to wait until all content has been received before it renders to the screen.
   SuppressesLongPressGesture(boolean) | *Default: false* <br/> ==iOS== <br/> Set to true to avoid iOS9+ rendering a magnifying glass widget when the user longpresses the webview. Test your app thoroughly since this may interfere with text selection capabilities.
   TopActivityIndicator(string) | *Default: gray* <br/> Allowed values: whiteLarge, white, gray. <br/> ==iOS== <br/>  <br/> Controls the appearance of the small spinning icon in the status bar that indicates significant processor activity.
   UIWebViewDecelerationSpeed(string) | *Default: normal* <br/> Allowed values: normal, fast <br/> ==iOS== <br/> This property controls the deceleration speed of momentum scrolling. normal is the default speed for most native apps, and fast is the default for Mobile Safari.
   WebSecurity(string) | *Default: enable* <br/> ==BlackBerry== <br/> Set to disable to override web security settings, allowing access to remote content from unknown sources. This preference is intended as a development convenience only, so remove it before packaging the app for distribution. For the released app, all URIs should be known and whitelisted using the <access> element, described in the Domain Whitelist Guide.
   WindowSize(string) | *Default: auto* <br/> ==OS X **4.0.0**== <br/> Sets the size of the application window. <br/> Accepts the format `WxH` for a specific width and height or the special values `auto` and `fullscreen`. The latter will open a borderless window spanning the entire desktop area. Please note, that this is different from the _normal_ OS X fullscreen mode, which would never span multiple displays. <br/> **Note**: The global cordova `fullscreen` preference has no effect in OS X.
   deployment-target(string) | ==iOS== <br/> This sets the IPHONEOS_DEPLOYMENT_TARGET in the build, which ultimately tranlsates to the MinimumOSVersion in the ipa. For more details please refer to Apple's documentation on Deployment Target Settings
   target-device(string) | *Default: universal* <br/> Allowed values: handset, tablet, universal <br/> ==iOS== <br/> This property maps directly to TARGETED_DEVICE_FAMILY in the xcode project. Note that if you target universal (which is the default) you will need to supply screen shots for both iPhone and iPad or your app may be rejected.
   windows-phone-target-version(string) | ==Windows== <br/> Sets the version of Windows Phone for which the package (resulting from ```cordova build```) will target. If none is specified, it will be set to the same version as ```windows-target-version``` (if found).
   windows-target-version(string) | ==Windows== <br/> Sets the version of Windows for which the package (resulting from ```cordova build```) will target. If none is specified, it will be set to '8.1'.
   WindowsDefaultUriPrefix(string) | ==Windows== <br/> Allowed values: `ms-appx://`, `ms-appx-web://` <br/>  Identifies whether you want your app to target the local context or remote context as its startup URI. When building for Windows 10, the default is the remote context (`ms-appx-web://`). <br/> In order to have a local-mode application that is not impacted by Remote Mode capability restrictions, you must set this preference to `ms-appx://` and not declare any `<access>` elements with remote URIs. The local mode is the default for Windows 8.1

   Examples:

    <preference name="DisallowOverscroll" value="true"/>
    <preference name="Fullscreen" value="true" />
    <preference name="BackgroundColor" value="0xff0000ff"/>
    <preference name="HideKeyboardFormAccessoryBar" value="true"/>
    <preference name="Orientation" value="landscape" />

    <!-- iOS only preferences -->
    <preference name="EnableViewportScale" value="true"/>
    <preference name="MediaPlaybackAllowsAirPlay" value="false"/>
    <preference name="MediaPlaybackRequiresUserAction" value="true"/>
    <preference name="AllowInlineMediaPlayback" value="true"/>
    <preference name="BackupWebStorage" value="local"/>
    <preference name="TopActivityIndicator" value="white"/>
    <preference name="SuppressesIncrementalRendering" value="true"/>
    <preference name="GapBetweenPages" value="0"/>
    <preference name="PageLength" value="0"/>
    <preference name="PaginationBreakingMode" value="page"/>
    <preference name="PaginationMode" value="unpaginated"/>
    <preference name="UIWebViewDecelerationSpeed" value="fast" />
    <preference name="ErrorUrl" value="myErrorPage.html"/>
    <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />
    <preference name="AppendUserAgent" value="My Browser" />
    <preference name="target-device" value="universal" />
    <preference name="deployment-target" value="7.0" />
    <preference name="CordovaWebViewEngine" value="CDVUIWebViewEngine" />
    <preference name="SuppressesLongPressGesture" value="true" />
    <preference name="Suppresses3DTouchGesture" value="true" />

    <!-- Android only preferences -->
    <preference name="KeepRunning" value="false"/>
    <preference name="LoadUrlTimeoutValue" value="10000"/>
    <preference name="InAppBrowserStorageEnabled" value="true"/>
    <preference name="LoadingDialog" value="My Title,My Message"/>
    <preference name="ErrorUrl" value="myErrorPage.html"/>
    <preference name="ShowTitle" value="true"/>
    <preference name="LogLevel" value="VERBOSE"/>
    <preference name="AndroidLaunchMode" value="singleTop"/>
    <preference name="DefaultVolumeStream" value="call" />
    <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />
    <preference name="AppendUserAgent" value="My Browser" />

    <!-- Windows only preferences -->
    <preference name="windows-phone-target-version" value="8.1" />
    <preference name="windows-target-version" value="8.1" />
    <preference name="Windows.Universal" value="10.0.10240.0" />
    <preference name="WindowsDefaultUriPrefix" value="ms-appx://"" />
    <preference name="Windows.Mobile-MaxVersionTested" value="10.0.10031.0" />
    <preference name="Windows.Universal-MinVersion" value="10.0.0.0" />

    <!-- BlackBerry only preferences -->
    <preference name="ChildBrowser" value="disable"/>
    <preference name="PopupBlocker" value="enable"/>
    <preference name="WebSecurity" value="disable"/>

    <!-- OS X only preferences -->
    <preference name="HideMousePointer" value="5"/>
    <preference name="OSXLocalStoragePath" value="~/.myapp/database"/>
    <preference name="WindowSize" value="800x400"/>
    <preference name="EnableWebGL" value="true"/>

## feature
   If you use the CLI to build applications, you use the plugin command to enable device APIs. This does not modify the top-level config.xml file, so the <feature> element does not apply to your workflow. If you work directly in an SDK and using the platform-specific config.xml file as source, you use the <feature> tag to enable device-level APIs and external plugins. They often appear with custom values in platform-specific config.xml files. See the API Reference for details on how to specify each feature. See
   the [Plugin Development Guide](../guide/hybrid/plugins/index.html) for more information on plugins.
   NOTE: Most of the time, you do NOT want to set this directly.

   Attributes(type) | Description
   ----------------- | ------------
   name(string) | *Required* <br/> The name of the plugin to enable.


### param
   Used to specify what certain plugin parameters such as: what package to retrieve the plugin code from, and whether the plugin code is to be initialized during the Webview's initialization.

   Attributes(type) | Description
   ----------------- | ------------
   name(string) | *Required* <br/> Allowed values: android-package, ios-package, osx-package, onload. <br/> ==iOS== ==OS X== ==Android== <br/> 'ios-package', 'osx-package' and 'android-package' are used to specify the name of the package (as specified by the 'value' attribute) to be used to initialize the plugin code, while 'onload' is used to specify whether the corresponding plugin (as specified in the 'value' attribute) is to be instantiated when the controller is initialized.
   value(string or boolean) | *Required* <br/> ==iOS== ==OS X== ==Android== <br/> Specifies the name of the package to be used to initialize the plugin code (when the 'name' attribute is android-package, ios-package or osx-package), specifies the name of the plugin to be loaded during controller initialization (when 'name' attribute is set to 'onload').


   Examples:

    <!-- Here is how to specify the Device API for Android projects -->
    <feature name="Device">
        <param name="android-package" value="org.apache.cordova.device.Device" />
    </feature>

    <!-- Here's how the element appears for iOS projects -->
    <feature name="Device">
        <param name="ios-package" value="CDVDevice" />
        <param name="onload" value="true" />
    </feature>

    <!-- Here's how the element appears for OS X projects -->
    <feature name="Device">
        <param name="osx-package" value="CDVDevice" />
        <param name="onload" value="true" />
    </feature>


## platform
   When using the CLI to build applications, it is sometimes necessary to specify preferences or other elements specific to a particular platform. Use the <platform> element to specify configuration that should only appear in a single platform-specific config.xml file.

   Attributes(type) | Description
   ----------------- | ------------
   name(string) | *Required* <br/> The platform whose preferences are being defined.

   Examples:

    <platform name="android">
        <preference name="Fullscreen" value="true" />
    </platform>

## hook
   Represents your custom script which will be called by Cordova when
   certain action occurs (for example, after plugin is added or platform
   prepare logic is invoked). This is useful when you need to extend
   default Cordova functionality. See [Hooks Guide](../guide/appdev/hooks/index.html) for more information.

   Attributes(type) | Description
   ----------------- | ------------
   type(string) | *Required* <br/> Specifies the action during which the custom script is to be called.
   src(string) | *Required* <br/> Specifies the location of the script to be called when a specific action occurs.

   Examples:

    <hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />

# Sample config.xml
  Below is a sample config.xml file:

    <?xml version='1.0' encoding='utf-8'?>
    <widget id="io.cordova.hellocordova" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
        <name>HelloCordova</name>
        <description>
            A sample Apache Cordova application that responds to the deviceready event.
        </description>
        <author email="dev@cordova.apache.org" href="http://cordova.io">
            Apache Cordova Team
        </author>
        <content src="index.html" />
        <plugin name="cordova-plugin-whitelist" version="1" />
        <access origin="*" />
        <allow-intent href="http://*/*" />
        <allow-intent href="https://*/*" />
        <allow-intent href="tel:*" />
        <allow-intent href="sms:*" />
        <allow-intent href="mailto:*" />
        <allow-intent href="geo:*" />
        <platform name="android">
            <allow-intent href="market:*" />
        </platform>
        <platform name="ios">
            <allow-intent href="itms:*" />
            <allow-intent href="itms-apps:*" />
        </platform>
    </widget>


[uses-sdk]: http://developer.android.com/guide/topics/manifest/uses-sdk-element.html
