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

title: Plugin.xml reference documentation
toc_title: Plugin.xml
description: List of supported tags in the plugin.xml file.
---

# Plugin.xml

Plugin.xml file defines the structure and settings required for your plugin. It has several elements to provide details about your plugin.

# plugin

The `plugin` element is the plugin manifest's top-level element.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
xmlns(string) | *Required* <br/> The plugin namespace, `http://apache.org/cordova/ns/plugins/1.0`. If the document contains XML from other namespaces, such as tags to be added to the `AndroidManifest.xml` file in the case of Android, those namespaces should also be included in the <plugin> element.
id(string) | *Required* <br/> A npm-style identifier for the plugin.
version(string) | *Required* <br/> A version number for the plugin. [Semver](http://semver.org/) syntax is supported.

Example:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
    xmlns:android="http://schemas.android.com/apk/res/android"
    id="my-plugin-id"
    version="1.0.2">
```

## engines and engine

The child elements of the `<engines>` element specify versions of Apache Cordova-based frameworks that this plugin supports. The CLI aborts with a non-zero code for any plugin whose target project does not meet the engine's constraints. If no <engine> tags are specified, the CLI attempts to install into the specified cordova project directory blindly.

>NOTE: In **Cordova 6.1.0+**, the recommended place to specify platform, plugin, and CLI dependencies
>is in a plugin's `package.json`. See [specifying Cordova dependencies](../guide/hybrid/plugins/index.html#specifying-cordova-dependencies)
>for more information

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
name(string) | *Required* <br/> Name of the engine. Here are the default engines that are supported : <ul><li> `cordova` </li> <li> `cordova-plugman` </li> <li> `cordova-android` </li> <li> `cordova-browser` </li> <li> `cordova-ios` </li> <li> `cordova-windows` </li> <li> `cordova-osx` </li> <li> `windows-os` </li> <li> `android-sdk` (returns the highest Android api level installed) </li> <li> `windows-sdk` (returns the native windows SDK version) </li> <li> `apple-xcode` (returns the xcode version) </li> <li> `apple-ios` (returns the highest iOS version installed) </li> <li> `apple-osx` (returns the OSX version) </li> You can also specify a custom framework apart from the default ones.
version(string) | *Required* <br/> The version that your framework must have in order to install. Semver syntax is supported.
scriptSrc(string) | **For custom frameworks only** <br/> *Required* <br/>  The script file that tells plugman the version of the custom framework. Ideally, this file should be within the top level directory of your plugin directory.
platform(string) | **For custom frameworks only** <br/> *Required* <br/> The platforms your framework supports. You may use the wildcard `*` to say supported for all platforms, specify multiple with a pipe character like `android|ios` or just a single platform like `android`.

Examples:
```xml
<engines>
  <engine name="cordova-android" version="=1.8.0" />
</engines>
```

Engine elements may also specify fuzzy matches using '>', '>=' etc. to avoid repetition, and to reduce maintenance when the underlying platform is updated.
```xml
<engines>
  <engine name="cordova-android" version=">=1.8.0" />
</engines>
```

The `<engine>` tags also has default support for all of the main platforms Cordova exists on. Specifying the cordova engine tag means that all versions of Cordova on any platform must satisfy the engine version attribute. You may also list specific platforms and their versions in order to override the catch-all cordova engine:
```xml
<engines>
  <engine name="cordova" version=">=1.7.0" />
  <engine name="cordova-android" version=">=1.8.0" />
  <engine name="cordova-ios" version=">=1.7.1" />
</engines>
```

Custom frameworks example:
```xml
<engines>
  <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
  <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
  <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
</engines>
```

## name

The `name` element is used to specify the name of the plugin. This element does not (yet) handle localization.

Example:
```xml
<name>Foo</name>
```

## description

The `description` element is used to specify the description of the plugin. This element does not (yet) handle localization.

Example:
```xml
<description>Foo plugin description</description>
```

## author

The content of the `author` element contains the name of the plugin author.

Example:
```xml
<author>Foo plugin author</author>
```

## keywords

The content of the `keywords` element contains comma separated keywords to describe the plugin.

Example:
```xml
<keywords>foo,bar</keywords>
```

## license

This element is used to specify the license of the plugin.

Example:
```xml
<license>Apache 2.0 License</license>
```

## asset

This element is used to list the files or directories to be copied into a Cordova app's `www` directory. Any `<asset>` elements that are nested within `<platform>` elements specify platform-specific web assets.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
src(string) | *Required* <br/>  Where the file or directory is located in the plugin package, relative to the `plugin.xml` document. If a file does not exist at the specified src location, the CLI stops and reverses the installation process, issues a notification about the conflict, and exits with a non-zero code.
target(string) | *Required* <br/> Where the file or directory should be located in the Cordova app, relative to the `www` directory. If a file already exists at the target location, the CLI stops and reverses the installation process, issues a notification about the conflict, and exits with a non-zero code.

Examples:
```xml
<!-- a single file, to be copied in the root directory -->
<asset src="www/foo.js" target="foo.js" />
<!-- a directory, also to be copied in the root directory -->
<asset src="www/foo" target="foo" />
```

Assets can be targeted to subdirectories as well. This will create the `js/experimental` directory within the `www` directory, unless already present, and copy the `new-foo.js` file and renames it to `foo.js`.
```xml
<asset src="www/new-foo.js" target="js/experimental/foo.js" />
```

## js-module

Most plugins include one or more JavaScript files.  Each `<js-module>` tag corresponds to a JavaScript file, and prevents the plugin's users from having to add a `<script>` tag for each file. Do not wrap the file with cordova.define, as it is added automatically. The module is wrapped in a closure, with module, exports, and require in scope, as is normal for AMD modules. Nesting `<js-module>` elements within `<platform>` declares platform-specific JavaScript module bindings.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
src(string) | References a file in the plugin directory relative to the `plugin.xml` file. If src does not resolve to an existing file, the CLI stops and reverses the installation, issues a notification of the problem, and exits with a non-zero code.
name(string) | Provides the last part of the module name. It can generally be whatever you like, and it only matters if you want to use cordova.require to import other parts of your plugins in your JavaScript code. The module name for a `<js-module>` is your plugin's id followed by the value of name.

Example:

When installing a plugin with the example below, socket.js is copied to `www/plugins/my-plugin-id/socket.js`, and added as an entry to `www/cordova_plugins.js`. At load time, code in `cordova.js` uses XHR to read each file and inject a `<script>` tag into HTML.
```xml
<js-module src="socket.js" name="Socket">
</js-module>
```
Also for this example, with a plugin id of `chrome-socket`, the module name will be `chrome-socket.Socket`.

### clobbers

Allowed within `<js-module>` element. Used to specify the namespace under `window` object where module.exports gets inserted. You can have as many `<clobbers>` as you
like. Any object not available on `window` is created.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
target(string) | The namespace where module.exports gets inserted to.

Example:
```xml
<js-module src="socket.js" name="Socket">
  <clobbers target="chrome.socket" />
</js-module>
```
Here module.exports gets inserted into the `window` object as `window.chrome.socket`.

### merges

Allowed within `<js-module>` element. Used to specify the namespace under `window` object where module.exports gets merged with any existing value. If any key already exists, the module's version overrides the original. You can have as many `<merges>` as you like. Any object not available on `window` is created.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
target(string) | The namespace which module.exports gets merged to.

Example:
```xml
<js-module src="socket.js" name="Socket">
  <merges target="chrome.socket" />
</js-module>
```
Here module.exports gets merged with any existing value at `window.chrome.socket`.

### runs

Allowed within `<js-module>` element. It implies that your code should be specified with `cordova.require`, but not installed on the `window` object. This is useful when initializing the module, attaching event handlers or otherwise. You can only have up to one `<runs/>` tag. Note that including a `<runs/>` with `<clobbers/>` or `<merges/>` is redundant, since they also `cordova.require` your module.

Example:
```xml
<js-module src="socket.js" name="Socket">
  <runs/>
</js-module>
```

## dependency

The `<dependency>` tag allows you to specify other plugins on which the current plugin depends. The plugins are referenced by their unique npm ids or by github url.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
id(string) | Provides the ID of the plugin.
url(string) | A URL for the plugin. This should reference a git repository, which the CLI attempts to clone.
commit(string) | This is any git reference understood by `git checkout`: a branch or tag name (e.g., `master`, `0.3.1`), or a commit hash (e.g., `975ddb228af811dd8bb37ed1dfd092a3d05295f9`).
subdir(string) | Specifies that the targeted plugin dependency exists as a subdirectory of the git repository. This is helpful because it allows the repository to contain several related plugins, each specified individually. <br/> If you set the `url` of a `<dependency>` tag to `"."` and provide a `subdir`, the dependent plugin is installed from the same local or remote git repository as the parent plugin that specifies the `<dependency>` tag. <br/> Note that the `subdir` always specifies a path relative to the _root_ of the git repository, not the parent plugin. This is true even if you installed the plugin with a local path directly to it.The CLI finds the root of the git repository and then finds the other plugin from there.
version(string) | The version of the plugin depended on. Semver syntax is supported.

Examples:
```xml
<dependency id="cordova-plugin-someplugin" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
<dependency id="cordova-plugin-someplugin" version="1.0.1">
```

## platform

Identifies platforms that have associated native code or require modifications to their configuration files. Tools using this specification can identify supported platforms and install the code into Cordova projects. Plugins without `<platform>` tags are assumed to be JavaScript-only, and therefore installable on any and all platforms.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
name(string) | *Required* <br/> Allowed values: ios, android, windows, browser, osx <br/> Identifies a platform as supported, associating the element's children with that platform.

Example:
```xml
<platform name="android">
  <!-- android-specific elements -->
</platform>
```

## source-file

Identifies executable source code that should be installed into a project.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
src(string) | *Required* <br/> Location of the file relative to `plugin.xml`. If the src file can't be found, the CLI stops and reverses the installation, issues a notification about the problem, and exits with a non-zero code.
target-dir(string) | A directory into which the files should be copied, relative to the root of the Cordova project. In practice, this is most important for Java-based platforms, where a file in the `com.alunny.foo` package must be located within the `com/alunny/foo` directory. For platforms where the source directory is not important, this attribute should be omitted.
framework(boolean) <br/> ==iOS== | *Default: false* <br/>  If set to true, also adds the specified file as a framework to the project.
compiler-flags(string) <br/> ==iOS== | If set, assigns the specified compiler flags for the particular source file.

Examples:
```xml
<!-- android -->
<source-file src="src/android/Foo.java" target-dir="src/com/alunny/foo" />
<!-- ios -->
<source-file src="src/ios/CDVFoo.m" />
<source-file src="src/ios/someLib.a" framework="true" />
<source-file src="src/ios/someLib.a" compiler-flags="-fno-objc-arc" />
```

## header-file

This is like `<source-file>` element but specifically for platforms such as iOS and Android that distinguish between source files, headers, and resources. This is not supported by Windows.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
src(string) | *Required* <br/> Location of the file relative to `plugin.xml`. If the src file can't be found, the CLI stops and reverses the installation, issues a notification about the problem, and exits with a non-zero code.
target-dir(string) | A directory into which the files should be copied, relative to the root of the Cordova project.
type(string) <br/> ==iOS== | If this value is `BridgingHeader`, the file is imported in the `Bridging-Header.h` and can be called from swift program.

Example:

For iOS:
```xml
<header-file src="CDVFoo.h" />
<header-file src="CDVSomeHeader.h" type="BridgingHeader" />
```

## resource-file

This is like `<source-file>` element, but specifically for platforms such as iOS and Android that distinguish between source files, headers, and resources.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
src(string) | *Required* <br/> Location of the file relative to `plugin.xml`. If the src file can't be found, the CLI stops and reverses the installation, issues a notification about the problem, and exits with a non-zero code.
target(string) | Path to where the file will be copied in your directory.
arch(string) <br/> ==windows== | Allowed values: `x86`, `x64` or `ARM`. <br/> Indicates that the file should only be included when building for the specified architecture.
device-target <br/> ==windows== | Allowed values: `win` (or `windows`), `phone` or `all`. <br/> Indicates that the file should only be included when building for the specified target device type.
versions <br/> ==windows== | Indicates that the file should only be included when building for versions that match the specified version string. Value can be any valid node semantic version range string.
reference <br/> ==windows== | Indicates that the file should be referenced from the src rather than copied to the target destination. The file will appear in Visual Studio with the file name specified by target, however will point to the respective src, depending on the architecture.

Examples:

For Android:
```xml
<resource-file src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" />
```

For Windows:
```xml
<resource-file src="src/windows/win81/MobServices.pri" target="win81\MobServices.pri" device-target="windows" versions="8.1" arch="x64"/>

<!-- Example of referencing  -->
<resource-file src="x86/foo.dll" target="foo.dll" arch="x86" reference="true" />
<resource-file src="x64/foo.dll" target="foo.dll" arch="x64" reference="true" />
```
__NOTE__: `target` should use backslashes to avoid DEP2100 deploy error in Visual Studio.

## config-file

Identifies an XML-based configuration file to be modified, where in that document the modification should take place, and what should be modified.
Two file types that have been tested for modification with this element are `xml` and `plist` files.
The `config-file` element only allows you to append new children to an XML document tree. The children are XML literals to be inserted in the target document.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
target(string) | The file to be modified, and the path relative to the root of the Cordova project. If the specified file does not exist, the tool ignores the configuration change and continues installation. <br/> The target can include wildcard (`*`) elements. In this case, the CLI recursively searches through the project directory structure and uses the first match. <br/> On iOS, the location of configuration files relative to the project directory root is not known, so specifying a target of `config.xml` resolves to `cordova-ios-project/MyAppName/config.xml`.
parent(string) | An XPath selector referencing the parent of the elements to be added to the config file. If you use absolute selectors, you can use a wildcard (`*`) to specify the root element, e.g., `/*/plugins`. If the selector does not resolve to a child of the specified document, the tool stops and reverses the installation process, issues a warning, and exits with a non-zero code. <br/> For `plist` files, the `parent` determines under what parent key the specified XML should be inserted.
after(string) | A prioritized list of accepted siblings after which to add the XML snippet. Useful for specifying changes in files which require strict ordering of XML elements like [this](http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff769509%28v=vs.105%29.aspx#BKMK_EXTENSIONSelement).
device-target(string) <br/> ==windows== | Allowed values: `win`, `phone`, `all`. <br/> Applicable when affecting the meta-name `package.appxmanifest`, this attribute indicates that the file should only be modified when building for the specified target device type.
versions(string) <br/> ==windows== | Applicable when affecting the meta-name `package.appxmanifest`, this attribute indicates that app manifests for specific Windows versions should only be altered for versions that match the specified version string. Value can be any valid node semantic version range string.

Examples:

For XML:
```xml
<config-file target="AndroidManifest.xml" parent="/manifest/application">
    <activity android:name="com.foo.Foo" android:label="@string/app_name">
        <intent-filter>
        </intent-filter>
    </activity>
</config-file>
```

For `plist`:
```xml
<config-file target="*-Info.plist" parent="CFBundleURLTypes">
    <array>
        <dict>
            <key>PackageName</key>
            <string>$PACKAGE_NAME</string>
        </dict>
    </array>
</config-file>
```

For windows-specific attributes:
```xml
<config-file target="package.appxmanifest" parent="/Package/Capabilities" versions="&lt;8.1.0">
    <Capability Name="picturesLibrary" />
    <DeviceCapability Name="webcam" />
</config-file>
<config-file target="package.appxmanifest" parent="/Package/Capabilities" versions=">=8.1.0" device-target="phone">
    <DeviceCapability Name="webcam" />
</config-file>
```
The above example will set pre-8.1 platforms (Windows 8, specifically) to require the `webcam` device capability and the `picturesLibrary` general capability, and apply the `webcam` device capability only to Windows 8.1 projects that build for Windows Phone.  Windows desktop 8.1 systems are unmodified.

## edit-config
Similar to `config-file`, `edit-config` identifies an XML-based configuration file to be modified, where in that document the modification should take place, and what should be modified. Instead of appending new children to an XML document tree, `edit-config` makes modifications to attributes of XML elements. There are two modes which will determine what type of attribute modification will be made, `merge` or `overwrite`. `edit-config` has one child and that child will contain the attributes to be added.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
file(string) | The file to be modified, and the path relative to the root of the Cordova project. If the specified file does not exist, the tool ignores the configuration change and continues installation. <br/> The target can include wildcard (`*`) elements. In this case, the CLI recursively searches through the project directory structure and uses the first match. <br/> On iOS, the location of configuration files relative to the project directory root is not known, so specifying a target of `config.xml` resolves to `cordova-ios-project/MyAppName/config.xml`.
target(string) | An XPath selector referencing the target element to make attribute modifications to. If you use absolute selectors, you can use a wildcard (`*`) to specify the root element, e.g., `/*/plugins`. If the selector does not resolve to a child of the specified document, the tool stops and reverses the installation process, issues a warning, and exits with a non-zero code.
mode(string) | The mode that determines what type of attribute modifications will be made. <br/> `merge` - Adds the specified attributes to the target element. Will replace the attribute values if the specified attributes already exist in the target element. <br/> `overwrite` - Replaces all attributes in the target element with the attributes specified.

Example:

```xml
<!-- plugin-1 -->
<edit-config file="AndroidManifest.xml" target="/manifest/uses-sdk" mode="merge">
    <uses-sdk android:minSdkVersion="16" android:maxSdkVersion="23" />
</edit-config>
<edit-config file="AndroidManifest.xml" target="/manifest/application/activity[@android:name='MainActivity']" mode="overwrite">
    <activity android:name="MainActivity" android:label="NewLabel" android:configChanges="orientation|keyboardHidden" />
</edit-config>
```

AndroidManifest.xml before adding plugin-1:
```xml
<manifest android:hardwareAccelerated="true" android:versionCode="1" android:versionName="0.0.1" package="io.cordova.hellocordova" xmlns:android="http://schemas.android.com/apk/res/android">
    ...
        <activity android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale" android:label="@string/activity_name" android:launchMode="singleTop" android:name="MainActivity" android:theme="@android:style/Theme.DeviceDefault.NoActionBar" android:windowSoftInputMode="adjustResize">
            ...
        </activity>
    ...
    <uses-sdk android:minSdkVersion="14" android:targetSdkVersion="23" />
</manifest>
```

AndroidManifest.xml after adding plugin-1:
```xml
<manifest android:hardwareAccelerated="true" android:versionCode="1" android:versionName="0.0.1" package="io.cordova.hellocordova" xmlns:android="http://schemas.android.com/apk/res/android">
    ...
        <activity android:configChanges="orientation|keyboardHidden" android:label="NewLabel" android:name="MainActivity">
            ...
        </activity>
    ...
    <uses-sdk android:maxSdkVersion="23" android:minSdkVersion="16" android:targetSdkVersion="23" />
</manifest>
```
#### Managing edit-config conflicts

Multiple plugins can not modify the same attributes because it may cause problems with the application. An error will be thrown and plugin install will fail. The conflicting `edit-config` tags must be resolved before the plugin can be added. Make modifications to conflicting tags to resolve the conflict, then remove and re-add the updated plugins.

There is an option for those who are certain that the plugin should be installed despite the conflicts. The `--force` flag can be used with `cordova plugin add`. Force adding the plugin will revert conflicting changes of other plugins so that it can be added without issues. `--force` should be used with caution as reverting changes of other plugins may cause the application to not work as expected.

If the plugins ever get in a weird state, remove all plugins and re-add them.

Example:

Assume plugin-1 from above is already installed. Trying to install plugin-2 below will cause an error because plugin-1 has modified `uses-sdk` element in AndroidManifest.xml already.

```xml
<!-- plugin-2 -->
<edit-config file="AndroidManifest.xml" target="/manifest/uses-sdk" mode="merge">
    <uses-sdk android:minSdkVersion="15" />
</edit-config>
```

There are a couple ways plugin-2 can be added:

One possible resolution of the conflict is to remove the `edit-config` tag from plugin-2 and merge it into plugin-1's `edit-config` tag (assuming plugin-1 has no issue with this change). Remove both plugins and re-add them with these changes. plugin-2 should be added cleanly this time.

Removing `edit-config` from plugin-2 and merging it into plugin-1:
```xml
<!-- plugin-1 -->
<edit-config file="AndroidManifest.xml" target="/manifest/uses-sdk" mode="merge">
    <uses-sdk android:minSdkVersion="15" android:maxSdkVersion="23" />
</edit-config>
<edit-config file="AndroidManifest.xml" target="/manifest/application/activity[@android:name='MainActivity']" mode="overwrite">
    <activity android:name="MainActivity" android:label="NewLabel" android:configChanges="orientation|keyboardHidden" />
</edit-config>
```

The resulting AndroidManifest.xml after removing and re-adding both plugins:
```xml
<manifest android:hardwareAccelerated="true" android:versionCode="1" android:versionName="0.0.1" package="io.cordova.hellocordova" xmlns:android="http://schemas.android.com/apk/res/android">
    ...
        <activity android:configChanges="orientation|keyboardHidden" android:label="NewLabel" android:name="MainActivity">
            ...
        </activity>
    ...
    <uses-sdk android:maxSdkVersion="23" android:minSdkVersion="15" android:targetSdkVersion="23" />
</manifest>
```

The second way to add plugin-2 involves adding the plugin with `--force`. The conflicting `edit-config` change from plugin-1 will be reverted and plugin-2's change will be applied. The resulting AndroidManifest.xml will have the `uses-sdk` change from plugin-2 and the `activity` change from plugin-1. Notice only the `uses-sdk` change from plugin-1 is gone since it was the only conflicting change.

The resulting AndroidManifest.xml after force adding plugin-2:
```xml
<manifest android:hardwareAccelerated="true" android:versionCode="1" android:versionName="0.0.1" package="io.cordova.hellocordova" xmlns:android="http://schemas.android.com/apk/res/android">
    ...
        <activity android:configChanges="orientation|keyboardHidden" android:label="NewLabel" android:name="MainActivity">
            ...
        </activity>
    ...
    <uses-sdk android:minSdkVersion="15" android:targetSdkVersion="23" />
</manifest>
```

Note: Reverted changes from `--force` are gone for good. They will not reappear after removing the plugin that was force added. If the reverted changes are needed, all associated plugins should be removed and re-added.

## plugins-plist

Specifies a key and value to append to the correct `AppInfo.plist` file in an iOS Cordova project. This is _outdated_ as it only applies to cordova-ios 2.2.0 and below. Use the `<config-file>` tag for newer versions of Cordova.

Example:
```xml
<plugins-plist key="Foo" string="CDVFoo" />
```

## lib-file

Like source, resource, and header files, but specifically for platforms such as BlackBerry 10 that use user-generated libraries. For the Windows platform, the `<lib-file>` element allows the inclusion of an `<SDKReference>` in the generated Windows project files.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
src(string) | *Required* <br/> The location of the file relative to `plugin.xml`. If `src` can't be found, the CLI stops and reverses the installation, issues a warning about the problem, and exits with a non-zero code. <br/> For Windows, it indicates the name of the SDK to include (which will be used as value of the `Include` attribute of the generated `<SDKReference>` element).
arch(string) | The architecture for which the `.so` file has been built, either `device` or `simulator`. <br/> For Windows, it indicates that the `<SDKReference>` should only be included when building for the specified architecture. Supported values are `x86`, `x64` or `ARM`.
device-target(string) <br/> ==windows== | Allowed values: `win` (or `windows`), `phone` or `all`. <br/> Indicates that the `<SDKReference>` should only be included when building for the specified target device type.
versions(string) <br/> ==windows== | Indicates that the `<SDKReference>` should only be included when building for versions that match the specified version string. Value can be any valid node semantic version range string.

For Android, the `<lib-file>` element is used for installing **.jar** files in the project's **libs directory**. It supports only the `src` attribute which contains the relative path to the .jar file.

Examples:
```xml
<lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
<lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
```

For Windows:
```xml
<lib-file src="Microsoft.WinJS.2.0, Version=1.0" arch="x86" />
<lib-file src="Microsoft.WinJS.2.0, Version=1.0" versions=">=8.1" />
<lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="phone" />
<lib-file src="Microsoft.WinJS.2.0, Version=1.0" target="win" versions="8.0" arch="x86" />
```

## framework

Identifies a framework (usually part of the OS/platform) on which the plugin depends.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
src(string) | *Required* <br/> The name of the system framework or the relative path to one which is included as part of your plugin files.
custom(boolean) | Indicates whether the framework is included as part of your plugin files.
weak(boolean) | *Default: false* <br/> Indicates whether the framework should be weakly linked.
type(string) | Indicates the type of framework to add.
parent(string) | *Default: .* <br/> Sets the relative path to the directory containing the sub-project to which to add the reference. The default, `.`, implies the application project.
arch(string) <br/> ==windows== | Allowed values: `x86`, `x64` or `ARM`. <br/> Indicates that the framework should only be included when building for the specified architecture.
device-target(string) <br/> ==windows== | Allowed values: `win` (or `windows`), `phone` or `all`. <br/>  Indicates that the framework should only be included when building for the specified target device type.
versions(string) <br/> ==windows== | Indicates that the framework should only be included when building for versions that match the specified version string. Value can be any valid node semantic version range string.
target-dir(string) <br/> ==windows== | Indicates a subdirectory into which the framework should be copied. In practice, this is most important when plugin contains different framework versions for different chip architectures or device targets, but which have the same name. This allows you to specify different subfolders for each framework version so that they don't overlap each other.
implementation(string) <br/> ==windows== | Sets the relative path to `.dll` file that contains implementation for WinMD component, written in C++.
spec(string) <br/> ==ios== | Paired with `type="podspec"`, this is the spec string for the CocoaPod you want to install (static library only). CocoaPod support only exists in `cordova-ios 4.3.0` and `cordova-cli 6.4.0`. For your plugin, make sure  you add the appropriate `<engine>` tags and `package.json` [dependencies](../guide/hybrid/plugins/index.html#specifying-cordova-dependencies) to ensure backwards-compatible support.
embed(boolean) <br/> ==ios== | *Default: false* <br/>Paired with `custom="true"`, this is set to true if you want to embed your custom framework into your app bundle, so it can be dynamically loaded at runtime (dynamic framework). This puts your custom framework in the 'Embedded Binaries' section of your Xcode Project Settings. Only supported with the combination of `cordova-ios@4.4.0` and `cordova-cli@7.0.0`

Examples:

For iOS:
```xml
<framework src="libsqlite3.dylib" />
<framework src="social.framework" weak="true" />
<framework src="relative/path/to/my.framework" custom="true" />
<framework src="GoogleCloudMessaging" type="podspec" spec="~> 1.2.0" />
```

On Android (as of cordova-android@4.0.0), framework tags are used to include Maven dependencies, or to include bundled library projects.
```xml
<!-- Depend on latest version of GCM from play services -->
<framework src="com.google.android.gms:play-services-gcm:+" />
<!-- Depend on v21 of appcompat-v7 support library -->
<framework src="com.android.support:appcompat-v7:21+" />
<!-- Depend on library project included in plugin -->
<framework src="relative/path/FeedbackLib" custom="true" />
```

Framework can also be used to have custom `.gradle` files sub-included into the main project's `build.gradle` file:
```xml
<framework src="relative/path/rules.gradle" custom="true" type="gradleReference" />
```

On Windows, using `custom='true'` and `type='projectReference'` will add a reference to the project which will be added to the compile+link steps of the cordova project.  This essentially is the only way currently that a 'custom' framework can target multiple architectures as they are explicitly built as a dependency by the referencing cordova application.
```xml
<framework src="path/to/project/LibProj.csproj" custom="true" type="projectReference"/>
```

Examples of using these Windows specific attributes:
```xml
<framework src="src/windows/example.dll" arch="x64" />
<framework src="src/windows/example.dll" versions=">=8.0" />
<framework src="src/windows/example.vcxproj" type="projectReference" target="win" />
<framework src="src/windows/example.vcxproj" type="projectReference" target="all" versions="8.1" arch="x86" />
<framework src="src/windows/example.dll" target-dir="bin/x64" arch="x64" custom="true"/>
```

Another example of using Windows-specific attributes to add a reference to WinMD components, written in C# and C++, whose API will be available at runtime:

```xml
<!-- C# component that consists of one .winmd file -->
<framework src="lib\windows\component.winmd" versions="<10.0" />
<!-- C++ component with separated metadata and implementation-->
<framework src="lib\windows\x86\cppcomponent.winmd"
           implementation="lib\windows\x86\cppcomponent.dll"
           target-dir="component\x86" arch="x86" versions=">=10.0" />
```

## info

Additional information provided to users. This is useful when you require extra steps that can't be easily automated or are beyond the CLI's scope. The contents of this tag gets printed out when the CLI installs the plugin.

Example:
```xml
<info>
You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).

You need to add the following line to the `local.properties`:

android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
</info>
```

## hook

Represents your custom script which will be called by Cordova when certain action occurs (for example, after plugin is added or platform prepare logic is invoked). This is useful when you need to extend default Cordova functionality. See [Hooks Guide](../guide/appdev/hooks/index.html) for more information.

Example:
```xml
<hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />
```

## uses-permission

In certain cases, a plugin may need to make configuration changes dependent on the target application. For example, to register for C2DM on Android, an app whose package id is `my-app-id` would require a permission such as:

```xml
<uses-permission android:name="my-app-id.permission.C2D_MESSAGE"/>
```

In such cases where the content inserted from the `plugin.xml` file is not known ahead of time, variables can be indicated by a dollar-sign followed by a series of capital letters, digits, or underscores. For the above example, the `plugin.xml` file would include this tag:

```xml
<uses-permission android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
```

The CLI replaces variable references with the specified value, or the empty string if not found. The value of the variable reference may be detected (in this case, from the `AndroidManifest.xml` file) or specified by the user of the tool; the exact process is dependent on the particular tool.

Plugman can request users to specify a plugin's required variables. For example, API keys for C2M and Google Maps can be specified as a command-line argument:

```bash
plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
```

Certain variable names should be reserved, like `$PACKAGE_NAME`. This is the reverse-domain style unique identifier for the package, corresponding to the `CFBundleIdentifier` on iOS or the `package` attribute of the top-level `manifest` element in an `AndroidManifest.xml` file.

## preference

As seen in the previous section, sometimes plugin might require user to specify values for their variables. To make those variable mandatory, the `<platform>` tag needs to contain
a `<preference>` tag.
The CLI checks that these required preferences are passed in.  If not, it should warn the user how to pass the variable in and exit with a non-zero code.
Preferences can be referenced elsewhere in `plugin.xml` using the syntax `$PREFERENCE_NAME`.

Attributes(type) <br/> <span class="sub-header">Only for platform:</span> | Description
---------------- | ------------
name(string) | *Required* <br/> Name of the variable. Can only contain capital letters, digits, and underscores.
default(string) | Default value of the variable. If present, its value will be used and no error will be emitted in case user does not enter any value.

Example:
```xml
<preference name="MY_CUSTOM_STRING" default="default-value" />

<!--
    The preference may be referenced elsewhere in plugin.xml like so:
-->
<config-file target="./res/values/strings.xml" parent="/resources">
    <string name="custom">$MY_CUSTOM_STRING</string>
</config-file>
```
