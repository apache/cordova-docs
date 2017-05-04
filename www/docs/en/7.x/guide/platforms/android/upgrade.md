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

title: Upgrading Android
---

# Upgrading Android

This guide shows how to modify Android projects to upgrade from older versions of Cordova.
Most of these instructions apply to projects created with an older set
of command-line tools that precede the `cordova` CLI utility. See [The Command-Line Interface](../../cli/index.html) for information how to update the
version of the CLI.

## Upgrading to 5.X.X

The best way to upgrade to 5.X.X is to simply remove the Android platform from
your project and re-add it with the new version. For example,

```bash
cordova platform remove android
cordova platform add android@5.X.X
```

If you use the above method, be aware that any changes you made to the android
platform folder will be lost (editing the contents of this folder is
discouraged).

Alternatively, you may attempt to use the platform update script. For non-CLI
projects, run:

``
bin/update path/to/project
``

For CLI projects:

1. Update the `cordova` CLI version. See [The Command-Line Interface](../../cli/index.html).

2. Run `cordova platform update android@5.0.0` in your existing projects.

### Upgrading Plugins for Android Marshmallow

Version 5.0.0 adds support for Android API level 23 (Marshmallow). Android
Marshmallow introduced a new permissions model that may require you to update
some installed plugins to ensure they are compatible with newer phones. Older
plugin versions that do not properly handle permissions can cause your
application to crash unexpectedly. Note that this does not affect every plugin,
but only those that access Android permissions deemed *dangerous*
(see [the table of dangerous permissions][android-dangerous-permissions]).

The following core plugins are affected by this change and must be upgraded to
be used with **cordova-android 5.0.0+**:

Plugin                      | Minimum Compatible Version
----------------------------|---------------------------
cordova-plugin-camera       | 2.0.0
cordova-plugin-contacts     | 2.0.0
cordova-plugin-file         | 4.0.0
cordova-plugin-geolocation  | 2.0.0
cordova-plugin-media        | 2.0.0

For non-core plugins, you can verify if a plugin requests a
[dangerous permission][android-dangerous-permissions] by checking the plugin's
`plugin.xml` file. If the plugin uses Android permissions, you will see entries
in `plugin.xml` that declare them. For example:

```xml
<uses-permission android:name="android.permission.PERMISSION_NAME" />
```

Where `PERMISSION_NAME` is replaced with the name of an Android permission.
The `plugin.xml` file can be found in the plugin's folder in your Cordova
project (e.g. `plugins/example-plugin/plugin.xml`). Consult the documentation of
any plugins using dangerous permissions to determine what steps need to be taken
to ensure **cordova-android 5.0.0+** compatibility.

## Upgrading to 4.0.0

There are specific upgrade steps required to take advantage of the significant
changes in 4.0.0.  First, the common upgrade steps are needed as below.

For non-CLI projects, run:

```
bin/update path/to/project
```

For CLI projects:

1. Update the `cordova` CLI version. See [The Command-Line Interface](../../cli/index.html).

2. Run `cordova platform update android@4.0.0` in your existing projects.

### Upgrading the Whitelist
All whitelist functionality is now implemented via plugin.  Without a plugin,
your app is no longer protected by a whitelist after upgrading to 4.0.0.  Cordova
has two whitelist plugins, which provide different levels of protection.

1. The `cordova-plugin-whitelist` plugin *(RECOMMENDED)*
  * This plugin is highly recommended, as it is more secure and configurable
    than the whitelist in previous versions
  * See [cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist)
    for details on the configuration changes required
  * Run: `cordova plugin add cordova-plugin-crosswalk-webview`

2. The `cordova-plugin-legacy-whitelist` plugin
  * This plugin provides the same whitelist behaviour as previous versions. See
    [cordova-plugin-legacy-whitelist](https://github.com/apache/cordova-plugin-legacy-whitelist)
  * No configuration changes are required, but it provides less protection than
    the recommended plugin
  * Run: `cordova plugin add cordova-plugin-legacy-whitelist`

### Using the Crosswalk WebView
By default, your app will continue to use the system WebView provided by the
device.  If you wish to use the Crosswalk WebView instead, simply add the
Crosswalk plugin:

```bash
cordova plugin add cordova-plugin-crosswalk-webview
```

Upon adding the plugin, your app will get the Crosswalk WebView installed and
configured correctly.

### Upgrading to the Splashscreen Plugin
If your app makes use of a splash screen, that functionality has been moved to
a plugin.  The configuration options for splash screens are unchanged.  The only
upgrade step required is to add the plugin:

```bash
cordova plugin add cordova-plugin-splashscreen
```

## Upgrading to 3.7.1 from 3.6.0

For non-CLI projects, run:

```
bin/update path/to/project
```

For CLI projects:

1. Update the `cordova` CLI version. See [The Command-Line Interface](../../cli/index.html).

2. Run `cordova platform update android` in your existing projects.


## Upgrading to 3.3.0 from 3.2.0

Follow the same instructions as for `3.2.0`.

Starting with 3.3.0, the Cordova runtime is now compiled as an Android Library
instead of a Jar. This should have no effect for command-line usage, but IDE
users will need to import the newly added `MyProject-CordovaLib` project into
their workspace.

## Upgrading to 3.2.0 from 3.1.0

For projects that were created with the cordova CLI:

1. Update the `cordova` CLI version. See [The Command-Line Interface](../../cli/index.html).

2. Run `cordova platform update android`

For projects not created with the cordova CLI, run:

        bin/update <project_path>

**WARNING:**  On Android 4.4 - Android 4.4.3, creating a file input element with type="file" will not open the file picker dialog.
This is a regression with Chromium on Android and the problem can be reproduced in the standalone Chrome browser on Android (see http://code.google.com/p/android/issues/detail?id=62220)  The suggested workaround is to use the FileTransfer and File plugins for Android 4.4. You can listen for an onClick event from the input type="file" and then pop up a file picker UI. In order to tie the form data with the upload, you can use JavaScript to attach form values to the multi-part POST request that FileTransfer makes.


## Upgrading to 3.1.0 from 3.0.0

For projects that were created with the cordova CLI:

1. Update the `cordova` CLI version. See [The Command-Line Interface](../../cli/index.html).

2. Run `cordova platform update android`

For projects not created with the cordova CLI, run:

        bin/update <project_path>

## Upgrade to the CLI (3.0.0) from 2.9.0

1. Create a new Apache Cordova 3.0.0 project using the cordova CLI, as
   described in [The Command-Line Interface](../../cli/index.html).

2. Add your platforms the cordova project, for example: `cordova
   platform add android`.

3. Copy the contents of your project's `www` directory to the `www` directory
   at the root of the cordova project you just created.

4. Copy any native assets from your old project into the appropriate
   directories under `platforms/android`: this directory is where your
   native cordova-android project exists.

5. Use the cordova CLI tool to install any plugins you need. Note that
   the CLI handles all core APIs as plugins, so they may need to be
   added. Only 3.0.0 plugins are compatible with the CLI.

## Upgrade to 3.0.0 from 2.9.0

1. Create a new Apache Cordova Android project.

2. Copy the contents of the `www` directory to the new project.

3. Copy any native Android assets from the `res` directory to the new project.

4. Copy over any plugins you installed from the `src` subdirectories into the new project.

5. Make sure to upgrade any deprecated `<plugin>` references from your old `config.xml` file to the new `<feature>` specification.

6. Update any references to the `org.apache.cordova.api` package to be `org.apache.cordova`.

   __NOTE__: all core APIs have been removed and must be installed as plugins. Please see the [Using Plugman to Manage Plugins](../../../plugin_ref/plugman.html) Guide for details.

## Upgrade to 2.9.0 from 2.8.0

1. Run `bin/update <project_path>`.

## Upgrade to 2.8.0 from 2.7.0

1. Remove `cordova-2.7.0.jar` from the project's `libs` directory.

2. Add `cordova-2.8.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

<!-- SS Eclipse -->

4. Copy the new `cordova.js` into your project.

5. Update your HTML to use the new `cordova.js` file.

6. Copy the `res/xml/config.xml` file to match `framework/res/xml/config.xml`.

7. Update `framework/res/xml/config.xml` to have similar settings as it did previously.

8. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.7.0 from 2.6.0

1. Remove `cordova-2.6.0.jar` from the project's `libs` directory.

2. Add `cordova-2.7.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-2.7.0.js` into your project.

5. Update your HTML to use the new `cordova-2.7.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Update `framework/res/xml/config.xml` to have similar settings as it did previously.

8. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.6.0 from 2.5.0

1. Remove `cordova-2.5.0.jar` from the project's `libs` directory.

2. Add `cordova-2.6.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-2.6.0.js` into your project.

5. Update your HTML to use the new `cordova-2.6.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Update `framework/res/xml/config.xml` to have similar settings as it did previously.

8. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

Run `bin/update <project>` with the project path listed in the Cordova Source directory.

## Upgrade to 2.5.0 from 2.4.0

1. Remove `cordova-2.4.0.jar` from the project's `libs` directory.

2. Add `cordova-2.5.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-2.5.0.js` into your project.

5. Update your HTML to use the new `cordova-2.5.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Update `framework/res/xml/config.xml` to have similar settings as it did previously.

8. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.4.0 from 2.3.0

1. Remove `cordova-2.3.0.jar` from the project's `libs` directory.

2. Add `cordova-2.4.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-2.4.0.js` into your project.

5. Update your HTML to use the new `cordova-2.4.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.3.0 from 2.2.0

1. Remove `cordova-2.2.0.jar` from the project's `libs` directory.

2. Add `cordova-2.3.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-2.3.0.js` into your project.

5. Update your HTML to use the new `cordova-2.3.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.2.0 from 2.1.0

1. Remove `cordova-2.1.0.jar` from the project's `libs` directory.

2. Add `cordova-2.2.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-2.2.0.js` into your project.

5. Update your HTML to use the new `cordova-2.2.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.1.0 from 2.0.0

1. Remove `cordova-2.0.0.jar` from the project's `libs` directory.

2. Add `cordova-2.1.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-2.1.0.js` into your project.

5. Update your HTML to use the new `cordova-2.1.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

7. Copy files from `bin/templates/cordova` to the project's `cordova` directory.

## Upgrade to 2.0.0 from 1.9.0

1. Remove `cordova-1.9.0.jar` from the project's `libs` directory.

2. Add `cordova-2.0.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-2.0.0.js` into your project.

5. Update your HTML to use the new `cordova-2.0.0.js` file.

6. Copy the `res/xml/config.xml` to match `framework/res/xml/config.xml`.

In the 2.0.0 release, the `config.xml` file combines and replaces
`cordova.xml` and `plugins.xml`.  The old files are deprecated, and
while they still work in 2.0.0, will stop working in a future release.

## Upgrade to 1.9.0 from 1.8.1

1. Remove `cordova-1.8.0.jar` from the project's `libs` directory.

2. Add `cordova-1.9.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-1.9.0.js` into your project.

5. Update your HTML to use the new `cordova-1.9.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

Due to the introduction of the `CordovaWebView` in the 1.9.0 release,
third-party plugins may not work.  These plugins need to get a context
from the `CordovaInterface` using `getContext()` or `getActivity()`.
If you are not an experienced Android developer, please contact the
plugin maintainer and add this task to their bug tracker.

## Upgrade to 1.8.0 from 1.8.0

1. Remove `cordova-1.8.0.jar` from the project's `libs` directory.

2. Add `cordova-1.8.1.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-1.8.1.js` into your project.

5. Update your HTML to use the new `cordova-1.8.1.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

## Upgrade to 1.8.0 from 1.7.0

1. Remove `cordova-1.7.0.jar` from the project's `libs` directory.

2. Add `cordova-1.8.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-1.8.0.js` into your project.

5. Update your HTML to use the new `cordova-1.8.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

## Upgrade to 1.8.0 from 1.7.0

1. Remove `cordova-1.7.0.jar` from the project's `libs` directory.

2. Add `cordova-1.8.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-1.8.0.js` into your project.

5. Update your HTML to use the new `cordova-1.8.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

## Upgrade to 1.7.0 from 1.6.1

1. Remove `cordova-1.6.1.jar` from the project's `libs` directory.

2. Add `cordova-1.7.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-1.7.0.js` into your project.

5. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

## Upgrade to 1.6.1 from 1.6.0

1. Remove `cordova-1.6.0.jar` from the project's `libs` directory.

2. Add `cordova-1.6.1.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-1.6.1.js` into your project.

5. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

## Upgrade to 1.6.0 from 1.5.0

1. Remove `cordova-1.5.0.jar` from the project's `libs` directory.

2. Add `cordova-1.6.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-1.6.0.js` into your project.

5. Update your HTML to use the new `cordova-1.6.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

7. Replace `res/xml/phonegap.xml` with `res/xml/cordova.xml` to match `framework/res/xml/cordova.xml`.

## Upgrade to 1.5.0 from 1.4.0

1. Remove `phonegap-1.4.0.jar` from the project's `libs` directory.

2. Add `cordova-1.5.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `cordova-1.5.0.js` into your project.

5. Update your HTML to use the new `cordova-1.5.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

7. Replace `res/xml/phonegap.xml` with `res/xml/cordova.xml` to match `framework/res/xml/cordova.xml`.

## Upgrade to 1.4.0 from 1.3.0

1. Remove `phonegap-1.3.0.jar` from the project's `libs` directory.

2. Add `phonegap-1.4.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `phonegap-1.4.0.js` into your project.

5. Update your HTML to use the new `phonegap-1.4.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

7. Update `res/xml/phonegap.xml` to match `framework/res/xml/phonegap.xml`.

## Upgrade to 1.3.0 from 1.2.0

1. Remove `phonegap-1.2.0.jar` from the project's `libs` directory.

2. Add `phonegap-1.3.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `phonegap-1.3.0.js` into your project.

5. Update your HTML to use the new `phonegap-1.2.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

7. Update `res/xml/phonegap.xml` to match `framework/res/xml/phonegap.xml`.

## Upgrade to 1.2.0 from 1.1.0

1. Remove `phonegap-1.1.0.jar` from the project's `libs` directory.

2. Add `phonegap-1.2.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `phonegap-1.2.0.js` into your project.

5. Update your HTML to use the new `phonegap-1.2.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

7. Update `res/xml/phonegap.xml` to match `framework/res/xml/phonegap.xml`.

## Upgrade to 1.1.0 from 1.0.0

1. Remove `phonegap-1.0.0.jar` from the project's `libs` directory.

2. Add `phonegap-1.1.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `phonegap-1.1.0.js` into your project.

5. Update your HTML to use the new `phonegap-1.1.0.js` file.

6. Update `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

## Upgrade to 1.0.0 from 0.9.6

1. Remove `phonegap-0.9.6.jar` from the project's `libs` directory.

2. Add `phonegap-1.0.0.jar` to the project's `libs` directory.

3. If you use Eclipse, please refresh your Eclipse project and do a clean.

4. Copy the new `phonegap-1.0.0.js` into your project.

5. Update your HTML to use the new `phonegap-1.0.0.js` file.

6. Add the `res/xml/plugins.xml` to match `framework/res/xml/plugins.xml`.

[android-dangerous-permissions]: http://developer.android.com/guide/topics/security/permissions.html#perm-groups
