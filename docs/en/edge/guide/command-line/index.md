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

Command-Line Usage
==================

Cordova now ships with a set of command line tools that make it easier for you to developer cross platform apps. You can build, clean, launch an emulator with a single command.

* iOS
* Android

iOS
===

Create a project
----------------

Run the create comand with the:

* Path to your new cordova iOS project
* Package name
* Project name

<!-- -->

    $ /path/to/phonegap-phonegap-xxxxxxx/lib/ios/bin/create /path/to/cordova_project com.example.cordova_project_name CordovaProjectName


Build a project
---------------

    $ /path/to/cordova_project/cordova/debug /path/to/cordova_project CordovaProjectName

Launch emulator
---------------

    $ /path/to/cordova_project/cordova/emulate

Logging
-------

    $ /path/to/cordova_project/cordova/log


Android
=======


Create a project
----------------

Run the create comand with the:

* Path to your new cordova android project
* Package name
* Main activity name

<!-- -->

    $ /path/to/phonegap-phonegap-xxxxxxx/lib/android/bin/create /path/to/cordova_project com.example.cordova_project_name CordovaProjectName

or

        $ /path/to/phonegap-phonegap-xxxxxxx/lib/android/bin/create.bat /path/to/new_cordova_project com.example.cordova_project_name CordovaProjectName

on **Windows**

Build a project
---------------

    $ /path/to/cordova_project/cordova/debug

or

    $ /path/to/cordova_project/cordova/debug.bat

on **Windows**

Launch emulator
---------------

    $ /path/to/cordova_project/cordova/emulate

or

    $ /path/to/cordova_project/cordova/emulate.bat

on **Windows**

Make sure you created at least one Android Virtual Device if you did not it will ask you to create one with the *android* command.
If you have multiple AVDs, it will prompt you to select an AVD.

Logging
-------

    $ /path/to/cordova_project/cordova/log

or

    $ /path/to/cordova_project/cordova/log.bat

on **Windows**

Cleaning
--------

    $ /path/to/cordova_project/cordova/clean

or

    $ /path/to/cordova_project/cordova/clean.bat

on **Windows**

Clean, build, deploy and launch
-------------------------------

    $ /path/to/cordova_project/cordova/BOOM

or

    $ /path/to/cordova_project/cordova/BOOM.bat

on **Windows**

Make sure you have an emulator or a device connected.
