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
instructions as an alternative to the Getting Started guides. Whereas
the Getting Started guides help you get setup with the default IDEs and
tooling surrounding the platforms you are working with, the command-line
tools aim to provide a shell-based approach to creating and working with
Cordova projects.

## Supported Platforms

* [iOS](#Command-Line%20Usage_ios)
* [Android](#Command-Line%20Usage_android)
* [BlackBerry](#Command-Line%20Usage_blackberry)
* [Windows Phone 8](#Command-Line%20Usage_wp8)

## Windows Phone 8

The Windows Phone 8 command line tools support creating new projects.

### Create a project

Run the `create` command with the following parameters:

* Path to your new Cordova WP8 project
* Package Name, following reverse-domain style convention ( this becomes the default Namespace )
* Project name

<!-- -->

    $ ./path/to/cordova-wp8/bin/create /path/to/my_new_cordova_project com.example.cordova_project_name CordovaProjectName

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

or, on **Windows**

    $ /path/to/cordova-android/bin/create.bat /path/to/my_new_cordova_project com.example.cordova_project_name CordovaProjectName

### Build a project

    $ /path/to/my_new_cordova_project/cordova/build

or, on **Windows**

    $ /path/to/my_new_cordova_project/cordova/build.bat

### Run app on emulator/device

    $ /path/to/my_new_cordova_project/cordova/run

or, on **Windows**

    $ /path/to/my_new_cordova_project/cordova/run.bat

Make sure you have created at least one Android Virtual [Device](../../cordova/device/device.html). If you did not it will ask you to create one with the `android` command.
If you have multiple AVDs, it will prompt you to select an AVD.

### Logging

    $ /path/to/my_new_cordova_project/cordova/log

or, on **Windows**

    $ /path/to/my_new_cordova_project/cordova/log.bat

### Cleaning

    $ /path/to/my_new_cordova_project/cordova/clean

or, on **Windows**

    $ /path/to/my_new_cordova_project/cordova/clean.bat

### Releasing

    $ /path/to/my_new_cordova_project/cordova/release

or, on **Windows**

    $ /path/to/my_new_cordova_project/cordova/release.bat


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

Note: the package name placeholder (com.example.cordova_project_name) is ignored on the BlackBerry platform, but is required for use of the crossplatform tools

### Build a project

For BlackBerry projects, please make sure you customize the
`project.properties` file in the root of your Cordova project folder.
This is necessary for things like supplying your BlackBerry signing key
password, location of the BlackBerry WebWorks SDK, and location of
BlackBerry simulator executables.

    $ /path/to/my_new_cordova_project/cordova/build <platform>
 
or, on **Windows**

    $ /path/to/my_new_cordova_project/cordova/build.bat <platform>

### Launch simulator

For BlackBerry projects, please make sure you customize the
`project.properties` file in the root of your Cordova project folder.
This is necessary for things like supplying your BlackBerry signing key
password, location of the BlackBerry WebWorks SDK, and location of
BlackBerry simulator executables.

    $ /path/to/my_new_cordova_project/cordova/run <platform>
    
and then choose 'no' when prompted with: 

    Do you have a BlackBerry device connected to your computer? (y/n)
    
or, on **Windows**

    $ /path/to/my_new_cordova_project/cordova/run <platform>

and then choose 'no' when prompted with: 

    Do you have a BlackBerry device connected to your computer? (y/n)
    
### Logging

Unfortunately streaming logs directly from the device is not
supported at this time. However, BlackBerry offers built-in Web
Inspector support for Playbook and BlackBerry smartphone devices running
BlackBerry OS 7.0 and above. Additionally, you can access your
application's logs (including any calls to `console.log`) on your device
by holding down the ALT key from the home screen and hitting "lglg"
keys.
