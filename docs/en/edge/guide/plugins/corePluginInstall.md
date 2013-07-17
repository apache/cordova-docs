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

# Core Plugin Installion Guide

Their are two approaches to installing plugins in 3.0+ world. For this guide, the examples are using [plugman](https://github.com/apache/cordova-plugman/). Below, we explain how to use both methods.

##Plugman

Plugman is a command line tool to install and uninstall plugins for use with Apache Cordova projects. Learn more about how to install and use plugman at [https://github.com/apache/cordova-plugman/blob/master/README.md](https://github.com/apache/cordova-plugman/blob/master/README.md).

Install plugman (must have node installed on development machine):

    npm install -g plugman
    
Installing plugins with plugman

    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]
        
Uninstalling plugins with plugman

    plugman --uninstall --platform <ios|android|blackberr10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]
        
##Cordova CLI
Cordova CLI is a command line tool to build, deploy and manage Cordova-based applications. Cordova CLI uses plugman under the hood to manage all aspects of plugins. Cordova CLI is the preferred method for working with Cordova 3.0. It is highly recommended that users read The Command-line Interface guide. Users can also checkout the readme at [https://github.com/apache/cordova-cli/blob/master/README.md](https://github.com/apache/cordova-cli/blob/master/README.md).

Install Cordova CLI (must have node installed on development machine):

    npm install -g cordova
    
Installing plugins with CLI

    plugin add <path-to-plugin> [<path-to-plugin> ...]

Uninstalling plugins with CLI

    plugin [rm | remove] <plugin-name> [<plugin-name> ...]
    

##Core Plugins
Below are examples of installing all of the core plugins using plugman. Make sure to select which platform to install for and point to the directory of your project.

###cordova-plugin-battery-status
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git

###cordova-plugin-camera
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-camera.git
    
###cordova-plugin-console
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git

###cordova-plugin-contacts
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git
    
###cordova-plugin-device
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git

###cordova-plugin-device-motion (accelerometer)
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git

###cordova-plugin-device-orientation (compass)
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git

###cordova-plugin-dialogs
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git

###cordova-plugin-file
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git

###cordova-plugin-file-transfer
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git

###cordova-plugin-geolocation
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git

###cordova-plugin-globalization
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-globalization.git

###cordova-plugin-inappbrowser
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git

###cordova-plugin-media
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-media.git

###cordova-plugin-media-capture
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-media-capture.git

###cordova-plugin-network-information
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git

###cordova-plugin-splashscreen
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git

###cordova-plugin-vibration
    plugman --platform <ios|android|blackberry10|wp7|wp8> --project <directory> --plugin https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git
