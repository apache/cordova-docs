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

This guide shows how to use Cordova's set of platform-centered shell
tools to develop Android apps. This development path, discussed in the
[Overview](../../overview/index.html), may offer you a greater range of development options than
the cross-platform CLI tool described in [The Command-Line Interface](../../cli/index.html).
For example, you need to use shell tools when deploying a custom
Cordova WebView alongside native components.  Before using either
development path, you must first configure the Android SDK environment
as described in the [Android Platform Guide](index.html).

To enable shell tools for Android, download Cordova from
[cordova.apache.org](http://cordova.apache.org). The download contains
separate archives for each platform. Expand each you wish to target,
`android` in this case. The relevant tools are typically available in
the top-level `bin` directory, otherwise consult the __README__ file
for more detailed directions.

These tools allow you to create, build, and run Android apps.  For
information on the additional command-line interface that enables
plugin features across all platforms, see Using Plugman to Manage
Plugins. See Application Plugins for details on how to develop
plugins.

## Create a Project

Run the `create` command, specifying the existing path to the project,
the reverse-domain-style package identifier, and the app's display
name.  Here is the syntax for both Mac/Linux and Windows:

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName

        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName

## Build

This cleans then builds a project.

Debug, on Mac/Linux or Windows:

        $ /path/to/project/cordova/build --debug

        C:\>\path\to\project\cordova\build.bat --debug

Release, on Mac/Linux or Windows:

        $ /path/to/project/cordova/build --release

        C:\>\path\to\project\cordova\build.bat --release

## Run the App

The `run` command accepts the following _optional_ parameters:

  * Target specification. This includes `--emulator`, `--device`, or `--target=<targetID>`.

  * Build specification. This includes `--debug`, `--release`, or `--nobuild`.

        $ /path/to/project/cordova/run [Target] [Build]

        C:\>\path\to\project\cordova\run.bat [Target] [Build]

Make sure you create at least one Android Virtual Device, otherwise
you're prompted to do so with the `android` command.  If more than one
AVD is available as a target, you're prompted to select one. By
default the `run` command detects a connected device, or a currently
running emulator if no device is found.

## Signing the App

You can review Android app signing requirements here: http://developer.android.com/tools/publishing/app-signing.html

To sign an app, you need the following parameters:

  * Keystore (`--keystore`): Path to a binary file which can hold a set of keys.
  
  * Keystore password (`--storePassword`): Password to the keystore
  
  * Alias (`--alias`): The id specifying the private key used for singing.
  
  * Password (`--password`): Password for the private key specified.
  
  * Type of the keystore (`--keystoreType`): pkcs12, jks (Default: auto-detect based on file extension)

These parameters can be specified using the command line arguments above to `build` or `run` scripts.

Alternatively, you could specify them in a build configuration file (build.json) using (`--buildConfig`) argument. Here's a sample of a build configuration file:

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

For release signing, passwords can be excluded and the build system will issue a prompt asking for the password.

There is also support to mix and match command line arguments and parameters in build.json file. Values from the command line arguments will get precedence. This can be useful for specifying passwords on the command line. 

## Logging

        $ /path/to/project/cordova/log

        C:\>\path\to\project\cordova\log.bat

## Cleaning

        $ /path/to/project/cordova/clean

        C:\>\path\to\project\cordova\clean.bat

## Building with Gradle

As of cordova-android@4.0.0, project build using [Gradle](http://www.gradle.org/).
For instructions on building with ANT, refer to older versions of documentation.

### Gradle Properties

These [properties](http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html)
can be set to customize the build:

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


### Extending build.gradle

If you need to customize `build.gradle`, rather than edit directly, you should create
a sibling file named `build-extras.gradle`. This file will be included by the main
`build.gradle` when present. Here's an example:

    # Example build-extras.gradle
    # This file is included at the beginning of `build.gradle`
    ext.cdvDebugSigningPropertiesFile = '../../android-debug-keys.properties'
    # When set, this function allows code to run at the end of `build.gradle`
    ext.postBuildExtras = {
        android.buildTypes.debug.applicationIdSuffix = '.debug'
    }

Note that plugins can also include `build-extras.gradle` files via:

    <framework src="some.gradle" custom="true" type="gradleReference" />

### Example Build

    export ORG_GRADLE_PROJECT_cdvMinSdkVersion=14
    cordova build android -- --gradleArg=-PcdvBuildMultipleApks=true

