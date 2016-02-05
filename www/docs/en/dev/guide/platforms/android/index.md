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

title: Android Platform Guide
---

# Android Platform Guide

This guide shows how to set up your SDK environment to deploy Cordova
apps for Android devices, and how to optionally use Android-centered
command-line tools in your development workflow.  You need to install
the Android SDK regardless of whether you want to use these
platform-centered shell tools or cross-platform Cordova CLI for
development. For a comparison of the two development paths, see the
[Overview](../../overview/index.html).  For details on the CLI, see [The Command-Line Interface](../../cli/index.html).


## Requirements and Support

Cordova for Android requires the Android SDK which can be installed
on OS X, Linux or Windows operation system. See the Android SDK's
[System Requirements](http://developer.android.com/sdk/index.html#Requirements).
Cordova's latest Android package supports up to Android [API-Level](http://developer.android.com/guide/topics/manifest/uses-sdk-element.html#ApiLevels) 23.
The supported Android API-Levels for the past few cordova-android releases can
be found in this table:

cordova-android Version | Supported Android API-Levels
------------------------|-----------------------------
5.X.X                   | 14 - 23
4.1.X                   | 14 - 22
4.0.X                   | 10 - 22
3.7.X                   | 10 - 21

Please note that the versions listed here are for Cordova's Android package,
[cordova-android](https://github.com/apache/cordova-android), and not for the
Cordova CLI. To determine what version of Cordova's Android package is installed
in your Cordova project, run the command `cordova platform ls` in the directory
that holds your project.

As a general rule, Android versions become unsupported by Cordova as
they dip below 5% on Google's
[distribution dashboard](http://developer.android.com/about/dashboards/index.html).

## Installing the Requirements

### Java Development Kit (JDK)

Install [Java Development Kit (JDK) 7](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)
or later.

When installing on Windows you also need to set `JAVA_HOME` Environment Variable
according to your JDK installation path (see [Setting Environment Variables](#link-setting-environment-variables))

#### Android SDK

Install the [Android Stand-alone SDK Tools](http://developer.android.com/sdk/installing/index.html?pkg=tools) or [Android Studio](http://developer.android.com/sdk/installing/index.html?pkg=studio).
Proceed with Android Studio if you plan on
developing new Cordova for Android plugins or using native tools to
run and debug the Android platform. Otherwise, the Android Stand-alone SDK Tools
are enough to build and deploy Android applications.

Detailed installation instructions are available as part of installation
links above.

#### Adding SDK Packages

After installing the Android SDK, you must also install the packages for
whatever [API level](http://developer.android.com/guide/topics/manifest/uses-sdk-element.html#ApiLevels)
you wish to target. It is recommended that you install the highest SDK version
that your version of cordova-android supports (see above).

Open Android SDK Manager (for example, run `android` from the terminal) and make
sure the following are installed:

1. Android Platform SDK for your targeted version of Android
1. Android SDK build-tools version 19.1.0 or higher
1. Android Support Repository (found under "Extras")

See Android's documentation on [Installing SDK Packages](http://developer.android.com/sdk/installing/adding-packages.html)
for more details.

### Setting environment variables

Cordova's CLI tools require some environment variables to be set in order to
function correctly. The CLI will attempt to set these variables for you, but
in certain cases you may need to set them manually. The following variables
should be updated:

1. Set the `JAVA_HOME` environment variable to the location of your JDK installation
2. Set the `ANDROID_HOME` environment variable to the location of your Android SDK installation
3. It is also recommended that you add the Android SDK's `tools` and `platform-tools` directories to your `PATH`

#### OS X and Linux

On a Mac or Linux, you can use a text editor to create or modify the
`~/.bash_profile` file. To set an environment variable, add a line that
uses `export` like so (substitute the path with your local installation):

        export ANDROID_HOME=/Development/android-sdk/

To update your `PATH`, add a line resembling the following
(substitute the paths with your local Android SDK installation's location):

        export PATH=${PATH}:/Development/android-sdk/platform-tools:/Development/android-sdk/tools

Reload your terminal to see this change reflected or run the following command:

        $ source ~/.bash_profile

#### Windows

These steps may vary depending on your installed version of Windows. Close and
reopen any command prompt windows after making changes to see them reflected

1. Click on the __Start__ menu in the lower-left corner of the desktop

1. In the search bar, search for __Environment Variables__ and select __Edit the system Environment Variables__ from the options that appear

1. In the window that appears, click the __Environment Variables__ button

##### To create a new environment variable:

1. Click __New...__ and enter the variable name and value

##### To set your __PATH__:

1. Select the __PATH__ variable and press __Edit__.

1. Add entries for the relevant locations to the __PATH__. For example
(substitute the paths with your local Android SDK installation's location):

    ```
    C:\Development\android-sdk\platform-tools
    C:\Development\android-sdk\tools
    ```


## Project Configuration

### Setting up an Emulator

If you wish to run your Cordova app on an Android emulator, you will first need
to create an Android Virtual Device (AVD). See the Android documentation for
[managing AVDs](http://developer.android.com/tools/devices/managing-avds.html)
and the [instructions](http://developer.android.com/tools/devices/emulator.html)
for configuring the emulator and setting up hardware acceleration.

Once your AVD is configured correctly, you should be able to see it by running
this command from within a Cordova project:

    $ cordova run --list

### Configuring Gradle

As of **cordova-android@4.0.0**, Cordova for Android projects are built using
[Gradle](http://www.gradle.org/). For instructions on building with Ant, refer
to older versions of the documentation.

#### Setting Gradle Properties

It is possible to configure the Gradle build by setting the values of certain
[Gradle properties](https://docs.gradle.org/current/userguide/build_environment.html)
that Cordova exposes. The following properties are available to be set:

| Property                          | Description
|-----------------------------------|-------------------------------------------
| `cdvBuildMultipleApks`            | If this is set, then multiple APK files will be generated: One per native platform supported by library projects (x86, ARM, etc). This can be important if your project uses large native libraries, which can drastically increase the size of the generated APK. If not set, then a single APK will be generated which can be used on all devices
| `cdvVersionCode`                  | Overrides the versionCode set in `AndroidManifest.xml`
| `cdvReleaseSigningPropertiesFile` | *Default: `release-signing.properties`*<br>Path to a .properties file that contains signing information for release builds (see [Signing an App](#link-signing-an-app))
| `cdvDebugSigningPropertiesFile`   | *Default: `debug-signing.properties`*<br>Path to a .properties file that contains signing information for debug builds (see [Signing an App](#link-signing-an-app)). Useful when you need to share a signing key with other developers
| `cdvMinSdkVersion`                | Overrides the value of `minSdkVersion` set in `AndroidManifest.xml`. Useful when creating multiple APKs based on SDK version
| `cdvBuildToolsVersion`            | Overrides the automatically detected `android.buildToolsVersion` value
| `cdvCompileSdkVersion`            | Overrides the automatically detected `android.compileSdkVersion` value

You can set these properties in one of four ways:

  1. By setting environment variables like so:

      ```
      $ export ORG_GRADLE_PROJECT_cdvMinSdkVersion=20
      $ cordova build android
  ```

  2. By using the `--gradleArg` flag in your Cordova `build` or `run` commands:

      ```
      $ cordova run android -- --gradleArg=-PcdvMinSdkVersion=20
      ```

  3. By placing a file called `gradle.properties` in your Android platform
      folder (`<your-project>/platforms/android`) and setting the properties in it
      like so:

      ```
      # In <your-project>/platforms/android/gradle.properties
      cdvMinSdkVersion=20
      ```

  4. By extending `build.gradle` via a [`build-extras.gradle` file](#link-extending-build-gradle)
    and setting the property like so:

      ```
      # In <your-project>/platforms/android/build-extras.gradle
      ext.cdvMinSdkVersion = 20
      ```

The latter two options both involve including an extra file in your Android
platform folder. In general, it is discouraged that you edit the contents of
this folder because it is easy for those changes to be lost or overwritten.
Instead, these two files should be copied from another location into that folder
as part of the build command by using the `before_build`
[hook](../../appdev/hooks/index.html).

#### Extending build.gradle

If you need to customize `build.gradle`, rather than edit it directly, you
should create a sibling file named `build-extras.gradle`. This file will be
included by the main `build.gradle` when present. This file must be placed in
the android platform directory (`<your-project>/platforms/android`), so it is
recommended that you copy it over via a script attached to the `before_build`
[hook](../../appdev/hooks/index.html).

Here's an example:

    # Example build-extras.gradle
    # This file is included at the beginning of `build.gradle`
    ext.cdvDebugSigningPropertiesFile = '../../android-debug-keys.properties'

    # When set, this function allows code to run at the end of `build.gradle`
    ext.postBuildExtras = {
        android.buildTypes.debug.applicationIdSuffix = '.debug'
    }

Note that plugins can also include `build-extras.gradle` files via:

    <framework src="some.gradle" custom="true" type="gradleReference" />


## Signing an App

First, you should read the [Android app signing requirements](http://developer.android.com/tools/publishing/app-signing.html).

### Using Flags

To sign an app, you need the following parameters:

| Parameter             | Flag              | Description
|-----------------------|-------------------|-----------------------------------
| Keystore              | `--keystore`      | Path to a binary file which can hold a set of keys
| Keystore Password     | `--storePassword` | Password to the keystore
| Alias                 | `--alias`         | The id specifying the private key used for singing
| Password              | `--password`      | Password for the private key specified
| Type of the Keystore  | `--keystoreType`  | *Default: auto-detect based on file extension*<br>Either pkcs12 or jks

These parameters can be specified using the command line arguments above to
the [Cordova CLI](../../cli/index.html) `build` or `run` commands.

### Using build.json

Alternatively, you could specify them in a build configuration file (`build.json`)
using the `--buildConfig` argument to the same commands. Here's a sample of a
build configuration file:

    {
         "android": {
             "debug": {
                 "keystore": "..\android.keystore",
                 "storePassword": "android",
                 "alias": "mykey1",
                 "password" : "password",
                 "keystoreType": ""
             },
             "release": {
                 "keystore": "..\android.keystore",
                 "storePassword": "",
                 "alias": "mykey2",
                 "password" : "password",
                 "keystoreType": ""
             }
         }
     }

For release signing, passwords can be excluded and the build system will issue a
prompt asking for the password.

There is also support to mix and match command line arguments and parameters in
`build.json`. Values from the command line arguments will get precedence.
This can be useful for specifying passwords on the command line.

### Using Gradle

You can also specify signing properties by including a `.properties` file and
pointing to it with the `cdvReleaseSigningPropertiesFile` and
`cdvDebugSigningPropertiesFile` Gradle properties (see [Setting Gradle Properties](#link-setting-gradle-properties)).
The file should look like this:

```
storeFile=relative/path/to/keystore.p12
storePassword=SECRET1
storeType=pkcs12
keyAlias=DebugSigningKey
keyPassword=SECRET2
```

`storePassword` and `keyPassword` are optional, and will be prompted for if omitted.


## Debugging

For details on the debugging tools that come packaged with the Android SDK, see
[Android's developer documentation for debugging](http://developer.android.com/tools/debugging/index.html).
Additionally, Android's developer documentation for [debugging web apps](http://developer.android.com/guide/webapps/debugging.html)
provides an introduction for debugging the portion of your app running in the
Webview.


### Opening a Project in Android Studio

Cordova for Android projects can be opened in the Android IDE, [Android Studio](http://developer.android.com/sdk/installing/index.html?pkg=studio).
This can be useful if you wish to use Android Studio's built in Android
debugging/profiling tools or if you are developing Android plugins. Please note
that when opening your project in Android studio, it is recommended that you do
NOT edit your code in the IDE. This will edit the code in the `platforms` folder
of your project (not `www`), and changes are liable to be overwritten. Instead,
edit the `www` folder and copy over your changes by running `cordova build`.

Plugin developers wishing to edit their native code in the IDE should use the
`--link` flag when adding their plugin to the project via `cordova plugin add`.
This will link the files so that changes to the plugin files in the `platforms`
folder are reflected in your plugin's source folder (and vice versa).

To open a Cordova for Android project in Android Studio:

  1. Launch __Android Studio__.

  1. Select __Import Project (Eclipse ADT, Gradle, etc)__.

      ![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_project.png)

  1. Select the Android platform directory in your project (`<your-project>/platforms/android`).

      ![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_select_location.png)

  1. For the `Gradle Sync` question you can simply answer __Yes__.

Once it finishes importing, you should be able to build and run the app directly
from __Android Studio__. See [Android Studio Overview](http://developer.android.com/tools/studio/index.html)
and [Building and Running from Android Studio](http://developer.android.com/tools/building/building-studio.html)
for more details.

![]({{ site.baseurl }}/static/img/guide/platforms/android/asdk_import_done.png)


## Platform Centered Workflow

cordova-android includes a number of scripts that allow the platform to be used
without the full Cordova CLI. This development path may offer you a greater
range of development options in certain situations than the cross-platform CLI
tool described in [The Command-Line Interface](../../cli/index.html).
For example, you need to use shell tools when deploying a custom
Cordova WebView alongside native components. Before using this
development path, you must still configure the Android SDK environment
as described in [Requirements and Support](#link-requirements-and-support)
above.

For each of the scripts discussed below, refer to
[The Command-Line Interface](../../cli/index.html) for more information on their
arguments and usage. Each script has a name that matches the corresponding CLI
command. For example, `cordova-android/bin/create` is equivalent to
`cordova create`.

To get started, either download the cordova-android package from
[npm](https://www.npmjs.com/package/cordova-android) or
[Github](https://github.com/apache/cordova-android).

To create a project using this package, run the `create` script in the `bin`
folder:

    $ cordova-android/bin/create ...

The created project will have a folder named `cordova` inside that contains
scripts for the project-specific Cordova commands (e.g. `run`, `build`, etc.).
Additionally, The project will feature a structure different from that of a
normal Cordova project. Notably, `/www` is moved to `/assets/www`.

To install plugins in this project, use the [Cordova Plugman Utility](../../../plugin_ref/plugman.html).
