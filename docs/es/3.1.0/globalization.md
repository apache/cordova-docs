---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---


# Globalización

Obtiene información y realiza las operaciones específicas de la configuración regional del usuario y zona horaria.

## Objetos

*   GlobalizationError

## Métodos

*   globalization.getPreferredLanguage
*   globalization.getLocaleName
*   globalization.dateToString
*   globalization.stringToDate
*   globalization.getDatePattern
*   globalization.getDateNames
*   globalization.isDayLightSavingsTime
*   globalization.getFirstDayOfWeek
*   globalization.numberToString
*   globalization.stringToNumber
*   globalization.getNumberPattern
*   globalization.getCurrencyPattern

## Ámbito de variable

El objeto de `globalization` es un niño del objeto `navigator` y por lo tanto tiene alcance mundial.

    // The global globalization object
    var globalization = navigator.globalization;
    

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add org.apache.cordova.globalization
        $ cordova plugin ls
        [ 'org.apache.cordova.globalization' ]
        $ cordova plugin rm org.apache.cordova.globalization
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android (en`app/res/xml/config.xml`)
    
        <feature name="Globalization">
            <param name="android-package" value="org.apache.cordova.Globalization" />
        </feature>
        

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.


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


# globalization.getDatePattern

Devuelve una cadena de patrón para analizar las fechas según las preferencias del usuario del cliente y el formato.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## Descripción

Devuelve el patrón a la `successCallback`. El objeto se pasa como parámetro contiene las siguientes propiedades:

*   **patrón**: el patrón para analizar las fechas y el formato de fecha y hora. Los patrones siguen Unicode técnica estándar #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **zona horaria**: el nombre abreviado de la zona horaria en el cliente. *(String)*

*   **utc_offset**: la actual diferencia de segundos entre la zona horaria del cliente y el tiempo universal coordinado. *(Número)*

*   **dst_offset**: el desplazamiento horario actual en segundos entre no-horario del cliente de huso horario y día del cliente ahorro de zona horaria. *(Número)*

Si hay un error obteniendo el patrón, el `errorCallback` se ejecuta con un objeto `GlobalizationError` como un parámetro. Código esperado del error es `GlobalizationError.PATTERN\_ERROR`.

El parámetro `options` es opcional y por defecto para los siguientes valores:

    {formatLength:'short', selector:'date and time'}
    

El `options.formatLength` puede ser de `short`, `medium`, `long` o `full`. El `options.selector` puede ser la `date`, la `time` o la `date and time`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 8

## Ejemplo rápido

Cuando el navegador se establece en la localidad de `en\_US`, este ejemplo muestra como un cuadro de diálogo emergente con el texto `pattern: h: M/d/yyyy h:mm a`:

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDatePattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDatePattern() {
          navigator.globalization.getDatePattern(
            function (date) {alert('pattern: ' + date.pattern + '\n');},
            function () {alert('Error getting pattern\n');},
            {formatLength:'short', selector:'date and time'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDatePattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 rarezas

*   El `formatLength` sólo es compatible con `short` y `full` los valores.

*   El `pattern` para `date and time` patrón devuelve sólo formato datetime completo.

*   El `timezone` devuelve el nombre de zona de tiempo completo.

*   El `dst_offset` no se admite la propiedad, y siempre devuelve cero.


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


# globalization.stringToNumber

Analiza un número con formato como una cadena según las preferencias del usuario del cliente y devuelve el número correspondiente.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

## Descripción

Devuelve el número de la `successCallback` con un objeto de `properties` como un parámetro. Ese objeto debe tener una `value` de propiedad con un valor de `Number`.

Si hay un error al analizar la cadena número, entonces el `errorCallback` ejecuta con un objeto `GlobalizationError` como un parámetro. Código esperado del error es `GlobalizationError.PARSING\_ERROR`.

El parámetro `options` es opcional y por defecto para los siguientes valores:

    {type:'decimal'}
    

El `options.type` puede ser `decimal`, `percent` o `currency`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 8

## Ejemplo rápido

Cuando el navegador se establece en la localidad de `en\_US`, esto debe mostrar un cuadro de diálogo emergente con texto similar a `number: 1234.56`:

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToNumber Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.stringToNumber(
            '1234.56',
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for parsed number</button>
      </body>
    </html>


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


# GlobalizationError

Un objeto que representa un error de la API de la globalización.

## Propiedades

*   **Código**: Uno de los siguientes códigos que representa el tipo de error *(Número)* 
    *   GlobalizationError.UNKNOWN _ ERROR: 0
    *   GlobalizationError.FORMATTING _ ERROR: 1
    *   GlobalizationError.PARSING _ ERROR: 2
    *   GlobalizationError.PATTERN _ ERROR: 3
*   **mensaje**: un mensaje de texto que incluye la explicación de los errores o detalles *(String)*

## Descripción

Este objeto es creado y poblada por Córdoba y regresó a una devolución de llamada en caso de error.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS

## Ejemplo rápido

Cuando se ejecuta el callback de error siguiente, se muestra un cuadro de diálogo emergente con el texto similar a `code: 3` y`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
    

## Ejemplo completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>GlobalizationError Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function successCallback(date) {
          alert('month:' + date.month +
                ' day:' + date.day +
                ' year:' + date.year + '\n');
        }
    
        function errorCallback(error) {
          alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };
    
        function checkError() {
          navigator.globalization.stringToDate(
            'notADate',
            successCallback,
            errorCallback,
            {selector:'foobar'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkError()">Click for error</button>
      </body>
    </html>
