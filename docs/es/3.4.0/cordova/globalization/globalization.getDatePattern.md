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