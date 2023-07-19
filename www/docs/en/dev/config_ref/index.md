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

{% cdv_platform inject %}

# Config.xml

The `config.xml` file is a global configuration file that manages various aspects of a Cordova application's behavior. It is written in XML format and follows the structure outlined in the W3C's [Packaged Web Apps (Widgets)](https://www.w3.org/TR/widgets/) specification. Additionally, it is extended to include core Cordova API features, plugins, and platform-specific settings.

If you are using the Cordova CLI to create your project (as explained in [The Command-Line Interface](../guide/cli/index.html)), you can locate the `config.xml` file in the top-level directory of your project.

```bash
./hellocordova
└── config.xml
```

When using the CLI to build a project, versions of this file are passively copied into various `platforms/` subdirectories. For example:

```bash
./hellocordova
└── platforms
    ├── android
    │   └── app
    │       └── src
    │           └── main
    │               └── res
    │                   └── xml
    │                       └── config.xml
    └── ios
        └── HelloCordova
            └── config.xml
```

Some platforms offer integrated development environments (IDEs) like Xcode for iOS and Android Studio for Android, which allow you to build and test your application. If you choose to use these IDEs for building and testing your project, it is recommended to run the `cordova prepare` CLI command whenever you make changes to the Cordova application's `config.xml`. This ensures that the updated configurations are copied into the respective `platforms/` subdirectories.

In addition to the configuration options described below, you have the ability to customize the core set of images for your application on each target platform. For more information, please refer to the topic on [Customizing Icons](images.html).

**Sample `config.xml`:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<widget xmlns="http://www.w3.org/ns/widgets"
    xmlns:cdv="http://cordova.apache.org/ns/1.0"
    id="io.cordova.hellocordova"
    version="1.0.0">
    <name>HelloCordova</name>
    <description>Sample Apache Cordova App</description>
    <author email="dev@cordova.apache.org" href="https://cordova.apache.org">
        Apache Cordova Team
    </author>

    <content src="index.html" />

    <!-- Security Related Settings -->
    <access origin="https://cordova.apache.org" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />

    <!-- Platform Configs & Platform Overriding Configs -->
    <platform name="android"></platform>
    <platform name="ios"></platform>
</widget>
```

## widget

Root element of the config.xml document.

Attributes | Description
---------------- | ------------
id<br/>{% cdv_vartype string %} | *Required* <br/> Specifies the app's identifier. The `id` should be in a [reverse-DNS format](https://en.wikipedia.org/wiki/Reverse_domain_name_notation#Examples) however, only alphanumeric and dot characters are allowed. e.g: `com.example.myapp`
version<br/>{% cdv_vartype string %} | *Required* <br/> Full version number expressed in major/minor/patch notation.
android-versionCode<br/>{% cdv_vartype string %} {% cdv_platform android %} | Alternative version for Android. Sets the [version code](https://developer.android.com/tools/publishing/versioning.html) for the application. See [the Android guide](../guide/platforms/android/index.html#setting-the-version-code) for information on how this attribute may be modified.
ios-CFBundleVersion<br/>{% cdv_vartype string %} {% cdv_platform ios %} | Alternative version for iOS. For further details, see [Apple Developer - CFBundleVersion](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundleversion).
android-packageName<br/>{% cdv_vartype string %} {% cdv_platform android %} | This preference overrides the id attribute with an alternative package name specifically for Android.
ios-CFBundleIdentifier<br/>{% cdv_vartype string %} {% cdv_platform ios %} | This preference overrides the id attribute with an alternative bundle ID specifically for iOS.
defaultlocale <br /> {% cdv_vartype string %}{% cdv_platform ios %} | Specify the default language of the app using an IANA language code. This preference key explicitly sets the value for [CFBundleDevelopmentRegion](https://developer.apple.com/documentation/bundleresources/information_property_list/cfbundledevelopmentregion). For example, you can use values like `en` or `en_US`.
android-activityName<br/>{% cdv_vartype string %} {% cdv_platform android %} | Set the activity name for your app in AndroidManifest.xml. Note that this is only set once after the Android platform is first added.
xmlns<br/>{% cdv_vartype string %} | *Required* <br/> Namespace for the config.xml document.
xmlns:cdv<br/>{% cdv_vartype string %} | *Required* <br/> Namespace prefix.

Examples:

```xml
<!-- Android -->
<widget id="io.cordova.hellocordova" version="0.0.1" android-versionCode="13" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
</widget>

<!-- iOS -->
<widget id="io.cordova.hellocordova" version="0.0.1" ios-CFBundleVersion="0.1.3" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
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

Attributes | Description
----------------- | ------------
email<br/>{% cdv_vartype string %} | *Required* <br/> Email of the author.
href<br/>{% cdv_vartype string %} | *Required* <br/> Website of the author.

Examples:

```xml
<widget ...>
   <author email="dev@cordova.apache.org" href="https://cordova.io"></author>
</widget>
```


## content

Defines the app's starting page in the top-level web assets directory. The default value is index.html, which customarily appears in a project's top-level ```www``` directory.

Attributes | Description
----------------- | ------------
src<br/>{% cdv_vartype string %} | *Required* <br/> Defines the app's starting page in the top-level web assets directory. The default value is index.html, which customarily appears in a project's top-level ```www``` directory.

Examples:

```xml
<widget ...>
   <content src="startPage.html"></content>
</widget>
```

## access

Defines the external domains that the app is allowed to communicate with. When the access origin is set to "*", the app can access any server, but this can potentially create a security risk. It is recommended to explicitly specify the permitted URLs to ensure a secure configuration. For detailed instructions, please refer to the [Allow List Guide](../guide/appdev/allowlist/index.html).

Attributes | Description
----------------- | ------------
origin<br/>{% cdv_vartype string %} | *Required* <br/> Defines the external domain URL or URL pattern that the app is allowed to communicate with.

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

Controls which URLs the WebView can be navigated to. Applies to top-level navigations only. See the [Allow List Guide][allow_list_navigation] for details.

Attributes | Description
----------------- | ------------
href<br/>{% cdv_vartype string %} | *Required* <br/> Defines the external domain or domain pattern that the WebView is allowed to navigate to.

Examples:

```xml
<!-- Allow links to example.com -->
<allow-navigation href="http://example.com/*" />

<!-- Wildcards are allowed for the protocol, as a prefix to the host, or as a suffix to the path -->
<allow-navigation href="*://*.example.com/*" />
```

## allow-intent

Controls which URLs the app is allowed to ask the system to open. By default, no external URLs are allowed. See the [Allow List Guide][allow_list_intent] for details.

Attributes | Description
----------------- | ------------
href<br/>{% cdv_vartype string %} | *Required* <br/> Defines the URL or URL pattern that the app is allowed to ask the system to open.

Examples:

```xml
<allow-intent href="http://*/*" />
<allow-intent href="https://*/*" />
<allow-intent href="tel:*" />
<allow-intent href="sms:*" />
```

## edit-config

See [&lt;config-file&gt; docs][edit_config] for plugin.xml.

## config-file

See [&lt;config-file&gt; docs][config_file] for plugin.xml.

## engine

Specifies details about what platform to restore during a prepare.

Attributes | Description
----------------- | ------------
name<br/>{% cdv_vartype string %} | *Required* <br/> Name of the platform to be restored
spec<br/>{% cdv_vartype string %} | *Required* <br/> Details about the platform to be restored. This could be a ```major.minor.patch``` version number, a directory containing the platform or a url pointing to a git repository. This information will be used to retrieve the platform code to restore from NPM, a local directory or a git repository. See [Platform Spec][platform_spec] for further details.

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

_Note: As of Cordova 9.x, this tag is obsolete. [Learn More](https://github.com/apache/cordova-lib/pull/750)_

Attributes | Description
----------------- | ------------
name<br/>{% cdv_vartype string %} | *Required* <br/> Name of the plugin to be restored
spec<br/>{% cdv_vartype string %} | *Required* <br/> Details about the plugin to be restored. This could be a ```major.minor.patch``` version number, a directory containing the plugin or a url pointing to a git repository. This information will be used to retrieve the plugin code to restore from NPM, a local directory or a git repository. See [Plugin Spec][plugin_spec] for further details.

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

Attributes | Description
----------------- | ------------
name<br/>{% cdv_vartype string %} | *Required* <br/> Name of the CLI variable. Can only contain capital letters, digits, and underscores.
value<br/>{% cdv_vartype string %} | *Required* <br/> Value of the CLI variable to be used when restoring the parent plugin during a prepare.

Examples:

```xml
<plugin name="cordova-plugin-device" spec="^1.1.0">
    <variable name="MY_VARIABLE" value="my_variable_value" />
</plugin>
```

## preference

Sets various options as pairs of name/value attributes. Each preference's name is case-insensitive. Many preferences are unique to specific platforms,
and will be indicated as such.

Attributes | Description
----------------- | ------------
AllowInlineMediaPlayback<br/>{% cdv_vartype boolean %} {% cdv_platform ios %} | *Default: false* <br/>  Set to true to allow HTML5 media playback to appear inline within the screen layout, using browser-supplied controls rather than native controls. For this to work, add the ```playsinline``` attribute to any ```<video>``` elements. *NOTE*: Prior to iOS 10, ```<video>``` elements need to use the ```webkit-playsinline``` attribute name instead.
AllowNewWindows<br/>{% cdv_vartype boolean %} {% cdv_platform ios %} | *Default: false* <br/> Set to true to allow JavaScript `window.open` and HTML `target="_blank"` links to open a new view overlaying the web view.
AndroidLaunchMode<br/>{% cdv_vartype string %} {% cdv_platform android %} | *Default: singleTop* <br/> Allowed values: standard, singleTop, singleTask, singleInstance <br/>  Sets the Activity android:launchMode attribute. This changes what happens when the app is launched from app icon or intent and is already running.
AndroidInsecureFileModeEnabled<br/>{% cdv_vartype boolean %} {% cdv_platform android %} | *Default: false* <br/>  If set to `true` loading `file:///` URLs is allowed. __Note__: Enabling this setting allows malicious scripts loaded in a `file:///` context to launch cross-site scripting attacks, either accessing arbitrary local files including WebView cookies, app private data or even credentials used on arbitrary web sites.
android-maxSdkVersion<br/>{% cdv_vartype number %} {% cdv_platform android %} | *Default: Not Specified* <br/>  Sets the `maxSdkVersion` attribute of the `<uses-sdk>` tag in the project's `AndroidManifest.xml` (see [here][uses-sdk]).
android-minSdkVersion<br/>{% cdv_vartype number %} {% cdv_platform android %} | *Default: [Dependent on cordova-android Version](../../guide/platforms/android/index.html#android-api-level-support)* <br/>  Sets the `minSdkVersion` attribute of the `<uses-sdk>` tag in the project's `AndroidManifest.xml` (see [here][uses-sdk]).
android-targetSdkVersion<br/>{% cdv_vartype number %} {% cdv_platform android %} | *Default: [Dependent on cordova-android Version](../../guide/platforms/android/index.html#android-api-level-support)* <br/>  Sets the `targetSdkVersion` attribute of the `<uses-sdk>` tag in the project's `AndroidManifest.xml` (see [here][uses-sdk]).
android-compileSdkVersion<br/>{% cdv_vartype number %} {% cdv_platform android %} | *Default: [Dependent on cordova-android Version](../../guide/platforms/android/index.html#android-api-level-support)* <br/> Sets the `compileSdkVersion` attribute.
android-buildToolsVersion<br/>{% cdv_vartype semver %} {% cdv_platform android %} | *Default: [Dependent on cordova-android Version](../../guide/platforms/android/index.html#android-api-level-support)* <br/> Expects a full version string eg. "32.0.0". Changing this may also requires changing the PATH environment variable to find the proper build tools.<br/><br/>This preference is primarily for cordova development, for testing upcoming versions of the Android SDK. Changing this has a high risk of breaking builds as newer build tools frequently introduce breaking changes.
GradleVersion<br/>{% cdv_vartype string %} {% cdv_platform android %} | *Default: [Dependent on cordova-android Version](../../guide/platforms/android/index.html#android-api-level-support)* <br/> Sets the gradle wrapper version to use.<br/> <br/>This preference is primarily for cordova development, for testing upcoming versions of the Android SDK. Changing this has a high risk of breaking builds as newer build tools frequently introduce breaking changes.
AndroidGradlePluginVersion<br/>{% cdv_vartype semver %} {% cdv_platform android %} | *Default: [Dependent on cordova-android Version](../../guide/platforms/android/index.html#android-api-level-support)* <br/> Sets the Android Gradle Plugin version to use.<br/> <br/>This preference is primarily for cordova development, for testing upcoming versions of the Android SDK. Changing this has a high risk of breaking builds as newer build tools frequently introduce breaking changes.
AndroidXAppCompatVersion<br/>{% cdv_vartype semver %} {% cdv_platform android %} | *Default: [Dependent on cordova-android Version](../../guide/platforms/android/index.html#android-api-level-support)* <br/> Overrides Android App Compat library version.
AndroidXWebKitVersion<br/>{% cdv_vartype semver %} {% cdv_platform android %} | *Default: [Dependent on cordova-android Version](../../guide/platforms/android/index.html#android-api-level-support)* <br/>Overrides Android WebKit library version.
AndroidGradlePluginGoogleServicesVersion<br/>{% cdv_vartype semver %} {% cdv_platform android %} | *Default: [Dependent on cordova-android Version](../../guide/platforms/android/index.html#android-api-level-support)* <br/>Overrides the Google Services library version.
AndroidGradlePluginGoogleServicesEnabled<br/>{% cdv_vartype boolean %} {% cdv_platform android %} | *Default: false* <br/>Enables Google Services. The `google-services.json` file will be required.
GradlePluginKotlinEnabled<br/>{% cdv_vartype boolean %} {% cdv_platform android %} | *Default: false* <br/>Enables Kotlin plugin for Kotline support.
AppendUserAgent<br/>{% cdv_vartype string %} {% cdv_platform android %} {% cdv_platform ios %} | If set, the value will append to the end of old UserAgent of webview. When using with OverrideUserAgent, this value will be ignored.
BackgroundColor<br/>{% cdv_vartype string %} {% cdv_platform android %} {% cdv_platform ios %} | Sets the app's background color. Supports a four-byte hex value, with the first byte representing the alpha channel, and standard RGB values for the following three bytes. <br/>__Note__: `transparent` value will set the application tile background to the accent color on Windows.
CordovaWebViewEngine<br/>{% cdv_vartype string %} {% cdv_platform ios %} | *Default: CDVWebViewEngine* <br/>  This sets the WebView engine plugin to be used to render the host app. The plugin must conform to the CDVWebViewEngineProtocol protocol. The 'value' here should match the 'feature' name of the WebView engine plugin that is installed. This preference usually would be set by the WebView engine plugin that is installed, automatically.
DefaultVolumeStream<br/>{% cdv_vartype string %} {% cdv_platform android %} | *Default: default* <br/>  Added in cordova-android 3.7.0, This preference sets which volume the hardware volume buttons link to. By default this is "call" for phones and "media" for tablets. Set this to "media" to have your app's volume buttons always change the media volume. Note that when using Cordova's media plugin, the volume buttons will dynamically change to controlling the media volume when any Media objects are active.
DisallowOverscroll<br/>{% cdv_vartype boolean %} {% cdv_platform ios %} {% cdv_platform android %} | *Default: false* <br/>  Set to **true** if you don't want the interface to display any feedback when users scroll past the beginning or end of content. On iOS, overscroll gestures cause content to bounce back to its original position. on Android, they produce a more subtle glowing effect along the top or bottom edge of the content. <br/>
EnableViewportScale<br/>{% cdv_vartype boolean %} {% cdv_platform ios %} | *Default: false* <br/>   Set to true to allow a viewport meta tag to either disable or restrict the range of user scaling, which is enabled by default. Place a viewport such as the following in the HTML to disable scaling and fit content flexibly within the rendering WebView: <br/> ```<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />```
ErrorUrl<br/>{% cdv_vartype url %} {% cdv_platform android %} {% cdv_platform ios %} | *Default: null* <br/>When this preference is set, the application will display the specified local page upon encountering an error. Additionally, if this preference is set, the Android system will suppress the default dialog titled "Application Error".
FullScreen<br/>{% cdv_vartype boolean %} {% cdv_platform android %} | *Default: false* <br/>  Allows you to hide the status bar at the top of the screen. <br/> __Note__: Recommended platform-agnostic way to achieve this is to use the [StatusBar plugin][statusbar_plugin].
GapBetweenPages<br/>{% cdv_vartype float %} {% cdv_platform ios %} | *Default: 0* <br/>  The size of the gap, in points, between pages.
GradlePluginGoogleServicesEnabled<br/>{% cdv_vartype boolean %} {% cdv_platform android %} | *Default: false* <br/>  Set to true to enable the Google Services Gradle plugin.
GradlePluginGoogleServicesEnabled<br/>{% cdv_vartype semver %} {% cdv_platform android %} | *Default: 4.2.0* <br/>  Set version of Google Services Gradle plugin to be used.
GradlePluginKotlinEnabled<br/>{% cdv_vartype boolean %} {% cdv_platform android %} | *Default: false* <br/>  Set to true to allow Kotlin files to be built.
GradlePluginKotlinCodeStyle <br/>{% cdv_vartype string %} {% cdv_platform android %} | *Default: official* <br/> Allowed values: official, obsolete<br/>  Sets how the Kotlin code is formatting for readability.
GradlePluginKotlinVersion<br/>{% cdv_vartype semver %} {% cdv_platform android %} | *Default: 1.3.50* <br/> Set the version of the Kotlin Gradle plugin to be used.
InAppBrowserStorageEnabled<br/>{% cdv_vartype boolean %} {% cdv_platform android %} | *Default: true* <br/>  Controls whether pages opened within an InAppBrowser can access the same localStorage and WebSQL storage as pages opened with the default browser.
InspectableWebview<br/>{% cdv_vartype boolean %} {% cdv_platform android %} {% cdv_platform ios %} | *Default: depends on Debug/Release build* <br/>  On iOS 16.4 or later, enables or disables the webview inspector. Defaults to `true` on debug builds and `false` on release builds. This preference is ignored on iOS 16.3 and earlier; the inspector is always enabled on debug builds and always disabled on release builds.
KeepRunning<br/>{% cdv_vartype boolean %} {% cdv_platform android %} | *Default: true* <br/>  Determines whether the application stays running in the background even after a [pause](../cordova/events/events.html#pause) event fires. Setting this to false does not kill the app after a [pause](../cordova/events/events.html#pause) event, but simply halts execution of code within the cordova webview while the app is in the background.
KeyboardDisplayRequiresUserAction<br/>{% cdv_vartype boolean %} {% cdv_platform ios %} | *Default: true* <br/>  Set to false to allow the keyboard to appear when calling focus() on form inputs.
LoadUrlTimeoutValue<br/>{% cdv_vartype number %} {% cdv_platform android %} | *Default: 20000, 20 seconds* <br/>  When loading a page, the amount of time in miliseconds to wait before throwing a timeout error.
LoadingDialog<br/>{% cdv_vartype string %} {% cdv_platform android %} | *Default: null* <br/>  If set, displays a dialog with the specified title and message, and a spinner, when loading the first page of an application. The title and message are separated by a comma in this value string, and that comma is removed before the dialog is displayed.
LogLevel<br/>{% cdv_vartype string %} {% cdv_platform android %} | *Default: DEBUG* <br/> Allowed values: ERROR, WARN, INFO, DEBUG, VERBOSE <br/>  Sets the minimum log level through which log messages from your application will be filtered.
MediaPlaybackAllowsAirPlay<br/>{% cdv_vartype boolean %} {% cdv_platform ios %} | *Default: true* <br/>  Set to false to prevent Air Play from being used in this view. Available in default UIWebView and WKWebView.
MediaPlaybackRequiresUserAction<br/>{% cdv_vartype boolean %} {% cdv_platform ios %} | *Default: false* <br/>  Set to true to prevent HTML5 videos or audios from playing automatically with the autoplay attribute or via JavaScript.
Orientation<br/>{% cdv_vartype string %} | *Default: default* <br/> Allowed values: default, landscape, portrait <br/> Allows you to lock orientation and prevent the interface from rotating in response to changes in orientation. <br/> **NOTE:** The default value means Cordova will strip the orientation preference entry from the platform's manifest/configuration file allowing the platform to fallback to its default behavior. For iOS, to specify both portrait & landscape mode you would use the platform specific value 'all'.
OverrideUserAgent<br/>{% cdv_vartype string %} {% cdv_platform android %} {% cdv_platform ios %} | If set, the value will replace the old UserAgent of webview. It is helpful to identify the request from app/browser when requesting remote pages. Use with caution, this may cause compatibility issues with web servers. For most cases, use AppendUserAgent instead.
PageLength<br/>{% cdv_vartype float %} {% cdv_platform ios %} | *Default: 0* <br/>  The size of each page, in points, in the direction that the pages flow. When PaginationMode is right to left or left to right, this property represents the width of each page. When PaginationMode is topToBottom or bottomToTop, this property represents the height of each page. The default value is 0, which means the layout uses the size of the viewport to determine the dimensions of the page.
PaginationBreakingMode<br/>{% cdv_vartype string %} {% cdv_platform ios %} | *Default: page* <br/> Allowed values: page, column <br/>  Valid values are page and column.The manner in which column- or page-breaking occurs. This property determines whether certain CSS properties regarding column- and page-breaking are honored or ignored. When this property is set to column, the content respects the CSS properties related to column-breaking in place of page-breaking.
PaginationMode<br/>{% cdv_vartype string %} {% cdv_platform ios %} | *Default: unpaginated* <br/> Allowed values: unpaginated, leftToRight, topToBottom, bottomToTop, rightToLeft <br/>  This property determines whether content in the web view is broken up into pages that fill the view one screen at a time,or shown as one long scrolling view. If set to a paginated form, this property toggles a paginated layout on the content, causing the web view to use the values of PageLength and GapBetweenPages to relayout its content.
PreferredContentMode<br/>{% cdv_vartype string %} {% cdv_platform ios %} | *Default: auto* <br/>  Sets the content mode (user agent) for the WebView and InAppBrowsers WebView on iPads. Valid values are: `mobile` and `desktop`.
InAppBrowserStatusBarStyle<br/>{% cdv_vartype string %} {% cdv_platform ios %} | *Default: default* <br/>  Set text color style of the StatusBar for InAppBrowser for iOS. Valid values are: `lightcontent` and `default`.
SetFullscreen<br/>{% cdv_vartype boolean %} {% cdv_platform android %} | *Default: false* <br/>  Same as the Fullscreen parameter in the global configuration of this xml file. This Android-specific element is deprecated in favor of the global Fullscreen element, and will be removed in a future version.
ShowTitle<br/>{% cdv_vartype boolean %} {% cdv_platform android %} | *Default: false* <br/>  Show the title at the top of the screen.
Suppresses3DTouchGesture<br/>{% cdv_vartype boolean %} {% cdv_platform ios %} | *Default: false* <br/>  Set to true to avoid 3D Touch capable iOS devices rendering a magnifying glass widget when the user applies force while longpressing the webview. Test your app thoroughly since this disables onclick handlers, but plays nice with ontouchend. If this setting is true, SuppressesLongPressGesture will effectively be true as well.
SuppressesIncrementalRendering<br/>{% cdv_vartype boolean %} {% cdv_platform ios %} | *Default: false* <br/>  Set to true to wait until all content has been received before it renders to the screen.
SuppressesLongPressGesture<br/>{% cdv_vartype boolean %} {% cdv_platform ios %} | *Default: false* <br/>  Set to true to avoid iOS9+ rendering a magnifying glass widget when the user longpresses the webview. Test your app thoroughly since this may interfere with text selection capabilities.
SwiftVersion<br/>{% cdv_vartype string %} {% cdv_platform ios %} | *Default: (empty)* <br /> Set to specify the Swift Version.
TopActivityIndicator<br/>{% cdv_vartype string %} {% cdv_platform ios %} | *Default: gray* <br/> Allowed values: whiteLarge, white, gray. <br/>   <br/> Controls the appearance of the small spinning icon in the status bar that indicates significant processor activity.
UIWebViewDecelerationSpeed<br/>{% cdv_vartype string %} {% cdv_platform ios %} | *Default: normal* <br/> Allowed values: normal, fast <br/>  This property controls the deceleration speed of momentum scrolling. normal is the default speed for most native apps, and fast is the default for Mobile Safari.
deployment-target<br/>{% cdv_vartype string %} {% cdv_platform ios %} | This sets the IPHONEOS_DEPLOYMENT_TARGET in the build, which ultimately translates to the MinimumOSVersion in the ipa. For more details please refer to Apple's documentation on Deployment Target Settings
target-device<br/>{% cdv_vartype string %} {% cdv_platform ios %} | *Default: universal* <br/> Allowed values: handset, tablet, universal <br/>  This property maps directly to TARGETED_DEVICE_FAMILY in the xcode project. Note that if you target universal (which is the default) you will need to supply screen shots for both iPhone and iPad or your app may be rejected.
scheme<br/>{% cdv_vartype string %} {% cdv_platform android %} {% cdv_platform ios %} | *Default:* <br/> - Android: `https` <br/> - iOS: *not defined*, but falls back to `app` if the value is invalid.<br/><br/>*Allowed values:*<br/> - Android: `http` or `https`<br/> - iOS: Any non-reserved schemes.<br/><br/>This property contains the scheme which your app content is served from.
hostname<br/>{% cdv_vartype string %} {% cdv_platform android %} {% cdv_platform ios %} | *Default:* `localhost`<br/><br/>This property contains the hostname which the app content is served from.<br/><br/>If the preference `scheme` is not defined for iOS, the `hostname` value will be ignored.

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
<preference name="CordovaWebViewEngine" value="CDVWebViewEngine" />
<preference name="CordovaDefaultWebViewEngine" value="CDVWebViewEngine" />
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
<preference name="AndroidInsecureFileModeEnabled" value="true" />
<preference name="DefaultVolumeStream" value="call" />
<preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />
<preference name="AppendUserAgent" value="My Browser" />
<preference name="GradlePluginGoogleServicesEnabled" value="true" />
<preference name="GradlePluginGoogleServicesVersion" value="4.2.0" />
<preference name="GradlePluginKotlinEnabled" value="true" />
<preference name="GradlePluginKotlinCodeStyle" value="official" />
<preference name="GradlePluginKotlinVersion" value="1.3.50" />
```

## feature

If you use the CLI to build applications, you use the plugin command to enable device APIs. This does not modify the top-level config.xml file, so the <feature> element does not apply to your workflow. If you work directly in an SDK and using the platform-specific config.xml file as source, you use the <feature> tag to enable device-level APIs and external plugins. They often appear with custom values in platform-specific config.xml files. See the API Reference for details on how to specify each feature. See
the [Plugin Development Guide](../guide/hybrid/plugins/index.html) for more information on plugins.
NOTE: Most of the time, you do NOT want to set this directly.

Attributes | Description
----------------- | ------------
name<br/>{% cdv_vartype string %} | *Required* <br/> The name of the plugin to enable.


### param

Used to specify certain plugin parameters such as: what package to retrieve the plugin code from, and whether the plugin code is to be initialized during the Webview's initialization.

Attributes | Description
----------------- | ------------
name<br/>{% cdv_vartype string %} {% cdv_platform ios %} {% cdv_platform android %} | *Required* <br/> Allowed values: android-package, ios-package, onload. <br/>  'ios-package' and 'android-package' are used to specify the name of the package (as specified by the 'value' attribute) to be used to initialize the plugin code, while 'onload' is used to specify whether the corresponding plugin (as specified in the 'value' attribute) is to be instantiated when the controller is initialized.
value <br/> {% cdv_vartype String/Boolean %} {% cdv_platform ios %} {% cdv_platform android %} | *Required* <br/>  Specifies the name of the package to be used to initialize the plugin code (when the 'name' attribute is android-package or ios-package), specifies the name of the plugin to be loaded during controller initialization (when 'name' attribute is set to 'onload').


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
```


## platform

When using the CLI to build applications, it is sometimes necessary to specify preferences or other elements specific to a particular platform. Use the <platform> element to specify configuration that should only appear in a single platform-specific config.xml file.

Attributes | Description
----------------- | ------------
name<br/>{% cdv_vartype string %} | *Required* <br/> The platform whose preferences are being defined.

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

Attributes | Description
----------------- | ------------
type<br/>{% cdv_vartype string %} | *Required* <br/> Specifies the action during which the custom script is to be called.
src<br/>{% cdv_vartype string %} | *Required* <br/> Specifies the location of the script to be called when a specific action occurs.

Examples:

```xml
<hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />
```

## resource-file

This tag installs resource files into your platform, and is similar to the same tag in plugin.xml. This tag is currently only supported on `cordova-ios@4.4.0` or greater and `cordova-android@6.2.1` or greater.

Attributes | Description
---------------- | ------------
src<br/>{% cdv_vartype string %} {% cdv_platform ios %} {% cdv_platform android %}| *Required* <br/> Location of the file relative to `config.xml`.
target<br/>{% cdv_vartype string %} | Path to where the file will be copied in your directory.

Examples:

For Android:
```xml
<resource-file src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" />
```

[uses-sdk]:             https://developer.android.com/guide/topics/manifest/uses-sdk-element.html
[platform_spec]:        ../reference/cordova-cli/index.html#platform-spec
[plugin_preference]:    ../plugin_ref/spec.html#preference
[plugin_spec]:          ../reference/cordova-cli/index.html#plugin-spec
[plugin_cli]:           ../reference/cordova-cli/index.html#cordova-plugin-command
[allow_list_navigation]: ../guide/appdev/allowlist/index.html#navigation-allow-list
[allow_list_intent]:     ../guide/appdev/allowlist/index.html#intent-allow-list
[statusbar_plugin]:     ../reference/cordova-plugin-statusbar/
[edit_config]:          ../plugin_ref/spec.html#edit-config
[config_file]:          ../plugin_ref/spec.html#config-file
