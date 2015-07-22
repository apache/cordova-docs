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

# globalization.getPreferredLanguage

Obtener el identificador de cadena en el lenguaje actual del cliente.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

## Descripción

Devuelve el identificador de idioma a la `successCallback` con un objeto de `properties` como un parámetro. Ese objeto debe tener una `value` de propiedad con un valor de `String`.

Si hay un error al obtener el idioma, entonces el `errorCallback` ejecuta con un objeto `GlobalizationError` como un parámetro. Código esperado del error es `GlobalizationError.UNKNOWN\_ERROR`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 8

## Ejemplo rápido

Cuando el navegador se establece en la localidad de `en\_US`, esto debe mostrar un cuadro de diálogo emergente con el texto `language: English`:

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getPreferredLanguage Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLanguage() {
          navigator.globalization.getPreferredLanguage(
            function (language) {alert('language: ' + language.value + '\n');},
            function () {alert('Error getting language\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLanguage()">Click for language</button>
      </body>
    </html>
    

## Windows Phone 8 rarezas

*   Devuelve el código de dos letras ISO 639-1 para el lenguaje actual.