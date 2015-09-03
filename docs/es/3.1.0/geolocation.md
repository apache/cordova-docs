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


# Geolocalización

> El objeto de `geolocation` proporciona acceso a los datos de localización basado en GPS sensor del dispositivo o deducido de las señales de la red.

`Geolocation` proporciona información sobre la ubicación del dispositivo, como latitud y longitud. Fuentes comunes de información de localización incluyen el sistema de posicionamiento Global (GPS) y ubicación deducido de las señales de la red como dirección IP, direcciones de RFID, WiFi y Bluetooth MAC y celulares GSM/CDMA IDs. No hay ninguna garantía de que la API devuelve la ubicación real del dispositivo.

Esta API se basa en la [Especificación de API de geolocalización W3C][1] y sólo se ejecuta en dispositivos que ya no proporcionan una implementación.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**Nota de privacidad importante:** Recopilación y uso de datos de geolocalización plantea cuestiones de privacidad importante. Política de privacidad de su aplicación debe discutir cómo la aplicación utiliza los datos de geolocalización, si se comparte con cualquiera de las partes y el nivel de precisión de los datos (por ejemplo, código postal grueso, fino, nivel, etc.). Datos de geolocalización es generalmente considerados sensibles porque puede revelar paradero de una persona y, si está almacenado, la historia de sus viajes. Por lo tanto, además de política de privacidad de tu app, fuertemente considere dar un aviso de just-in-time antes de su aplicación acceder a los datos de geolocalización (si el sistema operativo del dispositivo ya no hacerlo). Que el aviso debe proporcionar la misma información mencionada, además de obtener un permiso del usuario (por ejemplo, presentando opciones para **Aceptar** y **No gracias**). Para obtener más información, por favor consulte a la guía de privacidad.

## Métodos

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## Argumentos

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## Objetos (sólo lectura)

*   Position
*   PositionError
*   Coordinates

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.GeoBroker" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>
        
        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>
        

*   (en iOS`config.xml`)
    
        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>
        
    
    Referencia: [manifiesto de aplicación para Windows Phone][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.


# geolocation.getCurrentPosition

Devuelve la posición actual del dispositivo como un objeto de `Position`.

    navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                             [geolocationError],
                                             [geolocationOptions]);
    

## Parámetros

*   **geolocationSuccess**: la devolución de llamada que se pasa a la posición actual.

*   **geolocationError**: *(opcional)* la devolución de llamada que se ejecuta si se produce un error.

*   **geolocationOptions**: *(opcional)* las opciones de geolocalización.

## Descripción

`geolocation.getCurrentPosition` es una función asincrónica. Devuelve la posición actual del dispositivo a la devolución de llamada `geolocationSuccess` con un `Position` de objeto como parámetro. Si hay un error, el callback `geolocationError` se pasa un objeto `PositionError`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                                'Longitude: '          + position.coords.longitude             + '<br />' +
                                'Altitude: '           + position.coords.altitude              + '<br />' +
                                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                                'Heading: '            + position.coords.heading               + '<br />' +
                                'Speed: '              + position.coords.speed                 + '<br />' +
                                'Timestamp: '          + position.timestamp                    + '<br />';
        }
    
        // onError Callback receives a PositionError object
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>


# geolocation.watchPosition

Relojes para cambios en la posición actual del dispositivo.

    var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                      [geolocationError],
                                                      [geolocationOptions]);
    

## Parámetros

*   **geolocationSuccess**: la devolución de llamada que se pasa a la posición actual.

*   **geolocationError**: (opcional) la devolución de llamada que se ejecuta si se produce un error.

*   **geolocationOptions**: opciones (opcional) la geolocalización.

## Devoluciones

*   **String**: devuelve un identificador de reloj que hace referencia el intervalo de posición del reloj. El id del reloj debe utilizarse con `geolocation.clearWatch` que para dejar de ver a los cambios de posición.

## Descripción

`geolocation.watchPosition` es una función asincrónica. Devuelve la posición actual del dispositivo cuando se detecta un cambio de posición. Cuando el dispositivo recupera una nueva ubicación, la devolución de llamada `geolocationSuccess` se ejecuta con un `Position` de objeto como parámetro. Si hay un error, el callback `geolocationError` se ejecuta con un objeto `PositionError` como parámetro.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    // Options: throw an error if no update is received every 30 seconds.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Throw an error if no update is received every 30 seconds
            var options = { timeout: 30000 };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
      </body>
    </html>


# geolocation.clearWatch

Deja de ver cambios en la ubicación del dispositivo al que hace referencia el parámetro `watchID`.

    navigator.geolocation.clearWatch(watchID);
    

## Parámetros

*   **watchID**: el id del intervalo `watchPosition` para despejar. (String)

## Descripción

La `geolocation.clearWatch` se detiene observando los cambios en la ubicación del dispositivo despejando la `geolocation.watchPosition` hace referenciada a `watchID`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // Opciones: ver los cambios en la posición y usar más 
    // exacta posición disponible del método de adquisición.
    //
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });
    
    // ...later on...
    
    navigator.geolocation.clearWatch(watchID);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        var watchID = null;
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Get the most accurate position updates available on the
            // device.
            var options = { enableHighAccuracy: true };
            watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;
        }
    
        // clear the watch that was started earlier
        //
        function clearWatch() {
            if (watchID != null) {
                navigator.geolocation.clearWatch(watchID);
                watchID = null;
            }
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
              alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Watching geolocation...</p>
            <button onclick="clearWatch();">Clear Watch</button>
      </body>
    </html>


# Coordenadas

Un conjunto de propiedades que describen las coordenadas geográficas de posición.

## Propiedades

*   **Latitude**: latitud en grados decimales. *(Número)*

*   **longitud**: longitud en grados decimales. *(Número)*

*   **altitud**: altura de la posición en metros por encima del elipsoide. *(Número)*

*   **exactitud**: nivel de precisión de las coordenadas de latitud y longitud en metros. *(Número)*

*   **altitudeAccuracy**: nivel de precisión de las coordenadas de altitud en metros. *(Número)*

*   **Dirección**: dirección del recorrido, especificado en grados contando hacia la derecha en relación con el norte verdadero. *(Número)*

*   **velocidad**: velocidad actual del dispositivo especificado en metros por segundo. *(Número)*

## Descripción

El `Coordinates` objeto está unido a la `Position` objeto que está disponible para las funciones de devolución de llamada en las solicitudes para la posición actual.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // onSuccess Callback
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback
    //
    var onError = function() {
        alert('onError!');
    };
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Geolocation Position Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // Display `Position` properties from the geolocation
        //
        function onSuccess(position) {
            var div = document.getElementById('myDiv');
    
            div.innerHTML = 'Latitude: '             + position.coords.latitude         + '<br/>' +
                            'Longitude: '            + position.coords.longitude        + '<br/>' +
                            'Altitude: '             + position.coords.altitude         + '<br/>' +
                            'Accuracy: '             + position.coords.accuracy         + '<br/>' +
                            'Altitude Accuracy: '    + position.coords.altitudeAccuracy + '<br/>' +
                            'Heading: '              + position.coords.heading          + '<br/>' +
                            'Speed: '                + position.coords.speed            + '<br/>';
        }
    
        // Show an alert if there is a problem getting the geolocation
        //
        function onError() {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <div id="myDiv"></div>
      </body>
    </html>
    

## Rarezas Android

**altitudeAccuracy**: no compatible con dispositivos Android, regresando`null`.


# Posición

Contiene `Position` coordenadas y timestamp, creado por la API de geolocalización.

## Propiedades

*   **coordenadas**: un conjunto de coordenadas geográficas. *(Coordenadas)*

*   **timestamp**: fecha y hora de creación `coords` . *(Fecha)*

## Descripción

El `Position` objeto es creado y poblado por Córdoba y devuelve al usuario mediante una función de devolución de llamada.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo rápido

    // onSuccess Callback
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        // onSuccess Geolocation
        //
        function onSuccess(position) {
            var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '          + position.coords.latitude         + '<br />' +
                                'Longitude: '         + position.coords.longitude        + '<br />' +
                                'Altitude: '          + position.coords.altitude         + '<br />' +
                                'Accuracy: '          + position.coords.accuracy         + '<br />' +
                                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                                'Heading: '           + position.coords.heading          + '<br />' +
                                'Speed: '             + position.coords.speed            + '<br />' +
                                'Timestamp: '         + position.timestamp               + '<br />';
        }
    
            // onError Callback receives a PositionError object
            //
            function onError(error) {
                alert('code: '    + error.code    + '\n' +
                      'message: ' + error.message + '\n');
            }
    
        </script>
      </head>
      <body>
        <p id="geolocation">Finding geolocation...</p>
      </body>
    </html>


# PositionError

A `PositionError` objeto se pasa a la `geolocationError` devolución de llamada cuando se produce un error.

## Propiedades

*   **código**: uno de los códigos de error predefinido enumerados a continuación.

*   **mensaje**: mensaje de Error que describe los detalles del error encontrado.

## Constantes

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## Descripción

El `PositionError` objeto se pasa a la `geolocationError` función de devolución de llamada cuando se produce un error con geolocalización.

### `PositionError.PERMISSION_DENIED`

Regresó cuando el usuario no permite su aplicación recuperar información de la posición. Esto depende de la plataforma.

### `PositionError.POSITION_UNAVAILABLE`

Regresó cuando el dispositivo es capaz de recuperar una posición. En general esto significa que el dispositivo no tiene ninguna conectividad de red o no puede obtener una solución vía satélite.

### `PositionError.TIMEOUT`

Cuando el dispositivo es capaz de recuperar una posición dentro del tiempo especificado en el `geolocationOptions` ' `timeout` propiedad. Cuando se utiliza con `geolocation.watchPosition` , este error se podría pasar a la `geolocationError` "callback" cada `timeout` milisegundos.


# geolocationSuccess

Función del usuario que se ejecuta cuando una posición de geolocalización disponible (cuando se llama desde `geolocation.getCurrentPosition` ), o cuando cambia la posición (cuando se llama desde`geolocation.watchPosition`).

    function(position) {
        // Do something
    }
    

## Parámetros

*   **posición**: la posición de geolocalización devuelta por el dispositivo. *(Posición)*

## Ejemplo

    function geolocationSuccess(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    }


# geolocationError

Función de devolución de llamada del usuario que se ejecuta cuando hay un error para las funciones de geolocalización.

    function(error) {
        // Handle the error
    }
    

## Parámetros

*   **error**: el error devuelto por el dispositivo. *(PositionError)*


# geolocationOptions

Parámetros opcionales para personalizar la recuperación de la geolocalización`Position`.

    {maximumAge: 3000, timeout: 5000, enableHighAccuracy: true};
    

## Opciones

*   **enableHighAccuracy**: proporciona una pista que la aplicación necesita los mejores resultados posibles. De forma predeterminada, el dispositivo intentará recuperar un `Position` usando métodos basados en red. Al establecer esta propiedad en `true` dice el marco a utilizar métodos más precisos, como el posicionamiento satelital. *(Boolean)*

*   **tiempo de espera**: la longitud máxima de tiempo (en milisegundos) que está permitido el paso de la llamada a `geolocation.getCurrentPosition` o `geolocation.watchPosition` hasta el correspondiente `geolocationSuccess` devolución de llamada se ejecuta. Si el `geolocationSuccess` no se invoque "callback" dentro de este tiempo, el `geolocationError` devolución de llamada se pasa un `PositionError.TIMEOUT` código de error. (Tenga en cuenta que cuando se utiliza en conjunción con `geolocation.watchPosition` , el `geolocationError` "callback" podría ser llamado en un intervalo cada `timeout` milisegundos!) *(Número)*

*   **maximumAge**: aceptar un puesto en la memoria caché, cuya edad no es mayor que el tiempo especificado en milisegundos. *(Número)*

## Rarezas Android

Emuladores Android 2.x no devuelva un resultado de geolocalización a menos que el `enableHighAccuracy` opción se establece en`true`.
