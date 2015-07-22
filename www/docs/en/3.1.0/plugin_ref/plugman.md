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

title: Using Plugman to Manage Plugins
---

# Using Plugman to Manage Plugins

From version 3.0 onward, Cordova implements all device APIs as
plugins, and leaves them disabled by default.  It also supports two
different ways to add and remove plugins. The first is by using the
`cordova` CLI described in [The Command-line Interface](../guide/cli/index.html). The second is
by using a lower-level
[plugman](https://github.com/apache/cordova-plugman/)
command-line interface. This guide concentrates on the second
approach, which may be useful for developers who want to upgrade their
version of Cordova, but who haven't yet adopted the Cordova CLI in
their workflow.

For more information on plugman, see
[the README file in its repository](https://github.com/apache/cordova-plugman/blob/master/README.md).

## Basic Commands

To install plugman, you must have [node](http://nodejs.org/) installed
on your machine:

    npm install -g plugman
    
Here is the syntax to add a plugin for each platform:

    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
        
To uninstall a plugin:

    plugman --uninstall --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
        
## Installing Core Plugins

The examples below [show](../cordova/inappbrowser/inappbrowser.html) how to add plugins as needed so that any
Cordova APIs you use in your project still work after you upgrade to
version 3.0.  For each command, you need to select the target
platform, and reference the platform's project directory.

* cordova-plugin-battery-status
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.battery-status

* cordova-plugin-camera
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.camera
    
* cordova-plugin-console
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.console

* cordova-plugin-contacts
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.contacts
    
* cordova-plugin-device
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device

* cordova-plugin-device-motion (accelerometer)
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-motion

* cordova-plugin-device-orientation (compass)
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-orientation

* cordova-plugin-dialogs
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.dialogs

* cordova-plugin-file
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file

* cordova-plugin-file-transfer
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file-transfer

* cordova-plugin-geolocation
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.geolocation

* cordova-plugin-globalization
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.globalization

* cordova-plugin-inappbrowser
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.inappbrowser

* cordova-plugin-media
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media

* cordova-plugin-media-capture
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media-capture

* cordova-plugin-network-information
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.network-information

* cordova-plugin-splashscreen
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.splashscreen

* cordova-plugin-vibration
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.vibration
