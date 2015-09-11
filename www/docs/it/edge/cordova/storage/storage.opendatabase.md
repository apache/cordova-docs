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

# open<a href="database/database.html">Database</a>

Restituisce un nuovo `<a href="database/database.html">Database</a>` oggetto.

    var dbShell = window.open<a href="database/database.html">Database</a>(<a href="parameters/name.html">database_name</a>, <a href="parameters/version.html">database_version</a>, <a href="parameters/display_name.html">database_displayname</a>, <a href="parameters/size.html">database_size</a>);
    

## Descrizione

Il metodo crea un nuovo <a href="database/database.html">Database</a> di SQL Lite e restituisce un `<a href="database/database.html">Database</a>` oggetto che consente la manipolazione dei dati.

## <a href="../../config_ref/images.html">Piattaforme supportate</a>

*   Android
*   BlackBerry WebWorks (OS 6.0 e superiori)
*   iOS
*   Tizen

## Esempio rapido

    var db = window.open<a href="database/database.html">Database</a>("test", "1.0", "Test DB", 1000000);
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var db = window.open<a href="database/database.html">Database</a>("test", "1.0", "Test DB", 1000000);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Open <a href="database/database.html">Database</a></p>
      </body>
    </html>