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

# globalization.dateToString

Devuelve una fecha con formato como una cadena según la configuración regional del cliente y zona horaria.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## Descripción

Devuelve la fecha con formato `String` mediante una propiedad de `value` accesible desde el objeto pasado como parámetro a la `successCallback`.

El parámetro entrantes `date` debe ser de tipo `Date`.

Si hay un error de formato de la fecha, entonces el `errorCallback` ejecuta con un objeto `GlobalizationError` como un parámetro. Código esperado del error es `GlobalizationError.FORMATTING\_ERROR`.

El `options` parámetro es opcional, y sus valores por defecto son:

    {formatLength: selector de 'corto',: 'fecha y hora'}
    

El `options.formatLength` puede ser de `short`, `medium`, `long` o `full`.

El `options.selector` puede ser la `date`, la `time` o la `date and time`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 8

## Ejemplo rápido

Si el navegador está configurado para la localidad de `en\_US`, muestra un cuadro de diálogo emergente con texto similar a `date: 09/25/2012 16:21` utilizando las opciones predeterminadas:

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>dateToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateString() {
          navigator.globalization.dateToString(
            new Date(),
            function (date) {alert('date: ' + date.value + '\n');},
            function () {alert('Error getting dateString\n');,
            {formatLength:'short', selector:'date and time'}}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkDateString()">Click for date string</button>
      </body>
    </html>
    

## Windows Phone 8 rarezas

*   El `formatLength` sólo admite la opción `short` y `full` valores.