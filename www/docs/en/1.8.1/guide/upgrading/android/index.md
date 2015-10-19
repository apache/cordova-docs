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
---

Upgrading Cordova Android
=========================


This document is for people who need to upgrade their Cordova versions from an older version to a current version of Cordova.

- To upgrade to 1.8.0, please go from 1.7.0
- To upgrade from 1.7.0, please go from 1.6.0

## Upgrade to 1.8.0 from 1.7.0 ##

1. Remove cordova-1.7.0.jar from the libs directory in your project
2. Add cordova-1.8.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new cordova-1.8.0.js into your project
5. Update your HTML to use the new cordova-1.8.0.js file
6. Update the res/xml/plugins.xml to be the same as the one found in framework/res/xml/plugins.xml


## Upgrade to 1.7.0 from 1.6.0 ##

1. Remove cordova-1.6.0.jar from the libs directory in your project
2. Add cordova-1.7.0.jar to the libs directory in your project
3. If you are using Eclipse, please refresh your eclipse project and do a clean
4. Copy the new cordova-1.7.0.js into your project
5. Update your HTML to sue the new cordova-1.7.0.js file
6. Update the res/xml/plugins.xml to be the same as the one found in framework/res/xml/plugins.xml

