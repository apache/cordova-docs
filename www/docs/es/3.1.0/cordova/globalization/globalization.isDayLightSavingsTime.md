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

# globalization.isDayLightSavingsTime

Indica si el horario de verano es en efecto para una fecha determinada usando la zona horaria y el calendario del cliente.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## Descripción

Indica o no horario de verano es en efecto el `successCallback` con un objeto de `properties` como un parámetro. Ese objeto debe tener una propiedad con un valor `Boolean` de `dst`. Un valor `true` indica que el horario de verano está en efecto para la fecha dada, y `false` indica que no es.

El parámetro entrantes `date` debe ser de tipo `Date`.

Si hay un error de lectura de la fecha, luego ejecuta el `errorCallback`. Código esperado del error es `GlobalizationError.UNKNOWN\_ERROR`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 8

## Ejemplo rápido

Durante el verano, y si el navegador está configurado para una zona horaria DST habilitado, esto debe mostrar un cuadro de diálogo emergente con texto similar a `dst: true`:

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>isDayLightSavingsTime Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDayLightSavings() {
          navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (date) {alert('dst: ' + date.dst + '\n');},
            function () {alert('Error getting names\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDayLightSavings()">Click for daylight savings</button>
      </body>
    </html>