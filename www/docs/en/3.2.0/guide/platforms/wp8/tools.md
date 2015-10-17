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

title: Windows Phone Command-line Tools
---

# Windows Phone Command-line Tools

The `cordova` command-line utility is a high-level tool that allows
you to build applications across several platforms at once. An older
version of the Cordova framework provides sets of command-line tools
specific to each platform. To use them as an alternative to the CLI,
you need to download this version of Cordova from
[cordova.apache.org](http://cordova.apache.org). The download contains
separate archives for each platform. Expand the platform you wish to
target. The tools described here are typically available in the
top-level `bin` directory, otherwise consult the __README__ file for
more detailed directions.

For information on the low-level command-line interface that enables
plugins, see [Using Plugman to Manage Plugins](../../../plugin_ref/plugman.html). See Application Plugins
for an overview.

## Windows Phone

The Windows Phone command-line tools support creating, building, and
running new projects. Commands must be run from a cmd or powershell
prompt.

The WP8 repo now includes code for building both WP7 + WP8 apps.  The
repo has subdirectories for each: `wp7/` and `wp8/`.

## Create a Project

There are 2 ways to go about creating a new Apache Cordova WP7 or WP8 application.

### Run the Batch File to Create and Install the Templates

- The root of the repo contains a `createTemplates.bat` file.
  Double-clicking it generates two `.zip` files:
  `CordovaWP7_x_x_x.zip` and `CordovaWP8_x_x_x.zip`, where _x.x.x_
  represents the current version number. To easily use these files in
  Visual Studio, copy them to `My Documents\Visual Studio
  2012\Templates\ProjectTemplates\`. You are then able to create
  new Apache Cordova Windows Phone apps from Visual Studio's
  __File &rarr; New Project__ menu.

- If you run the batch file from the command line, you can also call with a parameter to install automatically

Run the script :

    >createTemplates.bat -install

### Use the Create Scripts on the Command Line

Run the `create` command, specifying the existing path to the project,
the reverse-domain-style package identifier, and the app's display
name.  Here is the syntax for both Windows Phone 7 and 8:

    >.\wp7\bin\create PathToNewProject [ PackageName ] [ AppName ]
    >.\wp8\bin\create PathToNewProject [ PackageName ] [ AppName ]

    >PathToNewProject : The path to where you wish to create the project
    >PackageName      : The namespace for the project (default is Cordova.Example)
    >AppName          : The name of the application (default is CordovaWP8AppProj or CordovaWP7AppProj)

    >examples:
    >.\wp7\bin\create C:\path\to\my_new_project
    >.\wp8\bin\create C:\path\to\my_new_project io.cordova.example CordovaWP8App

Launch Visual Studio and open Solution file (.sln) in (C:\path\to\my_new_project)

Build and Run it

## Building the Project (Clean, then Build)

* Debug

    $ C:\path\to\my_new_project\cordova\build --debug

* Release

    $ C:\path\to\my_new_project\cordova\build --release

## Running the App

Run the 'run' command with the following *optional* parameters

* Target specification. This includes `--emulator`, `--device`, or `--target=<targetID>`.

* Build specification. This includes `--debug`, `--release`, or `--nobuild`.

    $ C:\path\to\my_new_project\cordova\run [Target] [Build]

By default the `run` command is called with `--emulator --debug` if flags are not provided.

## Cleaning

    $ C:\path\to\my_new_project\cordova\clean

