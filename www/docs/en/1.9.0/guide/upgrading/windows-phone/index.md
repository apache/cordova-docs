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

title: Upgrading Cordova Windows Phone
---

Upgrading Cordova Windows Phone
===============================

This document is for people who need to upgrade their Cordova versions from an older version to a current version of Cordova.

- To upgrade to 1.8.0, please go from 1.7.0

## Upgrade to 1.8.0 from 1.7.0 ##

### In Visual Studio's Solution Explorer window:
1. Delete the file GapLib/WP7CordovaClassLib.dll from your project.
2. Remove the reference to WP7CordovaClassLib in the References folder.
3. Right-Click on References and Select 'Add Reference'
4. Navigate to the new distribution and add the file 'WP7CordovaClassLib.dll'
    - note: you can view the version of the DLL by right-clicking on the reference, and selecting Properties.
5. Copy the new cordova-1.8.0.js into your project ( be sure it is marked as Content )
6. Update your HTML to use the new cordova-1.8.0.js file.
