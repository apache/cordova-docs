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

title: Android Shell Tool Guide
---
# Android Shell Tool Guide

## Building with Gradle

As of **cordova-android@4.0.0**, Cordova for Android projects are built using
[Gradle](http://www.gradle.org/). For instructions on building with Ant, refer
to older versions of documentation.

### Gradle Properties

It is possible to configure the Gradle build by setting the values of certain
[Gradle properties](https://docs.gradle.org/current/userguide/build_environment.html)
that Cordova exposes. The following properties are available to be set:

  * **cdvBuildMultipleApks** (default: false)

      If this is set, then multiple APK files will be generated: One per native
      platform supported by library projects (x86, ARM, etc). This can be important
      if your project uses large native libraries, which can drastically increase
      the size of the generated APK.

      If not set, then a single APK will be generated which can be used on all devices.

  * **cdvVersionCode**

    Overrides the versionCode set in `AndroidManifest.xml`

  * **cdvReleaseSigningPropertiesFile** (default: release-signing.properties)

      Path to a .properties file that contains signing information for release builds.
      The file should look like:
      ```
      storeFile=relative/path/to/keystore.p12
      storePassword=SECRET1
      storeType=pkcs12
      keyAlias=DebugSigningKey
      keyPassword=SECRET2
      ```

      `storePassword` and `keyPassword` are optional, and will be prompted for if omitted.

  * **cdvDebugSigningPropertiesFile** (default: debug-signing.properties)

    Same as cdvReleaseSigningPropertiesFile, but for debug builds. Useful when you need
    to share a signing key with other developers.

  * **cdvMinSdkVersion**

      Overrides the value of `minSdkVersion` set in `AndroidManifest.xml`. Useful when
      creating multiple APKs based on SDK version.

  * **cdvBuildToolsVersion**

      Override the automatically detected `android.buildToolsVersion` value.

  * **cdvCompileSdkVersion**

      Override the automatically detected `android.compileSdkVersion` value.

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

### Extending build.gradle

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


## Signing the App

First, you should read the [Android app signing requirements](http://developer.android.com/tools/publishing/app-signing.html).

To sign an app, you need the following parameters:

  * **Keystore** (`--keystore`)

      Path to a binary file which can hold a set of keys.

  * **Keystore password** (`--storePassword`)

      Password to the keystore.

  * **Alias** (`--alias`)

      The id specifying the private key used for singing.

  * **Password** (`--password`)

      Password for the private key specified.

  * **Type of the keystore** (`--keystoreType`)

      Either pkcs12 or jks (Default: auto-detect based on file extension).

These parameters can be specified using the command line arguments above to
the [Cordova CLI](../../cli/index.html) `build` or `run` commands.

Alternatively, you could specify them in a build configuration file (`build.json`)
using (`--buildConfig`) argument to the same commands. Here's a sample of a
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
scripts for the project specific Cordova commands (e.g. `run`, `build`, etc.).
Additionally, The project will feature a structure different from that of a
normal Cordova project. Notably, `/www` is moved to `/assets/www`.

To install plugins in this project, use the [Cordova Plugman Utility](../../../plugin_ref/plugman.html).
