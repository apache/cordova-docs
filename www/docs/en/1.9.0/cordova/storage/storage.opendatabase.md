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

open<a href="database/database.html">Database</a>
===============

Returns a new <a href="database/database.html">Database</a> object.

    var dbShell = window.open<a href="database/database.html">Database</a>(<a href="parameters/name.html">database_name</a>, <a href="parameters/version.html">database_version</a>, <a href="parameters/display_name.html">database_displayname</a>, <a href="parameters/size.html">database_size</a>);

Description
-----------

window.open<a href="database/database.html">Database</a> returns a new <a href="database/database.html">Database</a> object.

This method will create a new SQL Lite <a href="database/database.html">Database</a> and return a <a href="database/database.html">Database</a> object.  Use the <a href="database/database.html">Database</a> Object to manipulate the data.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 6.0 and higher)
- iPhone
- webOS

Quick Example
-------------

    var db = window.open<a href="database/database.html">Database</a>("test", "1.0", "Test DB", 1000000);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="storage.html">Storage</a> Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-1.9.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // Cordova is ready
        //
        function on<a href="../device/device.html">Device</a>Ready() {
			var db = window.open<a href="database/database.html">Database</a>("test", "1.0", "Test DB", 1000000);
        }
		
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Open <a href="database/database.html">Database</a></p>
      </body>
    </html>
