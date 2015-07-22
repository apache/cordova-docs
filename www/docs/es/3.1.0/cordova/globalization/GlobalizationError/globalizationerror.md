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

# GlobalizationError

Un objeto que representa un error de la API de la globalización.

## Propiedades

*   **Código**: Uno de los siguientes códigos que representa el tipo de error *(Número)* 
    *   GlobalizationError.UNKNOWN _ ERROR: 0
    *   GlobalizationError.FORMATTING _ ERROR: 1
    *   GlobalizationError.PARSING _ ERROR: 2
    *   GlobalizationError.PATTERN _ ERROR: 3
*   **mensaje**: un mensaje de texto que incluye la explicación de los errores o detalles *(String)*

## Descripción

Este objeto es creado y poblada por Córdoba y regresó a una devolución de llamada en caso de error.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS

## Ejemplo rápido

Cuando se ejecuta el callback de error siguiente, se muestra un cuadro de diálogo emergente con el texto similar a `code: 3` y`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>GlobalizationError Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function successCallback(date) {
          alert('month:' + date.month +
                ' day:' + date.day +
                ' year:' + date.year + '\n');
        }
    
        function errorCallback(error) {
          alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };
    
        function checkError() {
          navigator.globalization.stringToDate(
            'notADate',
            successCallback,
            errorCallback,
            {selector:'foobar'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkError()">Click for error</button>
      </body>
    </html>