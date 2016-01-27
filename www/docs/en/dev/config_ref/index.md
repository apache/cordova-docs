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

title: The config.xml File
---

# The config.xml File

config.xml is a global configuratino file that controls many aspects
of a cordova application's behavior. This
platform-agnostic XML file is arranged based on the W3C's [Packaged
Web Apps (Widgets)](http://www.w3.org/TR/widgets/) specification, and
extended to specify core Cordova API features, plugins, and
platform-specific settings.

For projects created with the Cordova CLI (described in The
Command-Line Interface), this file can be found in the top-level
directory:

        app/config.xml

Note that before version 3.3.1-0.2.0, the file existed at `app/www/config.xml`,
and that having it here is still supported.

When using the CLI to build a project, versions of this file are
passively copied into various `platforms/` subdirectories, for example:

        app/platforms/ios/AppName/config.xml
        app/platforms/blackberry10/www/config.xml
        app/platforms/android/res/xml/config.xml

In addition to the various configuration options detailed below, you
can also configure an application's core set of images for each target
platform. See [Icons and Splash Screens](images.html) for more information.

# widget
   Root element of the config.xml document.
    
   Attributes(type) | Description
   ---------------- | ------------
   id (string) | *Required: true* <br/> Specifies the app's reverse-domain identifier, and the `version` its full version number expressed in major/minor/patch notation.
   version (string) | *Required: true* <br/> Full version number expressed in major/minor/patch notation.
   versionCode (string) | *Required: false* <br/> **Platforms supported: Android** <br/> Alternative version for Android.
   CFBundleVersion (string) | *Required: false* <br/> **Platforms supported: iOS** <br/> Alternative version for iOS.  
   packageVersion (string) | *Required: false* <br/> **Platforms supported: Windows** <br/> Alternative version for Windows.
   packageName (string) | *Default: Cordova.Example* <br/> **Platforms supported: Windows** <br/> Package name for Windows.
   xmlns (string) | *Required: true* <br/> namespace for the config.xml document.
   xmlns:cdv (string) | *Required: true* <br/> namespace prefix.
    
   Examples:

    <widget id="io.cordova.hellocordova">
    </widget>

    <widget version="0.0.1">
    </widget>

    <!-- Android -->
    <widget versionCode="0.1.3">
    </widget>

    <!-- iOS -->
    <widget CFBundleVersion="0.1.3">
    </widget>

    <!-- Windows -->
    <widget packageVersion="0.1.3">
    </widget>

    <widget xmlns="http://www.w3.org/ns/widgets">
    </widget>


## name
   Specifies the app's formal name, as it appears on the device's home screen and within app-store interfaces.

   Example:

    <widget ...>
        <name>HelloCordova</name>
    </widget>
    
## description
   Specifies metadata that may appear within app-store listings.

   Example:
   
    <widget ...>
        <description>A sample Apache Cordova application</description>
    </widget>

    
## author
   Specifies contact information that may appear within app-store lisitngs.
   
   Attributes (type) | Description
   ----------------- | ------------
   email (string) | *Required: true <br/>* Email of the author.
   href (string) | *Required: true <br/>* Website of the author.

   Examples:

    <widget ...>
        <author email="dev@cordova.apache.org" href="http://cordova.io"></author>
    </widget>

    
## content
   Optional.
   Defines the app's starting page in the top-level web assets directory. The default value is index.html, which customarily
   appears in a project's top-level www directory.
   
   Attributes (type) | Description
   ----------------- | ------------
   src (string) | *Required: true <br/>* Defines the app's starting page in the top-level web assets directory. The default value is index.html, which customarily
   appears in a project's top-level www directory.

   Example:

    <widget ...>
        <content src="startPage.html"></content>
    </widget>

    
## access
   Defines the set of external domains the app is allowed to communicate with. The default value shown above allows it to access any server. 
   See the Domain [Whitelist Guide](../guide/appdev/whitelist/index.html) for details. 

   Attributes (type) | Description
   ----------------- | ------------
   origin (string) | *Required: true <br/>* Defines the set of external domains the app is allowed to communicate with. 
   The default value shown above allows it to access any server. 
   See the Domain [Whitelist Guide](../guide/appdev/whitelist/index.html) for details. 

   Examples:

    <widget ...>
        <access origin="*"></content>
    </widget>
    
    <widget ...>
        <access origin="http://google.com"></content>
    </widget>
    
    
## preference
   Sets various optinos as pairs of name/value attributes. Each preference's name is case-insensitive. Many preferences are unique to specific platforms,
   and will be indicated as such.  
   
   Attributes (type) | Description
   ----------------- | ------------
   DisallowOverscroll (boolean) | *Default: false* <br/> **Platforms supported: iOS, Android** <br/> Set to **true** if you don't want the interface to display any feedback when users scroll past the beginning or end of content. On iOS, overscroll gestures cause content to bounce back to its original position. on Android, they produce a more subtle glowing effect along the top or bottom edge of the content. <br/>
   FullScreen (boolean) | *Default: false* <br/> Allows you to hide the status bar at the top of the screen.
   BackgroundColor (string) | *Required: false* <br/> **Platforms supported: Android, BlackBerry** <br/> Supports a four-byte hex value, with the first byte representing the alpha channel, and standard RGB values for the following three bytes. 
   HideKeyboardFormAccessoryBar (boolean) | *Default: false* <br/> **Platforms supported: BlackBerry** <br/> set to true to hide the additional toolbar that appears above the keyboard, helping users navigate from one form input to another.
   Orientation (string) | *Default: default* <br/> Allowed values: default, landscape, portait <br/> Allows you to lock orientation and prevent the interface from rotating in response to changes in orientation. <br/> **NOTE:** The default value means Cordova will strip the orientation preference entry from the platform's manifest/configuration file allowing the platform to fallback to its default behavior. For iOS, to specify both portrait & landscape mode you would use the platform specific value 'all'.
   EnableViewportScale (boolean) | *Default: false* <br/>  **Platforms supported: iOS** <br/> Set to true to allow a viewport meta tag to either disable or restrict the range of user scaling, which is enabled by default. Place a viewport such as the following in the HTML to disable scaling and fit content flexibly within the rendering WebView: <br/> ```<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />```
   MediaPlaybackAllowsAirPlay (boolean) | *Default: true* <br/> **Platforms supported: iOS** <br/> Set to false to prevent Air Play from being used in this view. Available in default UIWebView and WKWebView.
   MediaPlaybackRequiresUserAction (boolean) | *Default: false* <br/> **Platforms supported: iOS** <br/> Set to true to prevent HTML5 videos or audios from playing automatically with the autoplay attribute or via JavaScript.
   AllowInlineMediaPlayback (boolean) | *Default: false* <br/> **Platforms supported: iOS** <br/> Set to true to allow HTML5 media playback to appear inline within the screen layout, using browser-supplied controls rather than native controls. For this to work, add the webkit-playsinline attribute to any ```<video>``` elements. 
   BackupWebStorage (string) | *Default: cloud* <br/> Allowed values: none, local, cloud. <br/> **Platforms supported: iOS** <br/>  Set to cloud to allow web storage data to backup via iCloud. Set to local to allow only local backups via iTunes sync. Set to none prevent web storage backups.
   TopActivityIndicator (string) | *Default: gray* <br/> Allowed values: whiteLarge, white, gray. <br/> **Platforms supported: iOS** <br/>  <br/> Controls the appearance of the small spinning icon in the status bar that indicates significant processor activity. 
   KeyboardDisplayRequiresUserAction (boolean) | *Default: true* <br/> **Platforms supported: iOS** <br/> Set to false to allow the keyboard to appear when calling focus() on form inputs.
   SuppressesIncrementalRendering (boolean) | *Default: false* <br/> **Platforms supported: iOS** <br/> Set to true to wait until all content has been received before it renders to the screen.
   GapBetweenPages (float) | *Default: 0* <br/> **Platforms supported: iOS** <br/> The size of the gap, in points, between pages.
   PageLength (float) | *Default: 0* <br/> **Platforms supported: iOS** <br/> The size of each page, in points, in the direction that the pages flow. When PaginationMode is right to left or left to right, this property represents the width of each page. When PaginationMode is topToBottom or bottomToTop, this property represents the height of each page. The default value is 0, which means the layout uses the size of the viewport to determine the dimensions of the page.
   PaginationBreakingMode (string) | *Default: page* <br/> Allowed values: page, column <br/> **Platforms supported: iOS** <br/> Valid values are page and column.The manner in which column- or page-breaking occurs. This property determines whether certain CSS properties regarding column- and page-breaking are honored or ignored. When this property is set to column, the content respects the CSS properties related to column-breaking in place of page-breaking.
   PaginationMode (string) | *Default: unpaginated* <br/> Allowed values: unpaginated, leftToRight, topToBottom, bottomToTop, rightToLeft <br/> **Platforms supported: iOS** <br/> This property determines whether content in the web view is broken up into pages that fill the view one screen at a time,or shown as one long scrolling view. If set to a paginated form, this property toggles a paginated layout on the content, causing the web view to use the values of PageLength and GapBetweenPages to relayout its content.
   UIWebViewDecelerationSpeed (string) | *Default: normal* <br/> Allowed values: normal, fast <br/> **Platforms supported: iOS** <br/> This property controls the deceleration speed of momentum scrolling. normal is the default speed for most native apps, and fast is the default for Mobile Safari.
   ErrorUrl (string) | **Platforms supported: iOS** <br/> If set, will display the referenced local page upon an error in the application.
   OverrideUserAgent (string) | **Platforms supported: iOS** <br/> If set, the value will replace the old UserAgent of webview. It is helpful to identify the request from app/browser when requesting remote pages. Use with caution, this may causes compitiable issue with web servers. For most cases, use AppendUserAgent instead.
   AppendUserAgent (string) | **Platforms supported: iOS** <br/> If set, the value will append to the end of old UserAgent of webview. When using with OverrideUserAgent, this value will be ignored.
   target-device (string) | *Default: universal* <br/> Allowed values: handset, tablet, universal <br/> **Platforms supported: iOS** <br/> This property maps directly to TARGETED_DEVICE_FAMILY in the xcode project. Note that if you target universal (which is the default) you will need to supply screen shots for both iPhone and iPad or your app may be rejected.
   deployment-target (string) | **Platforms supported: iOS** <br/> This sets the IPHONEOS_DEPLOYMENT_TARGET in the build, which ultimately tranlsates to the MinimumOSVersion in the ipa. For more details please refer to Apple's documentation on Deployment Target Settings
   CordovaWebViewEngine (string) | *Default: CDVUIWebViewEngine* <br/> **Platforms supported: iOS** <br/> This sets the WebView engine plugin to be used to render the host app. The plugin must conform to the CDVWebViewEngineProtocol protocol. The 'value' here should match the 'feature' name of the WebView engine plugin that is installed. This preference usually would be set by the WebView engine plugin that is installed, automatically.
   SuppressesLongPressGesture (boolean) | *Default: false* <br/> **Platforms supported: iOS** <br/> Set to true to avoid iOS9+ rendering a magnifying glass widget when the user longpresses the webview. Test your app thoroughly since this may interfere with text selection capabilities.
   Suppresses3DTouchGesture (boolean) | *Default: false* <br/> **Platforms supported: iOS** <br/> Set to true to avoid 3D Touch capable iOS devices rendering a magnifying glass widget when the user applies force while longpressing the webview. Test your app thoroughly since this disables onclick handlers, but plays nice with ontouchend. If this setting is true, SuppressesLongPressGesture will effectively be true as well.
   KeepRunning (boolean) | *Default: true* <br/> **Platforms supported: Android** <br/> Determines whether the application stays running in the background even after a [pause](../../../cordova/events/events.pause.html) event fires. Setting this to false does not kill the app after a [pause](../../../cordova/events/events.pause.html) event, but simply halts execution of code within the cordova webview while the app is in the background.
   LoadUrlTimeoutValue (number in milliseconds) | *Default: 20000, 20 seconds* <br/> **Platforms supported: Android** <br/> hen loading a page, the amount of time to wait before throwing a timeout error. 
   SplashScreen (string) | *Default: splash* <br/> **Platforms supported: Android** <br/> The name of the file minus its extension in the res/drawable directory. Various assets must share this common name in various subdirectories.
   SplashScreenDelay (number in milliseconds) | *Default: 3000, 3 seconds* <br/> **Platforms supported: Android** <br/> The amount of time the splash screen image displays.
   InAppBrowserStorageEnabled (boolean) | *Default: true* <br/> **Platforms supported: Android** <br/> Controls whether pages opened within an InAppBrowser can access the same localStorage and WebSQL storage as pages opened with the default browser.
   LoadingDialog (string) | *Default: null* <br/> **Platforms supported: Android** <br/> If set, displays a dialog with the specified title and message, and a spinner, when loading the first page of an application. The title and message are separated by a comma in this value string, and that comma is removed before the dialog is displayed.
   ErrorUrl (URL) | *Default: null* <br/> **Platforms supported: Android** <br/> If set, will display the referenced page upon an error in the application instead of a dialog with the title "Application Error".
   ShowTitle (boolean) | *Default: false* <br/> **Platforms supported: Android** <br/> Show the title at the top of the screen.
   LogLevel (string) | *Default: ERROR* <br/> Allowed values: ERROR, WARN, INFO, DEBUG, VERBOSE <br/> **Platforms supported: Android** <br/> Sets the minimum log level through which log messages from your application will be filtered.
   SetFullscreen (boolean) | *Default: false* <br/> **Platforms supported: Android** <br/> Same as the Fullscreen parameter in the global configuration of this xml file. This Android-specific element is deprecated in favor of the global Fullscreen element, and will be removed in a future version.
   AndroidLaunchMode (string) | *Default: singleTop* <br/> Allowed values: standard, singleTop, singleTask, singleInstance <br/> **Platforms supported: Android** <br/> Sets the Activity android:launchMode attribute. This changes what happens when the app is launched from app icon or intent and is already running. 
   DefaultVolumeStream (string) | *Default: default* <br/> **Platforms supported: Android**<br/> Added in cordova-android 3.7.0, This preference sets which volume the hardware volume buttons link to. By default this is "call" for phones and "media" for tablets. Set this to "media" to have your app's volume buttons always change the media volume. Note that when using Cordova's media plugin, the volume buttons will dynamically change to controlling the media volume when any Media objects are active.
   OverrideUserAgent (string) | **Platforms supported: Android** <br/> If set, the value will replace the old UserAgent of webview. It is helpful to identify the request from app/browser when requesting remote pages. Use with caution, this may causes compitiable issue with web servers. For most cases, use AppendUserAgent instead.
   AppendUserAgent (string) | **Platforms supported: Android** <br/> If set, the value will append to the end of old UserAgent of webview. When using with OverrideUserAgent, this value will be ignored.
   ChildBrowser (string) | *Default: enable* <br/> **Platforms supported: BlackBerry** <br/> Disables child browser windows. By default, apps launch a secondary browser window to display resources accessed via window.open() or by specifying a _blank anchor target. Specify disable to override this default behavior.
   PopupBlocker (string) | *Default: enable* <br/> **Platforms supported: BlackBerry** <br/> Enables the popup blocker, which prevents calls to window.open(). By default, popups display in a child browser window. Setting the preference to enable prevents it from displaying at all.
   WebSecurity (string) | *Default: enable* <br/> **Platforms supported: BlackBerry** <br/> Set to disable to override web security settings, allowing access to remote content from unknown sources. This preference is intended as a development convenience only, so remove it before packaging the app for distribution. For the released app, all URIs should be known and whitelisted using the <access> element, described in the Domain Whitelist Guide.
   windows-phone-target-version (string) | **Platform supported: Windows** <br/> Sets the version of Windows Phone for which the package (resulting from ```cordova build```) will target. If none is specified, it will be set to the same version as ```windows-target-version``` (if found). 
   windows-target-version (string) | **Platform supported: Windows** <br/> Sets the version of Windows for which the package (resulting from ```cordova build```) will target. If none is specified, it will be set to '8.1'.
   Min/Max UAP (Regex) | Allowed values: ```/(Microsoft.+?|Windows.+?)\-(MinVersion|MaxVersionTested)/i``` <br/> **Platforms supported: Windows** <br/> Sets the min/max UAP versions for Windows. If nothing is specified, Windows.Universal at version 10.0.10240.0 will be used.
   
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
    <preference name="SplashScreen" value="mySplash"/>
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

    <!-- BlackBerry only preferences -->
    <preference name="ChildBrowser" value="disable"/>
    <preference name="PopupBlocker" value="enable"/>
    <preference name="WebSecurity" value="disable"/>
    
## feature
   If you use the CLI to build applications, you use the plugin command to enable device APIs. This does not modify the top-level config.xml file, so the <feature> element does not apply to your workflow. If you work directly in an SDK and using the platform-specific config.xml file as source, you use the <feature> tag to enable device-level APIs and external plugins. They often appear with custom values in platform-specific config.xml files. See the API Reference for details on how to specify each feature. See
   the [Plugin Development Guide](../guide/hybrid/plugins/index.html) for more information on plugins.

   Attributes (type) | Description
   ----------------- | ------------
   name (string) | *Required: true <br/>* The name of the plugin to enable.


### param
   Used to specify what certain plugin parameters such as: what package to retrieve the plugin code from, and whether the plugin code is to be initialized during the Webview's initialization.
   
   Attributes (type) | Description
   ----------------- | ------------
   name (string) | *Required: true* <br/> Allowed values: android-package, ios-package, onload. <br/> **Platforms supported: iOS, Android** <br/> 'ios-package' and 'android-package' are used to specify the name of the package (as specified by the 'value' attribute) to be used to initialize the plugin code, while 'onload' is used to specify whether the corresponding plugin (as specified in the 'value' attribute) is to be instantiated when the controller is initialized.
   value (string or boolean) | *Required: true* <br/> **Platforms supported: iOS, Android** <br/> Specifies the name of the package to be used to initialize the plugin code (when the 'name' attribute is android-package or ios-package), specifies the name of the plugin to be loaded during controller initialization (when 'name' attribute is set to 'onload').
     
   
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


## platform
   When using the CLI to build applications, it is sometimes necessary to specify preferences or other elements specific to a particular platform. Use the <platform> element to specify configuration that should only appear in a single platform-specific config.xml file.  
  
   Attributes (type) | Description
   ----------------- | ------------
   name (string) | *Required: true* <br/> The platform whose preferences are being defined.
   
   Examples:
   
    <platform name="android">
        <preference name="Fullscreen" value="true" />
    </platform>

## hook
   Represents your custom script which will be called by Cordova when
   certain action occurs (for example, after plugin is added or platform
   prepare logic is invoked). This is useful when you need to extend
   default Cordova functionality. See [Hooks Guide](../guide/appdev/hooks/index.html) for more information.
   
   Attributes (type) | Description
   ----------------- | ------------
   type (string) | *Required: true* <br/> Specifies the action during which the custom script is to be called.
   src (string) | *Required: true* <br/> Specifies the location of the script to be called when a specific action occurs.
   
   Examples:
   
    <hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />
    