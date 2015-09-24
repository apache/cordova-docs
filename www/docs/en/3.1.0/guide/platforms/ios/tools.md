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

title: iOS Command-line Tools
---

# iOS Command-line Tools

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

The iOS command-line tools are built upon shell scripts and rely on
Xcode command-line tools such as `xcode-select` and `xcodebuild`.

## Create a project

Run the `create` command, specifying the existing path to the project,
the reverse-domain-style package identifier, and the app's display
name.

    $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName

## Build a project

    $ /path/to/my_new_project/cordova/build

## Run app on emulator

    $ /path/to/my_new_project/cordova/run

## Releasing

    $ /path/to/my_new_project/cordova/release

## Logging

    $ /path/to/my_new_project/cordova/log

