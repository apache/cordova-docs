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

title: Upgrading Cordova Bada
---

Upgrading Cordova Bada
======================

This document is for people who need to upgrade their Cordova versions from an
older version to a current version of Cordova.

## Upgrade to 1.9.0 from 2.0.0 ##

1. Update `Res/js/cordova.js` with the new JavaScript file.

## Upgrade to 1.9.0 from 1.8.x ##

1. Update `Res/js/cordova.js` with the new JavaScript file.

## Upgrade to 1.8.x from 1.7.0 ##

1. Remove the cordova.bada.js file from the Res/js directory 
2. Add the new cordova.js file to your Res/js directory 
3. Update your Res/index.html to reference cordova.js instead of cordova.bada.js 

Change this line:

    <script type="text/javascript" src="./js/cordova.bada.js"></script>
to:

    <script type="text/javascript" src="./js/cordova.js"></script>

As of Cordova 1.8, Bada 1.2 is no longer supported! The repository will be kept
there as an archive for people who still want to use it. It contains some outdated APIs.
