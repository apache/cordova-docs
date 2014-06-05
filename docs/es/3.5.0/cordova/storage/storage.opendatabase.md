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

Devuelve un nuevo objeto de `base de datos`.

    var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
    

## Descripción

El método crea un nuevo SQL Database Lite y devuelve un objeto de `Database` que permite la manipulación de los datos.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 6.0 y superior)
*   iOS
*   Tizen

## Ejemplo rápido

    var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
    

## Ejemplo completo

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