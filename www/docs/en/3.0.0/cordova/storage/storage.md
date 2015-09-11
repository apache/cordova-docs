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

Storage
==========

> Provides access to the device's storage options.

This API offers storage options based on two different W3C
specifications:

* The
  [Web Storage API Specification](http://dev.w3.org/html5/webstorage/)
  allows you to access data via simple key/value pairs.  See the
  section on <a href="localstorage/localstorage.html">localStorage</a> for complete details on this interface.

* The
  [Web SQL <a href="database/database.html">Database</a> Specification](http://dev.w3.org/html5/webdatabase/)
  offers more full-featured database tables accessed via SQL queries.
  A summary of this interface appears immediately below.

Cordova provides access to both interfaces for the minority of devices
that don't already support them. Otherwise the built-in
implementations apply.

Methods
-------

- <a href="storage.opendatabase.html">open<a href="database/database.html">Database</a></a>

Arguments
---------

- <a href="parameters/name.html">database_name</a>
- <a href="parameters/version.html">database_version</a>
- <a href="parameters/display_name.html">database_displayname</a>
- <a href="parameters/size.html">database_size</a>

Objects
-------

- <a href="database/database.html">Database</a>
- <a href="sqltransaction/sqltransaction.html">SQLTransaction</a>
- <a href="sqlresultset/sqlresultset.html">SQLResultSet</a>
- <a href="sqlresultset/sqlresultset.html">SQLResultSet</a>RowList
- <a href="sqlerror/sqlerror.html">SQLError</a>

## Accessing the Feature

As of version 3.0, access to Storage APIs is built into Cordova, and
does not require using the CLI to add plugins as described in The
Command-line Interface.

If you are using the older set of Cordova tools that precede the CLI,
the following platform-specific configuration settings are still
required:

* Android (in `app/res/xml/config.xml`)

        <feature name="Storage">
            <param name="android-package" value="org.apache.cordova.Storage" />
        </feature>

* BlackBerry WebWorks (in `www/config.xml`)

        <feature id="blackberry.widgetcache" required="true" version="1.0.0.0" />

Some platforms may support this feature without requiring any special
configuration.  See Platform Support for an overview.
