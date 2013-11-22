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

# Upgrading Windows 8

This guide shows how to modify Windows 8 projects to upgrade from older versions of Cordova.
Most of these instructions apply to projects created with an older set
of command-line tools that precede the `cordova` CLI utility. See The Command-Line Interface for information how to update the
version of the CLI.

## Upgrade to 3.2.0 from 3.1.0

For projects that were created with the cordova CLI: 

1. Update the `cordova` CLI version. See The Command-Line Interface. 

2. Run `cordova platform update windows8`.
        
For projects not created with the cordova CLI, run:

        bin\update <project_path>

## Upgrade to 3.1.0

Cordova CLI support for Windows 8 was introduced in Cordova 3.1.0. To upgrade, we suggest creating a new Cordova CLI project and moving over all necessary assets.  

## Upgrade to 2.9.0 from 2.8.0

The following commands should be done from within Visual Studio to be sure that the any project references are updated/deleted.

1. Remove `cordova-2.8.0.js` from the project's `www` directory.

2. Add `cordova.js` file from the source to the project's `www` directory. (Note that the file no longer contains a version number in the filename.)

3. Build and test!

## Upgrade to 2.8.0 from 2.7.0

The following commands should be done from within Visual Studio to be sure that the any project references are updated/deleted.

1. Remove `cordova-2.7.0.js` from the project's `www` directory. 

2. Add `cordova.js` file from the source to the project's `www` directory. (Note that the file no longer contains a version number in the filename.)

3. Build and test!
