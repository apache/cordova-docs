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

# InAppBrowser

> El `InAppBrowser` es una vista de navegador web que se muestra cuando se llama a `window.open()`, o cuando abre un enlace formado como `<a target = "_blank" >`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

**NOTA:** La ventana de InAppBrowser se comporta como un navegador web estándar y no puede acceder a Cordova APIs.

## Descripción

El objeto devuelto desde una llamada a `window.open`.

## Métodos

*   addEventListener
*   removeEventListener
*   close
*   show
*   executeScript
*   insertCSS

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add org.apache.cordova.inappbrowser
        $ cordova plugin ls
        [ 'org.apache.cordova.inappbrowser' ]
        $ cordova plugin rm org.apache.cordova.inappbrowser
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android (en`app/res/xml/config.xml`)
    
        <feature name="InAppBrowser">
            <param name="android-package" value="org.apache.cordova.InAppBrowser" />
        </feature>
        

*   (en iOS`config.xml`)
    
        <feature name="InAppBrowser">
            <param name="ios-package" value="CDVInAppBrowser" />
        </feature>
        

*   Windows Phone 7 y 8 (en`config.xml`)
    
        <feature name="InAppBrowser" />
        

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.

# addEventListener

> Añade un detector para un evento de la `InAppBrowser`.

    ref.addEventListener(eventname, callback);
    

*   **ref**: referencia a la `InAppBrowser` ventana *(InAppBrowser)*

*   **eventName**: el evento para escuchar *(String)*
    
    *   **loadstart**: evento desencadena cuando el `InAppBrowser` comienza a cargar una dirección URL.
    *   **loadstop**: evento desencadena cuando el `InAppBrowser` termina cargando una dirección URL.
    *   **loaderror**: evento desencadena cuando el `InAppBrowser` encuentra un error al cargar una dirección URL.
    *   **salida**: evento desencadena cuando el `InAppBrowser` se cierra la ventana.

*   **devolución de llamada**: la función que se ejecuta cuando se desencadene el evento. La función se pasa un `InAppBrowserEvent` objeto como parámetro.

## Plataformas soportadas

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 y 8

## Ejemplo rápido

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstart', function() { alert(event.url); });
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.addEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
             ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
             ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
             ref.addEventListener('exit', function(event) { alert(event.type); });
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# removeEventListener

> Elimina un detector para un evento de la `InAppBrowser`.

    ref.removeEventListener (eventname, "callback");
    

*   **ref**: referencia a la `InAppBrowser` ventana. *(InAppBrowser)*

*   **eventName**: dejar de escuchar para el evento. *(String)*
    
    *   **loadstart**: evento desencadena cuando el `InAppBrowser` comienza a cargar una dirección URL.
    *   **loadstop**: evento desencadena cuando el `InAppBrowser` termina cargando una dirección URL.
    *   **loaderror**: evento desencadena cuando el `InAppBrowser` se encuentra con un error al cargar una dirección URL.
    *   **salida**: evento desencadena cuando el `InAppBrowser` se cierra la ventana.

*   **devolución de llamada**: la función a ejecutar cuando se desencadene el evento. La función se pasa un `InAppBrowserEvent` objeto.

## Plataformas soportadas

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 y 8

## Ejemplo rápido

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var myCallback = function() { alert(event.url); }
    ref.addEventListener('loadstart', myCallback);
    ref.removeEventListener('loadstart', myCallback);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.removeEventListener Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        function iabLoadStart(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadStop(event) {
            alert(event.type + ' - ' + event.url);
        }
    
        function iabLoadError(event) {
            alert(event.type + ' - ' + event.message);
        }
    
        function iabClose(event) {
             alert(event.type);
             iabRef.removeEventListener('loadstart', iabLoadStart);
             iabRef.removeEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstart', iabLoadStart);
             iabRef.addEventListener('loadstop', iabLoadStop);
             iabRef.removeEventListener('loaderror', iabLoadError);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# cerrar

> Cierra la ventana de `InAppBrowser`.

    Ref.Close();
    

*   **ref**: referencia a la `InAppBrowser` ventana *(InAppBrowser)*

## Plataformas soportadas

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 y 8

## Ejemplo rápido

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.close();
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.close Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# Mostrar

> Muestra una ventana InAppBrowser que abrió sus puertas ocultada. Esto no tiene efecto si el InAppBrowser ya era visible.

    Ref.Show();
    

*   **ref:** referencia a la (ventana) InAppBrowser`InAppBrowser`)

## Plataformas soportadas

*   Android
*   BlackBerry
*   iOS

## Ejemplo rápido

    var ref = window.open ('http://apache.org', '_blank', ' oculto = yes');
    Ref.Show();
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.show Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Cordova is ready
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'hidden=yes');
             ref.addEventListener('loadstop', function(event) {
                 alert('background window loaded'); 
             });
             // close InAppBrowser after 5 seconds
             setTimeout(function() {
                 ref.close();
             }, 5000);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# executeScript

> Inyecta código JavaScript en la ventana de `InAppBrowser`

    ref.executeScript (datos, "callback");
    

*   **ref**: referencia a la `InAppBrowser` ventana. *(InAppBrowser)*

*   **injectDetails**: detalles de la secuencia de comandos para ejecutar, o especificar un `file` o `code` clave. *(Objeto)*
    
    *   **archivo**: URL de la secuencia de comandos para inyectar.
    *   **código**: texto de la escritura para inyectar.

*   **devolución de llamada**: la función que se ejecuta después de inyecta el código JavaScript.
    
    *   Si el script inyectado es de tipo `code` , la devolución de llamada se ejecuta con un solo parámetro, que es el valor devuelto por el guión, envuelto en un `Array` . Para los scripts de varias líneas, este es el valor devuelto de la última declaración, o la última expresión evaluada.

## Plataformas soportadas

*   Android
*   BlackBerry
*   iOS

## Ejemplo rápido

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeSript({file: "myscript.js"});
    });
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.executeScript Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom JavaScript into the InAppBrowser window
        //
        function replaceHeaderImage() {
            iabRef.executeScript({
                code: "var img=document.querySelector('#header img'); img.src='http://cordova.apache.org/images/cordova_bot.png';"
            }, function() {
                alert("Image Element Successfully Hijacked");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', replaceHeaderImage);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', replaceHeaderImage);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# insertCSS

> Inyecta CSS en la ventana de `InAppBrowser`.

    ref.insertCSS (datos, "callback");
    

*   **ref**: referencia a la `InAppBrowser` ventana *(InAppBrowser)*

*   **injectDetails**: detalles de la secuencia de comandos para ejecutar, o especificar un `file` o `code` clave. *(Objeto)*
    
    *   **archivo**: URL de la hoja de estilos para inyectar.
    *   **código**: texto de la hoja de estilos para inyectar.

*   **devolución de llamada**: la función que se ejecuta después de inyectar el CSS.

## Plataformas soportadas

*   Android
*   BlackBerry
*   iOS

## Ejemplo rápido

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    ref.addEventListener('loadstop', function() {
        ref.insertCSS({file: "mystyles.css"});
    });
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>InAppBrowser.insertCSS Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // Global InAppBrowser reference
        var iabRef = null;
    
        // Inject our custom CSS into the InAppBrowser window
        //
        function changeBackgroundColor() {
            iabRef.insertCSS({
                code: "body { background: #ffff00"
            }, function() {
                alert("Styles Altered");
            }
        }
    
        function iabClose(event) {
             iabRef.removeEventListener('loadstop', changeBackgroundColor);
             iabRef.removeEventListener('exit', iabClose);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
             iabRef = window.open('http://apache.org', '_blank', 'location=yes');
             iabRef.addEventListener('loadstop', changeBackgroundColor);
             iabRef.addEventListener('exit', iabClose);
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>
    

# InAppBrowserEvent

El objeto que se pasa a la función de callback de una llamada `addEventListener` en un objeto `InAppBrowser`.

## Propiedades

*   **tipo**: eventname, ya sea `loadstart` , `loadstop` , `loaderror` , o `exit` . *(String)*

*   **URL**: la URL que se cargó. *(String)*

*   **código**: el código de error, sólo en el caso de `loaderror` . *(Número)*

*   **mensaje**: el mensaje de error, sólo en el caso de `loaderror` . *(String)*