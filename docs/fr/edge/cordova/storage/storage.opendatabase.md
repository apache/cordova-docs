---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# openDatabase

Retourne un nouveau `Database` objet.

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    

## Description

La méthode crée une nouvelle base de données du Lite de SQL et retourne un `Database` objet permettant la manipulation des données.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 6.0 et supérieur)
*   iOS
*   Paciarelli

## Petit exemple

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    

## Exemple complet

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