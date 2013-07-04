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

## Windows Phone

The Windows Phone command-line tools support creating, building, and
running new projects. Commands must be run from a cmd or powershell
prompt.

The WP8 repo now includes code for building both WP7 + WP8 apps.  The
repo has subfolders for each: wp7/ and wp8/

## Create a project

Run the `create` command, specifying the existing path to the project,
the reverse-domain-style package identifier, and the app's display
name.  Here is the syntax for both Windows Phone 7 and 8:

    $ C:\path\to\cordova-wp8\wp7\bin\create C:\path\to\my_new_project com.example.project_name ProjectName
    $ C:\path\to\cordova-wp8\wp8\bin\create C:\path\to\my_new_project com.example.project_name ProjectName    

## Building your project (cleans then builds)

* Debug

    $ C:\path\to\my_new_project\cordova\build --debug

* Release

    $ C:\path\to\my_new_project\cordova\build --release

## Running your application

Run the 'run' command with the following *optional* parameters

* Target specification. This includes `--emulator`, `--device`, or `--target=<targetID>`.
* Build specification. This includes `--debug`, `--release`, or `--nobuild`.

    $ C:\path\to\my_new_project\cordova\run [Target] [Build]

By default the `run` command will look for a connected device, if no
device is found it will look for any started emulators. If you have
multiple emulators, you can specify a target ID.

## Cleaning

    $ C:\path\to\my_new_project\cordova\clean

