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

# window.open

Se abre una dirección URL en una nueva instancia de `InAppBrowser`, la instancia actual del navegador o el navegador del sistema.

    var ref = window.open(url, target, options);
    

*   **ref**: referencia a la `InAppBrowser` ventana. *(InAppBrowser)*

*   **URL**: el URL para cargar *(String)*. Llame a `encodeURI()` en este si la URL contiene caracteres Unicode.

*   **target**: el objetivo en el que se carga la URL, un parámetro opcional que se utiliza de forma predeterminada `_self`. *(String)*
    
    *   `_self`: se abre en el Cordova WebView si la URL está en la lista blanca, de lo contrario se abre en el `InAppBrowser`.
    *   `_blank`: abre en el `InAppBrowser`.
    *   `_system`: se abre en el navegador del sistema.

*   **options**: opciones para el `InAppBrowser`. Opcional, contumaz a: `location=yes`. *(String)*
    
    La cadena de `options` no debe contener ningún espacio en blanco, y los pares de nombre y valor de cada característica deben estar separados por una coma. Los nombres de función son minúsculas. Todas las plataformas admiten el valor siguiente:
    
    *   **location**: se establece en `yes` o `no` para activar o desactivar la barra de ubicación de la `InAppBrowser`.
    ## Android sólo
    
    *   **closebuttoncaption** - establece en una cadena que será el título para el botón "Done". 
    *   **hidden** - set ' Yes ' para crear el navegador y cargar la página, pero no lo demuestra. El evento load se activará cuando la carga está completa. Omitir o establecer que 'no' (por defecto) para que el navegador abra y carga normalmente. 
    *   **clearcache** - set ' Yes ' para tener la caché del navegador cookies antes de que se abra la nueva ventana
    *   **clearsessioncache** - set ' Yes ' para tener la caché de cookie de sesión antes de que se abra la nueva ventana
    ## iOS sólo
    
    *   **closebuttoncaption** - establece en una cadena que será el título para el botón "Done". Tenga en cuenta que deberás localizar este valor por sí mismo.
    *   **hidden** - set ' Yes ' para crear el navegador y cargar la página, pero no lo demuestra. El evento load se activará cuando la carga está completa. Omitir o establecer que 'no' (por defecto) para que el navegador abra y carga normalmente. 
    *   **barra de herramientas** - set al 'yes' o 'no' para activar o desactivar el la barra de herramientas para el InAppBrowser (por defecto 'yes')
    *   **enableViewportScale**: Set a `yes` o `no` para evitar viewport escalar a través de una etiqueta meta (por defecto a `no`).
    *   **mediaPlaybackRequiresUserAction**: Set a `yes` o `no` para evitar HTML5 audio o vídeo de reproducción automática (por defecto a `no`).
    *   **allowInlineMediaPlayback**: establecer a `yes` o `no` permiten la reproducción de medios en línea HTML5, mostrando en la ventana del navegador en lugar de una interfaz específica del dispositivo de reproducción. Elemento `video` de HTML también debe incluir el atributo de `webkit-playsinline` (por defecto a `no`)
    *   **keyboardDisplayRequiresUserAction**: se establece en `yes` o `no` para abrir el teclado cuando elementos de formulario reciben el foco mediante llamada de JavaScript de `focus()` (por defecto a `yes`).
    *   **suppressesIncrementalRendering**: se establece en `yes` o `no` para esperar hasta que todos los nuevos contenidos de vista se recibieron antes de ser prestados (por defecto a `no`).
    *   **presentationstyle**: se establece en `pagesheet`, `formsheet` o `fullscreen` para definir el [estilo de la presentación][1] (por defecto a `fullscreen`).
    *   **transitionstyle**: se establece en `fliphorizontal`, `crossdissolve` o `coververtical` para definir el [estilo de transición][2] (por defecto `coververtical`).

 [1]: http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle
 [2]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle

## Plataformas soportadas

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 y 8

## Ejemplo rápido

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>window.open Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // external url
            var ref = window.open(encodeURI('http://apache.org'), '_blank', 'location=yes');
            // relative document
            ref = window.open('next.html', '_self');
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>