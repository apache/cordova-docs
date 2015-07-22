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

# globalization.numberToString

Devuelve un número con formato como una cadena según las preferencias del usuario del cliente.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

## Descripción

Devuelve la cadena con formato de número a la `successCallback` con un objeto de `properties` como un parámetro. Ese objeto debe tener una `value` de propiedad con un valor de `String`.

Si hay un error de formato del número, entonces el `errorCallback` ejecuta con un objeto `GlobalizationError` como un parámetro. Código esperado del error es `GlobalizationError.FORMATTING\_ERROR`.

El parámetro `options` es opcional, y sus valores por defecto son:

    {type:'decimal'}
    

El `options.type` puede ser 'decimal', 'percent' o 'currency'.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 8

## Ejemplo rápido

Cuando el navegador se establece en la localidad de `en\_US`, muestra un cuadro de diálogo emergente con texto similar a `number: 3.142`:

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>numberToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.numberToString(
            3.1415926,
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for number</button>
      </body>
    </html>