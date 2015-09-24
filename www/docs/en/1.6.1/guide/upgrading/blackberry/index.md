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

title: Upgrading Cordova BlackBerry
---

Upgrading Cordova BlackBerry
============================

This document is for people who need to upgrade their Cordova versions from an older version to a current version of Cordova.

- To upgrade to 1.6.1, please go from 1.6.0rc1

## Upgrade to 1.6.1 from 1.6.0rc1 ##

Updating just the www folder:

1. Open your `www/` folder, which contains your app.
2. Remove and update the .jar file in the `ext/` folder.
3. Update the contents of the `ext-air/` folder.
4. Copy the new `cordova-1.6.1.js` into your project.
    - If playbook, then update the .js file in the `playbook/` folder.
5. Update your HTML to use the new `cordova-1.6.1.js` file.


Updating the sample folder (ie, updating using the ant tools):

1. Open the `sample/lib/` folder.
2. Update the .jar file in the `cordova.1.6.0rc1/ext/` folder.
3. Update the contents of the `cordova.1.6.0rc1/ext-air/` folder.
4. Update the .js file in the `cordova.1.6.0rc1/javascript/` folder.
5. Open the `sample/lib/` folder and rename the `cordova.1.6.0rc1/` folder to `cordova.1.6.1/`.
6. Type `ant blackberry build` or `ant playbook build` to update the `www/` folder with updated Cordova.
7. Open the `www/` folder and update your HTML to use the new `cordova-1.6.1.js` file.


