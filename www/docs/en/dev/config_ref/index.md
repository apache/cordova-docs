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
description: List of supported tags in the config.xml file.
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

```
app/config.xml
```

Note that before version 3.3.1-0.2.0, the file existed at `app/www/config.xml`,
and that having it here is still supported.

When using the CLI to build a project, versions of this file are
passively copied into various `platforms/` subdirectories.
For example:

```
app/platforms/ios/AppName/config.xml
app/platforms/android/res/xml/config.xml
```

In addition to the various configuration options detailed below, you
can also configure an application's core set of images for each target
platform. See [Customize icons topic](images.html) for more information.

# widget
Root element of the config.xml document.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
id(string) | *Required* <br/> Specifies the app's reverse-domain identifier.
version(string) | *Required* <br/> Full version number expressed in major/minor/patch notation.
android-versionCode(string) <br/> ==Android== | Alternative version for Android. Sets the [version code](http://developer.android.com/tools/publishing/versioning.html) for the application. See [the Android guide](../guide/platforms/android/index.html#setting-the-version-code) for information on how this attribute may be modified.
ios-CFBundleVersion(string) <br/> ==iOS== | Alternative version for iOS. For further details, see [iOS versioning](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-102364).
osx-CFBundleVersion(string) <br/> ==OS X== | Alternative version for OS X. For further details, see [OS X versioning](https://developer.apple.com/library/prerelease/mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-102364).
windows-packageVersion(string) <br/> ==Windows== | Alternative version for Windows. For futher details, see [Windows versioning](https://msdn.microsoft.com/en-us/library/windows/apps/br211441.aspx)
android-packageName(string) <br/> ==Android== | Alternative package name for Android, overrides `id`.
ios-CFBundleIdentifier(string)  <br/> ==iOS== | Alternative bundle id for iOS. Overrides `id`.
packageName(string) <br/> ==Windows== | *Default: Cordova.Example* <br/>  Package name for Windows.
defaultlocale <br /> ==iOS== ==Windows== | Specified the default language of the app, as an IANA language code.
android-activityName(string) <br/> ==Android== | Set the activity name for your app in AndroidManifest.xml. Note that this is only set once after the Android platform is first added.
xmlns(string) | *Required* <br/> Namespace for the config.xml document.
xmlns:cdv(string) | *Required* <br/> Namespace prefix.

Examples:

```xml
<!-- Android -->
<widget id="io.cordova.hellocordova" version="0.0.1" android-versionCode="13" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
</widget>

<!-- iOS -->
<widget id="io.cordova.hellocordova" version="0.0.1" ios-CFBundleVersion="0.1.3" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
</widget>

<!-- Windows -->
<widget id="io.cordova.hellocordova" version="0.0.1" windows-packageVersion="0.1.3" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
</widget>

<!-- OS X -->
<widget id="io.cordova.hellocordova" version="0.0.1" osx-CFBundleVersion="0.1.3" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
</widget>
```

## name
Specifies the app's formal name, as it appears on the device's home screen and within app-store interfaces.

Examples:

```xml
<widget ...>
   <name>HelloCordova</name>
</widget>
```

### short name
Specifies an optional display name for the app. Sometimes the app name should be displayed differently on device's home screen than on informational and app-store interfaces due to limited space.

Examples:

```xml
<widget ...>
   <name short="HiCdv">HelloCordova</name>
</widget>
```

## description
Specifies metadata that may appear within app-store listings.

Examples:

```xml
<widget ...>
   <description>A sample Apache Cordova application</description>
</widget>
```

## author
Specifies contact information that may appear within app-store listings.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
----------------- | ------------
email(string) | *Required* <br/> Email of the author.
href(string) | *Required* <br/> Website of the author.

Examples:

```xml
<widget ...>
   <author email="dev@cordova.apache.org" href="http://cordova.io"></author>
</widget>
```


## content
Defines the app's starting page in the top-level web assets directory. The default value is index.html, which customarily
appears in a project's top-level ```www``` directory.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
----------------- | ------------
src(string) | *Required* <br/> Defines the app's starting page in the top-level web assets directory. The default value is index.html, which customarily
appears in a project's top-level ```www``` directory.

Examples:

```xml
<widget ...>
   <content src="startPage.html"></content>
</widget>
```

## access
Defines the set of external domains the app is allowed to communicate with. The default value shown above allows it to access any server.
See the Domain [Whitelist Guide](../guide/appdev/whitelist/index.html) for details.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
----------------- | ------------
origin(string) | *Required* <br/> Defines the set of external domains the app is allowed to communicate with.
The default value shown above allows it to access any server.
See the Domain [Whitelist Guide](../guide/appdev/whitelist/index.html) for details.

Examples:

```xml
<widget ...>
   <access origin="*"></access>
</widget>

<widget ...>
   <access origin="http://google.com"></access>
</widget>
```


## allow-navigation
Controls which URLs the WebView itself can be navigated to. Applies to top-level navigations only.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
----------------- | ------------
href(string) | *Required* <br/> Defines the set of external domains the WebView is allowed to navigate to.
See the cordova-plugin-whitelist [cordova-plugin-whitelist][whitelist_navigation] for details.

Examples:

```xml
<!-- Allow links to example.com -->
<allow-navigation href="http://example.com/*" />

<!-- Wildcards are allowed for the protocol, as a prefix to the host, or as a suffix to the path -->
<allow-navigation href="*://*.example.com/*" />
```

## allow-intent
Controls which URLs the app is allowed to ask the system to open. By default, no external URLs are allowed.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
----------------- | ------------
href(string) | *Required* <br/> Defines which URLs the app is allowed to ask the system to open.
See the cordova-plugin-whitelist [cordova-plugin-whitelist][whitelist_intent] for details.

Examples:

```xml
<allow-intent href="http://*/*" />
<allow-intent href="https://*/*" />
<allow-intent href="tel:*" />
<allow-intent href="sms:*" />
```
## edit-config

See [<edit-config> docs][edit_config] for plugin.xml.

## config-file

See [<config-file> docs][config_file] for plugin.xml.

## engine
Specifies details about what platform to restore during a prepare.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
----------------- | ------------
name(string) | *Required* <br/> Name of the platform to be restored
spec(string) | *Required* <br/> Details about the platform to be restored. This could be a ```major.minor.patch``` version number, a directory containing the platform or a url pointing to a git repository. This information will be used to retrieve the platform code to restore from NPM, a local directory or a git repository. See [Platform Spec][platform_spec] for further details.

Examples:

```xml
<engine name="android" spec="https://github.com/apache/cordova-android.git#5.1.1" />
<engine name="ios" spec="^4.0.0" />
```

## plugin
Specifies details about what plugin to restore during a prepare. This element
is automatically added to a project's `config.xml` when a plugin is added using
the `--save` flag. See the [CLI reference][plugin_cli] for more information on
adding plugins.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
----------------- | ------------
name(string) | *Required* <br/> Name of the plugin to be restored
spec(string) | *Required* <br/> Details about the plugin to be restored. This could be a ```major.minor.patch``` version number, a directory containing the plugin or a url pointing to a git repository. This information will be used to retrieve the plugin code to restore from NPM, a local directory or a git repository. See [Plugin Spec][plugin_spec] for further details.

Examples:

```xml
<plugin name="cordova-plugin-device" spec="^1.1.0" />
<plugin name="cordova-plugin-device" spec="https://github.com/apache/cordova-plugin-device.git#1.0.0" />
```

### variable
Persists the value of a CLI variable to be used when restoring a plugin during a
prepare. This element is added to `config.xml` when a plugin that uses CLI variables
is added using the `--save` flag. See the [CLI reference][plugin_cli] for more
information on adding plugins.

Note that this value is only used when the plugin is restored to the project during a
prepare, changing it will *not* change the value used by the plugin in the current
project. In order for changes to this value to take effect, remove the plugin from the
project and restore it by running `cordova prepare`. See the
[preference element][plugin_preference] of `plugin.xml` for more details on CLI variables.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
----------------- | ------------
name(string) | *Required* <br/> Name of the CLI variable. Can only contain capital letters, digits, and underscores.
value(string) | *Required* <br/> Value of the CLI variable to be used when restoring the parent plugin during a prepare.

Examples:

```xml
<plugin name="cordova-plugin-device" spec="^1.1.0">
    <variable name="MY_VARIABLE" value="my_variable_value" />
</plugin>
```

## preference
Sets various options as pairs of name/value attributes. Each preference's name is case-insensitive. Many preferences are unique to specific platforms,
and will be indicated as such.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
----------------- | ------------
AllowInlineMediaPlayback(boolean) <br/> ==iOS== | *Default: false* <br/>  Set to true to allow HTML5 media playback to appear inline within the screen layout, using browser-supplied controls rather than native controls. For this to work, add the ```playsinline``` attribute to any ```<video>``` elements. *NOTE*: Prior to iOS 10, ```<video>``` elements need to use the ```webkit-playsinline``` attribute name instead.
AndroidLaunchMode(string) <br/> ==Android== | *Default: singleTop* <br/> Allowed values: standard, singleTop, singleTask, singleInstance <br/>  Sets the Activity android:launchMode attribute. This changes what happens when the app is launched from app icon or intent and is already running.
android-maxSdkVersion(integer) <br/> ==Android== | *Default: Not Specified* <br/>  Sets the `maxSdkVersion` attribute of the `<uses-sdk>` tag in the project's `AndroidManifest.xml` (see [here][uses-sdk]).
android-minSdkVersion(integer) <br/> ==Android== | *Default: Dependent on cordova-android Version* <br/>  Sets the `minSdkVersion` attribute of the `<uses-sdk>` tag in the project's `AndroidManifest.xml` (see [here][uses-sdk]).
android-targetSdkVersion(integer) <br/> ==Android== | *Default: Dependent on cordova-android Version* <br/>  Sets the `targetSdkVersion` attribute of the `<uses-sdk>` tag in the project's `AndroidManifest.xml` (see [here][uses-sdk]).
AppendUserAgent(string) <br/> ==Android== ==iOS== | If set, the value will append to the end of old UserAgent of webview. When using with OverrideUserAgent, this value will be ignored.
BackgroundColor(string) <br/> ==Android== ==iOS== ==Windows== | Sets the app's background color. Supports a four-byte hex value, with the first byte representing the alpha channel, and standard RGB values for the following three bytes. <br/> For Windows, the alpha channel is ignored. <br/> __Note__: `transparent` value will set the application tile background to the accent color on Windows.
BackupWebStorage(string) <br/> ==iOS== | *Default: cloud* <br/> Allowed values: none, local, cloud. <br/>   Set to cloud to allow web storage data to backup via iCloud. Set to local to allow only local backups via iTunes sync. Set to none prevent web storage backups.
CordovaWebViewEngine(string) <br/> ==iOS== | *Default: CDVUIWebViewEngine* <br/>  This sets the WebView engine plugin to be used to render the host app. The plugin must conform to the CDVWebViewEngineProtocol protocol. The 'value' here should match the 'feature' name of the WebView engine plugin that is installed. This preference usually would be set by the WebView engine plugin that is installed, automatically.
CordovaDefaultWebViewEngine(string) <br/> ==iOS== | *Default: CDVUIWebViewEngine* <br/> As the previous setting, CordovaWebViewEngine, this enables you to override the default fallback WebView with a different plugin. The default WebView uses a private plugin, CDVUIWebViewEngine. You can override this if you need to use a public plugin instead. A use case for this setting is where you need to use something other than the default CDVUIWebViewEngine to render the host app. If CordovaDefaultWebViewEngine and CordovaWebViewEngine is set, CordovaWebViewEngine will be chosen to render the host app for devices running iOS9 and above, while CordovaDefaultWebViewEngine will be the fallback for iOS8. The plugin must conform to the CDVWebViewEngineProtocol protocol. The 'value' here should match the 'feature' name of the WebView engine plugin that is installed.
DefaultVolumeStream(string) <br/> ==Android== | *Default: default* <br/>  Added in cordova-android 3.7.0, This preference sets which volume the hardware volume buttons link to. By default this is "call" for phones and "media" for tablets. Set this to "media" to have your app's volume buttons always change the media volume. Note that when using Cordova's media plugin, the volume buttons will dynamically change to controlling the media volume when any Media objects are active.
DisallowOverscroll(boolean) <br/> ==iOS== ==Android== | *Default: false* <br/>  Set to **true** if you don't want the interface to display any feedback when users scroll past the beginning or end of content. On iOS, overscroll gestures cause content to bounce back to its original position. on Android, they produce a more subtle glowing effect along the top or bottom edge of the content. <br/>
EnableViewportScale(boolean) <br/> ==iOS== | *Default: false* <br/>   Set to true to allow a viewport meta tag to either disable or restrict the range of user scaling, which is enabled by default. Place a viewport such as the following in the HTML to disable scaling and fit content flexibly within the rendering WebView: <br/> ```<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />```
EnableWebGL(boolean) <br/> ==OS X== | *Default: false* <br/>  **(OS X 4.0.0+)** Set to true to enable WebGL on the web view.
ErrorUrl(URL) <br/> ==Android== | *Default: null* <br/>  If set, will display the referenced page upon an error in the application instead of a dialog with the title "Application Error".
ErrorUrl(string) <br/> ==iOS== | If set, will display the referenced local page upon an error in the application.
ForegroundText(string) <br/> ==Windows== | *Default: "light"* <br/>   Works for Windows 8.1 projects only. Allowed values: "light", "dark". Set to "dark" if you use the `BackgroundColor="white"` or another light color to avoid Windows Store submissions errors.
FullScreen(boolean) <br/> ==Android== | *Default: false* <br/>  Allows you to hide the status bar at the top of the screen. <br/> __Note__: Recommended platform-agnostic way to achieve this is to use the [StatusBar plugin][statusbar_plugin].
GapBetweenPages(float) <br/> ==iOS== | *Default: 0* <br/>  The size of the gap, in points, between pages.
HideMousePointer(integer) <br/> ==OS X== | *Default: -1* <br/> **(OS X 4.0.0+)** Sets the timeout for hiding the mouse pointer. Set to 0 for immediate, set to -1 for never.
InAppBrowserStorageEnabled (boolean) <br/> ==Android== | *Default: true* <br/>  Controls whether pages opened within an InAppBrowser can access the same localStorage and WebSQL storage as pages opened with the default browser.
KeepRunning(boolean) <br/> ==Android== | *Default: true* <br/>  Determines whether the application stays running in the background even after a [pause](../../../cordova/events/events.pause.html) event fires. Setting this to false does not kill the app after a [pause](../../../cordova/events/events.pause.html) event, but simply halts execution of code within the cordova webview while the app is in the background.
KeyboardDisplayRequiresUserAction(boolean) <br/> ==iOS== | *Default: true* <br/>  Set to false to allow the keyboard to appear when calling focus() on form inputs.
LoadUrlTimeoutValue(number in milliseconds) <br/> ==Android== | *Default: 20000, 20 seconds* <br/>  When loading a page, the amount of time to wait before throwing a timeout error.
LoadingDialog(string) <br/> ==Android== | *Default: null* <br/>  If set, displays a dialog with the specified title and message, and a spinner, when loading the first page of an application. The title and message are separated by a comma in this value string, and that comma is removed before the dialog is displayed.
LogLevel(string) <br/> ==Android== | *Default: DEBUG* <br/> Allowed values: ERROR, WARN, INFO, DEBUG, VERBOSE <br/>  Sets the minimum log level through which log messages from your application will be filtered.
MediaPlaybackAllowsAirPlay(boolean) <br/> ==iOS== | *Default: true* <br/>  Set to false to prevent Air Play from being used in this view. Available in default UIWebView and WKWebView.
MediaPlaybackRequiresUserAction(boolean) <br/> ==iOS== | *Default: false* <br/>  Set to true to prevent HTML5 videos or audios from playing automatically with the autoplay attribute or via JavaScript.
Min/Max Version(Regex) <br/> ==Windows== | Allowed values: **/(Microsoft.+? &#124; Windows.+?)-(MinVersion &#124; MaxVersionTested)/i** <br/> Identifies the ecosystems and their min/max versions the app is compatible with. There are three parts to each value: the **SDK**, the **version restriction**, and the **version value**.  These preferences are detected by beginning with `Windows` or `Microsoft` and ending in `-MinVersion` or `-MaxVersionTested`: <ul><li>The **SDK** defines what specialized platform you want to target.  The default is `Windows.Universal`.  Valid values for these are defined in the AppxManifest schema, in the `Package/Depednencies/TargetPlatform` elements.</li><li>The **version restriction** defines application compatibility rules.  For example, if the `-MinVersion` is set to 10.1.0.0, then OS versions which don't support at least 10.1.0.0 of the corresponding SDK won't be able to load it. Similarly you can also use `-MaxVersionTested` which specifies the highest-tested version of the SDK. If a new version of the corresponding SDK is released, it will run in compatibility mode for the specified version.</li><li>The **version value** is a 4-integer tuple in the form of *major.minor.build.qfe*.</li></ul> If no preferences of these types are specified in your config.xml file, then Windows.Universal version 10.0.0.0 will be chosen by default. <br/> **Note:** These preferences are only set in the appxmanifest files of the desired target-platform and not in the jsproj files.
Orientation(string) | *Default: default* <br/> Allowed values: default, landscape, portrait <br/> Allows you to lock orientation and prevent the interface from rotating in response to changes in orientation. <br/> **NOTE:** The default value means Cordova will strip the orientation preference entry from the platform's manifest/configuration file allowing the platform to fallback to its default behavior. For iOS, to specify both portrait & landscape mode you would use the platform specific value 'all'.
OSXLocalStoragePath(string) <br/> ==OS X== | *Default: `~/Library/Application Support/{bundle.id}`* <br/> **(OS X 4.0.0+)** Sets the directory for the local storage path.
OverrideUserAgent(string) <br/> ==Android== ==iOS== | If set, the value will replace the old UserAgent of webview. It is helpful to identify the request from app/browser when requesting remote pages. Use with caution, this may causes compitiable issue with web servers. For most cases, use AppendUserAgent instead.
PageLength(float) <br/> ==iOS== | *Default: 0* <br/>  The size of each page, in points, in the direction that the pages flow. When PaginationMode is right to left or left to right, this property represents the width of each page. When PaginationMode is topToBottom or bottomToTop, this property represents the height of each page. The default value is 0, which means the layout uses the size of the viewport to determine the dimensions of the page.
PaginationBreakingMode(string) <br/> ==iOS== | *Default: page* <br/> Allowed values: page, column <br/>  Valid values are page and column.The manner in which column- or page-breaking occurs. This property determines whether certain CSS properties regarding column- and page-breaking are honored or ignored. When this property is set to column, the content respects the CSS properties related to column-breaking in place of page-breaking.
PaginationMode(string) <br/> ==iOS== | *Default: unpaginated* <br/> Allowed values: unpaginated, leftToRight, topToBottom, bottomToTop, rightToLeft <br/>  This property determines whether content in the web view is broken up into pages that fill the view one screen at a time,or shown as one long scrolling view. If set to a paginated form, this property toggles a paginated layout on the content, causing the web view to use the values of PageLength and GapBetweenPages to relayout its content.
SetFullscreen(boolean) <br/> ==Android== | *Default: false* <br/>  Same as the Fullscreen parameter in the global configuration of this xml file. This Android-specific element is deprecated in favor of the global Fullscreen element, and will be removed in a future version.
ShowTitle(boolean) <br/> ==Android== | *Default: false* <br/>  Show the title at the top of the screen.
SplashScreenBackgroundColor <br/> ==Windows== | *Default: #464646* <br/>  Sets the splashscreen background color. Supports a CSS color name or a four-byte hex value, with the first byte representing the alpha channel, and standard RGB values for the following three bytes. <br/> The alpha channel is ignored although `transparent` value will cause black/white background color in case of Dark/Light theme accordingly.
Suppresses3DTouchGesture(boolean) <br/> ==iOS== | *Default: false* <br/>  Set to true to avoid 3D Touch capable iOS devices rendering a magnifying glass widget when the user applies force while longpressing the webview. Test your app thoroughly since this disables onclick handlers, but plays nice with ontouchend. If this setting is true, SuppressesLongPressGesture will effectively be true as well.
SuppressesIncrementalRendering(boolean) <br/> ==iOS== | *Default: false* <br/>  Set to true to wait until all content has been received before it renders to the screen.
SuppressesLongPressGesture(boolean) <br/> ==iOS== | *Default: false* <br/>  Set to true to avoid iOS9+ rendering a magnifying glass widget when the user longpresses the webview. Test your app thoroughly since this may interfere with text selection capabilities.
SwiftVersion(string) <br/> ==iOS== | *Default: (empty)* <br /> Set to specify the Swift Version.
TopActivityIndicator(string) <br/> ==iOS== | *Default: gray* <br/> Allowed values: whiteLarge, white, gray. <br/>   <br/> Controls the appearance of the small spinning icon in the status bar that indicates significant processor activity.
uap-target-min-version(string) <br/> ==Windows== | This property sets the MinTargetVersion for the Windows UAP. If not specified, this is set to the initial release version 10.0.10240.0 <br/> **Note:** This preference is set in the jsproj file and not in the appxmanifest file. So users with OS version lower than this value would not be able to run the app.
UIWebViewDecelerationSpeed(string) <br/> ==iOS== | *Default: normal* <br/> Allowed values: normal, fast <br/>  This property controls the deceleration speed of momentum scrolling. normal is the default speed for most native apps, and fast is the default for Mobile Safari.
WindowSize(string) <br/> ==OS X== | *Default: auto* <br/> **(OS X 4.0.0+)** Sets the size of the application window. <br/> Accepts the format `WxH` for a specific width and height or the special values `auto` and `fullscreen`. The latter will open a borderless window spanning the entire desktop area. Please note, that this is different from the _normal_ OS X fullscreen mode, which would never span multiple displays. <br/> **Note**: The global cordova `fullscreen` preference has no effect in OS X.
WindowsDefaultUriPrefix(string) <br/> ==Windows== | Allowed values: `ms-appx://`, `ms-appx-web://` <br/>  Identifies whether you want your app to target the local context or remote context as its startup URI. When building for Windows 10, the default is the remote context (`ms-appx-web://`). <br/> In order to have a local-mode application that is not impacted by Remote Mode capability restrictions, you must set this preference to `ms-appx://` and not declare any `<access>` elements with remote URIs. The local mode is the default for Windows 8.1
WindowsStoreDisplayName(string) <br/> ==Windows== | A friendly name for the publisher that can be displayed to users.
WindowsStoreIdentityName(string) <br/> ==Windows== | Identity name used for Windows store. The identity defines a globally unique identifier for a package. A package identity is represented as a tuple of attributes of the package. See the [identity page on the package manifest schema reference](https://msdn.microsoft.com/en-us/library/windows/apps/br211441.aspx) for further details.
WindowsStorePublisherName(string) <br/> ==Windows== | Publisher Display Name.
WindowsToastCapable(boolean) <br/> ==Windows== | *Default: false* <br/>  A value of ```true``` indicates that the app is allowed to provide 'toast notifications'.
deployment-target(string) <br/> ==iOS== | This sets the IPHONEOS_DEPLOYMENT_TARGET in the build, which ultimately translates to the MinimumOSVersion in the ipa. For more details please refer to Apple's documentation on Deployment Target Settings
target-device(string) <br/> ==iOS== | *Default: universal* <br/> Allowed values: handset, tablet, universal <br/>  This property maps directly to TARGETED_DEVICE_FAMILY in the xcode project. Note that if you target universal (which is the default) you will need to supply screen shots for both iPhone and iPad or your app may be rejected.
windows-phone-target-version(string) <br/> ==Windows== | Sets the version of Windows Phone for which the package (resulting from ```cordova build```) will target. If none is specified, it will be set to the same version as ```windows-target-version``` (if found).
windows-target-version(string) <br/> ==Windows== | Sets the version of Windows for which the package (resulting from ```cordova build```) will target. If none is specified, it will be set to '8.1'.

Examples:

```xml
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
<preference name="CordovaDefaultWebViewEngine" value="CDVUIWebViewEngine" />
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
<preference name="WindowsDefaultUriPrefix" value="ms-appx://" />
<preference name="Windows.Mobile-MaxVersionTested" value="10.0.10031.0" />
<preference name="Windows.Universal-MinVersion" value="10.0.0.0" />
<preference name="WindowsStoreIdentityName" value="Cordova.Example.ApplicationDataSample" />
<preference name="WindowsStorePublisherName" value="CN=Contoso Corp, O=Contoso Corp, L=Redmond, S=Washington, C=US" />
<preference name="WindowsToastCapable" value="true" />
<preference name="uap-target-min-version" value="10.0.10586.0" />

<!-- OS X only preferences -->
<preference name="HideMousePointer" value="5"/>
<preference name="OSXLocalStoragePath" value="~/.myapp/database"/>
<preference name="WindowSize" value="800x400"/>
<preference name="EnableWebGL" value="true"/>
```

## feature
If you use the CLI to build applications, you use the plugin command to enable device APIs. This does not modify the top-level config.xml file, so the <feature> element does not apply to your workflow. If you work directly in an SDK and using the platform-specific config.xml file as source, you use the <feature> tag to enable device-level APIs and external plugins. They often appear with custom values in platform-specific config.xml files. See the API Reference for details on how to specify each feature. See
the [Plugin Development Guide](../guide/hybrid/plugins/index.html) for more information on plugins.
NOTE: Most of the time, you do NOT want to set this directly.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
----------------- | ------------
name(string) | *Required* <br/> The name of the plugin to enable.


### param
Used to specify certain plugin parameters such as: what package to retrieve the plugin code from, and whether the plugin code is to be initialized during the Webview's initialization.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
----------------- | ------------
name(string) <br/> ==iOS== ==OS X== ==Android== | *Required* <br/> Allowed values: android-package, ios-package, osx-package, onload. <br/>  'ios-package', 'osx-package' and 'android-package' are used to specify the name of the package (as specified by the 'value' attribute) to be used to initialize the plugin code, while 'onload' is used to specify whether the corresponding plugin (as specified in the 'value' attribute) is to be instantiated when the controller is initialized.
value(string or boolean) <br/> ==iOS== ==OS X== ==Android== | *Required* <br/>  Specifies the name of the package to be used to initialize the plugin code (when the 'name' attribute is android-package, ios-package or osx-package), specifies the name of the plugin to be loaded during controller initialization (when 'name' attribute is set to 'onload').


Examples:

```xml
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
```


## platform
When using the CLI to build applications, it is sometimes necessary to specify preferences or other elements specific to a particular platform. Use the <platform> element to specify configuration that should only appear in a single platform-specific config.xml file.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
----------------- | ------------
name(string) | *Required* <br/> The platform whose preferences are being defined.

Examples:

```xml
<platform name="android">
   <preference name="Fullscreen" value="true" />
</platform>
```

## hook
Represents your custom script which will be called by Cordova when
certain action occurs (for example, after plugin is added or platform
prepare logic is invoked). This is useful when you need to extend
default Cordova functionality. See [Hooks Guide](../guide/appdev/hooks/index.html) for more information.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
----------------- | ------------
type(string) | *Required* <br/> Specifies the action during which the custom script is to be called.
src(string) | *Required* <br/> Specifies the location of the script to be called when a specific action occurs.

Examples:

```xml
<hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />
```

## resource-file

This tag installs resource files into your platform, and is similar to the same tag in plugin.xml. This tag is currently only supported on `cordova-ios@4.4.0` or greater and `cordova-android@6.2.1` or greater.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
src(string) <br/> ==iOS== ==Android==| *Required* <br/> Location of the file relative to `config.xml`.
target(string) | Path to where the file will be copied in your directory.

Examples:

For Android:
```xml
<resource-file src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" />
```


# Sample config.xml
Below is a sample config.xml file:

```xml
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
  <plugin name="cordova-plugin-whitelist" spec="1" />
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
```

[uses-sdk]:             http://developer.android.com/guide/topics/manifest/uses-sdk-element.html
[platform_spec]:        ../reference/cordova-cli/index.html#platform-spec
[plugin_preference]:    ../plugin_ref/spec.html#preference
[plugin_spec]:          ../reference/cordova-cli/index.html#plugin-spec
[plugin_cli]:           ../reference/cordova-cli/index.html#cordova-plugin-command
[whitelist_navigation]: ../reference/cordova-plugin-whitelist/index.html#navigation-whitelist
[whitelist_intent]:     ../reference/cordova-plugin-whitelist/index.html#intent-whitelist
[statusbar_plugin]:     ../reference/cordova-plugin-statusbar/
[edit_config]:          ../plugin_ref/spec.html#edit-config
[config_file]:          ../plugin_ref/spec.html#config-file
