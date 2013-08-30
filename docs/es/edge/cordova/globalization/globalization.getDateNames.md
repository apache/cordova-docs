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

# globalization.getDateNames

Devuelve una matriz de los nombres de los meses o días de la semana, dependiendo de las preferencias del usuario y calendario del cliente.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## Descripción

Devuelve la matriz de nombres a la `successCallback` con un objeto de `properties` como un parámetro. Ese objeto contiene una propiedad de `value` con una `Array` de valores de `String`. Los nombres de funciones de matriz a partir de ya sea el primer mes en el año o el primer día de la semana, dependiendo de la opción seleccionada.

Si hay un error en la obtención de los nombres, entonces el `errorCallback` ejecuta con un objeto `GlobalizationError` como un parámetro. Código esperado del error es`GlobalizationError.UNKNOWN\_ERROR`.

El `options` parámetro es opcional, y sus valores por defecto son:

    {type:'wide', item:'months'}
    

El valor de `options.type` puede ser `narrow` o `wide`.

El valor de `options.item` puede ser `months` o `days`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 8

## Ejemplo rápido

Cuando el navegador se establece en la localidad de `en\_US`, este ejemplo muestra una serie de doce diálogos popup, uno por mes, con un texto similar a `month: January`:

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDateNames Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateNames() {
          navigator.globalization.getDateNames(
            function (names) {
              for (var i=0; i<names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
              }
            },
            function () {alert('Error getting names\n');},
            {type:'wide', item:'months'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDateNames()">Click for date names</button>
      </body>
    </html>