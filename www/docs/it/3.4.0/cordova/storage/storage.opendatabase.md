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

# openDatabase

Restituisce un nuovo `[Database](database/database.html)` oggetto.

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    

## Descrizione

Il metodo crea un nuovo [Database](database/database.html) di SQL Lite e restituisce un `[Database](database/database.html)` oggetto che consente la manipolazione dei dati.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 6.0 e superiori)
*   iOS
*   Tizen

## Esempio rapido

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
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