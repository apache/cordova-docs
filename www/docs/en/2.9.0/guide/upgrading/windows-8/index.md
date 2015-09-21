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

title: Upgrading Cordova Windows 8
---

Upgrading Cordova Windows 8
===============================

This document is for people who need to upgrade their Cordova versions from an older version to a current version of Cordova. This applies to applications targetting Windows 8 and the Windows Store.

## Upgrade to 2.9.0 from 2.8.0 ##

The following commands should be done from within Visual Studio to be sure that the any project references are updated/deleted.

1. Remove cordova-2.8.0.js from the www directory in your project.
2. Add cordova.js file from the source to the www directory in your project. ( note that the file no longer contains a version number in the file name )
3. Build and test!

## Upgrade to 2.8.0 from 2.7.0 ##

The following commands should be done from within Visual Studio to be sure that the any project references are updated/deleted.

1. Remove cordova-2.7.0.js from the www directory in your project. 
2. Add cordova.js file from the source to the www directory in your project. ( note that the file no longer contains a version number in the file name )
3. Build and test!
