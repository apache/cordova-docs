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


# Eventos

> Eventos de ciclo de vida de Cordova.

## Tipos de eventos

*   deviceready
*   pause
*   resume
*   online
*   offline
*   backbutton
*   batterycritical
*   batterylow
*   batterystatus
*   menubutton
*   searchbutton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## Acceso a la función

Desde la versión 3.0, batería Cordova implementos y otras API de nivel de dispositivo como *plugins*. Acceso a todos los demás eventos no relacionados con el estado de la batería están habilitados de forma predeterminada. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para habilitar o deshabilitar eventos de batería:

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Battery">
            <param name="android-package" value="org.apache.cordova.BatteryListener" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Battery">
            <param name="blackberry-package" value="org.apache.cordova.battery.Battery" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.app"          required="true" version="1.0.0.0" />
        <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
        <feature id="blackberry.system.event" required="true" version="1.0.0.0" />
        

*   (en iOS`config.xml`)
    
        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>
        

*   Tizen (en`config.xml`)
    
        <feature name="http://tizen.org/api/systeminfo" required="true"/>
        
    
    Referencia: [aplicación manifiesto de aplicación Web Tizen][1]

 [1]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.


# deviceready

El evento se desencadena cuando Cordova está completamente cargado.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Detalles

Este evento es esencial para cualquier aplicación. Señales de que dispositivo de Cordova APIs han cargado y están listas para acceder.

Córdoba se compone de dos bases de código: nativo y JavaScript. Mientras se carga el código nativo, muestra una imagen de carga personalizada. Sin embargo, JavaScript sólo carga una vez que el DOM cargas. Esto significa que la aplicación web potencialmente puede llamar a una función Cordova JavaScript antes el código nativo correspondiente está disponible.

El evento `deviceready` se desencadena una vez Cordova ha cargado completamente. Una vez los fuegos del evento, con seguridad puede hacer llamadas a APIs de Cordova. Aplicaciones típicamente Instale un detector de eventos con `document.addEventListener` una vez que ha cargado el DOM del documento HTML.

El evento `deviceready` se comporta algo diferentemente de otros. Cualquier controlador de eventos registrado después de los fuegos de `deviceready` evento tiene su función de callback llamada inmediatamente.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# pause

El evento se desencadena cuando una aplicación se coloca en el fondo.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Detalles

El evento de `pause` se desencadena cuando la plataforma nativa pone la aplicación en el fondo, normalmente cuando el usuario cambia a otra aplicación.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("pause", onPause, false);
        }
    
        // Handle the pause event
        //
        function onPause() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS rarezas

En el `pause` controlador, todas las llamadas a la API de Córdoba o plugins nativos que atraviesan Objective-C no funciona, junto con cualquier llamadas interactivas, tales como alertas o `console.log()` . Sólo son procesados cuando se reanuda la aplicación, en el siguiente bucle ejecución.

El evento específico de iOS `resign` está disponible como una alternativa para hacer una` pause` y detecta cuando los usuarios activar el botón de **Lock** bloquear el dispositivo con la aplicación que se ejecuta en primer plano. Si la aplicación (y dispositivo) está habilitados para multitarea, esto está emparejado con un evento posterior `pause`, pero sólo bajo iOS 5. En efecto, todas las apps bloqueadas en iOS 5 que tienen habilitado multi-tasking son empujadas al fondo. Para que aplicaciones seguirá corriendo cuando encerrado bajo iOS 5, deshabilitar multi-tasking de la aplicación estableciendo [UIApplicationExitsOnSuspend][1] a `YES`. Debe ejecutar cuando se trabó en iOS 4, que esta configuración no importa.

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html


# resume

El evento se desencadena cuando una aplicación se recupera desde el fondo.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Detalles

El evento `resume` se desencadena cuando la plataforma nativa saca la aplicación del fondo.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("resume", onResume, false);
        }
    
        // Handle the resume event
        //
        function onResume() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS rarezas

Cualquier función interactiva llamado desde un controlador de eventos de `pausa` después ejecuta cuando se reanuda la aplicación, indicada por el evento `resume`. Estos incluyen alertas, `console.log()` y ninguna llamada de plugins o la API de Cordova, que pasan a través de Objective-C.

*   evento **active**
    
    El evento específico de iOS `active` está disponible como una alternativa para `resume` y detecta cuando los usuarios desactivan el botón de **Lock** para desbloquear el dispositivo con la aplicación que se ejecuta en primer plano. Si la aplicación (y dispositivo) está habilitados para multitarea, esto está emparejado con un evento posterior `resume`, pero sólo bajo iOS 5. En efecto, todas las apps bloqueadas en iOS 5 que tienen habilitado multi-tasking son empujadas al fondo. Para que aplicaciones seguirá corriendo cuando encerrado bajo iOS 5, deshabilitar multi-tasking de la aplicación estableciendo [UIApplicationExitsOnSuspend][1] a `YES`. Debe ejecutar cuando se trabó en iOS 4, que esta configuración no importa.

*   evento **resume**
    
    Cuando se llama desde un controlador de eventos de `resume`, funciones interactivas como `alert()` necesitan ser envuelto en una llamada `setTimeout()` con un valor de timeout de cero, o si la aplicación se bloquea. Por ejemplo:
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html


# online

Este evento se desencadena cuando una aplicación va en línea, y el dispositivo se conecta a Internet.

    document.addEventListener("online", yourCallbackFunction, false);
    

## Detalles

El evento `online` se desencadena cuando un dispositivo previamente inconexos recibe una conexión de red para permitir un acceso a las aplicaciones para Internet. Se basa en la misma información que la API de conexión y fuegos cuando el valor de `connection.type` se convierte en `NONE`.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Tizen
*   Windows 8

## Ejemplo rápido

    document.addEventListener("online", onOnline, false);
    
    function onOnline() {
        // Handle the online event
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Online Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("online", onOnline, false);
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
        }
    
        // Handle the online event
        //
        function onOnline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS rarezas

Durante el arranque inicial, el primer evento `en línea` (si procede) al menos toma un segundo para disparar, antes de que `connection.type` es `desconocido`.

## Windows Phone 7 rarezas

Cuando se ejecuta en el emulador, la `connection.status` siempre es desconocido, así que este evento *no* es fuego.

## Windows Phone 8 rarezas

El emulador informa el tipo de conexión como `Cellular`, que no cambia, así que eventos *no* fuego.


# offline

El evento se desencadena cuando una aplicación está desconectada, y el dispositivo no está conectado a Internet.

    document.addEventListener("offline", yourCallbackFunction, false);
    

## Detalles

El evento `offline` se desencadena cuando un dispositivo conectado previamente pierde una conexión de red para que una aplicación no puede acceder a Internet. Se basa en la misma información que la API de conexión y se desencadena cuando el `connection.type` cambia de `ninguno` a cualquier otro valor.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Tizen
*   Windows 8

## Ejemplo rápido

    document.addEventListener("offline", onOffline, false);
    
    function onOffline() {
        // Handle the offline event
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Offline Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("offline", onOffline, false);
        }
    
        // Handle the offline event
        //
        function onOffline() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS rarezas

Durante el arranque inicial, el primer evento offline (si es aplicable) tarda al menos un segundo en fuego.

## Windows Phone 7 rarezas

Cuando se ejecuta en el emulador, la `connection.status` siempre es desconocido, así que este evento no se ** fuego.

## Windows Phone 8 rarezas

El emulador informa el tipo de conexión como `celular`, que no cambia, así que el evento *no se* fuego.


# backbutton

El evento se desencadena cuando el usuario presiona el botón back.

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## Detalles

Para reemplazar el comportamiento predeterminado de botón atrás, registrar un detector de eventos para el evento `backbutton`, típicamente llamando `document.addEventListener` una vez que reciba el evento `deviceready`. Ya no es necesario llamar a cualquier otro método para reemplazar el comportamiento del botón atrás.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   Windows Phone 7 y 8

## Ejemplo rápido

    document.addEventListener("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
    
        // Handle the back button
        //
        function onBackKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# batterycritical

El evento se desencadena cuando la batería alcanza el nivel umbral crítico.

    window.addEventListener("batterycritical", yourCallbackFunction, false);
    

## Detalles

El evento se desencadena cuando el porcentaje de carga de la batería ha alcanzado el umbral crítico de batería. El valor es específica del dispositivo.

El controlador `batterycritical` se pasa un objeto que contiene dos propiedades:

*   **level**: el porcentaje de carga de la batería (0-100). *(Número)*

*   **isPlugged**: un valor booleano que indica si el dispositivo está conectado pulg *(Boolean)*

Las aplicaciones normalmente deben utilizar `window.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   Tizen

## Ejemplo rápido

    window.addEventListener("batterycritical", onBatteryCritical, false);
    
    function onBatteryCritical(info) {
        // Handle the battery critical event
        alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Battery Critical Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.addEventListener("batterycritical", onBatteryCritical, false);
        }
    
        // Handle the batterycritical event
        //
        function onBatteryCritical(info) {
            alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# batterylow

El evento se desencadena cuando la batería ha alcanzado el umbral de bajo nivel.

    window.addEventListener("batterylow", yourCallbackFunction, false);
    

## Detalles

El evento se desencadena cuando el porcentaje de carga de la batería ha alcanzado el umbral de batería baja, el valor específico del dispositivo.

El controlador de `batterylow` se pasa un objeto que contiene dos propiedades:

*   **nivel**: el porcentaje de carga de la batería (0-100). *(Número)*

*   **isPlugged**: un valor booleano que indica si el dispositivo está conectado pulg *(Boolean)*

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   Tizen

## Ejemplo rápido

    window.addEventListener("batterylow", onBatteryLow, false);
    
    function onBatteryLow(info) {
        // Handle the battery low event
        alert("Battery Level Low " + info.level + "%");
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.addEventListener("batterylow", onBatteryLow, false);
        }
    
        // Handle the batterylow event
        //
        function onBatteryLow(info) {
            alert("Battery Level Low " + info.level + "%");
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# batterystatus

El evento se desencadena cuando hay un cambio en el estado de la batería.

    window.addEventListener("batterystatus", yourCallbackFunction, false);
    

## Detalles

Este evento se desencadena cuando cambia el porcentaje de carga de la batería en menos de 1 por ciento, o si el aparato está enchufado o desenchufado.

El controlador del estado de batería se pasa un objeto que contiene dos propiedades:

*   **nivel**: el porcentaje de carga de la batería (0-100). *(Número)*

*   **isPlugged**: un valor booleano que indica si el dispositivo está conectado pulg *(Boolean)*

Las aplicaciones normalmente deben utilizar `window.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   iOS
*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   Windows Phone 7 y 8
*   Tizen

## Windows Phone 7 y 8 rarezas

Windows Phone 7 no proporciona una API nativa para determinar el nivel de batería, lo que `level` no está disponible. El `isPlugged` parámetro *es* apoyado.

## Ejemplo rápido

    window.addEventListener("batterystatus", onBatteryStatus, false);
    
    function onBatteryStatus(info) {
        // Handle the online event
        console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
    }
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.addEventListener("batterystatus", onBatteryStatus, false);
        }
    
        // Handle the batterystatus event
        //
        function onBatteryStatus(info) {
            console.log("Level: " + info.level + " isPlugged: " + info.isPlugged);
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# menubutton

El evento se desencadena cuando el usuario presiona el botón de menú.

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## Detalles

Aplicar un controlador de eventos reemplaza el comportamiento de botón de menú predeterminado.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)

## Ejemplo rápido

    document.addEventListener("menubutton", onMenuKeyDown, false);
    
    function onMenuKeyDown() {
        // Handle the back button
    }
    

## Ejemplo completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Menu Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }
    
        // Handle the menu button
        //
        function onMenuKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# searchbutton

El evento se desencadena cuando el usuario presiona el botón de búsqueda en Android.

    document.addEventListener("searchbutton", yourCallbackFunction, false);
    

## Detalles

Si necesita reemplazar el comportamiento de botón de búsqueda por defecto en Android puede registrar un detector de eventos para el evento 'botón'.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   Android

## Ejemplo rápido

    document.addEventListener("searchbutton", onSearchKeyDown, false);
    
    function onSearchKeyDown() {
        // Handle the search button
    }
    

## Ejemplo completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Search Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }
    
        // Handle the search button
        //
        function onSearchKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# startcallbutton

El evento se desencadena cuando el usuario presiona el botón de llamada de inicio.

    document.addEventListener("startcallbutton", yourCallbackFunction, false);
    

## Detalles

Si necesita reemplazar el comportamiento predeterminado de llamada start puede registrar un detector de eventos para el evento `startcallbutton`.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   BlackBerry WebWorks (OS 5.0 y superiores)

## Ejemplo rápido

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## Ejemplo completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Start Call Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }
    
        // Handle the start call button
        //
        function onStartCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# endcallbutton

Este evento se desencadena cuando el usuario presiona el botón de llamada final.

    document.addEventListener("endcallbutton", yourCallbackFunction, false);
    

## Detalles

El evento reemplaza el comportamiento predeterminado de llamada final.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   BlackBerry WebWorks (OS 5.0 y superiores)

## Ejemplo rápido

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);
    
    function onEndCallKeyDown() {
        // Handle the end call button
    }
    

## Ejemplo completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>End Call Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("endcallbutton", onEndCallKeyDown, false);
        }
    
        // Handle the end call button
        //
        function onEndCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumedownbutton

El evento se desencadena cuando el usuario presiona el volumen botón.

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);
    

## Detalles

Si necesita reemplazar el volumen predeterminado por comportamiento puede registrar un detector de eventos para el evento `volumedownbutton`.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   BlackBerry WebWorks (OS 5.0 y superiores)

## Ejemplo rápido

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
    
    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }
    

## Ejemplo completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Down Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        }
    
        // Handle the volume down button
        //
        function onVolumeDownKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumeupbutton

El evento se desencadena cuando el usuario presiona el botón de volumen.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);
    

## Detalles

Si necesita reemplazar el volumen predeterminado del comportamiento puede registrar un detector de eventos para el evento `volumeupbutton`.

Las aplicaciones normalmente deben utilizar `document.addEventListener` para conectar un detector de eventos una vez que se desencadene el evento `deviceready`.

## Plataformas soportadas

*   BlackBerry WebWorks (OS 5.0 y superiores)

## Ejemplo rápido

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
    
    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }
    

## Ejemplo completo

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Up Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }
    
        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
