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

title: Storage
---

Storage
==========

> Provides access to the devices storage options.  

This API is based on the [W3C Web SQL [Database](database/database.html) Specification](http://dev.w3.org/html5/webdatabase/) and [W3C Web Storage API Specification](http://dev.w3.org/html5/webstorage/). Some devices already provide an implementation of this spec. For those devices, the built-in support is used instead of replacing it with PhoneGap's implementation. For devices that don't have storage support, PhoneGap's implementation should be compatible with the W3C specification.

Methods
-------

- [openDatabase](storage.opendatabase.html)

Arguments
---------

- [name](parameters/name.html)
- [version](parameters/version.html)
- [display_name](parameters/display_name.html)
- [size](parameters/size.html)

Objects
-------

- [Database](database/database.html)
- [SQLTransaction](sqltransaction/sqltransaction.html)
- [SQLResultSet](sqlresultset/sqlresultset.html)
- [SQLResultSetList](sqlresultsetlist/sqlresultsetlist.html)
- [SQLError](sqlerror/sqlerror.html)
- [localStorage](localstorage/localstorage.html)