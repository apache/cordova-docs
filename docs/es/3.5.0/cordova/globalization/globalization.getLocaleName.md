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

# globalization.getLocaleName

Obtener el identificador de cadena para ajuste de configuración regional actual del cliente.

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

## Descripción

Devuelve el identificador de configuración regional para el `successCallback` con un objeto de `properties` como un parámetro. Ese objeto debe tener un `value` propiedad con un `String` valor.

Si hay un error al obtener la configuración regional, entonces el `errorCallback` ejecuta con un objeto `GlobalizationError` como un parámetro. Código esperado del error es`GlobalizationError.UNKNOWN\_ERROR`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 8

## Ejemplo rápido

Cuando el navegador se establece en la localidad de `en\_US`, muestra un cuadro de diálogo emergente con el texto `locale: en\_US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getLocaleName Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLocale() {
          navigator.globalization.getLocaleName(
            function (locale) {alert('locale: ' + locale.value + '\n');},
            function () {alert('Error getting locale\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLocale()">Click for locale</button>
      </body>
    </html>
    

## Windows Phone 8 rarezas

*   Devuelve el código de dos letras definido en ISO 3166 para el país/región actual.