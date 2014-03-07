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

# globalization.getNumberPattern

Devuelve una cadena de patrón para analizar números según las preferencias del usuario del cliente y el formato.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

## Descripción

Devuelve el patrón a la `successCallback` con un objeto de `properties` como un parámetro. Ese objeto contiene las siguientes propiedades:

*   **patrón**: el patrón del número a analizar números y el formato. Los patrones siguen Unicode técnica estándar #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **símbolo**: el símbolo a usar cuando formateo y análisis, como un símbolo por ciento o moneda. *(String)*

*   **fracción**: el número de dígitos fraccionarios a utilizar al análisis sintáctico y el formato de números. *(Número)*

*   **redondeo**: el redondeo incremento para utilizar al análisis sintáctico y formato. *(Número)*

*   **positivo**: el símbolo para números positivos al análisis sintáctico y formato. *(String)*

*   **negativo**: el símbolo para números negativos al análisis sintáctico y formato. *(String)*

*   **decimal**: el símbolo decimal para analizar y dar formato. *(String)*

*   **agrupación**: el símbolo de la agrupación para analizar y dar formato. *(String)*

Si hay un error obteniendo el patrón, entonces el `errorCallback` ejecuta con un objeto `GlobalizationError` como un parámetro. Código esperado del error es `GlobalizationError.PATTERN\_ERROR`.

El parámetro `options` es opcional, y los valores por defecto son:

    {type:'decimal'}
    

El `options.type` puede ser `decimal`, `percent` o `currency`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 8

## Ejemplo rápido

Cuando el navegador se establece en la localidad de `en\_US`, esto debe mostrar un cuadro de diálogo emergente con texto similar a los resultados que siguen:

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                  'symbol: '   + pattern.symbol   + '\n' +
                                  'fraction: ' + pattern.fraction + '\n' +
                                  'rounding: ' + pattern.rounding + '\n' +
                                  'positive: ' + pattern.positive + '\n' +
                                  'negative: ' + pattern.negative + '\n' +
                                  'decimal: '  + pattern.decimal  + '\n' +
                                  'grouping: ' + pattern.grouping);},
        function () {alert('Error getting pattern\n');},
        {type:'decimal'}
    );
    

Resultados:

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getNumberPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'symbol: '   + pattern.symbol   + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'positive: ' + pattern.positive + '\n' +
                                      'negative: ' + pattern.negative + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 rarezas

*   El `pattern` no se admite la propiedad y retuens una cadena vacía.

*   El `fraction` no se admite la propiedad, y devuelve cero.