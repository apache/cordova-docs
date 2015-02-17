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

# Android Shell Tool Guide

This guide shows how to use Cordova's set of platform-centered shell
tools to develop Android apps. This development path, discussed in the
Overview, may offer you a greater range of development options than
the cross-platform CLI tool described in The Command-Line Interface.
For example, you need to use shell tools when deploying a custom
Cordova WebView alongside native components.  Before using either
development path, you must first configure the Android SDK environment
as described in the Android Platform Guide.

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

## Logging

        $ /path/to/project/cordova/log

        C:\>\path\to\project\cordova\log.bat

## Cleaning

        $ /path/to/project/cordova/clean

        C:\>\path\to\project\cordova\clean.bat

## Manual Use of Ant

If you wish to call Ant directly from the command line such as
`ant debug install`, you need to specify additional parameters to the ant
command:

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen

This is because the directories used by Cordova's Ant scripts are different
than the default. This is done to avoid conflicts when Ant is run from the
command line versus inside Eclipse/ADT.

These additional parameters are automatically added for you when using
the `cordova/build` and `cordova/run` scripts described above. For this
reason it is recommended to use the `cordova/build` and `cordova/run` scripts
instead of calling Ant directly from the command line.

## Building with Gradle (Experimental!)

Cordova for Android now supports building with
[Gradle](http://www.gradle.org/). This is optional in Cordova 3.x, but will be
enabled by default in the future, probably with Cordova 4.0. The build system
is enabled by an environment variable, which can be set for the shell, or
specified on the command line alongside the `cordova build` command.

Please note that the Gradle build rules are still in development, and will
likely be subject to large changes before Gradle becomes the default build
system. Developers are encouraged to try it, and experiment with it, but if you
base your own production build system on top of it, you will probably
experience several breaking changes over the next few releases, before it
stabilizes.

### Relevant Environment Variables

  * **ANDROID\_BUILD**

  This variable controls which build system is used to build the project. In
  can take either of the values `ant` or `gradle`.

  If not set, it currently defaults to `ant`, but this is expected to change.

### Other Environment Variables (you don't normally need to set these)

  * **ANDROID\_HOME**

  This should be set to the directory containing the Android SDK. Cordova looks
  for this in the default install locations, as well as by looking at your PATH
  variable, so it doesn't normally require setting.

  * **JAVA\_HOME**

  On some machines, this will need to be set so that Gradle can find the Java
  compiler.

### Gradle Properties

These [properties](http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html)
can be set to customize the build:

  * **cdvBuildMultipleApks**

  If this is set, then multiple APK files will be generated: One per native
  platform supported by library projects (x86, ARM, etc). This can be important
  if your project uses large native libraries, which can drastically increase
  the size of the generated APK.

  If not set, then a single APK will be generated which can be used on all devices.

  * **cdvVersionCode**

  Overrides the versionCode set in `AndroidManifest.xml`

  * **cdvReleaseSigningPropertiesFile**

  Path to a .properties file that contains signing information for release builds.
  The file should look like:
  ```
  key.store=relative/path/to/keystore.p12
  key.store.password=SECRET1
  key.storeType=pkcs12
  key.alias=DebugSigningKey
  key.alias.password=SECRET2
  ```

  `storePassword` and `keyPassword` are optional, and will be prompted for if omitted.

  * **cdvDebugSigningPropertiesFile**

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

### Example Build

    export ANDROID_BUILD=gradle
    export ORG_GRADLE_PROJECT_cdvMinSdkVersion=14
    cordova build android -- --gradleArg=-PcdvBuildMultipleApks=true

