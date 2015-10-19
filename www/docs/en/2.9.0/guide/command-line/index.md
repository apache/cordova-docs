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

title: Command-Line Usage
---

# Command-Line Usage

Cordova now ships with a set of command-line tools that make it easier
for you to develop cross-platform applications. You can build, clean,
and launch an emulator with a single command. You can consider these
instructions as an alternative to the [Platform Guides](../getting-started/index.html). Whereas
the [Platform Guides](../getting-started/index.html) help you get setup with the default IDEs and
tooling surrounding the platforms you are working with, the command-line
tools aim to provide a shell-based approach to creating and working with
Cordova projects.

## Supported Platforms

* [iOS](#Command-Line%20Usage_ios)
* [Android](#Command-Line%20Usage_android)
* [BlackBerry](#Command-Line%20Usage_blackberry)
* [BlackBerry 10](#Command-Line%20Usage_blackberry_10)
* [Windows Phone](#Command-Line%20Usage_windows_phone)
* [Windows 8](#Command-Line%20Usage_windows_8)

## Windows Phone

The Windows Phone command-line tools support creating, building, and
running new projects. Commands must be run from a cmd or powershell prompt.

The WP8 repo now includes code for building both WP7 + WP8 apps.
The repo has subfolders for each: wp7/ and wp8/

### Create a project

Run the `create` command with the following parameters:

* Path to your new Cordova Windows Phone project
* Package Name, following reverse-domain style convention ( this becomes the default Namespace )
* Project name

<!-- -->

    // create a new wp8 Cordova project
    $ C:\path\to\cordova-wp8\wp8\bin\create C:\path\to\my_new_cordova_project com.example.cordova_project_name CordovaProjectName
    
    // create a new wp7 Cordova project
    $ C:\path\to\cordova-wp8\wp7\bin\create C:\path\to\my_new_cordova_project com.example.cordova_project_name CordovaProjectName

### Building your project (cleans then builds)

* Debug

<!-- -->

    $ C:\path\to\my_new_cordova_project\cordova\build --debug

* Release

<!-- -->

    $ C:\path\to\my_new_cordova_project\cordova\build --release

### Running your application

Run the 'run' command with the following *optional* parameters

* Target specification. This includes `--emulator`, `--device`, or `--target=<targetID>`.
* Build specification. This includes `--debug`, `--release`, or `--nobuild`.

<!-- -->

    $ C:\path\to\my_new_cordova_project\cordova\run [Target] [Build]

By default the `run` command will look for a connected device, if no device is found it will look for any started emulators. If you have multiple emulators, you can specify a target ID.

### Cleaning

    $ C:\path\to\my_new_cordova_project\cordova\clean

## iOS

The iOS command-line tools are built upon shell scripts and rely on
Xcode command-line tools such as `xcode-select` and `xcodebuild`.

### Create a project

Run the `create` command with the following parameters:

* Path to your new Cordova iOS project
* Package name, following reverse-domain style convention
* Project name

<!-- -->

    $ ./path/to/cordova-ios/bin/create /path/to/my_new_cordova_project com.example.cordova_project_name CordovaProjectName

### Build a project

    $ /path/to/my_new_cordova_project/cordova/build

### Run app on emulator

    $ /path/to/my_new_cordova_project/cordova/run

### Releasing

    $ /path/to/my_new_cordova_project/cordova/release

### Logging

    $ /path/to/my_new_cordova_project/cordova/log

## Android

The Android command-line tools are built upon shell scripts. You _must_
have the Android SDK's `tools` and `platform-tools` folders in your
PATH!

### Create a project

Run the `create` command with the following parameters:

* Path to your new Cordova Android project
* Package name, following reverse-domain style convention
* Main Activity name

<!-- -->

    $ /path/to/cordova-android/bin/create /path/to/my_new_cordova_project com.example.cordova_project_name CordovaProjectName

or, on *Windows*

    $ C:\path\to\cordova-android\bin\create.bat C:\path\to\my_new_cordova_project com.example.cordova_project_name CordovaProjectName

### Building your project (cleans then builds)

* **Debug**

<!-- -->

    $ /path/to/my_new_cordova_project/cordova/build --debug

   or, on *Windows*

    $ C:\path\to\my_new_cordova_project\cordova\build.bat --debug

* **Release**

<!-- -->

    $ /path/to/my_new_cordova_project/cordova/build --release

   or, on *Windows*

    $ C:\path\to\my_new_cordova_project\cordova\build.bat --release


### Running your application

Run the 'run' command with the following *optional* parameters

* Target specification. This includes `--emulator`, `--device`, or `--target=<targetID>`.
* Build specification. This includes `--debug`, `--release`, or `--nobuild`.

<!-- -->
    $ /path/to/my_new_cordova_project/cordova/run [Target] [Build]

   or, on *Windows*

    $ C:\path\to\my_new_cordova_project\cordova\run.bat [Target] [Build]

Make sure you create at least one Android Virtual [Device](../../cordova/device/device.html), otherwise
you're prompted to do so with the `android` command.  If you have
multiple AVDs, you're prompted to select one. By default the `run`
command will detect a connected device. When no device is found,
it will detect a running emulator.

### Logging

    $ /path/to/my_new_cordova_project/cordova/log

or, on *Windows*

    $ C:\path\to\my_new_cordova_project\cordova\log.bat

### Cleaning

    $ /path/to/my_new_cordova_project/cordova/clean

or, on *Windows*

    $ C:\path\to\my_new_cordova_project\cordova\clean.bat

## BlackBerry

The BlackBerry command-line tools are built upon shell scripts.

### Create a project

Run the `create` command with the following parameters:

* Path to your new Cordova BlackBerry project
* Placeholder package name
* Application name

<!-- -->

    $ /path/to/cordova-blackberry-webworks/bin/create /path/to/my_new_cordova_project com.example.cordova_project_name CordovaProjectName

or, on **Windows**

    $ /path/to/cordova-blackberry-webworks/bin/create.bat /path/to/my_new_cordova_project com.example.cordova_project_name CordovaProjectName

__NOTE:__ The BlackBerry platform ignores the package name placeholder
(`com.example.cordova_project_name`), but it's still required for use by
cross-platform tools.

### Build a project

For BlackBerry projects, please make sure you customize the
`project.properties` file in your Cordova project's root directory.
You need to do so to supply your BlackBerry signing key password, and
specify locations for the BlackBerry WebWorks SDK and BlackBerry
simulator executables.

    $ /path/to/my_new_cordova_project/cordova/build <platform>

or, on **Windows**

    $ /path/to/my_new_cordova_project/cordova/build.bat <platform>

### Launch simulator

For BlackBerry projects, please make sure you customize the
`project.properties` file in the root of your Cordova project folder.
You need to do so to supply your BlackBerry signing key password, and
specify locations for the BlackBerry WebWorks SDK and BlackBerry
simulator executables.

    $ /path/to/my_new_cordova_project/cordova/run <platform>

and then choose 'no' when prompted with:

    Do you have a BlackBerry device connected to your computer? (y/n)

or, on **Windows**

    $ /path/to/my_new_cordova_project/cordova/run <platform>

and then choose 'no' when prompted with:

    Do you have a BlackBerry device connected to your computer? (y/n)

### Logging

Unfortunately, streaming logs directly from the device is currently
unsupported. However, BlackBerry offers built-in Web Inspector support
for Playbook and BlackBerry smartphone devices running BlackBerry OS
7.0 and above. You can also access your application's logs (including
any calls to `console.log`) on your device by holding down the ''ALT''
key from the home screen and typing ''lglg'' keys.


## BlackBerry 10

Command-line tools are based on shell scripts. If you need help with a command, type the command with the `-h` or `-help` arguments, which are supported by all commands and which will provide descriptions for each of the available arguments.

The following commands are available:

## create

The 'create' command creates a new project:

```
bin/create <path-to-project>
```

## target

The `target` command allows you to manage the BlackBerry device(s) or simulator that you will use to test your app. You can add or remove a target, or set a target as the default target.

### Add a target

```
<path-to-project>/cordova/target  add  <name>  <ip-address>  <device | simulator>  [-p | --password <password>]  [--pin <device-pin>]
```

where

-   `<name>`  specifies a unique name for the target.
-   `<ip-address>`  specifies the ip address of the BlackBerry device or simulator.
-   `-p|--password <password>`  specifies the password for the device or simulator. This is required only if the device or simulator is password protected.
-   `--pin <device-pin>`  specifies the PIN of the BlackBerry device, which identifies that device as a valid host for the debug token. This argument is required only if you are creating a debug token.

### Remove a target

```
<path-to-project>/cordova/target  remove  <name>
```

### Set a target as the default

```
<path-to-project>/cordova/target  default  <name>
```

## build

The `build` command builds the project as a .bar file. You can build your app in either release mode (which produces a signed .bar file) or in debug mode (which produces an unsigned .bar file).

### Build your project in release mode

```
<path-to-project>/cordova/build  release  -k|--keystorepass <password>  [-b|--buildId <number>]  [-p|--params <params-JSON-file>]
```
where

-   `-k|--keystorepass <password>`  specifies the password you defined when you configured your computer to sign applications.
-   `-b|--buildId <number>`  specifies the build version number of your application. Typically, this number should be incremented from the previous signed version. This argument is optional.
-   `-p|--params <params-JSON-file>`  specifies a JSON file containing additional parameters to pass to downstream tools. This argument is optional.

### Build your project in debug mode

```
<path-to-project>/cordova/build  debug  [<target>]  [-k|--keystorepass <password>]  [-p|--params <params-JSON-file>]  [-ll|--loglevel <error|warn|verbose>]
```

where

-   `<target>`  specifies the name of a previously added target. If `<target>`  is not specified, the default target is used, if one has been created. This argument is only required if you want the script to deploy your app to a BlackBerry device or simulator and you have not created a default target. Additionally, if `<target>`  is a device, then that device must be connected to your computer by USB connection or be connected to the same Wi-Fi network as your computer.
-   `-k|--keystorepass <password>`  specifies the password you defined when you configured your computer to sign applications. This password is also used to create your debug token. This argument is only required if you want the script to create and install the debug token for you.
-   `-p|--params <params-JSON-file>`  specifies a JSON file containing additional parameters to pass to downstream tools.
-   `-ll|--loglevel <level>`  specifies the log level. The log level may be one of `error`, `warn`, or `verbose`.

If you have previously defined a default target (and previously installed a debug token, if that target is a BlackBerry device), you can run the script with no arguments, and the script will package your app and deploy it to the default target. For example:

```
<path-to-project>/cordova/build debug
```

## run

The `run` command deploys the app on the specified BlackBerry device or a simulator. Before deploying your app, you must first create a target for the device or simulator you want to deploy your app to. The deploy script will deploy the most recent build of your app.

```
<path-to-project>/cordova/run <target>
```

where
-   `<target> `specifies the name of a previously added target. If `<target> `is a device, then that device must be connected to your computer by USB connection or be connected to the same Wi-Fi network as your computer.

## plugin

The `target` command allows you to add and remove plugins

### Fetch a locally-hosted plugin


```
<path-to-project>/cordova/plugin fetch <path-to-plugin>
```

### View a list of installed plugins

```
<path-to-project>/cordova/plugin ls
```

### Add a plugin

```
<path-to-project>/cordova/plugin add <name>
```

### Remove a plugin

```
<path-to-project>/cordova/plugin rm <name>
```

## Windows 8

The Windows 8 command line tools support creating new projects only.
Commands must be run from a cmd or powershell prompt.

### Create a project

Run the `create` command with the following parameters:

* Path to your new Cordova Windows 8 project
* Package Name, following reverse-domain style convention ( this becomes the default Namespace )
* Project name
