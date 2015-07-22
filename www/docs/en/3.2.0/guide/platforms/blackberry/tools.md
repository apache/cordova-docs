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

title: BlackBerry Shell Tool Guide
---

# BlackBerry Shell Tool Guide

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
for details on how to develop plugins.

## Create a Project

Run the `create` command, specifying the existing path to the project,
the reverse-domain-style package identifier, and the app's display
name.  Here is the syntax for both Mac and Windows:

        $ /path/to/cordova-blackberry-webworks/bin/create /path/to/my_new_project com.example.project_name ProjectName
        $ /path/to/cordova-blackberry-webworks/bin/create.bat /path/to/my_new_project com.example.project_name ProjectName

__NOTE__: The BlackBerry platform ignores the package name placeholder
(`com.example.project_name`), but it's still required for use by
cross-platform tools.

## Build a Project

For BlackBerry projects, please make sure you customize the
`project.properties` file in your Cordova project's root directory.
You need to do so to supply your BlackBerry signing key password, and
specify locations for the BlackBerry WebWorks SDK and BlackBerry
emulator executables.

        $ /path/to/my_new_project/cordova/build <platform>
        $ /path/to/my_new_project/cordova/build.bat <platform>

## Launch Emulator

For BlackBerry projects, please make sure you customize the
`project.properties` file in the root of your Cordova project directory.
You need to do so to supply your BlackBerry signing key password, and
specify locations for the BlackBerry WebWorks SDK and BlackBerry
emulator executables.

        $ /path/to/my_new_project/cordova/run <platform>

and then choose 'no' when prompted with:

        Do you have a BlackBerry device connected to your computer? (y/n)
        $ /path/to/my_new_project/cordova/run <platform>

and then choose 'no' when prompted with:

        Do you have a BlackBerry device connected to your computer? (y/n)

## Logging

Unfortunately, streaming logs directly from the device is currently
unsupported. However, BlackBerry offers built-in Web Inspector support
for Playbook and BlackBerry smartphone devices running BlackBerry OS
7.0 and above. You can also access your application's logs (including
any calls to `console.log`) on your device by holding down the ''ALT''
key from the home screen and typing ''lglg'' keys.

