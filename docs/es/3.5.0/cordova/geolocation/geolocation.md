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