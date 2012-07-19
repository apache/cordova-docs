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

Upgrading Cordova webOS
=======================

This document is for people who need to upgrade their Cordova versions from an older version to a current version of Cordova.

## Upgrade to 2.0.0 from 1.9.0 ##

1. remove cordova-1.9.0.js from your project

2. update the following line in your index.html:

    change this:
    <script type="text/javascript" src="cordova-1.9.0.js"></script> 
    
    to:
    <script type="text/javascript" src="cordova-2.0.0.js"></script> 

3. run the makefile to generate the newest version of the cordova-2.0.0.js file

## Upgrade to 1.9.0 from 1.8.1 ##

1. remove cordova-1.8.1.js from your project

2. update the following line in your index.html:

    change this:
    <script type="text/javascript" src="cordova-1.8.1.js"></script> 
    
    to:
    <script type="text/javascript" src="cordova-1.9.0.js"></script> 

3. run the makefile to generate the newest version of the cordova-1.9.0.js file