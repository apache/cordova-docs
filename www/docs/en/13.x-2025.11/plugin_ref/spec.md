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

title: Plugin.xml API
toc_title: Plugin.xml API
description: List of supported tags in the plugin.xml file.
---

{% cdv_platform inject %}

# Plugin.xml API

Plugin.xml file defines the structure and settings required for your plugin. It has several elements to provide details about your plugin.

# plugin

The `plugin` element is the plugin manifest's top-level element.

Attributes | Description
---------------- | ------------
xmlns<br />{% cdv_vartype string %}| *Required* <br/> The plugin namespace, `http://apache.org/cordova/ns/plugins/1.0`. If the document contains XML from other namespaces, such as tags to be added to the `AndroidManifest.xml` file in the case of Android, those namespaces should also be included in the <plugin> element.
id<br />{% cdv_vartype string %}| *Required* <br/> A npm-style identifier for the plugin.
version<br />{% cdv_vartype string %}| *Required* <br/> A version number for the plugin. [Semver](https://semver.org/) syntax is supported.

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

Attributes | Description
---------------- | ------------
name<br />{% cdv_vartype string %}| *Required* <br/>Name of the engine. Here are the default engines that are supported: `cordova`, `cordova-plugman`, `cordova-android`, `cordova-browser`, `cordova-ios`, `windows-os`, `android-sdk` (returns the highest Android api level installed) , `apple-xcode` (returns the xcode version), `apple-ios` (returns the highest iOS version installed), `apple-osx` (returns the macOS version). You can also specify a custom framework apart from the default ones.
version<br />{% cdv_vartype string %}| *Required* <br/> The version that your framework must have in order to install. Semver syntax is supported.
scriptSrc<br />{% cdv_vartype string %}| **For custom frameworks only** <br/> *Required* <br/>  The script file that tells plugman the version of the custom framework. Ideally, this file should be within the top level directory of your plugin directory.
platform<br />{% cdv_vartype string %}| **For custom frameworks only** <br/> *Required* <br/> The platforms your framework supports. You may use the wildcard `*` to say supported for all platforms, specify multiple with a pipe character like `android|ios` or just a single platform like `android`.

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

Attributes | Description
---------------- | ------------
src<br />{% cdv_vartype string %}| *Required* <br/>  Where the file or directory is located in the plugin package, relative to the `plugin.xml` document. If a file does not exist at the specified src location, the CLI stops and reverses the installation process, issues a notification about the conflict, and exits with a non-zero code.
target<br />{% cdv_vartype string %}| *Required* <br/> Where the file or directory should be located in the Cordova app, relative to the `www` directory. If a file already exists at the target location, the CLI stops and reverses the installation process, issues a notification about the conflict, and exits with a non-zero code.

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

Attributes | Description
---------------- | ------------
src<br />{% cdv_vartype string %}| References a file in the plugin directory relative to the `plugin.xml` file. If src does not resolve to an existing file, the CLI stops and reverses the installation, issues a notification of the problem, and exits with a non-zero code.
name<br />{% cdv_vartype string %}| Provides the last part of the module name. It can generally be whatever you like, and it only matters if you want to use cordova.require to import other parts of your plugins in your JavaScript code. The module name for a `<js-module>` is your plugin's id followed by the value of name.

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

Attributes | Description
---------------- | ------------
target<br />{% cdv_vartype string %}| The namespace where module.exports gets inserted to.

Example:
```xml
<js-module src="socket.js" name="Socket">
  <clobbers target="chrome.socket" />
</js-module>
```
Here module.exports gets inserted into the `window` object as `window.chrome.socket`.

### merges

Allowed within `<js-module>` element. Used to specify the namespace under `window` object where module.exports gets merged with any existing value. If any key already exists, the module's version overrides the original. You can have as many `<merges>` as you like. Any object not available on `window` is created.

Attributes | Description
---------------- | ------------
target<br />{% cdv_vartype string %}| The namespace which module.exports gets merged to.

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

Attributes | Description
---------------- | ------------
id<br />{% cdv_vartype string %}| Provides the ID of the plugin.
url<br />{% cdv_vartype string %}| A URL for the plugin. This should reference a git repository, which the CLI attempts to clone.
commit<br />{% cdv_vartype string %}| This is any git reference understood by `git checkout`: a branch or tag name (e.g., `master`, `0.3.1`), or a commit hash (e.g., `975ddb228af811dd8bb37ed1dfd092a3d05295f9`).
subdir<br />{% cdv_vartype string %}| Specifies that the targeted plugin dependency exists as a subdirectory of the git repository. This is helpful because it allows the repository to contain several related plugins, each specified individually. <br/> If you set the `url` of a `<dependency>` tag to `"."` and provide a `subdir`, the dependent plugin is installed from the same local or remote git repository as the parent plugin that specifies the `<dependency>` tag. <br/> Note that the `subdir` always specifies a path relative to the _root_ of the git repository, not the parent plugin. This is true even if you installed the plugin with a local path directly to it.The CLI finds the root of the git repository and then finds the other plugin from there.
version<br />{% cdv_vartype string %}| The version of the plugin depended on. Semver syntax is supported.

Examples:
```xml
<dependency id="cordova-plugin-someplugin" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
<dependency id="cordova-plugin-someplugin" version="1.0.1" />
```

## platform

Identifies platforms that have associated native code or require modifications to their configuration files. Tools using this specification can identify supported platforms and install the code into Cordova projects. Plugins without `<platform>` tags are assumed to be JavaScript-only, and therefore installable on any and all platforms.

Attributes | Description
---------------- | ------------
name<br />{% cdv_vartype string %}| *Required* <br/> Allowed values: ios, android, browser, electron <br/> Identifies a platform as supported, associating the element's children with that platform.

Example:
```xml
<platform name="android">
  <!-- android-specific elements -->
</platform>
```

## source-file

Identifies executable source code that should be installed into a project.

Attributes | Description
---------------- | ------------
src<br />{% cdv_vartype string %}| *Required* <br/> Location of the file relative to `plugin.xml`. If the src file can't be found, the CLI stops and reverses the installation, issues a notification about the problem, and exits with a non-zero code.
target-dir<br />{% cdv_vartype string %}| A directory into which the files should be copied, relative to the root of the Cordova project. In practice, this is most important for Java-based platforms, where a file in the `com.alunny.foo` package must be located within the `com/alunny/foo` directory. For platforms where the source directory is not important, this attribute should be omitted.
framework<br />{% cdv_vartype boolean %} {% cdv_platform ios %} | *Default: false* <br/>  If set to true, also adds the specified file as a framework to the project.
compiler-flags<br />{% cdv_vartype string %} {% cdv_platform ios %} | If set, assigns the specified compiler flags for the particular source file.

Examples:
```xml
<!-- android -->
<source-file src="src/android/Foo.java" target-dir="src/com/alunny/foo" />
<!-- ios -->
<source-file src="src/ios/CDVFoo.m" />
<source-file src="src/ios/CDVFoo.m" compiler-flags="-fno-objc-arc" />
<source-file src="src/ios/someLib.a" framework="true" />
```

## header-file

This is like `<source-file>` element but specifically for platforms such as iOS and Android that distinguish between source files, headers, and resources.

Attributes | Description
---------------- | ------------
src<br />{% cdv_vartype string %}| *Required* <br/> Location of the file relative to `plugin.xml`. If the src file can't be found, the CLI stops and reverses the installation, issues a notification about the problem, and exits with a non-zero code.
target-dir<br />{% cdv_vartype string %}| A directory into which the files should be copied, relative to the root of the Cordova project.
type<br />{% cdv_vartype string %} {% cdv_platform ios %} | If this value is `BridgingHeader`, the file is imported in the `Bridging-Header.h` and can be called from swift program.

Example:

For iOS:
```xml
<header-file src="CDVFoo.h" />
<header-file src="CDVSomeHeader.h" type="BridgingHeader" />
```

## resource-file

This is like `<source-file>` element, but specifically for platforms such as iOS and Android that distinguish between source files, headers, and resources.

Attributes | Description
---------------- | ------------
src<br />{% cdv_vartype string %}| *Required* <br/> Location of the file relative to `plugin.xml`. If the src file can't be found, the CLI stops and reverses the installation, issues a notification about the problem, and exits with a non-zero code.
target<br />{% cdv_vartype string %}| Path to where the file will be copied in your directory.

Android Examples:

```xml
<resource-file src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" />
```

## config-file

Identifies an XML-based configuration file to be modified, where in that document the modification should take place, and what should be modified.
Two file types that have been tested for modification with this element are `xml` and `plist` files.
The `config-file` element only allows you to append new children to an XML document tree. The children are XML literals to be inserted in the target document.

Attributes | Description
---------------- | ------------
target<br />{% cdv_vartype string %}| The file to be modified, and the path relative to the root of the Cordova project. If the specified file does not exist, the tool ignores the configuration change and continues installation. <br/> The target can include wildcard (`*`) elements. In this case, the CLI recursively searches through the project directory structure and uses the first match. <br/> On iOS, the location of configuration files relative to the project directory root is not known, so specifying a target of `config.xml` resolves to `cordova-ios-project/MyAppName/config.xml`.
parent<br />{% cdv_vartype string %}| An XPath selector referencing the parent of the elements to be added to the config file. If you use absolute selectors, you can use a wildcard (`*`) to specify the root element, e.g., `/*/plugins`. If the selector does not resolve to a child of the specified document, the tool stops and reverses the installation process, issues a warning, and exits with a non-zero code. <br/> For `plist` files, the `parent` determines under what parent key the specified XML should be inserted.
after<br />{% cdv_vartype string %}| A prioritized list of accepted siblings after which to add the XML snippet. Useful for specifying changes in files which require strict ordering of XML elements.

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

## edit-config
Similar to `config-file`, `edit-config` identifies an XML-based configuration file to be modified, where in that document the modification should take place, and what should be modified. Instead of appending new children to an XML document tree, `edit-config` makes modifications to attributes of XML elements. There are two modes which will determine what type of attribute modification will be made, `merge` or `overwrite`. `edit-config` has one child and that child will contain the attributes to be added.

Attributes | Description
---------------- | ------------
file<br />{% cdv_vartype string %}| The file to be modified, and the path relative to the root of the Cordova project. If the specified file does not exist, the tool ignores the configuration change and continues installation. <br/> The target can include wildcard (`*`) elements. In this case, the CLI recursively searches through the project directory structure and uses the first match. <br/> On iOS, the location of configuration files relative to the project directory root is not known, so specifying a target of `config.xml` resolves to `cordova-ios-project/MyAppName/config.xml`.
target<br />{% cdv_vartype string %}| An XPath selector referencing the target element to make attribute modifications to. If you use absolute selectors, you can use a wildcard (`*`) to specify the root element, e.g., `/*/plugins`. If the selector does not resolve to a child of the specified document, the tool stops and reverses the installation process, issues a warning, and exits with a non-zero code.
mode<br />{% cdv_vartype string %}| The mode that determines what type of attribute modifications will be made. <br/> `merge` - Adds the specified attributes to the target element. Will replace the attribute values if the specified attributes already exist in the target element. <br/> `overwrite` - Replaces all attributes in the target element with the attributes specified.

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

## lib-file {% cdv_platform android %}

The `<lib-file>` element can be used for installing **.jar** files in the project's **libs directory**.

Attributes | Description
---------------- | ------------
src<br />{% cdv_vartype string %}| *Required* <br/> The location of the `.jar` file relative to `plugin.xml`. If `src` file can't be found, the CLI stops and reverses the installation, issues a warning about the problem, and exits with a non-zero code.

Examples:

```xml
<lib-file src="src/android/libs/foobar.jar"/>
```

## framework

Identifies a framework (usually part of the OS/platform) on which the plugin depends.

Attributes | Description
---------------- | ------------
src<br />{% cdv_vartype string %}| *Required* <br/> The name of the system framework or the relative path to one which is included as part of your plugin files.
custom<br />{% cdv_vartype boolean %}| Indicates whether the framework is included as part of your plugin files.
weak<br />{% cdv_vartype boolean %}| *Default: false* <br/> Indicates whether the framework should be weakly linked.
type<br />{% cdv_vartype string %}| Indicates the type of framework to add.
parent<br />{% cdv_vartype string %}| *Default: .* <br/> Sets the relative path to the directory containing the sub-project to which to add the reference. The default, `.`, implies the application project.
spec<br />{% cdv_vartype string %} {% cdv_platform ios %} | Paired with `type="podspec"`, this is the spec string for the CocoaPod you want to install (static library only). CocoaPod support only exists in `cordova-ios 4.3.0` and `cordova-cli 6.4.0`. For your plugin, make sure  you add the appropriate `<engine>` tags and `package.json` [dependencies](../guide/hybrid/plugins/index.html#specifying-cordova-dependencies) to ensure backwards-compatible support.
embed<br />{% cdv_vartype boolean %} {% cdv_platform ios %} | *Default: false* <br/>Paired with `custom="true"`, this is set to true if you want to embed your custom framework into your app bundle, so it can be dynamically loaded at runtime (dynamic framework). This puts your custom framework in the 'Embedded Binaries' section of your Xcode Project Settings. Only supported with the combination of `cordova-ios@4.4.0` and `cordova-cli@7.0.0`
link<br />{% cdv_vartype boolean %} {% cdv_platform ios %} | *Default: !embed* <br/> Set this to true if you want to link the framework. This puts the framework in the 'Link Binaries with Libraries' section of your Xcode Project Settings.

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

## podspec {% cdv_platform ios %}
Identifies the CocoaPods `Podfile` that provides the dependencies in which the plugin depends on.

This element contains a `<config>` and a `<pods>` tag.

### config
The `<config>` element identifies the source urls in which the CocoaPods specs are retrieved from.

This element contains one or more `<source>` tags.

#### source

Attributes | Description
---------------- | ------------
url<br />{% cdv_vartype string %} | *Required* <br> The source url of pods spec.

### pods
The `<pods>` element identifies CocoaPods libraries.

This element contains a `<pod>` tag for each CocoaPods libraries.

Attributes | Description
---------------- | ------------
use-frameworks<br />{% cdv_vartype boolean %}| Default: false <br/> If `true`, the `use_frameworks!` attribute is declared in the Podfile.
inhibit-all-warnings<br />{% cdv_vartype boolean %}| Default: false <br/> If `true`, the `inhibit_all_warnings!` attribute is declared in the Podfile.

#### pod

Attributes(type) | Description
---------------- | ------------
name<br />{% cdv_vartype string %} | *Required*<br/> Pod name  
spec<br />{% cdv_vartype string %} | Pod spec
swift-version<br />{% cdv_vartype string %} | Specify swift version of the CocoaPods library
git<br />{% cdv_vartype string %} | Pod `git` option.
branch<br />{% cdv_vartype string %} | Pod `branch` option.
tag<br />{% cdv_vartype string %} | Pod `tag` option.
commit<br />{% cdv_vartype string %} | Pod `commit` option.
configurations<br />{% cdv_vartype string %} | Pod `configurations` option. For multiple values, separate them with a comma.
path<br />{% cdv_vartype string %} | Pod `path` option. Pod located on the local file system.
options<br />{% cdv_vartype string %} | Pod options declared in raw format. If declared, the other Pod options are overwritten.<br/>Example: `options=":git => 'https://github.com/Alamofire/Alamofire.git', :tag => '3.1.1'"`

Examples:

```
    <podspec>
      <config>
        <source url="https://github.com/brightcove/BrightcoveSpecs.git" />
        <source url="https://github.com/CocoaPods/Specs.git"/>
      </config>
      <pods use-frameworks="true">
        <pod name="AFNetworking" spec="~> 3.2" />
        <pod name="SDWebImage" spec="~> 4.0" />
        <pod name="Eureka" swift-version="3.3" />
        <pod name="AcknowList" />
        <pod name="Brightcove-Player-Core" spec="~> 6.3.4" />
        <pod name="Foobar1" git="git@github.com:hoge/foobar1.git" configurations="Debug"/>
        <pod name="Foobar2" git="git@github.com:hoge/foobar2.git" branch="next" configurations="Debug,Release"/>
        <pod name="FoobarSwift" swift-version="4.1" />
      </pods>
    </podspec>
```

This example leads `Podfile`

```
# DO NOT MODIFY -- auto-generated by Apache Cordova
source 'https://github.com/brightcove/BrightcoveSpecs.git'
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '9.0'
use_frameworks!
target 'HelloCordova' do
	project 'HelloCordova.xcodeproj'
	pod 'AFNetworking', '~> 3.2'
	pod 'SDWebImage', '~> 4.0'
	pod 'Eureka'
	pod 'AcknowList'
	pod 'Brightcove-Player-Core', '~> 6.3.4'
	pod 'Foobar1', :git => 'git@github.com:hoge/foobar1.git', :configurations => ['Debug']
	pod 'Foobar2', :branch => 'next', :git => 'git@github.com:hoge/foobar2.git', :configurations => ['Debug','Release']
	pod 'FoobarSwift'
end
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

Attributes | Description
---------------- | ------------
name<br />{% cdv_vartype string %}| *Required* <br/> Name of the variable. Can only contain capital letters, digits, and underscores.
default<br />{% cdv_vartype string %}| Default value of the variable. If present, its value will be used and no error will be emitted in case user does not enter any value.

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
