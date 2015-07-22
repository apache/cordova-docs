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

# localStorage

Proporciona acceso a de la W3C [interfaz Web Storage][1]

 [1]: http://dev.w3.org/html5/webstorage/#the-localstorage-attribute

    var permanentStorage = window.localStorage;
    var tempStorage = window.sessionStorage;
    

## Métodos

*   **clave**: devuelve el nombre de la llave en la posición especificada.

*   **getItem**: devuelve el elemento identificado por la clave especificada.

*   **setItem**: asigna el valor de un elemento con llave.

*   **removeItem**: quita el elemento identificado por la clave especificada.

*   **borrar**: elimina todos los pares clave/valor.

## Detalles

La `window.localStorage` interfaz implementa del W3C [interfaz Web Storage][2]. Una aplicación puede utilizar para guardar los datos persistentes usando pares de clave y valor. La `window.sessionStorage` interfaz funciona del mismo modo en todos los sentidos, excepto que todos los datos se borra cada vez que la aplicación se cierra. Cada base de datos proporciona un espacio de nombre separado.

 [2]: http://dev.w3.org/html5/webstorage/

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 6.0 o superior)
*   iOS
*   Tizen
*   Windows Phone 7 y 8

## Ejemplo rápido clave

    var keyName = window.localStorage.key(0);
    

## Ejemplo rápido Item set

    window.localStorage.setItem("key", "value");
    

## Conseguir Item ejemplo rápido

        var value = window.localStorage.getItem("key");
        // value is now equal to "value"
    

## Quitar elemento ejemplo rápido

        window.localStorage.removeItem("key");
    

## Claro ejemplo rápido

        window.localStorage.clear();
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Storage Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.localStorage.setItem("key", "value");
            var keyname = window.localStorage.key(i);
            // keyname is now equal to "key"
            var value = window.localStorage.getItem("key");
            // value is now equal to "value"
            window.localStorage.removeItem("key");
            window.localStorage.setItem("key2", "value2");
            window.localStorage.clear();
            // localStorage is now empty
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>localStorage</p>
      </body>
    </html>
    

## Windows Phone 7 rarezas

Notación de puntos es *no* disponible en Windows Phone 7. Asegúrese de utilizar `setItem` o `getItem` , en lugar de acceder a las teclas directamente desde el objeto de almacenamiento, tales como`window.localStorage.someKey`.