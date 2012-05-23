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

Storage
==========

> Provides access to the devices storage options.

This API is based on the [W3C Web SQL Database Specification](http://dev.w3.org/html5/webdatabase/) and [W3C Web Storage API Specification](http://dev.w3.org/html5/webstorage/). Some devices already provide an implementation of this spec. For those devices, the built-in support is used instead of replacing it with Cordova's implementation. For devices that don't have storage support, Cordova's implementation should be compatible with the W3C specification.

Methods
-------

- openDatabase

Arguments
---------

- database_name
- database_version
- database_displayname
- database_size

Objects
-------

- Database
- SQLTransaction
- SQLResultSet
- SQLResultSetList
- SQLError
- localStorage

Permissions
-----------

### Android

#### app/res/xml/plugins.xml

    <plugin name="Storage" value="org.apache.cordova.Storage"/>

#### app/AndroidManifest.xml

    @TODO

### Bada

    @TODO

### BlackBerry WebWorks

#### www/plugins.xml

    @TODO

#### www/config.xml

    <feature id="blackberry.widgetcache" required="true" version="1.0.0.0"/>

### iOS

    No plugin required.

### webOS

    @TODO

### Windows Phone

    No additional permissions required.
