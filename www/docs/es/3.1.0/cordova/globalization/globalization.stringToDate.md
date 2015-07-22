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

# globalization.stringToDate

Analiza una fecha con formato como una cadena, según las preferencias del usuario y calendario usando la zona horaria del cliente, el cliente y devuelve el objeto correspondiente fecha.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## Descripción

Devuelve la fecha para la devolución de llamada de éxito con un objeto de `properties` como un parámetro. Ese objeto debe tener las siguientes propiedades:

*   **año**: el año de cuatro dígitos. *(Número)*

*   **mes**: mes de (0-11). *(Número)*

*   **día**: el día de (1-31). *(Número)*

*   **hora**: la hora de (0-23). *(Número)*

*   **minuto**: el minuto de (0-59). *(Número)*

*   **segundo**: el segundo de (0-59). *(Número)*

*   **milisegundo**: los milisegundos (de 0-999), no está disponibles en todas las plataformas. *(Número)*

El parámetro entrantes `dateString` debe ser de tipo `String`.

El parámetro `options` es opcional y por defecto para los siguientes valores:

    {formatLength:'short', selector:'date and time'}
    

El `options.formatLength` puede ser de `short`, `medium`, `long` o `full`. El `options.selector` puede ser la `date`, la `time` o la `date and time`.

Si hay un error al analizar la cadena de fecha, entonces el `errorCallback` ejecuta con un objeto `GlobalizationError` como un parámetro. Código esperado del error es `GlobalizationError.PARSING\_ERROR`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 8

## Ejemplo rápido

Cuando el navegador se establece en la localidad de `en\_US`, muestra un cuadro de diálogo emergente con texto similar al `month: 8 day: 25 year: 2012`. Tenga en cuenta que el mes entero es uno menos de la cadena, como el entero mes representa un índice de matriz.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToDate Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkStringDate() {
          navigator.globalization.stringToDate(
            '9/25/2012',
            function (date) {alert('month:' + date.month +
                                   ' day:' + date.day +
                                   ' year:' + date.year + '\n');},
            function () {alert('Error getting date\n');},
            {selector:'date'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkStringDate()">Click for parsed date</button>
      </body>
    </html>
    

## Windows Phone 8 rarezas

*   La opción `formatLength` admite valores sólo `short` y `full`.