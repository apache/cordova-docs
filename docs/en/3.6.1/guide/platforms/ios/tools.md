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

# iOS Shell Tool Guide

This guide shows how to use Cordova's set of platform-centered shell
tools to develop iOS apps. This development path, discussed in the
Overview, may offer you a greater range of development options for iOS
than the cross-platform CLI tool described in The Command-Line
Interface.  For example, you need to use shell tools when deploying a
custom Cordova WebView alongside native components. Before using
either development path, you must first configure the SDK environment
as described in the iOS Platform Guide.  These tools rely upon
Xcode's command-line tools such as `xcode-select` and `xcodebuild`.

To enable shell tools for iOS, download Cordova from
[cordova.apache.org](http://cordova.apache.org). The download contains
separate archives for each platform. Expand each you wish to target,
`ios` in this case. The relevant tools are typically available in the
top-level `bin` directory, otherwise consult the __README__ file for
more detailed directions.

These tools allow you to create, build, and run iOS apps.  For
information on the additional command-line interface that enables
plugin features across all platforms, see Using Plugman to Manage
Plugins. See Application Plugins for details on how to develop
plugins.

## Create a Project

Run the `create` command, specifying the existing path to the project,
the reverse-domain-style package identifier, and the app's display
name.

        $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName

## Build a Project

        $ /path/to/my_new_project/cordova/build

## Run App on an Emulator

        $ /path/to/my_new_project/cordova/run

## Releasing

        $ /path/to/my_new_project/cordova/release

## Logging

        $ /path/to/my_new_project/cordova/log

