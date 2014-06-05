---
license: Licensed to the Apache Software Foundation (ASF) under one
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

# Plugin Specification

The `plugin.xml` file is an XML document in the `plugins` namespace:
`http://apache.org/cordova/ns/plugins/1.0`. It contains a top-level
`plugin` element that defines the plugin, and children that define the
structure of the plugin.

A sample plugin element:

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        xmlns:android="http://schemas.android.com/apk/res/android"
        id="com.alunny.foo"
        version="1.0.2">

## _plugin_ Element

The `plugin` element is the plugin manifest's top-level element. It
features the following attributes:

* `xmlns` (required):
  The plugin namespace, `http://apache.org/cordova/ns/plugins/1.0`. If
  the document contains XML from other namespaces, such as tags to be
  added to the `AndroidManifest.xml` file, those namespaces should
  also be included in the top-level element.

* `id` (required):
  A reverse-domain style identifier for the plugin, such as
  `com.alunny.foo`

* `version` (required):
  A version number for the plugin, that matches the following
  major-minor-patch style regular expression:

        ^\d+[.]\d+[.]\d+$

## _engines_ and _engine_ Elements

The child elements of the `<engines>` element specify versions of
Apache Cordova-based frameworks that this plugin supports. An example:

    <engines>
        <engine name="cordova" version="1.7.0" />
        <engine name="cordova" version="1.8.1" />
        <engine name="worklight" version="1.0.0" platform="android" scriptSrc="worklight_version"/>
    </engines>

Similar to the `<plugin>` element's `version` attribute, the specified
version string should match a major-minor-patch string conforming to
the regular expression:

        ^\d+[.]\d+[.]\d+$

Engine elements may also specify fuzzy matches to avoid repetition,
and to reduce maintenance when the underlying platform is updated.
Tools should support a minimum of `>`, `>=`, `<` and `<=`, for
example:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova" version="<1.8.1" />
    </engines>

The `<engine>` tags also has default support for all of the main platforms Cordova exists on. 
Specifying the `cordova` engine tag means that all versions of Cordova on any platform must
satisfy the engine version attribute. You may also list specific platforms and their versions
in order to override the catch-all `cordova` engine:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova-android" version=">=1.8.0" />
        <engine name="cordova-ios" version=">=1.7.1" />
    </engines>

Here's a list of the default engines that the '<engine>' tag supports:
* 'cordova' 
* 'cordova-plugman' 
* 'cordova-amazon-fireos'
* 'cordova-android'
* 'cordova-ios'
* 'cordova-blackberry10' 
* 'cordova-wp7'
* 'cordova-wp8'
* 'cordova-windows8'  
* 'android-sdk' // returns the highest Android api level installed
* 'apple-xcode' // returns the xcode version 
* 'apple-ios' // returns the highest iOS version installed
* 'apple-osx' // returns the OSX version
* 'blackberry-ndk' // returns the native blackberry SDK version
        
Specifying custom Apache Cordova-based frameworks should be listed under the engine tag like so:

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>

A custom Apache Cordova-based framework requires that an engine element includes the following attributes: 
`name`, `version`, `scriptSrc`, and `platform`. 

* `name` (required): A human-readable name for your custom framework. 

* `version` (required): The version that your framework must have in order to install.

* `scriptSrc` (required): The script file that tells plugman what version of the custom framework is. 
Ideally, this file should be within the top level directory of your plugin directory.

* `platform` (required): Which platforms that your framework supports. You may use the wildcard `*`
to say supported for all platforms, specify multiple with a pipe character like `android|ios|blackberry10` 
or just a single platform like `android`.

plugman aborts with a non-zero code for any plugin whose target
project does not meet the engine's constraints.

If no `<engine>` tags are specified, plugman attempts to install into
the specified cordova project directory blindly.

## _name_ Element

A human-readable name for the plugin, whose text content contains the
name of the plugin. For example:

    <name>Foo</name>

This element does not (yet) handle localization.

## _description_ Element

A human-readable description for the plugin. The text content of the element contains
the description of the plugin. An example:

    <description>Foo plugin description</description>

This element does not (yet) handle localization.

## _author_ Element

Plugin author name. The text content of the element contains
the name of the plugin author. An example:

    <author>Foo plugin description</author>

## _keywords_ Element

Plugin keywords. The text content of the element contains comma separated keywords to describe the plugin. An example:

    <keywords>foo,bar</keywords>

## _license_ Element

Plugin license. The text content of the element contains the plugin license. An example:

    <license>Apache 2.0 License</license>

## _asset_ Element

One or more elements listing the files or directories to be copied
into a Cordova app's `www` directory. Examples:

    <!-- a single file, to be copied in the root directory -->
    <asset src="www/foo.js" target="foo.js" />
    <!-- a directory, also to be copied in the root directory -->
    <asset src="www/foo" target="foo" />

All `<asset>` tags require both `src` and `target` attributes.
Web-only plugins contains mostly `<asset>` elements. Any `<asset>`
elements that are nested within `<platform>` elements specify
platform-specific web assets, as described below. Attributes include:

* `src` (required): 
  Where the file or directory is located in the plugin package,
  relative to the `plugin.xml` document.  If a file does not exist at
  the specified `src` location, plugman stops and reverses the
  installation process, issues a notification about the conflict, and
  exits with a non-zero code.

* `target` (required):

  Where the file or directory should be located in the Cordova app,
  relative to the `www` directory.
  Assets can be targeted to subdirectories, for example:

        <asset src="www/new-foo.js" target="js/experimental/foo.js" />

  creates the `js/experimental` directory within the `www` directory,
  unless already present, then copies the `new-foo.js` file and
  renames it `foo.js`.  If a file already exists at the target
  location, plugman stops and reverses the installation process,
  issues a notification about the conflict, and exits with a non-zero
  code.

## _js-module_ Element

Most plugins include one or more JavaScript files.  Each `<js-module>`
tag corresponds to a JavaScript file, and prevents the plugin's users
from having to add a `<script>` tag for each file.  While `<asset>`
tags simply copy a file from the plugin subdirectory into `www`,
`<js-module>` tags are much more sophisticated. They look like this:

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>

When installing a plugin with the example above, `socket.js` is copied
to `www/plugins/my.plugin.id/socket.js`, and added as an entry to
`www/cordova_plugins.js`. At load time, code in `cordova.js` uses XHR
to read each file and inject a `<script>` tag into HTML. It adds a
mapping to clobber or merge as appropriate, as described below.

_Do not_ wrap the file with `cordova.define`, as it is added
automatically. The module is wrapped in a closure, with `module`,
`exports`, and `require` in scope, as is normal for AMD modules.

Details for the `<js-module>` tag:

* The `src` references a file in the plugin directory relative to the
  `plugin.xml` file.

* The `name` provides the last part of the module name. It can
  generally be whatever you like, and it only matters if you want to
  use `cordova.require` to import other parts of your plugins in your
  JavaScript code. The module name for a `<js-module>` is your
  plugin's `id` followed by the value of `name`. For the example
  above, with an `id` of `chrome.socket`, the module name is
  `chrome.socket.Socket`.

* Three tags are allowed within `<js-module>`:

    - `<clobbers target="some.value"/>` indicates that the
      `module.exports` is inserted into the `window` object as
      `window.some.value`. You can have as many `<clobbers>` as you
      like. Any object not available on `window` is created.

    - `<merges target="some.value"/>` indicates that the module
      should be merged with any existing value at `window.some.value`.
      If any key already exists, the module's version overrides the
      original. You can have as many `<merges>` as you like. Any
      object not available on `window` is created.

    - `<runs/>` means that your code should be specified with
      `cordova.require`, but not installed on the `window`
      object. This is useful when initializing the module, attaching
      event handlers or otherwise. You can only have up to one
      `<runs/>` tag. Note that including a `<runs/>` with
      `<clobbers/>` or `<merges/>` is redundant, since they also
      `cordova.require` your module.

    - An empty `<js-module>` still loads and can be accessed in other
      modules via `cordova.require`.

If `src` does not resolve to an existing file, plugman stops and
reverses the installation, issues a notification of the problem, and
exits with a non-zero code.

Nesting `<js-module>` elements within `<platform>` declares
platform-specific JavaScript module bindings.

## _dependency_ Element

The `<dependency>` tag allows you to specify other plugins on which the
current plugin depends. While future versions will access them from
plugin repositories, in the short term plugins are directly referenced
as URLs by `<dependency>` tags. They are formatted as follows:

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />

* `id`: provides the ID of the plugin. It should be globally unique,
  and expressed in reverse-domain style. While neither of these
  restrictions is currently enforced, they may be in the future.

* `url`: A URL for the plugin. This should reference a git repository,
  which plugman attempts to clone.

* `commit`: This is any git reference understood by `git checkout`: a
  branch or tag name (e.g., `master`, `0.3.1`), or a commit hash (e.g.,
  `975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

* `subdir`: Specifies that the targeted plugin dependency exists as a
  subdirectory of the git repository. This is helpful because it
  allows the repository to contain several related plugins, each
  specified individually.

In the future, version constraints will be introduced, and a plugin
repository will exist to support fetching by name instead of explicit
URLs.

### Relative Dependency Paths

If you set the `url` of a `<dependency>` tag to `"."` and provide a
`subdir`, the dependent plugin is installed from the same local or
remote git repository as the parent plugin that specifies the
`<dependency>` tag.

Note that the `subdir` always specifies a path relative to the _root_
of the git repository, not the parent plugin. This is true even if you
installed the plugin with a local path directly to it. Plugman finds
the root of the git repository and then finds the other plugin from
there.

## _platform_ Element

The `<platform>` tag identifies platforms that have associated native
code or require modifications to their configuration files. Tools
using this specification can identify supported platforms and install
the code into Cordova projects.

Plugins without `<platform>` tags are assumed to be JavaScript-only,
and therefore installable on any and all platforms.

A sample platform tag:

    <platform name="android">
        <!-- android-specific elements -->
    </platform>
    <platform name="ios">
        <!-- ios-specific elements -->
    </platform>

The required `name` attribute identifies a platform as supported,
associating the element's children with that platform.

Platform names should be lowercase. Platform names, as arbitrarily
chosen, are listed:

* amazon-fireos
* android
* blackberry10
* ios
* wp7
* wp8

## _source-file_ Element

The `<source-file>` element identifies executable source code that
should be installed into a project. Examples:

    <!-- android -->
    <source-file src="src/android/Foo.java"
                    target-dir="src/com/alunny/foo" />
    <!-- ios -->
    <source-file src="src/ios/CDVFoo.m" />
    <source-file src="src/ios/someLib.a" framework="true" />
    <source-file src="src/ios/someLib.a" compiler-flags="-fno-objc-arc" />

It supports the following attributes:

* `src` (required):
  Location of the file relative to `plugin.xml`.  If the `src` file
  can't be found, plugman stops and reverses the installation, issues
  a notification about the problem, and exits with a non-zero code.

* `target-dir`:
  A directory into which the files should be copied, relative to the
  root of the Cordova project.  In practice, this is most important
  for Java-based platforms, where a file in the `com.alunny.foo`
  package must be located within the `com/alunny/foo` directory. For
  platforms where the source directory is not important, this
  attribute should be omitted.

  As with assets, if the `target` of a `source-file` would overwrite
  an existing file, plugman stops and reverses the installation,
  issues a notification about the problem, and exits with a non-zero
  code.

* `framework` (iOS only):
  If set to `true`, also adds the specified file as a framework to the
  project.

* `compiler-flags` (iOS only):
  If set, assigns the specified compiler flags for the particular
  source file.

## _config-file_ Element

Identifies an XML-based configuration file to be modified, where in
that document the modification should take place, and what should be
modified.

Two file types that have been tested for modification with this
element are `xml` and `plist` files.

The `config-file` element only allows you to append new children to an
XML document tree. The children are XML literals to be inserted in the
target document.

Example for XML:

    <config-file target="AndroidManifest.xml" parent="/manifest/application">
        <activity android:name="com.foo.Foo" android:label="@string/app_name">
            <intent-filter>
            </intent-filter>
        </activity>
    </config-file>

Example for `plist`:

    <config-file target="*-Info.plist" parent="CFBundleURLTypes">
        <array>
            <dict>
                <key>PackageName</key>
                <string>$PACKAGE_NAME</string>
            </dict>
        </array>
    </config-file>

It supports the following attributes:

* `target`:

  The file to be modified, and the path relative to the root of the
  Cordova project.

  The target can include wildcard (`*`) elements. In this case,
  plugman recursively searches through the project directory structure
  and uses the first match.

  On iOS, the location of configuration files relative to the project
  directory root is not known, so specifying a target of `config.xml`
  resolves to `cordova-ios-project/MyAppName/config.xml`.

  If the specified file does not exist, the tool ignores the
  configuration change and continues installation.

* `parent`: An XPath selector referencing the parent of the elements
  to be added to the config file. If you use absolute selectors, you
  can use a wildcard (`*`) to specify the root element,
  e.g., `/*/plugins`.

  For `plist` files, the `parent` determines under what parent key the
  specified XML should be inserted.

  If the selector does not resolve to a child of the specified
  document, the tool stops and reverses the installation process,
  issues a warning, and exits with a non-zero code.

## _plugins-plist_ Element

This is _outdated_ as it only applies to cordova-ios 2.2.0 and
below. Use the `<config-file>` tag for newer versions of Cordova.

Example:

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>

Specifies a key and value to append to the correct `AppInfo.plist`
file in an iOS Cordova project. For example:

    <plugins-plist key="Foo" string="CDVFoo" />

## _resource-file_ and _header-file_ Elements

Like source files, but specifically for platforms such as iOS that
distinguish between source files, headers, and resources. iOS Examples:

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />

Android example:

    <resource-file src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" />

## _lib-file_ Element

Like source, resource, and header files, but specifically for
platforms such as BlackBerry 10 that use user-generated libraries.
Examples:

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />

Supported attributes:

* `src` (required):
  The location of the file relative to `plugin.xml`.
  If `src` can't be found, plugman stops and reverses the
  installation, issues a warning about the problem, and exits with a
  non-zero code.

* `arch`: The architecture for which the `.so` file has been built,
  either `device` or `simulator`.

## _framework_ Element

Identifies a framework (usually part of the OS/platform) on which the plugin depends.

Examples:

    <framework src="libsqlite3.dylib" />
    <framework src="social.framework" weak="true" />
    <framework src="relative/path/to/my.framework" custom="true" />

The `src` attribute identifies the framework, which plugman attempts
to add to the Cordova project, in the correct fashion for a given
platform.

The optional `weak` attribute is a boolean indicating whether the
framework should be weakly linked. The default is `false`.

The optional `custom` attribute is a boolean indicating whether the framework is one that is included as part of your plugin files (thus it is not a system framework). The default is `false`.

## _info_ Element

Additional information provided to users. This is useful when you
require extra steps that can't be easily automated or are beyond
plugman's scope.  Examples:

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).

    You need to add the following line to the `local.properties`:
        
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>

## Variables

In certain cases, a plugin may need to make configuration changes
dependent on the target application. For example, to register for C2DM
on Android, an app whose package id is `com.alunny.message` would
require a permission such as:

    <uses-permission
    android:name="com.alunny.message.permission.C2D_MESSAGE"/>

In such cases where the content inserted from the `plugin.xml` file is
not known ahead of time, variables can be indicated by a dollar-sign
followed by a series of capital letters, digits, or underscores. For
the above example, the `plugin.xml` file would include this tag:

    <uses-permission
    android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>

plugman replaces variable references with the specified value, or the
empty string if not found. The value of the variable reference may be
detected (in this case, from the `AndroidManifest.xml` file) or
specified by the user of the tool; the exact process is dependent on
the particular tool.

plugman can request users to specify a plugin's required
variables. For example, API keys for C2M and Google Maps can be
specified as a command-line argument:

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734

To make the variable mandatory, the `<platform>` tag needs to contain
a `<preference>` tag. For example:

    <preference name="API_KEY" />

plugman checks that these required preferences are passed in.  If not,
it should warn the user how to pass the variable in and exit with a
non-zero code.

Certain variable names should be reserved, as listed below.

## $PACKAGE_NAME

The reverse-domain style unique identifier for the package,
corresponding to the `CFBundleIdentifier` on iOS or the `package`
attribute of the top-level `manifest` element in an
`AndroidManifest.xml` file.
