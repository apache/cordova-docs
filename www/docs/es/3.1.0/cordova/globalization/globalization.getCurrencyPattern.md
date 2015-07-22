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

# globalization.getCurrencyPattern

Devuelve una cadena de patrón para analizar los valores de divisas según las preferencias del usuario y código de moneda ISO 4217 del cliente y el formato.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## Descripción

Devuelve el patrón a la `successCallback` con un objeto de `properties` como un parámetro. Ese objeto debe contener las siguientes propiedades:

*   **patrón**: el patrón de la moneda para analizar los valores de la moneda y el formato. Los patrones siguen Unicode estándar técnico #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **código**: código de divisa de la ISO 4217 para el patrón. *(String)*

*   **fracción**: el número de dígitos fraccionarios a utilizar al análisis sintáctico y el formato de moneda. *(Número)*

*   **rounding**: el redondeo incrementar para usar cuando el análisis sintáctico y formato. *(Número)*

*   **decimal**: el símbolo decimal a usar para parsear y formato. *(String)*

*   **grouping**: el símbolo de la agrupación para analizar y dar formato. *(String)*

El parámetro entrantes `currencyCode` debe ser una `String` de uno de los códigos de moneda ISO 4217, por ejemplo 'USD'.

Si hay un error obteniendo el patrón, entonces el `errorCallback` se ejecuta con un `GlobalizationError` objeto como parámetro. Código esperado del error es`GlobalizationError.FORMATTING\_ERROR`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS

## Ejemplo rápido

Cuando el navegador se establece en la localidad de `en\_US` y la moneda seleccionada es dólares de los Estados Unidos, este ejemplo muestra un cuadro de diálogo emergente con texto similar a los resultados que siguen:

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: '  + pattern.pattern  + '\n' +
                  'code: '     + pattern.code     + '\n' +
                  'fraction: ' + pattern.fraction + '\n' +
                  'rounding: ' + pattern.rounding + '\n' +
                  'decimal: '  + pattern.decimal  + '\n' +
                  'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );
    

Resultado esperado:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getCurrencyPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'code: '     + pattern.code     + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>