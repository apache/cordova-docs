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

# globalization.getFirstDayOfWeek

Devuelve el primer día de la semana según las preferencias del usuario y calendario del cliente.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

## Descripción

Los días de la semana están contados a partir de la 1, donde 1 se supone que es el domingo. Devuelve el día de la `successCallback` con un objeto de `properties` como un parámetro. Ese objeto debe tener una `value` de propiedad con un valor de `Number`.

Si hay un error obteniendo el patrón, entonces el `errorCallback` se ejecuta con un `GlobalizationError` objeto como parámetro. Código esperado del error es`GlobalizationError.UNKNOWN\_ERROR`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 8

## Ejemplo rápido

Cuando el navegador se establece en la localidad de `en\_US`, muestra un cuadro de diálogo emergente con texto similar a `day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getFirstDayOfWeek Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkFirstDay() {
          navigator.globalization.getFirstDayOfWeek(
            function (day) {alert('day: ' + day.value + '\n');},
            function () {alert('Error getting day\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkFirstDay()">Click for first day of week</button>
      </body>
    </html>