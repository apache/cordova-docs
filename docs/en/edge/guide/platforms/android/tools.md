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

