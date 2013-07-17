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

# Using Plugman to Manage Plugins

From version 3.0 onward, Cordova implements all device APIs as
plugins, and leaves them disabled by default.  It also supports two
different ways to add and remove plugins. The first is by using the
`cordova` CLI described in The Command-line Interface. The second is
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

The examples below show how to add plugins as needed so that any
Cordova APIs you use in your project still work after you upgrade to
version 3.0.  For each command, you need to select the target
platform, and reference the platform's project directory.

* cordova-plugin-battery-status
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git

* cordova-plugin-camera
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git
    
* cordova-plugin-console
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git

* cordova-plugin-contacts
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git
    
* cordova-plugin-device
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git

* cordova-plugin-device-motion (accelerometer)
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git

* cordova-plugin-device-orientation (compass)
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git

* cordova-plugin-dialogs
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git

* cordova-plugin-file
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git

* cordova-plugin-file-transfer
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git

* cordova-plugin-geolocation
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git

* cordova-plugin-globalization
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-globalization.git

* cordova-plugin-inappbrowser
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git

* cordova-plugin-media
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-media.git

* cordova-plugin-media-capture
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-media-capture.git

* cordova-plugin-network-information
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git

* cordova-plugin-splashscreen
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git

* cordova-plugin-vibration
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git
