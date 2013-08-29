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

> El `InAppBrowser` es un navegador web que se muestra en la aplicación cuando se llama `window.open`.

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    

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

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git
        $ cordova plugin rm org.apache.cordova.core.inappbrowser
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android (en`app/res/xml/config.xml`)
    
        < nombre de la función = "InAppBrowser" >< nombre param = "android-paquete" value="org.apache.cordova.InAppBrowser" / >< / característica >
        

*   (en iOS`config.xml`)
    
        < nombre de la función = "InAppBrowser" >< nombre param = "ios-paquete" value = "CDVInAppBrowser" / >< / característica >
        

*   Windows Phone 7 y 8 (en`config.xml`)
    
        < nombre de la función = "InAppBrowser" / >
        

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Ver soporte de plataforma para tener una visión general.

# addEventListener

> Añade un detector para un evento de la `InAppBrowser`.

    ref.addEventListener (eventname, "callback");
    

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

    var ref = window.open ('http://apache.org', '_blank', ' location = yes');
    ref.addEventListener ('loadstart', function() {alert(event.url);});
    

## Ejemplo completo

    <!DOCTYPE html >< html >< cabeza >< title > InAppBrowser.addEventListener ejemplo < / título >< de la escritura de tipo = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< de la escritura de tipo = "text/javascript" charset = "utf-8" > / / esperar a librerías de dispositivos API cargar / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / dispositivo APIs están disponibles / / function onDeviceReady() {var ref = window.open ('http://apache.org', '_blank', ' location = yes');
             ref.addEventListener ('loadstart', function(event) {alert (' empieza: ' + event.url);});
             ref.addEventListener ('loadstop', function(event) {alert (' detener: ' + event.url);});
             ref.addEventListener ('loaderror', function(event) {alert ('error: ' + event.message);});
             ref.addEventListener ('salida', function(event) {alert(event.type);});
        } < /script >< / cabeza >< cuerpo >< cuerpo / >< / html >
    

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

    var ref = window.open ('http://apache.org', '_blank', ' location = yes');
    var myCallback = function() {alert(event.url)}; ref.addEventListener ('loadstart', myCallback);
    ref.removeEventListener ('loadstart', myCallback);
    

## Ejemplo completo

    <!DOCTYPE html >< html >< cabeza >< title > InAppBrowser.removeEventListener ejemplo < / título >< de la escritura de tipo = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< de la escritura de tipo = "text/javascript" charset = "utf-8" > / / esperar a librerías de dispositivos API cargar / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / InAppBrowser global reference var iabRef = null;
    
        function iabLoadStart(event) {alert (event.type + '-' + event.url);
        } function iabLoadStop(event) {alert (event.type + '-' + event.url);
        } function iabLoadError(event) {alert (event.type + '-' + event.message);
        } function iabClose(event) {alert(event.type);
             iabRef.removeEventListener ('loadstart', iabLoadStart);
             iabRef.removeEventListener ('loadstop', iabLoadStop);
             iabRef.removeEventListener ('loaderror', iabLoadError);
             iabRef.removeEventListener ('salida', iabClose);
        } / / dispositivo APIs están disponibles / / function onDeviceReady() {iabRef = window.open ('http://apache.org', '_blank', ' location = yes');
             iabRef.addEventListener ('loadstart', iabLoadStart);
             iabRef.addEventListener ('loadstop', iabLoadStop);
             iabRef.removeEventListener ('loaderror', iabLoadError);
             iabRef.addEventListener ('salida', iabClose);
        } < /script >< / cabeza >< cuerpo >< cuerpo / >< / html >
    

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

    var ref = window.open ('http://apache.org', '_blank', ' location = yes');
    Ref.Close();
    

## Ejemplo completo

    <!DOCTYPE html >< html >< cabeza >< title > InAppBrowser.close ejemplo < / título >< de la escritura de tipo = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< de la escritura de tipo = "text/javascript" charset = "utf-8" > / / esperar a librerías de dispositivos API cargar / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / dispositivo APIs están disponibles / / function onDeviceReady() {var ref = window.open ('http://apache.org', '_blank', ' location = yes');
             / / cerrar InAppBrowser después de 5 segundos setTimeout(function() {ref.close();
             }, 5000);
        } < /script >< / cabeza >< cuerpo >< cuerpo / >< / html >
    

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

    <!DOCTYPE html >< html >< cabeza >< title > InAppBrowser.show ejemplo < / título >< de la escritura de tipo = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< de la escritura de tipo = "text/javascript" charset = "utf-8" > / / espera a Córdoba cargar / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / Córdoba está listo / / function onDeviceReady() {var ref = window.open ('http://apache.org', '_blank', ' oculto = yes');
             ref.addEventListener ('loadstop', function(event) {alert ('ventana en segundo plano cargado'); 
             });
             / / cerrar InAppBrowser después de 5 segundos setTimeout(function() {ref.close();
             }, 5000);
        } < /script >< / cabeza >< cuerpo >< cuerpo / >< / html >
    

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

    var ref = window.open ('http://apache.org', '_blank', ' location = yes');
    ref.addEventListener ('loadstop', function() {ref.executeSript ({archivo: "myscript.js"});});
    

## Ejemplo completo

    <!DOCTYPE html >< html >< cabeza >< title > InAppBrowser.executeScript ejemplo < / título >< de la escritura de tipo = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< de la escritura de tipo = "text/javascript" charset = "utf-8" > / / esperar a librerías de dispositivos API cargar / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / InAppBrowser global reference var iabRef = null;
    
        / / Inyectar nuestro JavaScript personalizado en la ventana de InAppBrowser / / function replaceHeaderImage() {iabRef.executeScript ({código: "var img=document.querySelector ('#header img'); IMG.src= 'http://cordova.apache.org/images/cordova_bot.png';"}, function() {alert ("imagen elemento exitosamente secuestrado");
            función de}} iabClose(event) {iabRef.removeEventListener ('loadstop', replaceHeaderImage);
             iabRef.removeEventListener ('salida', iabClose);
        } / / dispositivo APIs están disponibles / / function onDeviceReady() {iabRef = window.open ('http://apache.org', '_blank', ' location = yes');
             iabRef.addEventListener ('loadstop', replaceHeaderImage);
             iabRef.addEventListener ('salida', iabClose);
        } < /script >< / cabeza >< cuerpo >< cuerpo / >< / html >
    

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

    var ref = window.open ('http://apache.org', '_blank', ' location = yes');
    ref.addEventListener ('loadstop', function() {ref.insertCSS ({archivo: "mystyles.css"});});
    

## Ejemplo completo

    <!DOCTYPE html >< html >< cabeza >< title > InAppBrowser.insertCSS ejemplo < / título >< de la escritura de tipo = "text/javascript" charset = "utf-8" src="cordova.js" >< / script >< de la escritura de tipo = "text/javascript" charset = "utf-8" > / / esperar a librerías de dispositivos API cargar / / document.addEventListener ("deviceready", onDeviceReady, false);
    
        / / InAppBrowser global reference var iabRef = null;
    
        / / Inyectar nuestros CSS personalizado en la ventana de InAppBrowser / / function changeBackgroundColor() {iabRef.insertCSS ({código: "cuerpo {background: #ffff00"}, function() {alert ("estilos alterado");
            función de}} iabClose(event) {iabRef.removeEventListener ('loadstop', changeBackgroundColor);
             iabRef.removeEventListener ('salida', iabClose);
        } / / dispositivo APIs están disponibles / / function onDeviceReady() {iabRef = window.open ('http://apache.org', '_blank', ' location = yes');
             iabRef.addEventListener ('loadstop', changeBackgroundColor);
             iabRef.addEventListener ('salida', iabClose);
        } < /script >< / cabeza >< cuerpo >< cuerpo / >< / html >
    

# InAppBrowserEvent

El objeto que se pasa a la función de devolución de llamada de un `addEventListener` llamado a un `InAppBrowser` objeto.

## Propiedades

*   **tipo**: eventname, ya sea `loadstart` , `loadstop` , `loaderror` , o `exit` . *(String)*

*   **URL**: la URL que se cargó. *(String)*

*   **código**: el código de error, sólo en el caso de `loaderror` . *(Número)*

*   **mensaje**: el mensaje de error, sólo en el caso de `loaderror` . *(String)*