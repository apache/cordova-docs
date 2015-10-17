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

title: openDatabase
---

openDatabase
===============

Returns a new [Database](database/database.html) object.

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);

Description
-----------

window.openDatabase returns a new [Database](database/database.html) object.

This method will create a new SQL Lite [Database](database/database.html) and return a [Database](database/database.html) object.  Use the [Database](database/database.html) Object to manipulate the data.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone

Quick Example
-------------

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.7.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
			var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
        }
		
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Open Database</p>
      </body>
    </html>
